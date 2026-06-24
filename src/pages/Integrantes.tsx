/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { Lock, Unlock, Users, ClipboardList, BookOpen, Bell, CheckCircle, Search, Feather, Plus, LogOut, ArrowRight } from "lucide-react";
import { initialTasks, initialPoints } from "../data";
import { MemberTask, CurimbaPoint } from "../types";

export default function Integrantes() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginError, setLoginError] = useState<string>("");

  // Member Dashboard States
  const [tasks, setTasks] = useState<MemberTask[]>(initialTasks);
  const [filterArea, setFilterArea] = useState<string>("Todas");
  const [searchSong, setSearchSong] = useState<string>("");
  const [selectedSong, setSelectedSong] = useState<CurimbaPoint | null>(initialPoints[0]);

  // Form states to add new internal tasks
  const [newTaskText, setNewTaskText] = useState("");
  const [newAssignedTo, setNewAssignedTo] = useState("");
  const [newTaskArea, setNewTaskArea] = useState<MemberTask["area"]>("Terreiro / Gongá");

  const [activeTab, setActiveTab] = useState<"escala" | "curimba" | "avisos">("escala");

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim().toLowerCase() === "membro@tucpb.com" && password === "oxala") {
      setIsLoggedIn(true);
      setLoginError("");
    } else if (email.trim() === "" || password === "") {
      setLoginError("Por favor, preencha todos os campos.");
    } else {
      setLoginError("Credenciais inválidas. Para testar o preview, digite o e-mail: membro@tucpb.com e senha: oxala");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  // Toggle task completion
  const handleToggleTask = (taskId: string) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === taskId) {
          const nextStatusMap: Record<MemberTask["status"], MemberTask["status"]> = {
            "Pendente": "Em Andamento",
            "Em Andamento": "Concluido",
            "Concluido": "Pendente",
          };
          return { ...t, status: nextStatusMap[t.status] };
        }
        return t;
      })
    );
  };

  // Add new task
  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTaskText.trim() || !newAssignedTo.trim()) return;

    const newTaskItem: MemberTask = {
      id: `tsk-${Date.now()}`,
      task: newTaskText,
      assignedTo: newAssignedTo,
      area: newTaskArea,
      status: "Pendente",
      date: "Sábado de Gira"
    };

    setTasks([newTaskItem, ...tasks]);
    setNewTaskText("");
    setNewAssignedTo("");
  };

  // Filter tasks based on Area selection
  const uniqueAreas = ["Todas", "Terreiro / Gongá", "Cozinha", "Portaria / Harmonização", "Defumação", "Curimba"];
  const filteredTasks = tasks.filter(t => filterArea === "Todas" || t.area === filterArea);

  // Filter songs based on search
  const filteredSongs = initialPoints.filter(s => 
    s.title.toLowerCase().includes(searchSong.toLowerCase()) || 
    s.guideOrOrixa.toLowerCase().includes(searchSong.toLowerCase()) ||
    s.lyrics.toLowerCase().includes(searchSong.toLowerCase())
  );

  const internalBulletins = [
    {
      id: "bul-1",
      title: "Reunião Geral de Doutrinação e Passes",
      date: "28/06 às 15:00",
      content: "Convocamos todos os médiuns da corrente de incorporação para o nosso círculo de estudos mensais. Analisaremos o acoplamento magnético e passes de cura. Presença indispensável.",
      important: true,
    },
    {
      id: "bul-2",
      title: "Arrecadação para Festa de Cosme e Damião",
      date: "Até 15/07",
      content: "Iniciamos a arrecadação de doces, refrigerantes, brinquedos ou contribuições financeiras para o nosso tradicional festejo de Erês que ocorrerá em Setembro. Procurem a coordenação da cozinha.",
      important: false,
    },
    {
      id: "bul-3",
      title: "Padronização das Vestimentas Brancas",
      date: "Imediato",
      content: "Lembramos a todos os irmãos e irmãs sobre as regras doutrinárias: as roupas devem ser totalmente brancas, de algodão simples, sem estampas, rendas excessivas ou brilhos. Respeitemos a pureza espiritual do Gongá.",
      important: true,
    }
  ];

  return (
    <div className="animate-fade-in pb-16" id="integrantes-page">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-verde-mata to-verde-folha py-12 text-center text-pena-branca px-4 sm:px-6 lg:px-8 shadow-md">
        <div className="mx-auto max-w-4xl space-y-3">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-pena-branca/10 text-areia-escura mb-1">
            <Users className="h-6 w-6" />
          </div>
          <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Área de Integrantes
          </h1>
          <p className="mx-auto max-w-2xl text-xs sm:text-sm text-areia-escura font-light leading-relaxed">
            Portal exclusivo para médiuns, cambones, ogãs e colaboradores do Templo Umbandista Caboclo Pena Branca.
          </p>
        </div>
      </section>

      {/* Login Screen (If NOT Logged In) */}
      {!isLoggedIn ? (
        <section className="mx-auto max-w-lg px-4 mt-12">
          <div className="bg-white rounded-2xl border border-areia-escura p-8 shadow-sm space-y-6">
            <div className="text-center space-y-2">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-marrom-terra/10 text-marrom-terra">
                <Lock className="h-6 w-6" />
              </div>
              <h2 className="font-serif text-xl font-bold text-gray-900">Acesso Restrito</h2>
              <p className="text-xs text-gray-500">
                Entre com suas credenciais de médium cadastrado para ver tarefas, avisos e a apostila de curimba.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4" id="login-form">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700 block">E-mail do Integrante</label>
                <input
                  type="email"
                  placeholder="membro@tucpb.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-areia-escura bg-areia-suave text-sm focus:outline-none focus:ring-2 focus:ring-verde-folha"
                  id="login-email"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700 block">Senha de Acesso</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-areia-escura bg-areia-suave text-sm focus:outline-none focus:ring-2 focus:ring-verde-folha"
                  id="login-password"
                />
              </div>

              {loginError && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-xs font-medium">
                  {loginError}
                </div>
              )}

              {/* Informative credentials hint as requested by instructions */}
              <div className="p-3.5 bg-verde-folha/5 border border-verde-folha/20 text-verde-folha rounded-lg text-xs leading-relaxed space-y-1">
                <span className="font-bold flex items-center gap-1">🔑 Acesso de Teste (Preview):</span>
                <p>Use o e-mail <strong>membro@tucpb.com</strong> e a senha <strong>oxala</strong> para acessar os painéis de tarefas e materiais de estudo.</p>
              </div>

              <button
                type="submit"
                className="w-full bg-verde-mata text-pena-branca py-2.5 rounded-lg text-sm font-semibold hover:bg-verde-folha shadow-sm transition-colors flex items-center justify-center gap-2"
                id="login-submit-btn"
              >
                Autenticar Acesso
                <Unlock className="h-4 w-4" />
              </button>
            </form>
          </div>
        </section>
      ) : (
        /* Member Dashboard (If Logged In) */
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 space-y-8">
          
          {/* Dashboard Header Bar */}
          <div className="bg-white rounded-xl border border-areia-escura p-6 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-verde-folha/15 text-verde-folha flex items-center justify-center font-serif font-bold text-xl">
                L
              </div>
              <div>
                <h2 className="font-serif text-lg font-bold text-gray-900">Lucas de Ogum</h2>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="text-[10px] font-mono bg-verde-folha/10 text-verde-folha px-2 py-0.5 rounded-full font-semibold">
                    Corrente Ativa
                  </span>
                  <span className="text-[10px] font-mono bg-marrom-terra/10 text-marrom-terra px-2 py-0.5 rounded-full font-semibold">
                    Médium de Incorporação
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 text-xs font-semibold transition-all"
              id="logout-btn"
            >
              <LogOut className="h-3.5 w-3.5" />
              Sair do Portal
            </button>
          </div>

          {/* Tab Selection */}
          <div className="flex border-b border-areia-escura gap-2" id="member-tabs">
            <button
              onClick={() => setActiveTab("escala")}
              className={`pb-3 px-4 font-serif text-sm font-bold flex items-center gap-2 border-b-2 transition-all ${
                activeTab === "escala"
                  ? "border-verde-folha text-verde-folha"
                  : "border-transparent text-gray-500 hover:text-gray-900"
              }`}
              id="tab-btn-escala"
            >
              <ClipboardList className="h-4 w-4" />
              Escala de Gira
            </button>
            <button
              onClick={() => setActiveTab("curimba")}
              className={`pb-3 px-4 font-serif text-sm font-bold flex items-center gap-2 border-b-2 transition-all ${
                activeTab === "curimba"
                  ? "border-verde-folha text-verde-folha"
                  : "border-transparent text-gray-500 hover:text-gray-900"
              }`}
              id="tab-btn-curimba"
            >
              <BookOpen className="h-4 w-4" />
              Apostila de Pontos
            </button>
            <button
              onClick={() => setActiveTab("avisos")}
              className={`pb-3 px-4 font-serif text-sm font-bold flex items-center gap-2 border-b-2 transition-all ${
                activeTab === "avisos"
                  ? "border-verde-folha text-verde-folha"
                  : "border-transparent text-gray-500 hover:text-gray-900"
              }`}
              id="tab-btn-avisos"
            >
              <Bell className="h-4 w-4" />
              Avisos Internos
            </button>
          </div>

          {/* TAB 1: Escala de Gira (Tasks Manager) */}
          {activeTab === "escala" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in-quick">
              
              {/* Filter & Task List */}
              <div className="lg:col-span-8 space-y-6">
                <div className="bg-white rounded-xl border border-areia-escura p-6 shadow-sm space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h3 className="font-serif text-base font-bold text-marrom-terra">
                      Quadro de Escalas e Limpeza
                    </h3>
                    
                    {/* Area Filters */}
                    <select
                      value={filterArea}
                      onChange={(e) => setFilterArea(e.target.value)}
                      className="text-xs bg-areia-suave border border-areia-escura px-2.5 py-1.5 rounded-lg focus:outline-none focus:ring-1 focus:ring-verde-folha"
                    >
                      {uniqueAreas.map((area) => (
                        <option key={area} value={area}>{area}</option>
                      ))}
                    </select>
                  </div>

                  {/* Tasks list */}
                  <div className="space-y-3">
                    {filteredTasks.length === 0 ? (
                      <p className="text-center py-8 text-xs text-gray-500">Nenhuma escala encontrada para esta área.</p>
                    ) : (
                      filteredTasks.map((t) => (
                        <div
                          key={t.id}
                          onClick={() => handleToggleTask(t.id)}
                          className={`p-4 rounded-xl border flex items-start gap-4 cursor-pointer transition-all ${
                            t.status === "Concluido"
                              ? "bg-gray-50 border-gray-200 text-gray-400"
                              : "bg-white border-areia-escura hover:border-marrom-claro hover:shadow-sm"
                          }`}
                        >
                          <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                            t.status === "Concluido"
                              ? "bg-verde-folha border-verde-folha text-white"
                              : t.status === "Em Andamento"
                              ? "border-amber-400 bg-amber-50 text-amber-500"
                              : "border-gray-300"
                          }`}>
                            {t.status === "Concluido" && <CheckCircle className="h-4 w-4" />}
                          </div>

                          <div className="flex-1 space-y-1">
                            <p className={`text-sm font-semibold leading-tight ${t.status === "Concluido" ? "line-through" : "text-gray-900"}`}>
                              {t.task}
                            </p>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
                              <span className="font-medium text-marrom-tronco">👤 {t.assignedTo}</span>
                              <span className="text-gray-400 font-mono">📅 {t.date}</span>
                              <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                                t.area === "Curimba" ? "bg-amber-100 text-amber-800" :
                                t.area === "Cozinha" ? "bg-purple-100 text-purple-800" :
                                t.area === "Defumação" ? "bg-rose-100 text-rose-800" :
                                "bg-emerald-100 text-emerald-800"
                              }`}>
                                {t.area}
                              </span>
                            </div>
                          </div>

                          <div className="text-right shrink-0">
                            <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                              t.status === "Concluido"
                                ? "bg-green-100 text-green-800"
                                : t.status === "Em Andamento"
                                ? "bg-amber-100 text-amber-800"
                                : "bg-gray-100 text-gray-800"
                            }`}>
                              {t.status}
                            </span>
                            <p className="text-[9px] text-gray-400 mt-1">Clique para mudar</p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              {/* Add New Duty Form */}
              <div className="lg:col-span-4 bg-white rounded-xl border border-areia-escura p-6 shadow-sm space-y-4">
                <h3 className="font-serif text-base font-bold text-marrom-terra flex items-center gap-1.5">
                  <Plus className="h-4 w-4 text-verde-folha" />
                  Escalar Nova Tarefa
                </h3>
                <p className="text-xs text-gray-500">
                  Adicione afazeres de preparação ou assistência para as giras de sábado.
                </p>

                <form onSubmit={handleAddTask} className="space-y-3" id="add-task-form">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-gray-700 block">Qual é o afazer?</label>
                    <input
                      type="text"
                      placeholder="Ex: Buscar arruda na horta do terreiro"
                      value={newTaskText}
                      onChange={(e) => setNewTaskText(e.target.value)}
                      className="w-full px-3 py-2 border border-areia-escura bg-areia-suave text-xs rounded-lg focus:outline-none focus:ring-1 focus:ring-verde-folha"
                      id="new-task-text"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-gray-700 block">Responsável (Quem fará?)</label>
                    <input
                      type="text"
                      placeholder="Ex: Médium Marcelo"
                      value={newAssignedTo}
                      onChange={(e) => setNewAssignedTo(e.target.value)}
                      className="w-full px-3 py-2 border border-areia-escura bg-areia-suave text-xs rounded-lg focus:outline-none focus:ring-1 focus:ring-verde-folha"
                      id="new-task-assignee"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-gray-700 block">Área Litúrgica</label>
                    <select
                      value={newTaskArea}
                      onChange={(e) => setNewTaskArea(e.target.value as MemberTask["area"])}
                      className="w-full px-3 py-2 border border-areia-escura bg-areia-suave text-xs rounded-lg focus:outline-none focus:ring-1 focus:ring-verde-folha"
                      id="new-task-area"
                    >
                      <option value="Terreiro / Gongá">Terreiro / Gongá</option>
                      <option value="Cozinha">Cozinha</option>
                      <option value="Portaria / Harmonização">Portaria / Harmonização</option>
                      <option value="Defumação">Defumação</option>
                      <option value="Curimba">Curimba</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-marrom-terra text-pena-branca py-2 rounded-lg text-xs font-semibold hover:bg-marrom-tronco shadow-sm transition-colors"
                    id="add-task-btn"
                  >
                    Escalar Integrante
                  </button>
                </form>
              </div>

            </div>
          )}

          {/* TAB 2: Apostila de Pontos (Curimba) */}
          {activeTab === "curimba" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in-quick">
              
              {/* Left Column: List and search */}
              <div className="lg:col-span-5 bg-white rounded-xl border border-areia-escura p-6 shadow-sm space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar por orixá, guia ou letra..."
                    value={searchSong}
                    onChange={(e) => setSearchSong(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 border border-areia-escura bg-areia-suave text-xs rounded-lg focus:outline-none focus:ring-1 focus:ring-verde-folha"
                    id="search-song-input"
                  />
                </div>

                <div className="space-y-2 max-h-[400px] overflow-y-auto pr-1">
                  {filteredSongs.length === 0 ? (
                    <p className="text-center py-8 text-xs text-gray-500">Nenhum ponto encontrado.</p>
                  ) : (
                    filteredSongs.map((song) => (
                      <button
                        key={song.id}
                        onClick={() => setSelectedSong(song)}
                        className={`w-full text-left p-3.5 rounded-lg border flex flex-col gap-1 transition-all ${
                          selectedSong?.id === song.id
                            ? "bg-verde-folha/10 border-verde-folha text-verde-folha shadow-sm"
                            : "bg-white hover:bg-gray-50 border-areia-escura text-gray-700"
                        }`}
                      >
                        <div className="flex justify-between items-center w-full">
                          <span className="font-serif text-xs font-bold">{song.title}</span>
                          <span className="text-[10px] bg-marrom-terra/5 text-marrom-terra px-2 py-0.5 rounded font-bold font-mono">
                            {song.type}
                          </span>
                        </div>
                        <span className="text-[10px] text-gray-500 font-medium">Firmeza: {song.guideOrOrixa}</span>
                      </button>
                    ))
                  )}
                </div>
              </div>

              {/* Right Column: Song Lyrics Sheet */}
              <div className="lg:col-span-7 bg-white rounded-xl border border-areia-escura p-8 shadow-sm">
                {selectedSong ? (
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-areia-escura pb-4">
                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-verde-folha">
                          Ponto de {selectedSong.guideOrOrixa}
                        </span>
                        <h3 className="font-serif text-xl font-bold text-gray-900 mt-1">
                          {selectedSong.title}
                        </h3>
                      </div>
                      <span className="px-3 py-1 bg-marrom-terra text-pena-branca text-xs font-semibold rounded-full">
                        Toque / Classificação: {selectedSong.type}
                      </span>
                    </div>

                    <div className="bg-[#fcfbfa] rounded-xl p-6 border border-areia-escura/60 shadow-inner">
                      <pre className="font-sans text-sm text-gray-800 leading-relaxed whitespace-pre-line text-center">
                        {selectedSong.lyrics}
                      </pre>
                    </div>

                    <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800 flex items-start gap-2">
                      <Feather className="h-4 w-4 shrink-0 mt-0.5 text-amber-500" />
                      <p>
                        <strong>Sustentação na Gira:</strong> Este ponto cantado deve ser entoado com vibração alegre e forte batida dos atabaques. Cambones e médiuns devem apoiar o coro com palmas harmoniosas.
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="text-center py-12 text-xs text-gray-500">Selecione um ponto à esquerda para ler a letra.</p>
                )}
              </div>

            </div>
          )}

          {/* TAB 3: Avisos Internos */}
          {activeTab === "avisos" && (
            <div className="mx-auto max-w-4xl space-y-6 animate-fade-in-quick">
              
              <div className="flex items-center gap-2 border-b border-areia-escura pb-3">
                <Bell className="h-5 w-5 text-verde-folha" />
                <h3 className="font-serif text-base font-bold text-marrom-terra">
                  Painel de Avisos Doutrinários
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {internalBulletins.map((item) => (
                  <div
                    key={item.id}
                    className={`p-6 rounded-2xl border ${
                      item.important
                        ? "bg-rose-50/50 border-rose-200 ring-1 ring-rose-300/40"
                        : "bg-white border-areia-escura shadow-sm"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="font-serif text-base font-bold text-gray-900">{item.title}</h4>
                          {item.important && (
                            <span className="text-[9px] bg-rose-500 text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                              Importante / Urgente
                            </span>
                          )}
                        </div>
                        <p className="text-xs font-mono text-gray-400">Publicado para: {item.date}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed mt-4">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          )}

        </section>
      )}

    </div>
  );
}
