/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Clock, Mail, Heart, HelpCircle } from "lucide-react";
import Logo from "./Logo";

interface FooterProps {
  onNavigate: (route: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-marrom-terra text-areia-suave border-t-4 border-verde-folha" id="main-footer">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Brand & Spiritual message */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <Logo className="h-10 w-10" />
              <span className="font-serif text-lg font-bold tracking-wider text-pena-branca">
                TUCPB
              </span>
            </div>
            <p className="text-sm text-areia-escura max-w-md leading-relaxed">
              &ldquo;A Umbanda é a manifestação do espírito para a caridade.&rdquo; <br />
              <span className="text-xs text-marrom-claro italic font-semibold">— Caboclo das Sete Encruzilhadas (através de Zélio Fernandino de Moraes)</span>
            </p>
            <p className="text-xs text-areia-escura/80 leading-relaxed">
              O Templo Umbandista Caboclo Pena Branca (TUCPB) baseia seus trabalhos no amor, na humildade, no respeito à natureza e na caridade espiritual totalmente gratuita.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-pena-branca border-b border-marrom-tronco pb-2">
              Navegação
            </h3>
            <ul className="space-y-2 text-sm text-areia-escura">
              <li>
                <a
                  href="#home"
                  onClick={(e) => { e.preventDefault(); onNavigate("#home"); window.location.hash = "#home"; }}
                  className="hover:text-pena-branca hover:underline transition-all"
                >
                  Página Principal (Gongá)
                </a>
              </li>
              <li>
                <a
                  href="#trajetoria"
                  onClick={(e) => { e.preventDefault(); onNavigate("#trajetoria"); window.location.hash = "#trajetoria"; }}
                  className="hover:text-pena-branca hover:underline transition-all"
                >
                  História e Dirigente
                </a>
              </li>
              <li>
                <a
                  href="#integrantes"
                  onClick={(e) => { e.preventDefault(); onNavigate("#integrantes"); window.location.hash = "#integrantes"; }}
                  className="hover:text-pena-branca hover:underline transition-all"
                >
                  Área de Integrantes
                </a>
              </li>
              <li>
                <a
                  href="#portal"
                  onClick={(e) => { e.preventDefault(); onNavigate("#portal"); window.location.hash = "#portal"; }}
                  className="hover:text-pena-branca hover:underline transition-all"
                >
                  Estudos, Vídeos e Blog
                </a>
              </li>
              <li>
                <a
                  href="#agenda"
                  onClick={(e) => { e.preventDefault(); onNavigate("#agenda"); window.location.hash = "#agenda"; }}
                  className="hover:text-pena-branca hover:underline transition-all"
                >
                  Agenda de Giras
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Location and Schedule Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-pena-branca border-b border-marrom-tronco pb-2">
              Informações
            </h3>
            <ul className="space-y-3 text-sm text-areia-escura">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-verde-folha shrink-0" />
                <a 
                  href="https://maps.app.goo.gl/JjXBzkLqysP7xufq9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-verde-folha transition-colors"
                >
                  Rua Caçapava, Qd 03, Lt 25, Casa 02 <br />
                  Jardim Zuleika - Luziânia, GO<br />
                  CEP: 72850-615
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 text-verde-folha shrink-0" />
                <span>
                  Segundas às 18h <br />
                  Sábados (quinzenalmente) às 19h
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-verde-folha shrink-0" />
                <span className="break-all text-xs">baba.ajo.tucpb@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-marrom-tronco pt-8 text-center text-xs text-areia-escura/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            &copy; {currentYear} Templo Umbandista Caboclo Pena Branca - TUCPB. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1">
            Feito com fé, caridade e <Heart className="h-3 w-3 text-red-500 fill-red-500" /> para a comunidade.
          </p>
        </div>
      </div>
    </footer>
  );
}
