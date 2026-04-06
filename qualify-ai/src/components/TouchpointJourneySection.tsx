"use client";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import CountUp from "./CountUp";

/* ── Glow signal connector ── */
function SignalConnector({ fromColor, toColor }: { fromColor: string; toColor: string }) {
  return (
    <div className="hidden lg:flex flex-1 items-center relative mx-3 shrink-0" style={{ minWidth: 40 }}>
      {/* Track line */}
      <div className="w-full h-[1px]" style={{ background: `linear-gradient(90deg, ${fromColor}30, ${toColor}30)` }} />
      {/* Animated dots */}
      {[0, 1, 2, 3].map(i => (
        <motion.div
          key={i}
          className="absolute w-2.5 h-2.5 rounded-full"
          style={{
            background: toColor,
            boxShadow: `0 0 10px ${toColor}, 0 0 20px ${toColor}60`,
            left: 0,
          }}
          animate={{ x: ["0%", "1400%"], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 1.8,
            delay: i * 0.45,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

/* ── Floating notification chip (cycles) ── */
function LiveNotif({
  notes,
  color,
  side = "right",
  delay = 0,
}: {
  notes: { icon: string; text: string }[];
  color: string;
  side?: "left" | "right";
  delay?: number;
}) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % notes.length), 3200);
    return () => clearInterval(t);
  }, [notes.length]);

  return (
    <div
      className={`absolute -bottom-5 z-20 pointer-events-none ${side === "right" ? "-right-3" : "-left-3"}`}
      style={{ minWidth: 160 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 8, scale: 0.88 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.9 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1], delay }}
          className="flex items-center gap-2 rounded-xl py-2 px-3 text-[10px] font-bold shadow-2xl"
          style={{
            background: "rgba(7,16,30,0.95)",
            border: `1px solid ${color}30`,
            boxShadow: `0 8px 32px rgba(0,0,0,0.5), 0 0 20px ${color}12`,
            backdropFilter: "blur(8px)",
            color,
          }}
        >
          <span className="text-sm">{notes[idx].icon}</span>
          <span style={{ color: "rgba(255,255,255,0.75)" }}>{notes[idx].text}</span>
          <span className="w-1 h-1 rounded-full shrink-0 animate-pulse" style={{ background: color }} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ── Phase card ── */
function PhaseCard({
  phase,
  index,
  inView,
}: {
  phase: typeof PHASES[0];
  index: number;
  inView: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
    el.style.setProperty("--op", "1");
  };
  const onLeave = () => ref.current?.style.setProperty("--op", "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.93 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.85, delay: 0.1 + index * 0.18, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex-1"
    >
      {/* Floating notification */}
      <LiveNotif notes={phase.notes} color={phase.color} side={index === 0 ? "right" : "right"} delay={index * 0.1} />

      <div
        ref={ref}
        className="relative rounded-2xl p-6 cursor-none h-full overflow-hidden"
        style={{
          background: `linear-gradient(145deg, ${phase.color}0c, #07101e 55%)`,
          border: `1px solid ${phase.color}20`,
          boxShadow: `0 0 50px ${phase.color}06`,
          "--mx": "50%",
          "--my": "50%",
          "--op": "0",
        } as React.CSSProperties}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {/* Spotlight */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at var(--mx) var(--my), ${phase.color}1a 0%, transparent 55%)`,
            opacity: "var(--op)",
          }}
        />

        <div className="relative z-10">
          {/* Phase label + big number */}
          <div className="flex items-center justify-between mb-4">
            <span
              className="text-[10px] font-black tracking-[0.15em] px-2.5 py-1 rounded-full"
              style={{ background: `${phase.color}14`, color: phase.color, border: `1px solid ${phase.color}28` }}
            >
              {phase.label}
            </span>
            <motion.span
              className="text-5xl font-black leading-none"
              style={{ color: `${phase.color}10` }}
              animate={inView ? { opacity: [0, 1] } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.18 }}
            >
              {phase.num}
            </motion.span>
          </div>

          {/* Title */}
          <h3 className="text-base font-black text-white mb-4 leading-snug">{phase.title}</h3>

          {/* Items */}
          <div className="space-y-2.5 mb-5">
            {phase.items.map((item, j) => (
              <motion.div
                key={j}
                initial={{ opacity: 0, x: -14 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.35 + index * 0.18 + j * 0.07 }}
                className="flex items-center gap-2.5"
              >
                <span className="text-base w-6 shrink-0 text-center">{item.icon}</span>
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{item.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Animated stat for phase 2 */}
          {phase.stat && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.55 + index * 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-baseline gap-1.5 px-4 py-3 rounded-xl"
              style={{ background: `${phase.color}0a`, border: `1px solid ${phase.color}18` }}
            >
              <span className="text-3xl font-black" style={{ color: phase.color }}>
                <CountUp target={phase.stat.value} suffix={phase.stat.suffix} />
              </span>
              <span className="text-xs ml-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                {phase.stat.label}
              </span>
            </motion.div>
          )}

          {/* Badge */}
          <div className="mt-4 flex items-center gap-1.5 text-[10px] font-bold"
            style={{ color: `${phase.color}70` }}>
            <motion.span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: phase.color }}
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {phase.badge}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Data ── */
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
    notes: [
      { icon: "📞", text: "Anruf: Müller GmbH" },
      { icon: "✓",  text: "Lead Score: 94" },
      { icon: "📅", text: "Termin: Di 10:00" },
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
    notes: [
      { icon: "✉️", text: "SMS #3 gesendet" },
      { icon: "👁",  text: "E-Mail geöffnet" },
      { icon: "📞", text: "Follow-up #7 aktiv" },
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
    notes: [
      { icon: "⭐", text: "5-Sterne Bewertung" },
      { icon: "👥", text: "Empfehlung erhalten" },
      { icon: "🔄", text: "Reaktiviert: Weber GmbH" },
    ],
    stat: null,
  },
];

const STATS = [
  { value: 100, suffix: "%", label: "vollautomatisiert" },
  { value: 0,   suffix: "h", label: "manueller Aufwand" },
  { value: 3,   suffix: "×", label: "mehr Abschlüsse" },
];

export default function TouchpointJourneySection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const headerY  = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const phasesY  = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);

  return (
    <section
      ref={ref}
      className="relative py-32 px-4 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #000 0%, #030810 50%, #000 100%)" }}
    >
      {/* Parallax background orbs */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: headerY }}>
        <div className="orb orb-teal   w-[500px] h-[500px] -left-40 top-10 opacity-40" />
        <div className="orb orb-blue   w-[400px] h-[400px] -right-32 bottom-20 opacity-30" />
      </motion.div>

      {/* Top divider */}
      <div className="absolute top-0 inset-x-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,195,240,0.15), rgba(0,212,160,0.1), transparent)" }} />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
        <motion.div
          className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-0 mb-20"
          style={{ y: phasesY }}
        >
          {PHASES.map((phase, i) => (
            <div key={phase.num} className="flex flex-col lg:flex-row items-center flex-1">
              <PhaseCard phase={phase} index={i} inView={inView} />

              {i < PHASES.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.18 }}
                  className="shrink-0 w-full lg:w-auto"
                >
                  {/* Mobile dots */}
                  <div className="flex lg:hidden justify-center items-center gap-1.5 py-3">
                    {[0,1,2].map(d => (
                      <motion.div
                        key={d}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: PHASES[i + 1].color }}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.2, delay: d * 0.3, repeat: Infinity }}
                      />
                    ))}
                  </div>
                  {/* Desktop signal line */}
                  <SignalConnector fromColor={phase.color} toColor={PHASES[i + 1].color} />
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="rounded-2xl px-8 py-6 grid grid-cols-3 gap-6"
          style={{
            background: "rgba(0,212,160,0.03)",
            border: "1px solid rgba(0,212,160,0.1)",
          }}
        >
          {STATS.map((s, i) => (
            <div key={i} className="text-center relative">
              {/* Animated progress line under each stat */}
              <motion.div
                className="absolute bottom-0 left-1/2 h-[2px] rounded-full -translate-x-1/2"
                style={{ background: "linear-gradient(90deg, #00D4A0, #00c3f0)" }}
                initial={{ width: 0 }}
                animate={inView ? { width: "40%" } : {}}
                transition={{ duration: 1.0, delay: 0.8 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              />
              <p className="text-2xl md:text-3xl font-black text-gradient mb-1 pb-3">
                <CountUp target={s.value} suffix={s.suffix} />
              </p>
              <p className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.28)" }}>{s.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
