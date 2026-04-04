"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <nav
        className={`w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300 ${
          scrolled ? "bg-white/95 shadow-lg backdrop-blur-sm" : "bg-white/90 shadow-md backdrop-blur-sm"
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="17" stroke="#0f172a" strokeWidth="2" fill="white"/>
            <text x="18" y="23" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a" fontFamily="Inter, sans-serif">Q</text>
            <path d="M26 10 Q30 14 30 18 Q30 22 28 25" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <path d="M28 8 Q34 12 34 18 Q34 24 30 28" stroke="#0f172a" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5"/>
          </svg>
          <span className="text-xl font-bold text-slate-900">Qualify<span className="text-slate-400">.ai</span></span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">Startseite</a>
          <a href="#preise" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">Preise</a>
          <a href="#kontakt" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">Kontakt</a>
          <a
            href="#kontakt"
            className="text-sm font-semibold bg-slate-900 text-white px-5 py-2 rounded-full hover:bg-slate-700 transition-colors"
          >
            Demo anfragen
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block w-6 h-0.5 bg-slate-900 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}/>
          <span className={`block w-6 h-0.5 bg-slate-900 transition-all ${menuOpen ? "opacity-0" : ""}`}/>
          <span className={`block w-6 h-0.5 bg-slate-900 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}/>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-4">
          <a href="#" className="text-base font-medium text-slate-700" onClick={() => setMenuOpen(false)}>Startseite</a>
          <a href="#preise" className="text-base font-medium text-slate-700" onClick={() => setMenuOpen(false)}>Preise</a>
          <a href="#kontakt" className="text-base font-medium text-slate-700" onClick={() => setMenuOpen(false)}>Kontakt</a>
          <a
            href="#kontakt"
            className="text-center text-base font-semibold bg-slate-900 text-white px-5 py-3 rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            Demo anfragen
          </a>
        </div>
      )}
    </header>
  );
}
