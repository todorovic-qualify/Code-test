"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";

const plans = [
  {
    name: "Starter",
    tagline: "Kein Anruf mehr verpassen",
    price: "99",
    accent: "rgba(255,255,255,0.06)",
    glowColor: "rgba(255,255,255,0.0)",
    borderColor: "rgba(255,255,255,0.08)",
    cta: "Demo anfragen",
    ctaStyle: "secondary",
    features: [
      "Anrufe automatisch annehmen",
      "24/7 erreichbar — nie beschäftigt",
      "Einfache Lead-Vorqualifizierung",
      "Relevante Anfragen filtern",
      "Automatische Terminbuchung",
    ],
  },
  {
    name: "Professional",
    tagline: "Wachsen ohne Chaos",
    price: "149",
    accent: "rgba(0,212,160,0.22)",
    glowColor: "rgba(0,212,160,0.08)",
    borderColor: "rgba(0,212,160,0.3)",
    badge: "Empfohlen",
    featured: true,
    cta: "Kostenlos testen",
    ctaStyle: "primary",
    features: [
      "Alles aus Starter",
      "Intelligente Follow-Up-Sequenzen",
      "Automatische Terminvereinbarung",
      "Lead-Priorisierung & Scoring",
      "Echtzeit-Transkription",
      "Weniger Unterbrechungen im Alltag",
      "Automatische Info-Meldungen",
    ],
  },
  {
    name: "Enterprise",
    tagline: "Volle Kontrolle & maximale Effizienz",
    price: null,
    accent: "rgba(124,58,237,0.18)",
    glowColor: "rgba(124,58,237,0.06)",
    borderColor: "rgba(124,58,237,0.25)",
    cta: "Angebot anfragen",
    ctaStyle: "purple",
    features: [
      "Alles aus Professional",
      "Persönlicher KI-Assistent",
      "Angebots- & Rechnungserstellung",
      "E-Mail-Kommunikation",
      "Multi-Channel (SMS, WhatsApp)",
      "Individuelle Automatisierungen",
      "Dedizierter Onboarding-Support",
    ],
  },
];

const trust = [
  "Kein Vertrag",
  "Kündigung jederzeit",
  "Onboarding inklusive",
  "Rückmeldung in 24h",
];

export default function PricingSection() {
  const ref     = useRef(null);
  const inView  = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="preise"
      ref={ref}
      className="relative py-32 px-4 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #000000 0%, #030810 50%, #000000 100%)" }}
    >
      {/* Signal divider */}
      <div className="absolute top-0 inset-x-0 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,160,0.12), transparent)" }} />
      <div className="orb orb-teal w-[400px] h-[400px] left-0 top-1/3" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <span className="section-label mb-5 inline-block">Preise</span>
          <h2 className="text-[clamp(36px,6vw,72px)] font-black leading-[0.9] mt-5 mb-5">
            Starte noch<br />
            <span className="text-gradient">heute.</span>
          </h2>
        </motion.div>

        {/* ROI anchor — frames the price before they see it */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="text-center text-sm mb-16 max-w-lg mx-auto leading-relaxed"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          Ein durchschnittlicher Betrieb gewinnt mit Qualify.ai{" "}
          <span className="font-bold" style={{ color: "#00D4A0" }}>4–6 zusätzliche Aufträge pro Monat</span>{" "}
          — die sich bereits im ersten Monat amortisieren.
        </motion.p>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-4 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Recommended badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="text-[10px] font-black text-black bg-[#00D4A0] px-3.5 py-1.5 rounded-full shadow-lg shadow-[#00D4A0]/30">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Card */}
              <div
                className="rounded-2xl p-[1px] h-full"
                style={{
                  background: `linear-gradient(145deg, ${plan.accent}, transparent 60%)`,
                  boxShadow: plan.featured
                    ? `0 0 0 1px ${plan.borderColor}, 0 24px 60px ${plan.glowColor}, 0 0 40px ${plan.glowColor}`
                    : `0 0 0 1px ${plan.borderColor}`,
                  transform: plan.featured ? "scale(1.02)" : undefined,
                }}
              >
                <div className="rounded-[calc(1rem-1px)] p-6 flex flex-col h-full" style={{ background: "#080e1c" }}>

                  <h3 className="text-lg font-black text-white mb-0.5">{plan.name}</h3>
                  <p className="text-xs mb-6" style={{ color: "rgba(255,255,255,0.28)" }}>{plan.tagline}</p>

                  {/* Price */}
                  <div className="mb-7">
                    {plan.price ? (
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.22)" }}>Ab</span>
                        <span className="text-5xl font-black text-white">{plan.price}</span>
                        <span className="text-sm" style={{ color: "rgba(255,255,255,0.28)" }}>€ / Mo.</span>
                      </div>
                    ) : (
                      <span className="text-3xl font-black text-white">Auf Anfrage</span>
                    )}
                  </div>

                  {/* Feature list */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.42)" }}>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="flex-shrink-0 mt-0.5"
                          style={{ color: plan.featured ? "#00D4A0" : plan.ctaStyle === "purple" ? "#7C3AED" : "rgba(255,255,255,0.2)" }}>
                          <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.2"/>
                          <path d="M4.5 7.5l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <MagneticButton
                    href="#kontakt"
                    className={`block text-center text-sm font-bold py-3.5 rounded-xl w-full transition-all ${
                      plan.ctaStyle === "primary"
                        ? "btn-teal"
                        : plan.ctaStyle === "purple"
                        ? ""
                        : ""
                    }`}
                    style={
                      plan.ctaStyle === "purple"
                        ? { background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", color: "#a78bfa" }
                        : plan.ctaStyle === "secondary"
                        ? { background: "transparent", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.45)" }
                        : undefined
                    }
                  >
                    {plan.cta}
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust anchor row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-12"
        >
          {trust.map((item) => (
            <div key={item} className="flex items-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.28)" }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="5" stroke="rgba(0,212,160,0.35)" strokeWidth="1"/>
                <path d="M3.5 6l1.8 1.8 3.2-3.2" stroke="#00D4A0" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
