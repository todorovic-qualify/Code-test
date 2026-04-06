"use client";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";

/* ── Per-card mouse-spotlight (CSS vars, zero re-renders) ── */
function SpotlightCard({
  children,
  color,
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  color: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
    el.style.setProperty("--op", "1");
  }, []);

  const onLeave = useCallback(() => {
    ref.current?.style.setProperty("--op", "0");
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        "--mx": "50%",
        "--my": "50%",
        "--op": "0",
        "--spot": color,
      } as React.CSSProperties}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* Spotlight overlay */}
      <div
        className="absolute inset-0 rounded-[calc(1rem-1px)] pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at var(--mx) var(--my), ${color}22 0%, transparent 60%)`,
          opacity: "var(--op)",
          zIndex: 1,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

/* ── Floating live-event chip ── */
function FloatingChip({
  events,
  color,
  delay = 0,
}: {
  events: { icon: string; text: string }[];
  color: string;
  delay?: number;
}) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % events.length), 2800);
    return () => clearInterval(t);
  }, [events.length]);

  return (
    <div className="absolute -top-4 left-4 z-20 pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: -8, scale: 0.88 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.88 }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1], delay }}
          className="flex items-center gap-2 rounded-full py-1.5 px-3 text-[10px] font-bold shadow-xl whitespace-nowrap"
          style={{
            background: "#07101e",
            border: `1px solid ${color}35`,
            boxShadow: `0 4px 20px ${color}18`,
            color,
          }}
        >
          <span>{events[idx].icon}</span>
          <span style={{ color: "rgba(255,255,255,0.75)" }}>{events[idx].text}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ── Data ── */
const PILLARS = [
  {
    color: "#00D4A0",
    glow: "rgba(0,212,160,0.10)",
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
    events: [
      { icon: "📞", text: "Anruf angenommen" },
      { icon: "✓",  text: "Lead Score: 92" },
      { icon: "📅", text: "Termin: Mo 14:30" },
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.31h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    color: "#00c3f0",
    glow: "rgba(0,195,240,0.10)",
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
    events: [
      { icon: "💬", text: "SMS: Follow-up #3" },
      { icon: "✉️", text: "E-Mail geöffnet" },
      { icon: "📞", text: "Follow-up #7 geplant" },
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/>
      </svg>
    ),
  },
  {
    color: "#fbbf24",
    glow: "rgba(251,191,36,0.08)",
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
    events: [
      { icon: "⭐", text: "5-Sterne Bewertung" },
      { icon: "👥", text: "Empfehlung generiert" },
      { icon: "🔄", text: "Kunde reaktiviert" },
    ],
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

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY  = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section
      ref={ref}
      className="relative py-32 px-4 overflow-hidden"
      style={{ background: "#000" }}
    >
      {/* Parallax background glows */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] -translate-y-1/2 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,212,160,0.05) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] -translate-y-1/2 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,195,240,0.04) 0%, transparent 70%)", filter: "blur(60px)" }} />
      </motion.div>

      {/* Top divider */}
      <div className="absolute top-0 inset-x-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,160,0.12), rgba(0,195,240,0.08), transparent)" }} />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
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
        <motion.div
          className="grid md:grid-cols-3 gap-5"
          style={{ y: cardsY }}
        >
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              className="relative"
              initial={{ opacity: 0, y: 60, scale: 0.92, rotateX: 8 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.08 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Floating chip */}
              <FloatingChip events={p.events} color={p.color} delay={i * 0.15} />

              {/* Card with spotlight */}
              <div
                className="rounded-2xl p-[1px] h-full cursor-none"
                style={{
                  background: `linear-gradient(145deg, ${p.color}20, ${p.color}05 50%, transparent)`,
                  boxShadow: `0 0 0 1px ${p.color}14, 0 30px 80px rgba(0,0,0,0.5)`,
                }}
              >
                <SpotlightCard
                  color={p.color}
                  className="relative h-full rounded-[calc(1rem-1px)] p-7 flex flex-col"
                  style={{ background: "#07101e" }}
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shrink-0 cursor-none"
                    style={{ background: `${p.color}14`, border: `1px solid ${p.color}28`, color: p.color }}
                  >
                    {p.icon}
                  </motion.div>

                  <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: `${p.color}70` }}>
                    {p.label}
                  </p>
                  <h3 className="text-lg font-black text-white leading-tight mb-1">{p.title}</h3>
                  <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.35)" }}>{p.subtitle}</p>

                  {/* Points */}
                  <ul className="space-y-3 flex-1 mb-7">
                    {p.points.map((pt, j) => (
                      <motion.li
                        key={pt}
                        initial={{ opacity: 0, x: -16 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.14 + j * 0.06 }}
                        className="flex items-start gap-2.5 text-sm"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                      >
                        <span className="mt-[3px] shrink-0 w-3.5 h-3.5 rounded-full flex items-center justify-center"
                          style={{ background: `${p.color}18`, border: `1px solid ${p.color}35` }}>
                          <svg width="7" height="7" viewBox="0 0 8 8" fill="none" stroke={p.color} strokeWidth="2" strokeLinecap="round">
                            <polyline points="1,4 3,6 7,2"/>
                          </svg>
                        </span>
                        {pt}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Metric — animated shimmer */}
                  <motion.div
                    whileHover={{ scale: 1.03, boxShadow: `0 0 24px ${p.color}25` }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center gap-3 rounded-xl px-4 py-3"
                    style={{ background: `${p.color}0a`, border: `1px solid ${p.color}20` }}
                  >
                    <span className="text-2xl font-black" style={{ color: p.color }}>{p.metric.value}</span>
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{p.metric.label}</span>
                    {/* Animated bar fill */}
                    <div className="flex-1 h-[2px] rounded-full overflow-hidden" style={{ background: `${p.color}15` }}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: p.color }}
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={inView ? { scaleX: 1 } : {}}
                        transition={{ duration: 1.2, delay: 0.6 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  </motion.div>
                </SpotlightCard>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
