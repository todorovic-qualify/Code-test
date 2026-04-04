"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "./CountUp";

const industries = [
  { icon: "🔧", name: "Handwerker",        stat: 35, unit: "%",  label: "mehr Aufträge",     desc: "Kein Auftrag geht mehr verloren, während du auf der Baustelle bist." },
  { icon: "⚕️", name: "Ärzte & Praxen",   stat: 90, unit: "%",  label: "weniger Wartezeit", desc: "Patienten-Anrufe automatisch annehmen, kategorisieren, weiterleiten." },
  { icon: "🏠", name: "Immobilienmakler", stat: 2,  unit: "x",  label: "mehr Besichtigungen",desc: "Kein Interessent geht verloren — der Assistent qualifiziert sofort." },
  { icon: "⚡", name: "Energievertrieb",  stat: 85, unit: "%",  label: "Zeitersparnis",     desc: "After-Sales, Lead-Reaktivierung und Follow-Ups vollautomatisch." },
  { icon: "🛡️", name: "Versicherungen",   stat: 40, unit: "%",  label: "mehr Abschlüsse",   desc: "Jeder Erstkontakt wird professionell betreut — rund um die Uhr." },
];

export default function IndustriesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="branchen" className="relative py-32 px-4 overflow-hidden" ref={ref}>
      <div className="divider" />
      <div className="orb orb-teal w-[400px] h-[400px] -right-20 top-20" />

      <div className="relative z-10 max-w-6xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="section-label mb-5 inline-block">Branchen</span>
          <h2 className="text-[clamp(36px,6vw,72px)] font-black leading-[0.9] mt-5 mb-5">
            Gebaut für<br />
            <span className="text-gradient">deine Branche.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-2xl p-6 group hover:border-[#00D4A0]/20 transition-colors duration-300 cursor-none"
            >
              <div className="text-3xl mb-4">{ind.icon}</div>
              <h3 className="text-base font-bold text-white mb-2">{ind.name}</h3>
              <p className="text-sm text-white/30 mb-6 leading-relaxed">{ind.desc}</p>
              <div className="flex items-baseline gap-1.5">
                <span className="text-4xl font-black text-gradient">
                  <CountUp target={ind.stat} suffix={ind.unit} />
                </span>
                <span className="text-xs text-white/25">{ind.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
