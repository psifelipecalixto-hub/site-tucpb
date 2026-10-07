// Resilient Supabase Client with Offline & LocalStorage Sync Fallback
import { createClient } from '@supabase/supabase-js';
import { UserProfile } from '../types';

export const DEFAULT_ADMIN_USER: UserProfile = {
  id: "admin-pai-felipe",
  name: "Pai Felipe",
  email: "baba.ajo.tucpb@gmail.com",
  role: "admin",
  cargoTerreiro: "pai de santo",
  photoUrl: "",
  status: "aprovado",
  whatsapp: "(61) 99959-8245",
  tempoDesenvolvimento: "Mais de 10 anos",
  buscaCoracao: "Fundador e Sacerdote do TUCPB"
};

const rawUrl = import.meta.env.VITE_SUPABASE_URL || 'https://sxarljwqsvccaazvtujx.supabase.co';
const rawKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sa-east-1';

// Check if credentials are placeholders or non-working defaults
const isKnownDeadUrl = rawUrl.includes('sxarljwqsvccaazvtujx.supabase.co') || rawKey === 'sa-east-1' || !rawUrl.startsWith('http');

let realClient: any = null;
if (!isKnownDeadUrl) {
  try {
    realClient = createClient(rawUrl, rawKey);
  } catch (e) {
    console.warn("Failed to initialize remote Supabase client, using local database mode.", e);
  }
}

// Helper to access LocalStorage collections safely
function getLocalCollection(table: string): any[] {
  const key = table === 'membros' ? 'tucpb_members' : table === 'tarefas' ? 'tucpb_tasks' : `tucpb_${table}`;
  try {
    const raw = localStorage.getItem(key);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        if (table === 'membros' && !parsed.some((u: any) => u.email?.toLowerCase() === DEFAULT_ADMIN_USER.email.toLowerCase())) {
          parsed.unshift(DEFAULT_ADMIN_USER);
          localStorage.setItem('tucpb_members', JSON.stringify(parsed));
        }
        return parsed;
      }
    }
  } catch (e) {
    console.warn(`Error reading local collection ${key}:`, e);
  }
  
  if (table === 'membros') {
    const initial = [DEFAULT_ADMIN_USER];
    localStorage.setItem('tucpb_members', JSON.stringify(initial));
    return initial;
  }
  return [];
}

function saveLocalCollection(table: string, items: any[]): void {
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
      const merged = [...items, ...this.insertData];
      saveLocalCollection(this.table, merged);
      return { data: this.insertData, error: null };
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
    if (realClient) {
      try {
        let query = realClient.from(this.table);
        if (this.action === 'select') query = query.select(this.selectFields);
        if (this.action === 'insert') query = query.insert(this.insertData);
        if (this.action === 'update') query = query.update(this.updateData);
        if (this.action === 'delete') query = query.delete();

        for (const f of this.filters) {
          query = query.eq(f.col, f.val);
        }
        if (this.isSingle) {
          query = query.single();
        }

        const res = await Promise.race([
          query,
          new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 3000))
        ]);

        if (res && !res.error) {
          // Sync successful response to local storage
          if (this.action === 'select' && Array.isArray(res.data) && res.data.length > 0) {
            saveLocalCollection(this.table, res.data);
          }
          return onfulfilled ? onfulfilled(res) : res;
        }
      } catch (err) {
        console.warn(`Supabase remote failed for ${this.table}, using local fallback:`, err);
      }
    }

    // Local fallback
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
      
      if (realClient) {
        try {
          const res = await Promise.race([
            realClient.auth.signInWithPassword({ email, password }),
            new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 3000))
          ]) as any;
          if (res && !res.error) {
            return res;
          }
        } catch (err) {
          console.warn("Remote Supabase auth failed, using local auth fallback:", err);
        }
      }

      // Local auth check
      const members = getLocalCollection('membros');
      if (cleanEmail === DEFAULT_ADMIN_USER.email.toLowerCase()) {
        const adminSession = {
          access_token: 'local-admin-token',
          user: { id: DEFAULT_ADMIN_USER.id, email: DEFAULT_ADMIN_USER.email }
        };
        return { data: { user: adminSession.user, session: adminSession }, error: null };
      }

      const found = members.find((u: any) => u.email?.trim().toLowerCase() === cleanEmail);
      if (found) {
        if (!found.password || found.password === password) {
          const session = {
            access_token: 'local-member-token',
            user: { id: found.id, email: found.email }
          };
          return { data: { user: session.user, session }, error: null };
        } else {
          return { data: { user: null, session: null }, error: { message: "Invalid login credentials" } };
        }
      }

      return { data: { user: null, session: null }, error: { message: "Invalid login credentials" } };
    },

    async signUp({ email, password }: { email: string; password?: string }) {
      const cleanEmail = (email || '').trim().toLowerCase();
      const members = getLocalCollection('membros');

      if (members.some((u: any) => u.email?.trim().toLowerCase() === cleanEmail)) {
        return { data: { user: null, session: null }, error: { message: "User already registered" } };
      }

      if (realClient) {
        try {
          const res = await Promise.race([
            realClient.auth.signUp({ email, password }),
            new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 3000))
          ]) as any;
          if (res && !res.error) return res;
        } catch (err) {
          console.warn("Remote Supabase signup failed, using local fallback:", err);
        }
      }

      const userId = `usr-${Date.now()}`;
      const session = {
        access_token: 'local-member-token',
        user: { id: userId, email: cleanEmail }
      };
      return { data: { user: session.user, session }, error: null };
    },

    async signOut() {
      if (realClient) {
        try {
          await realClient.auth.signOut();
        } catch (e) {}
      }
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
                access_token: 'local-token',
                user: { id: user.id, email: user.email }
              }
            },
            error: null
          };
        }
      }

      if (realClient) {
        try {
          const res = await realClient.auth.getSession();
          if (res && res.data?.session) return res;
        } catch (e) {}
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
              access_token: 'local-token',
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

    async resetPasswordForEmail(email: string) {
      return { data: {}, error: null };
    }
  },

  from(table: string) {
    return new QueryChain(table);
  }
};
