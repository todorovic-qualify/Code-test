import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qualify.ai – Dein KI-Assistent für Anrufe & Automatisierung",
  description:
    "Qualify.ai nimmt jeden Anruf an, qualifiziert Anfragen automatisch und bucht Termine – damit du dich auf dein Kerngeschäft konzentrieren kannst.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="antialiased bg-white text-slate-900" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
