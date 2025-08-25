// api/contact.js
const nodemailer = require("nodemailer");

function boolSecure(port) {
  const p = Number(port || 0);
  return p === 465; // 465 -> secure TLS (SMTPS), 587 -> STARTTLS (secure:false)
}

exports.default = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  try {
    const {
      name = "",
      email = "",
      message = "",
      service = "",
      location = "",
      website = "" // honeypot
    } = req.body || {};

    // basic validation
    if (website) {
      // spam
      return res.status(200).json({ ok: true, skipped: true });
    }
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: "Missing fields" });
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      RECEIVER_EMAIL
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !RECEIVER_EMAIL) {
      return res.status(500).json({
        ok: false,
        error: "Missing SMTP environment variables"
      });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: boolSecure(SMTP_PORT),
      auth: {
        user: SMTP_USER,           // MUST be the same mailbox as 'from' for Zoho
        pass: SMTP_PASS
      },
      // Bazı Zoho bölgelerinde CA zinciri katı geliyor. Gerekirse açın:
      // tls: { rejectUnauthorized: false }
    });

    // Kısa bir bağlantı kontrolü (log’da görülsün)
    await transporter.verify();

    const subject = `Turluna Website Contact — ${name}`;

    const composed = [
      service ? `Service: ${service}` : null,
      location ? `Location: ${location}` : null,
      `From: ${name} <${email}>`,
      "",
      message
    ]
      .filter(Boolean)
      .join("\n");

    const info = await transporter.sendMail({
      from: `"Turluna Website" <${SMTP_USER}>`, // Zoho: from == authenticated user
      to: RECEIVER_EMAIL,
      replyTo: email, // cevapla dediğinde misafir mailine gitsin
      subject,
      text: composed
    });

    return res.status(200).json({ ok: true, id: info.messageId });
  } catch (err) {
    // Hatanın özetini döndürüyoruz ki Vercel Logs’ta ne olduğunu net görelim
    return res.status(500).json({
      ok: false,
      error: err && err.message ? err.message : "Unknown Error"
    });
  }
};
