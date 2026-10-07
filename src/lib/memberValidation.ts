import { UserProfile } from "../types";
import { initialMembers } from "../data";

/**
 * Checks if a name is plausible as a human name for a terreiro member (filho de santo).
 * Rejects hex strings (like '23fc7'), UUID fragments, system keywords, and pure alphanumeric codes.
 */
export function isValidMemberName(name: string | undefined | null): boolean {
  if (!name || typeof name !== "string") return false;
  const trimmed = name.trim();
  if (trimmed.length < 2 || trimmed.length > 80) return false;

  const lower = trimmed.toLowerCase();

  // Rejects default fallback placeholders and system strings
  if (
    lower === "integrante sem nome" ||
    lower === "integrante recuperado" ||
    lower === "sem nome" ||
    lower === "membro" ||
    lower === "usuario" ||
    lower === "user" ||
    lower === "admin" ||
    lower === "postgres" ||
    lower === "supabase" ||
    lower === "authenticated" ||
    lower === "anon" ||
    lower === "service_role" ||
    lower === "undefined" ||
    lower === "null" ||
    lower.startsWith("usr-") ||
    lower.startsWith("member-") ||
    lower.startsWith("default-")
  ) {
    return false;
  }

  // Rejects hex hashes (e.g. "23fc7", "a8c9b", "0123456789abcdef")
  if (/^[0-9a-fA-F]{3,32}$/.test(trimmed)) {
    return false;
  }

  // Rejects UUIDs or UUID fragments
  if (/^[0-9a-fA-F-]{8,}$/.test(trimmed) && trimmed.includes("-")) {
    return false;
  }

  // Rejects strings containing system or code punctuation
  if (/[\{\}\[\]\\<>;:=_\^|`~]/.test(trimmed)) {
    return false;
  }

  // Rejects strings with no letters (e.g. only numbers and punctuation)
  if (!/[a-zA-ZÀ-ÿ]/.test(trimmed)) {
    return false;
  }

  // A valid human name should have mostly alphabetic characters and spaces
  const lettersAndSpaces = (trimmed.match(/[a-zA-ZÀ-ÿ\s.'-]/g) || []).length;
  if (lettersAndSpaces / trimmed.length < 0.8) {
    return false;
  }

  // Must not look like a single alphanumeric token combining letters and digits like "user123", "23fc7", "token4"
  if (/^[a-zA-Z0-9]+$/.test(trimmed) && /\d/.test(trimmed) && /[a-zA-Z]/.test(trimmed) && !trimmed.includes(" ")) {
    return false;
  }

  return true;
}

/**
 * Checks if an email is a legitimate user email (not system/supabase internals)
 */
export function isValidMemberEmail(email: string | undefined | null): boolean {
  if (!email || typeof email !== "string") return false;
  const lower = email.trim().toLowerCase();
  if (!lower.includes("@") || !lower.includes(".")) return false;

  const rejectedDomains = [
    "supabase.co",
    "supabase.io",
    "example.com",
    "localhost",
    "gotrue",
    "postmaster"
  ];

  if (rejectedDomains.some(d => lower.includes(d))) return false;
  if (
    lower.startsWith("postgres@") ||
    lower.startsWith("admin@localhost") ||
    lower.startsWith("noreply@") ||
    lower.startsWith("service_role@")
  ) {
    return false;
  }

  return true;
}

/**
 * Checks if a member profile is a valid person or garbage from backup
 */
export function isValidUserProfile(member: any): boolean {
  if (!member || typeof member !== "object") return false;

  // Initial members of the terreiro are always valid
  if (initialMembers.some(init => init.id === member.id || (init.email && member.email && init.email.toLowerCase() === member.email.toLowerCase()))) {
    return true;
  }

  // Name check
  if (!isValidMemberName(member.name)) {
    return false;
  }

  // Email check if present
  if (member.email && !isValidMemberEmail(member.email)) {
    return false;
  }

  // Reject auto-generated fake emails if no real contact or civil data
  if (
    member.email?.includes("integrante-") &&
    member.email?.includes("@tucpb.com.br") &&
    !member.whatsapp &&
    !member.cpf &&
    !member.rg
  ) {
    if (member.name.split(" ").length < 2) {
      return false;
    }
  }

  return true;
}

/**
 * Filters a list of members, removing garbage and returning valid members + count removed
 */
export function sanitizeMemberList(members: any[]): { valid: UserProfile[]; removedCount: number; removedItems: any[] } {
  if (!Array.isArray(members)) return { valid: [], removedCount: 0, removedItems: [] };

  const valid: UserProfile[] = [];
  const removedItems: any[] = [];

  for (const m of members) {
    if (isValidUserProfile(m)) {
      valid.push(m);
    } else {
      removedItems.push(m);
    }
  }

  return {
    valid,
    removedCount: removedItems.length,
    removedItems
  };
}
