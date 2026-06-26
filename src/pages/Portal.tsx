import { useState, useEffect } from "react";
import { Search, BookOpen, ArrowRight, User, Clock, X } from "lucide-react";
import { BlogArticle } from "../types";
import { initialArticles } from "../data";

export default function Portal() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const [articles, setArticles] = useState<BlogArticle[]>([]);

  useEffect(() => {
    const storedArticles = localStorage.getItem("tucpb_articles");
    if (storedArticles) {
      setArticles(JSON.parse(storedArticles));
    } else {
      setArticles(initialArticles);
      localStorage.setItem("tucpb_articles", JSON.stringify(initialArticles));
    }
  }, []);

  const filteredArticles = articles.filter(art => 
    art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    art.snippet.toLowerCase().includes(searchQuery.toLowerCase()) ||
    art.category.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div className="animate-fade-in space-y-12 pb-16" id="portal-page">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-marrom-terra to-marrom-tronco py-12 text-center text-pena-branca px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="mx-auto max-w-4xl space-y-3">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-pena-branca/10 text-areia-escura mb-1">
            <BookOpen className="h-6 w-6" />
          </div>
          <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Blog Público da Comunidade
          </h1>
          <p className="mx-auto max-w-2xl text-xs sm:text-sm text-areia-escura font-light leading-relaxed">
            Textos abertos, reflexões e estudos para inspirar seu caminhar. Um espaço livre e acessível a todos que buscam o sentido da Umbanda.
          </p>
        </div>
      </section>

      {/* Main navigation toolbar & search */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-areia-escura p-4 sm:p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="font-serif font-bold text-marrom-terra text-lg flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Últimas Publicações
          </h2>
          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar reflexões..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-areia-suave border border-areia-escura rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-verde-folha text-gray-900"
            />
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="blog-articles-grid">
          {filteredArticles.length === 0 ? (
            <p className="col-span-2 text-center py-16 text-gray-500">Nenhuma publicação encontrada com esse termo.</p>
          ) : (
            filteredArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white rounded-2xl border border-areia-escura overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group"
              >
                {article.imageUrl && (
                  <div className="h-48 w-full overflow-hidden bg-gray-100">
                    <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-6 sm:p-8 flex-1 space-y-4">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs font-semibold text-verde-folha bg-verde-folha/10 px-2.5 py-1 rounded-full">
                        {article.category}
                      </span>
                      {article.tags?.map(tag => (
                        <span key={tag} className="text-[10px] font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded-full uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
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
                >
                  Ler Texto Completo
                  <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            ))
          )}
        </div>
      </section>

      {/* Modal: Article Viewer */}
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
                selectedArticle.videoUrl.includes("youtube.com") || selectedArticle.videoUrl.includes("youtu.be") ? (
                  <div className="w-full aspect-video rounded-xl overflow-hidden mb-6 bg-black">
                    <iframe 
                      src={selectedArticle.videoUrl.replace("watch?v=", "embed/").replace("youtu.be/", "youtube.com/embed/")}
                      title="Video" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen 
                      className="w-full h-full border-0"
                    ></iframe>
                  </div>
                ) : (
                  <div className="w-full aspect-video rounded-xl overflow-hidden mb-6 bg-black">
                    <video src={selectedArticle.videoUrl} controls className="w-full h-full object-contain" />
                  </div>
                )
              ) : selectedArticle.imageUrl ? (
                <div className="w-full h-64 sm:h-80 rounded-xl overflow-hidden mb-6 bg-gray-100">
                  <img src={selectedArticle.imageUrl} alt={selectedArticle.title} className="w-full h-full object-cover" />
                </div>
              ) : null}
              <div className="space-y-4 border-b border-areia-escura pb-6">
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs font-semibold text-verde-folha bg-verde-folha/10 px-2.5 py-1 rounded-full">
                    {selectedArticle.category}
                  </span>
                  {selectedArticle.tags?.map(tag => (
                    <span key={tag} className="text-[10px] font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded-full uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-marrom-terra leading-tight">
                  {selectedArticle.title}
                </h2>
                <div className="flex items-center gap-4 text-xs text-gray-500 font-mono">
                  <span className="flex items-center gap-1"><User className="h-3 w-3"/> {selectedArticle.author}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3"/> {selectedArticle.date}</span>
                  <span className="flex items-center gap-1"><BookOpen className="h-3 w-3"/> {selectedArticle.readTime}</span>
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
