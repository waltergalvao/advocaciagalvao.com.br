export const metadata = {
  title: "About - Tidy",
  description: "Page description",
};

import Hero from "@/components/hero-about";
import Content from "./content";

export default function About() {
  return (
    <>
      <Hero />
      <Content />
    </>
  );
}
