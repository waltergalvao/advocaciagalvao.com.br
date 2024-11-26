import Link from "next/link";
import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo01 from "@/components/modal-video-01";
import Image from "next/image";

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
              <h1 className="h1 text-5xl font-playfair-display text-slate-100 mb-4">
                Assistência jurídica descomplicada
              </h1>
              <p className="text-xl text-slate-400 mb-8">
                Consulte advogados especializados para resolver seus problemas
                jurídicos sem sair de casa.
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div>
                  <Link
                    className="btn rounded-lg font-bold text-white text-xl bg-green-700 hover:bg-green-800 w-full group gap-2 border border-green-500"
                    href="/request-demo"
                  >
                    <Image
                      src="/images/whatsapp.svg"
                      alt="WhatsApp"
                      width={32}
                      height={32}
                    />
                    Agendar uma consulta
                  </Link>
                </div>
              </div>
            </div>

            {/* Hero image */}
            <ModalVideo01
              thumb={VideoThumb}
              thumbWidth={540}
              thumbHeight={405}
              thumbAlt="Modal video thumbnail"
              video="/videos/video.mp4"
              videoWidth={1920}
              videoHeight={1080}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
