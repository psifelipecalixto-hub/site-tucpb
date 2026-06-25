import { useState, FormEvent, useEffect, useRef, ChangeEvent } from "react";
import { Lock, Unlock, Users, ClipboardList, BookOpen, Bell, CheckCircle, Search, PlayCircle, TreePine, X, GraduationCap, Upload, Shield, User as UserIcon, Calendar as CalendarIcon, LogOut, Plus, Check, Clock, Trash2, Edit2 } from "lucide-react";
import { initialPoints, initialLessons, initialHerbs, initialTasks, initialArticles } from "../data";
import { MemberTask, CurimbaPoint, Lesson, Herb, UserProfile, BlogArticle } from "../types";
import { supabase } from "../lib/supabase";

// Default admin user for demonstration
const DEFAULT_ADMIN: UserProfile = {
  id: "admin-1",
  name: "Pai Felipe",
  email: "admin@tucpb.com",
  password: "admin123", // simple password for testing
  role: "admin",
  cargoTerreiro: "pai de santo",
  photoUrl: "",
  status: "aprovado"
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
  const [authCargo, setAuthCargo] = useState("médiuns/cambones");
  const [authDataNascimento, setAuthDataNascimento] = useState("");
  const [authCpf, setAuthCpf] = useState("");
  const [authRg, setAuthRg] = useState("");
  const [authTipoSanguineo, setAuthTipoSanguineo] = useState("");
  const [authWhatsapp, setAuthWhatsapp] = useState("");
  const [authEndereco, setAuthEndereco] = useState("");
  const [authProfissao, setAuthProfissao] = useState("");
  
  const [authContatoEmergencia, setAuthContatoEmergencia] = useState("");
  const [authAlergias, setAuthAlergias] = useState("");
  const [authAcompPsicologico, setAuthAcompPsicologico] = useState<"Sim" | "Não" | "">("");
  const [authTranstornoPsiquiatrico, setAuthTranstornoPsiquiatrico] = useState("");
  const [authMedicamentos, setAuthMedicamentos] = useState("");

  const [authTempoDesenvolvimento, setAuthTempoDesenvolvimento] = useState("");
  const [authTerreirosAnteriores, setAuthTerreirosAnteriores] = useState("");
  const [authIniciacoes, setAuthIniciacoes] = useState("");
  const [authTiposMediunidade, setAuthTiposMediunidade] = useState("");
  const [authGuiasConhecidos, setAuthGuiasConhecidos] = useState("");
  
  const [authBuscaCoracao, setAuthBuscaCoracao] = useState("");
  
  const [authError, setAuthError] = useState("");

  // --- Dashboard States ---
  const [activeTab, setActiveTab] = useState<"perfil" | "minhas-tarefas" | "estudos" | "admin" | "curimba">("perfil");
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editProfileData, setEditProfileData] = useState<Partial<UserProfile>>({});

  // --- Admin States ---
  const [activeAdminTab, setActiveAdminTab] = useState<"membros" | "tarefas" | "aprovacoes" | "curimba" | "blog" | "aulas" | "ervas">("membros");
  const [newTaskText, setNewTaskText] = useState("");
  const [newAssignedTo, setNewAssignedTo] = useState("");
  const [newTaskArea, setNewTaskArea] = useState<MemberTask["area"]>("Terreiro / Gongá");

  const [selectedMemberProfile, setSelectedMemberProfile] = useState<UserProfile | null>(null);

  // --- Curimba Admin States ---
  const [newPointTitle, setNewPointTitle] = useState("");
  const [newPointOrixa, setNewPointOrixa] = useState("");
  const [newPointType, setNewPointType] = useState<CurimbaPoint["type"]>("Saudação");
  const [newPointLyrics, setNewPointLyrics] = useState("");
  const [newPointYoutube, setNewPointYoutube] = useState("");
  const [newPointAudio, setNewPointAudio] = useState("");
  const [newPointVideo, setNewPointVideo] = useState("");
  const [customPoints, setCustomPoints] = useState<CurimbaPoint[]>([]);

  // --- Content Admin States ---
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [herbs, setHerbs] = useState<Herb[]>([]);

  // --- Content Form States (New/Edit) ---
  const [editArticle, setEditArticle] = useState<Partial<BlogArticle> | null>(null);
  const [editLesson, setEditLesson] = useState<Partial<Lesson> | null>(null);
  const [editHerb, setEditHerb] = useState<Partial<Herb> | null>(null);

  // --- Study States ---
  const [activeEstudoTab, setActiveEstudoTab] = useState<"aulas" | "ervas">("aulas");
  const [searchEstudoQuery, setSearchEstudoQuery] = useState("");
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [selectedHerb, setSelectedHerb] = useState<Herb | null>(null);
  const [herbFilter, setHerbFilter] = useState<string>("Todas");

  // --- Curimba States ---
  const [searchSong, setSearchSong] = useState<string>("");
  const [selectedSong, setSelectedSong] = useState<CurimbaPoint | null>(initialPoints[0]);

  // Load from LocalStorage and Supabase on mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data, error } = await supabase.from('membros').select('*');
        if (error) {
          console.error("Error fetching users from Supabase:", error);
          return;
        }
        
        if (data && data.length > 0) {
          setUsers(data as UserProfile[]);
          const loggedInUserId = localStorage.getItem("tucpb_logged_in_user");
          if (loggedInUserId) {
            const user = data.find(u => u.id === loggedInUserId) as UserProfile;
            if (user) {
              setCurrentUser(user);
              setPhotoPreview(user.photoUrl || null);
              if (user.role === "admin") {
                setActiveTab("admin");
              }
            }
          }
        } else {
          // Fallback if table is empty (will be replaced by actual registration)
          setUsers([DEFAULT_ADMIN]);
        }
      } catch (err) {
        console.error("Supabase error:", err);
      }
    };

    fetchUsers();

    const storedTasks = localStorage.getItem("tucpb_tasks");
    const storedPoints = localStorage.getItem("tucpb_points");
    const storedArticles = localStorage.getItem("tucpb_articles");
    const storedLessons = localStorage.getItem("tucpb_lessons");
    const storedHerbs = localStorage.getItem("tucpb_herbs");

    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    } else {
      setTasks(initialTasks);
      localStorage.setItem("tucpb_tasks", JSON.stringify(initialTasks));
    }

    if (storedPoints) {
      setCustomPoints(JSON.parse(storedPoints));
    }

    if (storedArticles) {
      setArticles(JSON.parse(storedArticles));
    } else {
      setArticles(initialArticles);
      localStorage.setItem("tucpb_articles", JSON.stringify(initialArticles));
    }

    if (storedLessons) {
      setLessons(JSON.parse(storedLessons));
    } else {
      setLessons(initialLessons);
      localStorage.setItem("tucpb_lessons", JSON.stringify(initialLessons));
    }

    if (storedHerbs) {
      setHerbs(JSON.parse(storedHerbs));
    } else {
      setHerbs(initialHerbs);
      localStorage.setItem("tucpb_herbs", JSON.stringify(initialHerbs));
    }
  }, []);

  // Save Tasks when updated
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tucpb_tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  // Save Custom Points when updated
  useEffect(() => {
    if (customPoints.length > 0) {
      localStorage.setItem("tucpb_points", JSON.stringify(customPoints));
    }
  }, [customPoints]);

  useEffect(() => {
    if (articles.length > 0) {
      localStorage.setItem("tucpb_articles", JSON.stringify(articles));
    }
  }, [articles]);

  useEffect(() => {
    if (lessons.length > 0) {
      localStorage.setItem("tucpb_lessons", JSON.stringify(lessons));
    }
  }, [lessons]);

  useEffect(() => {
    if (herbs.length > 0) {
      localStorage.setItem("tucpb_herbs", JSON.stringify(herbs));
    }
  }, [herbs]);

  // --- Auth Handlers ---
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setAuthError("");
    
    try {
      const { data, error } = await supabase
        .from('membros')
        .select('*')
        .eq('email', authEmail)
        .eq('password', authPassword)
        .single();
        
      if (error || !data) {
        // Fallback for default admin
        const fallbackUser = users.find(u => u.email === authEmail && u.password === authPassword);
        if (fallbackUser) {
          setCurrentUser(fallbackUser);
          setPhotoPreview(fallbackUser.photoUrl || null);
          localStorage.setItem("tucpb_logged_in_user", fallbackUser.id);
          setActiveTab(fallbackUser.role === "admin" ? "admin" : "perfil");
          return;
        }

        setAuthError("E-mail ou senha incorretos.");
        return;
      }

      const user = data as UserProfile;
      setCurrentUser(user);
      setPhotoPreview(user.photoUrl || null);
      localStorage.setItem("tucpb_logged_in_user", user.id);
      setActiveTab(user.role === "admin" ? "admin" : "perfil");
    } catch (err) {
      console.error(err);
      // Fallback for default admin
      const fallbackUser = users.find(u => u.email === authEmail && u.password === authPassword);
      if (fallbackUser) {
        setCurrentUser(fallbackUser);
        setPhotoPreview(fallbackUser.photoUrl || null);
        localStorage.setItem("tucpb_logged_in_user", fallbackUser.id);
        setActiveTab(fallbackUser.role === "admin" ? "admin" : "perfil");
        return;
      }
      setAuthError("Erro interno ao tentar fazer login.");
    }
  };

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    console.log('Testando banco de dados');
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
      dataNascimento: authDataNascimento,
      cpf: authCpf,
      rg: authRg,
      tipoSanguineo: authTipoSanguineo,
      whatsapp: authWhatsapp,
      endereco: authEndereco,
      profissao: authProfissao,
      contatoEmergencia: authContatoEmergencia,
      alergias: authAlergias,
      acompanhamentoPsicologico: authAcompPsicologico,
      transtornoPsiquiatrico: authTranstornoPsiquiatrico,
      medicamentosContinuos: authMedicamentos,
      tempoDesenvolvimento: authTempoDesenvolvimento,
      terreirosAnteriores: authTerreirosAnteriores,
      iniciacoesRealizadas: authIniciacoes,
      tiposMediunidade: authTiposMediunidade,
      guiasConhecidos: authGuiasConhecidos,
      buscaCoracao: authBuscaCoracao,
      photoUrl: "",
      status: "pendente"
    };

    try {
      const { error } = await supabase.from('membros').insert([newUser]);
      if (error) {
        console.error("Supabase insert error:", error);
        setAuthError("Erro ao salvar no banco de dados. Tente novamente.");
        return;
      }
      
      const newUsers = [...users, newUser];
      setUsers(newUsers);
      setCurrentUser(newUser);
      localStorage.setItem("tucpb_logged_in_user", newUser.id);
      setActiveTab("perfil");
    } catch (err) {
      console.error(err);
      setAuthError("Erro interno ao tentar salvar membro.");
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("tucpb_logged_in_user");
    setAuthEmail("");
    setAuthPassword("");
  };

  // --- Profile Image Upload (Base64 Compressed) ---
  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const MAX_WIDTH = 400;
          const MAX_HEIGHT = 400;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          ctx?.drawImage(img, 0, 0, width, height);

          // Compress to JPEG with 0.7 quality
          const dataUrl = canvas.toDataURL("image/jpeg", 0.7);
          
          setPhotoPreview(dataUrl);
          if (currentUser) {
            const updatedUser = { ...currentUser, photoUrl: dataUrl };
            
            // Background update to Supabase
            supabase.from('membros')
              .update({ photoUrl: dataUrl })
              .eq('id', currentUser.id)
              .then(({ error }) => {
                if (error) console.error("Error updating photoUrl in Supabase:", error);
              });

            setCurrentUser(updatedUser);
            setUsers((prev) => prev.map(u => u.id === updatedUser.id ? updatedUser : u));
          }
        };
        img.src = event.target?.result as string;
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

  // --- Profile Editing Handlers ---
  const handleSaveProfile = async () => {
    if (!currentUser) return;
    const updatedUser = { ...currentUser, ...editProfileData };
    
    try {
      const { error } = await supabase.from('membros').update(updatedUser).eq('id', updatedUser.id);
      if (error) {
        console.error("Supabase update error:", error);
        alert("Erro ao salvar no banco de dados.");
        return;
      }
      setCurrentUser(updatedUser);
      setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u));
      setIsEditingProfile(false);
    } catch (err) {
      console.error(err);
      alert("Erro interno ao tentar atualizar perfil.");
    }
  };

  const handleCancelEditProfile = () => {
    setIsEditingProfile(false);
    setEditProfileData({});
  };

  const handleStartEditProfile = () => {
    if (!currentUser) return;
    setEditProfileData({
      name: currentUser.name,
      email: currentUser.email,
      cargoTerreiro: currentUser.cargoTerreiro,
      dataNascimento: currentUser.dataNascimento,
      whatsapp: currentUser.whatsapp,
      endereco: currentUser.endereco,
      profissao: currentUser.profissao,
      contatoEmergencia: currentUser.contatoEmergencia,
      restricoesSaude: currentUser.restricoesSaude,
    });
    setIsEditingProfile(true);
  };

  // --- Admin Approval Handlers ---
  const handleApproveMember = async (userId: string) => {
    try {
      const { error } = await supabase.from('membros').update({ status: 'aprovado' }).eq('id', userId);
      if (error) {
        console.error("Supabase update error:", error);
        alert("Erro ao aprovar membro.");
        return;
      }
      setUsers(users.map(u => u.id === userId ? { ...u, status: "aprovado" } : u));
    } catch (err) {
      console.error(err);
    }
  };

  const handleRejectMember = async (userId: string) => {
    try {
      const { error } = await supabase.from('membros').delete().eq('id', userId);
      if (error) {
        console.error("Supabase delete error:", error);
        alert("Erro ao recusar membro.");
        return;
      }
      setUsers(users.filter(u => u.id !== userId));
    } catch (err) {
      console.error(err);
    }
  };

  // --- Admin Curimba Handlers ---
  const handleAddPoint = (e: FormEvent) => {
    e.preventDefault();
    if (!newPointTitle || !newPointOrixa || !newPointLyrics) return;

    const newPoint: CurimbaPoint = {
      id: `pt-${Date.now()}`,
      title: newPointTitle,
      guideOrOrixa: newPointOrixa,
      type: newPointType,
      lyrics: newPointLyrics,
      youtubeUrl: newPointYoutube,
      audioUrl: newPointAudio,
      videoUrl: newPointVideo
    };

    setCustomPoints([newPoint, ...customPoints]);
    setNewPointTitle("");
    setNewPointOrixa("");
    setNewPointLyrics("");
    setNewPointYoutube("");
    setNewPointAudio("");
    setNewPointVideo("");
  };

  // --- Content Admin Handlers ---
  const handleSaveArticle = () => {
    if (!editArticle || !editArticle.title || !editArticle.content) return;
    
    if (editArticle.id) {
      setArticles(articles.map(a => a.id === editArticle.id ? { ...a, ...editArticle } as BlogArticle : a));
    } else {
      const newArticle: BlogArticle = {
        id: `art-${Date.now()}`,
        title: editArticle.title || "",
        category: editArticle.category || "Fundamentos",
        snippet: editArticle.snippet || "",
        content: editArticle.content || "",
        date: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }),
        readTime: editArticle.readTime || "5 min",
        author: currentUser?.name || "Administrador",
        iconName: editArticle.iconName || "book"
      };
      setArticles([newArticle, ...articles]);
    }
    setEditArticle(null);
  };

  const handleDeleteArticle = (id: string) => {
    setArticles(articles.filter(a => a.id !== id));
  };

  const handleSaveLesson = () => {
    if (!editLesson || !editLesson.title || !editLesson.videoUrl) return;
    
    if (editLesson.id) {
      setLessons(lessons.map(l => l.id === editLesson.id ? { ...l, ...editLesson } as Lesson : l));
    } else {
      const newLesson: Lesson = {
        id: `les-${Date.now()}`,
        title: editLesson.title || "",
        category: editLesson.category || "Doutrina",
        description: editLesson.description || "",
        duration: editLesson.duration || "1h",
        instructor: editLesson.instructor || currentUser?.name || "Instrutor",
        date: editLesson.date || new Date().toLocaleDateString('pt-BR'),
        videoUrl: editLesson.videoUrl || "",
        level: editLesson.level || "Iniciante"
      };
      setLessons([newLesson, ...lessons]);
    }
    setEditLesson(null);
  };

  const handleDeleteLesson = (id: string) => {
    setLessons(lessons.filter(l => l.id !== id));
  };

  const handleSaveHerb = () => {
    if (!editHerb || !editHerb.name || !editHerb.ritualUse) return;
    
    if (editHerb.id) {
      setHerbs(herbs.map(h => h.id === editHerb.id ? { ...h, ...editHerb } as Herb : h));
    } else {
      const newHerb: Herb = {
        id: `herb-${Date.now()}`,
        name: editHerb.name || "",
        scientificName: editHerb.scientificName || "",
        orixa: editHerb.orixa || "",
        ritualUse: editHerb.ritualUse || "",
        medicinalUse: editHerb.medicinalUse || "",
        classification: editHerb.classification || "Morna",
        preparation: editHerb.preparation || ""
      };
      setHerbs([newHerb, ...herbs]);
    }
    setEditHerb(null);
  };

  const handleDeleteHerb = (id: string) => {
    setHerbs(herbs.filter(h => h.id !== id));
  };

  const myTasks = tasks.filter(t => currentUser && t.assignedTo.toLowerCase() === currentUser.name.toLowerCase());

  // --- Filters ---
  const filteredLessons = lessons.filter(les => 
    les.title.toLowerCase().includes(searchEstudoQuery.toLowerCase()) ||
    les.description.toLowerCase().includes(searchEstudoQuery.toLowerCase())
  );
  
  const filteredHerbs = herbs.filter(herb => {
    const matchesSearch = herb.name.toLowerCase().includes(searchEstudoQuery.toLowerCase());
    const matchesFilter = herbFilter === "Todas" || herb.classification === herbFilter;
    return matchesSearch && matchesFilter;
  });

  const filteredSongs = [...customPoints, ...initialPoints].filter(s => 
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
              <form onSubmit={handleRegister} className="space-y-6">
                
                {/* 1. Dados Civis e Identidade */}
                <div className="space-y-4">
                  <div className="border-b border-areia-escura pb-2">
                     <h3 className="text-lg font-serif font-bold text-marrom-terra">1. Dados Civis e Identidade</h3>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 block">Nome Completo</label>
                    <input type="text" required value={authName} onChange={(e) => setAuthName(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-areia-escura bg-areia-suave text-sm outline-none focus:ring-2 focus:ring-verde-folha" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700 block">CPF</label>
                      <input type="text" required value={authCpf} onChange={(e) => setAuthCpf(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-areia-escura bg-areia-suave text-sm outline-none focus:ring-2 focus:ring-verde-folha" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700 block">RG</label>
                      <input type="text" required value={authRg} onChange={(e) => setAuthRg(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-areia-escura bg-areia-suave text-sm outline-none focus:ring-2 focus:ring-verde-folha" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700 block">Data de Nascimento</label>
                      <input type="date" required value={authDataNascimento} onChange={(e) => setAuthDataNascimento(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-areia-escura bg-areia-suave text-xs outline-none focus:ring-2 focus:ring-verde-folha" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700 block">Tipo Sanguíneo</label>
                      <input type="text" placeholder="Ex: O+" value={authTipoSanguineo} onChange={(e) => setAuthTipoSanguineo(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-areia-escura bg-areia-suave text-xs outline-none focus:ring-2 focus:ring-verde-folha" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 block">WhatsApp</label>
                    <input type="text" placeholder="(DD) 90000-0000" required value={authWhatsapp} onChange={(e) => setAuthWhatsapp(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-areia-escura bg-areia-suave text-xs outline-none focus:ring-2 focus:ring-verde-folha" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 block">Endereço Completo</label>
                    <input type="text" required value={authEndereco} onChange={(e) => setAuthEndereco(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-areia-escura bg-areia-suave text-sm outline-none focus:ring-2 focus:ring-verde-folha" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 block">Profissão</label>
                    <input type="text" required value={authProfissao} onChange={(e) => setAuthProfissao(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-areia-escura bg-areia-suave text-xs outline-none focus:ring-2 focus:ring-verde-folha" />
                  </div>
                </div>

                {/* 2. Saúde Integrativa */}
                <div className="space-y-4">
                  <div className="border-b border-areia-escura pb-2">
                     <h3 className="text-lg font-serif font-bold text-marrom-terra">2. Saúde Integrativa</h3>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 block">Contato de Emergência</label>
                    <input type="text" placeholder="Nome e Telefone" required value={authContatoEmergencia} onChange={(e) => setAuthContatoEmergencia(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-areia-escura bg-areia-suave text-xs outline-none focus:ring-2 focus:ring-verde-folha" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 block">Alergias (ervas/alimentos)</label>
                    <textarea rows={2} value={authAlergias} onChange={(e) => setAuthAlergias(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-areia-escura bg-areia-suave text-sm outline-none focus:ring-2 focus:ring-verde-folha"></textarea>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 block">Faz acompanhamento psicológico ou psiquiátrico atual?</label>
                    <select required value={authAcompPsicologico} onChange={(e) => setAuthAcompPsicologico(e.target.value as any)} className="w-full px-3 py-2 rounded-lg border border-areia-escura bg-areia-suave text-xs outline-none focus:ring-2 focus:ring-verde-folha">
                      <option value="">Selecione...</option>
                      <option value="Sim">Sim</option>
                      <option value="Não">Não</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 block">Possui algum transtorno psiquiátrico diagnosticado? Qual?</label>
                    <textarea rows={2} value={authTranstornoPsiquiatrico} onChange={(e) => setAuthTranstornoPsiquiatrico(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-areia-escura bg-areia-suave text-sm outline-none focus:ring-2 focus:ring-verde-folha"></textarea>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 block">Uso de medicamentos contínuos</label>
                    <textarea rows={2} value={authMedicamentos} onChange={(e) => setAuthMedicamentos(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-areia-escura bg-areia-suave text-sm outline-none focus:ring-2 focus:ring-verde-folha"></textarea>
                  </div>
                </div>

                {/* 3. Trajetória Espiritual */}
                <div className="space-y-4">
                  <div className="border-b border-areia-escura pb-2">
                     <h3 className="text-lg font-serif font-bold text-marrom-terra">3. Trajetória Espiritual</h3>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 block">Tempo de desenvolvimento na religião</label>
                    <input type="text" value={authTempoDesenvolvimento} onChange={(e) => setAuthTempoDesenvolvimento(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-areia-escura bg-areia-suave text-sm outline-none focus:ring-2 focus:ring-verde-folha" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 block">Terreiros anteriores (quantos e motivo da saída)</label>
                    <textarea rows={2} value={authTerreirosAnteriores} onChange={(e) => setAuthTerreirosAnteriores(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-areia-escura bg-areia-suave text-sm outline-none focus:ring-2 focus:ring-verde-folha"></textarea>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 block">Iniciações/Obrigações já realizadas (ex: Amaci, Bori)</label>
                    <textarea rows={2} value={authIniciacoes} onChange={(e) => setAuthIniciacoes(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-areia-escura bg-areia-suave text-sm outline-none focus:ring-2 focus:ring-verde-folha"></textarea>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 block">Tipos de mediunidade afloradas</label>
                    <input type="text" value={authTiposMediunidade} onChange={(e) => setAuthTiposMediunidade(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-areia-escura bg-areia-suave text-sm outline-none focus:ring-2 focus:ring-verde-folha" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 block">Guias e Orixás conhecidos</label>
                    <textarea rows={2} value={authGuiasConhecidos} onChange={(e) => setAuthGuiasConhecidos(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-areia-escura bg-areia-suave text-sm outline-none focus:ring-2 focus:ring-verde-folha"></textarea>
                  </div>
                </div>

                {/* 4. Sentido Existencial */}
                <div className="space-y-4">
                  <div className="border-b border-areia-escura pb-2">
                     <h3 className="text-lg font-serif font-bold text-marrom-terra">4. Sentido Existencial</h3>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 block">O que o seu coração busca ao adentrar as portas do TUCPB?</label>
                    <textarea required rows={4} value={authBuscaCoracao} onChange={(e) => setAuthBuscaCoracao(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-areia-escura bg-areia-suave text-sm outline-none focus:ring-2 focus:ring-verde-folha"></textarea>
                  </div>
                </div>

                {/* Acesso */}
                <div className="space-y-4 pt-2">
                  <div className="border-b border-areia-escura pb-2">
                     <h3 className="text-lg font-serif font-bold text-marrom-terra">Acesso</h3>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 block">E-mail</label>
                    <input type="email" required value={authEmail} onChange={(e) => setAuthEmail(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-areia-escura bg-areia-suave text-sm outline-none focus:ring-2 focus:ring-verde-folha" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 block">Senha</label>
                    <input type="password" required value={authPassword} onChange={(e) => setAuthPassword(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-areia-escura bg-areia-suave text-sm outline-none focus:ring-2 focus:ring-verde-folha" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 block">Cargo no Terreiro</label>
                    <select value={authCargo} onChange={(e) => setAuthCargo(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-areia-escura bg-areia-suave text-xs outline-none focus:ring-2 focus:ring-verde-folha">
                      <option value="médiuns/cambones">Médiuns/Cambones</option>
                      <option value="pai ou mãe pequena">Pai ou Mãe Pequena</option>
                      <option value="pai de santo">Pai de Santo</option>
                    </select>
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
      ) : currentUser.status === "pendente" ? (
        <section className="mx-auto max-w-md px-4 mt-12">
          <div className="bg-white rounded-2xl border border-areia-escura p-8 shadow-md text-center space-y-6">
            <div className="h-16 w-16 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto">
              <Clock className="h-8 w-8" />
            </div>
            <div className="space-y-2">
              <h2 className="font-serif text-2xl font-bold text-gray-900">Aguardando Aprovação</h2>
              <p className="text-sm text-gray-600">
                Olá, {currentUser.name}! Seu cadastro foi recebido e está em análise pela direção do terreiro.
              </p>
              <p className="text-xs text-gray-500">
                Assim que for autorizado, você terá acesso completo à plataforma.
              </p>
            </div>
            <button onClick={handleLogout} className="text-sm text-gray-500 hover:underline">
              Sair da conta
            </button>
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
              <div className="flex justify-between items-center mb-6 border-b border-areia-escura pb-4">
                <h2 className="font-serif text-2xl font-bold text-gray-900">Seus Dados no Terreiro</h2>
                {!isEditingProfile ? (
                  <button onClick={handleStartEditProfile} className="text-xs font-bold bg-areia-suave hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded">Editar Perfil</button>
                ) : (
                  <div className="flex gap-2">
                    <button onClick={handleCancelEditProfile} className="text-xs font-bold bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1.5 rounded">Cancelar</button>
                    <button onClick={handleSaveProfile} className="text-xs font-bold bg-verde-mata hover:bg-verde-folha text-white px-3 py-1.5 rounded flex items-center gap-1"><Check className="h-3 w-3"/> Salvar</button>
                  </div>
                )}
              </div>
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
                  {/* 1. Dados Civis e Identidade */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-serif font-bold text-marrom-terra border-b border-areia-escura pb-1">1. Dados Civis e Identidade</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2">
                        <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Nome Completo</label>
                        {isEditingProfile ? (
                          <input type="text" value={editProfileData.name || ""} onChange={e => setEditProfileData({...editProfileData, name: e.target.value})} className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded mt-1 focus:ring-1 focus:ring-verde-folha outline-none"/>
                        ) : (
                          <p className="text-sm font-medium text-gray-900">{currentUser.name}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">E-mail</label>
                        {isEditingProfile ? (
                          <input type="email" value={editProfileData.email || ""} onChange={e => setEditProfileData({...editProfileData, email: e.target.value})} className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded mt-1 focus:ring-1 focus:ring-verde-folha outline-none"/>
                        ) : (
                          <p className="text-sm font-medium text-gray-900">{currentUser.email}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Cargo Litúrgico</label>
                        {isEditingProfile ? (
                          <select value={editProfileData.cargoTerreiro || ""} onChange={e => setEditProfileData({...editProfileData, cargoTerreiro: e.target.value})} className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded mt-1 focus:ring-1 focus:ring-verde-folha outline-none">
                            <option value="médiuns/cambones">Médiuns/Cambones</option>
                            <option value="pai ou mãe pequena">Pai ou Mãe Pequena</option>
                            <option value="pai de santo">Pai de Santo</option>
                          </select>
                        ) : (
                          <p className="text-sm font-medium text-gray-900 bg-verde-folha/10 text-verde-folha inline-block px-2 py-0.5 rounded mt-1 capitalize">{currentUser.cargoTerreiro}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Nascimento</label>
                        {isEditingProfile ? (
                          <input type="date" value={editProfileData.dataNascimento || ""} onChange={e => setEditProfileData({...editProfileData, dataNascimento: e.target.value})} className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded mt-1 focus:ring-1 focus:ring-verde-folha outline-none"/>
                        ) : (
                          <p className="text-sm font-medium text-gray-900">{currentUser.dataNascimento ? new Date(currentUser.dataNascimento).toLocaleDateString('pt-BR') : "Não informada"}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Tipo Sanguíneo</label>
                        {isEditingProfile ? (
                          <input type="text" value={editProfileData.tipoSanguineo || ""} onChange={e => setEditProfileData({...editProfileData, tipoSanguineo: e.target.value})} className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded mt-1 focus:ring-1 focus:ring-verde-folha outline-none"/>
                        ) : (
                          <p className="text-sm font-medium text-gray-900">{currentUser.tipoSanguineo || "Não informado"}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">CPF</label>
                        {isEditingProfile ? (
                          <input type="text" value={editProfileData.cpf || ""} onChange={e => setEditProfileData({...editProfileData, cpf: e.target.value})} className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded mt-1 focus:ring-1 focus:ring-verde-folha outline-none"/>
                        ) : (
                          <p className="text-sm font-medium text-gray-900">{currentUser.cpf || "Não informado"}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">RG</label>
                        {isEditingProfile ? (
                          <input type="text" value={editProfileData.rg || ""} onChange={e => setEditProfileData({...editProfileData, rg: e.target.value})} className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded mt-1 focus:ring-1 focus:ring-verde-folha outline-none"/>
                        ) : (
                          <p className="text-sm font-medium text-gray-900">{currentUser.rg || "Não informado"}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">WhatsApp</label>
                        {isEditingProfile ? (
                          <input type="text" value={editProfileData.whatsapp || ""} onChange={e => setEditProfileData({...editProfileData, whatsapp: e.target.value})} className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded mt-1 focus:ring-1 focus:ring-verde-folha outline-none"/>
                        ) : (
                          <p className="text-sm font-medium text-gray-900">{currentUser.whatsapp || "Não informado"}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Profissão</label>
                        {isEditingProfile ? (
                          <input type="text" value={editProfileData.profissao || ""} onChange={e => setEditProfileData({...editProfileData, profissao: e.target.value})} className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded mt-1 focus:ring-1 focus:ring-verde-folha outline-none"/>
                        ) : (
                          <p className="text-sm font-medium text-gray-900">{currentUser.profissao || "Não informada"}</p>
                        )}
                      </div>
                      <div className="col-span-2">
                        <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Endereço</label>
                        {isEditingProfile ? (
                          <input type="text" value={editProfileData.endereco || ""} onChange={e => setEditProfileData({...editProfileData, endereco: e.target.value})} className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded mt-1 focus:ring-1 focus:ring-verde-folha outline-none"/>
                        ) : (
                          <p className="text-sm font-medium text-gray-900 truncate">{currentUser.endereco || "Não informado"}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* 2. Saúde Integrativa */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-serif font-bold text-marrom-terra border-b border-areia-escura pb-1">2. Saúde Integrativa</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="text-[10px] text-red-700 uppercase font-bold tracking-wider">Contato de Emergência</label>
                        {isEditingProfile ? (
                          <input type="text" value={editProfileData.contatoEmergencia || ""} onChange={e => setEditProfileData({...editProfileData, contatoEmergencia: e.target.value})} className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded mt-1 focus:ring-1 focus:ring-verde-folha outline-none"/>
                        ) : (
                          <p className="text-sm font-medium text-gray-900 truncate">{currentUser.contatoEmergencia || "Não informado"}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Alergias (ervas/alimentos)</label>
                        {isEditingProfile ? (
                          <textarea value={editProfileData.alergias || ""} onChange={e => setEditProfileData({...editProfileData, alergias: e.target.value})} className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded mt-1 focus:ring-1 focus:ring-verde-folha outline-none"></textarea>
                        ) : (
                          <p className="text-sm font-medium text-gray-900 bg-gray-50 p-2 rounded border border-gray-100">{currentUser.alergias || "Nenhuma observação."}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Acompanhamento Psicológico/Psiquiátrico?</label>
                        {isEditingProfile ? (
                          <select value={editProfileData.acompanhamentoPsicologico || ""} onChange={e => setEditProfileData({...editProfileData, acompanhamentoPsicologico: e.target.value as any})} className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded mt-1 focus:ring-1 focus:ring-verde-folha outline-none">
                            <option value="">Selecione...</option>
                            <option value="Sim">Sim</option>
                            <option value="Não">Não</option>
                          </select>
                        ) : (
                          <p className="text-sm font-medium text-gray-900">{currentUser.acompanhamentoPsicologico || "Não informado"}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Transtorno Psiquiátrico Diagnosticado</label>
                        {isEditingProfile ? (
                          <textarea value={editProfileData.transtornoPsiquiatrico || ""} onChange={e => setEditProfileData({...editProfileData, transtornoPsiquiatrico: e.target.value})} className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded mt-1 focus:ring-1 focus:ring-verde-folha outline-none"></textarea>
                        ) : (
                          <p className="text-sm font-medium text-gray-900 bg-gray-50 p-2 rounded border border-gray-100">{currentUser.transtornoPsiquiatrico || "Nenhuma observação."}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Uso de Medicamentos Contínuos</label>
                        {isEditingProfile ? (
                          <textarea value={editProfileData.medicamentosContinuos || ""} onChange={e => setEditProfileData({...editProfileData, medicamentosContinuos: e.target.value})} className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded mt-1 focus:ring-1 focus:ring-verde-folha outline-none"></textarea>
                        ) : (
                          <p className="text-sm font-medium text-gray-900 bg-gray-50 p-2 rounded border border-gray-100">{currentUser.medicamentosContinuos || "Nenhuma observação."}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* 3. Trajetória Espiritual */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-serif font-bold text-marrom-terra border-b border-areia-escura pb-1">3. Trajetória Espiritual</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Tempo de desenvolvimento na religião</label>
                        {isEditingProfile ? (
                          <input type="text" value={editProfileData.tempoDesenvolvimento || ""} onChange={e => setEditProfileData({...editProfileData, tempoDesenvolvimento: e.target.value})} className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded mt-1 focus:ring-1 focus:ring-verde-folha outline-none"/>
                        ) : (
                          <p className="text-sm font-medium text-gray-900">{currentUser.tempoDesenvolvimento || "Não informado"}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Terreiros anteriores (quantos e motivo da saída)</label>
                        {isEditingProfile ? (
                          <textarea value={editProfileData.terreirosAnteriores || ""} onChange={e => setEditProfileData({...editProfileData, terreirosAnteriores: e.target.value})} className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded mt-1 focus:ring-1 focus:ring-verde-folha outline-none"></textarea>
                        ) : (
                          <p className="text-sm font-medium text-gray-900 bg-gray-50 p-2 rounded border border-gray-100">{currentUser.terreirosAnteriores || "Não informado"}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Iniciações/Obrigações já realizadas (ex: Amaci, Bori)</label>
                        {isEditingProfile ? (
                          <textarea value={editProfileData.iniciacoesRealizadas || ""} onChange={e => setEditProfileData({...editProfileData, iniciacoesRealizadas: e.target.value})} className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded mt-1 focus:ring-1 focus:ring-verde-folha outline-none"></textarea>
                        ) : (
                          <p className="text-sm font-medium text-gray-900 bg-gray-50 p-2 rounded border border-gray-100">{currentUser.iniciacoesRealizadas || "Não informado"}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Tipos de mediunidade afloradas</label>
                        {isEditingProfile ? (
                          <input type="text" value={editProfileData.tiposMediunidade || ""} onChange={e => setEditProfileData({...editProfileData, tiposMediunidade: e.target.value})} className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded mt-1 focus:ring-1 focus:ring-verde-folha outline-none"/>
                        ) : (
                          <p className="text-sm font-medium text-gray-900">{currentUser.tiposMediunidade || "Não informado"}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Guias e Orixás conhecidos</label>
                        {isEditingProfile ? (
                          <textarea value={editProfileData.guiasConhecidos || ""} onChange={e => setEditProfileData({...editProfileData, guiasConhecidos: e.target.value})} className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded mt-1 focus:ring-1 focus:ring-verde-folha outline-none"></textarea>
                        ) : (
                          <p className="text-sm font-medium text-gray-900 bg-gray-50 p-2 rounded border border-gray-100">{currentUser.guiasConhecidos || "Não informado"}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* 4. Sentido Existencial */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-serif font-bold text-marrom-terra border-b border-areia-escura pb-1">4. Sentido Existencial</h3>
                    <div>
                      <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">O que o seu coração busca ao adentrar as portas do TUCPB?</label>
                      {isEditingProfile ? (
                        <textarea value={editProfileData.buscaCoracao || ""} onChange={e => setEditProfileData({...editProfileData, buscaCoracao: e.target.value})} className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded mt-1 focus:ring-1 focus:ring-verde-folha outline-none"></textarea>
                      ) : (
                        <p className="text-sm font-medium text-gray-900 bg-verde-folha/5 p-4 rounded-xl border border-verde-folha/20 italic">{currentUser.buscaCoracao || "Não informado"}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider flex items-center gap-1 mt-6 pt-4 border-t border-gray-100"><Shield className="h-3 w-3"/> Nível de Acesso (Não editável)</label>
                    <p className="text-[10px] font-bold text-gray-900 uppercase bg-gray-100 inline-block px-2 py-1 rounded">{currentUser.role}</p>
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
            <div className="space-y-6 animate-fade-in-quick">
              
              <div className="flex gap-2 border-b border-areia-escura pb-4 flex-wrap">
                <button onClick={() => setActiveAdminTab("membros")} className={`px-4 py-2 rounded text-xs font-bold transition ${activeAdminTab === "membros" ? "bg-verde-mata text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>Gerenciar Membros</button>
                <button onClick={() => setActiveAdminTab("aprovacoes")} className={`px-4 py-2 rounded text-xs font-bold transition flex items-center gap-1 ${activeAdminTab === "aprovacoes" ? "bg-amber-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>Aprovações <span className="bg-amber-100 text-amber-800 rounded-full px-1.5 py-0.5 text-[9px]">{users.filter(u => u.status === "pendente").length}</span></button>
                <button onClick={() => setActiveAdminTab("tarefas")} className={`px-4 py-2 rounded text-xs font-bold transition ${activeAdminTab === "tarefas" ? "bg-verde-mata text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>Tarefas</button>
                <button onClick={() => setActiveAdminTab("curimba")} className={`px-4 py-2 rounded text-xs font-bold transition ${activeAdminTab === "curimba" ? "bg-verde-mata text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>Pontos</button>
                <button onClick={() => setActiveAdminTab("blog")} className={`px-4 py-2 rounded text-xs font-bold transition ${activeAdminTab === "blog" ? "bg-verde-mata text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>Blog/Portal</button>
                <button onClick={() => setActiveAdminTab("aulas")} className={`px-4 py-2 rounded text-xs font-bold transition ${activeAdminTab === "aulas" ? "bg-verde-mata text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>Aulas</button>
                <button onClick={() => setActiveAdminTab("ervas")} className={`px-4 py-2 rounded text-xs font-bold transition ${activeAdminTab === "ervas" ? "bg-verde-mata text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>Ervas</button>
              </div>

              {activeAdminTab === "membros" && (
                <div className="bg-white rounded-2xl border border-areia-escura shadow-sm overflow-hidden">
                  <div className="bg-marrom-terra px-6 py-4 text-white">
                    <h2 className="font-serif font-bold flex items-center gap-2"><Users className="h-5 w-5"/> Filhos Ativos na Casa ({users.filter(u => u.status !== "pendente").length})</h2>
                  </div>
                  <div className="divide-y divide-gray-100 max-h-[500px] overflow-y-auto">
                    {users.filter(u => u.status !== "pendente").map(user => (
                      <div key={user.id} className="p-4 flex items-center gap-4 hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedMemberProfile(user)}>
                        <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                          {user.photoUrl ? <img src={user.photoUrl} alt="" className="w-full h-full object-cover"/> : <UserIcon className="h-6 w-6 m-auto mt-2 text-gray-400"/>}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-sm hover:underline">{user.name} <span className="text-[10px] font-normal text-gray-500">({user.email})</span></h4>
                          <p className="text-xs text-gray-500 capitalize">{user.cargoTerreiro}</p>
                        </div>
                        {user.role === "admin" && <Shield className="h-4 w-4 text-red-700"/>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeAdminTab === "aprovacoes" && (
                <div className="bg-white rounded-2xl border border-areia-escura shadow-sm overflow-hidden">
                  <div className="bg-amber-600 px-6 py-4 text-white">
                    <h2 className="font-serif font-bold flex items-center gap-2"><Clock className="h-5 w-5"/> Cadastros Aguardando Aprovação</h2>
                  </div>
                  <div className="divide-y divide-gray-100 max-h-[500px] overflow-y-auto">
                    {users.filter(u => u.status === "pendente").length === 0 ? (
                       <div className="p-8 text-center text-gray-500 text-sm">Não há aprovações pendentes.</div>
                    ) : (
                      users.filter(u => u.status === "pendente").map(user => (
                        <div key={user.id} className="p-4 flex items-center gap-4 hover:bg-gray-50">
                          <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0 cursor-pointer" onClick={() => setSelectedMemberProfile(user)}>
                            {user.photoUrl ? <img src={user.photoUrl} alt="" className="w-full h-full object-cover"/> : <UserIcon className="h-6 w-6 m-auto mt-2 text-gray-400"/>}
                          </div>
                          <div className="flex-1 cursor-pointer" onClick={() => setSelectedMemberProfile(user)}>
                            <h4 className="font-bold text-gray-900 text-sm hover:underline">{user.name} <span className="text-[10px] font-normal text-gray-500">({user.email})</span></h4>
                            <p className="text-xs text-gray-500 capitalize">{user.cargoTerreiro}</p>
                          </div>
                          <div className="flex gap-2">
                            <button onClick={() => handleApproveMember(user.id)} className="px-3 py-1.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 text-xs font-bold rounded">Autorizar Entrada</button>
                            <button onClick={() => handleRejectMember(user.id)} className="px-3 py-1.5 bg-red-100 hover:bg-red-200 text-red-800 text-xs font-bold rounded">Recusar</button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}

              {activeAdminTab === "tarefas" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                          {users.filter(u => u.status !== "pendente").map(u => <option key={u.id} value={u.name}>{u.name}</option>)}
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
              )}

              {activeAdminTab === "curimba" && (
                <div className="bg-white rounded-2xl border border-areia-escura shadow-sm p-6 max-w-2xl mx-auto">
                   <h2 className="font-serif font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Publicar Novo Ponto Cantado</h2>
                   <form onSubmit={handleAddPoint} className="space-y-4">
                     <div className="grid grid-cols-2 gap-4">
                       <div>
                         <label className="text-[11px] font-bold text-gray-700 uppercase">Título do Ponto</label>
                         <input type="text" required value={newPointTitle} onChange={(e) => setNewPointTitle(e.target.value)} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha" />
                       </div>
                       <div>
                         <label className="text-[11px] font-bold text-gray-700 uppercase">Guia ou Orixá</label>
                         <input type="text" required placeholder="Ex: Caboclo Pena Branca" value={newPointOrixa} onChange={(e) => setNewPointOrixa(e.target.value)} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha" />
                       </div>
                     </div>
                     <div>
                       <label className="text-[11px] font-bold text-gray-700 uppercase">Tipo / Momento</label>
                       <select value={newPointType} onChange={(e) => setNewPointType(e.target.value as CurimbaPoint["type"])} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha">
                         <option value="Abertura">Abertura</option>
                         <option value="Saudação">Saudação</option>
                         <option value="Defumação">Defumação</option>
                         <option value="Chamada">Chamada</option>
                         <option value="Subida">Subida</option>
                       </select>
                     </div>
                     <div>
                        <label className="text-[11px] font-bold text-gray-700 uppercase">Letra do Ponto</label>
                        <textarea required rows={4} value={newPointLyrics} onChange={(e) => setNewPointLyrics(e.target.value)} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha"></textarea>
                     </div>
                     <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg space-y-3">
                       <h3 className="text-xs font-bold text-gray-900 uppercase">Mídias (Opcional)</h3>
                       <div>
                         <label className="text-[11px] font-bold text-gray-700 uppercase">Link do YouTube</label>
                         <input type="url" placeholder="https://youtube.com/watch?v=..." value={newPointYoutube} onChange={(e) => setNewPointYoutube(e.target.value)} className="w-full px-3 py-2 bg-white border border-gray-200 rounded text-sm outline-none focus:border-verde-folha" />
                       </div>
                       <div>
                         <label className="text-[11px] font-bold text-gray-700 uppercase">URL de Áudio (MP3)</label>
                         <input type="url" placeholder="https://.../audio.mp3" value={newPointAudio} onChange={(e) => setNewPointAudio(e.target.value)} className="w-full px-3 py-2 bg-white border border-gray-200 rounded text-sm outline-none focus:border-verde-folha" />
                       </div>
                       <div>
                         <label className="text-[11px] font-bold text-gray-700 uppercase">URL de Vídeo (MP4)</label>
                         <input type="url" placeholder="https://.../video.mp4" value={newPointVideo} onChange={(e) => setNewPointVideo(e.target.value)} className="w-full px-3 py-2 bg-white border border-gray-200 rounded text-sm outline-none focus:border-verde-folha" />
                       </div>
                     </div>
                     <button type="submit" className="w-full bg-verde-mata text-white py-2 rounded text-sm font-bold mt-2 hover:bg-verde-folha transition flex justify-center items-center gap-2">
                        Salvar Ponto Cantado <Plus className="h-4 w-4"/>
                     </button>
                   </form>
                </div>
              )}

              {activeAdminTab === "blog" && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl border border-areia-escura shadow-sm p-6">
                    <h2 className="font-serif font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">{editArticle ? 'Editar Artigo' : 'Publicar Novo Artigo'}</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="text-[11px] font-bold text-gray-700 uppercase">Título</label>
                        <input type="text" value={editArticle?.title || ""} onChange={(e) => setEditArticle({...editArticle, title: e.target.value})} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-[11px] font-bold text-gray-700 uppercase">Categoria</label>
                          <select value={editArticle?.category || "Fundamentos"} onChange={(e) => setEditArticle({...editArticle, category: e.target.value as any})} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha">
                            <option value="Orixás">Orixás</option>
                            <option value="Guias">Guias</option>
                            <option value="Ervas">Ervas</option>
                            <option value="Fundamentos">Fundamentos</option>
                            <option value="História">História</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-[11px] font-bold text-gray-700 uppercase">Tempo de Leitura</label>
                          <input type="text" value={editArticle?.readTime || ""} onChange={(e) => setEditArticle({...editArticle, readTime: e.target.value})} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha" />
                        </div>
                      </div>
                      <div>
                        <label className="text-[11px] font-bold text-gray-700 uppercase">Resumo (Snippet)</label>
                        <textarea rows={2} value={editArticle?.snippet || ""} onChange={(e) => setEditArticle({...editArticle, snippet: e.target.value})} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha"></textarea>
                      </div>
                      <div>
                        <label className="text-[11px] font-bold text-gray-700 uppercase">Conteúdo</label>
                        <textarea rows={6} value={editArticle?.content || ""} onChange={(e) => setEditArticle({...editArticle, content: e.target.value})} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha whitespace-pre-wrap"></textarea>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={handleSaveArticle} className="flex-1 bg-verde-mata text-white py-2 rounded text-sm font-bold hover:bg-verde-folha transition flex justify-center items-center gap-2">
                          {editArticle?.id ? 'Atualizar Artigo' : 'Criar Artigo'} <Check className="h-4 w-4"/>
                        </button>
                        {editArticle && (
                          <button onClick={() => setEditArticle(null)} className="px-4 bg-gray-100 text-gray-700 py-2 rounded text-sm font-bold hover:bg-gray-200 transition">
                            Cancelar
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-areia-escura shadow-sm overflow-hidden">
                    <div className="bg-marrom-terra px-6 py-4 text-white">
                      <h2 className="font-serif font-bold flex items-center gap-2"><BookOpen className="h-5 w-5"/> Artigos Publicados</h2>
                    </div>
                    <div className="divide-y divide-gray-100 max-h-[500px] overflow-y-auto">
                      {articles.map(art => (
                        <div key={art.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                          <div>
                            <h4 className="font-bold text-gray-900 text-sm">{art.title}</h4>
                            <p className="text-xs text-gray-500">{art.category} • {art.date}</p>
                          </div>
                          <div className="flex gap-2">
                            <button onClick={() => setEditArticle(art)} className="p-1.5 bg-blue-50 text-blue-600 rounded hover:bg-blue-100"><Edit2 className="h-4 w-4"/></button>
                            <button onClick={() => handleDeleteArticle(art.id)} className="p-1.5 bg-red-50 text-red-600 rounded hover:bg-red-100"><Trash2 className="h-4 w-4"/></button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeAdminTab === "aulas" && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl border border-areia-escura shadow-sm p-6">
                    <h2 className="font-serif font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">{editLesson ? 'Editar Aula' : 'Cadastrar Nova Aula'}</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="text-[11px] font-bold text-gray-700 uppercase">Título da Aula</label>
                        <input type="text" value={editLesson?.title || ""} onChange={(e) => setEditLesson({...editLesson, title: e.target.value})} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-[11px] font-bold text-gray-700 uppercase">Categoria</label>
                          <select value={editLesson?.category || "Doutrina"} onChange={(e) => setEditLesson({...editLesson, category: e.target.value as any})} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha">
                            <option value="Doutrina">Doutrina</option>
                            <option value="Curimba">Curimba</option>
                            <option value="Desenvolvimento">Desenvolvimento</option>
                            <option value="Ervas e Banhos">Ervas e Banhos</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-[11px] font-bold text-gray-700 uppercase">Duração</label>
                          <input type="text" value={editLesson?.duration || ""} onChange={(e) => setEditLesson({...editLesson, duration: e.target.value})} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-[11px] font-bold text-gray-700 uppercase">URL do Vídeo</label>
                          <input type="text" value={editLesson?.videoUrl || ""} onChange={(e) => setEditLesson({...editLesson, videoUrl: e.target.value})} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha" />
                        </div>
                        <div>
                          <label className="text-[11px] font-bold text-gray-700 uppercase">Nível</label>
                          <select value={editLesson?.level || "Iniciante"} onChange={(e) => setEditLesson({...editLesson, level: e.target.value as any})} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha">
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="text-[11px] font-bold text-gray-700 uppercase">Descrição</label>
                        <textarea rows={2} value={editLesson?.description || ""} onChange={(e) => setEditLesson({...editLesson, description: e.target.value})} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha"></textarea>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={handleSaveLesson} className="flex-1 bg-verde-mata text-white py-2 rounded text-sm font-bold hover:bg-verde-folha transition flex justify-center items-center gap-2">
                          {editLesson?.id ? 'Atualizar Aula' : 'Cadastrar Aula'} <Check className="h-4 w-4"/>
                        </button>
                        {editLesson && (
                          <button onClick={() => setEditLesson(null)} className="px-4 bg-gray-100 text-gray-700 py-2 rounded text-sm font-bold hover:bg-gray-200 transition">
                            Cancelar
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-areia-escura shadow-sm overflow-hidden">
                    <div className="bg-marrom-terra px-6 py-4 text-white">
                      <h2 className="font-serif font-bold flex items-center gap-2"><PlayCircle className="h-5 w-5"/> Aulas Cadastradas</h2>
                    </div>
                    <div className="divide-y divide-gray-100 max-h-[500px] overflow-y-auto">
                      {lessons.map(les => (
                        <div key={les.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                          <div>
                            <h4 className="font-bold text-gray-900 text-sm">{les.title}</h4>
                            <p className="text-xs text-gray-500">{les.category} • {les.level}</p>
                          </div>
                          <div className="flex gap-2">
                            <button onClick={() => setEditLesson(les)} className="p-1.5 bg-blue-50 text-blue-600 rounded hover:bg-blue-100"><Edit2 className="h-4 w-4"/></button>
                            <button onClick={() => handleDeleteLesson(les.id)} className="p-1.5 bg-red-50 text-red-600 rounded hover:bg-red-100"><Trash2 className="h-4 w-4"/></button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeAdminTab === "ervas" && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl border border-areia-escura shadow-sm p-6">
                    <h2 className="font-serif font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">{editHerb ? 'Editar Erva' : 'Cadastrar Nova Erva'}</h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-[11px] font-bold text-gray-700 uppercase">Nome Popular</label>
                          <input type="text" value={editHerb?.name || ""} onChange={(e) => setEditHerb({...editHerb, name: e.target.value})} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha" />
                        </div>
                        <div>
                          <label className="text-[11px] font-bold text-gray-700 uppercase">Nome Científico</label>
                          <input type="text" value={editHerb?.scientificName || ""} onChange={(e) => setEditHerb({...editHerb, scientificName: e.target.value})} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-[11px] font-bold text-gray-700 uppercase">Orixá/Vibração</label>
                          <input type="text" value={editHerb?.orixa || ""} onChange={(e) => setEditHerb({...editHerb, orixa: e.target.value})} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha" />
                        </div>
                        <div>
                          <label className="text-[11px] font-bold text-gray-700 uppercase">Classificação</label>
                          <select value={editHerb?.classification || "Morna"} onChange={(e) => setEditHerb({...editHerb, classification: e.target.value as any})} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha">
                            <option value="Fria">Fria</option>
                            <option value="Morna">Morna</option>
                            <option value="Quente">Quente</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="text-[11px] font-bold text-gray-700 uppercase">Uso Ritual / Descarrego</label>
                        <textarea rows={2} value={editHerb?.ritualUse || ""} onChange={(e) => setEditHerb({...editHerb, ritualUse: e.target.value})} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha"></textarea>
                      </div>
                      <div>
                        <label className="text-[11px] font-bold text-gray-700 uppercase">Modo de Preparo</label>
                        <textarea rows={2} value={editHerb?.preparation || ""} onChange={(e) => setEditHerb({...editHerb, preparation: e.target.value})} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha"></textarea>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={handleSaveHerb} className="flex-1 bg-verde-mata text-white py-2 rounded text-sm font-bold hover:bg-verde-folha transition flex justify-center items-center gap-2">
                          {editHerb?.id ? 'Atualizar Erva' : 'Cadastrar Erva'} <Check className="h-4 w-4"/>
                        </button>
                        {editHerb && (
                          <button onClick={() => setEditHerb(null)} className="px-4 bg-gray-100 text-gray-700 py-2 rounded text-sm font-bold hover:bg-gray-200 transition">
                            Cancelar
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-areia-escura shadow-sm overflow-hidden">
                    <div className="bg-marrom-terra px-6 py-4 text-white">
                      <h2 className="font-serif font-bold flex items-center gap-2"><TreePine className="h-5 w-5"/> Ervas Cadastradas</h2>
                    </div>
                    <div className="divide-y divide-gray-100 max-h-[500px] overflow-y-auto">
                      {herbs.map(herb => (
                        <div key={herb.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                          <div>
                            <h4 className="font-bold text-gray-900 text-sm">{herb.name} <span className="font-normal text-xs text-gray-500 italic">({herb.scientificName})</span></h4>
                            <p className="text-xs text-gray-500">Vibração: {herb.orixa} • Classe: {herb.classification}</p>
                          </div>
                          <div className="flex gap-2">
                            <button onClick={() => setEditHerb(herb)} className="p-1.5 bg-blue-50 text-blue-600 rounded hover:bg-blue-100"><Edit2 className="h-4 w-4"/></button>
                            <button onClick={() => handleDeleteHerb(herb.id)} className="p-1.5 bg-red-50 text-red-600 rounded hover:bg-red-100"><Trash2 className="h-4 w-4"/></button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

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

                     {/* Media Rendering */}
                     {(selectedSong.youtubeUrl || selectedSong.audioUrl || selectedSong.videoUrl) && (
                       <div className="pt-6 border-t border-areia-escura space-y-4">
                         <h4 className="font-bold text-sm text-gray-900 uppercase">Mídia de Estudo</h4>
                         
                         {selectedSong.youtubeUrl && (
                           <div className="aspect-video w-full rounded-xl overflow-hidden bg-black">
                             <iframe 
                               src={selectedSong.youtubeUrl.replace("watch?v=", "embed/")} 
                               title="YouTube video player" 
                               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                               allowFullScreen 
                               className="w-full h-full border-0"
                             ></iframe>
                           </div>
                         )}

                         {selectedSong.videoUrl && !selectedSong.youtubeUrl && (
                           <div className="aspect-video w-full rounded-xl overflow-hidden bg-black">
                             <video src={selectedSong.videoUrl} controls className="w-full h-full object-contain" />
                           </div>
                         )}

                         {selectedSong.audioUrl && (
                           <div className="w-full bg-areia-suave p-4 rounded-xl border border-areia-escura">
                             <audio src={selectedSong.audioUrl} controls className="w-full" />
                           </div>
                         )}
                       </div>
                     )}
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

      {selectedMemberProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in-quick">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="bg-marrom-terra px-6 py-4 flex items-center justify-between sticky top-0 z-10">
              <h2 className="font-serif text-xl font-bold text-white flex items-center gap-2"><ClipboardList className="h-5 w-5"/> Ficha Cadastral do Membro</h2>
              <button onClick={() => setSelectedMemberProfile(null)} className="p-1 rounded hover:bg-marrom-tronco text-white"><X className="h-5 w-5" /></button>
            </div>
            <div className="p-6 overflow-y-auto flex-1">
               <div className="flex flex-col md:flex-row gap-6">
                 <div className="flex-shrink-0 flex flex-col items-center gap-3">
                   <div className="h-24 w-24 rounded-full bg-gray-200 border-4 border-gray-100 overflow-hidden">
                     {selectedMemberProfile.photoUrl ? <img src={selectedMemberProfile.photoUrl} alt="" className="w-full h-full object-cover"/> : <UserIcon className="h-12 w-12 m-auto mt-4 text-gray-400"/>}
                   </div>
                   <div className="text-center">
                     <span className={`inline-block px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${selectedMemberProfile.status === "pendente" ? "bg-amber-100 text-amber-800" : selectedMemberProfile.status === "aprovado" ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"}`}>
                       {selectedMemberProfile.status || "N/A"}
                     </span>
                   </div>
                 </div>
                 <div className="flex-1 space-y-4">
                    <div className="space-y-6">
                      {/* 1. Dados Civis e Identidade */}
                      <div>
                        <h4 className="font-serif font-bold text-marrom-terra border-b border-areia-escura pb-1 mb-3 text-sm">1. Dados Civis e Identidade</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Nome Completo</label>
                            <p className="text-sm font-medium text-gray-900">{selectedMemberProfile.name}</p>
                          </div>
                          <div>
                            <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Cargo Litúrgico</label>
                            <p className="text-sm font-medium text-gray-900 capitalize">{selectedMemberProfile.cargoTerreiro}</p>
                          </div>
                          <div>
                            <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">E-mail</label>
                            <p className="text-sm font-medium text-gray-900">{selectedMemberProfile.email}</p>
                          </div>
                          <div>
                            <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">WhatsApp</label>
                            <p className="text-sm font-medium text-gray-900">{selectedMemberProfile.whatsapp || "N/A"}</p>
                          </div>
                          <div>
                            <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">CPF</label>
                            <p className="text-sm font-medium text-gray-900">{selectedMemberProfile.cpf || "N/A"}</p>
                          </div>
                          <div>
                            <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">RG</label>
                            <p className="text-sm font-medium text-gray-900">{selectedMemberProfile.rg || "N/A"}</p>
                          </div>
                          <div>
                            <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Data de Nascimento</label>
                            <p className="text-sm font-medium text-gray-900">{selectedMemberProfile.dataNascimento ? new Date(selectedMemberProfile.dataNascimento).toLocaleDateString('pt-BR') : "N/A"}</p>
                          </div>
                          <div>
                            <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Tipo Sanguíneo</label>
                            <p className="text-sm font-medium text-gray-900">{selectedMemberProfile.tipoSanguineo || "N/A"}</p>
                          </div>
                          <div className="sm:col-span-2">
                            <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Profissão</label>
                            <p className="text-sm font-medium text-gray-900">{selectedMemberProfile.profissao || "N/A"}</p>
                          </div>
                          <div className="sm:col-span-2">
                            <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Endereço Completo</label>
                            <p className="text-sm font-medium text-gray-900">{selectedMemberProfile.endereco || "N/A"}</p>
                          </div>
                        </div>
                      </div>

                      {/* 2. Saúde Integrativa */}
                      <div>
                        <h4 className="font-serif font-bold text-marrom-terra border-b border-areia-escura pb-1 mb-3 text-sm">2. Saúde Integrativa</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="sm:col-span-2">
                            <label className="text-[10px] text-red-700 uppercase font-bold tracking-wider">Contato de Emergência</label>
                            <p className="text-sm font-medium text-gray-900">{selectedMemberProfile.contatoEmergencia || "N/A"}</p>
                          </div>
                          <div className="sm:col-span-2">
                            <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Alergias (ervas/alimentos)</label>
                            <p className="text-sm font-medium text-gray-900 whitespace-pre-wrap bg-gray-50 p-2 rounded border border-gray-100">{selectedMemberProfile.alergias || "N/A"}</p>
                          </div>
                          <div className="sm:col-span-2">
                            <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Acompanhamento Psicológico/Psiquiátrico?</label>
                            <p className="text-sm font-medium text-gray-900">{selectedMemberProfile.acompanhamentoPsicologico || "N/A"}</p>
                          </div>
                          <div className="sm:col-span-2">
                            <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Transtorno Psiquiátrico Diagnosticado</label>
                            <p className="text-sm font-medium text-gray-900 whitespace-pre-wrap bg-gray-50 p-2 rounded border border-gray-100">{selectedMemberProfile.transtornoPsiquiatrico || "N/A"}</p>
                          </div>
                          <div className="sm:col-span-2">
                            <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Uso de Medicamentos Contínuos</label>
                            <p className="text-sm font-medium text-gray-900 whitespace-pre-wrap bg-gray-50 p-2 rounded border border-gray-100">{selectedMemberProfile.medicamentosContinuos || "N/A"}</p>
                          </div>
                        </div>
                      </div>

                      {/* 3. Trajetória Espiritual */}
                      <div>
                        <h4 className="font-serif font-bold text-marrom-terra border-b border-areia-escura pb-1 mb-3 text-sm">3. Trajetória Espiritual</h4>
                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Tempo de desenvolvimento na religião</label>
                            <p className="text-sm font-medium text-gray-900">{selectedMemberProfile.tempoDesenvolvimento || "N/A"}</p>
                          </div>
                          <div>
                            <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Terreiros anteriores (quantos e motivo da saída)</label>
                            <p className="text-sm font-medium text-gray-900 whitespace-pre-wrap bg-gray-50 p-2 rounded border border-gray-100">{selectedMemberProfile.terreirosAnteriores || "N/A"}</p>
                          </div>
                          <div>
                            <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Iniciações/Obrigações já realizadas (ex: Amaci, Bori)</label>
                            <p className="text-sm font-medium text-gray-900 whitespace-pre-wrap bg-gray-50 p-2 rounded border border-gray-100">{selectedMemberProfile.iniciacoesRealizadas || "N/A"}</p>
                          </div>
                          <div>
                            <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Tipos de mediunidade afloradas</label>
                            <p className="text-sm font-medium text-gray-900">{selectedMemberProfile.tiposMediunidade || "N/A"}</p>
                          </div>
                          <div>
                            <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Guias e Orixás conhecidos</label>
                            <p className="text-sm font-medium text-gray-900 whitespace-pre-wrap bg-gray-50 p-2 rounded border border-gray-100">{selectedMemberProfile.guiasConhecidos || "N/A"}</p>
                          </div>
                        </div>
                      </div>

                      {/* 4. Sentido Existencial */}
                      <div>
                        <h4 className="font-serif font-bold text-marrom-terra border-b border-areia-escura pb-1 mb-3 text-sm">4. Sentido Existencial</h4>
                        <div>
                          <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">O que o seu coração busca ao adentrar as portas do TUCPB?</label>
                          <p className="text-sm font-medium text-gray-900 whitespace-pre-wrap bg-verde-folha/5 p-4 rounded-xl border border-verde-folha/20 italic">{selectedMemberProfile.buscaCoracao || "N/A"}</p>
                        </div>
                      </div>

                    </div>
                 </div>
               </div>
            </div>
            {selectedMemberProfile.status === "pendente" && (
              <div className="border-t border-gray-100 bg-gray-50 p-4 flex gap-3 justify-end rounded-b-2xl">
                 <button onClick={() => { handleRejectMember(selectedMemberProfile.id); setSelectedMemberProfile(null); }} className="px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-bold rounded">Recusar</button>
                 <button onClick={() => { handleApproveMember(selectedMemberProfile.id); setSelectedMemberProfile({ ...selectedMemberProfile, status: "aprovado" }); }} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded flex items-center gap-2"><CheckCircle className="h-4 w-4"/> Aprovar e Autorizar Entrada</button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
