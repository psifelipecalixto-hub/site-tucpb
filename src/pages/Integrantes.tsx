import { useState, FormEvent, useEffect, useRef, ChangeEvent } from "react";
import { Lock, Unlock, Users, ClipboardList, BookOpen, Bell, CheckCircle, Search, PlayCircle, TreePine, X, GraduationCap, Upload, Shield, User as UserIcon, Calendar as CalendarIcon, LogOut, Plus, Check, Clock, Trash2, Edit2, Eye, EyeOff } from "lucide-react";
import { initialPoints, initialLessons, initialHerbs, initialTasks, initialArticles, initialPlaylists } from "../data";
import { MemberTask, CurimbaPoint, Lesson, Herb, UserProfile, BlogArticle, CurimbaPlaylist } from "../types";
import { supabase } from "../lib/supabase";

// (Empty for cleanup)

// Helper function to format YouTube URLs for reliable embedding
const getYouTubeEmbedUrl = (url: string) => {
  if (!url) return "";
  try {
    const urlObj = new URL(url);
    const list = urlObj.searchParams.get("list");
    const v = urlObj.searchParams.get("v");
    const index = urlObj.searchParams.get("index");
    
    let embedUrl = "";
    if (v && list) {
      embedUrl = `https://www.youtube-nocookie.com/embed/${v}?list=${list}`;
    } else if (list) {
      embedUrl = `https://www.youtube-nocookie.com/embed/videoseries?list=${list}`;
    } else if (v) {
      embedUrl = `https://www.youtube-nocookie.com/embed/${v}`;
    }
    
    if (embedUrl) {
      if (index) {
        embedUrl += (embedUrl.includes('?') ? '&' : '?') + `index=${index}`;
      }
      return embedUrl;
    }
  } catch (e) {
    // ignore
  }
  return url.replace("watch?v=", "embed/").replace(/&list=/, "?list=").replace(/&pp=[^&]+/, "");
};

