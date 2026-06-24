import { Instagram } from "lucide-react";

export default function InstagramFeed() {
  const placeholders = [
    "https://images.unsplash.com/photo-1603704253164-90f33d725fb6?q=80&w=600&h=600&fit=crop", // Velas / Altar
    "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=600&h=600&fit=crop", // Natureza / Folhas
    "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=600&h=600&fit=crop", // Fumaça / Defumação
    "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=600&h=600&fit=crop", // Ervas
    "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=600&h=600&fit=crop", // Elementos naturais
    "https://images.unsplash.com/photo-1444464666168-49b626428cb1?q=80&w=600&h=600&fit=crop", // Pássaro / Natureza
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-serif font-bold text-marrom-terra mb-2">Nosso Axé em Imagens</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Um pouco da nossa vivência, nossa fé e do contato com as forças da natureza.
        </p>
        
        {/* Container preparado para Widget do Instagram (iframe/script futuro) */}
        <div id="instagram-widget-container" className="w-full">
          {/* Fallback temporário (Mockup do Feed) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mb-8">
            {placeholders.map((src, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-xl bg-gray-100 group relative cursor-pointer shadow-sm border border-gray-100">
                <img 
                  src={src} 
                  alt={`Momento no terreiro ${index + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-marrom-terra/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="text-white h-8 w-8" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <a 
          href="https://instagram.com/caboclo.penabranca" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-verde-mata text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-verde-mata/20 hover:bg-verde-folha hover:scale-105 transition-all duration-300"
        >
          <Instagram className="h-5 w-5" />
          Acompanhe nossa vivência no @caboclo.penabranca
        </a>
      </div>
    </div>
  );
}
