"use client";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";

/* ─── Step data ───────────────────────────────────── */
const steps = [
  {
    num: "01",
    color: "#00D4A0",
    title: "Anruf kommt rein",
    desc: "Du bist im Termin. Dein Assistent nimmt jeden Anruf sofort und professionell entgegen — kein Kunde wartet, kein Auftrag geht verloren.",
  },
  {
    num: "02",
    color: "#7C3AED",
    title: "KI spricht & transkribiert",
    desc: "Natürliche Konversation, live transkribiert. Jedes Wort wird erfasst, analysiert und strukturiert — in Echtzeit.",
  },
  {
    num: "03",
    color: "#f97316",
    title: "Lead wird qualifiziert",
    desc: "Die KI erkennt Kaufabsicht, Score und Dringlichkeit sofort. Du siehst nur noch echte Interessenten — keine Zeitverschwendung.",
  },
  {
    num: "04",
    color: "#00c3f0",
    title: "Termin automatisch gebucht",
    desc: "Direkt in deinen Kalender. Bestätigungs-Mail raus. Fertig — ohne dass du einen Finger gerührt hast.",
  },
];

/* ─── Enhanced visuals for each step ─────────────── */
function VisualStep01() {
  return (
    <div className="glass-card rounded-2xl p-7 max-w-sm mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-[10px] uppercase tracking-widest font-semibold mb-1" style={{ color: "rgba(255,255,255,0.2)" }}>Eingehender Anruf</p>
          <p className="text-sm font-bold text-white">+49 176 •••• ••••</p>
        </div>
        <div className="text-right">
          <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.18)" }}>0:00</p>
        </div>
      </div>

      {/* Pulsing ring animation */}
      <div className="relative flex items-center justify-center py-10 mb-6">
        <div className="absolute w-28 h-28 rounded-full ring-pulse" style={{ background: "rgba(0,212,160,0.06)", border: "1px solid rgba(0,212,160,0.15)" }} />
        <div className="absolute w-20 h-20 rounded-full ring-pulse ring-pulse-delay" style={{ background: "rgba(0,212,160,0.08)", border: "1px solid rgba(0,212,160,0.2)" }} />
        <div className="relative w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "rgba(0,212,160,0.14)", border: "1px solid rgba(0,212,160,0.35)", boxShadow: "0 0 30px rgba(0,212,160,0.25)" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00D4A0" strokeWidth="2" strokeLinecap="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.9 13.65 19.79 19.79 0 0 1 2 5.07 2 2 0 0 1 3.9 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 18z"/>
          </svg>
        </div>
      </div>

      <div className="rounded-xl px-4 py-3 flex items-center gap-3" style={{ background: "rgba(0,212,160,0.08)", border: "1px solid rgba(0,212,160,0.15)" }}>
        <span className="pulse-dot" />
        <span className="text-sm font-semibold" style={{ color: "#00D4A0" }}>KI nimmt automatisch an</span>
      </div>
    </div>
  );
}

function VisualStep02() {
  const lines = [
    { speaker: "KI",    text: "Guten Tag! Wie kann ich Ihnen helfen?",     color: "#00D4A0" },
    { speaker: "Kunde", text: "Ich brauche ein Angebot für eine Solaranlage...", color: "rgba(255,255,255,0.5)" },
    { speaker: "KI",    text: "Gerne! Darf ich fragen, wie groß das Dach ist?", color: "#00D4A0" },
  ];
  return (
    <div className="glass-card rounded-2xl p-7 max-w-sm mx-auto">
      <div className="flex items-center gap-2 mb-5">
        <span className="pulse-dot" style={{ background: "#7C3AED" }} />
        <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: "#7C3AED" }}>Live-Transkription</span>
        <span className="ml-auto text-[10px] font-mono" style={{ color: "rgba(255,255,255,0.18)" }}>0:14</span>
      </div>

      <div className="space-y-3 mb-6">
        {lines.map((l, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.35 }}
            className="rounded-lg p-3"
            style={{
              background: "rgba(255,255,255,0.025)",
              borderLeft: `2px solid ${l.color}40`,
            }}
          >
            <span className="text-[9px] uppercase tracking-widest font-bold block mb-1" style={{ color: `${l.color}80` }}>{l.speaker}</span>
            <p className="text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>&ldquo;{l.text}&rdquo;</p>
          </motion.div>
        ))}
      </div>

      {/* Mini waveform */}
      <div className="flex items-end gap-[2px] h-6 mb-3">
        {Array.from({ length: 24 }, (_, i) => (
          <div key={i} className="hero-wave-bar" style={{
            height: `${[40,70,50,90,55,85,45,75,60,95,50,80,42,72,58,88,48,78,62,92,44,74,56,86][i]}%`,
            animationDelay: `${(i * 0.07) % 1.2}s`,
            background: "linear-gradient(to top, rgba(124,58,237,0.2), rgba(124,58,237,0.7))",
          }} />
        ))}
      </div>
      <p className="text-[9px] uppercase tracking-widest font-semibold" style={{ color: "rgba(124,58,237,0.5)" }}>Analyse läuft…</p>
    </div>
  );
}

