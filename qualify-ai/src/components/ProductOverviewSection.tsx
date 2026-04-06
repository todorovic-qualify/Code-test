"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TiltCard from "./TiltCard";

const PILLARS = [
  {
    color: "#00D4A0",
    glow: "rgba(0,212,160,0.12)",
    label: "Telefonassistent",
    title: "KI-Telefonassistent",
    subtitle: "Jeder Anruf. Jede Stunde.",
    points: [
      "24/7 Erreichbarkeit — kein Anruf geht verloren",
      "Leads sofort qualifizieren & einordnen",
      "Termine direkt in deinen Kalender buchen",
      "Echtzeit-Transkription jedes Gesprächs",
    ],
    metric: { value: "85%", label: "Zeitersparnis" },
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.31h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    color: "#00c3f0",
    glow: "rgba(0,195,240,0.12)",
    label: "Automatisierung",
    title: "Kontaktpunkt-Automatisierung",
    subtitle: "Bis zu 12 Touchpoints. Null Aufwand.",
    points: [
      "Automatische Follow-up-Sequenzen per SMS, E-Mail & Anruf",
      "Branchenspezifisch: Ø 10–12 Kontaktpunkte im PV-Vertrieb",
      "Kein Interessent fällt mehr durchs Raster",
      "Intervalle und Inhalte vollständig konfigurierbar",
    ],
    metric: { value: "3×", label: "mehr Abschlüsse" },
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14"/>
        <path d="M12 5l7 7-7 7"/>
        <circle cx="5" cy="12" r="2" fill="currentColor" stroke="none" opacity="0.6"/>
        <circle cx="19" cy="12" r="2" fill="currentColor" stroke="none" opacity="0.6"/>
      </svg>
    ),
  },
  {
    color: "#fbbf24",
    glow: "rgba(251,191,36,0.10)",
    label: "Wachstum",
    title: "Bewertungen & Empfehlungen",
    subtitle: "Bestandskunden werden zu Botschaftern.",
    points: [
      "Nach jedem Abschluss automatisch 5-Sterne sichern",
      "Bestandskunden reaktivieren — ohne manuellen Aufwand",
      "Weiterempfehlungen systematisch generieren",
      "Langfristige Kundenbindung vollautomatisch",
    ],
    metric: { value: "4.9★", label: "Ø Bewertung" },
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
];

export default function ProductOverviewSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative py-28 px-4 overflow-hidden"
      style={{ background: "#000" }}
    >
      {/* Divider top */}
      <div className="absolute top-0 inset-x-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,160,0.12), rgba(0,195,240,0.08), transparent)" }} />

      {/* Subtle center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(0,212,160,0.04) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-5 inline-block">Was wir liefern</span>
          <h2 className="text-[clamp(34px,5.5vw,66px)] font-black leading-[0.9] mt-5 mb-5">
            Alles was dein Betrieb<br />
            <span className="text-gradient">wirklich braucht.</span>
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.35)" }}>
            Vom ersten Anruf bis zur Weiterempfehlung — vollständig automatisiert.
          </p>
        </motion.div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-5">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard
                intensity={6}
                className="h-full rounded-2xl p-[1px] cursor-none"
                style={{
                  background: `linear-gradient(145deg, ${p.color}22, ${p.color}06 50%, transparent)`,
                }}
              >
                <div
                  className="h-full rounded-[calc(1rem-1px)] p-7 flex flex-col"
                  style={{ background: "#07101e", boxShadow: `inset 0 0 40px ${p.glow}` }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shrink-0"
                    style={{ background: `${p.color}14`, border: `1px solid ${p.color}28`, color: p.color }}
                  >
                    {p.icon}
                  </div>

                  {/* Label */}
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: `${p.color}70` }}>
                    {p.label}
                  </p>

                  {/* Title + subtitle */}
                  <h3 className="text-lg font-black text-white leading-tight mb-1">{p.title}</h3>
                  <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.35)" }}>{p.subtitle}</p>

                  {/* Points */}
                  <ul className="space-y-3 flex-1 mb-7">
                    {p.points.map(pt => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                        <span className="mt-[3px] shrink-0 w-3.5 h-3.5 rounded-full flex items-center justify-center"
                          style={{ background: `${p.color}18`, border: `1px solid ${p.color}35` }}>
                          <svg width="7" height="7" viewBox="0 0 8 8" fill="none" stroke={p.color} strokeWidth="2" strokeLinecap="round">
                            <polyline points="1,4 3,6 7,2"/>
                          </svg>
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>

                  {/* Metric */}
                  <div
                    className="flex items-center gap-3 rounded-xl px-4 py-3"
                    style={{ background: `${p.color}0a`, border: `1px solid ${p.color}18` }}
                  >
                    <span className="text-2xl font-black" style={{ color: p.color }}>{p.metric.value}</span>
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{p.metric.label}</span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
