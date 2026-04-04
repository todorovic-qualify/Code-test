"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "Früher war das Chaos pur – Anrufe, Rückrufe, Angebote, genervte Kunden... Jetzt wird alles automatisch erfasst und sortiert. Wir sparen jeden Tag richtig viel Zeit.",
    name: "AT Energiekonzepte",
    role: "Vertrieb, 2 Mitarbeiter",
    avatar: "⚡",
    featured: false,
  },
  {
    quote:
      "Ich war am Anfang echt skeptisch, ob das bei uns funktioniert. Heute gehen keine Anrufe mehr verloren und ich hab endlich wieder den Kopf frei für meine eigentliche Arbeit.",
    name: "Ralph E.",
    role: "SHK-Betrieb, 7 Mitarbeiter",
    avatar: "🔧",
    featured: true,
  },
  {
    quote:
      "Ich war am Anfang ehrlich gesagt skeptisch. Heute geht kein Anruf von Patienten mehr verloren und mein Team hat endlich wieder mehr Zeit für die wichtigen Dinge im Praxisalltag.",
    name: "Dr. Heinz R.",
    role: "Augenarztpraxis, 5 Mitarbeiter",
    avatar: "👁️",
    featured: false,
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4 gradient-section" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Was unsere Kunden sagen
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Viele waren am Anfang skeptisch – bis sie gesehen haben, wie viele Anrufe ihnen
            täglich entgehen und wie viel Zeit sie durch unseren KI-Assistenten zurückgewinnen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 items-start">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`card-hover rounded-2xl p-6 ${
                t.featured
                  ? "bg-slate-900 text-white shadow-2xl scale-105"
                  : "bg-white text-slate-900 shadow-sm border border-slate-100"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{t.avatar}</span>
                <div>
                  <p className={`text-sm font-bold ${t.featured ? "text-white" : "text-slate-900"}`}>{t.name}</p>
                  <p className={`text-xs ${t.featured ? "text-slate-400" : "text-slate-500"}`}>{t.role}</p>
                </div>
              </div>
              <p className={`text-sm leading-relaxed ${t.featured ? "text-slate-300" : "text-slate-600"}`}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4 flex gap-0.5">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} width="14" height="14" viewBox="0 0 14 14" fill={t.featured ? "#fbbf24" : "#f59e0b"}>
                    <path d="M7 1l1.5 4H13L9.5 7.5 11 12 7 9.5 3 12l1.5-4.5L1 5h4.5z"/>
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
