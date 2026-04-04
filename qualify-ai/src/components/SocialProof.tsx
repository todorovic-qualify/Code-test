"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  "AT Energiekonzepte",
  "SolarTech Pro",
  "Weber Heizung & Sanitär",
  "Dr. Schmidt Praxis",
  "Immobilien Meyer",
  "BauerBau GmbH",
  "Versicherung Plus",
  "Elektro Hoffmann",
];

/* Double so the ticker seamlessly loops */
const doubled  = [...clients, ...clients];
const reversed = [...clients].reverse();
const doubledR = [...reversed, ...reversed];

export default function SocialProof() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section ref={ref} className="relative py-14 overflow-hidden" style={{ background: "rgba(0,212,160,0.015)" }}>
      {/* Faint teal line at top/bottom edges to separate section visually */}
      <div className="absolute top-0 inset-x-0 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,160,0.12), transparent)" }} />
      <div className="absolute bottom-0 inset-x-0 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,160,0.08), transparent)" }} />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 px-4"
      >
        <p className="text-[11px] uppercase tracking-[0.22em] font-semibold" style={{ color: "rgba(255,255,255,0.18)" }}>
          Vertraut von <span style={{ color: "rgba(0,212,160,0.5)" }}>50+</span> Betrieben in DACH
        </p>
      </motion.div>

      {/* Forward ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="relative mb-3"
      >
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        <div className="ticker-inner">
          {doubled.map((client, i) => (
            <div key={`${client}-${i}`} className="flex items-center gap-2.5 px-7 py-2 flex-shrink-0">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(0,212,160,0.06)", border: "1px solid rgba(0,212,160,0.1)" }}>
                <span className="text-[10px] font-bold" style={{ color: "#00D4A0" }}>{client[0]}</span>
              </div>
              <span className="text-[13px] font-medium whitespace-nowrap" style={{ color: "rgba(255,255,255,0.22)" }}>
                {client}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Reverse ticker (opposite direction, slower, dimmer) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="relative"
      >
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        {/* Reverse ticker uses a negative translateX animation direction */}
        <div className="ticker-inner-reverse">
          {doubledR.map((client, i) => (
            <div key={`rev-${client}-${i}`} className="flex items-center gap-2.5 px-7 py-2 flex-shrink-0">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.04)" }}>
                <span className="text-[10px] font-bold text-white/20">{client[0]}</span>
              </div>
              <span className="text-[12px] font-medium whitespace-nowrap" style={{ color: "rgba(255,255,255,0.12)" }}>
                {client}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
