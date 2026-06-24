import { useState, FormEvent, useEffect, useRef, ChangeEvent } from "react";
import { Lock, Unlock, Users, ClipboardList, BookOpen, Bell, CheckCircle, Search, PlayCircle, TreePine, X, GraduationCap, Upload, Shield, User as UserIcon, Calendar as CalendarIcon, LogOut, Plus, Check, Clock } from "lucide-react";
import { initialPoints, initialLessons, initialHerbs, initialTasks } from "../data";
import { MemberTask, CurimbaPoint, Lesson, Herb, UserProfile } from "../types";

// Default admin user for demonstration
const DEFAULT_ADMIN: UserProfile = {
  id: "admin-1",
  name: "Pai Felipe",
  email: "admin@tucpb.com",
  password: "admin", // simple password for testing
  role: "admin",
  cargoTerreiro: "Dirigente Espiritual",
  dataAmaci: "10/10/2010",
  photoUrl: ""
};

export default function Integrantes() {
  // --- Local Storage Database States ---
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [tasks, setTasks] = useState<MemberTask[]>([]);
  
  // --- Auth States ---
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [authName, setAuthName] = useState("");
  const [authCargo, setAuthCargo] = useState("Médium de Incorporação");
  const [authAmaci, setAuthAmaci] = useState("");
  const [authError, setAuthError] = useState("");

  // --- Dashboard States ---
  const [activeTab, setActiveTab] = useState<"perfil" | "minhas-tarefas" | "estudos" | "admin" | "curimba">("perfil");
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- Admin States ---
  const [newTaskText, setNewTaskText] = useState("");
  const [newAssignedTo, setNewAssignedTo] = useState("");
  const [newTaskArea, setNewTaskArea] = useState<MemberTask["area"]>("Terreiro / Gongá");

  // --- Study States ---
  const [activeEstudoTab, setActiveEstudoTab] = useState<"aulas" | "ervas">("aulas");
  const [searchEstudoQuery, setSearchEstudoQuery] = useState("");
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [selectedHerb, setSelectedHerb] = useState<Herb | null>(null);
  const [herbFilter, setHerbFilter] = useState<string>("Todas");

  // --- Curimba States ---
  const [searchSong, setSearchSong] = useState<string>("");
  const [selectedSong, setSelectedSong] = useState<CurimbaPoint | null>(initialPoints[0]);

  // Load from LocalStorage on mount
  useEffect(() => {
    const storedUsers = localStorage.getItem("tucpb_users");
    const storedTasks = localStorage.getItem("tucpb_tasks");
    const loggedInUserId = localStorage.getItem("tucpb_logged_in_user");

    let loadedUsers: UserProfile[] = [];
    if (storedUsers) {
      loadedUsers = JSON.parse(storedUsers);
    } else {
      loadedUsers = [DEFAULT_ADMIN];
      localStorage.setItem("tucpb_users", JSON.stringify(loadedUsers));
    }
    setUsers(loadedUsers);

    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    } else {
      setTasks(initialTasks);
      localStorage.setItem("tucpb_tasks", JSON.stringify(initialTasks));
    }

    if (loggedInUserId) {
      const user = loadedUsers.find(u => u.id === loggedInUserId);
      if (user) {
        setCurrentUser(user);
        setPhotoPreview(user.photoUrl);
        if (user.role === "admin") {
          setActiveTab("admin");
        }
      }
    }
  }, []);

  // Save Tasks when updated
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tucpb_tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  // Save Users when updated
  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem("tucpb_users", JSON.stringify(users));
    }
  }, [users]);

  // --- Auth Handlers ---
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setAuthError("");
    const user = users.find(u => u.email === authEmail && u.password === authPassword);
    if (user) {
      setCurrentUser(user);
      setPhotoPreview(user.photoUrl);
      localStorage.setItem("tucpb_logged_in_user", user.id);
      setActiveTab(user.role === "admin" ? "admin" : "perfil");
    } else {
      setAuthError("E-mail ou senha incorretos.");
    }
  };

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    setAuthError("");
    if (!authEmail || !authPassword || !authName) {
      setAuthError("Preencha todos os campos obrigatórios.");
      return;
    }
    if (users.find(u => u.email === authEmail)) {
      setAuthError("E-mail já cadastrado.");
      return;
    }

    const newUser: UserProfile = {
      id: `usr-${Date.now()}`,
      name: authName,
      email: authEmail,
      password: authPassword,
      role: "membro",
      cargoTerreiro: authCargo,
      dataAmaci: authAmaci,
      photoUrl: ""
    };

    const newUsers = [...users, newUser];
    setUsers(newUsers);
    setCurrentUser(newUser);
    localStorage.setItem("tucpb_logged_in_user", newUser.id);
    setActiveTab("perfil");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("tucpb_logged_in_user");
    setAuthEmail("");
    setAuthPassword("");
  };

  // --- Profile Image Upload (Base64) ---
  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setPhotoPreview(base64String);
        if (currentUser) {
          const updatedUser = { ...currentUser, photoUrl: base64String };
          setCurrentUser(updatedUser);
          setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // --- Task Handlers ---
  const handleToggleTask = (taskId: string) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === taskId) {
          const nextStatusMap: Record<MemberTask["status"], MemberTask["status"]> = {
            "Pendente": "Concluido",
            "Em Andamento": "Concluido",
            "Concluido": "Pendente",
          };
          return { ...t, status: nextStatusMap[t.status] };
        }
        return t;
      })
    );
  };

  const handleAddTask = (e: FormEvent) => {
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
  };

  const myTasks = tasks.filter(t => currentUser && t.assignedTo.toLowerCase() === currentUser.name.toLowerCase());

  // --- Filters ---
  const filteredLessons = initialLessons.filter(les => 
    les.title.toLowerCase().includes(searchEstudoQuery.toLowerCase()) ||
    les.description.toLowerCase().includes(searchEstudoQuery.toLowerCase())
  );
  
  const filteredHerbs = initialHerbs.filter(herb => {
    const matchesSearch = herb.name.toLowerCase().includes(searchEstudoQuery.toLowerCase());
    const matchesFilter = herbFilter === "Todas" || herb.classification === herbFilter;
    return matchesSearch && matchesFilter;
  });

  const filteredSongs = initialPoints.filter(s => 
    s.title.toLowerCase().includes(searchSong.toLowerCase()) || 
    s.guideOrOrixa.toLowerCase().includes(searchSong.toLowerCase()) ||
    s.lyrics.toLowerCase().includes(searchSong.toLowerCase())
  );

  return (
    <div className="animate-fade-in pb-16 min-h-screen bg-gray-50" id="integrantes-page">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-verde-mata to-verde-folha py-12 text-center text-pena-branca px-4 shadow-md">
        <div className="mx-auto max-w-4xl space-y-3">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-pena-branca/10 text-areia-escura mb-1">
            <Shield className="h-6 w-6" />
          </div>
          <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Área de Membros
          </h1>
          <p className="mx-auto max-w-2xl text-xs sm:text-sm text-areia-escura font-light leading-relaxed">
            Portal exclusivo para filhos de santo, ogãs, cambones e dirigentes do Templo Umbandista Caboclo Pena Branca.
          </p>
        </div>
      </section>

      {/* Auth Screen */}
      {!currentUser ? (
        <section className="mx-auto max-w-md px-4 mt-12">
          <div className="bg-white rounded-2xl border border-areia-escura p-8 shadow-md space-y-6">
            <div className="text-center space-y-2">
              <h2 className="font-serif text-2xl font-bold text-gray-900">
                {authMode === "login" ? "Acesso Restrito" : "Novo Cadastro"}
              </h2>
              <p className="text-xs text-gray-500">
                {authMode === "login" ? "Entre com suas credenciais para acessar os estudos e tarefas da casa." : "Preencha os dados para criar seu perfil de membro."}
              </p>
            </div>

            {authMode === "login" ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700 block">E-mail</label>
                  <input
                    type="email"
                    required
                    value={authEmail}
                    onChange={(e) => setAuthEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-areia-escura bg-areia-suave text-sm focus:ring-2 focus:ring-verde-folha outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700 block">Senha</label>
                  <input
                    type="password"
                    required
                    value={authPassword}
                    onChange={(e) => setAuthPassword(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-areia-escura bg-areia-suave text-sm focus:ring-2 focus:ring-verde-folha outline-none"
                  />
                </div>

                {authError && <div className="text-xs text-red-600 bg-red-50 p-2 rounded">{authError}</div>}

                <button type="submit" className="w-full bg-verde-mata text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-verde-folha transition flex justify-center items-center gap-2">
                  Entrar <Unlock className="h-4 w-4" />
                </button>
                <div className="text-center pt-2">
                  <button type="button" onClick={() => { setAuthMode("register"); setAuthError(""); }} className="text-xs text-verde-folha font-semibold hover:underline">
                    Não tem conta? Solicite cadastro.
                  </button>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded text-[11px] text-gray-500 text-center border border-gray-200">
                   <strong>Acesso Admin (Demonstração):</strong><br/>Email: admin@tucpb.com | Senha: admin
                </div>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700 block">Nome Completo</label>
                  <input type="text" required value={authName} onChange={(e) => setAuthName(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-areia-escura bg-areia-suave text-sm outline-none focus:ring-2 focus:ring-verde-folha" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700 block">E-mail</label>
                  <input type="email" required value={authEmail} onChange={(e) => setAuthEmail(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-areia-escura bg-areia-suave text-sm outline-none focus:ring-2 focus:ring-verde-folha" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700 block">Senha</label>
                  <input type="password" required value={authPassword} onChange={(e) => setAuthPassword(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-areia-escura bg-areia-suave text-sm outline-none focus:ring-2 focus:ring-verde-folha" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 block">Cargo no Terreiro</label>
                    <select value={authCargo} onChange={(e) => setAuthCargo(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-areia-escura bg-areia-suave text-xs outline-none focus:ring-2 focus:ring-verde-folha">
                      <option value="Médium de Incorporação">Médium de Incorporação</option>
                      <option value="Cambone">Cambone</option>
                      <option value="Ogã">Ogã</option>
                      <option value="Membro em Desenvolvimento">Desenvolvimento</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 block">Data de Amaci (Aprox.)</label>
                    <input type="text" placeholder="Ex: Março 2023" value={authAmaci} onChange={(e) => setAuthAmaci(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-areia-escura bg-areia-suave text-xs outline-none focus:ring-2 focus:ring-verde-folha" />
                  </div>
                </div>

                {authError && <div className="text-xs text-red-600 bg-red-50 p-2 rounded">{authError}</div>}

                <button type="submit" className="w-full bg-marrom-terra text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-marrom-tronco transition">
                  Criar Cadastro
                </button>
                <div className="text-center pt-2">
                  <button type="button" onClick={() => { setAuthMode("login"); setAuthError(""); }} className="text-xs text-verde-folha font-semibold hover:underline">
                    Já possui conta? Faça Login.
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      ) : (
        /* Member Dashboard */
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
          
          {/* Top Bar */}
          <div className="bg-white p-4 rounded-2xl border border-areia-escura shadow-sm flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
            <div className="flex items-center gap-4">
               <div className="h-12 w-12 rounded-full bg-verde-folha/10 border-2 border-verde-folha flex items-center justify-center overflow-hidden">
                 {photoPreview ? (
                   <img src={photoPreview} alt="Perfil" className="w-full h-full object-cover" />
                 ) : (
                   <UserIcon className="h-6 w-6 text-verde-folha" />
                 )}
               </div>
               <div>
                  <h3 className="font-serif font-bold text-gray-900 leading-tight">Olá, {currentUser.name}</h3>
                  <p className="text-xs text-gray-500 font-medium">{currentUser.cargoTerreiro}</p>
               </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <button onClick={() => setActiveTab("perfil")} className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${activeTab === "perfil" ? "bg-marrom-terra text-white" : "bg-areia-suave text-gray-700 hover:bg-gray-200"}`}>Meu Perfil</button>
              <button onClick={() => setActiveTab("minhas-tarefas")} className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${activeTab === "minhas-tarefas" ? "bg-marrom-terra text-white" : "bg-areia-suave text-gray-700 hover:bg-gray-200"}`}>Minhas Tarefas</button>
              <button onClick={() => setActiveTab("estudos")} className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${activeTab === "estudos" ? "bg-marrom-terra text-white" : "bg-areia-suave text-gray-700 hover:bg-gray-200"}`}>Estudos</button>
              <button onClick={() => setActiveTab("curimba")} className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${activeTab === "curimba" ? "bg-marrom-terra text-white" : "bg-areia-suave text-gray-700 hover:bg-gray-200"}`}>Pontos e Curimba</button>
              {currentUser.role === "admin" && (
                <button onClick={() => setActiveTab("admin")} className={`px-4 py-2 rounded-lg text-xs font-semibold transition flex items-center gap-1 ${activeTab === "admin" ? "bg-red-800 text-white" : "bg-red-50 text-red-800 hover:bg-red-100"}`}>
                  <Shield className="h-3 w-3"/> Admin
                </button>
              )}
              <button onClick={handleLogout} className="px-4 py-2 rounded-lg text-xs font-semibold transition flex items-center gap-1 bg-gray-100 text-gray-600 hover:bg-gray-200 ml-2">
                 <LogOut className="h-3 w-3"/> Sair
              </button>
            </div>
          </div>

          {/* TAB: Perfil */}
          {activeTab === "perfil" && (
            <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-areia-escura shadow-sm p-6 md:p-10 animate-fade-in-quick">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6 border-b border-areia-escura pb-4">Seus Dados no Terreiro</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-col items-center gap-4">
                  <div className="h-32 w-32 rounded-full border-4 border-areia-escura bg-areia-suave overflow-hidden flex items-center justify-center relative group">
                    {photoPreview ? (
                      <img src={photoPreview} alt="Perfil" className="w-full h-full object-cover" />
                    ) : (
                      <UserIcon className="h-12 w-12 text-gray-400" />
                    )}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => fileInputRef.current?.click()} className="text-white text-xs font-bold flex flex-col items-center gap-1">
                        <Upload className="h-5 w-5"/> Trocar Foto
                      </button>
                    </div>
                  </div>
                  <input type="file" accept="image/*" ref={fileInputRef} onChange={handlePhotoUpload} className="hidden" />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <label className="text-xs text-gray-500 uppercase font-bold tracking-wider">Nome de Registro</label>
                    <p className="text-lg font-medium text-gray-900">{currentUser.name}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-gray-500 uppercase font-bold tracking-wider">E-mail</label>
                      <p className="text-sm font-medium text-gray-900">{currentUser.email}</p>
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 uppercase font-bold tracking-wider">Cargo Litúrgico</label>
                      <p className="text-sm font-medium text-gray-900 bg-verde-folha/10 text-verde-folha inline-block px-2 py-0.5 rounded mt-1">{currentUser.cargoTerreiro}</p>
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 uppercase font-bold tracking-wider flex items-center gap-1"><CalendarIcon className="h-3 w-3"/> Data do Amaci</label>
                      <p className="text-sm font-medium text-gray-900">{currentUser.dataAmaci || "Não informada"}</p>
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 uppercase font-bold tracking-wider flex items-center gap-1"><Shield className="h-3 w-3"/> Nível de Acesso</label>
                      <p className="text-sm font-medium text-gray-900 uppercase">{currentUser.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB: Minhas Tarefas */}
          {activeTab === "minhas-tarefas" && (
            <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-areia-escura shadow-sm overflow-hidden animate-fade-in-quick">
              <div className="bg-areia-suave px-6 py-5 border-b border-areia-escura flex justify-between items-center">
                <div>
                  <h2 className="font-serif font-bold text-gray-900 text-lg flex items-center gap-2">
                    <ClipboardList className="h-5 w-5 text-verde-folha" />
                    Checklist de Trabalho
                  </h2>
                  <p className="text-xs text-gray-500 mt-1">Suas responsabilidades litúrgicas e físicas na casa.</p>
                </div>
              </div>
              <div className="divide-y divide-areia-escura p-4">
                {myTasks.length === 0 ? (
                   <div className="text-center py-12 text-gray-500">
                      <CheckCircle className="h-12 w-12 mx-auto text-gray-200 mb-3"/>
                      <p className="text-sm">Você não tem tarefas pendentes designadas.</p>
                   </div>
                ) : (
                  myTasks.map(task => (
                    <div key={task.id} className={`p-4 rounded-xl flex items-start gap-4 transition-colors ${task.status === "Concluido" ? "bg-gray-50" : "bg-white hover:bg-gray-50"}`}>
                      <button onClick={() => handleToggleTask(task.id)} className="mt-0.5 shrink-0">
                        {task.status === "Concluido" ? (
                          <CheckCircle className="h-6 w-6 text-emerald-500" />
                        ) : (
                          <div className="h-6 w-6 rounded-full border-2 border-gray-300 hover:border-verde-folha transition-colors bg-white"></div>
                        )}
                      </button>
                      <div className="flex-1">
                        <h3 className={`font-semibold ${task.status === "Concluido" ? "text-gray-400 line-through" : "text-gray-900"}`}>{task.task}</h3>
                        <div className="flex gap-3 mt-2 text-[11px] font-mono">
                           <span className="bg-marrom-terra/10 text-marrom-terra px-2 py-0.5 rounded font-bold">{task.area}</span>
                           <span className="text-gray-500">Para: Sábado de Gira</span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* TAB: Admin Dashboard */}
          {activeTab === "admin" && currentUser.role === "admin" && (
            <div className="space-y-8 animate-fade-in-quick">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Admin - Members List */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-areia-escura shadow-sm overflow-hidden">
                  <div className="bg-marrom-terra px-6 py-4 text-white">
                    <h2 className="font-serif font-bold flex items-center gap-2"><Users className="h-5 w-5"/> Filhos Cadastrados na Casa ({users.length})</h2>
                  </div>
                  <div className="divide-y divide-gray-100 max-h-[500px] overflow-y-auto">
                    {users.map(user => (
                      <div key={user.id} className="p-4 flex items-center gap-4 hover:bg-gray-50">
                        <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                          {user.photoUrl ? <img src={user.photoUrl} alt="" className="w-full h-full object-cover"/> : <UserIcon className="h-6 w-6 m-auto mt-2 text-gray-400"/>}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-sm">{user.name} <span className="text-[10px] font-normal text-gray-500">({user.email})</span></h4>
                          <p className="text-xs text-gray-500">{user.cargoTerreiro} • Amaci: {user.dataAmaci || 'N/A'}</p>
                        </div>
                        {user.role === "admin" && <Shield className="h-4 w-4 text-red-700"/>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Admin - Add Task */}
                <div className="space-y-6">
                  <form onSubmit={handleAddTask} className="bg-white rounded-2xl border border-areia-escura shadow-sm p-6">
                    <h2 className="font-serif font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Delegar Nova Tarefa</h2>
                    <div className="space-y-3">
                      <div>
                        <label className="text-[11px] font-bold text-gray-700 uppercase">Descrição da Tarefa</label>
                        <input type="text" required value={newTaskText} onChange={(e) => setNewTaskText(e.target.value)} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha" />
                      </div>
                      <div>
                        <label className="text-[11px] font-bold text-gray-700 uppercase">Selecione o Membro</label>
                        <select required value={newAssignedTo} onChange={(e) => setNewAssignedTo(e.target.value)} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha">
                          <option value="">Selecione...</option>
                          {users.map(u => <option key={u.id} value={u.name}>{u.name}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="text-[11px] font-bold text-gray-700 uppercase">Área Litúrgica</label>
                        <select value={newTaskArea} onChange={(e) => setNewTaskArea(e.target.value as MemberTask["area"])} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha">
                          <option value="Terreiro / Gongá">Terreiro / Gongá</option>
                          <option value="Cozinha">Cozinha</option>
                          <option value="Portaria / Harmonização">Portaria / Harmonização</option>
                          <option value="Defumação">Defumação</option>
                          <option value="Curimba">Curimba</option>
                        </select>
                      </div>
                      <button type="submit" className="w-full bg-verde-mata text-white py-2 rounded text-sm font-bold mt-2 hover:bg-verde-folha transition flex justify-center items-center gap-2">
                        Criar Tarefa <Plus className="h-4 w-4"/>
                      </button>
                    </div>
                  </form>
                  
                  {/* Global Task List Summary */}
                  <div className="bg-white rounded-2xl border border-areia-escura shadow-sm p-6">
                     <h2 className="font-serif font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Status Geral de Tarefas</h2>
                     <div className="space-y-3 max-h-[300px] overflow-y-auto">
                        {tasks.slice(0, 8).map(task => (
                           <div key={task.id} className="flex items-center justify-between text-xs">
                             <div className="truncate pr-4 flex-1">
                               <strong className="text-gray-900">{task.assignedTo}:</strong> <span className="text-gray-600">{task.task}</span>
                             </div>
                             {task.status === "Concluido" ? <Check className="h-4 w-4 text-emerald-500 flex-shrink-0"/> : <Clock className="h-4 w-4 text-amber-500 flex-shrink-0"/>}
                           </div>
                        ))}
                     </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB: Estudos (Aulas & Ervas) */}
          {activeTab === "estudos" && (
             <div className="space-y-6 animate-fade-in-quick">
               {/* Controls */}
               <div className="bg-white rounded-2xl border border-areia-escura p-4 shadow-sm flex flex-col sm:flex-row items-center gap-4">
                 <div className="flex gap-2 w-full sm:w-auto">
                   <button onClick={() => setActiveEstudoTab("aulas")} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold ${activeEstudoTab === "aulas" ? "bg-verde-mata text-white" : "bg-areia-suave text-gray-600"}`}><PlayCircle className="h-4 w-4" /> Aulas de Fundamentos</button>
                   <button onClick={() => setActiveEstudoTab("ervas")} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold ${activeEstudoTab === "ervas" ? "bg-verde-mata text-white" : "bg-areia-suave text-gray-600"}`}><TreePine className="h-4 w-4" /> Catálogo de Ervas</button>
                 </div>
                 <div className="relative w-full sm:w-64 sm:ml-auto">
                   <Search className="absolute left-3 top-2 h-4 w-4 text-gray-400" />
                   <input type="text" placeholder="Pesquisar estudos..." value={searchEstudoQuery} onChange={(e) => setSearchEstudoQuery(e.target.value)} className="w-full pl-9 pr-4 py-1.5 border border-areia-escura bg-areia-suave text-xs rounded-lg outline-none focus:border-verde-folha" />
                 </div>
               </div>

               {/* Aulas */}
               {activeEstudoTab === "aulas" && (
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {filteredLessons.map((lesson) => (
                     <div key={lesson.id} className="bg-white rounded-xl border border-areia-escura overflow-hidden shadow-sm flex flex-col hover:-translate-y-1 transition-transform">
                       <div className="relative bg-gradient-to-br from-marrom-terra to-marrom-tronco aspect-video flex items-center justify-center group overflow-hidden cursor-pointer" onClick={() => setSelectedLesson(lesson)}>
                         <PlayCircle className="h-12 w-12 text-white/70 group-hover:scale-110 group-hover:text-white transition-all z-10"/>
                         <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded font-mono">{lesson.duration}</div>
                       </div>
                       <div className="p-4 flex-1 space-y-2">
                         <h3 className="font-serif font-bold text-gray-900 leading-tight">{lesson.title}</h3>
                         <p className="text-xs text-gray-600 line-clamp-2">{lesson.description}</p>
                       </div>
                     </div>
                   ))}
                 </div>
               )}

               {/* Ervas */}
               {activeEstudoTab === "ervas" && (
                 <div className="space-y-4">
                   <div className="flex flex-wrap gap-2">
                     {["Todas", "Fria", "Morna", "Quente"].map((cls) => (
                       <button key={cls} onClick={() => setHerbFilter(cls)} className={`px-3 py-1 text-xs font-bold rounded-full border ${herbFilter === cls ? "bg-verde-folha text-white border-verde-folha" : "bg-white text-gray-600 border-areia-escura"}`}>{cls}</button>
                     ))}
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                     {filteredHerbs.map((herb) => (
                       <div key={herb.id} className="bg-white rounded-xl border border-areia-escura p-4 shadow-sm flex flex-col hover:border-verde-folha/50">
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

          {/* TAB: Curimba */}
          {activeTab === "curimba" && (
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in-quick">
               <div className="lg:col-span-4 bg-white rounded-xl border border-areia-escura p-4 shadow-sm h-[600px] flex flex-col">
                 <div className="relative mb-4">
                   <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                   <input type="text" placeholder="Buscar orixá, guia..." value={searchSong} onChange={(e) => setSearchSong(e.target.value)} className="w-full pl-9 pr-4 py-2 bg-areia-suave border border-areia-escura text-xs rounded-lg outline-none focus:border-verde-folha" />
                 </div>
                 <div className="overflow-y-auto flex-1 space-y-2 pr-1">
                   {filteredSongs.map((song) => (
                     <button key={song.id} onClick={() => setSelectedSong(song)} className={`w-full text-left p-3 rounded-lg border flex flex-col gap-1 ${selectedSong?.id === song.id ? "bg-verde-folha/10 border-verde-folha text-verde-folha" : "bg-white border-areia-escura text-gray-700 hover:bg-gray-50"}`}>
                       <span className="font-serif text-xs font-bold">{song.title}</span>
                       <span className="text-[10px] text-gray-500 font-medium">Firmeza: {song.guideOrOrixa}</span>
                     </button>
                   ))}
                 </div>
               </div>
               <div className="lg:col-span-8 bg-white rounded-xl border border-areia-escura p-8 shadow-sm">
                 {selectedSong ? (
                   <div className="space-y-6">
                     <div className="border-b border-areia-escura pb-4">
                       <span className="text-xs font-mono font-bold uppercase tracking-wider text-verde-folha">Ponto de {selectedSong.guideOrOrixa}</span>
                       <h3 className="font-serif text-2xl font-bold text-gray-900 mt-1">{selectedSong.title}</h3>
                     </div>
                     <pre className="font-serif text-sm sm:text-base text-gray-800 whitespace-pre-wrap leading-loose">{selectedSong.lyrics}</pre>
                   </div>
                 ) : (
                   <div className="h-full flex items-center justify-center text-gray-400"><BookOpen className="h-12 w-12 opacity-20" /></div>
                 )}
               </div>
             </div>
          )}

        </section>
      )}

      {/* MODALS */}
      {selectedLesson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in-quick">
          <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-areia-escura bg-areia-suave">
              <h3 className="font-bold text-sm text-gray-900">{selectedLesson.title}</h3>
              <button onClick={() => setSelectedLesson(null)} className="p-2 rounded-full hover:bg-gray-200 text-gray-500"><X className="h-5 w-5" /></button>
            </div>
            <div className="bg-black aspect-video flex items-center justify-center">
              <PlayCircle className="h-16 w-16 text-white/30" />
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-700">{selectedLesson.description}</p>
            </div>
          </div>
        </div>
      )}

      {selectedHerb && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in-quick">
          <div className="relative w-full max-w-lg bg-white rounded-2xl p-6">
            <button onClick={() => setSelectedHerb(null)} className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-500"><X className="h-5 w-5" /></button>
            <h2 className="font-serif text-xl font-bold text-marrom-terra mb-1">{selectedHerb.name}</h2>
            <p className="text-xs text-gray-500 mb-4 uppercase tracking-widest font-bold">Vibração: {selectedHerb.orixa}</p>
            <div className="space-y-4 text-sm text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-100">
              <div><strong>Uso Ritual:</strong><br/>{selectedHerb.ritualUse}</div>
              <div><strong>Preparo:</strong><br/>{selectedHerb.preparation}</div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
