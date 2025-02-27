"use server";

import { Resend } from "resend";

export async function createContactEntry(formData: FormData) {
  const name = formData.get("name");
  const role = formData.get("role");
  const state = formData.get("state");
  const city = formData.get("city");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const partnership = formData.get("partnership");
  const details = formData.get("details");

  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: "Galvão Advocacia <contato@advocaciagalvao.com.br>",
    to: "vitorgalvaoadv@gmail.com",
    bcc: "walterbgneto@gmail.com",
    replyTo: email as string,
    subject: "Contato de Parceria",
    html: `<p>Nome: ${name}</p>
    <p>Cargo: ${role}</p>
    <p>Estado: ${state}</p>
    <p>Cidade: ${city}</p>
    <p>Email: ${email}</p>
    <p>Telefone: ${phone}</p>
    <p>Parceiro: ${partnership}</p>
    <p>Detalhes: ${details}</p>`,
  });
}
