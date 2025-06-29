"use client";

import { createContactEntry } from "./actions";
import { useState } from "react";
import { IconBrandWhatsapp, IconCheck } from "@tabler/icons-react";

export const ContatoForm = () => {
  const [isSent, setIsSent] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    await createContactEntry(formData);

    setIsSent(true);
  }

  if (isSent) {
    return (
      <div className="flex gap-2 bg-green-100 p-4">
        <IconCheck className="text-green-500" />
        Mensagem enviada com sucesso! Iremos entrar em contato em breve.
      </div>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-gray-100 p-6 rounded-lg shadow-md"
      >
        <div className="w-[500px] max-w-full">
          <label className="block text-sm font-medium text-gray-700">
            Nome completo:<span className="text-red-500">*</span>
          </label>
          <input
            name="name"
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            E-mail:<span className="text-red-500">*</span>
          </label>
          <input
            name="email"
            type="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Telefone:<span className="text-red-500">*</span>
          </label>
          <input
            name="phone"
            type="tel"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Empresa:<span className="text-red-500">*</span>
          </label>
          <input
            name="empresa"
            type="tel"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Descreva o seu caso:<span className="text-red-500">*</span>
          </label>
          <textarea
            name="details"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold text-xl py-4 rounded-md hover:bg-blue-700 transition"
          >
            Enviar
          </button>
        </div>
        <hr />

        <a
          target="_blank"
          rel="noopener noreferrer"
          className="btn rounded-lg font-bold text-xl text-green-500 bg-gray-100 hover:bg-green-500 hover:text-white w-full group gap-2 border border-green-500 max-w-lg"
          href="https://wa.me/5514997785999?text=Ol%C3%A1%2C%0A%0Agostaria%20de%20agendar%20uma%20consulta.%0A%0AMeu%20caso%20%C3%A9%20sobre"
        >
          <IconBrandWhatsapp size={32} stroke={1.5} />
          Falar pelo WhatsApp
        </a>
      </form>
    </>
  );
};
