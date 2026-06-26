/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Feather, Heart, TreePine, Sparkles, HelpCircle, ArrowRight, Sun, Flame, Droplets, Landmark, MapPin, Clock, ScrollText, Flower2, Compass } from "lucide-react";
import { initialGiras, girasDeCura } from "../data";
import Logo from "../components/Logo";
import AtendimentosParticulares from "../components/AtendimentosParticulares";
import InstagramFeed from "../components/InstagramFeed";

interface HomeProps {
  onNavigate: (route: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [activeElement, setActiveElement] = useState<string | null>(null);
  
  // Encontrar a próxima gira dinamicamente
  const getUpcomingGira = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const currentYear = today.getFullYear();
    
    const allGiras = [...initialGiras, ...girasDeCura].map(gira => {
      const match = gira.date.match(/\((\d{2})\/(\d{2})\)/);
      if (!match) return { ...gira, parsedDate: new Date(currentYear, 11, 31) };
      const day = parseInt(match[1], 10);
      const month = parseInt(match[2], 10) - 1;
      let eventDate = new Date(currentYear, month, day);
      
      // Ajustar o ano caso o mês do evento já tenha passado (ex: virada de ano)
      if (eventDate.getTime() < today.getTime() && month < today.getMonth() - 2) {
          eventDate.setFullYear(currentYear + 1);
      }
      
      return { ...gira, parsedDate: eventDate };
    });

    const upcoming = allGiras.filter(g => g.parsedDate >= today);
    upcoming.sort((a, b) => a.parsedDate.getTime() - b.parsedDate.getTime());
    
    return upcoming.length > 0 ? upcoming[0] : initialGiras[0];
  };

  const nextGira = getUpcomingGira();

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
              href="#trajetoria"
              onClick={(e) => { e.preventDefault(); onNavigate("#trajetoria"); window.location.hash = "#trajetoria"; }}
              className="flex items-center gap-2 rounded-full bg-verde-mata/80 px-8 py-3 text-sm font-semibold text-pena-branca border border-verde-folha/50 shadow-md hover:bg-verde-mata transition-all hover:scale-[1.02] backdrop-blur-sm"
            >
              <Compass className="h-4 w-4" />
              Nossa Trajetória
            </a>
            <a
              href="#portal"
              onClick={(e) => { e.preventDefault(); onNavigate("#portal"); window.location.hash = "#portal"; }}
              className="flex items-center gap-2 rounded-full bg-pena-branca/10 px-8 py-3 text-sm font-semibold text-pena-branca border border-pena-branca/20 hover:bg-pena-branca/20 transition-all hover:scale-[1.02] backdrop-blur-sm"
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
              O Templo Umbandista Caboclo Pena Branca (TUCPB) é mais do que um espaço de culto; é um solo sagrado de acolhimento, colo e cura profunda. Nascido sob o sopro da pura caridade, a nossa casa preserva a ritualística tradicional e os fundamentos enraizados da Umbanda de Caboclo. Guiados pela egrégora viva e curadora das matas, caminhamos com os pés no chão e o coração aberto, reverenciando a força dos Orixás e a sabedoria dos nossos guias espirituais.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Aqui, o terreiro opera como um verdadeiro hospital para o espírito. Sabemos que as dores que pesam no corpo muitas vezes começam no cansaço da alma. É por isso que abrimos as nossas portas para ser um porto seguro, onde as amarras são quebradas e o sofrimento encontra alívio através do passe magnético, do mistério curador das ervas sagradas e do conselho amigo e fraterno dos nossos protetores.
            </p>
            
