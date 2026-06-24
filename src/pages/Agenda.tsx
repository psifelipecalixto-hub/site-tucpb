/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { Calendar, Clock, Landmark, Heart, User, Sparkles, Check, AlertCircle, FileText, ChevronRight } from "lucide-react";
import { initialGiras } from "../data";
import { GiraEvent } from "../types";

export default function Agenda() {
  const [girasList] = useState<GiraEvent[]>(initialGiras);
  
  // Booking Form States
  const [selectedGiraId, setSelectedGiraId] = useState<string>(initialGiras[0].id);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consultationType, setConsultationType] = useState("Conselhos / Passes Gerais");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState("");
  const [queueNumber, setQueueNumber] = useState(0);

  const handleBooking = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      alert("Por favor, preencha todos os campos do agendamento.");
      return;
    }

    // Generate simulated ticket
    const randomTicket = "TUCPB-" + Math.floor(100000 + Math.random() * 900000);
    const randomQueue = Math.floor(15 + Math.random() * 45); // Queue number simulation
    
    setTicketNumber(randomTicket);
    setQueueNumber(randomQueue);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setConsultationType("Conselhos / Passes Gerais");
    setIsSubmitted(false);
  };

  // Find currently selected gira details for the ticket summary
  const selectedGira = girasList.find(g => g.id === selectedGiraId);

  return (
    <div className="animate-fade-in space-y-16 pb-16" id="agenda-page">
      
      {/* Intro Banner */}
      <section className="bg-gradient-to-b from-verde-mata to-verde-folha py-12 text-center text-pena-branca px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="mx-auto max-w-4xl space-y-3">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-pena-branca/10 text-areia-escura mb-1">
            <Calendar className="h-6 w-6" />
          </div>
          <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Giras & Agendamentos
          </h1>
          <p className="mx-auto max-w-2xl text-xs sm:text-sm text-areia-escura font-light leading-relaxed">
            Consulte o cronograma de trabalhos espirituais de sábado e solicite sua ficha de consulta fraterna gratuita.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column Left: Schedule Giras (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-marrom-terra border-l-4 border-verde-folha pl-4">
              Cronograma de Sábado
            </h2>
            <p className="text-sm text-gray-600">
              As sessões de caridade pública ocorrem regularmente nos fins de semana. Chegue no horário para garantir a sua acomodação na assistência e harmonização espiritual:
            </p>

            <div className="space-y-4" id="giras-list">
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

                  {gira.hasConsultation && (
                    <button
                      onClick={() => setSelectedGiraId(gira.id)}
                      className={`shrink-0 text-xs font-semibold px-4 py-2 rounded-lg border transition-all w-full sm:w-auto text-center ${
                        selectedGiraId === gira.id
                          ? "bg-verde-folha border-verde-folha text-white shadow-sm"
                          : "border-areia-escura text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {selectedGiraId === gira.id ? "Selecionada" : "Agendar Ficha"}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Column Right: Interactive Booking Form (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-areia-escura p-6 sm:p-8 shadow-sm space-y-6">
            {!isSubmitted ? (
              <>
                <div className="space-y-2 border-b border-areia-escura pb-4">
                  <h3 className="font-serif text-xl font-bold text-marrom-terra">
                    Ficha de Consulta Gratuita
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Evite filas preenchendo sua reserva de atendimento fraterno antecipada. A caridade do TUCPB é totalmente sem custos.
                  </p>
                </div>

                <form onSubmit={handleBooking} className="space-y-4" id="booking-form">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-gray-700 block">Selecione a Gira Desejada</label>
                    <select
                      value={selectedGiraId}
                      onChange={(e) => setSelectedGiraId(e.target.value)}
                      className="w-full px-3 py-2 border border-areia-escura bg-areia-suave text-xs sm:text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-verde-folha"
                    >
                      {girasList.filter(g => g.hasConsultation).map((g) => (
                        <option key={g.id} value={g.id}>{g.title} ({g.date})</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-gray-700 block">Nome Completo do Consulente</label>
                    <input
                      type="text"
                      placeholder="Seu nome"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3 py-2 border border-areia-escura bg-areia-suave text-xs sm:text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-verde-folha text-gray-900"
                      id="book-fullname"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-gray-700 block">E-mail para Contato</label>
                    <input
                      type="email"
                      placeholder="Ex: consulente@email.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-areia-escura bg-areia-suave text-xs sm:text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-verde-folha text-gray-900"
                      id="book-email"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-gray-700 block">Telefone / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="Ex: (83) 99999-0000"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 border border-areia-escura bg-areia-suave text-xs sm:text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-verde-folha text-gray-900"
                      id="book-phone"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-gray-700 block">Tipo de Orientação Necessária</label>
                    <select
                      value={consultationType}
                      onChange={(e) => setConsultationType(e.target.value)}
                      className="w-full px-3 py-2 border border-areia-escura bg-areia-suave text-xs sm:text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-verde-folha"
                      id="book-type"
                    >
                      <option value="Conselhos / Passes Gerais">Conselhos / Passes Gerais (Família, Equilíbrio)</option>
                      <option value="Passe de Cura e Saúde">Passe de Cura e Saúde Física / Mental</option>
                      <option value="Desobsessão e Limpeza Astral">Desobsessão e Limpeza Astral Profunda</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-verde-mata text-pena-branca py-3 rounded-lg text-sm font-semibold hover:bg-verde-folha shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    id="submit-booking-btn"
                  >
                    Confirmar Ficha de Atendimento
                    <Check className="h-4 w-4" />
                  </button>
                </form>
              </>
            ) : (
              /* Simulated Ticket Voucher Result */
              <div className="space-y-6 animate-fade-in-quick">
                <div className="text-center space-y-2 border-b border-areia-escura pb-4">
                  <div className="mx-auto h-12 w-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-gray-900">Agendamento Realizado!</h3>
                  <p className="text-xs text-gray-500">Salve o comprovante abaixo e apresente-o na entrada do terreiro.</p>
                </div>

                {/* Printable styled Ticket Voucher */}
                <div className="bg-[#fcfbfa] border-2 border-dashed border-marrom-claro/50 rounded-xl p-5 space-y-4 shadow-inner relative overflow-hidden">
                  {/* Circle cutouts for vintage tickets effect */}
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white border border-marrom-claro/20 rounded-full"></div>
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white border border-marrom-claro/20 rounded-full"></div>

                  <div className="flex justify-between items-center text-[10px] font-mono text-gray-400 font-bold tracking-wider">
                    <span>TUCPB • CARIDADE</span>
                    <span>FICHA DIGITAL</span>
                  </div>

                  <div className="text-center py-2 border-y border-areia-escura">
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">Senha de Atendimento</span>
                    <span className="text-3xl font-serif font-extrabold text-marrom-terra tracking-wider">
                      Nº {queueNumber}
                    </span>
                    <span className="text-xs font-mono text-verde-folha font-bold block mt-1">
                      Código: {ticketNumber}
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <p><strong>Consulente:</strong> <span className="text-gray-700">{fullName}</span></p>
                    <p><strong>Gira:</strong> <span className="text-gray-700">{selectedGira?.title}</span></p>
                    <p><strong>Firmeza/Data:</strong> <span className="text-gray-700">{selectedGira?.date} às {selectedGira?.time}h</span></p>
                    <p><strong>Doutrina:</strong> <span className="text-gray-700">{consultationType}</span></p>
                  </div>
                </div>

                <div className="space-y-3 p-4 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800">
                  <span className="font-bold flex items-center gap-1">🙏 Preparo Espiritual Recomendado:</span>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Use roupas claras (evite vermelho, preto, roupas curtas ou transparentes).</li>
                    <li>Faça jejum de álcool e carnes 24 horas antes do início da gira.</li>
                    <li>Chegue de 20 a 30 minutos antes para recolhimento e recepção.</li>
                  </ul>
                </div>

                <button
                  onClick={handleReset}
                  className="w-full py-2.5 rounded-lg border border-marrom-terra text-marrom-terra text-xs font-semibold hover:bg-gray-50 transition-colors"
                  id="reset-booking-btn"
                >
                  Agendar Outra Ficha
                </button>
              </div>
            )}
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
