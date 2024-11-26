export const metadata = {
  title: "Galvão Advocacia",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import FeaturesBlocks from "@/components/features-blocks";
import Features03 from "@/components/features-home-03";
import Target from "@/components/target";
import Cta from "@/components/cta";
import Faqs from "@/components/faqs";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBlocks />
      <Features03 />
      <Target />
      <Faqs />
      <Cta />
    </>
  );
}
