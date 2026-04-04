"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="kontakt" className="py-20 px-4 gradient-cta" ref={ref}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Bereit, keinen Anruf mehr zu verpassen?
          </h2>
          <p className="text-slate-600 mb-8">
            Starte noch heute mit einer kostenlosen Demo. Wir zeigen dir live,
            wie Qualify.ai in deinem Betrieb funktioniert.
          </p>

          <div className="bg-white rounded-2xl shadow-xl p-8 text-left">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Max Mustermann"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Unternehmen</label>
                <input
                  type="text"
                  placeholder="Musterfirma GmbH"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-1">E-Mail</label>
              <input
                type="email"
                placeholder="max@musterfirma.de"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-1">Branche</label>
              <select className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 text-slate-700">
                <option value="">Branche auswählen</option>
                <option>Handwerk</option>
                <option>Arztpraxis / Gesundheit</option>
                <option>Immobilien</option>
                <option>Vertrieb / Sales</option>
                <option>Versicherung</option>
                <option>Andere</option>
              </select>
            </div>
            <button className="w-full bg-violet-600 text-white font-semibold py-4 rounded-xl hover:bg-violet-700 transition-colors text-base">
              Kostenlose Demo anfragen →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
