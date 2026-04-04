"use client";

const clients = [
  "AT Energiekonzepte",
  "SolarTech Pro",
  "Weber Heizung & Sanitär",
  "Dr. Schmidt Praxis",
  "Immobilien Meyer",
  "BauerBau GmbH",
  "Versicherung Plus",
  "Elektro Hoffmann",
];

export default function SocialProof() {
  const doubled = [...clients, ...clients];

  return (
    <section className="py-12 border-y border-white/[0.04] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-6">
        <p className="text-center text-[11px] uppercase tracking-[0.2em] text-white/20 font-semibold">
          Vertraut von über 50+ Betrieben in DACH
        </p>
      </div>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050914] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050914] to-transparent z-10" />

        <div className="ticker-inner">
          {doubled.map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="flex items-center gap-3 px-8 py-3 flex-shrink-0"
            >
              <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                <span className="text-[#00D4A0] font-bold text-xs">{client[0]}</span>
              </div>
              <span className="text-sm text-white/25 font-medium whitespace-nowrap">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
