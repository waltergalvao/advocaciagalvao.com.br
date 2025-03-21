import VideoThumb from "@/public/images/video-thumb.jpg";
import ModalVideo01 from "@/components/modal-video-01";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { Avaliacoes } from "@/components/avaliacoes";
import Image from "next/image";

export default function HeroShopee() {
  return (
    <section className="relative">
      {/* Dark background */}
      <div
        className="absolute inset-0 bg-slate-800 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-16 pb-20 md:pt-24 md:pb-44">
          {/* Hero content */}
          <div className="max-w-xl mx-auto md:max-w-none md:flex md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-16 md:space-y-0">
            {/* Content */}
            <div
              className="text-center md:text-left md:min-w-[30rem]"
              data-aos="fade-right"
            >
              <h1 className="h1 text-5xl font-playfair-display text-slate-100 mb-4">
                Sua conta na Shopee foi suspensa, bloqueada, banida ou teve
                valor retido na conta?
              </h1>
              <p className="text-xl text-slate-400 mb-8">
                Nosso escritório jurídico presta assessoria para lojistas que
                enfrentam esse tipo de problema. Atuamos na defesa dos seus
                direitos e na busca por soluções jurídicas adequadas para cada
                caso.
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
                    Primeiro contato sem custo
                  </a>
                </div>
              </div>
              <Avaliacoes />
            </div>

            <div className="shrink-0" data-aos="fade-left">
              {/* Video thumbnail */}
              <div className="flex justify-center items-center">
                <div className="relative cursor-pointer">
                  <div
                    className="absolute inset-0 pointer-events-none border-2 border-slate-700 mt-3 ml-3 translate-x-4 translate-y-4 -z-10"
                    aria-hidden="true"
                  ></div>
                  <Image
                    src="/images/shopee.jpg"
                    alt="Pessoa preocupada"
                    className="rounded-lg shadow-lg"
                    width={768}
                    height={768}
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