            <blockquote className="my-8 text-center italic font-serif text-lg text-[#d4af37]">
              "Coisa boa, meu filho! Quando a jornada pesar, senta-te sob a sombra do meu cocar. Trago a pena branca da paz para acalmar o teu peito." <br/>
              <span className="text-sm not-italic font-sans text-gray-500 mt-2 block">— Caboclo Pena Branca</span>
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex gap-3 items-start">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-verde-folha/10 text-verde-folha mt-1">
                  <Heart className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-900">A Prática da Caridade</h4>
                  <p className="text-xs text-gray-500">A caridade é o nosso compromisso maior. Movidos pelo amor e pela missão espiritual que recebemos, os atendimentos de giro e passes são realizados como doação sagrada, sem qualquer cobrança. Nossa casa vive da fé e da dedicação daqueles que buscam o alívio na espiritualidade.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-marrom-terra/10 text-marrom-terra mt-1">
                  <TreePine className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-900">O Poder e Respeito às Ervas</h4>
                  <p className="text-xs text-gray-500">Reverenciamos o sangue verde das matas. Extraímos o Axé das folhas, raízes e sementes de forma sagrada e sustentável para o preparo de banhos, defumações e puçangas (medicinas ancestrais) que limpam, curam e reequilibram o corpo energético.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start sm:col-span-2">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#d4af37]/10 text-[#d4af37] mt-1">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-900">Hospital de Almas</h4>
                  <p className="text-xs text-gray-500">Somos um verdadeiro pronto-socorro espiritual. Unimos a força curadora dos Pretos Velhos e Caboclos a terapias integrativas como o Reiki, Acupuntura e passes magnéticos, tratando corpo, mente e espírito em total profundidade.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Three Pillars Cards */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          <div className="bg-white rounded-xl p-8 border border-areia-escura hover:shadow-md transition-shadow flex flex-col h-full">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-verde-folha">Pilar I</span>
            <h3 className="font-serif text-xl font-bold text-marrom-terra mt-2 mb-3">Caridade e Consciência</h3>
            <p className="text-sm text-gray-600 leading-relaxed flex-grow">
              A caridade pura e consciente é o alicerce da nossa casa. Sob a luz do Caboclo Pena Branca, entregamos passes, palavras e acolhimento como ferramentas de cura espiritual. Tudo que ofertamos é fruto da devoção e do amor ao próximo, sem qualquer finalidade material, buscando apenas despertar a consciência e a paz em cada coração que nos procura.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-areia-escura hover:shadow-md transition-shadow flex flex-col h-full">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-verde-folha">Pilar II</span>
            <h3 className="font-serif text-xl font-bold text-marrom-terra mt-2 mb-3">Respeito à Natureza</h3>
            <p className="text-sm text-gray-600 leading-relaxed flex-grow">
              As matas, rios e pedreiras são templos vivos dos Orixás e extensões do nosso sagrado. No TUCPB, firmamos o compromisso inegociável de preservação. Nosso uso ritualístico de ervas e oferendas é plenamente ecologicamente consciente. Não descartamos materiais poluentes e cuidamos para proteger a vitalidade, a fauna e a flora do nosso planeta em todas as práticas.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-areia-escura hover:shadow-md transition-shadow flex flex-col h-full">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-verde-folha">Pilar III</span>
            <h3 className="font-serif text-xl font-bold text-marrom-terra mt-2 mb-3">Humildade e União</h3>
            <p className="text-sm text-gray-600 leading-relaxed flex-grow">
              No terreiro somos todos iguais perante o axé. Ao cruzarmos a porta, deixamos de lado vaidades materiais e honrarias do mundo. Vestimos o mesmo branco e pisamos descalços no chão do Gongá para mantermos a humildade e a conexão com a terra. Trabalhamos juntos, ombro a ombro, como verdadeiros irmãos irmanados na fé e no amor umbandista.
            </p>
          </div>

        </div>
      </section>

