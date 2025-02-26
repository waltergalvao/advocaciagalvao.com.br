"use client";

import { createContactEntry } from "./actions";
import { useState } from "react";
import { IconCheck } from "@tabler/icons-react";

export const ParceiroForm = () => {
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
        <div>
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
            Área de atuação:
          </label>
          <input
            name="role"
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Estado:
          </label>
          <select
            name="state"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Cidade:
          </label>
          <input
            name="city"
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
            Instagram/TikTok/Facebook:
          </label>
          <input
            name="social"
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
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
            Como você gostaria de colaborar?
            <span className="text-red-500">*</span>
          </label>
          <textarea
            name="partnership"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Detalhes adicionais:
          </label>
          <textarea
            name="details"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Enviar Proposta de Parceria
          </button>
        </div>
      </form>
    </>
  );
};
