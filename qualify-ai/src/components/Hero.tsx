"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "85%", label: "Zeitersparnis" },
  { value: "3x", label: "Mehr Kontaktpunkte" },
  { value: "<2min", label: "Reaktionszeit" },
  { value: "40%", label: "Reaktivierungsquote" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10 px-4">
      {/* Background effects */}
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="orb-teal -top-40 -left-40" />
      <div className="orb-purple top-20 -right-60" />
      <div className="orb-teal bottom-0 right-1/4 w-[400px] h-[400px]" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="text-center max-w-4xl mx-auto mb-12">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="section-label">
              <span className="pulse-dot" />
              Jetzt verfügbar
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-6"
          >
            Dein Vertrieb.{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient">Auf Autopilot.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-white/40 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Der KI-Assistent, der jeden Anruf annimmt, Leads qualifiziert
            und Termine bucht – 24/7, vollautomatisch, während du dich
            auf dein Kerngeschäft konzentrierst.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a href="#kontakt" className="btn-teal text-base px-8 py-3.5">
              Kostenlose Demo starten
            </a>
            <a href="#funktionen" className="btn-outline text-base px-8 py-3.5">
              So funktioniert&apos;s →
            </a>
          </motion.div>
        </div>

        {/* Floating Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="border-teal-glow rounded-2xl bg-[#0a1020]/90 backdrop-blur-xl p-1">
            {/* Fake window bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06]">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-4 text-[11px] text-white/20 font-mono">qualify.ai — KI-Assistent Dashboard</span>
            </div>
            {/* Dashboard content */}
            <div className="p-6 grid md:grid-cols-3 gap-4">
              {/* Active calls */}
              <div className="glass rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] text-white/30 uppercase tracking-wider font-semibold">Live Anrufe</span>
                  <span className="pulse-dot" />
                </div>
                <p className="text-3xl font-black text-white mb-1">12</p>
                <p className="text-xs text-[#00D4A0]">+4 in den letzten 30 min</p>
                {/* Mini bars */}
                <div className="mt-4 flex items-end gap-1 h-12">
                  {[40, 60, 35, 80, 55, 90, 75, 65, 45, 70, 85, 95].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-gradient-to-t from-[#00D4A0]/20 to-[#00D4A0]/60"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Qualified leads */}
              <div className="glass rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] text-white/30 uppercase tracking-wider font-semibold">Qualifizierte Leads</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#00D4A0" strokeWidth="1.5">
                    <path d="M2 12L6 6l3 3 5-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-3xl font-black text-white mb-1">47</p>
                <p className="text-xs text-[#00D4A0]">+23% vs. letzte Woche</p>
                {/* Lead list */}
                <div className="mt-4 space-y-2">
                  {[
                    { name: "Müller GmbH", status: "Qualifiziert", time: "vor 3 min" },
                    { name: "Schmidt Solar", status: "Termin gebucht", time: "vor 8 min" },
                    { name: "Weber Heizung", status: "In Bearbeitung", time: "vor 12 min" },
                  ].map((lead) => (
                    <div key={lead.name} className="flex items-center justify-between text-xs py-1.5 border-b border-white/[0.04]">
                      <span className="text-white/60">{lead.name}</span>
                      <span className="text-[#00D4A0]/70">{lead.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Appointments */}
              <div className="glass rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] text-white/30 uppercase tracking-wider font-semibold">Gebuchte Termine</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#a78bfa" strokeWidth="1.5">
                    <rect x="2" y="3" width="12" height="11" rx="2" />
                    <path d="M2 7h12M5 1v3M11 1v3" />
                  </svg>
                </div>
                <p className="text-3xl font-black text-white mb-1">18</p>
                <p className="text-xs text-purple-400">Heute: 5 Termine</p>
                {/* Calendar mini */}
                <div className="mt-4 grid grid-cols-7 gap-1 text-center text-[9px]">
                  {["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"].map((d) => (
                    <span key={d} className="text-white/20">{d}</span>
                  ))}
                  {Array.from({ length: 28 }, (_, i) => i + 1).map((d) => (
                    <span
                      key={d}
                      className={`w-5 h-5 flex items-center justify-center rounded-md ${
                        [3, 7, 11, 14, 18, 22, 25].includes(d)
                          ? "bg-[#00D4A0]/20 text-[#00D4A0] font-bold"
                          : d === 15
                          ? "bg-purple-500/30 text-purple-300 font-bold"
                          : "text-white/15"
                      }`}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Glow underneath */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#00D4A0]/10 blur-[80px] rounded-full" />
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto"
        >
          {stats.map((s) => (
            <div key={s.label} className="stat-card text-center">
              <p className="text-2xl md:text-3xl font-black text-gradient">{s.value}</p>
              <p className="text-xs text-white/35 mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