      {/* Next Saturday Highlight Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-marrom-terra to-marrom-tronco p-8 sm:p-12 text-pena-branca shadow-md flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Decorative background shape */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-verde-folha/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-4 max-w-xl">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="inline-block bg-verde-folha px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider">
                Próximo Encontro
              </span>
              {nextGira.status && (
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${
                  nextGira.status === "Confirmada" ? "bg-emerald-500/20 text-emerald-100 border border-emerald-500/30" :
                  nextGira.status === "A Confirmar" ? "bg-amber-500/20 text-amber-200 border border-amber-500/30" :
                  "bg-blue-500/20 text-blue-100 border border-blue-500/30"
                }`}>
                  {nextGira.status}
                </span>
              )}
            </div>
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
            Ver Calendário
          </button>
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
              O Axé é a força vital, a energia e o princípio da vida. No nosso Gongá, essa força é movimentada através da união sagrada dos quatro elementos. Clique em cada um abaixo para entender como manipulamos a natureza para a sua cura:
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

      {/* Atendimentos Particulares Section */}
      <AtendimentosParticulares />

      {/* Informações ao Visitante Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-12 sm:my-16">
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-[#d4af37]/30 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-[#1b5e20] sm:text-3xl">
              Informações ao Visitante
            </h2>
            <p className="text-sm text-gray-600">
              Orientações importantes para quem deseja conhecer nossa casa e participar de nossas giras.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            
            {/* Onde Estamos */}
            <div className="flex flex-col h-full items-center text-center p-6 rounded-xl border border-areia-escura hover:border-[#2e7d32] transition-colors bg-areia-suave/50">
              <div className="p-4 rounded-full bg-[#1b5e20]/10 text-[#2e7d32] mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-serif font-bold text-gray-900 mb-2">Onde Estamos</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Rua Caçapava, Qd 03, Lt 25, Casa 02<br />
                Jardim Zuleika - Luziânia, GO<br />
                CEP: 72850-615
              </p>
              <a 
                href="https://maps.app.goo.gl/JjXBzkLqysP7xufq9"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-sm text-[#2e7d32] font-semibold hover:underline flex items-center gap-1"
              >
                Abrir no Google Maps <MapPin className="h-3 w-3" />
              </a>
            </div>

            {/* Nossas Giras */}
            <div className="flex flex-col h-full items-center text-center p-6 rounded-xl border border-areia-escura hover:border-[#2e7d32] transition-colors bg-areia-suave/50">
              <div className="p-4 rounded-full bg-[#1b5e20]/10 text-[#2e7d32] mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-serif font-bold text-gray-900 mb-2">Nossas Giras</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Trabalhos de Cura:</strong><br/>
                Todas as segundas às 18h.<br/><br/>
                <strong>Giras de Desenvolvimento e Atendimento:</strong><br/>
                Sábados (quinzenalmente) às 19h.
              </p>
            </div>

            {/* Regras da Casa */}
            <div className="flex flex-col h-full items-center text-center p-6 rounded-xl border border-areia-escura hover:border-[#2e7d32] transition-colors bg-areia-suave/50">
              <div className="p-4 rounded-full bg-[#1b5e20]/10 text-[#2e7d32] mb-4">
                <ScrollText className="h-6 w-6" />
              </div>
              <h3 className="font-serif font-bold text-gray-900 mb-2">Regras da Casa</h3>
              <ul className="text-sm text-gray-700 leading-relaxed text-left list-disc list-inside space-y-2">
                <li>Usar roupa clara/branca</li>
                <li>Evitar decotes</li>
                <li>Manter o silêncio no terreiro</li>
                <li>Proibido filmar ou tirar fotos</li>
                <li>Incorporação apenas com autorização prévia do dirigente</li>
              </ul>
            </div>

            {/* Doações */}
            <div className="flex flex-col h-full items-center text-center p-6 rounded-xl border border-[#d4af37]/40 hover:border-[#d4af37] transition-colors bg-[#d4af37]/5">
              <div className="p-4 rounded-full bg-[#d4af37]/10 text-[#d4af37] mb-4">
                <Flower2 className="h-6 w-6" />
              </div>
              <h3 className="font-serif font-bold text-gray-900 mb-2">Doações</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Nossos trabalhos são gratuitos. Caso sinta no coração o desejo de ajudar na manutenção do nosso terreiro, aceitamos doações voluntárias.
              </p>
              <div className="bg-white px-3 py-3 rounded-lg border border-[#d4af37]/20 w-full mt-auto">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Chave PIX (E-mail)</p>
                <p className="text-sm text-[#1b5e20] font-mono font-bold break-all">Tucpbpenabranca@gmail.com</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <InstagramFeed />

    </div>
  );
}
