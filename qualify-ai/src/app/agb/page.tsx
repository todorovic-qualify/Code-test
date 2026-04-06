import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "AGB – Qualify.ai",
};

const sections = [
  {
    num: "1",
    title: "Geltungsbereich",
    content: `Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen Qualify.ai und ihren Kunden über die Nutzung von KI-gestützten Assistenz- und Automatisierungslösungen.`,
  },
  {
    num: "2",
    title: "Leistungen",
    content: `Qualify.ai bietet digitale KI-Assistenzlösungen an, insbesondere:`,
    bullets: [
      "Automatisierte Annahme und Bearbeitung von Anrufen",
      "Vorqualifizierung von Anfragen",
      "Terminvereinbarung",
      "Individuelle Automatisierungen (z. B. E-Mails, interne Prozesse)",
    ],
    note: "Der genaue Leistungsumfang ergibt sich aus dem jeweiligen Angebot.",
  },
  {
    num: "3",
    title: "Vertragsschluss",
    content: `Ein Vertrag kommt zustande durch die Annahme eines Angebots durch den Kunden oder durch Buchung über die Website bzw. Terminvereinbarung.`,
  },
  {
    num: "4",
    title: "Preise & Zahlung",
    bullets: [
      "Die Preise ergeben sich aus dem individuellen Angebot",
      "Einmalige Setup-Gebühren sowie monatliche Nutzungsgebühren sind möglich",
      "Zahlungen sind, sofern nicht anders vereinbart, im Voraus fällig",
    ],
  },
  {
    num: "5",
    title: "Nutzung der Software",
    content: `Der Kunde erhält ein nicht übertragbares Nutzungsrecht an der bereitgestellten Lösung.`,
    bullets: [
      "Keine missbräuchliche Nutzung",
      "Keine Weitergabe an Dritte ohne Zustimmung",
    ],
  },
  {
    num: "6",
    title: "Verfügbarkeit",
    content: `Qualify.ai bemüht sich um eine hohe Verfügbarkeit der Systeme. Eine unterbrechungsfreie Verfügbarkeit kann jedoch nicht garantiert werden, insbesondere durch Wartungsarbeiten, technische Störungen oder externe Einflüsse.`,
  },
  {
    num: "7",
    title: "Haftung",
    content: `Qualify.ai haftet nur für:`,
    bullets: ["Vorsatz und grobe Fahrlässigkeit", "Verletzung wesentlicher Vertragspflichten"],
    note: "Keine Haftung besteht für: entgangenen Gewinn, indirekte Schäden sowie falsche oder unvollständige Daten durch Kunden.",
  },
  {
    num: "8",
    title: "Datenschutz",
    content: `Die Verarbeitung personenbezogener Daten erfolgt gemäß der Datenschutzerklärung. Der Kunde ist dafür verantwortlich, dass er berechtigt ist, Daten seiner Kunden zu verarbeiten und alle gesetzlichen Vorgaben eingehalten werden.`,
  },
  {
    num: "9",
    title: "Vertragslaufzeit & Kündigung",
    bullets: [
      "Verträge haben die vereinbarte Laufzeit",
      "Kündigung ist mit der vereinbarten Frist möglich",
      "Bei Zahlungsverzug kann der Zugang gesperrt werden",
    ],
  },
  {
    num: "10",
    title: "Änderungen der Leistungen",
    content: `Qualify.ai behält sich vor, Leistungen weiterzuentwickeln oder anzupassen, sofern dies für den Kunden zumutbar ist.`,
  },
  {
    num: "11",
    title: "Schlussbestimmungen",
    bullets: [
      "Es gilt deutsches Recht",
      "Gerichtsstand ist der Sitz des Unternehmens",
      "Sollten einzelne Bestimmungen unwirksam sein, bleibt der Vertrag im Übrigen bestehen",
    ],
  },
];

export default function AGBPage() {
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

          <h1 className="text-4xl font-black text-white mb-2">Allgemeine Geschäftsbedingungen</h1>
          <p className="text-sm mb-12" style={{ color: "rgba(255,255,255,0.25)" }}>Qualify.ai – Stand 2025</p>

          <div className="space-y-10">
            {sections.map((s) => (
              <section
                key={s.num}
                className="border-l-2 pl-6"
                style={{ borderColor: "rgba(0,212,160,0.2)" }}
              >
                <h2 className="text-base font-black text-white mb-3">
                  <span style={{ color: "#00D4A0" }}>{s.num}.</span> {s.title}
                </h2>
                {s.content && (
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {s.content}
                  </p>
                )}
                {s.bullets && (
                  <ul className="space-y-1.5 mb-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                        <span className="mt-[5px] w-1 h-1 rounded-full shrink-0 bg-[#00D4A0]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                {s.note && (
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
                    {s.note}
                  </p>
                )}
              </section>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
