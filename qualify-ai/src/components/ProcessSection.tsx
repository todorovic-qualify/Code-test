"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    emoji: "📵",
    title: "Kein Anruf geht mehr verloren",
    desc: "Jeder Kunde wird sofort angenommen – auch wenn Sie gerade im Termin sind.",
  },
  {
    emoji: "🔍",
    title: "Nur noch relevante Anfragen",
    desc: "Unwichtige Gespräche werden gefiltert – Sie sprechen nur noch mit echten Interessenten.",
  },
  {
    emoji: "📅",
    title: "Termine werden automatisch gebucht",
    desc: "Ihr Kalender füllt sich von selbst – ohne Hin und Her am Telefon.",
  },
  {
    emoji: "⚡",
    title: "Mehr Zeit für Ihr Kerngeschäft",
    desc: "Weniger Unterbrechungen, weniger Stress – Sie konzentrieren sich auf das, was wirklich Geld bringt.",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4 bg-slate-50" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="inline-block text-xs font-semibold bg-amber-100 text-amber-700 px-3 py-1 rounded-full mb-4">
            Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Warum sich Betriebe trotz anfänglicher Skepsis dafür entscheiden
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Vielleicht geht es Ihnen ähnlich wie vielen unserer Kunden am Anfang: Man denkt, man hat
            alles im Griff – bis man sieht, wie viele Anfragen nie beantwortet wurden.
          </p>
          <a
            href="#kontakt"
            className="inline-block bg-slate-900 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-slate-700 transition-colors"
          >
            Kostenlose Demo anfragen
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
              className="card-hover flex gap-4 bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
            >
              <span className="text-3xl flex-shrink-0">{s.emoji}</span>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">{s.title}</h3>
                <p className="text-sm text-slate-500">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
