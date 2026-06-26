import { MessageCircle, Instagram, Compass, Sparkles } from "lucide-react";

export default function AtendimentosParticulares() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-gradient-to-br from-areia-suave to-white rounded-3xl p-8 sm:p-12 border border-areia-escura shadow-sm overflow-hidden relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-marrom-terra/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-verde-folha/5 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/4"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-marrom-terra leading-tight">
              Atendimentos Particulares e Consultas de Orientação
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Um espaço dedicado à escuta acolhedora, ao reequilíbrio espiritual e à busca pelo sentido da existência, unindo o rigor do cuidado terapêutico com a sabedoria ancestral.
            </p>
            
            <div className="flex flex-col gap-4 pt-4">
              <a
                href="https://w.app/tucpb" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold shadow-md hover:bg-emerald-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
              >
                <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Agendar Consulta via WhatsApp 💬
              </a>
              <a
                href="https://www.instagram.com/caboclo.penabranca/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
              >
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Siga nosso Axé no Instagram 🔮
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Jogo de Búzios */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-areia-escura hover:border-marrom-terra/30 transition-colors group">
              <div className="h-12 w-12 bg-marrom-terra/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Compass className="h-6 w-6 text-marrom-terra" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">
                Jogo de Búzios <span className="text-sm font-normal text-marrom-terra block mt-1">(Consulta Sagrada)</span>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Unindo a profunda sabedoria oracular de Ifá com a escuta fenomenológica. O jogo não é apenas adivinhação, mas uma ferramenta de mapeamento do destino, ajudando a revelar amarras invisíveis e trazendo clareza para a sua existência.
              </p>
            </div>

            {/* Card 2: Ebós e Limpezas */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-areia-escura hover:border-verde-folha/30 transition-colors group">
              <div className="h-12 w-12 bg-verde-folha/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-6 w-6 text-verde-folha" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">
                Ebós e Limpezas <span className="text-sm font-normal text-verde-folha block mt-1">(Alinhamento de Axé)</span>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Rituais sutis e respeitosos de desobsessão e descarrego. O foco é a abertura de caminhos e o reequilíbrio energético do seu campo magnético, trabalhando sempre em sintonia com as forças puras da natureza e dos guias espirituais.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
