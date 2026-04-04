"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "./CountUp";

const metrics = [
  { value: 50,   suffix: "+", label: "Betriebe aktiv"        },
  { value: 12,   suffix: "k", label: "Anrufe verarbeitet"    },
  { value: 4,    suffix: ".9 / 5", label: "Ø Bewertung"      },
];

const testimonials = [
  {
    quote: "Früher war das Chaos pur — Anrufe, Rückrufe, Angebote, genervte Kunden. Jetzt wird alles automatisch erfasst und sortiert. Wir sparen jeden Tag mindestens 2 Stunden.",
    name: "AT Energiekonzepte",
    role: "Vertrieb · 2 Mitarbeiter",
    accent: "#00D4A0",
    metric: "2h / Tag gespart",
    featured: true,
  },
  {
    quote: "Ich war am Anfang echt skeptisch. Heute gehen keine Anrufe mehr verloren — in Woche 1 haben wir bereits 8 Termine gewonnen, die wir sonst verpasst hätten.",
    name: "Ralph E.",
    role: "SHK-Betrieb · 7 Mitarbeiter",
    accent: "#7C3AED",
    metric: "8 Termine / Woche 1",
    featured: false,
  },
  {
    quote: "Kein Anruf von Patienten geht mehr verloren. Mein Team spart täglich Zeit und kann sich endlich auf die wirklich wichtigen Dinge im Praxisalltag konzentrieren.",
    name: "Dr. Heinz R.",
    role: "Augenarztpraxis · 5 Mitarbeiter",
    accent: "#f97316",
    metric: "0 verpasste Anrufe",
    featured: false,
  },
];

function StarRow({ color }: { color: string }) {
  return (
    <div className="flex gap-1">
      {[1,2,3,4,5].map(s => (
        <svg key={s} width="13" height="13" viewBox="0 0 16 16" fill="#fbbf24">
          <path d="M8 1l2 4.5H15L11.5 8l1.5 5L8 10 3 13l1.5-5L1 5.5h5z"/>
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const ref       = useRef(null);
  const inView    = useInView(ref, { once: true, margin: "-80px" });
  const metricsRef = useRef(null);
  const metricsView = useInView(metricsRef, { once: true, margin: "-40px" });

  const [featured, ...supporting] = testimonials;

  return (
    <section
      ref={ref}
      className="relative py-32 px-4 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #000000 0%, #050914 50%, #000000 100%)" }}
    >
      <div className="orb orb-purple w-[500px] h-[500px] right-0 top-1/2 -translate-y-1/2" />

      {/* Top signal divider */}
      <div className="absolute top-0 inset-x-0 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.15), transparent)" }} />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-5 inline-block">Stimmen</span>
          <h2 className="text-[clamp(36px,6vw,72px)] font-black leading-[0.9] mt-5 mb-5">
            Das sagen<br />
            <span className="text-gradient">unsere Kunden.</span>
          </h2>
        </motion.div>

        {/* Metrics bar — 3 social proof numbers */}
        <motion.div
          ref={metricsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-3 gap-px mb-16 rounded-2xl overflow-hidden"
          style={{ background: "rgba(0,212,160,0.06)", border: "1px solid rgba(0,212,160,0.1)" }}
        >
          {metrics.map((m, i) => (
            <div key={m.label} className="flex flex-col items-center py-6 px-4"
              style={{ background: "#030810" }}>
              <p className="text-2xl md:text-3xl font-black text-gradient mb-1">
                <CountUp target={m.value} suffix={m.suffix} />
              </p>
              <p className="text-[11px] text-white/28 font-medium tracking-wide text-center">{m.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Featured testimonial — full width */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl p-8 md:p-10 mb-4 relative overflow-hidden"
          style={{
            background: "rgba(6,12,28,0.9)",
            border: `1px solid ${featured.accent}22`,
            boxShadow: `0 0 60px ${featured.accent}08`,
          }}
        >
          {/* Large decorative quote mark */}
          <div
            className="absolute top-4 right-6 text-[120px] font-black leading-none select-none pointer-events-none"
            style={{ color: `${featured.accent}08` }}
          >
            &ldquo;
          </div>

          {/* Accent bar */}
          <div className="w-10 h-[3px] rounded-full mb-6" style={{ background: featured.accent, boxShadow: `0 0 12px ${featured.accent}` }} />

          <StarRow color={featured.accent} />

          <p className="text-xl md:text-2xl font-medium leading-relaxed mt-5 mb-8 relative z-10 max-w-3xl"
            style={{ color: "rgba(255,255,255,0.75)" }}>
            &ldquo;{featured.quote}&rdquo;
          </p>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm"
                style={{ background: `${featured.accent}18`, border: `1px solid ${featured.accent}30`, color: featured.accent }}>
                {featured.name[0]}
              </div>
              <div>
                <p className="text-sm font-bold text-white">{featured.name}</p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.28)" }}>{featured.role}</p>
              </div>
            </div>

            {/* Specific metric badge */}
            <div className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold"
              style={{ background: `${featured.accent}12`, border: `1px solid ${featured.accent}22`, color: featured.accent }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              {featured.metric}
            </div>
          </div>
        </motion.div>

        {/* Supporting testimonials — 2 smaller cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {supporting.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40, rotate: i === 0 ? -1 : 1 }}
              animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.35 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.28 } }}
              className="glass-card rounded-2xl p-6 cursor-none relative overflow-hidden"
            >
              <div className="h-[2px] w-8 rounded-full mb-4" style={{ background: t.accent, boxShadow: `0 0 10px ${t.accent}` }} />
              <StarRow color={t.accent} />
              <p className="text-sm leading-relaxed mt-4 mb-5" style={{ color: "rgba(255,255,255,0.45)" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs"
                    style={{ background: `${t.accent}18`, border: `1px solid ${t.accent}28`, color: t.accent }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.25)" }}>{t.role}</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                  style={{ background: `${t.accent}10`, color: t.accent }}>
                  {t.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
