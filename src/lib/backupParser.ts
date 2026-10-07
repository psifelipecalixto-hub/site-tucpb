import * as pako from "pako";
import { UserProfile, MemberTask } from "../types";
import { isValidMemberName, isValidMemberEmail, isValidUserProfile, sanitizeMemberList } from "./memberValidation";

/**
 * Universal Backup Parser for TUCPB
 * Handles:
 * 1. PostgreSQL Custom Format Dumps (.backup / .dump / PGDMP binary files) from Supabase
 * 2. Gzip-compressed dumps (.sql.gz, .backup)
 * 3. PostgreSQL SQL text dumps (.sql) with COPY or INSERT statements
 * 4. CSV files (.csv) exported from Supabase Table Editor
 * 5. JSON files (.json) exported from TUCPB or database
 *
 * Strictly parses ONLY legitimate terreiro members (membros/integrantes)
 * Rejects audit logs, system tables (auth.users, storage.objects), and isolated hex strings like '23fc7'.
 */

export interface BackupParseResult {
  members: UserProfile[];
  tasks: MemberTask[];
  sourceFormat: "pg_custom_dump" | "sql_dump" | "gzip_dump" | "json" | "csv" | "raw_strings";
}

function cleanVal(v: string | undefined): string {
  if (!v) return "";
  let res = v.trim();
  if ((res.startsWith('"') && res.endsWith('"')) || (res.startsWith("'") && res.endsWith("'"))) {
    res = res.slice(1, -1).trim();
  }
  return res
    .replace(/\\r/g, "")
    .replace(/\\n/g, "\n")
    .replace(/\\t/g, "\t")
    .replace(/\\"/g, '"')
    .replace(/\\'/g, "'")
    .replace(/\\\\/g, "\\");
}

function parseCsvLine(line: string, delimiter: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"' || char === "'") {
      inQuotes = !inQuotes;
    } else if (char === delimiter && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

/**
 * Scans a binary buffer (such as PostgreSQL custom dump or Gzip file)
 * and extracts all readable text chunks and decompressed zlib blocks.
 */
function extractTextFromBuffer(buffer: Uint8Array): {
  combinedText: string;
  isBinary: boolean;
  format: "pg_custom_dump" | "gzip_dump" | "sql_dump";
  rawChunks: string[];
} {
  const chunks: string[] = [];
  const textDecoder = new TextDecoder("utf-8", { fatal: false });
  let detectedFormat: "pg_custom_dump" | "gzip_dump" | "sql_dump" = "sql_dump";

  // Check for PostgreSQL Custom Dump signature (PGDMP: 0x50, 0x47, 0x44, 0x4d, 0x50)
  const isPgCustom =
    buffer.length >= 5 &&
    buffer[0] === 0x50 && // P
    buffer[1] === 0x47 && // G
    buffer[2] === 0x44 && // D
    buffer[3] === 0x4d && // M
    buffer[4] === 0x50;   // P

  // Check for GZIP header (0x1f, 0x8b)
  const isGzip = buffer.length >= 2 && buffer[0] === 0x1f && buffer[1] === 0x8b;

  if (isPgCustom) detectedFormat = "pg_custom_dump";
  else if (isGzip) detectedFormat = "gzip_dump";

  // 1. GZIP decompression if entire file is gzipped
  if (isGzip) {
    try {
      const decompressed = pako.ungzip(buffer);
      chunks.push(textDecoder.decode(decompressed));
    } catch (e) {
      console.warn("Falha ao descomprimir gzip:", e);
    }
  }

  // 2. Scan for embedded zlib/deflate streams (standard in pg_dump -Fc)
  for (let i = 0; i < buffer.length - 2; i++) {
    const b0 = buffer[i];
    const b1 = buffer[i + 1];

    // Check zlib header: CMF method 8 (deflate) & FCHECK validation: (CMF * 256 + FLG) % 31 === 0
    if ((b0 & 0x0f) === 8 && ((b0 * 256 + b1) % 31 === 0)) {
      try {
        const slice = buffer.subarray(i);
        const decompressed = pako.inflate(slice);
        if (decompressed && decompressed.length > 0) {
          const str = textDecoder.decode(decompressed);
          chunks.push(str);
          i += 6;
        }
      } catch {}
    }
  }

  // 3. Raw UTF-8 representation of the buffer
  try {
    const rawStr = textDecoder.decode(buffer);
    chunks.push(rawStr);
  } catch {}

  const combinedText = chunks.join("\n\n");
  const isBinary = isPgCustom || isGzip || buffer.slice(0, 100).some(b => b === 0);

  return { combinedText, isBinary, format: detectedFormat, rawChunks: chunks };
}

/**
 * Universal parser entrypoint
 */
export async function parseUniversalBackup(
  input: File | ArrayBuffer | Uint8Array | string
): Promise<BackupParseResult> {
  let uint8: Uint8Array;

  if (typeof input === "string") {
    const parsed = parseTextBackup(input);
    const { valid } = sanitizeMemberList(parsed.members);
    parsed.members = valid;
    return parsed;
  } else if (input instanceof File) {
    const ab = await input.arrayBuffer();
    uint8 = new Uint8Array(ab);
  } else if (input instanceof ArrayBuffer) {
    uint8 = new Uint8Array(input);
  } else {
    uint8 = input;
  }

  // Quick check if input is plain JSON
  try {
    const textDecoder = new TextDecoder("utf-8", { fatal: true });
    const text = textDecoder.decode(uint8);
    const parsed = parseTextBackup(text);
    if (parsed.members.length > 0 || parsed.tasks.length > 0) {
      const { valid } = sanitizeMemberList(parsed.members);
      parsed.members = valid;
      return parsed;
    }
  } catch {}

  // Extract all text chunks including decompressed blocks
  const { combinedText, format, rawChunks } = extractTextFromBuffer(uint8);

  // First try parsing each individual decompressed chunk
  for (const chunk of rawChunks) {
    const chunkRes = parseTextBackup(chunk);
    if (chunkRes.members.length > 0) {
      const { valid } = sanitizeMemberList(chunkRes.members);
      chunkRes.members = valid;
      chunkRes.sourceFormat = format;
      if (chunkRes.members.length > 0) {
        return chunkRes;
      }
    }
  }

  // Then try combined text
  const result = parseTextBackup(combinedText);
  const { valid } = sanitizeMemberList(result.members);
  result.members = valid;
  result.sourceFormat = format;
  return result;
}

/**
 * Synchronous text parser compatible with previous parseBackupFileContent
 */
export function parseBackupFileContent(text: string): UserProfile[] {
  const result = parseTextBackup(text);
  const { valid } = sanitizeMemberList(result.members);
  return valid;
}

export function parseTextBackup(text: string): BackupParseResult {
  if (!text || !text.trim()) {
    return { members: [], tasks: [], sourceFormat: "json" };
  }

  const trimmed = text.trim();

  // 1. Try JSON
  try {
    const parsed = JSON.parse(trimmed);
    let list: any[] = [];
    let taskList: any[] = [];

    if (Array.isArray(parsed)) {
      list = parsed;
    } else if (parsed && typeof parsed === "object") {
      if (Array.isArray(parsed.data)) list = parsed.data;
      else if (Array.isArray(parsed.membros)) list = parsed.membros;
      else if (Array.isArray(parsed.members)) list = parsed.members;
      else if (Array.isArray(parsed.users)) list = parsed.users;

      if (Array.isArray(parsed.tarefas)) taskList = parsed.tarefas;
      else if (Array.isArray(parsed.tasks)) taskList = parsed.tasks;
    }

    if (list.length > 0) {
      const members = normalizeMembers(list);
      const { valid } = sanitizeMemberList(members);
      return {
        members: valid,
        tasks: normalizeTasks(taskList),
        sourceFormat: "json"
      };
    }
  } catch {}

  // 2. Try PostgreSQL COPY format (pg_dump / Supabase .backup)
  const copyResult = parsePostgresCopy(text);
  if (copyResult.members.length > 0) {
    const { valid } = sanitizeMemberList(copyResult.members);
    return {
      members: valid,
      tasks: copyResult.tasks,
      sourceFormat: "sql_dump"
    };
  }

  // 3. Try SQL INSERT INTO
  const insertResult = parseSqlInserts(text);
  if (insertResult.members.length > 0) {
    const { valid } = sanitizeMemberList(insertResult.members);
    return {
      members: valid,
      tasks: insertResult.tasks,
      sourceFormat: "sql_dump"
    };
  }

  // 4. Try CSV (Supabase Table Editor export)
  const csvMembers = parseCsvMembers(text);
  if (csvMembers.length > 0) {
    const { valid } = sanitizeMemberList(csvMembers);
    return {
      members: valid,
      tasks: [],
      sourceFormat: "csv"
    };
  }

  return { members: [], tasks: [], sourceFormat: "sql_dump" };
}

/**
 * Checks if a table name is specifically for terreiro members
 */
function isMembrosTableName(name: string): boolean {
  const clean = name.toLowerCase().replace(/['"`]/g, "").trim();
  return (
    clean === "membros" ||
    clean === "public.membros" ||
    clean === "integrantes" ||
    clean === "public.integrantes"
  );
}

function isTarefasTableName(name: string): boolean {
  const clean = name.toLowerCase().replace(/['"`]/g, "").trim();
  return (
    clean === "tarefas" ||
    clean === "public.tarefas" ||
    clean === "tasks" ||
    clean === "public.tasks"
  );
}

/**
 * Parses PostgreSQL COPY format:
 * COPY public.membros (id, name, email, ...) FROM stdin;
 * row1\trow1\t...
 * \.
 *
 * STRICT RULE: Only rows explicitly inside COPY membros / integrantes are parsed.
 * Untracked system tables (auth.users, auth.audit_log_entries, storage.objects, etc.) are IGNORED.
 */
function parsePostgresCopy(text: string): { members: UserProfile[]; tasks: MemberTask[] } {
  const members: UserProfile[] = [];
  const tasks: MemberTask[] = [];

  const copyHeaderRegex = /COPY\s+(?:public\.)?([a-zA-Z0-9_]+)\s*\(([^)]+)\)\s*FROM\s+stdin;/gi;
  let match: RegExpExecArray | null;

  const lines = text.split(/\r?\n/);
  let currentTable: string | null = null;
  let currentCols: string[] = [];

  const tableColumnsMap: Record<string, string[]> = {};
  while ((match = copyHeaderRegex.exec(text)) !== null) {
    const table = match[1].toLowerCase();
    const cols = match[2].split(",").map(c => cleanVal(c).toLowerCase().replace(/['"`]/g, ""));
    tableColumnsMap[table] = cols;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Check for COPY header
    const headerMatch = /COPY\s+(?:public\.)?([a-zA-Z0-9_]+)\s*\(([^)]+)\)\s*FROM\s+stdin;/i.exec(trimmed);
    if (headerMatch) {
      currentTable = headerMatch[1].toLowerCase();
      currentCols = headerMatch[2].split(",").map(c => cleanVal(c).toLowerCase().replace(/['"`]/g, ""));
      continue;
    }

    if (trimmed === "\\.") {
      currentTable = null;
      currentCols = [];
      continue;
    }

    // Process data rows ONLY if active table is explicitly 'membros' or 'tarefas'
    if (currentTable && trimmed && line.includes("\t")) {
      const parts = line.split("\t").map(p => {
        const val = p.trim();
        return val === "\\N" ? "" : cleanVal(val);
      });

      if (isMembrosTableName(currentTable)) {
        const cols = currentCols.length > 0 ? currentCols : (tableColumnsMap[currentTable] || []);
        const item: any = {};
        cols.forEach((col, idx) => {
          if (idx < parts.length) item[col] = parts[idx];
        });
        const normalized = normalizeMemberItem(item, members.length);
        if (normalized && isValidUserProfile(normalized)) {
          members.push(normalized);
        }
      } else if (isTarefasTableName(currentTable)) {
        const cols = currentCols.length > 0 ? currentCols : (tableColumnsMap[currentTable] || []);
        const item: any = {};
        cols.forEach((col, idx) => {
          if (idx < parts.length) item[col] = parts[idx];
        });
        const normalized = normalizeTaskItem(item, tasks.length);
        if (normalized) tasks.push(normalized);
      }
      // System tables like auth.audit_log_entries, auth.users, pg_*, storage.* are safely skipped!
    }
  }

  return { members, tasks };
}

/**
 * Parses SQL INSERT INTO statements
 * STRICT RULE: Only INSERT INTO membros / integrantes / tarefas
 */
function parseSqlInserts(text: string): { members: UserProfile[]; tasks: MemberTask[] } {
  const members: UserProfile[] = [];
  const tasks: MemberTask[] = [];

  const insertMatches = text.matchAll(/INSERT INTO\s+(?:public\.)?([a-zA-Z0-9_]+)\s*\((.*?)\)\s*VALUES\s*([\s\S]*?);/gi);

  for (const match of insertMatches) {
    const table = match[1].toLowerCase();
    const colStr = match[2];
    const valStr = match[3];
    const cols = colStr.split(",").map(c => cleanVal(c).toLowerCase().replace(/['"`]/g, ""));

    const isMember = isMembrosTableName(table);
    const isTask = isTarefasTableName(table);

    if (!isMember && !isTask) {
      continue;
    }

    const rowMatches = valStr.matchAll(/\((.*?)\)/g);
    for (const rMatch of rowMatches) {
      const rowContent = rMatch[1];
      const vals = parseCsvLine(rowContent, ",").map(cleanVal);
      const item: any = {};
      cols.forEach((col, idx) => {
        if (idx < vals.length) {
          item[col] = vals[idx];
        }
      });

      if (isMember) {
        const norm = normalizeMemberItem(item, members.length);
        if (norm && isValidUserProfile(norm)) {
          members.push(norm);
        }
      } else if (isTask) {
        const norm = normalizeTaskItem(item, tasks.length);
        if (norm) tasks.push(norm);
      }
    }
  }

  return { members, tasks };
}

/**
 * Parses CSV text
 */
function parseCsvMembers(text: string): UserProfile[] {
  const lines = text.split(/\r?\n/).filter(l => l.trim().length > 0);
  if (lines.length < 2) return [];

  const firstLine = lines[0];
  const delimiter = firstLine.includes(";") && !firstLine.includes(",") ? ";" : ",";
  const headers = parseCsvLine(firstLine, delimiter).map(h => cleanVal(h).toLowerCase());

  const hasMemberFields = headers.some(h =>
    ["name", "nome", "email", "cargoterreiro", "cargo", "cargo_terreiro", "whatsapp"].includes(h)
  );

  if (!hasMemberFields) return [];

  const members: UserProfile[] = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const values = parseCsvLine(line, delimiter).map(cleanVal);
    const item: any = {};
    headers.forEach((h, idx) => {
      if (idx < values.length) {
        item[h] = values[idx];
      }
    });
    const norm = normalizeMemberItem(item, members.length);
    if (norm && isValidUserProfile(norm)) {
      members.push(norm);
    }
  }

  return members;
}

function normalizeMemberItem(item: any, index: number): UserProfile | null {
  const name = (
    item.name || item.nome || item.full_name || item.nome_completo || ""
  ).trim();

  // STRICT REQUIREMENT: Name must be a plausible human name (not hex tokens like '23fc7', not system logs)
  if (!name || !isValidMemberName(name)) {
    return null;
  }

  const rawEmail = (item.email || item.mail || item.e_mail || "").trim();
  const email = isValidMemberEmail(rawEmail)
    ? rawEmail
    : `${name.toLowerCase().replace(/[^a-z0-9]/g, "")}-${index}@tucpb.org`;

  const cargo =
    item.cargoTerreiro ||
    item.cargoterreiro ||
    item.cargo ||
    item.cargo_terreiro ||
    item.funcao ||
    "Médiun/Cambone";

  const role =
    item.role === "admin" || item.papel === "admin" ? "admin" : "membro";

  const profile: UserProfile = {
    id: item.id || `member-${Date.now()}-${index}`,
    name,
    email,
    password: item.password || item.senha || "",
    role,
    cargoTerreiro: cargo,
    photoUrl: item.photoUrl || item.photourl || item.foto || item.photo_url || "",
    status: (item.status === "pendente" || item.status === "recusado") ? item.status : "aprovado",
    dataNascimento: item.dataNascimento || item.datanascimento || item.data_nascimento || "",
    cpf: item.cpf || "",
    rg: item.rg || "",
    tipoSanguineo: item.tipoSanguineo || item.tiposanguineo || item.tipo_sanguineo || "",
    whatsapp: item.whatsapp || item.telefone || item.celular || "",
    endereco: item.endereco || "",
    profissao: item.profissao || "",
    contatoEmergencia: item.contatoEmergencia || item.contatoemergencia || item.contato_emergencia || "",
    alergias: item.alergias || "",
    acompanhamentoPsicologico: item.acompanhamentoPsicologico || item.acompanhamentopsicologico || "",
    transtornoPsiquiatrico: item.transtornoPsiquiatrico || item.transtornopsiquiatrico || "",
    medicamentosContinuos: item.medicamentosContinuos || item.medicamentoscontinuos || "",
    tempoDesenvolvimento: item.tempoDesenvolvimento || item.tempodesenvolvimento || "",
    terreirosAnteriores: item.terreirosAnteriores || item.terreirosanteriores || "",
    iniciacoesRealizadas: item.iniciacoesRealizadas || item.iniciacoesrealizadas || "",
    tiposMediunidade: item.tiposMediunidade || item.tiposmediunidade || "",
    guiasConhecidos: item.guiasConhecidos || item.guiasconhecidos || "",
    buscaCoracao: item.buscaCoracao || item.buscacoracao || ""
  };

  if (!isValidUserProfile(profile)) {
    return null;
  }

  return profile;
}

function normalizeMembers(rawList: any[]): UserProfile[] {
  return rawList
    .map((item, index) => normalizeMemberItem(item, index))
    .filter((m): m is UserProfile => m !== null);
}

function normalizeTaskItem(item: any, index: number): MemberTask | null {
  const taskText = item.task || item.title || item.titulo || item.descricao || item.description || "";
  if (!taskText) return null;

  const validAreas: MemberTask["area"][] = [
    "Terreiro / Gongá",
    "Cozinha",
    "Portaria / Harmonização",
    "Defumação",
    "Curimba"
  ];

  const area = validAreas.includes(item.area) ? item.area : "Terreiro / Gongá";
  const status: MemberTask["status"] =
    item.status === "Concluido" || item.status === "concluida" || item.status === "concluido"
      ? "Concluido"
      : item.status === "Em Andamento" || item.status === "em_andamento"
      ? "Em Andamento"
      : "Pendente";

  return {
    id: item.id || `task-${Date.now()}-${index}`,
    task: taskText,
    assignedTo: item.assignedTo || item.assigned_to || item.atribuido_para || "",
    area,
    status,
    date: item.date || item.dueDate || item.due_date || new Date().toISOString().split("T")[0]
  };
}

function normalizeTasks(rawList: any[]): MemberTask[] {
  return rawList
    .map((item, index) => normalizeTaskItem(item, index))
    .filter((t): t is MemberTask => t !== null);
}
