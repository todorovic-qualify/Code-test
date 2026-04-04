"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "Früher war das Chaos pur — Anrufe, Rückrufe, Angebote, genervte Kunden. Jetzt wird alles automatisch erfasst und sortiert. Wir sparen jeden Tag richtig viel Zeit.",
    name: "AT Energiekonzepte",
    role: "Vertrieb, 2 Mitarbeiter",
    accent: "#00D4A0",
  },
  {
    quote: "Ich war am Anfang echt skeptisch. Heute gehen keine Anrufe mehr verloren und ich hab endlich wieder den Kopf frei für meine eigentliche Arbeit.",
    name: "Ralph E.",
    role: "SHK-Betrieb, 7 Mitarbeiter",
    accent: "#7C3AED",
  },
  {
    quote: "Heute geht kein Anruf von Patienten mehr verloren und mein Team hat endlich wieder mehr Zeit für die wichtigen Dinge im Praxisalltag.",
    name: "Dr. Heinz R.",
    role: "Augenarztpraxis, 5 Mitarbeiter",
    accent: "#f97316",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-32 px-4 overflow-hidden" ref={ref}>
      <div className="divider" />
      <div className="orb orb-purple w-[600px] h-[600px] right-0 top-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="section-label mb-5 inline-block">Stimmen</span>
          <h2 className="text-[clamp(36px,6vw,72px)] font-black leading-[0.9] mt-5 mb-5">
            Das sagen<br />
            <span className="text-gradient">unsere Kunden.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 60, rotate: i % 2 === 0 ? -2 : 2 }}
              animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card rounded-2xl p-6 cursor-none"
            >
              {/* Accent line */}
              <div className="h-[2px] w-12 rounded-full mb-5" style={{ background: t.accent, boxShadow: `0 0 12px ${t.accent}` }} />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[1,2,3,4,5].map(s=>(
                  <svg key={s} width="14" height="14" viewBox="0 0 16 16" fill="#fbbf24">
                    <path d="M8 1l2 4.5H15L11.5 8l1.5 5L8 10 3 13l1.5-5L1 5.5h5z"/>
                  </svg>
                ))}
              </div>

              <p className="text-sm text-white/45 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{ background: `${t.accent}18`, border: `1px solid ${t.accent}30`, color: t.accent }}>
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-[11px] text-white/25">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
