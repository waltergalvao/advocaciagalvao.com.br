import Link from "next/link";
import VideoThumb from "@/public/images/video-thumb.jpg";
import ModalVideo01 from "@/components/modal-video-01";
import Image from "next/image";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export default function HeroHome() {
  return (
    <section className="relative">
      {/* Dark background */}
      <div
        className="absolute inset-0 bg-slate-800 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-20 md:pt-40 md:pb-44">
          {/* Hero content */}
          <div className="max-w-xl mx-auto md:max-w-none md:flex md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-16 md:space-y-0">
            {/* Content */}
            <div
              className="text-center md:text-left md:min-w-[30rem]"
              data-aos="fade-right"
            >
              <h1 className="text-slate-400 mb-2 text-2xl font-inter uppercase font-extralight">
                Advocacia Galvão
              </h1>
              <h1 className="h1 text-5xl font-playfair-display text-slate-100 mb-4">
                Assistência jurídica descomplicada
              </h1>
              <p className="text-xl text-slate-400 mb-8">
                Resolva seus problemas jurídicos sem sair de casa.
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    data-umami-event="agendar_consulta"
                    data-umami-event-type="hero"
                    className="btn rounded-lg font-bold text-xl text-white bg-green-700 hover:bg-green-800 w-full group gap-2 border border-green-500 max-w-lg"
                    href="https://wa.me/5514997785999?text=Ol%C3%A1%2C%0A%0Agostaria%20de%20agendar%20uma%20consulta.%0A%0AMeu%20caso%20%C3%A9%20sobre"
                  >
                    <IconBrandWhatsapp size={32} stroke={1.5} />
                    Falar com advogado
                  </a>
                </div>
              </div>
            </div>

            {/* Hero image */}
            <ModalVideo01
              thumb={VideoThumb}
              thumbWidth={648}
              thumbHeight={486}
              thumbAlt="Modal video thumbnail"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
