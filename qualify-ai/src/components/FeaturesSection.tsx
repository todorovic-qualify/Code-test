"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TiltCard from "./TiltCard";

const features = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.9 13.65 19.79 19.79 0 0 1 2 5.07 2 2 0 0 1 3.9 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 18z"/></svg>,
    color: "#00D4A0",
    title: "Anrufe automatisch annehmen",
    desc: "Kein Kunde wartet mehr. Jeder Anruf wird professionell entgegengenommen — auch wenn du gerade im Termin bist.",
    dir: -1,
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>,
    color: "#7C3AED",
    title: "Leads vorqualifizieren",
    desc: "Unwichtige Anfragen werden rausgefiltert. Du sprichst nur noch mit echten Kaufinteressenten.",
    dir: 1,
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    color: "#f97316",
    title: "Termine direkt buchen",
    desc: "Dein Kalender füllt sich automatisch. Kein manuelles Eintragen, kein Hin-und-Her am Telefon.",
    dir: -1,
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>,
    color: "#00c3f0",
    title: "Echtzeit-Transkription",
    desc: "Jeder Anruf wird live transkribiert und zusammengefasst. Du verpasst kein Detail.",
    dir: 1,
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
    color: "#ec4899",
    title: "Individuelle Automatisierungen",
    desc: "Follow-Ups, Angebote, Rechnungen, E-Mails — dein Assistent übernimmt alles Repetitive.",
    dir: -1,
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>,
    color: "#fbbf24",
    title: "Echtzeit-Auswertungen",
    desc: "Sieh auf einen Blick, wie viele Anrufe, Leads und Termine dein Assistent täglich generiert.",
    dir: 1,
  },
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="funktionen" className="relative py-32 px-4 overflow-hidden" ref={ref}>
      <div className="orb orb-purple w-[500px] h-[500px] -left-40 top-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="section-label mb-5 inline-block">Funktionen</span>
          <h2 className="text-[clamp(36px,6vw,72px)] font-black leading-[0.9] mt-5 mb-5">
            Alles was dein<br />
            <span className="text-gradient">Betrieb braucht.</span>
          </h2>
          <p className="text-white/30 max-w-md mx-auto">Ein Assistent. Sechs Superkräfte. Null manueller Aufwand.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, x: f.dir * 60, y: 30 }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard className="glass-card rounded-2xl p-6 h-full group cursor-none" intensity={6}>
                {/* Glow on hover via color */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 text-white transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${f.color}18`,
                    border: `1px solid ${f.color}30`,
                    boxShadow: `0 0 20px ${f.color}20`,
                    color: f.color,
                  }}
                >
                  {f.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-white/30 leading-relaxed">{f.desc}</p>

                {/* Teal line bottom on hover */}
                <div className="mt-5 h-[1px] w-0 group-hover:w-full transition-all duration-500 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${f.color}60, transparent)` }} />
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
