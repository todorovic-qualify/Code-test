"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "Früher war das Chaos pur – Anrufe, Rückrufe, Angebote, genervte Kunden. Jetzt wird alles automatisch erfasst und sortiert. Wir sparen jeden Tag richtig viel Zeit.",
    name: "AT Energiekonzepte",
    role: "Vertrieb, 2 Mitarbeiter",
    gradient: "from-[#00D4A0]/20 via-transparent to-transparent",
  },
  {
    quote: "Ich war am Anfang echt skeptisch. Heute gehen keine Anrufe mehr verloren und ich hab endlich wieder den Kopf frei für meine eigentliche Arbeit.",
    name: "Ralph E.",
    role: "SHK-Betrieb, 7 Mitarbeiter",
    gradient: "from-[#7C3AED]/20 via-transparent to-transparent",
  },
  {
    quote: "Heute geht kein Anruf von Patienten mehr verloren und mein Team hat endlich wieder mehr Zeit für die wichtigen Dinge im Praxisalltag.",
    name: "Dr. Heinz R.",
    role: "Augenarztpraxis, 5 Mitarbeiter",
    gradient: "from-[#f59e0b]/20 via-transparent to-transparent",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 px-4" ref={ref}>
      <div className="divider" />

      <div className="relative z-10 max-w-6xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4">Kundenstimmen</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mt-5 mb-5">
            Das sagen unsere{" "}
            <span className="text-gradient">Kunden</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative group"
            >
              {/* Gradient border effect */}
              <div className="card-hover rounded-2xl p-[1px] bg-gradient-to-b from-white/[0.08] to-transparent">
                <div className={`rounded-2xl p-6 bg-[#0a1020] h-full relative overflow-hidden`}>
                  {/* Background gradient */}
                  <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${t.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex gap-1 mb-5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} width="16" height="16" viewBox="0 0 16 16" fill="#fbbf24">
                          <path d="M8 1l2 4.5H15L11.5 8l1.5 5L8 10 3 13l1.5-5L1 5.5h5z" />
                        </svg>
                      ))}
                    </div>

                    <p className="text-sm text-white/50 leading-relaxed mb-6">
                      &ldquo;{t.quote}&rdquo;
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center">
                        <span className="text-sm font-bold text-white/60">{t.name[0]}</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{t.name}</p>
                        <p className="text-xs text-white/30">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
