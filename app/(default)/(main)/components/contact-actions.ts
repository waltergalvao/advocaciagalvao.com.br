"use server";

import { redirect } from "next/navigation";
import { Resend } from "resend";

export async function sendContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const marketplace = formData.get("marketplace") as string;
  const revenue = formData.get("revenue") as string;
  const message = formData.get("message") as string;

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "Galvão Advocacia <contato@advocaciagalvao.com.br>",
    to: "vitorgalvaoadv@gmail.com",
    bcc: "walterbgneto@gmail.com",
    subject: `Contato de Lead — ${name}`,
    html: `
      <h2>Novo contato via site</h2>
      <p><strong>Nome / Razão Social:</strong> ${name}</p>
      <p><strong>WhatsApp:</strong> ${phone}</p>
      <p><strong>Plataforma:</strong> ${marketplace}</p>
      <p><strong>Faturamento Mensal:</strong> ${revenue}</p>
      <p><strong>Relato do Caso:</strong></p>
      <p>${message}</p>
    `,
  });

  if (error) {
    redirect("/contato?error=Erro ao enviar mensagem. Tente novamente.");
  }

  redirect("/contato/obrigado");
}
