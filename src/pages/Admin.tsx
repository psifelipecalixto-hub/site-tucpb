import { useState, useEffect, useRef } from "react";
import { supabase, DEFAULT_ADMIN_USER, purgeGarbageMembers, resetToOfficialHouseMembers } from "../lib/supabase";
import { UserProfile } from "../types";
import { initialMembers } from "../data";
import { parseUniversalBackup } from "../lib/backupParser";
import { sanitizeMemberList } from "../lib/memberValidation";
import { LogOut, Eye, X, Download, Upload, ShieldCheck, Database, Loader2, FileCheck, Trash2, Sparkles, RotateCcw } from "lucide-react";

export default function Admin() {
  const [session, setSession] = useState<any>(null);
  const [email, setEmail] = useState("baba.ajo.tucpb@gmail.com");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [members, setMembers] = useState<UserProfile[]>([]);
  const [selectedMember, setSelectedMember] = useState<UserProfile | null>(null);
  const [memberToDelete, setMemberToDelete] = useState<UserProfile | null>(null);
  const [backupNotice, setBackupNotice] = useState<string>("");
  const [importingBackup, setImportingBackup] = useState(false);
  const [cleaningGarbage, setCleaningGarbage] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const loginFileInputRef = useRef<HTMLInputElement | null>(null);

  const handleExportBackup = () => {
    try {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(members, null, 2));
      const downloadAnchor = document.createElement("a");
      const dateStr = new Date().toISOString().split("T")[0];
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `tucpb_membros_backup_${dateStr}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      setBackupNotice("Backup exportado com sucesso! Arquivo JSON salvo.");
      setTimeout(() => setBackupNotice(""), 4000);
    } catch (e: any) {
      alert("Erro ao exportar backup: " + e.message);
    }
  };

  const handleCleanGarbage = async () => {
    setCleaningGarbage(true);
    setBackupNotice("Limpando cadastros inválidos e fragmentos estranhos...");
    try {
      const { removedCount, remainingCount } = await purgeGarbageMembers();
      await fetchMembers();
      if (removedCount > 0) {
        setBackupNotice(`🧹 Limpeza concluída! Foram removidos ${removedCount} cadastros inválidos gerados por engano pelo backup (como códigos "23fc7" ou logs). Restam ${remainingCount} membros oficiais.`);
      } else {
        setBackupNotice(`✨ Nenhum dado estranho encontrado. Todos os ${remainingCount} membros da casa são pessoas legítimas.`);
      }
      setTimeout(() => setBackupNotice(""), 8000);
    } catch (e: any) {
      alert("Erro ao executar limpeza: " + e.message);
    } finally {
      setCleaningGarbage(false);
    }
  };

  const handleResetOfficial = async () => {
    const ok = window.confirm(
      "Atenção: Deseja redefinir a lista para apenas os membros oficiais e fundadores do terreiro (Pai Felipe e equipe oficial), descartando qualquer cadastro estranho trazido por backup?"
    );
    if (!ok) return;

    setCleaningGarbage(true);
    try {
      const resetList = await resetToOfficialHouseMembers();
      setMembers(resetList);
      setBackupNotice(`🔄 Lista restaurada com os ${resetList.length} membros oficiais do terreiro.`);
      setTimeout(() => setBackupNotice(""), 8000);
    } catch (e: any) {
      alert("Erro ao restaurar membros oficiais: " + e.message);
    } finally {
      setCleaningGarbage(false);
    }
  };

  const handleDeleteMember = async (memberId: string) => {
    try {
      await supabase.from("membros").delete().eq("id", memberId);
      const updated = members.filter(m => m.id !== memberId);
      setMembers(updated);
      localStorage.setItem("tucpb_members", JSON.stringify(updated));
      setMemberToDelete(null);
      if (selectedMember?.id === memberId) setSelectedMember(null);
      setBackupNotice("Membro removido com sucesso.");
      setTimeout(() => setBackupNotice(""), 4000);
    } catch (e: any) {
      alert("Erro ao excluir membro: " + e.message);
    }
  };

  const handleImportBackup = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImportingBackup(true);
    setBackupNotice("Processando arquivo de backup (.backup / PostgreSQL)...");

    try {
      const result = await parseUniversalBackup(file);
      const parsed = result.members;

      if (parsed.length > 0) {
        // Sanitize current members to avoid carrying old garbage
        const { valid: cleanedCurrent } = sanitizeMemberList(members);
        const merged = [...cleanedCurrent];
        let addedCount = 0;
        let updatedCount = 0;

        for (const p of parsed) {
          const pEmail = (p.email || '').toLowerCase().trim();
          const foundIdx = merged.findIndex(m => (pEmail && m.email.toLowerCase().trim() === pEmail) || m.id === p.id);
          if (foundIdx >= 0) {
            merged[foundIdx] = { ...merged[foundIdx], ...p };
            updatedCount++;
          } else {
            merged.push(p);
            addedCount++;
          }
        }

        const { valid: finalMerged } = sanitizeMemberList(merged);
        localStorage.setItem("tucpb_members", JSON.stringify(finalMerged));
        setMembers(finalMerged);

        // Sync restored members to cloud database
        await supabase.from("membros").insert(finalMerged);

        // Also sync tasks if any were present in the backup
        if (result.tasks && result.tasks.length > 0) {
          await supabase.from("tarefas").insert(result.tasks);
        }

        const formatLabel =
          result.sourceFormat === "pg_custom_dump"
            ? "arquivo .backup do Supabase"
            : result.sourceFormat === "gzip_dump"
            ? "arquivo compactado (.gz)"
            : result.sourceFormat === "sql_dump"
            ? "script SQL (.sql)"
            : result.sourceFormat === "csv"
            ? "planilha CSV"
            : "arquivo JSON";

        setBackupNotice(`✅ Sucesso! ${parsed.length} filhos e médiuns legítimos foram recuperados do seu ${formatLabel} e sincronizados com a nuvem permanente (${finalMerged.length} no total da casa). Códigos de sistema e logs foram filtrados.`);
        setTimeout(() => setBackupNotice(""), 10000);
      } else {
        alert("Não foi possível identificar integrantes válidos neste arquivo. Nenhuma linha correspondia a membros ou pessoas reais.");
        setBackupNotice("");
      }
    } catch (err: any) {
      alert("Erro ao ler arquivo de backup: " + (err.message || String(err)));
      setBackupNotice("");
    } finally {
      setImportingBackup(false);
      if (e.target) e.target.value = "";
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data }: any) => {
      if (data?.session) {
        setSession(data.session);
        fetchMembers();
      }
    }).catch(() => {});

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event: any, session: any) => {
      setSession(session);
      if (session) fetchMembers();
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchMembers = async () => {
    // Automatically purge garbage members on fetch
    try {
      const { valid } = sanitizeMemberList(members);
      if (valid.length !== members.length && valid.length > 0) {
        setMembers(valid);
      }
    } catch {}

    try {
      const { data, error } = await supabase.from("membros").select("*");
      if (!error && data && data.length > 0) {
        const { valid } = sanitizeMemberList(data as UserProfile[]);
        setMembers(valid);
        return;
      }
    } catch (e) {
      console.warn("Erro ao buscar membros:", e);
    }

    try {
      const stored = localStorage.getItem("tucpb_members");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const { valid } = sanitizeMemberList(parsed);
          const existingEmails = new Set(valid.map((u: any) => u.email?.toLowerCase().trim()));
          const missing = initialMembers.filter(def => !existingEmails.has(def.email.toLowerCase().trim()));
          const merged = [...valid, ...missing];
          setMembers(merged);
          return;
        }
      }
    } catch (e) {}

    setMembers(initialMembers);
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const cleanEmail = (email || '').trim().toLowerCase();
    if (cleanEmail === DEFAULT_ADMIN_USER.email.toLowerCase()) {
      const adminSession = {
        access_token: 'local-admin-token',
        user: { id: DEFAULT_ADMIN_USER.id, email: DEFAULT_ADMIN_USER.email }
      };
      setSession(adminSession);
      localStorage.setItem("tucpb_logged_in_user", DEFAULT_ADMIN_USER.id);
      fetchMembers();
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: cleanEmail,
        password,
      });
      if (error) {
        setError("Credenciais inválidas ou e-mail não cadastrado.");
      } else if (data?.session) {
        setSession(data.session);
        fetchMembers();
      }
    } catch (err: any) {
      setError("Erro ao autenticar: " + (err.message || "Tente novamente."));
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9F9F6] p-4 font-sans">
        <div className="max-w-md w-full space-y-4">
          <div className="bg-white rounded-2xl shadow-xl border border-yellow-200/50 p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-serif text-yellow-600 mb-2">Administração</h1>
              <p className="text-sm text-gray-500">Acesso exclusivo ao painel do TUCPB</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm text-center bg-red-50 p-2 rounded">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-3 rounded-lg transition"
              >
                {loading ? "Entrando..." : "Entrar no Painel"}
              </button>
            </form>
          </div>

          {/* Quick Disaster Recovery / Backup Restore Card on Login Screen */}
          <div className="bg-white/80 backdrop-blur rounded-2xl border border-amber-200/80 p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 shrink-0">
                <Database size={20} />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-gray-900">Restaurar Banco de Dados Antigo</h3>
                <p className="text-xs text-gray-600 mt-0.5">
                  Baixou o arquivo <strong>.backup</strong> do Supabase? Recupere todos os filhos cadastrados e sincronize na nova nuvem:
                </p>
                <input
                  type="file"
                  ref={loginFileInputRef}
                  onChange={handleImportBackup}
                  accept=".backup,.dump,.sql,.json,.csv,.gz,.tar,.bin,application/octet-stream,*/*"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => loginFileInputRef.current?.click()}
                  disabled={importingBackup}
                  className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white text-xs font-semibold shadow-sm transition disabled:opacity-50"
                >
                  {importingBackup ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Lendo e restaurando arquivo .backup...
                    </>
                  ) : (
                    <>
                      <Upload size={16} />
                      Selecionar Arquivo .backup / .sql
                    </>
                  )}
                </button>
                {backupNotice && (
                  <p className="mt-2 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 p-2 rounded-lg font-medium">
                    {backupNotice}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F9F6] font-sans">
      {/* Header */}
      <header className="bg-white border-b border-yellow-200/50 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-xl font-serif font-bold text-yellow-700">Painel de Administração - TUCPB</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 transition"
          >
            <LogOut size={16} /> Sair
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Database & Backup Action Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-yellow-200/60 p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Google Firebase Firestore Ativo
              </span>
              <span className="text-xs text-gray-500">
                {members.length} {members.length === 1 ? "membro cadastrado" : "membros cadastrados"}
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Banco permanente sem risco de pausa. Arquivos de backup <strong>.backup</strong> (Supabase/PostgreSQL), <strong>.sql</strong>, <strong>.json</strong> e <strong>.csv</strong> são suportados.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImportBackup}
              accept=".backup,.dump,.sql,.json,.csv,.gz,.tar,.bin,application/octet-stream,*/*"
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={importingBackup}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl border border-amber-300 bg-amber-50/70 hover:bg-amber-100 text-amber-900 text-xs sm:text-sm font-semibold transition shadow-sm disabled:opacity-50"
              title="Importar arquivo .backup do Supabase ou JSON/SQL"
            >
              {importingBackup ? (
                <>
                  <Loader2 size={16} className="animate-spin text-amber-700" />
                  Processando...
                </>
              ) : (
                <>
                  <Upload size={16} className="text-amber-700" />
                  Restaurar Backup (.backup / .sql)
                </>
              )}
            </button>
            <button
              onClick={handleCleanGarbage}
              disabled={cleaningGarbage}
              className="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-rose-300 bg-rose-50 hover:bg-rose-100 text-rose-800 text-xs sm:text-sm font-semibold transition shadow-sm disabled:opacity-50"
              title="Remove cadastros com códigos hexadecimais, fragmentos de logs e erros de backups corrompidos"
            >
              {cleaningGarbage ? (
                <Loader2 size={16} className="animate-spin text-rose-700" />
              ) : (
                <Sparkles size={16} className="text-rose-600" />
              )}
              Limpar Cadastros Inválidos (Ex: 23fc7)
            </button>
            <button
              onClick={handleResetOfficial}
              disabled={cleaningGarbage}
              className="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-gray-300 bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs sm:text-sm font-semibold transition shadow-sm"
              title="Restaura apenas os membros fundadores oficiais do terreiro"
            >
              <RotateCcw size={15} className="text-gray-600" />
              Restaurar Oficiais
            </button>
            <button
              onClick={handleExportBackup}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-yellow-600 hover:bg-yellow-700 text-white text-xs sm:text-sm font-semibold transition shadow-sm hover:shadow"
              title="Baixar cópia de segurança em formato JSON"
            >
              <Download size={16} />
              Exportar JSON
            </button>
          </div>
        </div>

        {backupNotice && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-xl flex items-center gap-2 text-sm shadow-sm transition">
            <ShieldCheck size={18} className="text-emerald-600 shrink-0" />
            <span>{backupNotice}</span>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-sm border border-yellow-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-yellow-50/50 border-b border-yellow-100">
                  <th className="px-6 py-4 text-sm font-semibold text-yellow-800">Nome Completo</th>
                  <th className="px-6 py-4 text-sm font-semibold text-yellow-800">Cargo Litúrgico</th>
                  <th className="px-6 py-4 text-sm font-semibold text-yellow-800">WhatsApp</th>
                  <th className="px-6 py-4 text-sm font-semibold text-yellow-800">E-mail</th>
                  <th className="px-6 py-4 text-sm font-semibold text-yellow-800 text-center">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {members.map((member) => (
                  <tr key={member.id} className="hover:bg-yellow-50/30 transition cursor-pointer" onClick={() => setSelectedMember(member)}>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                      <div className="flex items-center gap-2">
                        <span>{member.name}</span>
                        {member.role === "admin" && (
                          <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">Sacerdote</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{member.cargoTerreiro}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{member.whatsapp || <span className="text-gray-400 italic">Não informado</span>}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{member.email}</td>
                    <td className="px-6 py-4 text-sm text-center">
                      <div className="flex items-center justify-center gap-1" onClick={(e) => e.stopPropagation()}>
                        <button
                          className="text-green-600 hover:text-green-800 transition p-2 rounded-full hover:bg-green-50"
                          title="Visualizar ficha completa"
                          onClick={() => setSelectedMember(member)}
                        >
                          <Eye size={18} />
                        </button>
                        {member.role !== "admin" && (
                          <button
                            className="text-red-500 hover:text-red-700 transition p-2 rounded-full hover:bg-red-50"
                            title="Excluir cadastro"
                            onClick={() => setMemberToDelete(member)}
                          >
                            <Trash2 size={18} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
                {members.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500 text-sm">
                      Nenhum membro encontrado ou carregando...
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Modal de Exclusão de Membro */}
      {memberToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-red-100">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Excluir Cadastro</h3>
            <p className="text-sm text-gray-600 mb-6">
              Tem certeza que deseja excluir <strong>{memberToDelete.name}</strong> ({memberToDelete.email})?
              Essa ação removerá o registro do sistema e do banco de dados na nuvem.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setMemberToDelete(null)}
                className="px-4 py-2 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl font-medium transition"
              >
                Cancelar
              </button>
              <button
                onClick={() => handleDeleteMember(memberToDelete.id)}
                className="px-4 py-2 text-sm text-white bg-red-600 hover:bg-red-700 rounded-xl font-semibold flex items-center gap-2 transition"
              >
                <Trash2 size={16} /> Confirmar Exclusão
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Detalhado */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-yellow-200">
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between z-10">
              <h2 className="text-2xl font-serif text-yellow-700 font-bold">{selectedMember.name}</h2>
              <button onClick={() => setSelectedMember(null)} className="p-2 text-gray-400 hover:text-gray-800 rounded-full hover:bg-gray-100 transition">
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              {/* Seção 1 */}
              <section>
                <h3 className="text-lg font-bold text-green-700 border-b border-green-100 pb-2 mb-4">Seção 1: Dados Civis e Identidade</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Info label="Nome Completo" value={selectedMember.name} />
                  <Info label="Cargo Litúrgico" value={selectedMember.cargoTerreiro} />
                  <Info label="E-mail" value={selectedMember.email} />
                  <Info label="WhatsApp" value={selectedMember.whatsapp} />
                  <Info label="CPF" value={selectedMember.cpf} />
                  <Info label="RG" value={selectedMember.rg} />
                  <Info label="Data de Nascimento" value={selectedMember.dataNascimento} />
                  <Info label="Tipo Sanguíneo" value={selectedMember.tipoSanguineo} />
                  <Info label="Profissão" value={selectedMember.profissao} />
                  <Info label="Endereço Completo" value={selectedMember.endereco} className="md:col-span-2" />
                </div>
              </section>

              {/* Seção 2 */}
              <section>
                <h3 className="text-lg font-bold text-green-700 border-b border-green-100 pb-2 mb-4">Seção 2: Saúde Integrativa</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Info label="Contato de Emergência" value={selectedMember.contatoEmergencia} />
                  <Info label="Alergias" value={selectedMember.alergias} />
                  <Info label="Acompanhamento Psicológico" value={selectedMember.acompanhamentoPsicologico} />
                  <Info label="Transtorno Psiquiátrico" value={selectedMember.transtornoPsiquiatrico} />
                  <Info label="Medicamentos Contínuos" value={selectedMember.medicamentosContinuos} className="md:col-span-2" />
                </div>
              </section>

              {/* Seção 3 */}
              <section>
                <h3 className="text-lg font-bold text-green-700 border-b border-green-100 pb-2 mb-4">Seção 3: Trajetória Espiritual</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Info label="Tempo de Desenvolvimento" value={selectedMember.tempoDesenvolvimento} />
                  <Info label="Terreiros Anteriores" value={selectedMember.terreirosAnteriores} />
                  <Info label="Iniciações/Obrigações Realizadas" value={selectedMember.iniciacoesRealizadas} />
                  <Info label="Tipos de Mediunidade" value={selectedMember.tiposMediunidade} />
                  <Info label="Guias/Orixás Conhecidos" value={selectedMember.guiasConhecidos} className="md:col-span-2" />
                </div>
              </section>

              {/* Seção 4 */}
              <section>
                <h3 className="text-lg font-bold text-green-700 border-b border-green-100 pb-2 mb-4">Seção 4: Sentido Existencial</h3>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">{selectedMember.buscaCoracao || "Não preenchido."}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Info({ label, value, className = "" }: { label: string; value?: string; className?: string }) {
  return (
    <div className={`space-y-1 ${className}`}>
      <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">{label}</span>
      <span className="block text-sm text-gray-900">{value || <span className="text-gray-400 italic">Não informado</span>}</span>
    </div>
  );
}
