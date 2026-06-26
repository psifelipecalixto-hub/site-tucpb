/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Calendar, Clock, Landmark, Heart, User, Sparkles, Check, AlertCircle, FileText, ChevronRight } from "lucide-react";
import { initialGiras, girasDeCura } from "../data";
import { GiraEvent } from "../types";
import AtendimentosParticulares from "../components/AtendimentosParticulares";

export default function Agenda() {
  const [girasList] = useState<GiraEvent[]>(initialGiras);
  const [activeTab, setActiveTab] = useState<"sabado" | "segunda">("sabado");

  return (
    <div className="animate-fade-in space-y-16 pb-16" id="agenda-page">
      
      {/* Intro Banner */}
      <section className="bg-gradient-to-b from-verde-mata to-verde-folha py-12 text-center text-pena-branca px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="mx-auto max-w-4xl space-y-3">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-pena-branca/10 text-areia-escura mb-1">
            <Calendar className="h-6 w-6" />
          </div>
          <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Agenda de Giras
          </h1>
          <p className="mx-auto max-w-2xl text-xs sm:text-sm text-areia-escura font-light leading-relaxed">
            Consulte o cronograma de trabalhos espirituais e saiba como participar.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Instagram Highlights Block */}
        <div className="bg-gradient-to-r from-marrom-terra to-marrom-tronco text-pena-branca p-6 rounded-2xl shadow-md mb-12 flex flex-col md:flex-row items-center justify-between gap-4 border border-areia-escura">
          <div className="flex items-center gap-4">
             <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-verde-folha" />
             </div>
             <div>
                <h3 className="font-serif text-xl font-bold">Avisos do Terreiro</h3>
                <p className="text-areia-escura text-sm font-light mt-1">Acompanhe nossas atualizações nas redes sociais.</p>
             </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
             <div className="bg-white/10 px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2">
                Giras aos sábados 🪘
             </div>
             <div className="bg-white/10 px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2">
                Consultas e trabalhos espirituais 🔮
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column Left: Schedule Giras (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex bg-areia-suave p-1 rounded-lg border border-areia-escura inline-flex">
              <button 
                onClick={() => setActiveTab("sabado")}
                className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${activeTab === "sabado" ? "bg-white shadow-sm text-marrom-terra" : "text-gray-500 hover:text-gray-700"}`}
              >
                Giras de Sábado
              </button>
              <button 
                onClick={() => setActiveTab("segunda")}
                className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${activeTab === "segunda" ? "bg-white shadow-sm text-marrom-terra" : "text-gray-500 hover:text-gray-700"}`}
              >
                Giras de Segunda (Cura)
              </button>
            </div>

            {activeTab === "sabado" ? (
              <div className="space-y-4 animate-fade-in-quick" id="giras-list-sabado">
                <h2 className="font-serif text-2xl font-bold tracking-tight text-marrom-terra border-l-4 border-verde-folha pl-4">
                  Cronograma de Sábado
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  As sessões de caridade pública ocorrem regularmente nos fins de semana. Chegue no horário para garantir a sua acomodação na assistência e harmonização espiritual:
                </p>
                {girasList.map((gira) => (
                  <div 
                    key={gira.id}
                    className="bg-white rounded-xl border border-areia-escura p-6 shadow-sm hover:border-verde-folha/40 transition-all flex flex-col sm:flex-row gap-6 justify-between items-start"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="bg-marrom-terra/10 text-marrom-terra px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider">
                          {gira.orixaGuide}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                          gira.status === "Confirmada" ? "bg-emerald-100 text-emerald-800" : "bg-blue-100 text-blue-800"
                        }`}>
                          {gira.status}
                        </span>
                      </div>

                      <h3 className="font-serif text-lg font-bold text-gray-900 leading-tight">
                        {gira.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                        {gira.description}
                      </p>

                      <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-400">
                        <span className="flex items-center gap-1">📅 {gira.date}</span>
                        <span className="flex items-center gap-1">⏰ {gira.time}h</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4 animate-fade-in-quick" id="giras-list-segunda">
                <h2 className="font-serif text-2xl font-bold tracking-tight text-marrom-terra border-l-4 border-verde-folha pl-4">
                  Giras de Cura (Segundas)
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  Atendimentos voltados exclusivamente para passes de cura, desobsessão e equilíbrio espiritual.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {girasDeCura.map((gira) => (
                    <div 
                      key={gira.id}
                      className="bg-white rounded-xl border border-areia-escura p-5 shadow-sm hover:border-verde-folha/40 transition-all flex flex-col gap-2"
                    >
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-mono font-bold text-verde-folha bg-verde-mata/10 px-2 py-0.5 rounded">
                          {gira.date}
                        </span>
                        <span className="text-[10px] text-gray-400 font-mono">
                          {gira.time}h
                        </span>
                      </div>
                      <h3 className="font-serif text-sm font-bold text-gray-900 leading-tight">
                        {gira.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {gira.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Column Right: Information (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-areia-escura p-6 sm:p-8 shadow-sm space-y-6">
            <div className="space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-verde-mata/10 text-verde-folha mb-2">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-marrom-terra">
                Atendimento por Ordem de Chegada
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Nossos atendimentos são gratuitos e realizados por ordem de chegada. Não é necessário agendamento prévio.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Pedimos apenas que os consulentes cheguem com pelo menos 30 minutos de antecedência do início dos trabalhos para garantir a ficha na recepção do terreiro, pois as vagas são limitadas à capacidade de atendimento do dia.
              </p>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-amber-800 space-y-2 mt-4">
                <span className="font-bold flex items-center gap-1">🙏 Lembretes:</span>
                <ul className="space-y-1 list-disc list-inside">
                  <li>O portão é aberto 1h antes do início.</li>
                  <li>As fichas são distribuídas presencialmente.</li>
                  <li>A caridade do TUCPB é totalmente sem custos.</li>
                </ul>
              </div>

              <a
                href="https://w.app/tucpb" 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 w-full bg-emerald-600 text-white py-3.5 rounded-lg text-sm font-semibold hover:bg-emerald-700 shadow-sm transition-colors cursor-pointer"
              >
                Dúvidas? Fale no WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Atendimentos Particulares Section */}
      <AtendimentosParticulares />

      {/* Interactive Location / Map Block */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-areia-escura p-6 sm:p-8 shadow-sm flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-marrom-terra border-l-4 border-verde-folha pl-4">
              Nossa Localização
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed max-w-md">
              O Templo Umbandista Caboclo Pena Branca está de portas abertas para te receber. O terreiro é facilmente acessível de carro ou transporte público na região.
            </p>
            <div className="bg-areia-suave inline-block p-4 rounded-xl border border-areia-escura space-y-1">
               <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Endereço Principal</p>
               <p className="text-sm font-semibold text-gray-900">Rua Caçapava, Qd 03, Lt 25, Casa 02</p>
               <p className="text-sm text-gray-600">Jardim Zuleika - Luziânia, GO</p>
               <p className="text-sm text-gray-600">CEP: 72850-615</p>
            </div>
            <a 
              href="https://maps.app.goo.gl/JjXBzkLqysP7xufq9"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full sm:w-auto bg-verde-mata text-pena-branca px-6 py-3 rounded-lg text-sm font-semibold hover:bg-verde-folha shadow-sm transition-colors text-center mt-4"
            >
              Abrir rota no Google Maps
            </a>
          </div>
          
          <div className="flex-1 w-full">
            {/* Simulated Map Visual */}
            <div className="relative aspect-video lg:aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 border border-areia-escura shadow-inner">
               <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" alt="Mapa" className="w-full h-full object-cover opacity-60 mix-blend-multiply" />
               <div className="absolute inset-0 bg-verde-mata/10"></div>
               {/* Map Pin */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                 <div className="h-10 w-10 bg-marrom-terra rounded-full border-4 border-white shadow-lg flex items-center justify-center animate-bounce">
                    <Landmark className="h-5 w-5 text-pena-branca" />
                 </div>
                 <div className="mt-2 bg-white/90 backdrop-blur px-3 py-1 rounded-md shadow text-xs font-bold text-marrom-terra">
                   TUCPB
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ground Guidelines for Visitors */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-areia-suave rounded-2xl p-8 sm:p-12 border border-areia-escura">
          <div className="max-w-3xl space-y-6">
            <h3 className="font-serif text-xl font-bold text-marrom-terra flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-verde-folha" />
              Regras e Condutas para Visitantes
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              O terreiro é um templo sagrado consagrado à espiritualidade de luz. Para manter o respeito e a harmonia durante os trabalhos, todos os consulentes e visitantes devem observar as seguintes condutas:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="space-y-1">
                <h4 className="font-bold text-xs uppercase tracking-wider text-marrom-terra">1. Vestimenta</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Vista roupas claras (branco ou bege são os mais indicados). Não são permitidas roupas curtas, decotes excessivos, shorts curtos ou saias curtas de assistência.
                </p>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-xs uppercase tracking-wider text-marrom-terra">2. Silêncio e Respeito</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Mantenha silêncio absoluto no salão de assistência. Desligue ou silencie telefones celulares. A concentração mental ajuda na captação das energias fluidoterapêuticas do passe.
                </p>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-xs uppercase tracking-wider text-marrom-terra">3. Crianças e Animais</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Crianças de colo são bem-vindas, mas pedimos atenção para manter a calmaria do salão. Por motivos de segurança espiritual, animais domésticos não devem entrar no barracão principal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
