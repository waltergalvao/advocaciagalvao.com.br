"use server";

import { Resend } from "resend";

export async function createContactEntry(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const empresa = formData.get("empresa");
  const details = formData.get("details");

  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: "Galvão Advocacia <contato@advocaciagalvao.com.br>",
    to: "vitorgalvaoadv@gmail.com",
    bcc: "walterbgneto@gmail.com",
    replyTo: email as string,
    subject: "Contato de Lead",
    html: `<p>Nome: ${name}</p>
    <p>Email: ${email}</p>
    <p>Telefone: ${phone}</p>
    <p>Empresa: ${empresa}</p>
    <p>Detalhes: ${details}</p>`,
  });
}
