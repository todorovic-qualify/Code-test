"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import CountUp from "./CountUp";

const industries = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    name: "Handwerker",
    stat: 35, unit: "%", label: "mehr Aufträge",
    color: "#00D4A0",
    desc: "Kein Auftrag geht mehr verloren, während du auf der Baustelle bist. Jeder Anruf wird angenommen, qualifiziert und nachgefasst — bis zum Auftrag.",
    sample: { caller: "Neukundenanfrage", action: "Angebot angefragt", result: "Termin Mo 10:00" },
    journey: [
      { step: "Anruf", detail: "Angenommen" },
      { step: "Angebot", detail: "Verschickt" },
      { step: "Follow-up", detail: "Tag 3" },
      { step: "Auftrag", detail: "Bestätigt" },
      { step: "⭐ Bewertung", detail: "Automatisch" },
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    name: "Ärzte & Praxen",
    stat: 90, unit: "%", label: "weniger Wartezeit",
    color: "#00c3f0",
    desc: "Patienten-Anrufe automatisch annehmen, kategorisieren und weiterleiten. Erinnerungen, Recall-Kampagnen und Bewertungen vollautomatisch.",
    sample: { caller: "Terminanfrage", action: "Dringlichkeit erkannt", result: "Notfall priorisiert" },
    journey: [
      { step: "Termin", detail: "Gebucht" },
      { step: "Erinnerung", detail: "24h vorher" },
      { step: "Recall", detail: "Nach 6 Mon." },
      { step: "Feedback", detail: "Automatisch" },
      { step: "⭐ Bewertung", detail: "Gesichert" },
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    name: "Immobilienmakler",
    stat: 2, unit: "x", label: "mehr Besichtigungen",
    color: "#7C3AED",
    desc: "Kein Interessent geht verloren — der Assistent qualifiziert sofort, bucht Besichtigungen und fasst automatisch nach bis zum Abschluss.",
    sample: { caller: "Kaufinteressent", action: "Budget qualifiziert", result: "Besichtigung Di 15:00" },
    journey: [
      { step: "Anfrage", detail: "Qualifiziert" },
      { step: "Besichtigung", detail: "Gebucht" },
      { step: "Follow-up", detail: "Tag 2" },
      { step: "Angebot", detail: "Unterbreitet" },
      { step: "⭐ Bewertung", detail: "Nach Abschluss" },
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    name: "Energievertrieb",
    stat: 85, unit: "%", label: "Zeitersparnis",
    color: "#fbbf24",
    desc: "Im PV-Vertrieb braucht ein Kunde Ø 10–12 Kontaktpunkte bis zum Abschluss. Qualify.ai übernimmt jeden einzelnen — vollautomatisch.",
    sample: { caller: "PV-Interessent", action: "10–12 Touchpoints", result: "Abschluss + Bewertung" },
    journey: [
      { step: "Erstkontakt", detail: "KI-Anruf" },
      { step: "Follow-up 1–4", detail: "SMS & Mail" },
      { step: "Follow-up 5–8", detail: "Anruf & Mail" },
      { step: "Abschluss", detail: "Touchpoint 12" },
      { step: "⭐ Bewertung", detail: "Automatisch" },
    ],
    highlight: "Ø 10–12 Touchpoints bis zum Abschluss — alle automatisch.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    name: "Versicherungen",
    stat: 40, unit: "%", label: "mehr Abschlüsse",
    color: "#ec4899",
    desc: "Jeder Erstkontakt wird professionell betreut — rund um die Uhr. Follow-ups, Angebote und Bewertungen vollautomatisch.",
    sample: { caller: "Neuinteressent", action: "Bedarf analysiert", result: "Beratung gebucht" },
    journey: [
      { step: "Erstberatung", detail: "Gebucht" },
      { step: "Follow-up", detail: "Tag 5" },
      { step: "Angebot", detail: "Nachgefasst" },
      { step: "Abschluss", detail: "Gesichert" },
      { step: "⭐ Bewertung", detail: "Automatisch" },
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
    name: "Restaurants & Gastronomie",
    stat: 98, unit: "%", label: "keine verpassten Anrufe",
    color: "#f97316",
    desc: "Im Stress klingelt das Telefon — und Reservierungen gehen verloren. Qualify.ai nimmt jeden Anruf an, erfasst Reservierungen und beantwortet Fragen automatisch, wie ein echter Mitarbeiter.",
    sample: { caller: "Tischreservierung", action: "Datum & Gästezahl erfasst", result: "Bestätigung per SMS" },
    journey: [
      { step: "Anruf", detail: "Angenommen" },
      { step: "Reservierung", detail: "Eingetragen" },
      { step: "Bestätigung", detail: "Per SMS" },
      { step: "Erinnerung", detail: "1 Tag vorher" },
      { step: "⭐ Bewertung", detail: "Nach Besuch" },
    ],
  },
];

export default function IndustriesSection() {
  const ref          = useRef(null);
  const inView       = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  const ind = industries[active];

  return (
    <section
      id="branchen"
      ref={ref}
      className="relative py-32 px-4 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #000000 0%, #04060f 50%, #000000 100%)" }}
    >
      <div className="orb orb-teal   w-[400px] h-[400px] -right-20 top-20" />
      <div className="orb orb-purple w-[300px] h-[300px]  left-0    bottom-20" />

      {/* Signal divider */}
      <div className="absolute top-0 inset-x-0 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,160,0.1), transparent)" }} />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-5 inline-block">Branchen</span>
          <h2 className="text-[clamp(36px,6vw,72px)] font-black leading-[0.9] mt-5 mb-5">
            Gebaut für<br />
            <span className="text-gradient">deine Branche.</span>
          </h2>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.28)" }}>
            Wähle deine Branche und sieh, was Qualify.ai konkret für dich tut.
          </p>
        </motion.div>

        {/* Tab strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {industries.map((ind, i) => (
            <button
              key={ind.name}
              onClick={() => setActive(i)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-none"
              style={{
                background: active === i ? `${ind.color}18` : "rgba(255,255,255,0.03)",
                border: `1px solid ${active === i ? ind.color + "40" : "rgba(255,255,255,0.07)"}`,
                color: active === i ? ind.color : "rgba(255,255,255,0.35)",
                boxShadow: active === i ? `0 0 20px ${ind.color}18` : "none",
              }}
            >
              <span style={{ color: active === i ? ind.color : "rgba(255,255,255,0.3)" }}>{ind.icon}</span>
              {ind.name}
            </button>
          ))}
        </motion.div>

        {/* Active panel — 2-column feature view */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0,  scale: 1    }}
            exit   ={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl overflow-hidden"
            style={{
              background: "rgba(5,10,24,0.8)",
              border: `1px solid ${ind.color}20`,
              boxShadow: `0 0 60px ${ind.color}08`,
            }}
          >
            <div className="grid lg:grid-cols-2">
              {/* Left — content */}
              <div className="p-8 lg:p-10">
                {/* Icon + name */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${ind.color}14`, border: `1px solid ${ind.color}28`, color: ind.color }}>
                    {ind.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold mb-0.5" style={{ color: `${ind.color}70` }}>Branche</p>
                    <h3 className="text-xl font-black text-white">{ind.name}</h3>
                  </div>
                </div>

                <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {ind.desc}
                </p>

                {/* Big metric */}
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-black" style={{ color: ind.color }}>
                    <CountUp target={ind.stat} suffix={ind.unit} />
                  </span>
                  <span className="text-base" style={{ color: "rgba(255,255,255,0.3)" }}>{ind.label}</span>
                </div>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
                  Durchschnittlicher Wert unserer Kunden in dieser Branche
                </p>
              </div>

              {/* Right — mini call simulation */}
              <div className="relative p-8 lg:p-10 flex flex-col justify-center"
                style={{ borderLeft: `1px solid ${ind.color}12`, background: `${ind.color}04` }}>

                <p className="text-[10px] uppercase tracking-widest font-bold mb-6" style={{ color: `${ind.color}60` }}>
                  Simulierter Ablauf
                </p>

                {/* Flow steps */}
                <div className="relative space-y-0">
                  {[
                    { label: "Anruf eingehend",   value: ind.sample.caller, icon: "📞", step: 1 },
                    { label: "KI analysiert",     value: ind.sample.action, icon: "⚡", step: 2 },
                    { label: "Ergebnis",          value: ind.sample.result, icon: "✓",  step: 3 },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      {/* Connector */}
                      <div className="flex flex-col items-center shrink-0">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                          style={{ background: `${ind.color}14`, border: `1px solid ${ind.color}28` }}>
                          <span>{item.icon}</span>
                        </div>
                        {i < 2 && (
                          <div className="w-[1px] h-6 my-1" style={{ background: `${ind.color}25` }} />
                        )}
                      </div>
                      <div className={i < 2 ? "pb-6" : ""}>
                        <p className="text-[10px] uppercase tracking-widest font-semibold mb-0.5" style={{ color: "rgba(255,255,255,0.2)" }}>{item.label}</p>
                        <p className="text-sm font-bold" style={{ color: i === 2 ? ind.color : "rgba(255,255,255,0.6)" }}>{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Duration badge */}
                <div className="mt-8 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-bold"
                  style={{ background: `${ind.color}10`, border: `1px solid ${ind.color}20`, color: ind.color }}>
                  <span className="pulse-dot scale-75" style={{ background: ind.color }} />
                  Gesamtdauer: ~45 Sekunden
                </div>
              </div>
            </div>

            {/* ── Kontaktpunkt-Journey (full cycle) ── */}
            <div className="px-8 lg:px-10 pb-8 pt-0"
              style={{ borderTop: `1px solid ${ind.color}10` }}>
              <p className="text-[10px] uppercase tracking-widest font-bold mb-4 pt-6"
                style={{ color: `${ind.color}55` }}>
                Vollständiger Zyklus · inkl. Follow-ups & Bewertung
              </p>
              {"highlight" in ind && ind.highlight && (
                <motion.p
                  key={active + "hl"}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-xs mb-4 px-3 py-2 rounded-lg inline-block"
                  style={{ background: `${ind.color}0d`, color: ind.color, border: `1px solid ${ind.color}20` }}>
                  {ind.highlight}
                </motion.p>
              )}
              <div className="flex flex-wrap items-center gap-y-3">
                {ind.journey.map((j, ji) => (
                  <motion.div
                    key={ji}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: ji * 0.07 }}
                    className="flex items-center gap-2"
                  >
                    <motion.div
                      className="flex flex-col items-center px-2 py-1 rounded-lg cursor-default"
                      whileHover={{ scale: 1.08, y: -2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18 }}
                      style={{
                        background: ji === ind.journey.length - 1 ? `${ind.color}14` : "transparent",
                        border: ji === ind.journey.length - 1 ? `1px solid ${ind.color}30` : "1px solid transparent",
                      }}
                    >
                      <span className="text-[10px] font-bold"
                        style={{ color: ji === ind.journey.length - 1 ? ind.color : "rgba(255,255,255,0.65)" }}>
                        {j.step}
                      </span>
                      <span className="text-[9px]" style={{ color: "rgba(255,255,255,0.2)" }}>{j.detail}</span>
                    </motion.div>
                    {ji < ind.journey.length - 1 && (
                      <div className="relative shrink-0 mx-0.5 overflow-hidden" style={{ width: 20, height: 8 }}>
                        <svg width="20" height="8" viewBox="0 0 20 8" fill="none">
                          <path d="M0 4h16M13 1l4 3-4 3" stroke={ind.color} strokeOpacity="0.25" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <motion.div
                          className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                          style={{ background: ind.color, boxShadow: `0 0 6px ${ind.color}`, left: 0 }}
                          animate={{ x: [0, 18], opacity: [0, 1, 0] }}
                          transition={{ duration: 1.2, delay: ji * 0.2, repeat: Infinity, ease: "linear" }}
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Mini grid for remaining industries (shows all 5 at once on mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-6 lg:hidden"
        >
          {industries.map((ind, i) => (
            <button
              key={ind.name}
              onClick={() => setActive(i)}
              className="glass-card rounded-xl p-4 text-left transition-all duration-300 cursor-none"
              style={{ borderColor: active === i ? `${ind.color}30` : undefined }}
            >
              <div className="text-2xl mb-2">{ind.icon}</div>
              <p className="text-xs font-bold text-white">{ind.name}</p>
              <p className="text-[10px] mt-1" style={{ color: ind.color }}>{ind.stat}{ind.unit}</p>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
