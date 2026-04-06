"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "./CountUp";

/* Animated signal dot travelling left → right */
function SignalLine({ color }: { color: string }) {
  return (
    <div className="hidden lg:flex flex-1 items-center relative h-[2px] mx-2" style={{ background: `${color}15` }}>
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{ background: color, boxShadow: `0 0 8px ${color}` }}
          animate={{ x: ["0%", "2000%"], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 2.4,
            delay: i * 0.8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

const PHASES = [
  {
    num: "01",
    color: "#00D4A0",
    label: "Phase 1",
    title: "Erstanruf & Qualifizierung",
    badge: "KI-Telefonassistent",
    items: [
      { icon: "📞", text: "KI nimmt jeden Anruf an — 24/7" },
      { icon: "⚡", text: "Lead wird sofort qualifiziert" },
      { icon: "📅", text: "Termin automatisch gebucht" },
    ],
    stat: null,
  },
  {
    num: "02",
    color: "#00c3f0",
    label: "Phase 2",
    title: "Automatische Kontaktpunkte",
    badge: "Ø 10–12 Touchpoints · PV-Vertrieb",
    items: [
      { icon: "💬", text: "Follow-ups per SMS, E-Mail & Anruf" },
      { icon: "🔄", text: "Intervalle vollautomatisch gesteuert" },
      { icon: "🎯", text: "Kein Interessent fällt mehr weg" },
    ],
    stat: { value: 12, suffix: "×", label: "Kontaktpunkte vollautomatisch" },
  },
  {
    num: "03",
    color: "#fbbf24",
    label: "Phase 3",
    title: "Abschluss, Bewertung & Empfehlung",
    badge: "Bestandskunden & Reviews",
    items: [
      { icon: "✅", text: "Abschluss gesichert" },
      { icon: "⭐", text: "5-Sterne-Bewertung automatisch angefragt" },
      { icon: "📣", text: "Empfehlung systematisch generiert" },
    ],
    stat: null,
  },
];

const STATS = [
  { value: 100, suffix: "%", label: "vollautomatisiert" },
  { value: 0,   suffix: "h", label: "manueller Aufwand" },
  { value: 3,   suffix: "×", label: "mehr Abschlüsse" },
  { value: 4.9, suffix: "★", label: "Ø Kundenbewertung", isFloat: true },
];

export default function TouchpointJourneySection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-32 px-4 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #000 0%, #030810 50%, #000 100%)" }}
    >
      {/* Background glow orbs */}
      <div className="orb orb-teal   w-[500px] h-[500px] -left-40 top-10 opacity-40" />
      <div className="orb orb-blue   w-[400px] h-[400px] -right-32 bottom-20 opacity-30" />

      {/* Top divider */}
      <div className="absolute top-0 inset-x-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,195,240,0.15), rgba(0,212,160,0.1), transparent)" }} />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="section-label mb-5 inline-block">Der vollständige Zyklus</span>
          <h2 className="text-[clamp(34px,5.5vw,68px)] font-black leading-[0.9] mt-5 mb-5">
            Einmal einrichten.<br />
            <span className="text-gradient">Immer nachfassen.</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.38)" }}>
            Qualify.ai begleitet jeden Kunden vom ersten Anruf bis zur Weiterempfehlung —
            vollständig automatisiert, ohne manuellen Aufwand.
          </p>
        </motion.div>

        {/* Three phases + signal connectors */}
        <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-0 mb-16">
          {PHASES.map((phase, i) => (
            <div key={phase.num} className="flex flex-col lg:flex-row items-center flex-1 gap-4 lg:gap-0">
              {/* Phase card */}
              <motion.div
                initial={{ opacity: 0, y: 36, scale: 0.94 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.75, delay: 0.1 + i * 0.16, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 w-full rounded-2xl p-6"
                style={{
                  background: `linear-gradient(145deg, ${phase.color}0d, #07101e 60%)`,
                  border: `1px solid ${phase.color}22`,
                  boxShadow: `0 0 40px ${phase.color}06`,
                }}
              >
                {/* Phase number */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="text-[11px] font-black tracking-[0.15em] px-2.5 py-1 rounded-full"
                    style={{ background: `${phase.color}14`, color: phase.color, border: `1px solid ${phase.color}28` }}
                  >
                    {phase.label}
                  </span>
                  <span className="text-4xl font-black opacity-[0.07] text-white">{phase.num}</span>
                </div>

                {/* Title */}
                <h3 className="text-base font-black text-white mb-5 leading-tight">{phase.title}</h3>

                {/* Items */}
                <div className="space-y-3 mb-6">
                  {phase.items.map((item, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -12 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.16 + j * 0.07 }}
                      className="flex items-center gap-3"
                    >
                      <span className="text-base">{item.icon}</span>
                      <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Animated stat for phase 2 */}
                {phase.stat && (
                  <div
                    className="flex items-baseline gap-1 px-4 py-3 rounded-xl"
                    style={{ background: `${phase.color}0a`, border: `1px solid ${phase.color}18` }}
                  >
                    <span className="text-3xl font-black" style={{ color: phase.color }}>
                      <CountUp target={phase.stat.value} suffix={phase.stat.suffix} />
                    </span>
                    <span className="text-xs ml-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                      {phase.stat.label}
                    </span>
                  </div>
                )}

                {/* Badge */}
                <div className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-bold"
                  style={{ color: `${phase.color}80` }}>
                  <span className="w-1 h-1 rounded-full shrink-0" style={{ background: phase.color }} />
                  {phase.badge}
                </div>
              </motion.div>

              {/* Signal connector (between cards, not after last) */}
              {i < PHASES.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.16 }}
                  className="shrink-0"
                >
                  {/* Mobile: vertical dots */}
                  <div className="flex lg:hidden flex-col items-center gap-1 py-1">
                    {[0, 1, 2].map(d => (
                      <div key={d} className="w-1.5 h-1.5 rounded-full" style={{ background: `${PHASES[i].color}40` }} />
                    ))}
                  </div>
                  {/* Desktop: animated signal line */}
                  <SignalLine color={PHASES[i + 1].color} />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="rounded-2xl px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{
            background: "rgba(0,212,160,0.03)",
            border: "1px solid rgba(0,212,160,0.1)",
          }}
        >
          {STATS.map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl md:text-3xl font-black text-gradient mb-1">
                {s.isFloat
                  ? s.value + s.suffix
                  : <CountUp target={s.value} suffix={s.suffix} />
                }
              </p>
              <p className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.28)" }}>{s.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
