import VideoThumb from "@/public/images/video-thumb.jpg";
import ModalVideo01 from "@/components/modal-video-01";
import Image from "next/image";
import { IconBrandWhatsapp, IconStarFilled } from "@tabler/icons-react";
import Avatar1 from "./assets/review-1.png";
import Avatar2 from "./assets/review-2.png";
import Avatar3 from "./assets/review-3.png";
import Avatar4 from "./assets/review-4.png";

export default function HeroHome() {
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
                    Primeiro contato sem custo
                  </a>
                </div>
              </div>
              <a
                className="mt-8 block group cursor-pointer p-2 rounded-lg inline-flex items-center gap-4"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/search?q=Galv%C3%A3o+Advocacia+e+Consultoria+Jur%C3%ADdica&stick=H4sIAAAAAAAA_-NgU1I1qLA0SUpLMTe2SDEzNUo0NDS0MqiwSEpLSkwzNTEyTzOwNDM1XMSq6Z6YU3Z4cb6CY0pZfnJicmaiQqqCc35ecWlOSX4RkOdVWnR4bUpmciIAWwYWSFUAAAA&hl=en-GB&mat=CRDnb4ZILEd0ElcBmzl_pRgMRQPtZXvXnX45VefW168TgwL3RVqkDGHf2NJuF3DgyCsRy48U-MtIwAM-Xr3qctjJid3oJMkpOELDlZPt-rvnqHYfzRD2xXyojCXDyUgNYpo&authuser=0&ved=2ahUKEwjkr6CNiuCLAxU7qZUCHaGqO2MQ-MgIegQIJhAe&sei=JGC-Z-CUJ82J1sQP3ZS6CQ#lrd=0x94bfd738d652a111:0x8bfbaf5427f09651,1,,,,"
              >
                <div className="flex items-center gap-2 relative w-[130px]">
                  <Image
                    src={Avatar1}
                    width={40}
                    height={40}
                    className="border-2 border-slate-700 group-hover:border-amber-500 rounded-full"
                    alt="Google Review Avatar"
                  />
                  <Image
                    src={Avatar2}
                    width={40}
                    height={40}
                    className="absolute left-[30px] border-2 border-slate-700 group-hover:border-amber-500 rounded-full"
                    alt="Google Review Avatar"
                  />
                  <Image
                    src={Avatar3}
                    width={40}
                    height={40}
                    className="absolute left-[60px] border-2 border-slate-700 group-hover:border-amber-500 rounded-full"
                    alt="Google Review Avatar"
                  />
                  <Image
                    src={Avatar4}
                    width={40}
                    height={40}
                    className="absolute left-[90px] border-2 border-slate-700 group-hover:border-amber-500 rounded-full"
                    alt="Google Review Avatar"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 h-[20px]">
                    {[...Array(5)].map((_, index) => (
                      <IconStarFilled
                        key={index}
                        size={20}
                        stroke={1.5}
                        className="text-amber-500"
                      />
                    ))}
                    <h3 className="text-amber-500 text-2xl font-bold">5.0</h3>
                  </div>
                  <span className="text-slate-300 text-xs">
                    Leia as avaliações de clientes
                  </span>
                </div>
              </a>
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
