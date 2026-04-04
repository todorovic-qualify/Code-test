"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const industries = [
  {
    icon: "🏗️",
    name: "Handwerker",
    pain: "Während du auf der Baustelle bist, klingelt dein Handy ständig.",
    solution: "Qualify.ai nimmt jeden Anruf an, qualifiziert die Anfrage und bucht den Termin.",
  },
  {
    icon: "🏥",
    name: "Ärzte & Praxen",
    pain: "Das Wartezimmer ist voll, das Telefon hört nicht auf zu klingeln.",
    solution: "Patienten-Anrufe werden automatisch beantwortet, kategorisiert und weitergeleitet.",
  },
  {
    icon: "🏠",
    name: "Immobilienmakler",
    pain: "Interessenten rufen an, wenn du gerade einen anderen Besichtigungstermin hast.",
    solution: "Kein Lead geht verloren – der Assistent qualifiziert und bucht direkt nach.",
  },
  {
    icon: "📊",
    name: "Vertriebe",
    pain: "Follow-Ups, Rückrufe, Lead-Reaktivierung – alles manuell, alles zeitraubend.",
    solution: "After-Sales Automation, Touchpoints und Follow-Ups laufen vollautomatisch.",
  },
  {
    icon: "🛡️",
    name: "Versicherungsmakler",
    pain: "Kunden rufen an, wenn du im Kundengespräch bist – und rufen nie wieder an.",
    solution: "Jeder Erstkontakt wird sofort angenommen und professionell bearbeitet.",
  },
];

export default function IndustriesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Für deine Branche gemacht
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Egal in welcher Branche – Qualify.ai passt sich deinem Betrieb an,
            nicht umgekehrt.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-hover bg-white border border-slate-100 rounded-2xl p-6 shadow-sm"
            >
              <span className="text-3xl mb-3 block">{ind.icon}</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">{ind.name}</h3>
              <p className="text-xs text-slate-500 mb-3 italic">„{ind.pain}"</p>
              <p className="text-sm text-slate-700">{ind.solution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
