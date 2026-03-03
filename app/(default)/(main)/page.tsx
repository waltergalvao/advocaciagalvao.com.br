import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galvão Advocacia | Especialistas em Direito Digital e Marketplaces",
  description:
    "Escritório de advocacia especializado em Direito Digital, marketplaces (Mercado Livre, Amazon, Shopee), desbloqueio de contas, recuperação de saldo e indenizações. Atendimento online em todo o Brasil.",
  openGraph: {
    title: "Galvão Advocacia | Especialistas em Direito Digital e Marketplaces",
    description:
      "Resolva seus problemas jurídicos sem sair de casa. Especialistas em Direito Digital e marketplaces.",
    type: "website",
    locale: "pt_BR",
    siteName: "Galvão Advocacia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Galvão Advocacia | Especialistas em Direito Digital e Marketplaces",
    description:
      "Resolva seus problemas jurídicos sem sair de casa. Especialistas em Direito Digital e marketplaces.",
  },
  alternates: {
    canonical: "/",
  },
};

import Hero from "@/components/hero-home";
import Qualidades from "@/components/qualidades";
import AreasDeAtuacao from "@/components/areas-de-atuacao";
import Metricas from "@/components/metricas";
import Cta from "@/components/cta";
import Faqs from "@/components/faqs";
import Marketplaces from "@/components/marketplaces";

export default function Home() {
  return (
    <>
      <Hero />
      <Marketplaces />
      <AreasDeAtuacao />
      <Qualidades />
      <Metricas />
      <Faqs />
      <Cta />
    </>
  );
}
