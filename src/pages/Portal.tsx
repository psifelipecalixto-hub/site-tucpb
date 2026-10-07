import { useState, useEffect } from "react";
import { 
  Search, 
  BookOpen, 
  ArrowRight, 
  User, 
  Clock, 
  X, 
  Check, 
  CheckCircle, 
  PlayCircle, 
  Headphones, 
  Download, 
  FileText, 
  GraduationCap, 
  Sparkles, 
  Filter,
  CheckCircle2,
  ListChecks
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BlogArticle, Lesson } from "../types";
import { initialArticles, initialLessons } from "../data";

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
  return url
    .replace("watch?v=", "embed/")
    .replace("youtu.be/", "youtube.com/embed/")
    .replace(/&list=/, "?list=")
    .replace(/&pp=[^&]+/, "");
};

export default function Portal() {
  // Navigation Tabs: "modulos" (Módulos de Formação) or "artigos" (Blog Público)
  const [activeTab, setActiveTab] = useState<"modulos" | "artigos">("modulos");

  // Articles state
  const [searchArticleQuery, setSearchArticleQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const [articles, setArticles] = useState<BlogArticle[]>([]);

  // Lessons / Modules state
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [searchModuleQuery, setSearchModuleQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"todos" | "concluidos" | "pendentes">("todos");
  const [trailFilter, setTrailFilter] = useState<string>("Todas as Trilhas");

  // LocalStorage state for completed modules
  const [completedModules, setCompletedModules] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("tucpb_completed_modules");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Load articles and lessons
  useEffect(() => {
    const storedArticles = localStorage.getItem("tucpb_articles");
    if (storedArticles) {
      try {
        setArticles(JSON.parse(storedArticles));
      } catch {
        setArticles(initialArticles);
      }
    } else {
      setArticles(initialArticles);
      localStorage.setItem("tucpb_articles", JSON.stringify(initialArticles));
    }

    const storedLessons = localStorage.getItem("tucpb_lessons");
    if (storedLessons) {
      try {
        setLessons(JSON.parse(storedLessons));
      } catch {
        setLessons(initialLessons);
      }
    } else {
      setLessons(initialLessons);
      localStorage.setItem("tucpb_lessons", JSON.stringify(initialLessons));
    }
  }, []);

  // Listen to cross-tab localStorage updates
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "tucpb_completed_modules" && e.newValue) {
        try {
          setCompletedModules(JSON.parse(e.newValue));
        } catch {}
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Toggle module completion
  const toggleModuleCompletion = (moduleId: string) => {
    setCompletedModules((prev) => {
      const isCompleted = prev.includes(moduleId);
      const updated = isCompleted
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId];
      try {
        localStorage.setItem("tucpb_completed_modules", JSON.stringify(updated));
      } catch (err) {
        console.error("Erro ao salvar progresso no localStorage", err);
      }
      return updated;
    });
  };

  const isModuleCompleted = (moduleId: string) => completedModules.includes(moduleId);

  // Stats calculation
  const totalModulesCount = lessons.length;
  const completedModulesCount = lessons.filter((l) => completedModules.includes(l.id)).length;
  const progressPercent =
    totalModulesCount > 0 ? Math.round((completedModulesCount / totalModulesCount) * 100) : 0;

  // Filter lessons
  const filteredLessons = lessons.filter((lesson) => {
    // Search filter
    const matchesSearch =
      lesson.title.toLowerCase().includes(searchModuleQuery.toLowerCase()) ||
      lesson.description.toLowerCase().includes(searchModuleQuery.toLowerCase()) ||
      lesson.category.toLowerCase().includes(searchModuleQuery.toLowerCase()) ||
      (lesson.tags && lesson.tags.some((t) => t.toLowerCase().includes(searchModuleQuery.toLowerCase())));

    if (!matchesSearch) return false;

    // Trail filter
    if (trailFilter === "Trilha 1" && lesson.category !== "TRILHA I: A RAIZ") return false;
    if (trailFilter === "Trilha 2" && lesson.category !== "TRILHA II: O TRONCO") return false;
    if (trailFilter === "Trilha 3" && lesson.category !== "TRILHA III: A COPA") return false;
    if (trailFilter === "Outros" && ["TRILHA I: A RAIZ", "TRILHA II: O TRONCO", "TRILHA III: A COPA"].includes(lesson.category)) {
      return false;
    }

    // Status filter
    const completed = isModuleCompleted(lesson.id);
    if (statusFilter === "concluidos" && !completed) return false;
    if (statusFilter === "pendentes" && completed) return false;

    return true;
  });

  // Filter articles
  const filteredArticles = articles.filter(
    (art) =>
      art.title.toLowerCase().includes(searchArticleQuery.toLowerCase()) ||
      art.snippet.toLowerCase().includes(searchArticleQuery.toLowerCase()) ||
      art.category.toLowerCase().includes(searchArticleQuery.toLowerCase())
  );

  return (
    <div className="animate-fade-in space-y-10 pb-20" id="portal-page">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-marrom-terra to-marrom-tronco py-12 text-center text-pena-branca px-4 sm:px-6 lg:px-8 shadow-inner relative overflow-hidden">
        <div className="relative z-10 mx-auto max-w-4xl space-y-3">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-pena-branca/10 text-areia-escura mb-1 ring-4 ring-white/10">
            <GraduationCap className="h-7 w-7 text-dourado" />
          </div>
          <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-pena-branca">
            Portal de Estudos TUCPB
          </h1>
          <p className="mx-auto max-w-2xl text-xs sm:text-sm text-areia-escura font-light leading-relaxed">
            Formação doutrinária, aulas em vídeo, apostilas e reflexões do Templo Umbandista Caboclo Pena Branca. 
            Acompanhe sua jornada de aprendizado e marque os módulos já concluídos.
          </p>

          {/* Navigation Pill Switcher */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1 rounded-xl bg-black/20 border border-white/10 backdrop-blur-sm">
              <button
                onClick={() => setActiveTab("modulos")}
                className={`flex items-center gap-2 px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                  activeTab === "modulos"
                    ? "bg-verde-mata text-white shadow-md ring-1 ring-white/20"
                    : "text-areia-escura hover:text-white"
                }`}
              >
                <PlayCircle className="h-4 w-4" />
                Módulos de Formação ({totalModulesCount})
              </button>
              <button
                onClick={() => setActiveTab("artigos")}
                className={`flex items-center gap-2 px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                  activeTab === "artigos"
                    ? "bg-verde-mata text-white shadow-md ring-1 ring-white/20"
                    : "text-areia-escura hover:text-white"
                }`}
              >
                <BookOpen className="h-4 w-4" />
                Artigos & Reflexões ({articles.length})
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* TAB: MÓDULOS DE FORMAÇÃO (COM MARCAÇÃO DE CONCLUÍDO) */}
      {/* ======================================================== */}
      {activeTab === "modulos" && (
        <div className="space-y-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Progress Card */}
          <div className="bg-white rounded-2xl border border-areia-escura p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <div className="flex items-center gap-2 text-verde-mata font-bold text-sm uppercase tracking-wider">
                  <ListChecks className="h-5 w-5 text-verde-folha" />
                  <span>Seu Progresso nos Estudos</span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-gray-900">
                  {completedModulesCount} de {totalModulesCount} módulos concluídos ({progressPercent}%)
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Clique no botão <strong>&quot;Marcar como Concluído&quot;</strong> em cada módulo para registrar seu progresso. 
                  O status fica salvo com segurança no navegador do seu dispositivo.
                </p>
              </div>

              {/* Progress visual pill */}
              <div className="w-full md:w-80 space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold text-gray-700">
                  <span>Conclusão do Conteúdo</span>
                  <span className="text-verde-folha font-mono">{progressPercent}%</span>
                </div>
                <div className="w-full h-3.5 bg-gray-100 rounded-full overflow-hidden border border-gray-200">
                  <div
                    className="h-full bg-gradient-to-r from-verde-mata to-verde-folha transition-all duration-700 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-[11px] text-gray-500 font-medium">
                  <span className="text-verde-mata font-bold">{completedModulesCount} assistidos</span>
                  <span>{totalModulesCount - completedModulesCount} restantes</span>
                </div>
              </div>
            </div>

            {progressPercent === 100 && totalModulesCount > 0 && (
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 text-green-800 text-xs sm:text-sm font-medium">
                <Sparkles className="h-5 w-5 text-amber-500 shrink-0" />
                <span>
                  <strong>Parabéns!</strong> Você concluiu todos os módulos de estudos disponíveis. Axé para sua caminhada mediúnica!
                </span>
              </div>
            )}
          </div>

          {/* Filters & Search Toolbar */}
          <div className="bg-white rounded-2xl border border-areia-escura p-4 sm:p-6 shadow-sm space-y-4">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              {/* Status Filter buttons */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-1 flex items-center gap-1">
                  <Filter className="h-3.5 w-3.5" /> Status:
                </span>
                <button
                  onClick={() => setStatusFilter("todos")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition shadow-sm ${
                    statusFilter === "todos"
                      ? "bg-marrom-terra text-white"
                      : "bg-areia-suave text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Todos ({totalModulesCount})
                </button>
                <button
                  onClick={() => setStatusFilter("pendentes")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition shadow-sm ${
                    statusFilter === "pendentes"
                      ? "bg-amber-700 text-white"
                      : "bg-areia-suave text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Pendentes ({totalModulesCount - completedModulesCount})
                </button>
                <button
                  onClick={() => setStatusFilter("concluidos")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition shadow-sm ${
                    statusFilter === "concluidos"
                      ? "bg-verde-mata text-white"
                      : "bg-areia-suave text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Concluídos ({completedModulesCount})
                </button>
              </div>

              {/* Search bar */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar módulos, temas..."
                  value={searchModuleQuery}
                  onChange={(e) => setSearchModuleQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-areia-suave border border-areia-escura rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-verde-folha text-gray-900"
                />
              </div>
            </div>

            {/* Trail Filter buttons */}
            <div className="pt-2 border-t border-areia-escura flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-1">
                Trilha:
              </span>
              {["Todas as Trilhas", "Trilha 1", "Trilha 2", "Trilha 3", "Outros"].map((trail) => {
                let activeColor = "bg-verde-mata text-white";
                if (trail === "Trilha 1") activeColor = "bg-marrom-terra text-white";
                if (trail === "Trilha 2") activeColor = "bg-verde-mata text-white";
                if (trail === "Trilha 3") activeColor = "bg-teal-700 text-white";
                if (trail === "Outros") activeColor = "bg-gray-800 text-white";

                return (
                  <button
                    key={trail}
                    onClick={() => setTrailFilter(trail)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold border transition ${
                      trailFilter === trail
                        ? `${activeColor} border-transparent shadow-sm`
                        : "bg-white text-gray-600 border-areia-escura hover:bg-gray-50"
                    }`}
                  >
                    {trail}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Lessons Grid */}
          {filteredLessons.length === 0 ? (
            <div className="bg-white rounded-2xl border border-areia-escura p-12 text-center text-gray-500">
              <p className="text-base font-semibold">Nenhum módulo encontrado para os filtros selecionados.</p>
              <button
                onClick={() => {
                  setSearchModuleQuery("");
                  setStatusFilter("todos");
                  setTrailFilter("Todas as Trilhas");
                }}
                className="mt-4 px-4 py-2 bg-verde-mata text-white text-xs font-bold rounded-lg hover:bg-verde-folha"
              >
                Limpar Filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLessons.map((lesson) => {
                const completed = isModuleCompleted(lesson.id);

                return (
                  <div
                    key={lesson.id}
                    className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden shadow-sm flex flex-col group ${
                      completed
                        ? "border-green-300 ring-1 ring-green-200/60 bg-gradient-to-b from-green-50/20 to-white"
                        : "border-areia-escura hover:shadow-md hover:-translate-y-0.5"
                    }`}
                  >
                    {/* Media thumbnail */}
                    <div
                      className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-950 flex items-center justify-center overflow-hidden cursor-pointer"
                      onClick={() => setSelectedLesson(lesson)}
                    >
                      {lesson.imageUrl && (
                        <img
                          src={lesson.imageUrl}
                          alt={lesson.title}
                          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                      
                      {lesson.videoUrl ? (
                        <PlayCircle className="h-14 w-14 text-white/70 group-hover:text-white group-hover:scale-110 transition-all z-10 drop-shadow-md" />
                      ) : lesson.audioUrl ? (
                        <Headphones className="h-14 w-14 text-white/70 group-hover:text-white group-hover:scale-110 transition-all z-10 drop-shadow-md" />
                      ) : (
                        <BookOpen className="h-14 w-14 text-white/70 group-hover:text-white group-hover:scale-110 transition-all z-10 drop-shadow-md" />
                      )}

                      {/* Duration */}
                      <span className="absolute bottom-2.5 left-2.5 bg-black/70 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded font-mono z-10">
                        {lesson.duration}
                      </span>

                      {/* Status indicator on thumbnail */}
                      <div className="absolute top-2.5 right-2.5 z-10">
                        {completed ? (
                          <span className="inline-flex items-center gap-1 bg-green-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md">
                            <Check className="h-3 w-3 stroke-[3]" /> Concluído
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white/90 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                            Pendente
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div className="space-y-2">
                        {/* Tags and Category */}
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="text-[10px] font-bold px-2 py-0.5 bg-areia-suave text-marrom-terra rounded-md uppercase tracking-wide">
                            {lesson.category}
                          </span>
                          {lesson.tags?.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-semibold px-2 py-0.5 bg-gray-100 text-gray-600 rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Title */}
                        <h3 className="font-serif font-bold text-base sm:text-lg text-gray-900 leading-snug group-hover:text-verde-mata transition-colors">
                          {lesson.title}
                        </h3>

                        {/* Description Preview */}
                        <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                          {lesson.description.replace(/^##.*?\n/, "").trim()}
                        </p>
                      </div>

                      {/* Action buttons */}
                      <div className="pt-3 border-t border-areia-escura/70 flex flex-col gap-2">
                        {/* Primary: Open Module */}
                        <button
                          onClick={() => setSelectedLesson(lesson)}
                          className="w-full py-2 bg-verde-mata hover:bg-verde-folha text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                        >
                          <PlayCircle className="h-4 w-4" />
                          Assistir & Acessar Conteúdo
                        </button>

                        {/* Toggle completion button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleModuleCompletion(lesson.id);
                          }}
                          className={`w-full py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 border ${
                            completed
                              ? "bg-green-100 text-green-800 border-green-300 hover:bg-red-50 hover:text-red-700 hover:border-red-300 group/btn"
                              : "bg-white text-gray-700 border-gray-300 hover:bg-green-50 hover:text-green-800 hover:border-green-400"
                          }`}
                          title={completed ? "Clique para marcar como pendente" : "Marcar como concluído"}
                        >
                          {completed ? (
                            <>
                              <CheckCircle2 className="h-4 w-4 text-green-700 group-hover/btn:hidden" />
                              <span className="group-hover/btn:hidden">Módulo Concluído ✓</span>
                              <span className="hidden group-hover/btn:inline">Desmarcar Conclusão</span>
                            </>
                          ) : (
                            <>
                              <Check className="h-4 w-4 text-gray-500" />
                              <span>Marcar como Concluído</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB: ARTIGOS & REFLEXÕES (BLOG) */}
      {/* ======================================================== */}
      {activeTab === "artigos" && (
        <div className="space-y-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main navigation toolbar & search */}
          <div className="bg-white rounded-2xl border border-areia-escura p-4 sm:p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            <h2 className="font-serif font-bold text-marrom-terra text-lg flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Publicações & Textos de Doutrina
            </h2>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar reflexões..."
                value={searchArticleQuery}
                onChange={(e) => setSearchArticleQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-areia-suave border border-areia-escura rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-verde-folha text-gray-900"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="blog-articles-grid">
            {filteredArticles.length === 0 ? (
              <p className="col-span-2 text-center py-16 text-gray-500">
                Nenhuma publicação encontrada com esse termo.
              </p>
            ) : (
              filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-2xl border border-areia-escura overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group"
                >
                  {article.imageUrl && (
                    <div className="h-48 w-full overflow-hidden bg-gray-100">
                      <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6 sm:p-8 flex-1 space-y-4">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex gap-2 flex-wrap">
                        <span className="text-xs font-semibold text-verde-folha bg-verde-folha/10 px-2.5 py-1 rounded-full">
                          {article.category}
                        </span>
                        {article.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded-full uppercase tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs text-gray-400 font-mono">{article.date}</span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-bold text-marrom-terra leading-tight">
                      {article.title}
                    </h3>

                    <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                      {article.snippet}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-gray-500 font-mono border-t border-areia-escura pt-4">
                      <span>👤 {article.author}</span>
                      <span>⏱️ {article.readTime}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="w-full bg-areia-suave hover:bg-verde-mata hover:text-pena-branca py-3 border-t border-areia-escura text-xs sm:text-sm font-semibold text-marrom-terra text-center transition-colors flex items-center justify-center gap-1.5"
                  >
                    Ler Texto Completo
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </article>
              ))
            )}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL: LESSON / MODULE VIEWER */}
      {/* ======================================================== */}
      {selectedLesson && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in-quick"
          onClick={() => setSelectedLesson(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
            style={{ maxHeight: "90vh" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-areia-escura bg-areia-suave shrink-0">
              <div className="flex items-center gap-3 truncate pr-4">
                <span className="text-xs font-bold uppercase tracking-wider bg-verde-mata text-white px-2.5 py-1 rounded">
                  {selectedLesson.category}
                </span>
                <h3 className="font-bold text-sm sm:text-base text-gray-900 truncate">
                  {selectedLesson.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedLesson(null)}
                className="p-2 rounded-full hover:bg-gray-200 text-gray-500 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable body */}
            <div className="overflow-y-auto flex-1 bg-white">
              {/* Video Player */}
              {(selectedLesson.videoUrl || selectedLesson.imageUrl) && (
                <div className="bg-black aspect-video w-full flex items-center justify-center overflow-hidden">
                  {selectedLesson.videoUrl ? (
                    <iframe
                      src={getYouTubeEmbedUrl(selectedLesson.videoUrl)}
                      title={selectedLesson.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    ></iframe>
                  ) : (
                    <img
                      src={selectedLesson.imageUrl}
                      alt={selectedLesson.title}
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
              )}

              <div className="p-6 sm:p-8 space-y-6">
                {/* Completion Status Bar & Actions */}
                <div className="bg-areia-suave/60 rounded-xl p-4 border border-areia-escura flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {isModuleCompleted(selectedLesson.id) ? (
                      <div className="flex items-center gap-2 text-green-700 font-bold text-sm">
                        <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                        <span>Módulo Concluído por Você!</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-gray-700 font-semibold text-sm">
                        <Clock className="h-5 w-5 text-amber-600 shrink-0" />
                        <span>Módulo ainda não marcado como concluído</span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => toggleModuleCompletion(selectedLesson.id)}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 shadow-sm ${
                      isModuleCompleted(selectedLesson.id)
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : "bg-white border-2 border-verde-mata text-verde-mata hover:bg-verde-mata hover:text-white"
                    }`}
                  >
                    {isModuleCompleted(selectedLesson.id) ? (
                      <>
                        <Check className="h-4 w-4 stroke-[3]" />
                        <span>Concluído ✓ (Clique para desmarcar)</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="h-4 w-4" />
                        <span>Marcar este Módulo como Concluído</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Audio (if any) */}
                {selectedLesson.audioUrl && (
                  <div className="bg-areia-suave/50 rounded-xl p-4 border border-areia-escura">
                    <h4 className="text-sm font-bold text-marrom-terra mb-3 flex items-center gap-2">
                      <Headphones className="h-4 w-4" />
                      Áudio da Aula
                    </h4>
                    {selectedLesson.audioUrl.includes("drive.google.com") ? (
                      <iframe
                        src={selectedLesson.audioUrl}
                        className="w-full h-[120px] rounded border-none outline-none"
                        allow="autoplay"
                      />
                    ) : (
                      <audio
                        key={selectedLesson.id}
                        controls
                        className="w-full h-10 outline-none"
                        src={selectedLesson.audioUrl}
                      >
                        Seu navegador não suporta o elemento de áudio.
                      </audio>
                    )}
                  </div>
                )}

                {/* PDF Download Button (if any) */}
                {selectedLesson.pdfUrl && (
                  <div>
                    <a
                      href={selectedLesson.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-white border-2 border-marrom-terra text-marrom-terra font-bold rounded-xl hover:bg-marrom-terra hover:text-white transition-colors group w-full sm:w-auto shadow-sm"
                    >
                      <FileText className="h-5 w-5" />
                      <span>Baixar Material de Apoio (PDF)</span>
                      <Download className="h-4 w-4 ml-auto sm:ml-2 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                )}

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  <span className="bg-verde-folha/10 text-verde-folha px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-verde-folha/20">
                    {selectedLesson.category}
                  </span>
                  <span className="bg-marrom-terra/10 text-marrom-terra px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-marrom-terra/20">
                    {selectedLesson.level}
                  </span>
                  {selectedLesson.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="bg-yellow-50 text-marrom-terra border border-dourado/50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Lesson Markdown Content */}
                <div className="text-sm sm:text-base text-gray-700 leading-relaxed font-serif markdown-body prose prose-sm sm:prose-base max-w-none prose-table:w-full prose-td:border prose-th:border prose-td:p-2 prose-th:p-2 prose-th:bg-areia-suave">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      img: ({ src, alt, title, ...props }) => (
                        <img
                          src={src}
                          alt={alt}
                          title={title}
                          {...props}
                          className="w-full max-w-2xl mx-auto rounded-lg shadow-md my-8"
                        />
                      ),
                    }}
                  >
                    {selectedLesson.description.replace(/\\n/g, "\n")}
                  </ReactMarkdown>
                </div>

                {/* Metadata footer */}
                <div className="pt-4 border-t border-areia-escura flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-500 font-medium">
                  <span>👤 Instrutor: {selectedLesson.instructor}</span>
                  <span>⏱️ Duração: {selectedLesson.duration}</span>
                  <span>📅 Data: {selectedLesson.date}</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-areia-escura bg-gray-50 flex items-center justify-between shrink-0">
              <button
                onClick={() => toggleModuleCompletion(selectedLesson.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                  isModuleCompleted(selectedLesson.id)
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-verde-mata text-white hover:bg-verde-folha"
                }`}
              >
                {isModuleCompleted(selectedLesson.id) ? (
                  <>
                    <Check className="h-4 w-4 stroke-[3]" />
                    <span>Concluído ✓</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    <span>Marcar como Concluído</span>
                  </>
                )}
              </button>

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

      {/* ======================================================== */}
      {/* MODAL: ARTICLE VIEWER */}
      {/* ======================================================== */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in-quick">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-10 border border-areia-escura">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <article className="space-y-6">
              {selectedArticle.videoUrl ? (
                selectedArticle.videoUrl.includes("youtube.com") ||
                selectedArticle.videoUrl.includes("youtu.be") ? (
                  <div className="w-full aspect-video rounded-xl overflow-hidden mb-6 bg-black">
                    <iframe
                      src={getYouTubeEmbedUrl(selectedArticle.videoUrl)}
                      title="Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    ></iframe>
                  </div>
                ) : (
                  <div className="w-full aspect-video rounded-xl overflow-hidden mb-6 bg-black">
                    <video
                      src={selectedArticle.videoUrl}
                      controls
                      className="w-full h-full object-contain"
                    />
                  </div>
                )
              ) : selectedArticle.imageUrl ? (
                <div className="w-full h-64 sm:h-80 rounded-xl overflow-hidden mb-6 bg-gray-100">
                  <img
                    src={selectedArticle.imageUrl}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : null}

              <div className="space-y-4 border-b border-areia-escura pb-6">
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs font-semibold text-verde-folha bg-verde-folha/10 px-2.5 py-1 rounded-full">
                    {selectedArticle.category}
                  </span>
                  {selectedArticle.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded-full uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-marrom-terra leading-tight">
                  {selectedArticle.title}
                </h2>
                <div className="flex items-center gap-4 text-xs text-gray-500 font-mono">
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" /> {selectedArticle.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {selectedArticle.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" /> {selectedArticle.readTime}
                  </span>
                </div>
              </div>

              <div className="prose prose-sm sm:prose-base max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap font-serif">
                {selectedArticle.content}
              </div>

              <div className="pt-6 border-t border-areia-escura flex justify-end">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2.5 bg-marrom-terra text-pena-branca text-sm font-semibold rounded-lg hover:bg-marrom-tronco"
                >
                  Fechar Texto
                </button>
              </div>
            </article>
          </div>
        </div>
      )}
    </div>
  );
}
