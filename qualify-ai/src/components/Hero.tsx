"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ScrambleText from "./ScrambleText";
import MagneticButton from "./MagneticButton";
import CountUp from "./CountUp";

/* ─── Data ────────────────────────────────────────── */
const STATS = [
  { value: 85,  suffix: "%",  label: "Zeitersparnis"      },
  { value: 3,   suffix: "x",  label: "Mehr Aufträge"      },
  { value: 40,  suffix: "%",  label: "Reaktivierungsrate" },
  { value: 24,  suffix: "/7", label: "Immer erreichbar"   },
];

type LiveEvent = { id: string; color: string; label: string; detail: string; tag: string };
const LIVE_EVENTS: LiveEvent[] = [
  { id: "ev1", color: "#00D4A0", label: "Eingehender Anruf",  detail: "Müller GmbH · Solaranlage", tag: "● Aktiv"    },
  { id: "ev2", color: "#7C3AED", label: "Lead qualifiziert",  detail: "Schmidt Solar · Score 92",  tag: "✓ Hoch"     },
  { id: "ev3", color: "#f97316", label: "Termin gebucht",     detail: "Weber Heizung · Mo 14:30",  tag: "Bestätigt"  },
];

// Bar chart values – rising trend (12 bars)
const CHART_BARS = [28, 52, 38, 74, 56, 90, 66, 58, 44, 72, 84, 100];

// Audio waveform heights (28 bars, natural-looking variance)
const WAVE_BARS = [40, 68, 52, 88, 35, 72, 58, 92, 44, 78, 62, 86, 38, 74, 55, 94, 42, 80, 60, 88, 36, 70, 52, 84, 48, 76, 58, 90];

/* ─── Leads list ─────────────────────────────────── */
const LEADS = [
  { name: "Müller GmbH",   tag: "✓ Qual.",  color: "#00D4A0" },
  { name: "Schmidt Solar", tag: "📅 Termin", color: "#7C3AED" },
  { name: "Weber Heizung", tag: "⏳ Läuft",  color: "rgba(255,255,255,0.28)" },
];

/* ─── Calendar highlight days ────────────────────── */
const CAL_TEAL   = [3, 7, 11, 14, 18, 22, 25];
const CAL_PURPLE = 15;
const CAL_DAYS   = Array.from({ length: 28 }, (_, i) => i + 1);
const CAL_HEADS  = ["M", "D", "M", "D", "F", "S", "S"];

