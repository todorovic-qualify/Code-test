"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrambleText from "./ScrambleText";
import MagneticButton from "./MagneticButton";
import CountUp from "./CountUp";

const stats = [
  { value: 85, suffix: "%", label: "Zeitersparnis" },
  { value: 3, suffix: "x", label: "Mehr Kontaktpunkte" },
  { value: 40, suffix: "%", label: "Reaktivierungsquote" },
  { value: 24, suffix: "/7", label: "Immer erreichbar" },
];

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 pb-20 px-4">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="orb orb-teal w-[700px] h-[700px] -top-60 -left-60" />
      <div className="orb orb-blue w-[500px] h-[500px] top-20 -right-40" />
      <div className="orb orb-purple w-[400px] h-[400px] bottom-0 left-1/3" />

      <div className="relative z-10 max-w-6xl mx-auto w-full text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <span className="section-label"><span className="pulse-dot" />Jetzt live — KI-Telefon-Assistent</span>
        </motion.div>

        {/* MEGA headline */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="font-black leading-[0.88] tracking-tight">
            <motion.div
              initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[clamp(52px,10vw,120px)] text-white"
            >
              DEIN VERTRIEB
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[clamp(52px,10vw,120px)]"
            >
              <span
                className="glitch-text text-gradient"
                data-text="AUF AUTOPILOT."
              >
                <ScrambleText text="AUF AUTOPILOT." trigger={inView} className="text-gradient" duration={1400} />
              </span>
            </motion.div>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-base md:text-lg text-white/35 max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Der KI-Assistent der jeden Anruf annimmt, Leads qualifiziert
          und Termine bucht — vollautomatisch, 24/7.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <MagneticButton href="#kontakt" className="btn-teal text-sm md:text-base px-8 py-4">
            Kostenlose Demo starten
          </MagneticButton>
          <MagneticButton href="#funktionen" className="btn-outline text-sm md:text-base px-8 py-4">
            So funktioniert&apos;s →
          </MagneticButton>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Top glow */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-2/3 h-16 bg-[#00D4A0]/20 blur-[60px] rounded-full" />

          <div className="border-teal-glow rounded-2xl bg-[#050a14]/95 p-1">
            {/* Window bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.05]">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-4 text-[11px] text-white/15 font-mono tracking-wider">qualify.ai — Echtzeit Dashboard</span>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="pulse-dot scale-75" />
                <span className="text-[10px] text-[#00D4A0]/60">Live</span>
              </div>
            </div>

            <div className="p-5 grid md:grid-cols-3 gap-3">
              {/* Card 1: Live calls */}
              <div className="glass rounded-xl p-4">
                <p className="text-[10px] text-white/25 uppercase tracking-widest font-semibold mb-3">Live Anrufe</p>
                <p className="text-4xl font-black text-white mb-1">12</p>
                <p className="text-xs text-[#00D4A0] mb-4">+4 in letzten 30 min</p>
                <div className="flex items-end gap-0.5 h-10">
                  {[30,55,40,80,60,95,70,60,45,75,88,100].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-[#00D4A0]/15 to-[#00D4A0]/50"
                      style={{ height: `${h}%`, opacity: i === 11 ? 1 : 0.5 + i * 0.04 }} />
                  ))}
                </div>
              </div>

              {/* Card 2: Qualified leads */}
              <div className="glass rounded-xl p-4">
                <p className="text-[10px] text-white/25 uppercase tracking-widest font-semibold mb-3">Qualifizierte Leads</p>
                <p className="text-4xl font-black text-white mb-1">47</p>
                <p className="text-xs text-[#00D4A0] mb-3">↑ 23% vs. letzte Woche</p>
                <div className="space-y-2">
                  {[
                    { name: "Müller GmbH", tag: "✓ Qualifiziert" },
                    { name: "Schmidt Solar", tag: "📅 Termin" },
                    { name: "Weber Heizung", tag: "⏳ Läuft" },
                  ].map((l) => (
                    <div key={l.name} className="flex justify-between items-center text-[10px] py-1 border-b border-white/[0.04]">
                      <span className="text-white/50">{l.name}</span>
                      <span className="text-[#00D4A0]/60">{l.tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 3: Bookings */}
              <div className="glass rounded-xl p-4">
                <p className="text-[10px] text-white/25 uppercase tracking-widest font-semibold mb-3">Gebuchte Termine</p>
                <p className="text-4xl font-black text-white mb-1">18</p>
                <p className="text-xs text-purple-400 mb-3">Heute: 5 Termine</p>
                <div className="grid grid-cols-7 gap-0.5 text-center">
                  {["M","D","M","D","F","S","S"].map((d,i)=>(
                    <span key={i} className="text-[8px] text-white/15">{d}</span>
                  ))}
                  {Array.from({length:28},(_,i)=>i+1).map(d=>(
                    <span key={d} className={`text-[8px] w-5 h-5 flex items-center justify-center rounded mx-auto
                      ${[3,7,11,14,18,22,25].includes(d) ? "bg-[#00D4A0]/20 text-[#00D4A0] font-bold"
                        : d===15 ? "bg-purple-500/30 text-purple-300 font-bold"
                        : "text-white/10"}`}>{d}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom glow */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-1/2 h-20 bg-[#00D4A0]/10 blur-[80px] rounded-full" />
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-16 max-w-3xl mx-auto"
        >
          {stats.map((s) => (
            <div key={s.label} className="stat-card text-center">
              <p className="text-2xl md:text-3xl font-black text-gradient">
                <CountUp target={s.value} suffix={s.suffix} />
              </p>
              <p className="text-[11px] text-white/30 mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
