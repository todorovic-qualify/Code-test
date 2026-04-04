"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Anruf kommt rein",
    desc: "Ein Kunde ruft an. Du bist gerade im Termin, auf der Baustelle oder im Feierabend.",
    visual: (
      <div className="glass rounded-xl p-4 max-w-[220px]">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00D4A0]/20 to-[#00D4A0]/5 border border-[#00D4A0]/20 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00D4A0" strokeWidth="2" strokeLinecap="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.11 2 2 0 0 1 4.11 2h3" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-white">Eingehender Anruf</p>
            <p className="text-[10px] text-white/30">+49 176 •••• ••••</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 bg-[#00D4A0] text-[#050914] text-[10px] font-bold py-1.5 rounded-lg text-center">KI nimmt an</div>
        </div>
      </div>
    ),
  },
  {
    num: "02",
    title: "KI übernimmt",
    desc: "Dein Assistent begrüßt den Kunden professionell, stellt Fragen und transkribiert alles live.",
    visual: (
      <div className="glass rounded-xl p-4 max-w-[220px]">
        <div className="flex items-center gap-2 mb-3">
          <span className="pulse-dot" />
          <span className="text-[10px] text-[#00D4A0] font-semibold">Live Transkription</span>
        </div>
        <div className="space-y-2 text-[10px]">
          <div className="bg-white/[0.03] rounded-lg p-2 border-l-2 border-[#00D4A0]/40">
            <span className="text-white/30">KI:</span>
            <span className="text-white/60 ml-1">&quot;Guten Tag! Wie kann ich Ihnen helfen?&quot;</span>
          </div>
          <div className="bg-white/[0.03] rounded-lg p-2 border-l-2 border-purple-400/40">
            <span className="text-white/30">Kunde:</span>
            <span className="text-white/60 ml-1">&quot;Ich brauche ein Angebot für...&quot;</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    num: "03",
    title: "Lead qualifiziert",
    desc: "Der Assistent erkennt automatisch, ob der Lead relevant ist und ordnet ihn ein.",
    visual: (
      <div className="glass rounded-xl p-4 max-w-[220px]">
        <div className="text-[10px] text-white/30 mb-3 uppercase tracking-wider font-semibold">Lead Score</div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-full border-2 border-[#00D4A0] flex items-center justify-center">
            <span className="text-lg font-black text-[#00D4A0]">92</span>
          </div>
          <div>
            <p className="text-xs font-semibold text-white">Hoch qualifiziert</p>
            <p className="text-[10px] text-[#00D4A0]">→ Sofort weiterleiten</p>
          </div>
        </div>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={`flex-1 h-1.5 rounded-full ${i <= 4 ? "bg-[#00D4A0]" : "bg-white/10"}`} />
          ))}
        </div>
      </div>
    ),
  },
  {
    num: "04",
    title: "Termin gebucht",
    desc: "Bei qualifizierten Leads wird direkt ein Termin in deinen Kalender eingetragen.",
    visual: (
      <div className="glass rounded-xl p-4 max-w-[220px]">
        <div className="flex items-center gap-2 mb-3">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D4A0" strokeWidth="2" strokeLinecap="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
          <span className="text-xs font-semibold text-[#00D4A0]">Termin bestätigt</span>
        </div>
        <div className="bg-white/[0.03] rounded-lg p-3 text-[10px] space-y-1.5">
          <div className="flex justify-between">
            <span className="text-white/30">Datum</span>
            <span className="text-white/70 font-medium">Mo, 14. April</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/30">Uhrzeit</span>
            <span className="text-white/70 font-medium">14:30 Uhr</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/30">Kunde</span>
            <span className="text-white/70 font-medium">Müller GmbH</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function LiveDemo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 px-4" ref={ref}>
      <div className="divider" />
      <div className="orb-teal left-1/2 -translate-x-1/2 top-0" />

      <div className="relative z-10 max-w-6xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="section-label mb-4">So funktioniert&apos;s</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mt-5 mb-5">
            Von Anruf zu Termin{" "}
            <span className="text-gradient">in Sekunden</span>
          </h2>
          <p className="text-white/35 max-w-lg mx-auto text-base">
            Vier Schritte. Null manueller Aufwand. Alles automatisch.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-6 h-[2px] bg-gradient-to-r from-white/10 to-transparent z-20" />
              )}

              <div className="text-center mb-6">
                <span className="text-5xl font-black text-white/[0.04]">{step.num}</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2 text-center">{step.title}</h3>
              <p className="text-xs text-white/35 text-center mb-6 leading-relaxed">{step.desc}</p>

              {/* Visual card */}
              <div className="flex justify-center float">{step.visual}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
