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
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00D4A0] to-[#00a8f3] flex items-center justify-center shadow-lg shadow-[#00D4A0]/20 group-hover:shadow-[#00D4A0]/40 transition-shadow">
            <span className="text-[#050914] font-black text-sm">Q</span>
          </div>
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
