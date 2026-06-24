/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Search, GraduationCap, BookOpen, TreePine, PlayCircle, Clock, Tag, X, User, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import { initialArticles, initialLessons, initialHerbs } from "../data";
import { BlogArticle, Lesson, Herb } from "../types";

export default function Portal() {
  const [activeTab, setActiveTab] = useState<"blog" | "aulas" | "ervas">("blog");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Selection states for viewing detailed modals
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [selectedHerb, setSelectedHerb] = useState<Herb | null>(null);

  // Filters
  const [herbFilter, setHerbFilter] = useState<string>("Todas");

  // Filtering data based on tab & query
  const filteredArticles = initialArticles.filter(art => 
    art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    art.snippet.toLowerCase().includes(searchQuery.toLowerCase()) ||
    art.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredLessons = initialLessons.filter(les => 
    les.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    les.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    les.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredHerbs = initialHerbs.filter(herb => {
    const matchesSearch = herb.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      herb.orixa.toLowerCase().includes(searchQuery.toLowerCase()) ||
      herb.ritualUse.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = herbFilter === "Todas" || herb.classification === herbFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="animate-fade-in space-y-12 pb-16" id="portal-page">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-marrom-terra to-marrom-tronco py-12 text-center text-pena-branca px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="mx-auto max-w-4xl space-y-3">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-pena-branca/10 text-areia-escura mb-1">
            <GraduationCap className="h-6 w-6" />
          </div>
          <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Estudos & Conhecimento
          </h1>
          <p className="mx-auto max-w-2xl text-xs sm:text-sm text-areia-escura font-light leading-relaxed">
            Navegue por nossas aulas virtuais, catálogo de ervas rituais e artigos doutrinários para fortalecer o seu desenvolvimento espiritual na Umbanda.
          </p>
        </div>
      </section>

      {/* Main navigation toolbar & search */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-areia-escura p-4 sm:p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Tab switches */}
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0" id="portal-sub-tabs">
            <button
              onClick={() => { setActiveTab("blog"); setSearchQuery(""); }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                activeTab === "blog"
                  ? "bg-verde-mata text-pena-branca shadow-sm"
                  : "bg-areia-suave text-gray-600 hover:bg-areia-escura hover:text-gray-900"
              }`}
            >
              <BookOpen className="h-4 w-4" />
              Artigos do Blog
            </button>
            <button
              onClick={() => { setActiveTab("aulas"); setSearchQuery(""); }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                activeTab === "aulas"
                  ? "bg-verde-mata text-pena-branca shadow-sm"
                  : "bg-areia-suave text-gray-600 hover:bg-areia-escura hover:text-gray-900"
              }`}
            >
              <PlayCircle className="h-4 w-4" />
              Aulas & Vídeos
            </button>
            <button
              onClick={() => { setActiveTab("ervas"); setSearchQuery(""); }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                activeTab === "ervas"
                  ? "bg-verde-mata text-pena-branca shadow-sm"
                  : "bg-areia-suave text-gray-600 hover:bg-areia-escura hover:text-gray-900"
              }`}
            >
              <TreePine className="h-4 w-4" />
              Catálogo de Ervas
            </button>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder={
                activeTab === "blog" ? "Buscar artigos..." :
                activeTab === "aulas" ? "Buscar aulas..." : "Buscar ervas..."
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-areia-suave border border-areia-escura rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-verde-folha text-gray-900"
              id="portal-search-input"
            />
          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* TAB 1: Blog Articles */}
        {activeTab === "blog" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="blog-articles-grid">
            {filteredArticles.length === 0 ? (
              <p className="col-span-2 text-center py-16 text-gray-500">Nenhum artigo encontrado com esse termo.</p>
            ) : (
              filteredArticles.map((article) => (
                <article 
                  key={article.id}
                  className="bg-white rounded-2xl border border-areia-escura overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
                >
                  <div className="p-6 sm:p-8 flex-1 space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-verde-folha bg-verde-folha/10 px-2.5 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-400 font-mono">
                        {article.date}
                      </span>
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
                    id={`art-read-btn-${article.id}`}
                  >
                    Ler Artigo Completo
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </article>
              ))
            )}
          </div>
        )}

        {/* TAB 2: Lessons & Video Classes */}
        {activeTab === "aulas" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="lessons-grid">
            {filteredLessons.length === 0 ? (
              <p className="col-span-2 text-center py-16 text-gray-500">Nenhuma aula encontrada com esse termo.</p>
            ) : (
              filteredLessons.map((lesson) => (
                <div 
                  key={lesson.id}
                  className="bg-white rounded-2xl border border-areia-escura overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
                >
                  {/* Mock Video Thumbnail */}
                  <div className="relative bg-gradient-to-br from-marrom-terra to-marrom-tronco aspect-video flex items-center justify-center p-6 text-pena-branca group overflow-hidden">
                    {/* Decorative aura circles */}
                    <div className="absolute w-36 h-36 bg-verde-folha/20 rounded-full blur-2xl"></div>
                    <PlayCircle className="h-16 w-16 text-areia-escura group-hover:scale-110 group-hover:text-pena-branca transition-all duration-300 relative z-10 drop-shadow-lg" />
                    
                    <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider">
                      {lesson.duration}
                    </div>
                    <div className="absolute top-3 right-3 bg-verde-folha/90 backdrop-blur px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                      {lesson.level}
                    </div>
                  </div>

                  <div className="p-6 flex-1 space-y-3">
                    <span className="text-[10px] font-mono font-bold uppercase text-marrom-claro tracking-wider">
                      Módulo: {lesson.category}
                    </span>
                    
                    <h3 className="font-serif text-base sm:text-lg font-bold text-gray-900 leading-snug">
                      {lesson.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed line-clamp-2">
                      {lesson.description}
                    </p>

                    <div className="flex justify-between text-xs text-gray-400 font-mono border-t border-areia-escura pt-3 mt-4">
                      <span>Instrutor: {lesson.instructor}</span>
                      <span>Publicado em: {lesson.date}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedLesson(lesson)}
                    className="w-full bg-verde-mata hover:bg-verde-folha text-pena-branca py-3 border-t border-areia-escura text-xs sm:text-sm font-semibold text-center transition-colors flex items-center justify-center gap-1.5"
                    id={`les-view-btn-${lesson.id}`}
                  >
                    Assistir e Estudar Aula
                    <PlayCircle className="h-4 w-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        )}

        {/* TAB 3: Herbs Catalog */}
        {activeTab === "ervas" && (
          <div className="space-y-8 animate-fade-in-quick">
            
            {/* Filter classification Row */}
            <div className="flex flex-wrap items-center gap-2 border-b border-areia-escura pb-4">
              <span className="text-xs font-bold text-gray-500 uppercase mr-2">Classificação Fitoenergética:</span>
              {["Todas", "Fria", "Morna", "Quente"].map((cls) => (
                <button
                  key={cls}
                  onClick={() => setHerbFilter(cls)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                    herbFilter === cls
                      ? "bg-verde-folha text-pena-branca shadow-sm"
                      : "bg-white border border-areia-escura text-gray-600 hover:bg-gray-50"
                  }`}
                  id={`herb-filter-btn-${cls}`}
                >
                  Ervas {cls === "Todas" ? "Todas" : cls === "Fria" ? "Frias (Harmonização)" : cls === "Morna" ? "Mornas (Equilíbrio)" : "Quentes (Limpeza)"}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="herbs-grid">
              {filteredHerbs.length === 0 ? (
                <p className="col-span-3 text-center py-16 text-gray-500">Nenhuma erva encontrada com esses filtros.</p>
              ) : (
                filteredHerbs.map((herb) => (
                  <div 
                    key={herb.id}
                    className="bg-white rounded-xl border border-areia-escura p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <h3 className="font-serif text-lg font-bold text-gray-900">{herb.name}</h3>
                          {herb.scientificName && (
                            <p className="text-[11px] text-gray-400 italic font-mono">{herb.scientificName}</p>
                          )}
                        </div>
                        <span className={`px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase font-mono tracking-widest ${
                          herb.classification === "Fria" ? "bg-blue-100 text-blue-800" :
                          herb.classification === "Morna" ? "bg-emerald-100 text-emerald-800" :
                          "bg-rose-100 text-rose-800"
                        }`}>
                          {herb.classification}
                        </span>
                      </div>

                      <div className="space-y-1.5 text-xs text-gray-600 leading-relaxed">
                        <p><strong>🌟 Orixá Reitor:</strong> {herb.orixa}</p>
                        <p className="line-clamp-2"><strong>🌿 Uso Litúrgico:</strong> {herb.ritualUse}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedHerb(herb)}
                      className="w-full mt-4 bg-areia-suave hover:bg-marrom-terra hover:text-pena-branca py-2 rounded-lg text-xs font-semibold text-marrom-terra text-center transition-colors"
                      id={`herb-details-btn-${herb.id}`}
                    >
                      Ver Modo de Preparação & Detalhes
                    </button>
                  </div>
                ))
              )}
            </div>

          </div>
        )}

      </section>

      {/* MODAL 1: Blog Article Viewer */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in-quick">
          <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-10 border border-areia-escura">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
              id="close-article-modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-2 border-b border-areia-escura pb-4">
                <span className="text-xs font-semibold text-verde-folha bg-verde-folha/10 px-2.5 py-1 rounded-full">
                  {selectedArticle.category}
                </span>
                <span className="text-xs text-gray-400 font-mono">
                  {selectedArticle.date}
                </span>
                <span className="text-xs text-gray-400 font-mono">
                  ⏱️ {selectedArticle.readTime}
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-marrom-terra leading-tight">
                {selectedArticle.title}
              </h2>

              <p className="text-xs sm:text-sm font-semibold text-gray-500 italic">
                Artigo escrito por: {selectedArticle.author}
              </p>

              <div className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line space-y-4 font-light">
                {selectedArticle.content}
              </div>

              <div className="border-t border-areia-escura pt-6 flex justify-end">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2 bg-marrom-terra text-pena-branca text-xs sm:text-sm font-semibold rounded-lg hover:bg-marrom-tronco"
                >
                  Concluir Leitura
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: Lesson Video Player Viewer */}
      {selectedLesson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in-quick">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-areia-escura overflow-hidden">
            
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-verde-mata text-pena-branca">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-areia-escura" />
                <span className="font-serif text-sm font-bold tracking-wider">Módulo de Desenvolvimento TUCPB</span>
              </div>
              <button
                onClick={() => setSelectedLesson(null)}
                className="p-1 rounded-full hover:bg-white/10 text-pena-branca"
                id="close-lesson-modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              
              {/* YouTube Simulated video container inside Iframe constraint */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black flex items-center justify-center border border-areia-escura">
                {/* Embed video */}
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={selectedLesson.videoUrl}
                  title={selectedLesson.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Lesson details */}
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="px-2 py-0.5 rounded bg-marrom-terra text-pena-branca text-[10px] font-mono">
                    {selectedLesson.category}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                    Nível: {selectedLesson.level}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    ⏱️ Duração: {selectedLesson.duration}
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                  {selectedLesson.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {selectedLesson.description}
                </p>

                <div className="p-4 bg-areia-suave border border-areia-escura rounded-xl flex items-center gap-3 mt-4 text-xs">
                  <div className="h-8 w-8 rounded-full bg-verde-folha/15 text-verde-folha flex items-center justify-center font-bold">
                    {selectedLesson.instructor.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Palestrante: {selectedLesson.instructor}</p>
                    <p className="text-gray-500 font-mono">Apostila e vídeo disponibilizados em {selectedLesson.date}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-areia-escura pt-4 flex justify-end gap-2">
                <button
                  onClick={() => setSelectedLesson(null)}
                  className="px-4 py-2 border border-areia-escura text-gray-600 hover:bg-gray-50 text-xs sm:text-sm font-semibold rounded-lg"
                >
                  Fechar Vídeo
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: Herb Preparation details Viewer */}
      {selectedHerb && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in-quick">
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-10 border border-areia-escura">
            <button
              onClick={() => setSelectedHerb(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
              id="close-herb-modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-6">
              
              <div className="border-b border-areia-escura pb-4">
                <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-widest ${
                  selectedHerb.classification === "Fria" ? "bg-blue-100 text-blue-800" :
                  selectedHerb.classification === "Morna" ? "bg-emerald-100 text-emerald-800" :
                  "bg-rose-100 text-rose-800"
                }`}>
                  Fitoenergia: Erva {selectedHerb.classification}
                </span>
                
                <h2 className="font-serif text-2xl font-bold text-marrom-terra mt-2 leading-tight">
                  {selectedHerb.name}
                </h2>
                {selectedHerb.scientificName && (
                  <p className="text-xs text-gray-400 font-mono italic">Nomenclatura Científica: {selectedHerb.scientificName}</p>
                )}
              </div>

              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <div>
                  <h4 className="font-bold text-gray-900 text-xs uppercase tracking-wider text-verde-folha">Orixá de Vibração:</h4>
                  <p className="text-sm">{selectedHerb.orixa}</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 text-xs uppercase tracking-wider text-verde-folha">Uso e Imantação Litúrgica:</h4>
                  <p className="text-sm">{selectedHerb.ritualUse}</p>
                </div>

                {selectedHerb.medicinalUse && (
                  <div>
                    <h4 className="font-bold text-gray-900 text-xs uppercase tracking-wider text-verde-folha">Aplicação Medicinal Tradicional:</h4>
                    <p className="text-sm">{selectedHerb.medicinalUse}</p>
                  </div>
                )}

                <div className="p-4 bg-verde-folha/5 border border-verde-folha/25 rounded-xl space-y-2">
                  <h4 className="font-bold text-verde-mata text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4" />
                    Como preparar o Banho Ritualístico:
                  </h4>
                  <p className="text-xs text-gray-700 leading-relaxed whitespace-pre-line">
                    {selectedHerb.preparation}
                  </p>
                </div>
              </div>

              <div className="p-3 bg-amber-50 border border-amber-200 text-amber-800 rounded-lg text-xs leading-relaxed">
                ⚠️ <strong>Aviso Doutrinário:</strong> Nunca ferva ervas frias ou mornas de cabeça (amaci). Ervas quentes de descarrego pesado NUNCA devem tocar a sua cabeça (coroa) — banhe-se sempre dos ombros para baixo.
              </div>

              <div className="border-t border-areia-escura pt-4 flex justify-end">
                <button
                  onClick={() => setSelectedHerb(null)}
                  className="px-5 py-2 bg-verde-mata text-pena-branca text-xs sm:text-sm font-semibold rounded-lg hover:bg-verde-folha"
                >
                  Entendi, Concluir
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
