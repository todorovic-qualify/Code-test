"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";

const plans = [
  {
    name: "Starter",
    desc: "Kein Anruf mehr verpassen",
    price: "99",
    accent: "rgba(255,255,255,0.08)",
    glowColor: "rgba(255,255,255,0.03)",
    features: ["Anrufe automatisch annehmen","24/7 erreichbar","Einfache Vorqualifizierung","Relevante Anfragen filtern","Automatische Terminbuchung"],
  },
  {
    name: "Professional",
    desc: "Wachsen ohne Chaos",
    price: "149",
    accent: "rgba(0,212,160,0.25)",
    glowColor: "rgba(0,212,160,0.06)",
    featured: true,
    badge: "Empfohlen",
    features: ["Alles aus Starter","Kontaktpunkt-Sequenzen","Intelligente Follow-Ups","Automatische Terminvereinbarung","Weniger Unterbrechungen","Automatische Info-Meldungen","Priorisiert wichtige Anfragen"],
  },
  {
    name: "Enterprise",
    desc: "Maximale Zeitersparnis",
    price: null,
    accent: "rgba(124,58,237,0.2)",
    glowColor: "rgba(124,58,237,0.04)",
    features: ["Alles aus Professional","Persönlicher Assistent","Angebotserstellung","Rechnungserstellung","E-Mail-Kommunikation","Multi-Channel (SMS, WhatsApp)","Individuelle Automatisierungen"],
  },
];

export default function PricingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="preise" className="relative py-32 px-4 overflow-hidden" ref={ref}>
      <div className="divider" />
      <div className="orb orb-teal w-[400px] h-[400px] left-0 top-1/3" />

      <div className="relative z-10 max-w-6xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="section-label mb-5 inline-block">Preise</span>
          <h2 className="text-[clamp(36px,6vw,72px)] font-black leading-[0.9] mt-5 mb-5">
            Starte noch<br />
            <span className="text-gradient">heute.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <span className="text-[10px] font-bold text-black bg-[#00D4A0] px-3 py-1 rounded-full shadow-lg shadow-[#00D4A0]/30">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="rounded-2xl p-[1px]" style={{
                background: `linear-gradient(145deg, ${plan.accent}, transparent)`,
                boxShadow: `0 0 60px ${plan.glowColor}`,
              }}>
                <div className="rounded-2xl p-6 flex flex-col h-full" style={{ background: "#080e1a" }}>
                  <h3 className="text-lg font-black text-white mb-1">{plan.name}</h3>
                  <p className="text-xs text-white/25 mb-6">{plan.desc}</p>

                  <div className="mb-7">
                    {plan.price
                      ? <div className="flex items-baseline gap-1"><span className="text-xs text-white/25">Ab</span><span className="text-5xl font-black text-white">{plan.price}</span><span className="text-sm text-white/30"> € / Mo.</span></div>
                      : <span className="text-3xl font-black text-white">Auf Anfrage</span>
                    }
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-white/40">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="flex-shrink-0 mt-0.5" style={{ color: plan.featured ? "#00D4A0" : "rgba(255,255,255,0.25)" }}>
                          <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.2"/>
                          <path d="M4.5 7.5l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <MagneticButton
                    href="#kontakt"
                    className={`block text-center text-sm font-bold py-3.5 rounded-xl w-full transition-all ${
                      plan.featured ? "btn-teal" : "border border-white/10 text-white/50 hover:text-white hover:border-white/25"
                    }`}
                  >
                    Demo anfragen
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
