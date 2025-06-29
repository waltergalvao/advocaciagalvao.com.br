import VideoThumb from "@/public/images/video-thumb.jpg";
import ModalVideo01 from "@/components/modal-video-01";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { Avaliacoes } from "@/components/avaliacoes";
import Image from "next/image";
import ButtonCta from "@/components/ui/button-cta";

export default function HeroAmazon() {
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
                Conta de vendedor da Amazon bloqueada ou saldo retido?
                <br />
                <span className="text-3xl text-green-500">
                  Recupere sua conta com atuação jurídica especializada.
                </span>
              </h1>
              <p className="text-xl text-slate-400 mb-8">
                Advogado especialista em direito digital e marketplaces. Atuação
                rápida para vendedores prejudicados por bloqueios injustos ou
                prejuízos por conta da plataforma.
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div>
                  <ButtonCta />
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
                    src="/images/amazon_capa.jpg"
                    alt="Pessoa preocupada"
                    className="shadow-lg"
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
