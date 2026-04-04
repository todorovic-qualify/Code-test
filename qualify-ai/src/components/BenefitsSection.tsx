"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
  {
    title: "Mehr Umsatz.",
    desc: "Keine Anfrage geht mehr verloren. Jeder Kontakt wird erfasst und genutzt.",
    icon: "📈",
    highlight: "€2.000 → €50.000",
    color: "from-violet-50 to-purple-50",
  },
  {
    title: "Weniger Unterbrechungen.",
    desc: "Anrufe werden automatisch beantwortet. Du kannst dich auf deine Arbeit konzentrieren.",
    icon: "🔕",
    highlight: "0 Unterbrechungen",
    color: "from-teal-50 to-green-50",
  },
  {
    title: "Mehr Zeit.",
    desc: "Weniger Telefon. Weniger Chaos. Mehr Fokus auf dein Geschäft.",
    icon: "⏱️",
    highlight: "+3h täglich frei",
    color: "from-amber-50 to-yellow-50",
  },
  {
    title: "Klare Struktur.",
    desc: "Anfragen werden automatisch erfasst, sortiert und direkt weitergeleitet.",
    icon: "📋",
    highlight: "Alles strukturiert",
    color: "from-blue-50 to-sky-50",
  },
];

export default function BenefitsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4 bg-slate-50" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Mehr Anfragen. Weniger Chaos. Mehr Zeit.
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Qualify.ai sorgt dafür, dass jede Anfrage angenommen, automatisch eingeordnet
            und direkt weiterverarbeitet wird – ohne dass du dich darum kümmern musst.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`card-hover bg-gradient-to-br ${b.color} rounded-2xl p-6 border border-white`}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{b.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{b.title}</h3>
                  <p className="text-slate-600 text-sm mb-3">{b.desc}</p>
                  <span className="text-xs font-semibold bg-white px-3 py-1 rounded-full text-slate-700 shadow-sm">
                    {b.highlight}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
