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
              A Origem do Terreiro
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              O TUCPB nasceu de uma faísca de fé em meio às adversidades da vida. Em um período em que a busca por respostas espirituais se mostrava urgente, o **Caboclo Pena Branca** manifestou-se na mediunidade de nosso dirigente com uma promessa simples e firme: **“Traga-me os que sofrem, e eu trarei a seiva das matas para curá-los. Não cobrem nada, deem apenas o amor que receberam do Pai.”**
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              A partir dessa semente de obediência evangélica e ritualística, ergueu-se o nosso espaço. No início, velas eram fixadas em pratos simples e o chão batido de terra servia de altar. Hoje, com um Gongá estruturado sob a égide dos quatro elementos, mantemos exatamente o mesmo fervor, amor e simplicidade que regiam aquelas primeiras reuniões domésticas.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Atendemos de forma regular centenas de famílias de Cabedelo, João Pessoa e cidades vizinhas, oferecendo atendimento mediúnico qualificado, passe magnético, fitoenergética por meio de banhos de ervas, doutrinação espiritual e desobsessão de forma totalmente voluntária e gratuita.
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
              O Dirigente: Pai Felipe de Oxóssi
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Felipe Calixto (iniciado na espiritualidade de terreiro há mais de uma década) assumiu a direção espiritual da casa após uma intensa jornada de desenvolvimento, estudos kardecistas, juremeiros e umbandistas ortodoxos. Sob a coroa de Oxóssi e a proteção direta do Caboclo Pena Branca, ele conduz a corrente mediúnica do TUCPB com pulso firme e coração acolhedor.
            </p>
            
            {/* Elegant Quotation block */}
            <div className="bg-[#fcfbfa] p-6 rounded-xl border-l-4 border-marrom-terra italic text-sm text-gray-700 shadow-inner relative">
              <Quote className="absolute -top-3 -left-1 h-8 w-8 text-marrom-terra/15 rotate-180" />
              <p className="relative z-10 leading-relaxed">
                &ldquo;A Umbanda não é um caminho de facilidades mágicas ou de barganhas com o sagrado. É uma estrada estreita de autoconhecimento, reforma íntima e caridade ativa. Estar de branco descalço no Gongá é lembrar que viemos da poeira da terra e que nossa missão é acender a centelha de luz divina na vida de quem está em trevas.&rdquo;
              </p>
              <div className="mt-2 font-serif text-xs font-semibold text-marrom-terra not-italic text-right">
                — Pai Felipe de Oxóssi, Dirigente do TUCPB
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Sua filosofia de trabalho baseia-se na **Doutrina Espírita Racional**, aplicando passes magnéticos sob conhecimentos fluidoterapêuticos e zelando pela saúde física e mental dos médiuns através de orientações, palestras e seminários regulares na casa.
            </p>
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
