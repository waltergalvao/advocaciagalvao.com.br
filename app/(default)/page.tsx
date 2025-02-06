export const metadata = {
  title: "Galvão Advocacia",
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
