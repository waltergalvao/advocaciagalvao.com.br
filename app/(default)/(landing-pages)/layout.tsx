"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import Header from "@/components/ui/header";
import { Footer } from "../(main)/components/Footer";
import { LegalModalsProvider } from "../(main)/components/LegalModalsProvider";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header showNav={false} />
      <main className="grow mt-[64px] md:mt-[80px]">{children}</main>
      <Footer />
      <LegalModalsProvider />
      <a
        href="https://wa.me/5514997785999?text=Ol%C3%A1%2C%0A%0Agostaria%20de%20agendar%20uma%20consulta.%0A%0AMeu%20caso%20%C3%A9%20sobre"
        className="fixed bottom-4 right-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/whatsapp.svg"
          height={80}
          width={80}
          alt="Whatsapp"
        />
      </a>
    </div>
  );
}
