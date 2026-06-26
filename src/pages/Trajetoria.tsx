/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef } from "react";
import { Compass, BookOpen, User, Star, Leaf, Flame, Heart, Users, TreePine, Volume2, VolumeX } from "lucide-react";
import InstagramFeed from "../components/InstagramFeed";

function GalleryYouTube({ videoId, title }: { videoId: string; title: string }) {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  return (
    <div className="aspect-[9/16] rounded-3xl overflow-hidden shadow-sm relative group border border-areia-escura">
      <div className="absolute inset-0 bg-marrom-terra/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
      
      <button 
        onClick={toggleMute}
        className="absolute top-4 right-4 z-30 bg-black/50 hover:bg-black/80 text-white p-2.5 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
        title={isMuted ? "Ativar som" : "Desativar som"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

      <iframe 
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${videoId}&controls=0&playsinline=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 border-none pointer-events-none" 
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20 pointer-events-none">
        <span className="text-pena-branca text-base font-serif font-medium tracking-wide">{title}</span>
      </div>
    </div>
  );
}

export default function Trajetoria() {
  return (
    <div className="animate-fade-in space-y-20 pb-20" id="trajetoria-page">
      
      {/* Intro Hero Section */}
      <section className="bg-gradient-to-b from-marrom-terra to-marrom-tronco py-20 text-center text-pena-branca px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-pena-branca/10 text-areia-escura mb-2">
            <Compass className="h-7 w-7" />
          </div>
          <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-[#d4af37]">
            Nossa Trajetória
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-areia-escura font-light leading-relaxed">
            Conheça as raízes do Templo Umbandista Caboclo Pena Branca (TUCPB) e a caminhada espiritual daqueles que sustentam esta tenda de caridade.
          </p>
        </div>
      </section>

      {/* 1. The Story / Foundations of the Temple */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-4">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#d4af37]/10 text-[#d4af37] mb-2">
            <BookOpen className="h-7 w-7" />
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-[#2e7d32] sm:text-4xl">
            A Semente Plantada em 2015
          </h2>
        </div>
        <div className="mt-8 space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg text-justify md:text-center">
          <p>
            O Templo Umbandista Caboclo Pena Branca (TUCPB) lançou as suas primeiras raízes em Brasília, no ano de 2015, sob a força e a luz da manifestação do nosso Guia Chefe, o Caboclo Pena Branca. A nossa história começou de forma humilde e genuína: num pequeno quarto emprestado por uma consulente que, profundamente tocada pelo Axé, viria a tornar-se uma das primeiras filhas de santo da casa.
          </p>
          <p>
            Movidos pelo amor e pela urgência da caridade, o pequeno espaço rapidamente se revelou estreito para o tamanho da missão. As nossas correntes de atendimento começavam às 18h das sextas-feiras e estendiam-se, ininterruptamente, até às 9h ou 10h da manhã do dia seguinte. Eram madrugadas inteiras dedicadas ao pronto-socorro espiritual e ao amparo dos aflitos.
          </p>
          <p>
            Desde o nosso primeiro dia de fundação, a cura foi tratada de forma integral. Enquanto a espiritualidade atuava firmemente nos trabalhos de desobsessão, abertura de caminhos e quebra de amarras, os nossos filhos de fé somavam forças aplicando Reiki e princípios da Medicina Chinesa. Uma união perfeita entre saberes, onde cada pessoa que cruzava a nossa porta era (e continua a ser) envolvida e tratada com o mais absoluto amor, respeito e acolhimento.
          </p>
        </div>
      </section>

      {/* 2. Dirigente Biography section */}
      <section className="bg-[#f2ede2] py-20 border-y border-areia-escura">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              {/* Elegant bio avatar design, with a natural warm aura frame */}
              <div className="relative w-72 h-96 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-[#d4af37]/20 flex flex-col items-center justify-end p-6 text-center transform hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] transition-all duration-700 group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-black/30 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-[#d4af37]/10 mix-blend-color z-10 pointer-events-none"></div>
                
                <img src="/Gemini_Generated_Image_gnisognisognisog.png" alt="Pai Felipe" className="absolute inset-0 w-full h-full object-cover object-top grayscale-[20%] sepia-[10%] contrast-[1.05] brightness-[0.95] group-hover:grayscale-0 group-hover:sepia-0 group-hover:scale-105 transition-all duration-1000" />
                
                {/* Elegant inner rings */}
                <div className="absolute inset-3 rounded-3xl border border-[#d4af37]/30 z-20 pointer-events-none opacity-80"></div>
                <div className="absolute inset-4 rounded-[1.25rem] border border-white/5 z-20 pointer-events-none"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 pointer-events-none transform group-hover:-translate-y-1 transition-transform duration-700 flex flex-col items-center">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-3 opacity-80"></div>
                  <div className="relative z-30 space-y-1">
                    <div className="text-white font-serif font-bold text-2xl tracking-wide drop-shadow-lg">Pai Felipe</div>
                    <div className="text-[0.65rem] font-mono text-[#d4af37] uppercase tracking-[0.3em] font-medium">Dirigente Espiritual</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-8">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#d4af37] sm:text-4xl border-l-4 border-[#2e7d32] pl-6">
                O Tronco: Bàbá Aláàrìnrin Àjò (Pai Felipe)
              </h2>
              <div className="space-y-5">
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  Algumas pessoas são chamadas pela espiritualidade ao longo da vida. Outras, já nascem com ela a pulsar nas veias.
                </p>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  Desde os primeiros anos de vida, Pai Felipe sentia que habitava mundos paralelos. A sua infância foi marcada por sonhos intensos e memórias de existências passadas que, na época, traziam inquietação. Mas a resposta para esse mistério não tardaria a ser confirmada pelos grandes oráculos: ele não se estava a iniciar no sacerdócio nesta vida; ele apenas estava a despertar. Era o retorno do Viajante dos Sonhos — o significado literal do seu nome sagrado iorubá, <strong>Bàbá Aláàrìnrin Àjò</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  Mas o dom puro não lhe bastava; ele precisava de fundamentos profundos. Inquieto e sedento pela verdadeira raiz da magia e do sagrado, construiu uma trajetória raríssima e impressionante. Embrenhou-se nas terras de Roraima e do Amazonas, vivenciando a força das etnias Macuxi e Yanomami, até ser iniciado como Pajé Xamã Patxe na milenar tradição <strong>Wapichana</strong>. Na matriz africana, foi consagrado e assentado como Babalorixá na imponente nação <strong>Ketu</strong>. E na Umbanda, a sua árvore bebeu direto da fonte, firmando raízes na histórica <strong>Tenda Espírita Mirim</strong>, uma das casas fundadoras e mais velhas da história da Umbanda no Brasil.
                </p>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  A sua jornada passou ainda por iniciações na Alquimia Hermética e no Ocultismo, amparado por mestres que o ajudaram a lapidar a sua mediunidade. Contudo, o que torna o seu trabalho no TUCPB um verdadeiro divisor de águas é a sua visão como Psicólogo e Cientista.
                </p>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  Pai Felipe compreendeu, através dos seus estudos em fenomenologia e hermenêutica, que a magia e a ciência não são inimigas. Para ele, o líder religioso é a terra que deve nutrir a árvore, que são os médiuns e consulentes. Se a terra for pobre em conhecimento, a árvore cresce frágil.
                </p>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  Por isso, no nosso terreiro, não há espaço para a cegueira dogmática. A missão de Pai Felipe é usar a força do Orixá e o entendimento clínico da mente humana para libertar quem o procura. Ele ensina que o primeiro e mais poderoso ato mágico é a consciência. Sob a sua liderança, a Umbanda de Caboclo não procura apenas curar o corpo, mas emancipar a alma, para que cada pessoa se torne, finalmente, o mestre do seu próprio destino.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Nossas Linhas */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1b5e20]/10 text-[#2e7d32]">
            <Star className="h-6 w-6" />
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-[#d4af37] sm:text-4xl">
            A Nossa Essência
          </h2>
          <p className="text-gray-600 text-lg">
            Os pilares que fundamentam a nossa prática espiritual
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Pilar 1 */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-areia-escura shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#1b5e20] group">
            <div className="flex items-center gap-5 mb-6">
              <div className="p-4 rounded-2xl bg-[#1b5e20]/10 text-[#1b5e20] group-hover:bg-[#1b5e20] group-hover:text-white transition-colors duration-300">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#d4af37]">Umbanda de Caboclo</h3>
            </div>
            <p className="text-base text-gray-700 leading-relaxed">
              O Templo Umbandista Caboclo Pena Branca fundamenta os seus trabalhos numa vertente profunda e enraizada nas forças da natureza: a Umbanda de Caboclo. Guiados pela sabedoria dos povos originários e pela energia curadora das matas, o nosso culto não se prende apenas à incorporação, mas à vivência prática da espiritualidade e da magia natural.
            </p>
          </div>

          {/* Pilar 2 */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-areia-escura shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#1b5e20] group">
            <div className="flex items-center gap-5 mb-6">
              <div className="p-4 rounded-2xl bg-[#1b5e20]/10 text-[#1b5e20] group-hover:bg-[#1b5e20] group-hover:text-white transition-colors duration-300">
                <Flame className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#d4af37]">Fundamentos Xamânicos</h3>
            </div>
            <p className="text-base text-gray-700 leading-relaxed">
              No TUCPB, não nos prendemos a dogmas rígidos. A nossa prática é a Umbanda de Caboclo, que bebe naturalmente das fontes do xamanismo e da pajelança. Através do uso litúrgico das forças da natureza — com ervas, defumações, cristais e o preparo das puçangas (medicinas ancestrais) —, manipulamos o Axé para a cura. É uma Umbanda flexível e viva, que honra os espíritos da natureza e une a força dos Orixás à sabedoria curadora da floresta.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Nossa Forma de Trabalhar */}
      <section className="bg-gradient-to-b from-white to-[#f2ede2] py-20 border-t border-areia-escura">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-[#d4af37] sm:text-4xl">
              Nossa Forma de Trabalhar
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Uma Umbanda Completa e Integrativa
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Card 1 */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-areia-escura hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex items-center gap-5 mb-6">
                <div className="p-4 rounded-2xl bg-[#d4af37]/10 text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-white transition-colors duration-300">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#2e7d32]">As Giras de Atendimento</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                Trabalhamos com a Umbanda em toda a sua plenitude. Nas nossas giras, honramos os Pretos Velhos, Caboclos, Erês, Boiadeiros, Caboclos de Ogum, Ciganos, Malandros, Marinheiros e Baianos, além da força vital do nosso Povo de Esquerda (Exu, Pombagira e Exu Mirim). Cada gira inicia-se com o chamado das linhas do dia e com rituais específicos, sempre guiados pela intuição dos guias e do nosso dirigente, abrindo-se depois para o sagrado e acolhedor momento do atendimento fraterno.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-areia-escura hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex items-center gap-5 mb-6">
                <div className="p-4 rounded-2xl bg-[#1b5e20]/10 text-[#1b5e20] group-hover:bg-[#1b5e20] group-hover:text-white transition-colors duration-300">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#d4af37]">Giras de Cura</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                As nossas Giras de Cura possuem uma energia e estrutura únicas. Sob a condução amorosa e sábia dos Pretos Velhos, o terreiro transforma-se num verdadeiro hospital espiritual. Aqui, o tratamento transcende o invisível: enquanto ocorrem cirurgias astrais manifestadas pelos nossos médiuns de cura, filhos da casa aplicam terapias integrativas, unindo o passe magnético ao Reiki e à Medicina Chinesa (como a acupuntura). É a união de todas as ferramentas de luz e ciência em prol do alívio e da cura integral do ser humano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant Photo Gallery Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
           <h2 className="font-serif text-3xl font-bold tracking-tight text-[#d4af37]">
             Memórias do Gongá
           </h2>
           <p className="text-base text-gray-600 mt-3">Vislumbres de nossa casa, de nossa fé e de nossa caminhada.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Gallery Item 1 */}
          <GalleryYouTube 
            videoId="sIJRw2AmSUY" 
            title="Gira de Esquerda" 
          />
          
          {/* Gallery Item 2 */}
          <GalleryYouTube 
            videoId="qR9rmjK8UW0" 
            title="Sessão de Cura" 
          />

          {/* Gallery Item 3 */}
          <GalleryYouTube 
            videoId="5lIcBVhdH4E" 
            title="Louvor ao Povo Cigano" 
          />

          {/* Gallery Item 4 */}
          <GalleryYouTube 
            videoId="blvIb5ilgnY" 
            title="Trabalho de Cura Espiritual" 
          />

          {/* Gallery Item 5 */}
          <GalleryYouTube 
            videoId="ycSW6-yAvP4" 
            title="Preparo do Banho Sagrado" 
          />

          {/* Gallery Item 6 */}
          <GalleryYouTube 
            videoId="torQZG710A0" 
            title="Gira de Preto Velho" 
          />
        </div>
      </section>

      {/* Instagram Feed Section */}
      <InstagramFeed />

      {/* Sacred Message Section (Caboclo Pena Branca) */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 mt-12">
        <div className="bg-gradient-to-br from-[#1b5e20] to-[#2e7d32] rounded-[2.5rem] p-10 sm:p-16 text-center text-white relative overflow-hidden shadow-xl border border-[#d4af37]/20">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:32px_32px]"></div>
          
          <div className="relative z-10 space-y-8">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20">
              <TreePine className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-[#d4af37]">
              Mensagem do Caboclo Pena Branca
            </h3>
            
            <div className="space-y-6 text-base sm:text-xl text-white/90 leading-relaxed italic max-w-3xl mx-auto font-light">
              <p>
                &ldquo;Coisa boa, meu filho! Coisa boa é saber que o vento forte que balança a mata não vem para derrubar a árvore de raiz firme, mas apenas para levar embora a folha seca que já não te serve mais.
              </p>
              <p>
                Muitas vezes chegas aqui com o passo pesado, achando que a estrada da vida só tem espinhos. Mas senta-te aqui, sob a sombra do meu cocar. Respira o cheiro sagrado da erva. Deixa que a água corrente leve as tuas mágoas e que o fumo do meu cachimbo eleve as tuas dores aos pés de Zambi.
              </p>
              <p>
                Não tenhas medo das noites escuras, pois até a coruja precisa da escuridão para enxergar longe. Eu trago a pena branca para pacificar o teu coração e a flecha de Oxóssi para garantir o teu sustento e abrir os teus caminhos. A cura verdadeira, meu filho, começa quando aprendes a perdoar a ti mesmo.
              </p>
              <p>
                Levanta a cabeça, firma a tua fé na luz de Oxalá e segue. A floresta inteira trabalha em silêncio pela tua vitória. E ver a tua alma curada, leve e de pé... ah, isso é coisa boa, meu filho!&rdquo;
              </p>
            </div>
            
            <div className="pt-4 font-serif text-sm text-[#d4af37] font-bold tracking-widest uppercase">
              — Okê Caboclo! Okê Pena Branca!
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
