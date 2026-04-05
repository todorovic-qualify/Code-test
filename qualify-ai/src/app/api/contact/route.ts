import { Resend } from "resend";
import { NextResponse } from "next/server";

const TO = "a.todorovic@qualify-ai.de";

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();
    const { name, company, email, industry } = body as Record<string, string>;

    if (!name || !email) {
      return NextResponse.json({ error: "Name und E-Mail sind erforderlich." }, { status: 400 });
    }

    await resend.emails.send({
      from: "Qualify-AI Kontaktformular <onboarding@resend.dev>",
      to: TO,
      replyTo: email,
      subject: `Neue Demo-Anfrage: ${name} (${company || "–"})`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#111">
          <h2 style="color:#00D4A0;margin-bottom:8px">Neue Demo-Anfrage</h2>
          <hr style="border:none;border-top:1px solid #eee;margin:16px 0"/>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#666;width:130px">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Unternehmen</td><td style="padding:8px 0;font-weight:600">${company || "–"}</td></tr>
            <tr><td style="padding:8px 0;color:#666">E-Mail</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#00D4A0">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#666">Branche</td><td style="padding:8px 0">${industry || "–"}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #eee;margin:16px 0"/>
          <p style="color:#888;font-size:13px">Gesendet von qualify-ai.de · Einfach auf diese E-Mail antworten, um direkt mit ${name} zu schreiben.</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact email error:", err);
    return NextResponse.json({ error: "Senden fehlgeschlagen. Bitte versuche es erneut." }, { status: 500 });
  }
}
