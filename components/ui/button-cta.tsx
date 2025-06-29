"use client";

import { IconBrandWhatsapp } from "@tabler/icons-react";
import ModalContato from "../modal-contato";
import { useState } from "react";

export default function ButtonCta() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden btn rounded-lg font-bold text-xl text-white bg-green-700 hover:bg-green-800 w-full group gap-2 border border-green-500 max-w-lg"
        href="https://wa.me/5514997785999?text=Ol%C3%A1%2C%0A%0Agostaria%20de%20agendar%20uma%20consulta.%0A%0AMeu%20caso%20%C3%A9%20sobre"
      >
        <IconBrandWhatsapp size={32} stroke={1.5} />
        Primeiro contato sem custo
      </a>
      <a
        onClick={() => setModalOpen(true)}
        className="hidden md:inline-flex btn rounded-lg font-bold text-xl text-white bg-green-700 hover:bg-green-800 w-full group gap-2 border border-green-500 max-w-lg"
      >
        <IconBrandWhatsapp size={32} stroke={1.5} />
        Primeiro contato sem custo
      </a>
      <ModalContato isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
