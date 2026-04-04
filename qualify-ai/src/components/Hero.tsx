"use client";
import { motion, Variants, Easing } from "framer-motion";

const ease: Easing = "easeOut";
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6, ease } }),
};

export default function Hero() {
  return (
    <section className="gradient-hero min-h-screen flex items-center pt-28 pb-16 px-4">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <motion.p
              custom={0} variants={fadeUp} initial="hidden" animate="visible"
              className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3"
            >
              KI-Assistent für deinen Betrieb
            </motion.p>
            <motion.h1
              custom={1} variants={fadeUp} initial="hidden" animate="visible"
              className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4"
            >
              Verpasste Anrufe kosten Zeit.{" "}
              <span className="text-violet-600">Verpasste Anrufe kosten Umsatz!</span>
            </motion.h1>
            <motion.p
              custom={2} variants={fadeUp} initial="hidden" animate="visible"
              className="text-base text-slate-600 mb-6 leading-relaxed"
            >
              Qualify.ai nimmt jeden Anruf für dich an, erkennt automatisch relevante Anfragen,
              kategorisiert sie und bucht Termine direkt in deinen Kalender – während du dich
              auf dein Geschäft konzentrierst.
            </motion.p>
            <motion.ul
              custom={3} variants={fadeUp} initial="hidden" animate="visible"
              className="space-y-2 mb-8"
            >
              {[
                "24/7 erreichbar für deine Kunden",
                "Filtert & kategorisiert relevante Anfragen",
                "Mehr Zeit für dein Kerngeschäft",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                  <span className="w-5 h-5 rounded-full bg-violet-600 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </motion.ul>
            <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible">
              <a
                href="#kontakt"
                className="inline-block bg-violet-600 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-violet-700 transition-colors shadow-lg shadow-violet-200"
              >
                Kostenlose Demo anfragen
              </a>
            </motion.div>
          </div>

          {/* Right: UI Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            {/* Incoming call card */}
            <div className="bg-white rounded-2xl shadow-xl p-5 max-w-xs mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Kunde ruft an</p>
                  <p className="text-sm font-semibold text-slate-900">+49 176 ••• ••••</p>
                </div>
              </div>
              <div className="bg-violet-50 rounded-xl p-3 mb-3">
                <p className="text-xs font-semibold text-violet-700 mb-1">Qualify AI Assistent</p>
                <p className="text-xs text-slate-600">Automatische Echtzeit-Transkription: „Guten Tag, ich interessiere mich für..."</p>
                <div className="mt-2 flex gap-0.5">
                  {[3,5,4,7,5,4,6,3,5,4,3,5,6,4].map((h, i) => (
                    <div key={i} className="w-1 rounded-full bg-violet-400" style={{height: `${h * 2}px`}}/>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-teal-600 font-medium">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"/>
                Anruf wird automatisch beantwortet
              </div>
            </div>

            {/* Lead Qualification badge */}
            <div className="absolute -right-4 top-4 bg-white rounded-xl shadow-lg p-3 text-xs">
              <p className="font-semibold text-slate-700 mb-1">Lead Qualification</p>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-slate-500">Kunden-Anfrage</span>
              </div>
              <span className="bg-teal-100 text-teal-700 font-semibold px-2 py-0.5 rounded-full text-xs">✓ Qualifiziert</span>
            </div>

            {/* Appointment booked badge */}
            <div className="absolute -left-4 bottom-4 bg-white rounded-xl shadow-lg p-3 text-xs">
              <p className="font-semibold text-slate-700 mb-2">Termin gebucht</p>
              <div className="grid grid-cols-5 gap-0.5 text-center">
                {["Mo","Di","Mi","Do","Fr"].map(d => (
                  <span key={d} className="text-slate-400 text-xs">{d}</span>
                ))}
                {[null,null,"14",null,null].map((d, i) => (
                  <span key={i} className={`text-xs rounded ${d === "14" ? "bg-violet-600 text-white font-bold" : "text-slate-300"}`}>{d || "•"}</span>
                ))}
              </div>
              <p className="mt-1.5 text-teal-600 text-xs font-medium">✓ Termin automatisch gebucht</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