/* ═══════════════════════════════════════════════════ */
export default function Hero() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });

  const [evIdx, setEvIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setEvIdx(i => (i + 1) % LIVE_EVENTS.length), 3400);
    return () => clearInterval(t);
  }, []);

  const ev = LIVE_EVENTS[evIdx];

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-20 px-4"
    >
      {/* ── Layered background ──────────────────────── */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      {/* Atmospheric orbs */}
      <div className="orb orb-teal   w-[900px] h-[900px] -top-80  -left-72"  />
      <div className="orb orb-blue   w-[650px] h-[650px] -top-20  -right-60" />
      <div className="orb orb-purple w-[550px] h-[550px]  bottom-0 left-1/3" />

      {/* Slow-breathing central radial glow */}
      <div className="hero-breathe-orb" />

      {/* Subtle bottom vignette to anchor the section */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

      {/* ── Two-column grid ─────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 xl:gap-20 items-center">

        {/* ─── LEFT: Content ──────────────────────────── */}
        <div className="flex flex-col">

          {/* Live badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="section-label">
              <span className="pulse-dot" />
              KI-Telefon-Assistent · Jetzt live
            </span>
          </motion.div>

          {/* Headline – three-line cascade */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15, delay: 0.1 }}
            className="font-black leading-[0.88] tracking-tight mb-7"
          >
            {/* Line 1 */}
            <motion.span
              initial={{ opacity: 0, y: 56 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[clamp(54px,7.5vw,108px)] text-white"
            >
              DEIN
            </motion.span>

            {/* Line 2 */}
            <motion.span
              initial={{ opacity: 0, y: 56 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.31, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[clamp(54px,7.5vw,108px)] text-white"
            >
              VERTRIEB
            </motion.span>

            {/* Line 3 – gradient + scramble */}
            <motion.span
              initial={{ opacity: 0, y: 56 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[clamp(54px,7.5vw,108px)]"
            >
              <span className="glitch-text text-gradient" data-text="AUF AUTOPILOT.">
                <ScrambleText
                  text="AUF AUTOPILOT."
                  trigger={inView}
                  className="text-gradient"
                  duration={1500}
                />
              </span>
            </motion.span>
          </motion.h1>

          {/* Subtitle – opacity raised to 60%, punchy three-beat copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.68 }}
            className="text-base md:text-lg leading-relaxed mb-10 max-w-md"
            style={{ color: "rgba(241,245,249,0.62)" }}
          >
            Jeder Anruf wird angenommen. Jeder Lead qualifiziert.
            Jeder Termin direkt gebucht — vollautomatisch, 24/7.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.82 }}
            className="flex flex-col sm:flex-row gap-3 mb-14"
          >
            <MagneticButton
              href="#kontakt"
              className="btn-teal text-sm md:text-base px-8 py-4 inline-flex items-center justify-center gap-2"
            >
              Kostenlose Demo starten
            </MagneticButton>

            <MagneticButton
              href="#funktionen"
              className="btn-outline text-sm md:text-base px-7 py-4 inline-flex items-center justify-center gap-2.5"
            >
              <span className="hero-play-btn">
                <svg width="9" height="9" viewBox="0 0 9 9" fill="currentColor" aria-hidden>
                  <polygon points="1,0.5 8.5,4.5 1,8.5" />
                </svg>
              </span>
              So funktioniert&apos;s
            </MagneticButton>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {STATS.map((s) => (
              <div key={s.label} className="stat-card text-center">
                <p className="text-xl md:text-2xl font-black text-gradient">
                  <CountUp target={s.value} suffix={s.suffix} />
                </p>
                <p className="text-[10px] text-white/30 mt-1 font-medium tracking-wide">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ─── RIGHT: Product visual ──────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 48, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.15, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex flex-col"
        >
          {/* Ambient top glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-4/5 h-28
                          bg-[#00D4A0]/12 blur-[90px] rounded-full pointer-events-none" />

          {/* ── Floating live-event chip ─────────────── */}
          <div className="absolute -top-5 right-2 z-20 pointer-events-none select-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={ev.id}
                initial={{ opacity: 0, y: -10, scale: 0.88 }}
                animate={{ opacity: 1,  y: 0,   scale: 1    }}
                exit   ={{ opacity: 0,  y: 8,    scale: 0.88 }}
                transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-2.5 glass rounded-full py-2 px-3.5 shadow-2xl"
                style={{ border: `1px solid ${ev.color}28` }}
              >
                {/* Pulse indicator */}
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0 animate-pulse"
                  style={{ background: ev.color, boxShadow: `0 0 6px ${ev.color}` }}
                />
                <span className="text-[10px] font-bold text-white leading-none">{ev.label}</span>
                <span className="text-[9px] text-white/35 leading-none hidden sm:inline">{ev.detail}</span>
                <span
                  className="text-[9px] font-bold px-2 py-0.5 rounded-full ml-0.5 shrink-0 leading-none"
                  style={{ background: `${ev.color}14`, color: ev.color }}
                >
                  {ev.tag}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Dashboard card ───────────────────────── */}
          <div
            className="rounded-2xl bg-[#030810]/97 w-full"
            style={{
              border: "1px solid rgba(0,212,160,0.11)",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.025)," +
                "0 48px 120px rgba(0,0,0,0.7)," +
                "0 0 80px rgba(0,212,160,0.04)",
            }}
          >
            {/* Window chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.04]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-4 text-[10px] text-white/14 font-mono tracking-widest select-none">
                qualify.ai — Live Dashboard
              </span>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="pulse-dot scale-75" />
                <span className="text-[10px] text-[#00D4A0]/70 font-mono tracking-widest">LIVE</span>
              </div>
            </div>

            {/* Three metric cards */}
            <div className="p-4 grid grid-cols-3 gap-3">

              {/* Card 1 – Live calls + bar chart */}
              <div className="glass rounded-xl p-3.5">
                <p className="text-[9px] text-white/20 uppercase tracking-widest font-semibold mb-2">
                  Live Anrufe
                </p>
                <p className="text-3xl font-black text-white leading-none mb-1">12</p>
                <p className="text-[10px] text-[#00D4A0] mb-3">+4 letzte 30 Min.</p>
                <div className="flex items-end gap-[2px] h-8">
                  {CHART_BARS.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 hero-chart-bar"
                      style={{
                        height: `${h}%`,
                        animationDelay: `${i * 0.2}s`,
                        background:
                          i === CHART_BARS.length - 1
                            ? "linear-gradient(to top, #00D4A0aa, #00D4A0)"
                            : `linear-gradient(to top,
                                rgba(0,212,160,${0.1 + i * 0.035}),
                                rgba(0,212,160,${0.3 + i * 0.06}))`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Card 2 – Qualified leads */}
              <div className="glass rounded-xl p-3.5">
                <p className="text-[9px] text-white/20 uppercase tracking-widest font-semibold mb-2">
                  Qual. Leads
                </p>
                <p className="text-3xl font-black text-white leading-none mb-1">47</p>
                <p className="text-[10px] text-[#00D4A0] mb-3">↑ 23% Vorwoche</p>
                <div className="space-y-1.5">
                  {LEADS.map((l) => (
                    <div
                      key={l.name}
                      className="flex justify-between items-center text-[9px] pb-1 border-b border-white/[0.04] last:border-0"
                    >
                      <span className="text-white/38 truncate">{l.name}</span>
                      <span style={{ color: l.color }} className="shrink-0 ml-1">{l.tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 3 – Booked appointments + mini calendar */}
              <div className="glass rounded-xl p-3.5">
                <p className="text-[9px] text-white/20 uppercase tracking-widest font-semibold mb-2">
                  Termine
                </p>
                <p className="text-3xl font-black text-white leading-none mb-1">18</p>
                <p className="text-[10px] text-purple-400 mb-3">Heute: 5 Termine</p>
                <div className="grid grid-cols-7 gap-[1px] text-center">
                  {CAL_HEADS.map((d, i) => (
                    <span key={i} className="text-[7px] text-white/14">{d}</span>
                  ))}
                  {CAL_DAYS.map(d => (
                    <span
                      key={d}
                      className={`text-[7px] w-[14px] h-[14px] flex items-center justify-center rounded mx-auto
                        ${CAL_TEAL.includes(d)
                          ? "bg-[#00D4A0]/20 text-[#00D4A0] font-bold"
                          : d === CAL_PURPLE
                          ? "bg-purple-500/30 text-purple-300 font-bold"
                          : "text-white/10"}`}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── AI waveform bar ──────────────────────── */}
          <div className="mt-3">
            <div
              className="glass rounded-xl px-4 py-3 flex items-center gap-4"
              style={{ border: "1px solid rgba(0,212,160,0.09)" }}
            >
              {/* Status */}
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="pulse-dot" />
                <span className="text-[10px] text-[#00D4A0] font-bold tracking-widest">KI AKTIV</span>
              </div>

              {/* Animated waveform */}
              <div className="flex items-end gap-[2px] flex-1 h-7 overflow-hidden">
                {WAVE_BARS.map((h, i) => (
                  <div
                    key={i}
                    className="hero-wave-bar"
                    style={{
                      height: `${h}%`,
                      animationDelay: `${(i * 0.082) % 1.35}s`,
                    }}
                  />
                ))}
              </div>

              {/* Call timer */}
              <span className="text-[10px] text-white/20 font-mono shrink-0">0:42</span>
            </div>
          </div>

          {/* Floating bottom-right score badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-4 -left-3 z-20 pointer-events-none select-none"
          >
            <div
              className="glass rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 shadow-xl"
              style={{ border: "1px solid rgba(0,212,160,0.18)" }}
            >
              {/* Score ring (CSS only) */}
              <div className="relative w-9 h-9 shrink-0">
                <svg viewBox="0 0 36 36" className="w-9 h-9 -rotate-90">
                  <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(0,212,160,0.12)" strokeWidth="3" />
                  <circle
                    cx="18" cy="18" r="14"
                    fill="none"
                    stroke="#00D4A0"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="87.96"
                    strokeDashoffset="9"   /* ~90 % filled */
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-[9px] font-black text-[#00D4A0]">92</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-white leading-none mb-0.5">Lead Score</p>
                <p className="text-[9px] text-white/35 leading-none">Hoch qualifiziert</p>
              </div>
            </div>
          </motion.div>

          {/* Ambient bottom glow */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-1/2 h-20
                          bg-[#00D4A0]/06 blur-[70px] rounded-full pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
