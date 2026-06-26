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
              Você Sente Que Precisa de Respostas? Descubra o Alívio e a Direção Através da Orientação Espiritual.
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Se você tem carregado um peso inexplicável, angústias ou dúvidas sobre os próximos passos, nós podemos ajudar. Através de um profundo acolhimento, unimos a sabedoria ancestral à escuta atenta para revelar o que está travando a sua vida. Imagine poder acordar amanhã com o coração leve, a mente clara e a certeza de que seus caminhos estão finalmente abertos.
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
                Mais do que simples adivinhação, o oráculo revela exatamente onde estão as amarras invisíveis que bloqueiam o seu sucesso e a sua paz. Através da sabedoria milenar, você receberá um mapeamento claro do seu destino e as respostas precisas para tomar as rédeas da sua jornada com total confiança.
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
                Sabe aquela sensação constante de cansaço ou de que tudo dá errado? Nossos rituais de descarrego atuam diretamente na raiz espiritual desses problemas. Com a força pura da natureza, limpamos e blindamos o seu campo magnético para que você volte a prosperar de forma leve e equilibrada.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
