"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="kontakt" className="relative py-32 px-4 overflow-hidden" ref={ref}>
      <div className="divider" />
      <div className="orb orb-teal w-[500px] h-[500px] left-1/4 top-0" />
      <div className="orb orb-purple w-[400px] h-[400px] right-1/4 bottom-0" />

      <div className="relative z-10 max-w-2xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="section-label mb-5 inline-block">Loslegen</span>
          <h2 className="text-[clamp(36px,6vw,72px)] font-black leading-[0.9] mt-5 mb-5">
            Bereit für<br />
            <span className="text-gradient">0 verpasste Anrufe?</span>
          </h2>
          <p className="text-white/30 text-base">
            15-Minuten Demo — wir zeigen live, was dein KI-Assistent für deinen Betrieb leistet.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="rounded-2xl p-[1px] bg-gradient-to-b from-[#00D4A0]/20 via-white/5 to-transparent">
            <div className="rounded-2xl p-8 bg-[#060d18]">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {[["Name","Max Mustermann"],["Unternehmen","Musterfirma GmbH"]].map(([label, ph]) => (
                  <div key={label}>
                    <label className="block text-[10px] font-bold text-white/20 uppercase tracking-widest mb-2">{label}</label>
                    <input type="text" placeholder={ph}
                      className="w-full bg-white/[0.03] border border-white/[0.07] rounded-xl px-4 py-3 text-sm text-white placeholder-white/10 focus:outline-none focus:border-[#00D4A0]/40 focus:shadow-[0_0_20px_rgba(0,212,160,0.08)] transition-all cursor-none" />
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <label className="block text-[10px] font-bold text-white/20 uppercase tracking-widest mb-2">E-Mail</label>
                <input type="email" placeholder="max@firma.de"
                  className="w-full bg-white/[0.03] border border-white/[0.07] rounded-xl px-4 py-3 text-sm text-white placeholder-white/10 focus:outline-none focus:border-[#00D4A0]/40 focus:shadow-[0_0_20px_rgba(0,212,160,0.08)] transition-all cursor-none" />
              </div>
              <div className="mb-6">
                <label className="block text-[10px] font-bold text-white/20 uppercase tracking-widest mb-2">Branche</label>
                <select className="w-full bg-white/[0.03] border border-white/[0.07] rounded-xl px-4 py-3 text-sm text-white/40 focus:outline-none focus:border-[#00D4A0]/40 transition-all appearance-none cursor-none">
                  <option value="">Branche auswählen</option>
                  <option>Handwerk</option><option>Arztpraxis / Gesundheit</option>
                  <option>Immobilien</option><option>Vertrieb / Energievertrieb</option>
                  <option>Versicherung</option><option>Andere</option>
                </select>
              </div>
              <MagneticButton className="btn-teal w-full py-4 text-base rounded-xl text-center" strength={0.2}>
                Kostenlose Demo anfragen →
              </MagneticButton>
              <p className="text-center text-[10px] text-white/10 mt-4">Unverbindlich · kostenlos · Rückmeldung innerhalb 24h</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
