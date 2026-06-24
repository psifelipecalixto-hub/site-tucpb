import { useState } from "react";
import { Search, BookOpen, ArrowRight, User, Clock, X } from "lucide-react";
import { BlogArticle } from "../types";

const publicArticles: BlogArticle[] = [
  {
    id: "art-1",
    title: "O Sentido Existencial do Terreiro",
    category: "Fundamentos",
    snippet: "O terreiro transcende o espaço físico e se torna um hospital de almas, onde o encontro com o sagrado ilumina a nossa experiência de vida e o sentido de estarmos aqui.",
    content: "O terreiro transcende o espaço físico e se torna um hospital de almas, onde o encontro com o sagrado ilumina a nossa experiência de vida e o sentido de estarmos aqui.\n\nA Umbanda nos convida a olhar para dentro, reconhecendo a nossa própria natureza divina e a conexão profunda com todas as coisas. Ao pisarmos descalços no chão de terra, lembramos de onde viemos e para onde vamos, resgatando a humildade e a reverência diante do mistério da existência.\n\nCada passe, cada canto e cada defumação são convites para o despertar da consciência, para a cura das feridas emocionais e para a reconexão com a nossa essência mais pura. O terreiro é, portanto, um espaço de transformação alquímica, onde a dor se transmuta em sabedoria e o medo cede lugar à fé.",
    date: "20 de Junho de 2026",
    readTime: "5 min",
    author: "Pai Felipe",
    iconName: "gonga"
  },
  {
    id: "art-2",
    title: "As Forças da Natureza e o Caboclo Pena Branca",
    category: "Guias",
    snippet: "Compreendendo a energia curadora das matas e como a vibração pura de Pena Branca nos ensina sobre a simplicidade e a firmeza no caminhar.",
    content: "Compreendendo a energia curadora das matas e como a vibração pura de Pena Branca nos ensina sobre a simplicidade e a firmeza no caminhar.\n\nOs Caboclos representam a força primordial da natureza, a sabedoria ancestral daqueles que vivem em harmonia com a terra, a água, o fogo e o ar. Caboclo Pena Branca, em especial, traz a medicina da floresta, a cura através das ervas, dos banhos e dos passes magnéticos.\n\nSua presença no terreiro nos inspira a buscar a cura não apenas do corpo físico, mas também da alma. Ele nos ensina a respeitar os ciclos da natureza, a cultivar a paciência e a confiar na providência divina. Através de sua orientação amorosa, aprendemos a lidar com os desafios da vida com coragem, discernimento e compaixão.",
    date: "15 de Junho de 2026",
    readTime: "7 min",
    author: "Pai Felipe",
    iconName: "feather"
  },
  {
    id: "art-3",
    title: "Introdução aos Fundamentos da Umbanda",
    category: "Fundamentos",
    snippet: "Um guia de acolhimento para aqueles que dão os primeiros passos na religião. Entenda as linhas, a caridade e o respeito à mironga.",
    content: "Um guia de acolhimento para aqueles que dão os primeiros passos na religião. Entenda as linhas, a caridade e o respeito à mironga.\n\nA Umbanda é uma religião de matriz africana, nascida no Brasil, que sincretiza elementos do catolicismo, do espiritismo kardecista e das tradições indígenas. Seus pilares fundamentais são a caridade, a humildade e o amor ao próximo.\n\nNeste artigo, exploraremos os conceitos básicos da Umbanda, como a organização das sete linhas, o papel dos Orixás e dos Guias Espirituais, a importância da mediunidade e os rituais que compõem a nossa prática religiosa. Seja você um iniciante ou alguém que busca aprofundar seus conhecimentos, este guia oferecerá uma visão abrangente e respeitosa sobre os fundamentos da nossa fé.",
    date: "10 de Junho de 2026",
    readTime: "8 min",
    author: "Pai Felipe",
    iconName: "book"
  }
];

export default function Portal() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  const filteredArticles = publicArticles.filter(art => 
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
              <div className="space-y-4 border-b border-areia-escura pb-6">
                <span className="text-xs font-semibold text-verde-folha bg-verde-folha/10 px-2.5 py-1 rounded-full">
                  {selectedArticle.category}
                </span>
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
