"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#475569" strokeWidth="1.5">
        <rect x="6" y="4" width="20" height="24" rx="3"/>
        <path d="M11 12h10M11 16h10M11 20h6"/>
        <circle cx="24" cy="24" r="6" fill="white" stroke="#475569"/>
        <path d="M22 24l1.5 1.5L26 22" strokeLinecap="round"/>
      </svg>
    ),
    title: "Anrufe werden automatisch angenommen",
    desc: "Kein Kunde wartet mehr – auch wenn Sie gerade im Termin sind.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#475569" strokeWidth="1.5">
        <path d="M16 4L4 10v12l12 6 12-6V10L16 4z"/>
        <path d="M4 10l12 6 12-6"/>
        <path d="M16 16v10"/>
      </svg>
    ),
    title: "Anfragen werden vorqualifiziert",
    desc: "Sie sprechen nur noch mit Kunden, die wirklich kaufen wollen.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#475569" strokeWidth="1.5">
        <rect x="4" y="6" width="24" height="22" rx="3"/>
        <path d="M4 12h24"/>
        <path d="M10 4v4M22 4v4"/>
        <rect x="10" y="18" width="4" height="4" rx="1"/>
        <rect x="18" y="18" width="4" height="4" rx="1"/>
      </svg>
    ),
    title: "Termine werden direkt gebucht",
    desc: "Ihr Kalender füllt sich automatisch – ohne Hin und Her.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#475569" strokeWidth="1.5">
        <circle cx="16" cy="16" r="12"/>
        <path d="M12 16l3 3 5-6"/>
        <path d="M16 4v4M16 24v4M4 16H8M24 16h4"/>
      </svg>
    ),
    title: "Individuelle Automatisierungen",
    desc: "Ihr Assistent übernimmt Rechnungen, E-Mails und mehr – automatisch.",
  },
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4 gradient-section" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="inline-block text-xs font-semibold bg-lime-100 text-lime-700 px-3 py-1 rounded-full mb-4">
            Assistent
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            So arbeitet dein KI-Assistent im Hintergrund für dich
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm">
            Die meisten Betriebe merken gar nicht, wie viele Kunden sie täglich verlieren...
            bis sie einmal sehen, wie viele Anrufe unbeantwortet bleiben.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 mt-12">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="card-hover bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-slate-500 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
