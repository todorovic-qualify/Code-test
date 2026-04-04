"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    color: "#00D4A0",
    title: "Anruf kommt rein",
    desc: "Du bist gerade im Termin. Dein Assistent nimmt sofort professionell ab.",
    visual: (
      <div className="glass rounded-xl p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-[#00D4A0]/10 border border-[#00D4A0]/20 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D4A0" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07"/></svg>
          </div>
          <div>
            <p className="text-[11px] font-semibold text-white">Eingehender Anruf</p>
            <p className="text-[9px] text-white/30">+49 176 •••• ••••</p>
          </div>
        </div>
        <div className="bg-[#00D4A0]/10 rounded-lg px-3 py-2 text-[10px] text-[#00D4A0] font-semibold flex items-center gap-2">
          <span className="pulse-dot scale-75" />KI nimmt automatisch an
        </div>
      </div>
    ),
  },
  {
    num: "02",
    color: "#7C3AED",
    title: "KI spricht & transkribiert",
    desc: "Natürliche Konversation. Alles wird live transkribiert und analysiert.",
    visual: (
      <div className="glass rounded-xl p-4 space-y-2">
        <div className="flex items-center gap-1.5 mb-2">
          <span className="pulse-dot scale-75" style={{background:"#7C3AED"}} />
          <span className="text-[9px] text-purple-400 font-semibold">Live-Transkription</span>
        </div>
        <div className="bg-white/[0.03] rounded-lg p-2 border-l-2 border-[#00D4A0]/40 text-[9px] text-white/50">
          KI: &quot;Guten Tag! Wie kann ich Ihnen helfen?&quot;
        </div>
        <div className="bg-white/[0.03] rounded-lg p-2 border-l-2 border-purple-400/40 text-[9px] text-white/50">
          Kunde: &quot;Ich brauche ein Angebot für...&quot;
        </div>
      </div>
    ),
  },
  {
    num: "03",
    color: "#f97316",
    title: "Lead wird qualifiziert",
    desc: "KI erkennt Relevanz und Score — sofort kategorisiert.",
    visual: (
      <div className="glass rounded-xl p-4">
        <div className="text-[9px] text-white/25 uppercase tracking-wider mb-3">Lead Score</div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-full border-2 border-[#f97316] flex items-center justify-center">
            <span className="text-lg font-black text-[#f97316]">92</span>
          </div>
          <div>
            <p className="text-[11px] font-bold text-white">Hoch qualifiziert</p>
            <p className="text-[9px] text-[#f97316]">→ Termin anfragen</p>
          </div>
        </div>
        <div className="flex gap-1">
          {[1,2,3,4,5].map(i=>(
            <div key={i} className={`flex-1 h-1 rounded-full ${i<=4?"bg-[#f97316]":"bg-white/10"}`} />
          ))}
        </div>
      </div>
    ),
  },
  {
    num: "04",
    color: "#00c3f0",
    title: "Termin automatisch gebucht",
    desc: "Direkt in deinen Kalender — ohne dass du etwas tun musst.",
    visual: (
      <div className="glass rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00c3f0" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
          <span className="text-[11px] font-bold text-[#00c3f0]">Termin bestätigt</span>
        </div>
        <div className="space-y-1.5 text-[9px]">
          {[["Datum","Mo, 14. April"],["Uhrzeit","14:30 Uhr"],["Kontakt","Müller GmbH"]].map(([k,v])=>(
            <div key={k} className="flex justify-between bg-white/[0.03] rounded px-2 py-1.5">
              <span className="text-white/25">{k}</span>
              <span className="text-white/60 font-medium">{v}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function LiveDemo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-32 px-4 overflow-hidden" ref={ref}>
      <div className="divider" />
      <div className="orb orb-teal w-[500px] h-[500px] left-1/2 -translate-x-1/2 top-0" />

      <div className="relative z-10 max-w-6xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="section-label mb-5 inline-block">So funktioniert&apos;s</span>
          <h2 className="text-[clamp(36px,6vw,72px)] font-black leading-[0.9] mt-5 mb-5">
            Von Anruf zu Termin<br />
            <span className="text-gradient">in Sekunden.</span>
          </h2>
        </motion.div>

        {/* Steps with connector */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 60 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col"
              >
                {/* Step number */}
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-black relative"
                    style={{ background: `${step.color}12`, border: `1px solid ${step.color}30`, color: step.color,
                      boxShadow: `0 0 30px ${step.color}20` }}>
                    {step.num}
                  </div>
                </div>

                <h3 className="text-sm font-bold text-white text-center mb-2">{step.title}</h3>
                <p className="text-xs text-white/30 text-center mb-5 leading-relaxed">{step.desc}</p>
                <div className="mt-auto float">{step.visual}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
