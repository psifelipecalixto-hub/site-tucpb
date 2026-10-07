// Resilient Data & Auth Layer powered by Google Firebase Firestore
// With automatic offline LocalStorage synchronization fallback
import { UserProfile } from '../types';
import { initialMembers } from '../data';
import { db } from './firebase';
import { collection, doc, getDocs, setDoc, deleteDoc } from 'firebase/firestore';
import { sanitizeMemberList } from './memberValidation';

export const DEFAULT_ADMIN_USER: UserProfile = initialMembers[0];

// Helper to access LocalStorage collections safely
export function getLocalCollection(table: string): any[] {
  const key = table === 'membros' ? 'tucpb_members' : table === 'tarefas' ? 'tucpb_tasks' : `tucpb_${table}`;
  try {
    const raw = localStorage.getItem(key);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        if (table === 'membros') {
          // Automatic purge of garbage/isolated tokens from bad backup (like '23fc7')
          const { valid, removedCount, removedItems } = sanitizeMemberList(parsed);
          if (removedCount > 0) {
            localStorage.setItem('tucpb_members', JSON.stringify(valid));
            for (const item of removedItems) {
              const docId = String(item.id || item.email);
              if (docId) deleteDoc(doc(db, 'membros', docId)).catch(() => {});
            }
          }
          const existingEmails = new Set(valid.map((u: any) => u.email?.toLowerCase().trim()));
          const missingDefaults = initialMembers.filter(def => !existingEmails.has(def.email.toLowerCase().trim()));
          if (missingDefaults.length > 0) {
            const merged = [...valid, ...missingDefaults];
            localStorage.setItem('tucpb_members', JSON.stringify(merged));
            return merged;
          }
          return valid;
        }
        return parsed;
      }
    }
  } catch (e) {
    console.warn(`Error reading local collection ${key}:`, e);
  }
  
  if (table === 'membros') {
    localStorage.setItem('tucpb_members', JSON.stringify(initialMembers));
    return initialMembers;
  }
  return [];
}

// Helper to sanitize objects for Firebase Firestore (removes undefined values)
export function sanitizeForFirestore(obj: any): any {
  if (obj === null || obj === undefined) return null;
  if (Array.isArray(obj)) {
    return obj.map(sanitizeForFirestore);
  }
  if (typeof obj === 'object' && !(obj instanceof Date)) {
    const cleaned: any = {};
    for (const [k, v] of Object.entries(obj)) {
      if (v === undefined) {
        cleaned[k] = '';
      } else if (v !== null && typeof v === 'object' && !(v instanceof Date)) {
        cleaned[k] = sanitizeForFirestore(v);
      } else {
        cleaned[k] = v;
      }
    }
    return cleaned;
  }
  return obj;
}

export function saveLocalCollection(table: string, items: any[]): void {
  const key = table === 'membros' ? 'tucpb_members' : table === 'tarefas' ? 'tucpb_tasks' : `tucpb_${table}`;
  try {
    localStorage.setItem(key, JSON.stringify(items));
  } catch (e) {
    console.warn(`Error saving local collection ${key}:`, e);
  }
}

class QueryChain {
  private table: string;
  private action: 'select' | 'insert' | 'update' | 'delete' = 'select';
  private selectFields: string = '*';
  private insertData: any[] = [];
  private updateData: any = {};
  private filters: Array<{ col: string; val: any }> = [];
  private isSingle: boolean = false;

  constructor(table: string) {
    this.table = table;
  }

  select(fields = '*') {
    this.action = 'select';
    this.selectFields = fields;
    return this;
  }

  insert(data: any | any[]) {
    this.action = 'insert';
    this.insertData = Array.isArray(data) ? data : [data];
    return this;
  }

  update(data: any) {
    this.action = 'update';
    this.updateData = data;
    return this;
  }

  delete() {
    this.action = 'delete';
    return this;
  }

  eq(col: string, val: any) {
    this.filters.push({ col, val });
    return this;
  }

  single() {
    this.isSingle = true;
    return this;
  }