function VisualStep03() {
  return (
    <div className="glass-card rounded-2xl p-7 max-w-sm mx-auto">
      <p className="text-[9px] uppercase tracking-widest font-semibold mb-5" style={{ color: "rgba(255,255,255,0.2)" }}>Lead Score</p>

      {/* Large score circle */}
      <div className="flex items-center gap-5 mb-6">
        <div className="relative w-20 h-20 shrink-0">
          <svg viewBox="0 0 80 80" className="w-20 h-20 -rotate-90">
            <circle cx="40" cy="40" r="32" fill="none" stroke="rgba(249,115,22,0.12)" strokeWidth="5"/>
            <motion.circle
              cx="40" cy="40" r="32"
              fill="none"
              stroke="#f97316"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="201.06"
              initial={{ strokeDashoffset: 201.06 }}
              animate={{ strokeDashoffset: 201.06 * 0.08 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ filter: "drop-shadow(0 0 6px rgba(249,115,22,0.5))" }}
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-2xl font-black" style={{ color: "#f97316" }}>92</span>
        </div>
        <div>
          <p className="text-base font-black text-white mb-1">Hoch qualifiziert</p>
          <p className="text-xs" style={{ color: "#f97316" }}>→ Termin empfohlen</p>
        </div>
      </div>

      {/* Criteria list */}
      <div className="space-y-2.5">
        {[
          { label: "Kaufabsicht",  score: 95 },
          { label: "Budget",       score: 88 },
          { label: "Dringlichkeit",score: 80 },
        ].map(({ label, score }) => (
          <div key={label}>
            <div className="flex justify-between text-[10px] mb-1">
              <span style={{ color: "rgba(255,255,255,0.35)" }}>{label}</span>
              <span style={{ color: "#f97316" }}>{score}%</span>
            </div>
            <div className="h-1 rounded-full" style={{ background: "rgba(249,115,22,0.1)" }}>
              <motion.div
                className="h-1 rounded-full"
                style={{ background: "linear-gradient(90deg, #f97316, #fbbf24)" }}
                initial={{ width: 0 }}
                animate={{ width: `${score}%` }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VisualStep04() {
  return (
    <div className="glass-card rounded-2xl p-7 max-w-sm mx-auto">
      <div className="flex items-center gap-2.5 mb-6">
        <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(0,195,240,0.12)", border: "1px solid rgba(0,195,240,0.25)" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00c3f0" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
        </div>
        <span className="text-sm font-bold" style={{ color: "#00c3f0" }}>Termin bestätigt</span>
      </div>

      <div className="rounded-xl p-4 mb-5" style={{ background: "rgba(0,195,240,0.05)", border: "1px solid rgba(0,195,240,0.12)" }}>
        <div className="space-y-3">
          {[
            ["Datum",    "Mo, 14. April 2026"],
            ["Uhrzeit",  "14:30 Uhr"],
            ["Kontakt",  "Müller GmbH"],
            ["Thema",    "Solaranlage · Angebot"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between items-center text-[11px]">
              <span style={{ color: "rgba(255,255,255,0.25)" }}>{k}</span>
              <span className="font-semibold text-white/70">{v}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        {["Kalender-Eintrag erstellt", "Bestätigung an Kunde gesendet", "CRM aktualisiert"].map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.15 }}
            className="flex items-center gap-2.5 text-[10px]"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="5" stroke="rgba(0,195,240,0.4)" strokeWidth="1"/>
              <path d="M3.5 6l1.8 1.8 3.2-3.2" stroke="#00c3f0" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const VISUALS = [<VisualStep01 key="1" />, <VisualStep02 key="2" />, <VisualStep03 key="3" />, <VisualStep04 key="4" />];

/* ─── Mobile stacked steps (same visuals, simple layout) ─ */
function MobileSteps() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="space-y-12">
      {steps.map((step, i) => (
        <motion.div
          key={step.num}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center gap-6"
        >
          <div className="w-14 h-14 rounded-full flex items-center justify-center text-base font-black"
            style={{ background: `${step.color}12`, border: `1px solid ${step.color}30`, color: step.color, boxShadow: `0 0 20px ${step.color}20` }}>
            {step.num}
          </div>
          <div>
            <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
            <p className="text-sm leading-relaxed max-w-xs mx-auto" style={{ color: "rgba(255,255,255,0.35)" }}>{step.desc}</p>
          </div>
          <div className="w-full max-w-xs">{VISUALS[i]}</div>
        </motion.div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════ */
export default function LiveDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef    = useRef(null);
  const headerView   = useInView(headerRef, { once: true, margin: "-60px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* Vertical progress line fill */
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [activeStep, setActiveStep] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if      (v < 0.25) setActiveStep(0);
    else if (v < 0.5)  setActiveStep(1);
    else if (v < 0.75) setActiveStep(2);
    else               setActiveStep(3);
  });

  return (
    <section
      id="wie-es-funktioniert"
      className="relative px-4"
      style={{ background: "linear-gradient(180deg, #000000 0%, #020609 40%, #000000 100%)" }}
    >
      {/* Signal divider at top */}
      <div className="relative h-[1px] overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,160,0.15), transparent)" }} />
      </div>

      {/* ── Section header ──────────────────────────── */}
      <div ref={headerRef} className="pt-32 pb-16 text-center px-4">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={headerView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label mb-5 inline-block"
        >
          So funktioniert&apos;s
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={headerView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(36px,6vw,72px)] font-black leading-[0.9] mt-5 mb-5"
        >
          Von Anruf zu Termin<br />
          <span className="text-gradient">in Sekunden.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={headerView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="text-[13px] font-medium"
          style={{ color: "rgba(0,212,160,0.55)" }}
        >
          ⏱ Gesamtdauer: unter 60 Sekunden
        </motion.p>
      </div>

      {/* ── Mobile layout ───────────────────────────── */}
      <div className="lg:hidden max-w-lg mx-auto pb-24 px-4">
        <MobileSteps />
      </div>

      {/* ── Desktop sticky scroll ───────────────────── */}
      <div
        ref={containerRef}
        className="hidden lg:block relative"
        style={{ height: "300vh" }}
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="max-w-6xl mx-auto w-full px-4 grid grid-cols-2 gap-20 items-center">

            {/* LEFT: step list + progress line */}
            <div className="relative pl-10">
              {/* Track line */}
              <div className="absolute left-0 top-4 bottom-4 w-[1.5px]" style={{ background: "rgba(255,255,255,0.05)" }} />
              {/* Filled progress */}
              <motion.div
                className="absolute left-0 top-4 w-[1.5px] origin-top"
                style={{
                  height: lineHeight,
                  background: "linear-gradient(to bottom, #00D4A0, #7C3AED, #f97316, #00c3f0)",
                  boxShadow: "0 0 8px rgba(0,212,160,0.5)",
                }}
              />

              <div className="space-y-10">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.num}
                    animate={{
                      opacity: i === activeStep ? 1 : 0.22,
                      x: i === activeStep ? 0 : -6,
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start gap-6 cursor-default"
                  >
                    {/* Step circle — glows when active */}
                    <motion.div
                      animate={{
                        background: i === activeStep ? `${step.color}18` : "rgba(255,255,255,0.03)",
                        borderColor: i === activeStep ? `${step.color}45` : "rgba(255,255,255,0.07)",
                        color: i === activeStep ? step.color : "rgba(255,255,255,0.2)",
                        boxShadow: i === activeStep ? `0 0 24px ${step.color}28` : "none",
                      }}
                      transition={{ duration: 0.35 }}
                      className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-black shrink-0 border"
                    >
                      {step.num}
                    </motion.div>

                    <div>
                      <h3 className="text-lg font-black text-white mb-2">{step.title}</h3>
                      <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.38)" }}>{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT: animated visual panel */}
            <div className="relative">
              {/* Ambient glow behind visual */}
              <motion.div
                animate={{ background: `radial-gradient(ellipse at center, ${steps[activeStep].color}12 0%, transparent 65%)` }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 -m-8 blur-2xl pointer-events-none"
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0,  scale: 1    }}
                  exit   ={{ opacity: 0, y: -24, scale: 0.96 }}
                  transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10"
                >
                  {VISUALS[activeStep]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Signal divider at bottom */}
      <div className="relative h-[1px] overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.1), rgba(0,195,240,0.1), transparent)" }} />
      </div>
    </section>
  );
}
