import Image from "next/image";
import IntroImage from "@/public/images/about.jpg";

export default function HeroAbout() {
  return (
    <section className="relative">
      {/* Dark background */}
      <div
        className="absolute inset-0 bg-slate-800 pointer-events-none -z-10 mb-48 lg:mb-0 lg:h-[30rem]"
        aria-hidden="true"
      >
        <div className="w-full h-full" data-aos="fade"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-16">
            <h1 className="h1 font-playfair-display text-slate-100">
              Advocacia Galvão
            </h1>
          </div>

          {/* Hero image */}
          <div
            className="flex justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Image
              className="mx-auto rounded-2xl border-8 border-slate-500"
              src={IntroImage}
              alt="Vitor Galvão"
              width={1024}
              height={576}
              priority
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