  private executeLocally() {
    const items = getLocalCollection(this.table);

    if (this.action === 'select') {
      let filtered = [...items];
      for (const f of this.filters) {
        filtered = filtered.filter(item => {
          if (item[f.col] === undefined) return false;
          return String(item[f.col]).toLowerCase() === String(f.val).toLowerCase();
        });
      }
      if (this.isSingle) {
        if (filtered.length === 0) {
          return { data: null, error: { message: 'Registro não encontrado' } };
        }
        return { data: filtered[0], error: null };
      }
      return { data: filtered, error: null };
    }

    if (this.action === 'insert') {
      const dataToInsert = this.table === 'membros' ? sanitizeMemberList(this.insertData).valid : this.insertData;
      const merged = [...items, ...dataToInsert];
      saveLocalCollection(this.table, merged);
      return { data: dataToInsert, error: null };
    }

    if (this.action === 'update') {
      const updated = items.map(item => {
        const matches = this.filters.every(f => String(item[f.col]).toLowerCase() === String(f.val).toLowerCase());
        if (matches) {
          return { ...item, ...this.updateData };
        }
        return item;
      });
      saveLocalCollection(this.table, updated);
      return { data: updated, error: null };
    }

    if (this.action === 'delete') {
      const remaining = items.filter(item => {
        return !this.filters.every(f => String(item[f.col]).toLowerCase() === String(f.val).toLowerCase());
      });
      saveLocalCollection(this.table, remaining);
      return { data: null, error: null };
    }

    return { data: null, error: null };
  }

  async then(onfulfilled?: (value: any) => any, onrejected?: (reason: any) => any) {
    try {
      if (this.action === 'select') {
        const colRef = collection(db, this.table);
        const snapshot = await Promise.race([
          getDocs(colRef),
          new Promise<never>((_, reject) => setTimeout(() => reject(new Error("Timeout")), 4000))
        ]);

        if (snapshot && !snapshot.empty) {
          const cloudItems = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
          // Merge cloud with local to avoid losing anything
          const localItems = getLocalCollection(this.table);
          const combinedMap = new Map();
          for (const item of localItems) combinedMap.set((item as any).id || (item as any).email, item);
          for (const item of cloudItems) combinedMap.set((item as any).id || (item as any).email, item);
          let combined = Array.from(combinedMap.values());

          if (this.table === 'membros') {
            const { valid, removedCount, removedItems } = sanitizeMemberList(combined);
            if (removedCount > 0) {
              for (const r of removedItems) {
                const docId = String(r.id || r.email);
                if (docId) deleteDoc(doc(db, 'membros', docId)).catch(() => {});
              }
            }
            combined = valid;
          }

          saveLocalCollection(this.table, combined);

          let filtered = combined;
          for (const f of this.filters) {
            filtered = filtered.filter(item => {
              if (item[f.col] === undefined) return false;
              return String(item[f.col]).toLowerCase() === String(f.val).toLowerCase();
            });
          }

          if (this.isSingle) {
            const result = { data: filtered[0] || null, error: filtered.length === 0 ? { message: 'Não encontrado' } : null };
            return onfulfilled ? onfulfilled(result) : result;
          }

          const result = { data: filtered, error: null };
          return onfulfilled ? onfulfilled(result) : result;
        } else if (snapshot && snapshot.empty && this.table === 'membros') {
          // If cloud collection is currently empty, seed with initial members so cloud is populated
          const local = getLocalCollection(this.table);
          for (const m of local) {
            const docId = String(m.id || m.email || Date.now());
            setDoc(doc(db, this.table, docId), sanitizeForFirestore(m), { merge: true }).catch(() => {});
          }
        }
      }

      if (this.action === 'insert') {
        const itemsToInsert = this.table === 'membros' ? sanitizeMemberList(this.insertData).valid : this.insertData;
        for (const item of itemsToInsert) {
          const docId = String(item.id || item.email || `doc_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`);
          setDoc(doc(db, this.table, docId), sanitizeForFirestore(item), { merge: true }).catch(err => {
            console.warn("Firestore sync insert warning:", err);
          });
        }
      }

      if (this.action === 'update') {
        const idFilter = this.filters.find(f => f.col === 'id');
        if (idFilter) {
          const docId = String(idFilter.val);
          setDoc(doc(db, this.table, docId), sanitizeForFirestore(this.updateData), { merge: true }).catch(err => {
            console.warn("Firestore sync update warning:", err);
          });
        } else {
          // Find matching local items and update each docId
          const items = getLocalCollection(this.table);
          for (const item of items) {
            const matches = this.filters.every(f => String(item[f.col]).toLowerCase() === String(f.val).toLowerCase());
            if (matches && item.id) {
              setDoc(doc(db, this.table, String(item.id)), sanitizeForFirestore(this.updateData), { merge: true }).catch(() => {});
            }
          }
        }
      }

      if (this.action === 'delete') {
        const idFilter = this.filters.find(f => f.col === 'id');
        if (idFilter) {
          deleteDoc(doc(db, this.table, String(idFilter.val))).catch(err => {
            console.warn("Firestore sync delete warning:", err);
          });
        }
      }
    } catch (remoteErr) {
      console.warn(`Firestore remote operation failed for ${this.table}, using local fallback:`, remoteErr);
    }

    // Always ensure local state is updated and return consistent result
    const localRes = this.executeLocally();
    return onfulfilled ? onfulfilled(localRes) : localRes;
  }

