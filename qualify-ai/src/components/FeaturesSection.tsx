"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TiltCard from "./TiltCard";

const features = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.9 13.65 19.79 19.79 0 0 1 2 5.07 2 2 0 0 1 3.9 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 18z"/></svg>,
    color: "#00D4A0",
    title: "Anrufe automatisch annehmen",
    desc: "Kein Kunde wartet mehr. Jeder Anruf wird professionell entgegengenommen — auch wenn du gerade im Termin bist.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>,
    color: "#7C3AED",
    title: "Leads vorqualifizieren",
    desc: "Unwichtige Anfragen werden rausgefiltert. Du sprichst nur noch mit echten Kaufinteressenten.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    color: "#f97316",
    title: "Termine direkt buchen",
    desc: "Dein Kalender füllt sich automatisch. Kein manuelles Eintragen, kein Hin-und-Her am Telefon.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>,
    color: "#00c3f0",
    title: "Echtzeit-Transkription",
    desc: "Jeder Anruf wird live transkribiert und zusammengefasst. Du verpasst kein Detail.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
    color: "#ec4899",
    title: "Individuelle Automatisierungen",
    desc: "Follow-Ups, Angebote, Rechnungen, E-Mails — dein Assistent übernimmt alles Repetitive.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>,
    color: "#fbbf24",
    title: "Echtzeit-Auswertungen",
    desc: "Sieh auf einen Blick, wie viele Anrufe, Leads und Termine dein Assistent täglich generiert.",
  },
];

/* Stagger wave: center cards reveal slightly earlier for a natural cascade */
const staggerDelay = [0, 0.08, 0.16, 0.07, 0.14, 0.22];

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const headerRef  = useRef(null);
  const inView     = useInView(sectionRef, { once: true, margin: "-80px" });
  const headerView = useInView(headerRef,  { once: true, margin: "-40px" });

  /* Parallax on the background orb */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const orbY = useTransform(scrollYProgress, [0, 1], ["-60px", "60px"]);

  return (
    <section
      id="funktionen"
      ref={sectionRef}
      className="relative py-32 px-4"
      style={{ background: "linear-gradient(180deg, #000000 0%, #040c1a 50%, #000000 100%)" }}
    >
      {/* Signal line divider at section top */}
      <div className="relative h-[1px] mb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,160,0.18), rgba(124,58,237,0.12), transparent)" }} />
        {inView && (
          <>
            <div className="signal-dot" style={{ animationDelay: "0s" }} />
            <div className="signal-dot signal-dot-2" />
            <div className="signal-dot signal-dot-3" />
          </>
        )}
      </div>

      {/* Parallax orb */}
      <motion.div
        style={{ y: orbY }}
        className="absolute orb orb-purple w-[600px] h-[600px] -left-40 top-1/2 -translate-y-1/2 pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section header — staggered word reveal */}
        <div ref={headerRef} className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={headerView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-5 inline-block"
          >
            Funktionen
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={headerView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(36px,6vw,72px)] font-black leading-[0.9] mt-5 mb-5"
          >
            Alles was der<br />
            <span className="text-gradient">Assistent kann.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="text-white/28 max-w-md mx-auto"
          >
            Ein Assistent. Sechs Superkräfte. Null manueller Aufwand.
          </motion.p>
        </div>

        {/* Feature grid — wave stagger, opposing x directions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => {
            const fromLeft = i % 2 === 0;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: fromLeft ? -44 : 44, y: 20 }}
                animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{
                  duration: 0.65,
                  delay: staggerDelay[i],
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <TiltCard className="glass-card rounded-2xl p-6 h-full group cursor-none" intensity={5}>
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${f.color}15`,
                      border: `1px solid ${f.color}28`,
                      boxShadow: `0 0 18px ${f.color}18`,
                      color: f.color,
                    }}
                  >
                    {f.icon}
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.32)" }}>{f.desc}</p>

                  {/* Color accent line — grows on hover */}
                  <div
                    className="mt-5 h-[1px] w-0 group-hover:w-full transition-all duration-500 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${f.color}70, transparent)` }}
                  />
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Signal line divider at section bottom */}
      <div className="relative h-[1px] mt-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.12), rgba(0,212,160,0.08), transparent)" }} />
      </div>
    </section>
  );
}
