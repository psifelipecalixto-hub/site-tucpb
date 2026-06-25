import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { UserProfile } from "../types";
import { LogOut, Eye, X } from "lucide-react";

export default function Admin() {
  const [session, setSession] = useState<any>(null);
  const [email, setEmail] = useState("baba.ajo.tucpb@gmail.com");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [members, setMembers] = useState<UserProfile[]>([]);
  const [selectedMember, setSelectedMember] = useState<UserProfile | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) fetchMembers();
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) fetchMembers();
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchMembers = async () => {
    const { data, error } = await supabase.from("membros").select("*");
    if (error) {
      console.error("Erro ao buscar membros:", error);
    } else {
      setMembers(data as UserProfile[]);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setError(error.message);
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9F9F6] p-4 font-sans">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-yellow-200/50 p-8">
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-yellow-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-yellow-50/50 border-b border-yellow-100">
                  <th className="px-6 py-4 text-sm font-semibold text-yellow-800">Nome Completo</th>
                  <th className="px-6 py-4 text-sm font-semibold text-yellow-800">Cargo Litúrgico</th>
                  <th className="px-6 py-4 text-sm font-semibold text-yellow-800">WhatsApp</th>
                  <th className="px-6 py-4 text-sm font-semibold text-yellow-800">E-mail</th>
                  <th className="px-6 py-4 text-sm font-semibold text-yellow-800 text-center">Ficha</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {members.map((member) => (
                  <tr key={member.id} className="hover:bg-yellow-50/30 transition cursor-pointer" onClick={() => setSelectedMember(member)}>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{member.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{member.cargoTerreiro}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{member.whatsapp}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{member.email}</td>
                    <td className="px-6 py-4 text-sm text-center">
                      <button className="text-green-600 hover:text-green-800 transition p-2 rounded-full hover:bg-green-50" onClick={(e) => { e.stopPropagation(); setSelectedMember(member); }}>
                        <Eye size={18} />
                      </button>
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
