"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="kontakt" className="relative py-28 px-4" ref={ref}>
      <div className="divider" />
      <div className="orb-teal left-1/4 top-1/2" />
      <div className="orb-purple right-1/4 top-1/3" />

      <div className="relative z-10 max-w-2xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label mb-4">Loslegen</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mt-5 mb-5">
            Bereit für deinen{" "}
            <span className="text-gradient">KI-Assistenten?</span>
          </h2>
          <p className="text-white/35 text-base">
            In 15 Minuten zeigen wir dir live, was dein Assistent für deinen Betrieb leisten kann.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="rounded-2xl p-[1px] bg-gradient-to-b from-white/[0.08] to-transparent">
            <div className="rounded-2xl p-8 bg-[#0a1020]">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-white/30 uppercase tracking-wider mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Max Mustermann"
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-white/15 focus:outline-none focus:border-[#00D4A0]/40 focus:shadow-[0_0_20px_rgba(0,212,160,0.1)] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white/30 uppercase tracking-wider mb-2">Unternehmen</label>
                  <input
                    type="text"
                    placeholder="Musterfirma GmbH"
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-white/15 focus:outline-none focus:border-[#00D4A0]/40 focus:shadow-[0_0_20px_rgba(0,212,160,0.1)] transition-all"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-xs font-semibold text-white/30 uppercase tracking-wider mb-2">E-Mail</label>
                <input
                  type="email"
                  placeholder="max@musterfirma.de"
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-white/15 focus:outline-none focus:border-[#00D4A0]/40 focus:shadow-[0_0_20px_rgba(0,212,160,0.1)] transition-all"
                />
              </div>
              <div className="mb-6">
                <label className="block text-xs font-semibold text-white/30 uppercase tracking-wider mb-2">Branche</label>
                <select className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white/50 focus:outline-none focus:border-[#00D4A0]/40 transition-all appearance-none">
                  <option value="">Branche auswählen</option>
                  <option>Handwerk</option>
                  <option>Arztpraxis / Gesundheit</option>
                  <option>Immobilien</option>
                  <option>Vertrieb / Energievertrieb</option>
                  <option>Versicherung</option>
                  <option>Andere</option>
                </select>
              </div>
              <button className="btn-teal w-full py-4 text-base rounded-xl">
                Kostenlose Demo starten →
              </button>
              <p className="text-center text-[10px] text-white/15 mt-4">
                Unverbindlich & kostenlos. Innerhalb von 24h melden wir uns.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
