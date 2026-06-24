/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Feather, Heart, TreePine, Sparkles, HelpCircle, ArrowRight, Sun, Flame, Droplets, Landmark } from "lucide-react";
import { initialGiras } from "../data";
import Logo from "../components/Logo";
import AtendimentosParticulares from "../components/AtendimentosParticulares";

interface HomeProps {
  onNavigate: (route: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [activeElement, setActiveElement] = useState<string | null>(null);
  
  // Find the next upcoming gira
  const nextGira = initialGiras[0];

  const gongaElements = [
    {
      id: "fogo",
      title: "Elemento Fogo (Velas)",
      description: "Representa a irradiação da luz espiritual, transmutação energética e a fé ardente que conecta o médium aos planos superiores. Ilumina caminhos e consome larvas astrais.",
      icon: Flame,
      color: "text-amber-600 bg-amber-50 border-amber-200",
    },
    {
      id: "agua",
      title: "Elemento Água (Quartilhas)",
      description: "A água fluidificada e as quartilhas consagram a purificação, a limpeza fluídica e a doação de magnetismo calmante de Mãe Iemanjá e das mães d'água.",
      icon: Droplets,
      color: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
      id: "terra",
      title: "Elemento Terra (Pedras e Cristais)",
      description: "Pedras, sementes e cristais fixam e condensam as vibrações dos Orixás. Atuam como imãs para sugar negatividades e descarregá-las na terra.",
      icon: Landmark,
      color: "text-emerald-700 bg-emerald-50 border-emerald-200",
    },
    {
      id: "vegetal",
      title: "Elemento Vegetal (Ervas e Flores)",
      description: "As flores trazem a vibração de Oxum e Iemanjá, enquanto as ervas de Oxóssi expandem a seiva vital e curativa, desmanchando miasmas e revigorando o duplo etérico.",
      icon: TreePine,
      color: "text-green-700 bg-green-50 border-green-200",
    }
  ];

  return (
    <div className="animate-fade-in space-y-16 pb-16" id="home-page">
      
      {/* Hero Banner Section */}
      <section className="relative overflow-hidden bg-verde-mata py-32 text-center px-4 sm:px-6 lg:px-8 shadow-inner" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(28, 43, 30, 0.85), rgba(28, 43, 30, 0.95)), url("https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2000&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e8e2d5_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="relative mx-auto max-w-4xl space-y-8">
          
          <h1 className="font-serif text-4xl font-bold tracking-wider text-pena-branca sm:text-5xl md:text-6xl leading-tight">
            Aqui, o tempo suspende seu passo e a ancestralidade toma corpo.
          </h1>
          
          <p className="mx-auto max-w-2xl text-base text-areia-escura sm:text-lg md:text-xl font-light leading-relaxed">
            Bem-vindo ao Templo Umbandista Caboclo Pena Branca. Um espaço sagrado de caridade, cura e conexão espiritual sob as bênçãos de Oxalá.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="#agenda"
              onClick={(e) => { e.preventDefault(); onNavigate("#agenda"); window.location.hash = "#agenda"; }}
              className="flex items-center gap-2 rounded-full bg-marrom-terra px-8 py-3 text-sm font-semibold text-pena-branca shadow-md hover:bg-marrom-tronco transition-all hover:scale-[1.02]"
            >
              Nossa Agenda
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#portal"
              onClick={(e) => { e.preventDefault(); onNavigate("#portal"); window.location.hash = "#portal"; }}
              className="flex items-center gap-2 rounded-full bg-pena-branca/10 px-8 py-3 text-sm font-semibold text-pena-branca border border-pena-branca/20 hover:bg-pena-branca/20 transition-all"
            >
              Portal de Conhecimento
            </a>
          </div>
        </div>
      </section>

      {/* Brand Circular Logo & Description Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-areia-escura">
          
          {/* Authentic Seal of Caboclo Pena Branca */}
          <div className="lg:col-span-5 flex justify-center">
            <Logo className="w-72 h-72 drop-shadow-2xl hover:rotate-2 transition-transform duration-500 cursor-pointer" />
          </div>

          {/* Right Text description */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-marrom-terra sm:text-3xl border-l-4 border-verde-folha pl-4">
              O Terreiro de Pena Branca
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Fundado com o objetivo de servir de farol de caridade em nossa região, o **Templo Umbandista Caboclo Pena Branca (TUCPB)** é uma casa de acolhimento e cura. Guiados pela egrégora iluminada dos Caboclos da Mata, praticamos a Umbanda de forma tradicional, prezando pela ritualística pura, respeito incondicional aos Orixás e aos guias espirituais.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Acreditamos que o terreiro é um hospital do espírito, onde as dores da alma encontram alívio através do passe, do descarrego das ervas e do aconselhamento fraterno com os espíritos protetores.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex gap-3 items-start">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-verde-folha/10 text-verde-folha mt-1">
                  <Heart className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-900">Caridade Sem Custo</h4>
                  <p className="text-xs text-gray-500">Nenhum trabalho espiritual é cobrado. A caridade é doada gratuitamente.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-marrom-terra/10 text-marrom-terra mt-1">
                  <TreePine className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-900">Respeito às Ervas</h4>
                  <p className="text-xs text-gray-500">As forças da natureza são usadas de forma sustentável para o banho e fitoenergética.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* The Gongá Interactive Simulation section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-areia-suave to-areia-escura rounded-2xl p-8 sm:p-12 border border-areia-escura space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-marrom-terra sm:text-3xl">
              O Gongá Sagrado
            </h2>
            <p className="text-sm text-gray-600">
              O Gongá é o condensador de energias do terreiro. Clique em cada um dos elementos consagrados no altar para entender sua força espiritual:
            </p>
          </div>

          {/* Interactive Gongá Layout representation */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4">
            {gongaElements.map((el) => {
              const IconComp = el.icon;
              return (
                <button
                  key={el.id}
                  onClick={() => setActiveElement(activeElement === el.id ? null : el.id)}
                  className={`flex flex-col items-center justify-center p-6 rounded-xl border text-center transition-all duration-300 ${
                    activeElement === el.id 
                      ? "bg-white ring-2 ring-verde-folha shadow-md scale-[1.03]" 
                      : "bg-white/60 hover:bg-white border-areia-escura shadow-sm hover:scale-102"
                  }`}
                  id={`gonga-btn-${el.id}`}
                >
                  <div className={`p-4 rounded-full border mb-4 ${el.color}`}>
                    <IconComp className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif font-bold text-sm text-gray-900 mb-1">
                    {el.title}
                  </h3>
                  <span className="text-xs text-verde-folha font-medium underline">
                    {activeElement === el.id ? "Fechar" : "Ver fundamento"}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Dynamic description display */}
          {activeElement && (
            <div className="bg-white p-6 rounded-xl border-l-4 border-verde-folha shadow-inner animate-fade-in-quick">
              {gongaElements.map((el) => {
                if (el.id !== activeElement) return null;
                const IconComp = el.icon;
                return (
                  <div key={el.id} className="flex gap-4 items-start">
                    <div className="p-2.5 rounded-lg bg-verde-folha/10 text-verde-folha shrink-0 mt-1">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif font-bold text-gray-900">{el.title}</h4>
                      <p className="text-sm text-gray-700 leading-relaxed">{el.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Three Pillars Cards */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-xl p-8 border border-areia-escura hover:shadow-md transition-shadow">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-verde-folha">Pilar I</span>
            <h3 className="font-serif text-xl font-bold text-marrom-terra mt-2 mb-3">Charidade Absoluta</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Damos de graça o que de graça recebemos. Sob as ordens do Caboclo Pena Branca, nenhuma consulta, passe, descarrego ou ritual de proteção possui qualquer custo financeiro ou troca de bens. A caridade pura é nossa única moeda.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-areia-escura hover:shadow-md transition-shadow">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-verde-folha">Pilar II</span>
            <h3 className="font-serif text-xl font-bold text-marrom-terra mt-2 mb-3">Respeito à Natureza</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              As matas, rios, pedreiras e mares são os templos vivos dos Orixás. No TUCPB, todo o uso ritualístico de ervas e oferendas é ecologicamente consciente, proibindo o descarte de materiais não-biodegradáveis e respeitando a fauna e a flora.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-areia-escura hover:shadow-md transition-shadow">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-verde-folha">Pilar III</span>
            <h3 className="font-serif text-xl font-bold text-marrom-terra mt-2 mb-3">Humildade e União</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              No terreiro, despojamo-nos de nossos cargos civis, vaidades acadêmicas ou orgulhos pessoais. Todos vestem o branco sagrado, descalçam-se para tocar a terra do Gongá e servem lado a lado como irmãos de caminhada espiritual.
            </p>
          </div>

        </div>
      </section>

      {/* Atendimentos Particulares Section */}
      <AtendimentosParticulares />

      {/* Next Saturday Highlight Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-marrom-terra to-marrom-tronco p-8 sm:p-12 text-pena-branca shadow-md flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Decorative background shape */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-verde-folha/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-4 max-w-xl">
            <span className="inline-block bg-verde-folha px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider">
              Próximo Encontro
            </span>
            <h3 className="font-serif text-2xl font-bold tracking-tight sm:text-3xl">
              {nextGira.title}
            </h3>
            <p className="text-sm text-areia-escura leading-relaxed">
              {nextGira.description} Venha de roupas claras, traga sua fé e sintonize com os curadores da floresta.
            </p>
            <div className="flex gap-6 text-xs text-areia-escura font-mono">
              <div>📅 {nextGira.date}</div>
              <div>⏰ {nextGira.time}h</div>
              <div>💬 Consultas Disponíveis</div>
            </div>
          </div>

          <button
            onClick={() => { onNavigate("#agenda"); window.location.hash = "#agenda"; }}
            className="shrink-0 bg-pena-branca text-marrom-terra hover:bg-areia-escura px-6 py-3.5 rounded-full text-sm font-semibold shadow-md hover:scale-105 transition-all text-center"
            id="home-gira-btn"
          >
            Quero Participar / Agendar
          </button>
        </div>
      </section>

    </div>
  );
}
