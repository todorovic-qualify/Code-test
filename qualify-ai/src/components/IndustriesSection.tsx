"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const industries = [
  {
    icon: "🔧",
    name: "Handwerker",
    result: "Nie wieder verpasste Aufträge auf der Baustelle",
    stat: "+35%",
    statLabel: "mehr Aufträge",
    features: ["Anrufe während der Arbeit", "Automatische Terminvergabe", "Rückruf-Management"],
  },
  {
    icon: "⚕️",
    name: "Ärzte & Praxen",
    result: "Entlastung für dein Praxis-Team ab Tag 1",
    stat: "90%",
    statLabel: "weniger Wartezeit",
    features: ["Patienten-Vorqualifizierung", "Rezept-Anfragen filtern", "Termin-Koordination"],
  },
  {
    icon: "🏠",
    name: "Immobilienmakler",
    result: "Kein Interessent geht mehr verloren",
    stat: "2x",
    statLabel: "mehr Besichtigungen",
    features: ["Lead-Qualifizierung", "Exposé-Versand automatisch", "Besichtigungstermine buchen"],
  },
  {
    icon: "⚡",
    name: "Energievertrieb",
    result: "After-Sales und Follow-Ups auf Autopilot",
    stat: "85%",
    statLabel: "Zeitersparnis",
    features: ["After-Sales Automation", "Lead-Reaktivierung", "Touchpoint-Sequenzen"],
  },
  {
    icon: "🛡️",
    name: "Versicherungen",
    result: "Jeder Erstkontakt wird professionell betreut",
    stat: "40%",
    statLabel: "mehr Abschlüsse",
    features: ["Bedarfsanalyse am Telefon", "Angebotserstellung", "Follow-Up Automation"],
  },
];

export default function IndustriesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="branchen" className="relative py-28 px-4" ref={ref}>
      <div className="divider" />
      <div className="orb-teal -right-40 top-0" />

      <div className="relative z-10 max-w-6xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4">Branchen</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mt-5 mb-5">
            Gebaut für{" "}
            <span className="text-gradient-purple">deine Branche</span>
          </h2>
          <p className="text-white/35 max-w-lg mx-auto text-base">
            Qualify.ai passt sich deinem Betrieb an — nicht umgekehrt.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`card-hover glass rounded-2xl p-6 ${i === 3 ? "lg:col-span-1" : ""}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{ind.icon}</span>
                <h3 className="text-base font-bold text-white">{ind.name}</h3>
              </div>
              <p className="text-sm text-white/50 mb-4">{ind.result}</p>

              {/* Stat */}
              <div className="flex items-baseline gap-2 mb-5">
                <span className="text-3xl font-black text-gradient">{ind.stat}</span>
                <span className="text-xs text-white/30">{ind.statLabel}</span>
              </div>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-2">
                {ind.features.map((f) => (
                  <span
                    key={f}
                    className="text-[10px] font-medium text-white/40 bg-white/[0.04] border border-white/[0.06] rounded-full px-3 py-1"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
