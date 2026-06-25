/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Trajetoria from "./pages/Trajetoria";
import Integrantes from "./pages/Integrantes";
import Portal from "./pages/Portal";
import Agenda from "./pages/Agenda";

import Admin from "./pages/Admin";

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>("#home");

  // Sync state with browser hash on load and changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || "#home";
      setCurrentRoute(hash);
      // Automatically scroll to top on page transition for comfortable UX
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Initial setup
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavigate = (route: string) => {
    setCurrentRoute(route);
  };

  // Switch renderer based on hash route
  const renderPageContent = () => {
    switch (currentRoute) {
      case "#home":
      case "#":
        return <Home onNavigate={handleNavigate} />;
      case "#trajetoria":
        return <Trajetoria />;
      case "#integrantes":
        return <Integrantes />;
      case "#portal":
        return <Portal />;
      case "#agenda":
        return <Agenda />;
      case "#admin":
        return <Admin />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-areia-suave" id="app-wrapper">
      {/* Global Sticky Header */}
      <Header currentRoute={currentRoute} onNavigate={handleNavigate} />

      {/* Main Page Area with Route transitions using motion/react */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRoute}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            id="page-transition-container"
          >
            {renderPageContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Fixed Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
