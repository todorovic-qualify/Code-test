"use client";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ScrambleText from "./ScrambleText";
import MagneticButton from "./MagneticButton";
import CountUp from "./CountUp";
import ParticleNetwork from "./ParticleNetwork";

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

const CHART_BARS = [28, 52, 38, 74, 56, 90, 66, 58, 44, 72, 84, 100];
const WAVE_BARS  = [40, 68, 52, 88, 35, 72, 58, 92, 44, 78, 62, 86, 38, 74, 55, 94, 42, 80, 60, 88, 36, 70, 52, 84, 48, 76, 58, 90];

const LEADS = [
  { name: "Müller GmbH",   tag: "✓ Qual.",  color: "#00D4A0" },
  { name: "Schmidt Solar", tag: "📅 Termin", color: "#7C3AED" },
  { name: "Weber Heizung", tag: "⏳ Läuft",  color: "rgba(255,255,255,0.28)" },
];

const CAL_TEAL   = [3, 7, 11, 14, 18, 22, 25];
const CAL_PURPLE = 15;
const CAL_DAYS   = Array.from({ length: 28 }, (_, i) => i + 1);
const CAL_HEADS  = ["M", "D", "M", "D", "F", "S", "S"];

/* ═══════════════════════════════════════════════════ */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView     = useInView(sectionRef, { once: true });

  /* ── Live event cycling ─────────────────────────── */
  const [evIdx, setEvIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setEvIdx(i => (i + 1) % LIVE_EVENTS.length), 3400);
    return () => clearInterval(t);
  }, []);
  const ev = LIVE_EVENTS[evIdx];

  /* ── Mouse parallax ──────────────────────────────── */
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 40, damping: 18 });
  const springY = useSpring(rawY, { stiffness: 40, damping: 18 });

  /* Layer 1 – orbs (slow, larger movement) */
  const orbX = useTransform(springX, v => v * -28);
  const orbY = useTransform(springY, v => v * -28);
  /* Layer 2 – dashboard (medium, forward) */
  const dashX = useTransform(springX, v => v * 14);
  const dashY = useTransform(springY, v => v * 14);
  /* Layer 3 – floating chips (opposite, snappy) */
  const floatX = useTransform(springX, v => v * -18);
  const floatY = useTransform(springY, v => v * -18);

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top)  / rect.height - 0.5);
  };
  const onMouseLeave = () => { rawX.set(0); rawY.set(0); };

  /* ── Scroll exit parallax ───────────────────────── */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY    = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const bgY         = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-20 px-4"
    >
      {/* ── Background layer (slower parallax) ──────── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
      >
        {/* Particle neural network */}
        <ParticleNetwork opacity={0.45} count={80} maxDist={140} />

        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-15" />

        {/* Scan beam */}
        <div className="scan-beam" style={{ zIndex: 3 }} />

        {/* Orbs – mouse parallax layer 1 */}
        <motion.div
          className="absolute inset-0"
          style={{ x: orbX, y: orbY }}
        >
          <div className="orb orb-teal-strong  w-[900px] h-[900px] -top-80  -left-72 orb-drift-1" />
          <div className="orb orb-blue-strong  w-[650px] h-[650px] -top-20  -right-60 orb-drift-2" />
          <div className="orb orb-purple-strong w-[550px] h-[550px]  bottom-0 left-1/3 orb-drift-3" />
        </motion.div>

        {/* Slow-breathing central glow */}
        <div className="hero-breathe-orb" />
      </motion.div>

      {/* Bottom vignette */}
      <div className="absolute bottom-0 inset-x-0 h-56 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-10" />

      {/* ── Content wrapper (scroll exit) ───────────── */}
      <motion.div
        className="relative z-20 max-w-7xl mx-auto w-full"
        style={{ y: contentY, opacity: heroOpacity }}
      >
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-20 items-center">

          {/* ─── LEFT: Copy ──────────────────────────── */}
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

            {/* ── Clip-up headline ─────────────────── */}
            <h1 className="font-black leading-[0.88] tracking-tight mb-7">

              {/* "DEIN BETRIEB" – line 1 */}
              <div className="overflow-hidden">
                <motion.span
                  initial={{ y: "108%" }}
                  animate={inView ? { y: "0%" } : {}}
                  transition={{ duration: 0.95, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-[clamp(54px,7.5vw,108px)] text-white"
                >
                  DEIN BETRIEB
                </motion.span>
              </div>

              {/* "AUF AUTOPILOT." – line 2 gradient + scramble */}
              <div className="overflow-hidden">
                <motion.span
                  initial={{ y: "108%" }}
                  animate={inView ? { y: "0%" } : {}}
                  transition={{ duration: 0.95, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
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
              </div>
            </h1>

            {/* Subtitle – blur reveal */}
            <motion.p
              initial={{ opacity: 0, filter: "blur(8px)", y: 12 }}
              animate={inView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-lg leading-relaxed mb-10 max-w-md"
              style={{ color: "rgba(241,245,249,0.62)" }}
            >
              Jeder Anruf wird angenommen. Jeder Lead qualifiziert.
              Jeder Termin direkt gebucht — vollautomatisch, 24/7.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
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
                <span className="hero-play-btn mr-1">
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
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 1.0 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 24, scale: 0.9 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.05 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="stat-card text-center"
                >
                  <p className="text-xl md:text-2xl font-black text-gradient">
                    <CountUp target={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-[10px] text-white/30 mt-1 font-medium tracking-wide">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ─── RIGHT: Dashboard (mouse parallax layer 2) ─ */}
          <motion.div
            initial={{ opacity: 0, x: 48, scale: 0.95 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 1.15, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
            style={{ x: dashX, y: dashY }}
            className="relative flex flex-col"
          >
            {/* Ambient top glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-4/5 h-28
                            bg-[#00D4A0]/12 blur-[90px] rounded-full pointer-events-none" />

            {/* ── Floating live-event chip (layer 3: opposite parallax) ── */}
            <motion.div
              className="absolute -top-5 right-2 z-20 pointer-events-none select-none"
              style={{ x: floatX, y: floatY }}
            >
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
            </motion.div>

            {/* ── Dashboard card (relative wrapper for badge) ─ */}
            <div className="relative">
              {/* ── Floating score badge — anchored to dashboard card ─ */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
                style={{ x: floatX, y: floatY }}
                className="absolute -bottom-5 -left-3 z-20 pointer-events-none select-none"
              >
                <div
                  className="glass rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 shadow-xl"
                  style={{ border: "1px solid rgba(0,212,160,0.18)" }}
                >
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
                        strokeDashoffset="9"
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

              <div
                className="rounded-2xl bg-[#030810]/97 w-full"
              style={{
                border: "1px solid rgba(0,212,160,0.11)",
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.025)," +
                  "0 48px 120px rgba(0,0,0,0.7)," +
                  "0 0 80px rgba(0,212,160,0.06)," +
                  "0 0 160px rgba(0,212,160,0.03)",
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

                {/* Card 1 – Live calls */}
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

                {/* Card 3 – Bookings + mini calendar */}
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

            </div>{/* end relative dashboard wrapper */}

            {/* ── AI waveform bar ──────────────────────── */}
            <div className="mt-3">
              <div
                className="glass rounded-xl px-4 py-3 flex items-center gap-4"
                style={{ border: "1px solid rgba(0,212,160,0.09)" }}
              >
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="pulse-dot" />
                  <span className="text-[10px] text-[#00D4A0] font-bold tracking-widest">KI AKTIV</span>
                </div>
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
                <span className="text-[10px] text-white/20 font-mono shrink-0">0:42</span>
              </div>
            </div>

            {/* Ambient bottom glow */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-1/2 h-20
                            bg-[#00D4A0]/06 blur-[70px] rounded-full pointer-events-none" />
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