  catch(onrejected?: (reason: any) => any) {
    return this.then(undefined, onrejected);
  }
}

export const supabase: any = {
  auth: {
    async signInWithPassword({ email, password }: { email: string; password?: string }) {
      const cleanEmail = (email || '').trim().toLowerCase();
      
      // Admin check
      if (cleanEmail === DEFAULT_ADMIN_USER.email.toLowerCase()) {
        localStorage.setItem("tucpb_logged_in_user", DEFAULT_ADMIN_USER.id);
        const adminSession = {
          access_token: 'firebase-admin-token',
          user: { id: DEFAULT_ADMIN_USER.id, email: DEFAULT_ADMIN_USER.email }
        };
        return { data: { user: adminSession.user, session: adminSession }, error: null };
      }

      // Check local + cloud members
      const members = getLocalCollection('membros');
      const found = members.find((u: any) => u.email?.trim().toLowerCase() === cleanEmail);
      if (found) {
        if (!found.password || found.password === password) {
          // If member did not have a password stored yet, save the one they just typed
          if (!found.password && password) {
            found.password = password;
            saveLocalCollection('membros', members);
            setDoc(doc(db, 'membros', String(found.id)), { password }, { merge: true }).catch(() => {});
          }
          localStorage.setItem("tucpb_logged_in_user", found.id);
          const session = {
            access_token: 'firebase-member-token',
            user: { id: found.id, email: found.email }
          };
          return { data: { user: session.user, session }, error: null };
        } else {
          return { data: { user: null, session: null }, error: { message: "Senha incorreta. Tente novamente." } };
        }
      }

      return { data: { user: null, session: null }, error: { message: "E-mail não cadastrado. Verifique o endereço ou cadastre-se." } };
    },

    async signUp({ email, password }: { email: string; password?: string }) {
      const cleanEmail = (email || '').trim().toLowerCase();
      const members = getLocalCollection('membros');

      if (members.some((u: any) => u.email?.trim().toLowerCase() === cleanEmail)) {
        return { data: { user: null, session: null }, error: { message: "Este e-mail já está cadastrado no terreiro." } };
      }

      const userId = `usr_${Date.now()}`;
      localStorage.setItem("tucpb_logged_in_user", userId);
      const session = {
        access_token: 'firebase-member-token',
        user: { id: userId, email: cleanEmail }
      };
      return { data: { user: session.user, session }, error: null };
    },

    async signOut() {
      localStorage.removeItem("tucpb_logged_in_user");
      return { error: null };
    },

    async getSession() {
      const loggedInUserId = localStorage.getItem("tucpb_logged_in_user");
      if (loggedInUserId) {
        const members = getLocalCollection('membros');
        const user = members.find((u: any) => u.id === loggedInUserId) || (loggedInUserId === DEFAULT_ADMIN_USER.id ? DEFAULT_ADMIN_USER : null);
        if (user) {
          return {
            data: {
              session: {
                access_token: 'firebase-token',
                user: { id: user.id, email: user.email }
              }
            },
            error: null
          };
        }
      }
      return { data: { session: null }, error: null };
    },

    onAuthStateChange(callback: (event: string, session: any) => void) {
      const loggedInUserId = localStorage.getItem("tucpb_logged_in_user");
      if (loggedInUserId) {
        const members = getLocalCollection('membros');
        const user = members.find((u: any) => u.id === loggedInUserId) || (loggedInUserId === DEFAULT_ADMIN_USER.id ? DEFAULT_ADMIN_USER : null);
        if (user) {
          setTimeout(() => {
            callback("SIGNED_IN", {
              access_token: 'firebase-token',
              user: { id: user.id, email: user.email }
            });
          }, 10);
        }
      }
      return {
        data: {
          subscription: {
            unsubscribe: () => {}
          }
        }
      };
    },

    async resetPasswordForEmail(_email: string) {
      return { data: {}, error: null };
    }
  },

  from(table: string) {
    return new QueryChain(table);
  }
};

