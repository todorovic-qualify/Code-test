"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`w-full max-w-6xl flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${
          scrolled
            ? "bg-[#0a1020]/80 shadow-2xl shadow-black/30 border border-white/[0.06] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          {/* SVG logo — recreated from brand assets */}
          <svg
            width="38" height="38" viewBox="0 0 100 100" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-opacity group-hover:opacity-90"
          >
            <defs>
              <linearGradient id="qWave" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#00c3f0" />
                <stop offset="100%" stopColor="#00D4A0" />
              </linearGradient>
            </defs>

            {/* Outer arc (Q ring 1) — gap at upper-right ~35°–70° */}
            <path
              d="M 84.6 33.3 A 40 40 0 1 1 69.9 14.2"
              stroke="white" strokeWidth="5.5" strokeLinecap="round"
            />
            {/* Middle arc (Q ring 2) */}
            <path
              d="M 75.2 36.7 A 30 30 0 1 1 64.2 22.4"
              stroke="white" strokeWidth="5" strokeLinecap="round" strokeOpacity="0.82"
            />
            {/* Inner arc (Q ring 3) */}
            <path
              d="M 65.8 40.2 A 20 20 0 1 1 58.5 30.6"
              stroke="white" strokeWidth="4.5" strokeLinecap="round" strokeOpacity="0.65"
            />

            {/* Q tail — diagonal descender lower-right */}
            <line
              x1="77" y1="73" x2="91" y2="88"
              stroke="white" strokeWidth="5.5" strokeLinecap="round"
            />

            {/* Waveform bars (teal→cyan gradient) */}
            <rect x="32" y="43" width="3.5" height="8"  rx="1.75" fill="url(#qWave)" />
            <rect x="37" y="39" width="3.5" height="16" rx="1.75" fill="url(#qWave)" />
            <rect x="42" y="36" width="3.5" height="22" rx="1.75" fill="url(#qWave)" />
            <rect x="47" y="34" width="3.5" height="26" rx="1.75" fill="url(#qWave)" />
            <rect x="52" y="37" width="3.5" height="20" rx="1.75" fill="url(#qWave)" />
            <rect x="57" y="41" width="3.5" height="12" rx="1.75" fill="url(#qWave)" />
            <rect x="62" y="44" width="3.5" height="6"  rx="1.75" fill="url(#qWave)" />
          </svg>

          <span className="text-lg font-bold text-white">
            Qualify<span className="text-[#00D4A0]">.ai</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {["Funktionen", "Branchen", "Preise"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[13px] font-medium text-white/50 hover:text-white transition-colors duration-200"
            >
              {item}
            </a>
          ))}
          <a
            href="#kontakt"
            className="btn-teal text-[13px] px-5 py-2"
          >
            Demo anfragen
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-5 h-[1.5px] bg-white/70 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-white/70 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-white/70 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-[72px] left-4 right-4 glass-strong rounded-2xl p-6 flex flex-col gap-4"
        >
          {["Funktionen", "Branchen", "Preise"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/60 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#kontakt"
            className="btn-teal text-center text-sm px-5 py-3"
            onClick={() => setMenuOpen(false)}
          >
            Demo anfragen
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
