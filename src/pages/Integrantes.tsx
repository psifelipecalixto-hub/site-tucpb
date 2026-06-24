import { useState, FormEvent } from "react";
import { Lock, Unlock, Users, ClipboardList, BookOpen, Bell, CheckCircle, Search, PlayCircle, TreePine, X, HelpCircle, GraduationCap } from "lucide-react";
import { initialTasks, initialPoints, initialLessons, initialHerbs } from "../data";
import { MemberTask, CurimbaPoint, Lesson, Herb } from "../types";

export default function Integrantes() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
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

  const [activeTab, setActiveTab] = useState<"escala" | "curimba" | "estudos" | "avisos">("escala");
  
  // Studies tab states
  const [activeEstudoTab, setActiveEstudoTab] = useState<"aulas" | "ervas">("aulas");
  const [searchEstudoQuery, setSearchEstudoQuery] = useState("");
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [selectedHerb, setSelectedHerb] = useState<Herb | null>(null);
  const [herbFilter, setHerbFilter] = useState<string>("Todas");

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === "tucpb2026") {
      setIsLoggedIn(true);
      setLoginError("");
    } else if (password === "") {
      setLoginError("Por favor, digite a senha.");
    } else {
      setLoginError("Acesso restrito aos filhos da casa.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPassword("");
  };

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

  const uniqueAreas = ["Todas", "Terreiro / Gongá", "Cozinha", "Portaria / Harmonização", "Defumação", "Curimba"];
  const filteredTasks = tasks.filter(t => filterArea === "Todas" || t.area === filterArea);

  const filteredSongs = initialPoints.filter(s => 
    s.title.toLowerCase().includes(searchSong.toLowerCase()) || 
    s.guideOrOrixa.toLowerCase().includes(searchSong.toLowerCase()) ||
    s.lyrics.toLowerCase().includes(searchSong.toLowerCase())
  );

  const filteredLessons = initialLessons.filter(les => 
    les.title.toLowerCase().includes(searchEstudoQuery.toLowerCase()) ||
    les.description.toLowerCase().includes(searchEstudoQuery.toLowerCase()) ||
    les.category.toLowerCase().includes(searchEstudoQuery.toLowerCase())
  );

  const filteredHerbs = initialHerbs.filter(herb => {
    const matchesSearch = herb.name.toLowerCase().includes(searchEstudoQuery.toLowerCase()) ||
      herb.orixa.toLowerCase().includes(searchEstudoQuery.toLowerCase()) ||
      herb.ritualUse.toLowerCase().includes(searchEstudoQuery.toLowerCase());
    
    const matchesFilter = herbFilter === "Todas" || herb.classification === herbFilter;
    return matchesSearch && matchesFilter;
  });

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
            Área Restrita de Estudos
          </h1>
          <p className="mx-auto max-w-2xl text-xs sm:text-sm text-areia-escura font-light leading-relaxed">
            Portal exclusivo para médiuns, cambones, ogãs e filhos do Templo Umbandista Caboclo Pena Branca.
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
                Digite a senha da casa para ver tarefas, avisos e acessar estudos profundos sobre a mironga, Ibás dos Orixás e regras da corrente.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4" id="login-form">
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
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4 border-b border-areia-escura pb-4">
            <div className="flex gap-2 w-full overflow-x-auto pb-1 sm:pb-0" id="member-tabs">
              <button
                onClick={() => setActiveTab("escala")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  activeTab === "escala"
                    ? "bg-marrom-terra text-pena-branca shadow-sm"
                    : "bg-white text-gray-600 border border-areia-escura hover:bg-areia-suave"
                }`}
              >
                <ClipboardList className="h-4 w-4" />
                Escala & Regras
              </button>
              <button
                onClick={() => setActiveTab("curimba")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  activeTab === "curimba"
                    ? "bg-marrom-terra text-pena-branca shadow-sm"
                    : "bg-white text-gray-600 border border-areia-escura hover:bg-areia-suave"
                }`}
              >
                <BookOpen className="h-4 w-4" />
                Apostilas do Terreiro
              </button>
              <button
                onClick={() => setActiveTab("estudos")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  activeTab === "estudos"
                    ? "bg-marrom-terra text-pena-branca shadow-sm"
                    : "bg-white text-gray-600 border border-areia-escura hover:bg-areia-suave"
                }`}
              >
                <GraduationCap className="h-4 w-4" />
                Estudos Profundos
              </button>
              <button
                onClick={() => setActiveTab("avisos")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  activeTab === "avisos"
                    ? "bg-marrom-terra text-pena-branca shadow-sm"
                    : "bg-white text-gray-600 border border-areia-escura hover:bg-areia-suave"
                }`}
              >
                <Bell className="h-4 w-4" />
                Mural de Avisos
              </button>
            </div>
            <button
              onClick={handleLogout}
              className="text-xs text-red-600 hover:text-red-800 font-semibold flex items-center gap-1 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-md transition-colors"
            >
              Sair
            </button>
          </div>

          {/* TAB 1: Escala e Regras */}
          {activeTab === "escala" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in-quick">
              <div className="lg:col-span-8 space-y-6">
                <div className="bg-white rounded-xl border border-areia-escura shadow-sm overflow-hidden">
                  <div className="bg-areia-suave px-6 py-4 border-b border-areia-escura flex justify-between items-center">
                    <h2 className="font-serif font-bold text-gray-900 flex items-center gap-2">
                      <ClipboardList className="h-5 w-5 text-verde-folha" />
                      Escala de Trabalhos (Sábado)
                    </h2>
                    <select
                      value={filterArea}
                      onChange={(e) => setFilterArea(e.target.value)}
                      className="text-xs px-2 py-1 rounded bg-white border border-areia-escura focus:outline-none"
                    >
                      {uniqueAreas.map(area => <option key={area} value={area}>{area}</option>)}
                    </select>
                  </div>
                  
                  <div className="divide-y divide-areia-escura max-h-[600px] overflow-y-auto">
                    {filteredTasks.length === 0 ? (
                      <div className="p-8 text-center text-gray-500 text-sm">Nenhuma tarefa designada para esta área.</div>
                    ) : (
                      filteredTasks.map((task) => (
                        <div key={task.id} className="p-4 sm:p-6 flex items-start gap-4 hover:bg-gray-50 transition-colors">
                          <button 
                            onClick={() => handleToggleTask(task.id)}
                            className="mt-1 shrink-0"
                          >
                            {task.status === "Concluido" ? (
                              <CheckCircle className="h-6 w-6 text-emerald-500" />
                            ) : task.status === "Em Andamento" ? (
                              <div className="h-6 w-6 rounded-full border-2 border-amber-500 bg-amber-100 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                              </div>
                            ) : (
                              <div className="h-6 w-6 rounded-full border-2 border-gray-300 hover:border-verde-folha transition-colors"></div>
                            )}
                          </button>
                          
                          <div className="flex-1 space-y-1.5">
                            <h3 className={`text-sm font-semibold ${task.status === "Concluido" ? "text-gray-400 line-through" : "text-gray-900"}`}>
                              {task.task}
                            </h3>
                            <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono">
                              <span className="bg-marrom-terra/5 text-marrom-terra px-2 py-0.5 rounded font-bold">
                                {task.area}
                              </span>
                              <span className="text-gray-500">Membro: {task.assignedTo}</span>
                              <span className={`px-2 py-0.5 rounded ${
                                task.status === "Pendente" ? "bg-gray-100 text-gray-600" :
                                task.status === "Em Andamento" ? "bg-amber-100 text-amber-800" :
                                "bg-emerald-100 text-emerald-800"
                              }`}>
                                {task.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-6">
                <form onSubmit={handleAddTask} className="bg-white rounded-xl border border-areia-escura p-6 shadow-sm space-y-4">
                  <h3 className="font-serif font-bold text-gray-900 text-sm border-b border-areia-escura pb-2">
                    Designar Nova Tarefa Litúrgica
                  </h3>
                  
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-gray-700 block">Descrição da Tarefa</label>
                    <input
                      type="text"
                      placeholder="Ex: Preparar amaci de Oxalá"
                      value={newTaskText}
                      onChange={(e) => setNewTaskText(e.target.value)}
                      className="w-full px-3 py-2 border border-areia-escura bg-areia-suave text-xs rounded-lg focus:outline-none focus:ring-1 focus:ring-verde-folha"
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
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-gray-700 block">Área Litúrgica</label>
                    <select
                      value={newTaskArea}
                      onChange={(e) => setNewTaskArea(e.target.value as MemberTask["area"])}
                      className="w-full px-3 py-2 border border-areia-escura bg-areia-suave text-xs rounded-lg focus:outline-none focus:ring-1 focus:ring-verde-folha"
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
                  >
                    Escalar Integrante
                  </button>
                </form>
              </div>

            </div>
          )}

          {/* TAB 2: Apostilas do Terreiro */}
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
                        Toque: {selectedSong.rhythm}
                      </span>
                    </div>

                    <div className="p-6 bg-areia-suave border border-areia-escura rounded-lg relative">
                       <div className="absolute top-4 right-4 opacity-10">
                          <BookOpen className="h-24 w-24 text-marrom-terra" />
                       </div>
                       <pre className="font-serif text-sm sm:text-base text-gray-800 whitespace-pre-wrap leading-loose relative z-10">
                         {selectedSong.lyrics}
                       </pre>
                    </div>

                    {selectedSong.audioUrl && (
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-between">
                         <span className="text-xs font-bold text-gray-600 flex items-center gap-2">
                           <PlayCircle className="h-4 w-4" />
                           Áudio de Referência (Simulado)
                         </span>
                         <div className="h-2 w-32 bg-gray-200 rounded-full overflow-hidden">
                           <div className="h-full w-1/3 bg-verde-folha rounded-full"></div>
                         </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-gray-400 space-y-4">
                    <BookOpen className="h-12 w-12 opacity-20" />
                    <p className="text-sm">Selecione um ponto na lista para ver a letra e o toque.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: Estudos Profundos */}
          {activeTab === "estudos" && (
            <div className="space-y-6 animate-fade-in-quick">
              <div className="bg-white rounded-2xl border border-areia-escura p-4 shadow-sm flex flex-col sm:flex-row items-center gap-4">
                <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
                  <button
                    onClick={() => setActiveEstudoTab("aulas")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                      activeEstudoTab === "aulas"
                        ? "bg-verde-mata text-white shadow-sm"
                        : "bg-areia-suave text-gray-600 hover:bg-areia-escura"
                    }`}
                  >
                    <PlayCircle className="h-4 w-4" />
                    Aulas de Fundamentos & Ibás
                  </button>
                  <button
                    onClick={() => setActiveEstudoTab("ervas")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                      activeEstudoTab === "ervas"
                        ? "bg-verde-mata text-white shadow-sm"
                        : "bg-areia-suave text-gray-600 hover:bg-areia-escura"
                    }`}
                  >
                    <TreePine className="h-4 w-4" />
                    Catálogo de Ervas
                  </button>
                </div>
                <div className="relative w-full sm:w-64 sm:ml-auto">
                  <Search className="absolute left-3 top-2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Pesquisar estudos..."
                    value={searchEstudoQuery}
                    onChange={(e) => setSearchEstudoQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-1.5 border border-areia-escura bg-areia-suave text-xs rounded-lg focus:outline-none focus:ring-1 focus:ring-verde-folha"
                  />
                </div>
              </div>

              {activeEstudoTab === "aulas" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredLessons.length === 0 ? (
                    <p className="col-span-2 text-center py-16 text-gray-500">Nenhuma aula encontrada.</p>
                  ) : (
                    filteredLessons.map((lesson) => (
                      <div key={lesson.id} className="bg-white rounded-xl border border-areia-escura overflow-hidden shadow-sm flex flex-col h-full">
                        <div className="relative bg-gradient-to-br from-marrom-terra to-marrom-tronco aspect-video flex items-center justify-center group overflow-hidden">
                          <PlayCircle className="h-12 w-12 text-white/50 group-hover:scale-110 group-hover:text-white transition-all cursor-pointer z-10" onClick={() => setSelectedLesson(lesson)}/>
                          <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded font-mono">{lesson.duration}</div>
                          <div className="absolute top-2 right-2 bg-verde-folha text-white text-[10px] px-2 py-0.5 rounded uppercase font-bold">{lesson.level}</div>
                        </div>
                        <div className="p-4 flex-1 space-y-2">
                          <span className="text-[10px] font-mono text-gray-500 uppercase">Módulo: {lesson.category}</span>
                          <h3 className="font-serif font-bold text-gray-900 leading-tight">{lesson.title}</h3>
                          <p className="text-xs text-gray-600 line-clamp-2">{lesson.description}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}

              {activeEstudoTab === "ervas" && (
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {["Todas", "Fria", "Morna", "Quente"].map((cls) => (
                      <button
                        key={cls}
                        onClick={() => setHerbFilter(cls)}
                        className={`px-3 py-1 text-xs font-bold rounded-full border transition-colors ${
                          herbFilter === cls ? "bg-verde-folha text-white border-verde-folha" : "bg-white text-gray-600 border-areia-escura"
                        }`}
                      >
                        {cls}
                      </button>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {filteredHerbs.map((herb) => (
                      <div key={herb.id} className="bg-white rounded-xl border border-areia-escura p-4 shadow-sm flex flex-col hover:border-verde-folha/50 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <TreePine className="h-5 w-5 text-verde-folha" />
                          <span className="text-[10px] bg-gray-100 text-gray-800 px-2 py-0.5 rounded font-bold uppercase">{herb.classification}</span>
                        </div>
                        <h3 className="font-serif font-bold text-gray-900">{herb.name}</h3>
                        <p className="text-[10px] text-gray-500 font-mono mb-2">Vibração: {herb.orixa}</p>
                        <button onClick={() => setSelectedHerb(herb)} className="mt-auto w-full py-1.5 bg-areia-suave hover:bg-areia-escura text-gray-800 text-xs font-semibold rounded-lg transition-colors">Ver Fundamento</button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: Mural de Avisos */}
          {activeTab === "avisos" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-quick">
              {internalBulletins.map((bulletin) => (
                <div key={bulletin.id} className={`rounded-xl p-6 border shadow-sm flex flex-col space-y-3 ${
                  bulletin.important ? "bg-red-50 border-red-200" : "bg-white border-areia-escura"
                }`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm ${
                      bulletin.important ? "bg-red-100 text-red-800" : "bg-areia-suave text-gray-600"
                    }`}>
                      {bulletin.important ? "Urgente" : "Informativo"}
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono">{bulletin.date}</span>
                  </div>
                  
                  <h3 className={`font-serif text-lg font-bold ${bulletin.important ? "text-red-900" : "text-gray-900"}`}>
                    {bulletin.title}
                  </h3>
                  
                  <p className={`text-sm leading-relaxed ${bulletin.important ? "text-red-800" : "text-gray-600"}`}>
                    {bulletin.content}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* MODAL: Video Lesson */}
      {selectedLesson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in-quick">
          <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-areia-escura flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between p-4 border-b border-areia-escura bg-areia-suave">
              <div className="flex items-center gap-3">
                <PlayCircle className="h-5 w-5 text-verde-mata" />
                <h3 className="font-bold text-sm text-gray-900">{selectedLesson.title}</h3>
              </div>
              <button onClick={() => setSelectedLesson(null)} className="p-2 rounded-full hover:bg-gray-200 text-gray-500">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="bg-black aspect-video relative flex items-center justify-center">
              <PlayCircle className="h-16 w-16 text-white/30" />
            </div>
            <div className="p-6 overflow-y-auto">
              <p className="text-sm text-gray-700">{selectedLesson.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: Herb Details */}
      {selectedHerb && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in-quick">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-6 border border-areia-escura">
            <button onClick={() => setSelectedHerb(null)} className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-500">
              <X className="h-5 w-5" />
            </button>
            <h2 className="font-serif text-2xl font-bold text-marrom-terra mb-1">{selectedHerb.name}</h2>
            <p className="text-xs text-gray-500 font-mono mb-4">Classificação: {selectedHerb.classification}</p>
            <div className="space-y-4 text-sm text-gray-700">
              <div><strong>Vibração:</strong> {selectedHerb.orixa}</div>
              <div><strong>Uso Ritual:</strong> {selectedHerb.ritualUse}</div>
              <div><strong>Preparo:</strong> {selectedHerb.preparation}</div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
