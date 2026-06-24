/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Compass, BookOpen, User, Star, Quote, ArrowRight, TreePine, Sparkles } from "lucide-react";

export default function Trajetoria() {
  const [activeMilestone, setActiveMilestone] = useState<number>(0);

  const milestones = [
    {
      year: "2018",
      title: "O Chamado e os Primeiros Passos",
      subtitle: "Mesa Branca e Estudos de Lar",
      description: "Tudo começou com reuniões de estudo e caridade de mesa em uma modesta sala residencial em João Pessoa, PB. Sob a incorporação inicial e ordens diretas do Caboclo Pena Branca, as bases de amor e disciplina doutrinária começaram a se desenhar para um pequeno grupo de 7 médiuns fundadores."
    },
    {
      year: "2020",
      title: "Consagração do Gongá Oficial",
      subtitle: "Fundação do Templo em Cabedelo",
      description: "Mesmo diante de desafios, no dia 15 de Outubro de 2020, foi consagrado o nosso Gongá oficial no atual barracão em Cabedelo, PB. Os atabaques soaram pela primeira vez no terreiro, abrindo as giras de caridade pública quinzenais para a comunidade local."
    },
    {
      year: "2022",
      title: "Consagração da Curimba e Coroações",
      subtitle: "A Força do Couro e do Desenvolvimento",
      description: "Sob a batuta de Ogãs preparados, a Curimba ganhou voz própria na sustentação das Giras. Foi realizada também a primeira coroação de médiuns de desenvolvimento, estabelecendo a escala oficial de camboneamento e a primeira linha ativa de passes de cura."
    },
    {
      year: "2024",
      title: "Expansão do Barracão e do Social",
      subtitle: "Acolhendo Mais Almas",
      description: "Inauguração das obras de ampliação do terreiro, com um salão de assistência expandido para comportar mais de 120 consulentes sentados, salas dedicadas para preparação de banhos de ervas, cozinha ritualística para amassis e ampliação dos projetos de doação de cestas básicas."
    }
  ];

  return (
    <div className="animate-fade-in space-y-16 pb-16" id="trajetoria-page">
      
      {/* Intro Hero Section */}
      <section className="bg-gradient-to-b from-marrom-terra to-marrom-tronco py-16 text-center text-pena-branca px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-pena-branca/10 text-areia-escura mb-2">
            <Compass className="h-6 w-6" />
          </div>
          <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Nossa Trajetória
          </h1>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-areia-escura font-light leading-relaxed">
            Conheça as raízes do Templo Umbandista Caboclo Pena Branca (TUCPB) e a caminhada espiritual daqueles que sustentam esta tenda de caridade.
          </p>
        </div>
      </section>

      {/* The Story / Foundations of the Temple */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-marrom-terra sm:text-3xl border-l-4 border-verde-folha pl-4">
              A Raiz (O Terreiro)
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              O Templo Umbandista Caboclo Pena Branca fincou suas raízes no Jardim Zuleika, em Luziânia. Nascido da fé e do chamado para servir, o terreiro ergueu-se como um farol de caridade e cura para a comunidade. Em um mundo onde o sofrimento se faz presente, o Templo oferece um porto seguro para almas sedentas de conforto e direcionamento espiritual.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Nossa fundação baseia-se no tripé da simplicidade, amor ao próximo e respeito profundo aos guias e Orixás. Não buscamos o espetáculo, mas a transformação sincera que ocorre quando os pés tocam o chão do sagrado e o coração se abre para a energia curadora das matas.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Atendemos famílias da região oferecendo passes magnéticos, fitoenergética, desobsessão e a escuta amorosa, sempre sob as bênçãos e a coordenação de nosso amado Caboclo Pena Branca, de forma totalmente gratuita e voluntária.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-areia-escura shadow-sm space-y-6">
            <h3 className="font-serif text-lg font-bold text-marrom-terra flex items-center gap-2">
              <Star className="h-5 w-5 text-verde-folha fill-verde-folha" />
              Nossas Linhas de Trabalho
            </h3>
            <p className="text-sm text-gray-600">
              O terreiro opera sob a coordenação do Caboclo Pena Branca, mas abre suas correntes para a atuação fraterna das diversas linhas tradicionais da Umbanda:
            </p>
            <div className="space-y-4">
              <div className="border-b border-areia-escura pb-3">
                <h4 className="font-semibold text-sm text-gray-900">Caboclos (Oxóssi, Ogum, Xangô)</h4>
                <p className="text-xs text-gray-500">Energias curadoras das florestas, firmeza de caráter, abertura de caminhos e justiça.</p>
              </div>
              <div className="border-b border-areia-escura pb-3">
                <h4 className="font-semibold text-sm text-gray-900">Pretos Velhos (Yorimá / Almas)</h4>
                <p className="text-xs text-gray-500">Aconselhamento, paciência, sabedoria de vida, quebra de magias densas e conforto.</p>
              </div>
              <div className="border-b border-areia-escura pb-3">
                <h4 className="font-semibold text-sm text-gray-900">Crianças / Ibeijada</h4>
                <p className="text-xs text-gray-500">Pureza, restauração da alegria interna, cura psíquica e harmonização dos lares.</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-900">Povo de Esquerda (Exus e Pombagiras)</h4>
                <p className="text-xs text-gray-500">Guardiões da Lei e da Ordem nas dimensões inferiores. Limpeza pesada, defesa e caminhos materiais.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive History Timeline */}
      <section className="bg-[#f2ede2] py-16 border-y border-areia-escura">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-marrom-terra sm:text-3xl">
              Linha do Tempo: Marcos de Fé
            </h2>
            <p className="text-sm text-gray-600">
              Clique em cada ano para acompanhar como a espiritualidade construiu nossa casa passo a passo:
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {milestones.map((milestone, index) => (
              <button
                key={milestone.year}
                onClick={() => setActiveMilestone(index)}
                className={`px-5 py-3 rounded-full font-mono font-bold text-sm border transition-all ${
                  activeMilestone === index
                    ? "bg-verde-mata border-verde-mata text-pena-branca shadow-md scale-105"
                    : "bg-white border-areia-escura text-marrom-terra hover:bg-areia-suave"
                }`}
                id={`milestone-btn-${milestone.year}`}
              >
                {milestone.year}
              </button>
            ))}
          </div>

          {/* Active Timeline Card */}
          <div className="mx-auto max-w-3xl bg-white rounded-xl p-8 border border-areia-escura shadow-sm animate-fade-in-quick">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-3xl font-extrabold text-marrom-terra">
                  {milestones[activeMilestone].year}
                </span>
                <span className="text-xs font-semibold text-verde-folha bg-verde-folha/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  {milestones[activeMilestone].subtitle}
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 border-b border-areia-escura pb-2">
                {milestones[activeMilestone].title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {milestones[activeMilestone].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dirigente Biography section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-4 flex justify-center">
            {/* Elegant bio avatar design, with a natural warm aura frame */}
            <div className="relative w-64 h-80 rounded-2xl bg-gradient-to-t from-marrom-terra to-marrom-tronco overflow-hidden shadow-lg border-4 border-white flex flex-col items-center justify-end p-6 text-center">
              {/* Spiritual backdrop details */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]"></div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <User className="h-28 w-28 text-white/25" />
              </div>

              {/* Glowing ring */}
              <div className="absolute inset-4 rounded-xl border border-white/20"></div>
              
              <div className="relative z-10 space-y-1">
                <div className="text-pena-branca font-serif font-bold text-lg">Pai Felipe de Oxóssi</div>
                <div className="text-xs font-mono text-areia-escura uppercase tracking-widest">Dirigente Espiritual</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-marrom-terra sm:text-3xl border-l-4 border-verde-folha pl-4">
              O Tronco (O Dirigente)
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              A condução espiritual da casa está sob a responsabilidade de Pai Felipe. Sua jornada é marcada pela união de dois pilares fundamentais: a tradição de <strong>Babalorixá</strong>, com seu profundo respeito à mironga, ao sagrado e ao fundamento dos Orixás e Guias, e a <strong>Psicologia Existencial-Fenomenológica</strong>, focada na experiência vivida, na escuta acolhedora e na busca pelo sentido da existência.
            </p>
            
            {/* Elegant Quotation block */}
            <div className="bg-[#fcfbfa] p-6 rounded-xl border-l-4 border-marrom-terra italic text-sm text-gray-700 shadow-inner relative">
              <Quote className="absolute -top-3 -left-1 h-8 w-8 text-marrom-terra/15 rotate-180" />
              <p className="relative z-10 leading-relaxed">
                &ldquo;A Umbanda não é um caminho de facilidades mágicas ou de barganhas com o sagrado. É uma estrada estreita de autoconhecimento, reforma íntima e caridade ativa. Estar de branco descalço no Gongá é lembrar que viemos da poeira da terra e que nossa missão é acender a centelha de luz divina na vida de quem está em trevas.&rdquo;
              </p>
              <div className="mt-2 font-serif text-xs font-semibold text-marrom-terra not-italic text-right">
                — Pai Felipe
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Essa fusão entre a sabedoria ancestral das matas e o rigor do cuidado psicológico garante que cada consulente e cada médium seja visto em sua totalidade. O terreiro torna-se, assim, um hospital de almas, onde o acolhimento humano caminha lado a lado com a intervenção espiritual, zelando pela saúde física, mental e espiritual de todos que cruzam nossas portas.
            </p>
          </div>

        </div>
      </section>

      {/* Elegant Photo Gallery Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 border-t border-areia-escura">
        <div className="text-center mb-10">
           <h2 className="font-serif text-2xl font-bold tracking-tight text-marrom-terra sm:text-3xl">
             Memórias do Gongá
           </h2>
           <p className="text-sm text-gray-600 mt-2">Vislumbres de nossa casa, de nossa fé e de nossa caminhada.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Gallery Item 1 */}
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm relative group cursor-pointer border border-areia-escura">
            <div className="absolute inset-0 bg-marrom-terra/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img src="https://images.unsplash.com/photo-1544896265-d01fcf2ed71f?q=80&w=1000&auto=format&fit=crop" alt="Detalhe de velas e ervas" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
              <span className="text-pena-branca text-sm font-serif">A Força das Velas</span>
            </div>
          </div>
          
          {/* Gallery Item 2 */}
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm relative group cursor-pointer border border-areia-escura">
             <div className="absolute inset-0 bg-marrom-terra/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=1000&auto=format&fit=crop" alt="Atabaques" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
              <span className="text-pena-branca text-sm font-serif">O Som da Curimba</span>
            </div>
          </div>

          {/* Gallery Item 3 */}
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm relative group cursor-pointer border border-areia-escura">
             <div className="absolute inset-0 bg-marrom-terra/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img src="https://images.unsplash.com/photo-1517415446006-258169d519b7?q=80&w=1000&auto=format&fit=crop" alt="Elementos da natureza" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
              <span className="text-pena-branca text-sm font-serif">A Seiva das Matas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sacred Message Section (Caboclo Pena Branca) */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="bg-gradient-to-br from-verde-mata to-verde-folha rounded-3xl p-8 sm:p-12 text-center text-pena-branca relative overflow-hidden shadow-lg border-2 border-areia-escura/15">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:24px_24px]"></div>
          
          <div className="relative z-10 space-y-6">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-areia-escura">
              <TreePine className="h-6 w-6 text-white" />
            </div>
            
            <h3 className="font-serif text-2xl font-bold tracking-tight sm:text-3xl">
              Mensagem do Caboclo Pena Branca
            </h3>
            
            <p className="text-sm sm:text-base text-areia-escura leading-relaxed italic max-w-2xl mx-auto font-light">
              &ldquo;Filho de fé, não temas o vento que balança as copas das árvores da mata. O vento limpa as folhas secas para que novos brotos nasçam. Quando a jornada parecer pesada e seus pés cansarem de pisar nos espinhos da estrada da vida, senta-te sob a sombra do meu cocar. <br /><br />
              Trago a pena branca da paz para acalmar o teu peito e a flecha sagrada de Oxóssi para caçar as tuas dores. Não carregues mágoas; a água corrente lava tudo. Mantém teus olhos no alto e a tua fé firmada na luz de Oxalá, pois a floresta inteira trabalha em silêncio pela tua vitória.&rdquo;
            </p>
            
            <div className="font-serif text-xs text-areia-escura font-semibold tracking-wider uppercase">
              — Okê Caboclo! Okê Pena Branca!
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
