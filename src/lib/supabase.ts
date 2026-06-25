import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://sxarljwqsvccaazvtujx.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sa-east-1';

console.log("Supabase URL:", supabaseUrl);
console.log("Supabase Key (10 chars):", supabaseAnonKey ? supabaseAnonKey.substring(0, 10) : "UNDEFINED");

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
