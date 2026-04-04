"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const plans = [
  {
    name: "Starter",
    desc: "Für Betriebe, die keine Anrufe mehr verpassen wollen",
    price: "99",
    priceNote: "Ab",
    featured: false,
    features: [
      "Anrufe automatisch annehmen",
      "24/7 erreichbar",
      "Einfache Vorqualifizierung",
      "Relevante Anfragen filtern",
      "Automatische Terminbuchung",
    ],
  },
  {
    name: "Professional",
    desc: "Für Betriebe, die wachsen wollen — ohne mehr Chaos",
    price: "149",
    priceNote: "Ab",
    featured: true,
    badge: "Beliebteste Wahl",
    features: [
      "Alles aus Starter +",
      "Kontaktpunkt-Sequenzen",
      "Intelligente Follow-Up Sequenzen",
      "Automatische Terminvereinbarung",
      "Priorisiert wichtige Anfragen",
      "Weniger Unterbrechungen",
      "Automatische Info-Meldungen",
    ],
  },
  {
    name: "Enterprise",
    desc: "Für Betriebe, die maximale Zeitersparnis wollen",
    price: null,
    priceNote: "",
    featured: false,
    features: [
      "Alles aus Professional +",
      "Persönlicher digitaler Assistent",
      "Angebotserstellung automatisiert",
      "Rechnungserstellung automatisiert",
      "E-Mail-Kommunikation übernommen",
      "Multi-Channel (E-Mail, SMS, WhatsApp)",
      "Individuelle Automatisierungen",
    ],
  },
];

export default function PricingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="preise" className="relative py-28 px-4" ref={ref}>
      <div className="divider" />
      <div className="orb-purple right-0 top-1/3" />

      <div className="relative z-10 max-w-6xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4">Preise</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mt-5 mb-5">
            Wähle deinen{" "}
            <span className="text-gradient">Plan</span>
          </h2>
          <p className="text-white/35 max-w-lg mx-auto text-base">
            Drei Stufen — passend zu deinem Betrieb. Starte klein, skaliere groß.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative"
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-[#00D4A0] text-[#050914] text-[10px] font-bold px-3 py-1 rounded-full shadow-lg shadow-[#00D4A0]/20">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div
                className={`rounded-2xl p-[1px] h-full ${
                  plan.featured
                    ? "bg-gradient-to-b from-[#00D4A0]/40 via-[#00D4A0]/10 to-transparent"
                    : "bg-gradient-to-b from-white/[0.08] to-transparent"
                }`}
              >
                <div className={`rounded-2xl p-6 h-full flex flex-col ${plan.featured ? "bg-[#0a1628]" : "bg-[#0a1020]"}`}>
                  <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-xs text-white/30 mb-6">{plan.desc}</p>

                  {/* Price */}
                  <div className="mb-6">
                    {plan.price ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs text-white/30">{plan.priceNote}</span>
                        <span className="text-4xl font-black text-white">{plan.price} €</span>
                        <span className="text-xs text-white/30">/ Monat</span>
                      </div>
                    ) : (
                      <span className="text-4xl font-black text-white">Auf Anfrage</span>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-white/50">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
                          <circle cx="8" cy="8" r="7" stroke={plan.featured ? "#00D4A0" : "rgba(255,255,255,0.15)"} strokeWidth="1.5" />
                          <path d="M5 8l2 2 4-4" stroke={plan.featured ? "#00D4A0" : "rgba(255,255,255,0.3)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#kontakt"
                    className={`block text-center text-sm font-bold py-3.5 rounded-xl transition-all ${
                      plan.featured
                        ? "btn-teal"
                        : "border border-white/10 text-white/70 hover:border-white/25 hover:text-white"
                    }`}
                  >
                    Demo anfragen
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