export default function Integrantes() {
  // --- Local Storage Database States ---
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [tasks, setTasks] = useState<MemberTask[]>([]);
  
  // --- Auth States ---
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [authMode, setAuthMode] = useState<"login" | "register" | "forgot-password">("login");
  const [showPassword, setShowPassword] = useState(false);
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
  const [memberToDelete, setMemberToDelete] = useState<UserProfile | null>(null);

  // --- Curimba Admin States ---
  const [newPointTitle, setNewPointTitle] = useState("");
  const [newPointOrixa, setNewPointOrixa] = useState("");
  const [newPointType, setNewPointType] = useState<CurimbaPoint["type"]>("Saudação");
  const [newPointLyrics, setNewPointLyrics] = useState("");
  const [newPointYoutube, setNewPointYoutube] = useState("");
  const [newPointAudio, setNewPointAudio] = useState("");
  const [newPointVideo, setNewPointVideo] = useState("");
  const [customPoints, setCustomPoints] = useState<CurimbaPoint[]>([]);
  const [editPoint, setEditPoint] = useState<Partial<CurimbaPoint> | null>(null);

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
  const [lessonTrailFilter, setLessonTrailFilter] = useState<string>("Todas as Trilhas");
  const [herbFilter, setHerbFilter] = useState<string>("Todas");
  const [herbGroupFilter, setHerbGroupFilter] = useState<string>("Todos os Grupos");

  // --- Curimba States ---
  const [curimbaLinha, setCurimbaLinha] = useState<string>("Caboclo");
  const [searchSong, setSearchSong] = useState<string>("");
  const [selectedSong, setSelectedSong] = useState<CurimbaPoint | null>(null);
  const [selectedPlaylist, setSelectedPlaylist] = useState<CurimbaPlaylist | null>(initialPlaylists[0]);

  // Load from LocalStorage and Supabase on mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data, error } = await supabase.from('membros').select('*');
        if (error) {
          console.warn("Error fetching users from Supabase:", error);
          setUsers([]);
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
          setUsers([]);
        }
      } catch (err) {
        console.error("Supabase error:", err);
      }
    };

    const fetchTasks = async () => {
      try {
        const { data, error } = await supabase.from('tarefas').select('*');
        if (error) {
          console.warn("Supabase (tarefas) table not found or error. Using LocalStorage fallback.");
          loadTasksFromLocal();
          return;
        }
        if (data && data.length > 0) {
          setTasks(data as MemberTask[]);
        } else {
          setTasks(initialTasks);
        }
      } catch (err) {
        console.error("Supabase tasks error:", err);
        loadTasksFromLocal();
      }
    };

    const loadTasksFromLocal = () => {
      const storedTasks = localStorage.getItem("tucpb_tasks");
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      } else {
        setTasks(initialTasks);
        localStorage.setItem("tucpb_tasks", JSON.stringify(initialTasks));
      }
    };

    fetchUsers();
    fetchTasks();

    const storedPoints = localStorage.getItem("tucpb_points");
    const storedArticles = localStorage.getItem("tucpb_articles");
    const storedLessons = localStorage.getItem("tucpb_lessons");
    const storedHerbs = localStorage.getItem("tucpb_herbs");

    if (storedPoints) {
      const parsed = JSON.parse(storedPoints);
      
      const updatedParsed = parsed.map((sp: any) => {
        const initialMatch = initialPoints.find(ip => ip.id === sp.id);
        if (initialMatch) {
          return { 
            ...sp, 
            lyrics: initialMatch.lyrics || sp.lyrics, 
            youtubeUrl: initialMatch.youtubeUrl || sp.youtubeUrl,
            guideOrOrixa: initialMatch.guideOrOrixa || sp.guideOrOrixa,
            title: initialMatch.title || sp.title,
            type: initialMatch.type || sp.type
          };
        }
        return sp;
      });

      const missingInitial = initialPoints.filter(ip => !updatedParsed.find((sp: any) => sp.id === ip.id));
      const merged = [...updatedParsed, ...missingInitial];
      
      setCustomPoints(merged);
      localStorage.setItem("tucpb_points", JSON.stringify(merged));
    } else {
      setCustomPoints(initialPoints);
      localStorage.setItem("tucpb_points", JSON.stringify(initialPoints));
    }

    if (storedArticles) {
      const parsedArticles = JSON.parse(storedArticles);
      const updatedArticles = parsedArticles.map((a: any) => {
        const initialMatch = initialArticles.find(ia => ia.id === a.id);
        return initialMatch ? { ...a, ...initialMatch } : a;
      });
      const missingInitialArticles = initialArticles.filter(ia => !updatedArticles.find((a: any) => a.id === ia.id));
      const mergedArticles = [...updatedArticles, ...missingInitialArticles];
      setArticles(mergedArticles);
      localStorage.setItem("tucpb_articles", JSON.stringify(mergedArticles));
    } else {
      setArticles(initialArticles);
      localStorage.setItem("tucpb_articles", JSON.stringify(initialArticles));
    }

    if (storedLessons) {
      try {
        const parsedLessons = JSON.parse(storedLessons);
        const initialIds = initialLessons.map(l => l.id);
        const customLessons = parsedLessons.filter((l: any) => !initialIds.includes(l.id));
        const mergedLessons = [...initialLessons, ...customLessons];
        setLessons(mergedLessons);
        localStorage.setItem("tucpb_lessons", JSON.stringify(mergedLessons));
      } catch (e) {
        setLessons(initialLessons);
        localStorage.setItem("tucpb_lessons", JSON.stringify(initialLessons));
      }
    } else {
      setLessons(initialLessons);
      localStorage.setItem("tucpb_lessons", JSON.stringify(initialLessons));
    }

    if (storedHerbs) {
      const parsedHerbs = JSON.parse(storedHerbs);
      const updatedHerbs = parsedHerbs.map((h: any) => {
        const initialMatch = initialHerbs.find(ih => ih.id === h.id);
        return initialMatch ? { ...h, ...initialMatch } : h;
      });
      const missingInitialHerbs = initialHerbs.filter(ih => !updatedHerbs.find((h: any) => h.id === ih.id));
      const mergedHerbs = [...updatedHerbs, ...missingInitialHerbs];
      setHerbs(mergedHerbs);
      localStorage.setItem("tucpb_herbs", JSON.stringify(mergedHerbs));
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
      // 1. Tentar login real via Supabase Auth
      const { data: authData, error: authErrorMsg } = await supabase.auth.signInWithPassword({
        email: authEmail,
        password: authPassword,
      });

      if (authErrorMsg) {
        console.warn("Supabase Auth error:", authErrorMsg.message);
      }

      if (!authErrorMsg && authData.user) {
        // Se logou com sucesso, busca o perfil na tabela membros
        const { data: profileData, error: profileError } = await supabase
          .from('membros')
          .select('*')
          .eq('email', authEmail)
          .single();
          
        if (!profileError && profileData) {
          const user = profileData as UserProfile;
          setCurrentUser(user);
          setPhotoPreview(user.photoUrl || null);
          localStorage.setItem("tucpb_logged_in_user", user.id);
          setActiveTab(user.role === "admin" ? "admin" : "perfil");
          return;
        } else {
          // Se autenticou no Supabase Auth mas não está na tabela membros
          if (authEmail === 'baba.ajo.tucpb@gmail.com') {
            const adminUser: UserProfile = {
              id: authData.user.id,
              name: "Pai Felipe",
              email: authEmail,
              password: "", // A senha real fica no Auth
              role: "admin",
              cargoTerreiro: "pai de santo",
              photoUrl: "",
              status: "aprovado"
            };
            
            // Tenta criar o registro na tabela de membros automaticamente
            await supabase.from('membros').insert([adminUser]);
            
            setCurrentUser(adminUser);
            localStorage.setItem("tucpb_logged_in_user", adminUser.id);
            setActiveTab("admin");
            return;
          } else {
            setAuthError("Seu cadastro foi iniciado, mas seu perfil não foi salvo. Por favor, vá na aba 'Solicitar Cadastro', preencha seus dados novamente com a MESMA senha e tente cadastrar para concluir.");
            return;
          }
        }
      }

      // 2. Fallback: verificar senha em texto puro na tabela membros (para cadastros antigos ou cadastrados via formulario e que ainda nao tem auth)
      const { data: fallbackData, error: fallbackError } = await supabase
        .from('membros')
        .select('*')
        .eq('email', authEmail)
        .eq('password', authPassword)
        .single();
        
      if (!fallbackError && fallbackData) {
        // Tenta migrar o usuário para o Supabase Auth para que a recuperação de senha funcione no futuro
        const { error: signUpError } = await supabase.auth.signUp({
          email: authEmail,
          password: authPassword,
        });
        
        if (!signUpError) {
           console.log("Usuário migrado para o Supabase Auth com sucesso.");
        }

        const user = fallbackData as UserProfile;
        setCurrentUser(user);
        setPhotoPreview(user.photoUrl || null);
        localStorage.setItem("tucpb_logged_in_user", user.id);
        setActiveTab(user.role === "admin" ? "admin" : "perfil");
        return;
      }

      if (authErrorMsg) {
        let translatedError = authErrorMsg.message;
        if (translatedError === "Invalid login credentials") {
          translatedError = "E-mail ou senha incorretos.";
        } else if (translatedError === "Email not confirmed") {
          translatedError = "E-mail não confirmado. Verifique sua caixa de entrada.";
        } else if (translatedError === "User already registered") {
          translatedError = "Usuário já cadastrado.";
        }
        setAuthError(translatedError);
      } else {
        setAuthError("E-mail ou senha incorretos.");
      }
    } catch (err: any) {
      console.error(err);
      setAuthError("Erro interno ao tentar fazer login: " + err.message);
    }
  };

  const handleForgotPassword = async (e: FormEvent) => {
    e.preventDefault();
    setAuthError("");
    if (!authEmail) {
      setAuthError("Preencha o e-mail para recuperar a senha.");
      return;
    }
    
    try {
      // Se o usuário existir apenas na tabela membros (cadastro antigo), tenta migrá-lo para o Auth
      const { data: profile } = await supabase.from('membros').select('email, password').eq('email', authEmail).single();
      if (profile && profile.password) {
        await supabase.auth.signUp({
          email: profile.email,
          password: profile.password,
        });
      }

      const { error } = await supabase.auth.resetPasswordForEmail(authEmail, {
        redirectTo: window.location.origin,
      });

      if (error) {
        setAuthError(error.message);
      } else {
        alert(`Instruções de recuperação de senha enviadas para: ${authEmail}. (Verifique sua caixa de spam)`);
        setAuthMode("login");
      }
    } catch (err) {
      console.error(err);
      setAuthError("Erro ao tentar recuperar a senha.");
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

    try {
      // 1. Cadastrar ou logar no Supabase Auth
      let userId = "";
      
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: authEmail,
        password: authPassword,
      });

      if (authError) {
        if (authError.message === "User already registered") {
          // Usuário já tem conta no Auth. Vamos tentar logar para ver se ele não tem perfil na tabela membros.
          const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
            email: authEmail,
            password: authPassword,
          });
          
          if (loginError) {
            setAuthError("E-mail já cadastrado. Tente fazer login na aba de Login.");
            return;
          }
          
          // Verifica se já tem perfil
          const { data: existingProfile } = await supabase.from('membros').select('id').eq('id', loginData.user.id).single();
          if (existingProfile) {
            setAuthError("E-mail já cadastrado. Tente fazer login na aba de Login.");
            return;
          }
          
          // Se não tem perfil, segue para inserção
          userId = loginData.user.id;
        } else {
          let translatedError = authError.message;
          if (translatedError.includes("Password should be at least")) translatedError = "A senha deve ter pelo menos 6 caracteres.";
          setAuthError(translatedError);
          return;
        }
      } else {
        userId = authData.user?.id || "";
      }
      
      if (!userId) {
        setAuthError("Falha ao obter o ID do usuário após o cadastro.");
        return;
      }

      console.log("Sessão após signup:", await supabase.auth.getSession());

      const newUser: UserProfile = {
        id: userId,
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

      const { error } = await supabase.from('membros').insert([newUser]);
      if (error) {
        console.error("Supabase insert error:", error);
        setAuthError(`Erro ao salvar no banco de dados: ${error.message}`);
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

  const handleLogout = async () => {
    setCurrentUser(null);
    localStorage.removeItem("tucpb_logged_in_user");
    setAuthEmail("");
    setAuthPassword("");
    await supabase.auth.signOut();
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
    let newStatus: MemberTask["status"] = "Pendente";
    const newTasks = tasks.map((t) => {
      if (t.id === taskId) {
        const nextStatusMap: Record<MemberTask["status"], MemberTask["status"]> = {
          "Pendente": "Concluido",
          "Em Andamento": "Concluido",
          "Concluido": "Pendente",
        };
        newStatus = nextStatusMap[t.status];
        return { ...t, status: newStatus };
      }
      return t;
    });
    
    setTasks(newTasks);
    
    // Background Supabase sync
    supabase.from('tarefas').update({ status: newStatus }).eq('id', taskId).then(({ error }) => {
      if (error) console.warn("Supabase (tarefas) might not exist:", error);
    });
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

    // Background Supabase sync
    supabase.from('tarefas').insert([newTaskItem]).then(({ error }) => {
      if (error) console.warn("Supabase (tarefas) might not exist:", error);
    });
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
        alert("Erro ao aprovar membro: " + error.message);
        return;
      }
      setUsers(users.map(u => u.id === userId ? { ...u, status: "aprovado" } : u));
      if (currentUser?.id === userId) {
        setCurrentUser({ ...currentUser, status: "aprovado" });
      }
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

  const handleDeleteMember = async (userId: string) => {
    try {
      const { error } = await supabase.from('membros').delete().eq('id', userId);
      if (error) {
        console.error("Supabase delete error:", error);
        setAuthError("Erro ao deletar membro: " + error.message);
        return;
      }
      setUsers(users.filter(u => u.id !== userId));
      if (selectedMemberProfile?.id === userId) {
        setSelectedMemberProfile(null);
      }
      setMemberToDelete(null);
    } catch (err) {
      console.error(err);
    }
  };

  // --- Admin Curimba Handlers ---
  const handleAddPoint = (e: FormEvent, overrideOrixa?: string) => {
    e.preventDefault();
    const orixaToUse = overrideOrixa || newPointOrixa;
    if (!newPointTitle || !orixaToUse || !newPointLyrics) return;

    if (editPoint?.id) {
       setCustomPoints(customPoints.map(p => p.id === editPoint.id ? {
         ...p,
         title: newPointTitle,
         guideOrOrixa: orixaToUse,
         type: newPointType,
         lyrics: newPointLyrics,
         youtubeUrl: newPointYoutube,
         audioUrl: newPointAudio,
         videoUrl: newPointVideo
       } : p));
       setEditPoint(null);
    } else {
      const newPoint: CurimbaPoint = {
        id: `pt-${Date.now()}`,
        title: newPointTitle,
        guideOrOrixa: orixaToUse,
        type: newPointType,
        lyrics: newPointLyrics,
        youtubeUrl: newPointYoutube,
        audioUrl: newPointAudio,
        videoUrl: newPointVideo
      };
      setCustomPoints([newPoint, ...customPoints]);
    }

    setNewPointTitle("");
    setNewPointOrixa("");
    setNewPointLyrics("");
    setNewPointYoutube("");
    setNewPointAudio("");
    setNewPointVideo("");
    setNewPointType("Saudação");
  };

  const handleEditPoint = (point: CurimbaPoint) => {
    setEditPoint(point);
    setNewPointTitle(point.title);
    setNewPointOrixa(point.guideOrOrixa);
    setNewPointType(point.type as any);
    setNewPointLyrics(point.lyrics);
    setNewPointYoutube(point.youtubeUrl || "");
    setNewPointAudio(point.audioUrl || "");
    setNewPointVideo(point.videoUrl || "");
  };

  const handleCancelEditPoint = () => {
    setEditPoint(null);
    setNewPointTitle("");
    setNewPointOrixa("");
    setNewPointType("Saudação");
    setNewPointLyrics("");
    setNewPointYoutube("");
    setNewPointAudio("");
    setNewPointVideo("");
  };

  const handleDeletePoint = (id: string) => {
    if (confirm("Tem certeza que deseja apagar este ponto?")) {
      setCustomPoints(customPoints.filter(p => p.id !== id));
    }
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
        iconName: editArticle.iconName || "book",
        imageUrl: editArticle.imageUrl || "",
        videoUrl: editArticle.videoUrl || "",
        tags: editArticle.tags || []
      };
      setArticles([newArticle, ...articles]);
    }
    setEditArticle(null);
  };

  const handleDeleteArticle = (id: string) => {
    setArticles(articles.filter(a => a.id !== id));
  };

  const handleSaveLesson = () => {
    if (!editLesson || !editLesson.title) return;
    
    if (editLesson.id) {
      setLessons(lessons.map(l => l.id === editLesson.id ? { ...l, ...editLesson } as Lesson : l));
    } else {
      const newLesson: Lesson = {
        id: `les-${Date.now()}`,
        title: editLesson.title || "",
        category: editLesson.category || "TRILHA I: A RAIZ",
        description: editLesson.description || "",
        duration: editLesson.duration || "1h",
        instructor: editLesson.instructor || currentUser?.name || "Instrutor",
        date: editLesson.date || new Date().toLocaleDateString('pt-BR'),
        videoUrl: editLesson.videoUrl || "",
        imageUrl: editLesson.imageUrl || "",
        level: editLesson.level || "Iniciante",
        tags: editLesson.tags || []
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
        tags: editHerb.tags || [],
        preparation: editHerb.preparation || "",
        verboAtuante: editHerb.verboAtuante || "",
        ofo: editHerb.ofo || "",
        grupo: editHerb.grupo || ""
      };
      setHerbs([newHerb, ...herbs]);
    }
    setEditHerb(null);
  };

  const handleDeleteHerb = (id: string) => {
    setHerbs(herbs.filter(h => h.id !== id));
  };

  const myTasks = tasks.filter(t => currentUser && t.assignedTo.trim().toLowerCase() === currentUser.name.trim().toLowerCase());

  // --- Filters ---
  const filteredLessons = lessons.filter(les => {
    const matchesSearch = les.title.toLowerCase().includes(searchEstudoQuery.toLowerCase()) ||
                          les.description.toLowerCase().includes(searchEstudoQuery.toLowerCase());
    const matchesTrail = lessonTrailFilter === "Todas as Trilhas" || 
                         (lessonTrailFilter === "Trilha 1" && les.category === "TRILHA I: A RAIZ") ||
                         (lessonTrailFilter === "Trilha 2" && les.category === "TRILHA II: O TRONCO") ||
                         (lessonTrailFilter === "Trilha 3" && les.category === "TRILHA III: A COPA") ||
                         (lessonTrailFilter === "Outros" && !["TRILHA I: A RAIZ", "TRILHA II: O TRONCO", "TRILHA III: A COPA"].includes(les.category));
    return matchesSearch && matchesTrail;
  });
  
  const filteredHerbs = herbs.filter(herb => {
    const matchesSearch = herb.name.toLowerCase().includes(searchEstudoQuery.toLowerCase());
    const matchesFilter = herbFilter === "Todas" || 
      (herbFilter === "Quentes (Excitatórias)" && herb.tags?.includes("Quente")) ||
      (herbFilter === "Frias (Calmantes)" && herb.tags?.includes("Fria")) ||
      (herbFilter === "Masculinas (Fálicas)" && herb.tags?.includes("Masculina")) ||
      (herbFilter === "Femininas (Uterinas)" && herb.tags?.includes("Feminina"));
    
    const matchesGroup = herbGroupFilter === "Todos os Grupos" || 
      (herb.grupo && herb.grupo.includes(herbGroupFilter));
      
    return matchesSearch && matchesFilter && matchesGroup;
  });

  const normalizeString = (str: string) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "").toLowerCase();

  const filteredSongs = customPoints.filter(s => 
    s.title.toLowerCase().includes(searchSong.toLowerCase()) || 
    s.guideOrOrixa.toLowerCase().includes(searchSong.toLowerCase()) ||
    s.lyrics.toLowerCase().includes(searchSong.toLowerCase())
  );

  const filteredPlaylists = initialPlaylists.filter(p => 
    p.title.toLowerCase().includes(searchSong.toLowerCase()) || 
    p.guideOrOrixa.toLowerCase().includes(searchSong.toLowerCase())
  );

  const linhasDeTrabalho = [
    { name: "Caboclo", colorClass: "bg-green-700 text-white border-green-700 hover:bg-green-800" },
    { name: "Exu", colorClass: "bg-red-800 text-white border-red-800 hover:bg-red-900" },
    { name: "Pomba Gira", colorClass: "bg-red-600 text-white border-red-600 hover:bg-red-700" },
    { name: "Preto Velho", colorClass: "bg-zinc-800 text-white border-zinc-800 hover:bg-zinc-900" },
    { name: "Ogum", colorClass: "bg-blue-800 text-white border-blue-800 hover:bg-blue-900" },
    { name: "Boiadeiro", colorClass: "bg-amber-800 text-white border-amber-800 hover:bg-amber-900" },
    { name: "Baiano", colorClass: "bg-yellow-500 text-black border-yellow-500 hover:bg-yellow-600 hover:text-white" },
    { name: "Cigano", colorClass: "bg-fuchsia-600 text-white border-fuchsia-600 hover:bg-fuchsia-700" },
    { name: "Erê", colorClass: "bg-pink-400 text-white border-pink-400 hover:bg-pink-500" },
    { name: "Marinheiro", colorClass: "bg-cyan-600 text-white border-cyan-600 hover:bg-cyan-700" },
    { name: "Exu Mirim", colorClass: "bg-red-950 text-white border-red-950 hover:bg-black" },
    { name: "Malandro", colorClass: "bg-red-700 text-white border-red-700 hover:bg-red-800" },
  ];

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
                {authMode === "forgot-password" ? "Recuperar Senha" : authMode === "login" ? "Acesso Restrito" : "Novo Cadastro"}
              </h2>
              <p className="text-xs text-gray-500">
                {authMode === "forgot-password" ? "Enviaremos instruções para o seu e-mail." : authMode === "login" ? "Entre com suas credenciais para acessar os estudos e tarefas da casa." : "Preencha os dados para criar seu perfil de membro."}
              </p>
            </div>

            {authMode === "forgot-password" ? (
              <form onSubmit={handleForgotPassword} className="space-y-4">
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
                {authError && <div className="text-xs text-red-600 bg-red-50 p-2 rounded">{authError}</div>}
                <button type="submit" className="w-full bg-verde-mata text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-verde-folha transition">
                  Recuperar Senha
                </button>
                <div className="text-center pt-2">
                  <button type="button" onClick={() => { setAuthMode("login"); setAuthError(""); }} className="text-xs text-gray-500 font-semibold hover:underline">
                    Voltar para o login
                  </button>
                </div>
              </form>
            ) : authMode === "login" ? (
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
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-gray-700 block">Senha</label>
                    <button type="button" onClick={() => { setAuthMode("forgot-password"); setAuthError(""); }} className="text-[10px] text-verde-folha font-semibold hover:underline">
                      Esqueceu a senha?
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={authPassword}
                      onChange={(e) => setAuthPassword(e.target.value)}
                      className="w-full px-3 py-2 pr-10 rounded-lg border border-areia-escura bg-areia-suave text-sm focus:ring-2 focus:ring-verde-folha outline-none"
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
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
                    <div className="relative">
                      <input type={showPassword ? "text" : "password"} required value={authPassword} onChange={(e) => setAuthPassword(e.target.value)} className="w-full px-3 py-2 pr-10 rounded-lg border border-areia-escura bg-areia-suave text-sm outline-none focus:ring-2 focus:ring-verde-folha" />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 block">Cargo no Terreiro</label>
                    <select value={authCargo} onChange={(e) => setAuthCargo(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-areia-escura bg-areia-suave text-xs outline-none focus:ring-2 focus:ring-verde-folha">
                      <option value="médiuns/cambones">Médiuns/Cambones</option>
                      <option value="ogam">Ogam</option>
                      <option value="membro externo">Membro Externo</option>
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
                            <option value="ogam">Ogam</option>
                            <option value="membro externo">Membro Externo</option>
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
                      <div key={user.id} className="p-4 flex items-center gap-4 hover:bg-gray-50">
                        <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0 cursor-pointer" onClick={() => setSelectedMemberProfile(user)}>
                          {user.photoUrl ? <img src={user.photoUrl} alt="" className="w-full h-full object-cover"/> : <UserIcon className="h-6 w-6 m-auto mt-2 text-gray-400"/>}
                        </div>
                        <div className="flex-1 cursor-pointer" onClick={() => setSelectedMemberProfile(user)}>
                          <h4 className="font-bold text-gray-900 text-sm hover:underline">{user.name} <span className="text-[10px] font-normal text-gray-500">({user.email})</span></h4>
                          <p className="text-xs text-gray-500 capitalize">{user.cargoTerreiro}</p>
                        </div>
                        {user.role === "admin" && <Shield className="h-4 w-4 text-red-700"/>}
                        {user.role !== "admin" && (
                          <button onClick={(e) => { e.stopPropagation(); setMemberToDelete(user); }} className="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-700 text-[10px] font-bold rounded">
                            Deletar
                          </button>
                        )}
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
                   <h2 className="font-serif font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">{editPoint ? 'Editar Ponto Cantado' : 'Publicar Novo Ponto Cantado'}</h2>
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
                         <option value="Sustentação">Sustentação</option>
                         <option value="Louvação">Louvação</option>
                         <option value="Firmeza">Firmeza</option>
                         <option value="Descarrego">Descarrego</option>
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
                     <div className="flex gap-2">
                       <button type="submit" className="w-full bg-verde-mata text-white py-2 rounded text-sm font-bold hover:bg-verde-folha transition flex justify-center items-center gap-2">
                          {editPoint ? 'Atualizar Ponto Cantado' : 'Salvar Ponto Cantado'} <Plus className="h-4 w-4"/>
                       </button>
                       {editPoint && (
                         <button type="button" onClick={handleCancelEditPoint} className="px-4 bg-gray-100 text-gray-700 py-2 rounded text-sm font-bold hover:bg-gray-200 transition">
                           Cancelar
                         </button>
                       )}
                     </div>
                   </form>

                   <div className="mt-12">
                      <h3 className="font-serif font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Pontos Cantados Publicados</h3>
                      <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                        {customPoints.map((point) => (
                           <div key={point.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                             <div className="flex-1 truncate pr-4">
                               <h4 className="font-bold text-sm text-gray-900 truncate">{point.title}</h4>
                               <p className="text-xs text-gray-500">{point.guideOrOrixa} • {point.type}</p>
                             </div>
                             <div className="flex gap-2 flex-shrink-0">
                               <button onClick={() => handleEditPoint(point)} className="p-2 text-blue-600 hover:bg-blue-50 rounded transition" title="Editar">
                                 <Edit2 className="h-4 w-4" />
                               </button>
                               <button onClick={() => handleDeletePoint(point.id)} className="p-2 text-red-600 hover:bg-red-50 rounded transition" title="Apagar">
                                 <Trash2 className="h-4 w-4" />
                               </button>
                             </div>
                           </div>
                        ))}
                        {customPoints.length === 0 && (
                          <p className="text-sm text-gray-500 text-center py-4">Nenhum ponto publicado ainda.</p>
                        )}
                      </div>
                   </div>
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
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-[11px] font-bold text-gray-700 uppercase">URL da Imagem</label>
                          <input type="text" value={editArticle?.imageUrl || ""} onChange={(e) => setEditArticle({...editArticle, imageUrl: e.target.value})} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha" placeholder="Opcional" />
                        </div>
                        <div>
                          <label className="text-[11px] font-bold text-gray-700 uppercase">URL do Vídeo</label>
                          <input type="text" value={editArticle?.videoUrl || ""} onChange={(e) => setEditArticle({...editArticle, videoUrl: e.target.value})} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha" placeholder="Opcional (YouTube, etc)" />
                        </div>
                      </div>
                      <div>
                        <label className="text-[11px] font-bold text-gray-700 uppercase">Tags (separadas por vírgula)</label>
                        <input type="text" value={editArticle?.tags?.join(", ") || ""} onChange={(e) => setEditArticle({...editArticle, tags: e.target.value.split(",").map(t => t.trim()).filter(Boolean)})} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha" placeholder="Opcional" />
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
                          <select value={editLesson?.category || "TRILHA I: A RAIZ"} onChange={(e) => setEditLesson({...editLesson, category: e.target.value as any})} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha">
                            <option value="TRILHA I: A RAIZ">Trilha 1: A Raiz</option>
                            <option value="TRILHA II: O TRONCO">Trilha 2: O Tronco</option>
                            <option value="TRILHA III: A COPA">Trilha 3: A Copa</option>
                            <option value="Outros">Outros</option>
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
                          <input type="text" value={editLesson?.videoUrl || ""} onChange={(e) => setEditLesson({...editLesson, videoUrl: e.target.value})} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha" placeholder="Opcional (YouTube, etc)" />
                        </div>
                        <div>
                          <label className="text-[11px] font-bold text-gray-700 uppercase">URL da Imagem</label>
                          <input type="text" value={editLesson?.imageUrl || ""} onChange={(e) => setEditLesson({...editLesson, imageUrl: e.target.value})} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha" placeholder="Opcional" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
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
                        <label className="text-[11px] font-bold text-gray-700 uppercase">Tags (separadas por vírgula)</label>
                        <input type="text" value={editLesson?.tags?.join(", ") || ""} onChange={(e) => setEditLesson({...editLesson, tags: e.target.value.split(",").map(t => t.trim()).filter(Boolean)})} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha" />
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
                          <label className="text-[11px] font-bold text-gray-700 uppercase">Tags (separadas por vírgula)</label>
                          <input type="text" value={editHerb?.tags?.join(', ') || ""} onChange={(e) => setEditHerb({...editHerb, tags: e.target.value.split(',').map(t => t.trim()).filter(Boolean)})} placeholder="Ex: Fria, Feminina" className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-[11px] font-bold text-gray-700 uppercase">Grupo (Direção)</label>
                          <input type="text" value={editHerb?.grupo || ""} onChange={(e) => setEditHerb({...editHerb, grupo: e.target.value})} placeholder="Ex: OÒGÚN (Cura e Paz)" className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha" />
                        </div>
                        <div>
                          <label className="text-[11px] font-bold text-gray-700 uppercase">Verbo Atuante</label>
                          <input type="text" value={editHerb?.verboAtuante || ""} onChange={(e) => setEditHerb({...editHerb, verboAtuante: e.target.value})} placeholder="Ex: COLO / Acalantar" className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha" />
                        </div>
                      </div>
                      <div>
                        <label className="text-[11px] font-bold text-gray-700 uppercase">Fundamento / Uso Ritual</label>
                        <textarea rows={2} value={editHerb?.ritualUse || ""} onChange={(e) => setEditHerb({...editHerb, ritualUse: e.target.value})} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha"></textarea>
                      </div>
                      <div>
                        <label className="text-[11px] font-bold text-gray-700 uppercase">Ofò (Cântico/Reza)</label>
                        <textarea rows={2} value={editHerb?.ofo || ""} onChange={(e) => setEditHerb({...editHerb, ofo: e.target.value})} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha"></textarea>
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
                            <p className="text-xs text-gray-500">Vibração: {herb.orixa} • Tags: {herb.tags?.join(', ')}</p>
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
                 <div className="space-y-10">
                   <div className="flex flex-wrap gap-2 mb-2">
                     {["Todas as Trilhas", "Trilha 1", "Trilha 2", "Trilha 3", "Outros"].map((trail) => {
                       let activeClasses = "bg-verde-mata text-white border-verde-mata";
                       if (trail === "Trilha 1") activeClasses = "bg-marrom-terra text-white border-marrom-terra";
                       if (trail === "Trilha 2") activeClasses = "bg-verde-mata text-white border-verde-mata";
                       if (trail === "Trilha 3") activeClasses = "bg-teal-700 text-white border-teal-700";
                       if (trail === "Outros") activeClasses = "bg-gray-800 text-white border-gray-800";
                       
                       return (
                         <button key={trail} onClick={() => setLessonTrailFilter(trail)} className={`px-4 py-1.5 text-xs font-bold rounded-full border transition-colors shadow-sm ${lessonTrailFilter === trail ? activeClasses : "bg-white text-gray-700 border-areia-escura hover:bg-gray-50"}`}>
                           {trail}
                         </button>
                       );
                     })}
                   </div>

                   {["TRILHA I: A RAIZ", "TRILHA II: O TRONCO", "TRILHA III: A COPA"].map((trail) => {
                     const trailLessons = filteredLessons.filter(l => l.category === trail);
                     if (trailLessons.length === 0) return null;
                     
                     let theme = {
                       headerBg: "bg-verde-mata",
                       titleColor: "text-dourado",
                       descColor: "text-white/80",
                       gradient: "from-verde-mata to-verde-folha",
                       tagBg: "bg-verde-mata/10",
                       tagText: "text-verde-mata",
                       tagBorder: "border-verde-mata/20",
                       titleText: "text-verde-escuro",
                       btnBg: "bg-verde-mata hover:bg-verde-escuro",
                       playIcon: "text-white/50 group-hover:text-white"
                     };

                     if (trail === "TRILHA I: A RAIZ") {
                       theme = {
                         headerBg: "bg-marrom-terra",
                         titleColor: "text-dourado",
                         descColor: "text-white/80",
                         gradient: "from-marrom-terra to-marrom-tronco",
                         tagBg: "bg-marrom-terra/10",
                         tagText: "text-marrom-terra",
                         tagBorder: "border-marrom-terra/20",
                         titleText: "text-marrom-terra",
                         btnBg: "bg-marrom-terra hover:bg-marrom-tronco",
                         playIcon: "text-dourado/60 group-hover:text-dourado"
                       };
                     } else if (trail === "TRILHA II: O TRONCO") {
                       theme = {
                         headerBg: "bg-verde-mata",
                         titleColor: "text-dourado",
                         descColor: "text-white/80",
                         gradient: "from-verde-mata to-verde-folha",
                         tagBg: "bg-verde-mata/10",
                         tagText: "text-verde-mata",
                         tagBorder: "border-verde-mata/20",
                         titleText: "text-verde-escuro",
                         btnBg: "bg-verde-mata hover:bg-verde-escuro",
                         playIcon: "text-dourado/60 group-hover:text-dourado"
                       };
                     } else if (trail === "TRILHA III: A COPA") {
                       theme = {
                         headerBg: "bg-teal-700",
                         titleColor: "text-white",
                         descColor: "text-white/90",
                         gradient: "from-teal-600 to-cyan-800",
                         tagBg: "bg-teal-700/10",
                         tagText: "text-teal-700",
                         tagBorder: "border-teal-700/20",
                         titleText: "text-teal-800",
                         btnBg: "bg-teal-700 hover:bg-teal-800",
                         playIcon: "text-white/60 group-hover:text-white"
                       };
                     }

                     return (
                       <div key={trail} className="bg-white rounded-2xl border border-areia-escura shadow-sm overflow-hidden animate-fade-in-quick">
                         <div className={`${theme.headerBg} p-5 sm:p-6 border-b-4 border-dourado`}>
                           <h2 className={`text-xl sm:text-2xl font-serif font-bold ${theme.titleColor} tracking-wide`}>{trail}</h2>
                           <p className={`${theme.descColor} text-sm mt-2 font-medium`}>
                             {trail === "TRILHA I: A RAIZ" && "Foco na base invisível que sustenta o campo mágico"}
                             {trail === "TRILHA II: O TRONCO" && "Foco na estrutura simbólica, litúrgica e performática do terreiro"}
                             {trail === "TRILHA III: A COPA" && "Foco na ação, comportamento e manipulação do Axé pelos Guias"}
                           </p>
                         </div>
                         <div className="p-6 bg-areia-suave/30">
                           <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                             {trailLessons.map((lesson) => (
                               <div key={lesson.id} className="bg-white rounded-xl border border-areia-escura overflow-hidden shadow-sm flex flex-col hover:-translate-y-1 transition-transform group">
                                 <div className={`relative aspect-video flex items-center justify-center overflow-hidden cursor-pointer ${lesson.imageUrl ? 'bg-black' : `bg-gradient-to-br ${theme.gradient}`}`} onClick={() => setSelectedLesson(lesson)}>
                                   {lesson.imageUrl && <img src={lesson.imageUrl} alt={lesson.title} className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105" />}
                                   <PlayCircle className={`h-14 w-14 ${theme.playIcon} group-hover:scale-110 transition-all z-10`}/>
                                   <div className="absolute bottom-3 left-3 bg-black/60 text-white text-[10px] px-2 py-1 rounded font-mono z-10">{lesson.duration}</div>
                                 </div>
                                 <div className="p-5 flex-1 flex flex-col gap-3">
                                   {lesson.tags && (
                                     <div className="flex flex-wrap gap-2 mb-1">
                                       {lesson.tags.map(tag => (
                                         <span key={tag} className={`text-[10px] px-2.5 py-1 ${theme.tagBg} ${theme.tagText} border ${theme.tagBorder} rounded-full font-bold uppercase tracking-wider`}>
                                           {tag}
                                         </span>
                                       ))}
                                     </div>
                                   )}
                                   <h3 className={`font-serif text-[17px] font-bold ${theme.titleText} leading-tight`}>{lesson.title}</h3>
                                   <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed flex-1">{lesson.description}</p>
                                   <button onClick={() => setSelectedLesson(lesson)} className={`mt-4 w-full py-2.5 ${theme.btnBg} text-white text-xs font-bold rounded-lg transition-colors shadow-sm`}>
                                     Acessar Módulo
                                   </button>
                                 </div>
                               </div>
                             ))}
                           </div>
                         </div>
                       </div>
                     );
                   })}

                   {/* Outras Aulas */}
                   {(filteredLessons.filter(l => !["TRILHA I: A RAIZ", "TRILHA II: O TRONCO", "TRILHA III: A COPA"].includes(l.category)).length > 0 || lessonTrailFilter === "Outros") && (
                       <div className="bg-white rounded-2xl border border-areia-escura shadow-sm overflow-hidden animate-fade-in-quick mt-10">
                         <div className="bg-gray-800 p-5 sm:p-6 border-b-4 border-gray-600">
                           <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide">OUTRAS AULAS E ESTUDOS</h2>
                           <p className="text-gray-300 text-sm mt-2 font-medium">
                             Módulos complementares, apostilas e outros conteúdos do terreiro
                           </p>
                         </div>
                         <div className="p-6 bg-areia-suave/30">
                           {filteredLessons.filter(l => !["TRILHA I: A RAIZ", "TRILHA II: O TRONCO", "TRILHA III: A COPA"].includes(l.category)).length > 0 ? (
                             <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                               {filteredLessons.filter(l => !["TRILHA I: A RAIZ", "TRILHA II: O TRONCO", "TRILHA III: A COPA"].includes(l.category)).map((lesson) => (
                                  <div key={lesson.id} className="bg-white rounded-xl border border-areia-escura overflow-hidden shadow-sm flex flex-col hover:-translate-y-1 transition-transform group">
                                    <div className={`relative aspect-video flex items-center justify-center overflow-hidden cursor-pointer ${lesson.imageUrl ? 'bg-black' : 'bg-gradient-to-br from-gray-700 to-gray-900'}`} onClick={() => setSelectedLesson(lesson)}>
                                      {lesson.imageUrl && <img src={lesson.imageUrl} alt={lesson.title} className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105" />}
                                      <PlayCircle className="h-14 w-14 text-white/50 group-hover:scale-110 group-hover:text-white transition-all z-10"/>
                                      <div className="absolute bottom-3 left-3 bg-black/60 text-white text-[10px] px-2 py-1 rounded font-mono z-10">{lesson.duration}</div>
                                    </div>
                                    <div className="p-5 flex-1 flex flex-col gap-3">
                                      {lesson.tags && (
                                        <div className="flex flex-wrap gap-2 mb-1">
                                          {lesson.tags.map(tag => (
                                            <span key={tag} className="text-[10px] px-2.5 py-1 bg-gray-100 text-gray-700 border border-gray-200 rounded-full font-bold uppercase tracking-wider">
                                              {tag}
                                            </span>
                                          ))}
                                        </div>
                                      )}
                                      <span className="text-[10px] px-2.5 py-1 bg-gray-100 text-gray-700 border border-gray-200 rounded-full font-bold uppercase tracking-wider self-start">
                                        {lesson.category}
                                      </span>
                                      <h3 className="font-serif text-[17px] font-bold text-gray-900 leading-tight">{lesson.title}</h3>
                                      <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed flex-1">{lesson.description}</p>
                                      <button onClick={() => setSelectedLesson(lesson)} className="mt-4 w-full py-2.5 bg-gray-800 hover:bg-gray-900 text-white text-xs font-bold rounded-lg transition-colors shadow-sm">
                                        Acessar Módulo
                                      </button>
                                    </div>
                                  </div>
                               ))}
                             </div>
                           ) : (
                             <div className="text-center py-8">
                               <p className="text-sm text-gray-500 italic">Nenhum conteúdo adicional cadastrado nesta seção.</p>
                             </div>
                           )}
                         </div>
                       </div>
                   )}
                 </div>
               )}

               {/* Ervas */}
               {activeEstudoTab === "ervas" && (
                 <div className="space-y-4">
                   <div className="flex flex-wrap gap-2">
                     {["Todos os Grupos", "OÒGÚN", "ÀWÚRE", "IDÁÀBÒBÒ", "ÌṢẸ́GUN"].map((grp) => (
                       <button key={grp} onClick={() => setHerbGroupFilter(grp)} className={`px-3 py-1 text-[11px] font-bold rounded-full border ${herbGroupFilter === grp ? "bg-marrom-terra text-white border-marrom-terra" : "bg-white text-gray-600 border-areia-escura hover:bg-gray-50"}`}>{grp}</button>
                     ))}
                   </div>
                   <div className="flex flex-wrap gap-2">
                     {["Todas", "Quentes (Excitatórias)", "Frias (Calmantes)", "Masculinas (Fálicas)", "Femininas (Uterinas)"].map((cls) => (
                       <button key={cls} onClick={() => setHerbFilter(cls)} className={`px-3 py-1 text-[11px] font-bold rounded-full border ${herbFilter === cls ? "bg-verde-folha text-white border-verde-folha" : "bg-white text-gray-600 border-areia-escura hover:bg-gray-50"}`}>{cls}</button>
                     ))}
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                     {filteredHerbs.map((herb) => (
                       <div key={herb.id} className="bg-white rounded-xl border border-areia-escura p-4 shadow-sm flex flex-col hover:border-verde-folha/50">
                         <div className="flex justify-between items-start mb-2">
                           <TreePine className="h-5 w-5 text-verde-folha" />
                           <div className="flex flex-wrap gap-1 justify-end">
                             {herb.tags?.map(tag => (
                               <span key={tag} className={`text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider ${
                                 (tag === "Fria" || tag === "Feminina") ? "bg-teal-50 text-teal-700 border border-teal-200" :
                                 (tag === "Quente" || tag === "Masculina") ? "bg-red-50 text-red-700 border border-amber-400" :
                                 "bg-gray-100 text-gray-800 border border-gray-200"
                               }`}>
                                 {tag}
                               </span>
                             ))}
                           </div>
                         </div>
                         <h3 className="font-serif font-bold text-gray-900">{herb.name}</h3>
                         {herb.orixa && <p className="text-[10px] text-gray-500 font-mono mb-2">Vibração: {herb.orixa}</p>}
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
             <div className="space-y-6 animate-fade-in-quick">
               <div className="bg-white rounded-2xl border border-areia-escura p-4 shadow-sm flex flex-col items-center gap-4">
                 <div className="flex flex-wrap justify-center gap-2 w-full">
                   {linhasDeTrabalho.map(linha => (
                      <button key={linha.name} onClick={() => setCurimbaLinha(linha.name)} className={`px-4 py-2 text-xs font-bold rounded-full border transition-colors shadow-sm ${curimbaLinha === linha.name ? linha.colorClass : "bg-white text-gray-700 border-areia-escura hover:bg-gray-50"}`}>
                        {linha.name}
                      </button>
                   ))}
                 </div>
               </div>

               {(() => {
                 const normalizedLinha = normalizeString(curimbaLinha);
                 const playlist = initialPlaylists.find(p => normalizeString(p.guideOrOrixa) === normalizedLinha);
                 const pontos = customPoints.filter(p => {
                   const nP = normalizeString(p.guideOrOrixa);
                   const nL = normalizedLinha;
                   
                   // Tratamentos específicos
                   if (nL === 'pretovelho' && nP === 'pretosvelhos') return true;
                   if (nL === 'exu') return nP === 'exu'; // Para não incluir "exumirim"
                   
                   return nP.includes(nL) || nL.includes(nP);
                 });
                 
                 return (
                   <div className="space-y-6">
                     {playlist && (
                       <div className="bg-white rounded-2xl border border-areia-escura p-6 shadow-sm">
                         <h3 className="font-serif text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                           <PlayCircle className="h-5 w-5 text-red-600"/>
                           Playlist Base: {playlist.title}
                         </h3>
                         <div className="aspect-video w-full rounded-xl overflow-hidden bg-black mx-auto">
                           <iframe key={playlist.id}
                              src={getYouTubeEmbedUrl(playlist.youtubeUrl)} 
                             title="YouTube playlist player" 
                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                             allowFullScreen 
                             className="w-full h-full border-0"
                           ></iframe>
                         </div>
                         <div className="mt-4 flex flex-col items-center gap-3">
                           <a href={playlist.youtubeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-2.5 bg-red-600 text-white rounded-lg text-sm font-bold hover:bg-red-700 transition shadow-sm">
                             <PlayCircle className="h-5 w-5"/> Abrir no YouTube
                           </a>
                           <p className="text-[11px] text-gray-500 max-w-md text-center leading-relaxed">
                              Nota: Alguns vídeos possuem restrições de direitos autorais que bloqueiam a reprodução aqui. Se aparecer "Vídeo indisponível", você pode clicar no botão <strong>Próximo (⏭)</strong> no próprio player de vídeo para pular para a próxima música, ou usar o botão acima para abrir no YouTube.
                           </p>
                         </div>
                       </div>
                     )}

                     <div className="bg-white rounded-2xl border border-areia-escura p-6 shadow-sm">
                       <h3 className="font-serif text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                         <BookOpen className="h-5 w-5 text-verde-folha"/>
                         Pontos Cadastrados - {curimbaLinha}
                       </h3>
                       {pontos.length > 0 ? (
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           {pontos.map(ponto => (
                             <div key={ponto.id} className="border border-areia-escura rounded-xl p-4 bg-areia-suave relative group">
                               <div className="absolute top-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                 <button onClick={() => {
                                   handleEditPoint(ponto);
                                   window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                                 }} className="p-1.5 bg-white text-blue-600 hover:bg-blue-50 rounded shadow-sm transition border border-gray-100" title="Editar">
                                   <Edit2 className="h-3.5 w-3.5" />
                                 </button>
                                 <button onClick={() => handleDeletePoint(ponto.id)} className="p-1.5 bg-white text-red-600 hover:bg-red-50 rounded shadow-sm transition border border-gray-100" title="Apagar">
                                   <Trash2 className="h-3.5 w-3.5" />
                                 </button>
                               </div>
                               <h4 className="font-bold text-sm text-gray-900 mb-1 pr-16">{ponto.title}</h4>
                               <p className="text-xs text-gray-500 font-medium mb-3">Tipo: {ponto.type}</p>
                               <pre className="font-serif text-sm text-gray-800 whitespace-pre-wrap leading-relaxed bg-white p-3 rounded border border-gray-100">{ponto.lyrics}</pre>
                               {ponto.youtubeUrl && (
                                 <a href={ponto.youtubeUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-800">
                                   <PlayCircle className="h-3 w-3"/> Ver no YouTube
                                 </a>
                               )}
                             </div>
                           ))}
                         </div>
                       ) : (
                         <p className="text-sm text-gray-500 italic">Nenhum ponto cadastrado para esta linha ainda.</p>
                       )}
                     </div>

                     <div className="bg-white rounded-2xl border border-areia-escura p-6 shadow-sm">
                       <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">{editPoint ? 'Editar Ponto' : `Cadastrar Novo Ponto de ${curimbaLinha}`}</h3>
                       <form onSubmit={(e) => { 
                         setNewPointOrixa(curimbaLinha); 
                         handleAddPoint(e, curimbaLinha); 
                       }} className="space-y-4">
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                           <div>
                             <label className="text-[11px] font-bold text-gray-700 uppercase">Título do Ponto</label>
                             <input type="text" required placeholder="Ex: Ponto de Subida" value={newPointTitle} onChange={(e) => setNewPointTitle(e.target.value)} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha" />
                           </div>
                           <div>
                             <label className="text-[11px] font-bold text-gray-700 uppercase">Tipo / Momento</label>
                             <select value={newPointType} onChange={(e) => setNewPointType(e.target.value as CurimbaPoint["type"])} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha">
                               <option value="Abertura">Abertura</option>
                               <option value="Saudação">Saudação</option>
                               <option value="Defumação">Defumação</option>
                               <option value="Chamada">Chamada</option>
                               <option value="Subida">Subida</option>
                               <option value="Firmeza">Firmeza</option>
                               <option value="Louvação">Louvação</option>
                               <option value="Descarrego">Descarrego</option>
                             </select>
                           </div>
                         </div>
                         <div>
                           <label className="text-[11px] font-bold text-gray-700 uppercase">Letra do Ponto</label>
                           <textarea required rows={4} placeholder="Letra completa..." value={newPointLyrics} onChange={(e) => setNewPointLyrics(e.target.value)} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha font-serif" />
                         </div>
                         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                           <div>
                             <label className="text-[11px] font-bold text-gray-700 uppercase">URL YouTube</label>
                             <input type="url" placeholder="https://youtube.com/watch?v=..." value={newPointYoutube} onChange={(e) => setNewPointYoutube(e.target.value)} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha" />
                           </div>
                           <div>
                             <label className="text-[11px] font-bold text-gray-700 uppercase">URL Áudio</label>
                             <input type="url" placeholder="https://.../audio.mp3" value={newPointAudio} onChange={(e) => setNewPointAudio(e.target.value)} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha" />
                           </div>
                           <div>
                             <label className="text-[11px] font-bold text-gray-700 uppercase">URL Vídeo</label>
                             <input type="url" placeholder="https://.../video.mp4" value={newPointVideo} onChange={(e) => setNewPointVideo(e.target.value)} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm outline-none focus:border-verde-folha" />
                           </div>
                         </div>
                         <div className="flex gap-2">
                           <button type="submit" className="w-full bg-verde-mata text-white py-2 rounded text-sm font-bold hover:bg-verde-folha transition flex justify-center items-center gap-2">
                              {editPoint ? 'Atualizar Ponto Cantado' : 'Salvar Ponto Cantado'} <Plus className="h-4 w-4"/>
                           </button>
                           {editPoint && (
                             <button type="button" onClick={handleCancelEditPoint} className="px-4 bg-gray-100 text-gray-700 py-2 rounded text-sm font-bold hover:bg-gray-200 transition">
                               Cancelar
                             </button>
                           )}
                         </div>
                       </form>
                     </div>
                   </div>
                 );
               })()}
             </div>
          )}

        </section>
      )}

      {/* MODALS */}
      {selectedLesson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in-quick" onClick={() => setSelectedLesson(null)}>
          <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col" onClick={e => e.stopPropagation()} style={{ maxHeight: "90vh" }}>
            <div className="flex items-center justify-between p-4 border-b border-areia-escura bg-areia-suave shrink-0">
              <h3 className="font-bold text-sm sm:text-base text-gray-900 truncate">{selectedLesson.title}</h3>
              <button onClick={() => setSelectedLesson(null)} className="p-2 rounded-full hover:bg-gray-200 text-gray-500 transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="overflow-y-auto flex-1 bg-white">
              <div className="bg-black aspect-video w-full flex items-center justify-center overflow-hidden">
                {selectedLesson.videoUrl ? (
                  <iframe 
                    src={selectedLesson.videoUrl} 
                    title="Video Player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen 
                    className="w-full h-full border-0"
                  ></iframe>
                ) : selectedLesson.imageUrl ? (
                  <img src={selectedLesson.imageUrl} alt={selectedLesson.title} className="w-full h-full object-cover" />
                ) : (
                  <PlayCircle className="h-16 w-16 text-white/30" />
                )}
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-verde-folha/10 text-verde-folha px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-verde-folha/20">{selectedLesson.category}</span>
                  <span className="bg-marrom-terra/10 text-marrom-terra px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-marrom-terra/20">{selectedLesson.level}</span>
                  {selectedLesson.tags?.map(tag => (
                    <span key={tag} className="bg-yellow-50 text-marrom-terra border border-dourado/50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{selectedLesson.description}</p>
                <div className="mt-6 pt-4 border-t border-areia-escura flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-500 font-medium">
                  <span className="flex items-center gap-1"><UserIcon className="h-4 w-4" /> Instrutor: {selectedLesson.instructor}</span>
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> Duração: {selectedLesson.duration}</span>
                  <span className="flex items-center gap-1"><CalendarIcon className="h-4 w-4" /> Data: {selectedLesson.date}</span>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-areia-escura bg-gray-50 flex justify-end shrink-0">
              <button 
                onClick={() => setSelectedLesson(null)} 
                className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold text-sm rounded-lg transition-colors"
              >
                Fechar Vídeo
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedHerb && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in-quick" onClick={() => setSelectedHerb(null)}>
          <div className="relative w-full max-w-lg bg-white rounded-2xl p-6" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedHerb(null)} className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-500"><X className="h-5 w-5" /></button>
            <h2 className="font-serif text-xl font-bold text-marrom-terra mb-1">{selectedHerb.name}</h2>
            {selectedHerb.orixa && <p className="text-xs text-gray-500 mb-4 uppercase tracking-widest font-bold">Vibração: {selectedHerb.orixa}</p>}
            <div className="flex flex-wrap gap-1 mb-4">
               {selectedHerb.tags?.map(tag => (
                 <span key={tag} className={`text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider ${
                   (tag === "Fria" || tag === "Feminina") ? "bg-teal-50 text-teal-700 border border-teal-200" :
                   (tag === "Quente" || tag === "Masculina") ? "bg-red-50 text-red-700 border border-amber-400" :
                   "bg-gray-100 text-gray-800 border border-gray-200"
                 }`}>
                   {tag}
                 </span>
               ))}
               {selectedHerb.grupo && (
                 <span className="text-[10px] px-2 py-0.5 rounded font-bold tracking-wider bg-purple-50 text-purple-700 border border-purple-200 uppercase">
                   {selectedHerb.grupo}
                 </span>
               )}
             </div>
            <div className="space-y-4 text-sm text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-100">
              {selectedHerb.verboAtuante && <div><strong className="text-marrom-terra">Verbo Atuante (Chave de Ignição):</strong> {selectedHerb.verboAtuante}</div>}
              <div><strong className="text-marrom-terra">Fundamento Mágico:</strong><br/><span className="text-gray-600 leading-relaxed">{selectedHerb.ritualUse}</span></div>
              {selectedHerb.ofo && <div><strong className="text-marrom-terra">Ofò (Encantamento / Sopro Vital):</strong><br/><em className="text-gray-600">"{selectedHerb.ofo.replace(/(^"|"$)/g, '')}"</em></div>}
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <strong className="text-marrom-terra block mb-2">Manual de Laboratório Litúrgico (Preparo na Umbanda):</strong>
                <div className="text-xs text-gray-600 space-y-2">
                  <p><strong>A HORA E A LUA:</strong> {selectedHerb.tags?.includes("Quente") ? "Lua Minguante (Descarrego). Horário: Meio-dia ou Noite." : "Lua Nova (Cura) ou Crescente (Prosperidade). Horário: Manhã (Sol nascendo)."}</p>
                  <p><strong>A ÁGUA (O SOLVENTE):</strong> {selectedHerb.tags?.includes("Quente") ? "Água de Mar ou Torneira (ressuscitada ao Sereno). Adicione Cachaça (Fogo Líquido) para extrair o axé de quebra." : "Água de Cachoeira, Rio ou Chuva fina. Adicione Mel para adoçar a cura (nunca ferva o mel)."}</p>
                  <p><strong>A MACERAÇÃO (QUINAGEM):</strong> {selectedHerb.tags?.includes("Quente") ? "As Guerreiras. Rasgue e macere com força (Mòwó), quebrando as fibras enquanto pronuncia o verbo atuante com firmeza ('Quebra! Tira!')." : "As Curadoras. Macere com gentileza, pedindo paz e sussurrando o verbo suavemente ('Acalma...')."}</p>
                  <p><strong>USO PRÁTICO:</strong> {selectedHerb.grupo?.includes("OÒGÚN") || selectedHerb.tags?.includes("Fria") ? "Permitida para banhos de cabeça (Amaci no Ori) e lavagem de guias para nutrição." : "<strong>NUNCA</strong> jogue no Ori (cabeça). Banho do pescoço para baixo. Excelente para Bate-Folha (Exorcismo Vegetal) ou Defumação de Descarrego (se seca)."}</p>
                  {selectedHerb.preparation && <div className="mt-2 text-sm bg-white p-2 rounded border border-gray-200 text-gray-700"><strong>Observação Específica:</strong> {selectedHerb.preparation}</div>}
                </div>
              </div>
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
            {selectedMemberProfile.status === "pendente" ? (
              <div className="border-t border-gray-100 bg-gray-50 p-4 flex gap-3 justify-end rounded-b-2xl">
                 <button onClick={() => { handleRejectMember(selectedMemberProfile.id); setSelectedMemberProfile(null); }} className="px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-bold rounded">Recusar</button>
                 <button onClick={() => { handleApproveMember(selectedMemberProfile.id); setSelectedMemberProfile({ ...selectedMemberProfile, status: "aprovado" }); }} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded flex items-center gap-2"><CheckCircle className="h-4 w-4"/> Aprovar e Autorizar Entrada</button>
              </div>
            ) : selectedMemberProfile.role !== "admin" && (
              <div className="border-t border-gray-100 bg-gray-50 p-4 flex justify-end rounded-b-2xl">
                 <button onClick={() => setMemberToDelete(selectedMemberProfile)} className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-700 text-sm font-bold rounded">Deletar Membro</button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Member Deletion Confirmation Modal */}
      {memberToDelete && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl w-full max-w-md p-6 shadow-xl relative animate-in fade-in zoom-in duration-200">
            <button onClick={() => setMemberToDelete(null)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors">
              <X className="h-5 w-5" />
            </button>
            <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Excluir Membro</h3>
            <p className="text-sm text-gray-600 mb-6">
              Tem certeza que deseja deletar o membro <span className="font-bold">{memberToDelete.name}</span>? Esta ação não pode ser desfeita.
            </p>
            <div className="flex gap-3 justify-end">
              <button onClick={() => setMemberToDelete(null)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-bold rounded">Cancelar</button>
              <button onClick={() => handleDeleteMember(memberToDelete.id)} className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded">Sim, Deletar</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
