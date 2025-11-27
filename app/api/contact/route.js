

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, subject, message } = await req.json();

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "natahina.rochaya@gmail.com",
      subject: `[Contact Portfolio] ${subject}`,
      text: `
Nom : ${name}
Email : ${email}

Message :
${message}
`,
    });

    return new Response("OK", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Erreur", { status: 500 });
  }
}
