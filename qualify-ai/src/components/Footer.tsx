export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="17" stroke="white" strokeWidth="2"/>
              <text x="18" y="23" textAnchor="middle" fontSize="16" fontWeight="700" fill="white" fontFamily="Inter, sans-serif">Q</text>
              <path d="M26 10 Q30 14 30 18 Q30 22 28 25" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            </svg>
            <span className="text-xl font-bold">Qualify<span className="text-slate-400">.ai</span></span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Impressum</a>
            <a href="#kontakt" className="text-sm text-slate-400 hover:text-white transition-colors">Kontakt</a>
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">AGB</a>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Qualify.ai – Alle Rechte vorbehalten. | KI-Automatisierung für deinen Betrieb
        </div>
      </div>
    </footer>
  );
}
