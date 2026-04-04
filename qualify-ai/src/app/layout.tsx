import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Qualify.ai – Dein KI-Assistent auf Autopilot",
  description: "Der KI-Assistent der jeden Anruf annimmt, Leads qualifiziert und Termine bucht — vollautomatisch, 24/7.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
