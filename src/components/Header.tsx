/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Home, Compass, Users, GraduationCap, Calendar, Menu, X, ShieldAlert } from "lucide-react";
import Logo from "./Logo";

interface HeaderProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
}

export default function Header({ currentRoute, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Gongá (Home)", hash: "#home", icon: Home },
    { label: "Trajetória", hash: "#trajetoria", icon: Compass },
    { label: "Área de Membros", hash: "#integrantes", icon: Users },
    { label: "Portal de Estudos", hash: "#portal", icon: GraduationCap },
    { label: "Agenda de Giras", hash: "#agenda", icon: Calendar },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-areia-escura bg-verde-mata/95 backdrop-blur shadow-md">
      <div className="mx-auto flex max-w-7xl h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo and Brand Name */}
        <div 
          onClick={() => { onNavigate("#home"); window.location.hash = "#home"; }} 
          className="flex items-center gap-3 cursor-pointer group"
          id="logo-container"
        >
          <Logo className="h-14 w-14" />
          
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-wider text-pena-branca sm:text-xl leading-tight">
              TUCPB
            </span>
            <span className="text-[10px] sm:text-xs font-mono tracking-widest text-areia-escura uppercase">
              Caboclo Pena Branca
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1" id="desktop-nav">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = currentRoute === item.hash || (currentRoute === "" && item.hash === "#home");
            return (
              <a
                key={item.hash}
                href={item.hash}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.hash);
                  window.location.hash = item.hash;
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 ${
                  isActive
                    ? "bg-marrom-terra text-pena-branca shadow-inner font-semibold"
                    : "text-areia-escura hover:bg-verde-folha hover:text-pena-branca"
                }`}
                id={`nav-item-${item.hash.substring(1)}`}
              >
                <IconComponent className="h-4 w-4" />
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-areia-escura hover:bg-verde-folha hover:text-pena-branca focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded="false"
            id="mobile-menu-btn"
          >
            <span className="sr-only">Abrir menu</span>
            {isMobileMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-verde-mata-dark border-t border-verde-folha" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-4 sm:px-3">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = currentRoute === item.hash || (currentRoute === "" && item.hash === "#home");
              return (
                <a
                  key={item.hash}
                  href={item.hash}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.hash);
                    window.location.hash = item.hash;
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? "bg-marrom-terra text-pena-branca"
                      : "text-areia-escura hover:bg-verde-folha hover:text-pena-branca"
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
