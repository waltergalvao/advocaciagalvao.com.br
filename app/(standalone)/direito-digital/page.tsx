import type { Metadata } from "next";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { PracticeAreas } from "./components/PracticeAreas";
import { Marketplaces } from "./components/Marketplaces";
import { Solution } from "./components/Solution";
import { Authority } from "./components/Authority";
import { Differentials } from "./components/Differentials";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { LegalModalsProvider } from "./components/LegalModalsProvider";

export const metadata: Metadata = {
  title:
    "Direito Digital para E-commerce | Advocacia Galvão - Defesa de Sellers",
  description:
    "Atuação jurídica focada em vendedores, lojistas e operações de e-commerce que enfrentam bloqueios, retenções, denúncias e restrições em plataformas digitais como Mercado Livre, Amazon e Shopee.",
  keywords: [
    "advogado e-commerce",
    "advogado marketplace",
    "conta suspensa mercado livre",
    "saldo retido amazon",
    "direito digital",
    "defesa de sellers",
    "advogado shopee",
  ],
  openGraph: {
    title:
      "Direito Digital para E-commerce | Advocacia Galvão - Defesa de Sellers",
    description:
      "Atuação jurídica focada em vendedores, lojistas e operações de e-commerce que enfrentam bloqueios, retenções, denúncias e restrições em plataformas digitais.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function DireitoDigitalPage() {
  return (
    <div className="min-h-screen bg-white font-inter text-navy-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <PracticeAreas />
        <Marketplaces />
        <Solution />
        <Authority />
        <Differentials />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <LegalModalsProvider />
    </div>
  );
}
