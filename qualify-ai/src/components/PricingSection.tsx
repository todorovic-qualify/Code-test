"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const plans = [
  {
    name: "Starter",
    tagline: "Für Betriebe, die keine Anrufe mehr verpassen wollen",
    price: "99",
    priceLabel: "Ab 99 €",
    period: "Per Month",
    featured: false,
    features: [
      "Anrufe werden automatisch angenommen",
      "24/7 erreichbar – auch wenn du im Termin bist",
      "Erste einfache Vorqualifizierung",
      "Nur noch relevante Anfragen landen bei dir",
      "Termine werden automatisch gebucht",
    ],
  },
  {
    name: "Pro",
    tagline: "Für Betriebe, die wachsen wollen – ohne mehr Chaos",
    price: "149",
    priceLabel: "Ab 149 €",
    period: "Per Month",
    featured: true,
    badge: "Empfohlen",
    features: [
      "Anrufe werden automatisch angenommen",
      "24/7 erreichbar – auch wenn du im Termin bist",
      "Erste einfache Vorqualifizierung",
      "Nur noch relevante Anfragen landen bei dir",
      "Termine werden automatisch gebucht",
      "Automatische Info Meldung",
      "Weniger Unterbrechungen im Alltag",
    ],
  },
  {
    name: "Enterprise",
    tagline: "Für Betriebe, die maximale Zeitersparnis wollen",
    price: null,
    priceLabel: "Auf Anfrage",
    period: "Per Month",
    featured: false,
    features: [
      "Anrufe werden automatisch angenommen",
      "24/7 erreichbar – auch wenn du im Termin bist",
      "Erste einfache Vorqualifizierung",
      "Nur noch relevante Anfragen landen bei dir",
      "Termine werden automatisch gebucht",
      "Automatische Info Meldung",
      "Weniger Unterbrechungen im Alltag",
      "Persönlicher digitaler Assistent",
      "Angebotserstellung automatisiert",
      "Rechnungserstellung automatisiert",
      "E-Mail-Kommunikation wird übernommen",
      "Individuelle Automatisierungen (auf deinen Betrieb angepasst)",
    ],
  },
];

export default function PricingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="preise" className="py-20 px-4 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Wähle dein Paket
          </h2>
          <p className="text-slate-600">Drei Stufen – passend zu deinem Vertrieb.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className={`relative rounded-2xl p-6 flex flex-col h-full ${
                plan.featured
                  ? "border-2 border-violet-400 shadow-xl bg-white"
                  : "border border-slate-200 bg-white shadow-sm"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-violet-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                <p className="text-sm text-slate-500">{plan.tagline}</p>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <p className="text-3xl font-bold text-slate-900">{plan.priceLabel}</p>
                <p className="text-sm text-slate-500 mb-4">{plan.period}</p>
                <button
                  className={`w-full py-3 rounded-full font-semibold transition-colors ${
                    plan.featured
                      ? "bg-slate-900 text-white hover:bg-slate-700"
                      : "border border-slate-300 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  Demo anfragen
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
