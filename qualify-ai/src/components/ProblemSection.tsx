"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Was passiert aktuell bei dir?
            </h2>
            <div className="space-y-2 mb-6 text-slate-600">
              <p>Dein Telefon klingelt.</p>
              <p>Du bist im Termin, im Gespräch oder bei der Arbeit.</p>
              <p>Du gehst nicht ran.</p>
              <p className="font-semibold text-slate-900">Der Kunde ruft beim nächsten Anbieter an.</p>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "Kein Anruf geht mehr verloren",
                "Nur relevante Anfragen landen bei dir",
                "Mehr Zeit für dein Kerngeschäft",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                      <path d="M1 4.5L4 7.5L11 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#kontakt"
              className="inline-block bg-slate-900 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-slate-700 transition-colors"
            >
              Kostenlose Demo anfragen
            </a>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-slate-50 rounded-3xl p-8 flex items-center justify-center min-h-64"
          >
            {/* Stressed call illustration */}
            <div className="text-center">
              <div className="text-7xl mb-4">📞</div>
              <div className="bg-white rounded-2xl shadow-md p-4 max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"/>
                  <span className="text-sm font-semibold text-slate-700">3 verpasste Anrufe</span>
                </div>
                <p className="text-xs text-slate-500">Heute zwischen 09:00 – 12:00 Uhr</p>
                <div className="mt-3 space-y-1">
                  {["09:14", "10:32", "11:47"].map(t => (
                    <div key={t} className="flex items-center justify-between text-xs py-1 border-b border-slate-100">
                      <span className="text-slate-600">Unbekannte Nummer</span>
                      <span className="text-red-500 font-medium">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
