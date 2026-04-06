import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Impressum – Qualify.ai",
};

export default function ImpressumPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-4" style={{ background: "#000" }}>
        <div className="max-w-2xl mx-auto">

          {/* Back link */}
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm mb-10 transition-colors"
            style={{ color: "rgba(255,255,255,0.28)" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 11L5 7l4-4"/>
            </svg>
            Zurück zur Startseite
          </a>

          <h1 className="text-4xl font-black text-white mb-12">Impressum</h1>

          <div className="space-y-10 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>

            <section>
              <p className="text-base font-bold text-white mb-2">Kevin Sperl - Solar Consulting</p>
              <p>Brunnenwiesenweg 11/1<br />73614 Schorndorf</p>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.25)" }}>Kontakt</h2>
              <p>Telefon: <a href="tel:017656062686" className="text-[#00D4A0] hover:underline">017656062686</a></p>
              <p>E-Mail: <a href="mailto:K.sperl@qualify-ai.de" className="text-[#00D4A0] hover:underline">K.sperl@qualify-ai.de</a></p>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.25)" }}>
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.25)" }}>
                Zentrale Kontaktstelle nach dem Digital Services Act – DSA (Verordnung (EU) 2022/265)
              </h2>
              <p>
                Unsere zentrale Kontaktstelle für Nutzer und Behörden nach Art. 11, 12 DSA erreichen
                Sie wie folgt:
              </p>
              <p className="mt-2">
                E-Mail: <a href="mailto:K.sperl@qualify-ai.de" className="text-[#00D4A0] hover:underline">K.sperl@qualify-ai.de</a>
              </p>
              <p className="mt-2">
                Die für den Kontakt zur Verfügung stehenden Sprachen sind: Deutsch, Englisch.
              </p>
            </section>

            <p className="text-xs" style={{ color: "rgba(255,255,255,0.18)" }}>
              Quelle: e-recht24.de
            </p>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