/**
 * Actively purges invalid/garbage members (e.g. hex tokens like "23fc7", audit logs)
 * from both LocalStorage and Firebase Firestore, keeping only genuine terreiro members.
 */
export async function purgeGarbageMembers(): Promise<{ removedCount: number; remainingCount: number }> {
  try {
    const colRef = collection(db, 'membros');
    const snapshot = await getDocs(colRef).catch(() => null);
    const cloudDocs = snapshot && !snapshot.empty ? snapshot.docs.map(d => ({ id: d.id, ...d.data() })) : [];
    const local = getLocalCollection('membros');

    const combinedMap = new Map();
    for (const item of local) combinedMap.set((item as any).id || (item as any).email, item);
    for (const item of cloudDocs) combinedMap.set((item as any).id || (item as any).email, item);
    const all = Array.from(combinedMap.values());

    const { valid, removedCount, removedItems } = sanitizeMemberList(all);

    // Delete removed items from Firestore
    for (const item of removedItems) {
      const docId = String(item.id || item.email);
      if (docId) {
        deleteDoc(doc(db, 'membros', docId)).catch(() => {});
      }
    }

    // Ensure initial members are included
    const existingEmails = new Set(valid.map((u: any) => u.email?.toLowerCase().trim()));
    const missingDefaults = initialMembers.filter(def => !existingEmails.has(def.email.toLowerCase().trim()));
    const finalValid = [...valid, ...missingDefaults];

    localStorage.setItem('tucpb_members', JSON.stringify(finalValid));

    return { removedCount, remainingCount: finalValid.length };
  } catch (e) {
    console.warn("Erro ao purgar membros inválidos:", e);
    const local = getLocalCollection('membros');
    const { valid, removedCount } = sanitizeMemberList(local);
    localStorage.setItem('tucpb_members', JSON.stringify(valid));
    return { removedCount, remainingCount: valid.length };
  }
}

/**
 * Resets the entire members list to the official founding members of TUCPB,
 * removing any corrupted backup records from Firestore and LocalStorage.
 */
export async function resetToOfficialHouseMembers(): Promise<UserProfile[]> {
  try {
    const colRef = collection(db, 'membros');
    const snapshot = await getDocs(colRef).catch(() => null);
    if (snapshot && !snapshot.empty) {
      for (const d of snapshot.docs) {
        const isOfficial = initialMembers.some(init => init.id === d.id || (init.email && d.data().email && init.email.toLowerCase() === d.data().email.toLowerCase()));
        if (!isOfficial) {
          deleteDoc(doc(db, 'membros', d.id)).catch(() => {});
        }
      }
    }
  } catch (e) {
    console.warn("Erro ao limpar Firestore:", e);
  }

  localStorage.setItem('tucpb_members', JSON.stringify(initialMembers));
  for (const m of initialMembers) {
    setDoc(doc(db, 'membros', m.id), sanitizeForFirestore(m), { merge: true }).catch(() => {});
  }
  return initialMembers;
}
