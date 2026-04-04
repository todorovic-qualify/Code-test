"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    title: "Anrufe automatisch annehmen",
    desc: "Kein Kunde wartet mehr. Dein KI-Assistent nimmt jeden Anruf entgegen – professionell, freundlich, rund um die Uhr.",
    gradient: "from-[#00D4A0] to-[#00a8f3]",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    ),
    title: "Leads vorqualifizieren",
    desc: "Unwichtige Anfragen werden rausgefiltert. Du sprichst nur noch mit Kunden, die wirklich kaufen wollen.",
    gradient: "from-[#7C3AED] to-[#a78bfa]",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
    title: "Termine direkt buchen",
    desc: "Dein Kalender füllt sich automatisch. Kein Hin- und Her-Telefonieren, kein manuelles Eintragen.",
    gradient: "from-[#f59e0b] to-[#f97316]",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Individuelle Automatisierung",
    desc: "Follow-Ups, Angebote, E-Mails – dein Assistent übernimmt repetitive Aufgaben auf Knopfdruck.",
    gradient: "from-[#ec4899] to-[#f43f5e]",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
    title: "Echtzeit-Transkription",
    desc: "Jeder Anruf wird live transkribiert und zusammengefasst. Du verpasst kein Detail, auch wenn du nicht am Telefon bist.",
    gradient: "from-[#06b6d4] to-[#0ea5e9]",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" />
      </svg>
    ),
    title: "Detaillierte Auswertungen",
    desc: "Sehe auf einen Blick, wie viele Anrufe, Leads und Termine dein Assistent generiert – in Echtzeit.",
    gradient: "from-[#00D4A0] to-[#7C3AED]",
  },
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="funktionen" className="relative py-28 px-4" ref={ref}>
      <div className="orb-purple -left-60 top-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4">Funktionen</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mt-5 mb-5">
            Alles was dein Betrieb{" "}
            <span className="text-gradient">braucht</span>
          </h2>
          <p className="text-white/35 max-w-lg mx-auto text-base">
            Ein Assistent. Sechs Superkräfte. Null Aufwand für dich.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="card-hover glass rounded-2xl p-6 group"
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                {f.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-white/35 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
