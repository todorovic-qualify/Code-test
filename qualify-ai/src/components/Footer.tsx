export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00D4A0] to-[#00a8f3] flex items-center justify-center">
                <span className="text-[#050914] font-black text-sm">Q</span>
              </div>
              <span className="text-lg font-bold text-white">
                Qualify<span className="text-[#00D4A0]">.ai</span>
              </span>
            </div>
            <p className="text-sm text-white/25 max-w-xs leading-relaxed">
              Der KI-Assistent der deinen Betrieb auf Autopilot setzt. Kein Anruf geht mehr verloren.
            </p>
            <div className="flex gap-3 mt-6">
              {["E-Mail", "LinkedIn"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs text-white/25 hover:text-white/60 border border-white/[0.06] hover:border-white/15 rounded-lg px-3 py-2 transition-all"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold text-white/20 uppercase tracking-widest mb-4">Produkt</p>
            <ul className="space-y-3">
              {["Funktionen", "Branchen", "Preise", "Demo anfragen"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-white/30 hover:text-white/70 transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-white/20 uppercase tracking-widest mb-4">Rechtliches</p>
            <ul className="space-y-3">
              {["Impressum", "Datenschutz", "AGB", "Kontakt"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-white/30 hover:text-white/70 transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.04] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/15">
            © {new Date().getFullYear()} Qualify.ai — Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-white/10">
            KI-Automatisierung für den modernen Betrieb · qualify-ai.de
          </p>
        </div>
      </div>
    </footer>
  );
}
