export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2.5 mb-4 group w-fit">
              <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="qWaveFooter" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"   stopColor="#00c3f0" />
                    <stop offset="100%" stopColor="#00D4A0" />
                  </linearGradient>
                </defs>
                <path d="M 84.6 33.3 A 40 40 0 1 1 69.9 14.2" stroke="white" strokeWidth="5.5" strokeLinecap="round"/>
                <path d="M 75.2 36.7 A 30 30 0 1 1 64.2 22.4" stroke="white" strokeWidth="5" strokeLinecap="round" strokeOpacity="0.82"/>
                <path d="M 65.8 40.2 A 20 20 0 1 1 58.5 30.6" stroke="white" strokeWidth="4.5" strokeLinecap="round" strokeOpacity="0.65"/>
                <line x1="77" y1="73" x2="91" y2="88" stroke="white" strokeWidth="5.5" strokeLinecap="round"/>
                <rect x="32" y="43" width="3.5" height="8"  rx="1.75" fill="url(#qWaveFooter)"/>
                <rect x="37" y="39" width="3.5" height="16" rx="1.75" fill="url(#qWaveFooter)"/>
                <rect x="42" y="36" width="3.5" height="22" rx="1.75" fill="url(#qWaveFooter)"/>
                <rect x="47" y="34" width="3.5" height="26" rx="1.75" fill="url(#qWaveFooter)"/>
                <rect x="52" y="37" width="3.5" height="20" rx="1.75" fill="url(#qWaveFooter)"/>
                <rect x="57" y="41" width="3.5" height="12" rx="1.75" fill="url(#qWaveFooter)"/>
                <rect x="62" y="44" width="3.5" height="6"  rx="1.75" fill="url(#qWaveFooter)"/>
              </svg>
              <span className="text-lg font-bold text-white">
                Qualify<span className="text-[#00D4A0]">.ai</span>
              </span>
            </a>

            <p className="text-sm text-white/25 max-w-xs leading-relaxed">
              Der KI-Assistent der deinen Betrieb auf Autopilot setzt. Kein Anruf geht mehr verloren.
            </p>

            {/* Social / contact buttons */}
            <div className="flex gap-3 mt-6">
              <a
                href="mailto:k.sperl@qualify-ai.de"
                className="text-xs text-white/25 hover:text-white/60 border border-white/[0.06] hover:border-white/15 rounded-lg px-3 py-2 transition-all"
              >
                E-Mail
              </a>
              <a
                href="https://www.instagram.com/qualify.ai_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/25 hover:text-white/60 border border-white/[0.06] hover:border-white/15 rounded-lg px-3 py-2 transition-all"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Produkt links */}
          <div>
            <p className="text-xs font-semibold text-white/20 uppercase tracking-widest mb-4">Produkt</p>
            <ul className="space-y-3">
              {[
                { label: "Funktionen",    href: "/#funktionen" },
                { label: "Branchen",      href: "/#branchen"   },
                { label: "Preise",        href: "/#preise"     },
                { label: "Demo anfragen", href: "/#kontakt"    },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/30 hover:text-white/70 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches links */}
          <div>
            <p className="text-xs font-semibold text-white/20 uppercase tracking-widest mb-4">Rechtliches</p>
            <ul className="space-y-3">
              {[
                { label: "Impressum",  href: "/impressum"              },
                { label: "Datenschutz",href: "#"                       },
                { label: "AGB",        href: "/agb"                    },
                { label: "Kontakt",    href: "/#kontakt"               },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/30 hover:text-white/70 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.04] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/15">
            © {new Date().getFullYear()} Qualify.ai – Kevin Sperl · Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-white/10">
            KI-Automatisierung für den modernen Betrieb · qualify-ai.de
          </p>
        </div>
      </div>
    </footer>
  );
}
