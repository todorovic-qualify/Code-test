"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";

const trustPoints = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    title: "Unverbindlich & kostenlos",
    desc: "Kein Vertrag, keine versteckten Kosten. Nur 15 Minuten deiner Zeit.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "Rückmeldung in 2 Stunden",
    desc: "Wir melden uns persönlich — kein Autoresponder, kein Sales-Skript.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Live-Demo, persönlich",
    desc: "Wir zeigen dir live, wie der Assistent Anrufe für deinen Betrieb bearbeitet.",
  },
];

const miniTestimonial = {
  quote: "Die Demo hat uns in 15 Minuten überzeugt. Woche 1: 8 neue Termine.",
  name: "Ralph E.",
  role: "SHK-Betrieb",
  accent: "#00D4A0",
};

export default function ContactSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="kontakt"
      ref={ref}
      className="relative py-32 px-4 overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* Large cinematic center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(0,212,160,0.07) 0%, rgba(0,195,240,0.03) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Signal divider top */}
      <div className="absolute top-0 inset-x-0 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,160,0.18), rgba(0,195,240,0.12), transparent)" }} />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-5 inline-block">Loslegen</span>
          <h2 className="text-[clamp(36px,6vw,72px)] font-black leading-[0.9] mt-5 mb-6">
            Dein nächster Anruf<br />
            <span className="text-gradient">wird bereits angenommen.</span>
          </h2>
          <p className="text-base max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.38)" }}>
            15-Minuten Demo — wir zeigen live, wie dein KI-Assistent ab morgen für dich arbeitet.
          </p>
        </motion.div>

        {/* Two-column layout: form + trust */}
        <div className="grid lg:grid-cols-[1fr_420px] gap-8 items-start">

          {/* LEFT: Trust + mini testimonial */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8 lg:pr-8"
          >
            {/* Trust points */}
            <div className="space-y-6">
              {trustPoints.map((tp, i) => (
                <motion.div
                  key={tp.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.25 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "rgba(0,212,160,0.08)", border: "1px solid rgba(0,212,160,0.16)", color: "#00D4A0" }}>
                    {tp.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white mb-1">{tp.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>{tp.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mini testimonial quote */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="rounded-xl p-5 relative overflow-hidden"
              style={{
                background: "rgba(0,212,160,0.04)",
                border: "1px solid rgba(0,212,160,0.12)",
              }}
            >
              <div className="w-6 h-[2px] rounded-full mb-3" style={{ background: "#00D4A0" }} />
              <p className="text-sm italic leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>
                &ldquo;{miniTestimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs"
                  style={{ background: "rgba(0,212,160,0.15)", border: "1px solid rgba(0,212,160,0.25)", color: "#00D4A0" }}>
                  {miniTestimonial.name[0]}
                </div>
                <div>
                  <p className="text-xs font-bold text-white">{miniTestimonial.name}</p>
                  <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.28)" }}>{miniTestimonial.role}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: The form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="rounded-2xl p-[1px]"
              style={{ background: "linear-gradient(145deg, rgba(0,212,160,0.2), rgba(0,195,240,0.08) 50%, transparent)" }}
            >
              <div className="rounded-[calc(1rem-1px)] p-7" style={{ background: "#060d18" }}>

                <p className="text-sm font-bold text-white mb-6">Demo vereinbaren</p>

                <div className="space-y-4 mb-5">
                  {[
                    { label: "Name",        placeholder: "Max Mustermann",  type: "text"  },
                    { label: "Unternehmen", placeholder: "Musterfirma GmbH", type: "text" },
                    { label: "E-Mail",      placeholder: "max@firma.de",    type: "email" },
                  ].map(({ label, placeholder, type }) => (
                    <div key={label}>
                      <label className="block text-[10px] font-bold uppercase tracking-widest mb-2"
                        style={{ color: "rgba(255,255,255,0.2)" }}>
                        {label}
                      </label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        className="w-full rounded-xl px-4 py-3 text-sm text-white transition-all cursor-none"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.07)",
                          outline: "none",
                          color: "#f1f5f9",
                        }}
                        onFocus={e => {
                          e.target.style.border = "1px solid rgba(0,212,160,0.35)";
                          e.target.style.boxShadow = "0 0 20px rgba(0,212,160,0.08)";
                        }}
                        onBlur={e => {
                          e.target.style.border = "1px solid rgba(255,255,255,0.07)";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest mb-2"
                      style={{ color: "rgba(255,255,255,0.2)" }}>
                      Branche
                    </label>
                    <select
                      className="w-full rounded-xl px-4 py-3 text-sm transition-all appearance-none cursor-none"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        color: "rgba(255,255,255,0.4)",
                        outline: "none",
                      }}
                    >
                      <option value="">Branche auswählen</option>
                      <option>Handwerk</option>
                      <option>Arztpraxis / Gesundheit</option>
                      <option>Immobilien</option>
                      <option>Vertrieb / Energievertrieb</option>
                      <option>Versicherung</option>
                      <option>Andere</option>
                    </select>
                  </div>
                </div>

                <MagneticButton className="btn-teal w-full py-4 text-base rounded-xl text-center" strength={0.2}>
                  Kostenlose Demo anfragen →
                </MagneticButton>

                <p className="text-center text-[10px] mt-4" style={{ color: "rgba(255,255,255,0.18)" }}>
                  Unverbindlich · Kündigung jederzeit · Antwort in &lt; 2h
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
