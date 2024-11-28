import Image from "next/image";
import MktplaceImg from "@/public/images/mktplace.jpg";
import DireitoCivilImg from "@/public/images/direito-civil.jpg";
import DireitoConsumidorImg from "@/public/images/direito-consumidor.jpg";

export default function AreasDeAtuacao() {
  return (
    <section className="relative">
      {/* Dark background */}
      <div
        className="absolute inset-0 bg-slate-800 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)] h-96 md:h-auto md:mb-64"
        aria-hidden="true"
      ></div>

      <div
        className="relative max-w-6xl mx-auto px-4 sm:px-6"
        id="areas-de-atuacao"
      >
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-12">
            <h2 className="h2 font-playfair-display text-slate-100">
              Áreas de Atuação
            </h2>
          </div>

          {/* Section content */}
          <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-10 md:gap-y-10 items-start">
            {/* 1st article */}
            <article data-aos="fade-up">
              <div className="relative block group mt-8 mb-4">
                <div
                  className="absolute inset-0 pointer-events-none border-2 border-slate-500 opacity-20 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out -z-10"
                  aria-hidden="true"
                ></div>
                <div className="overflow-hidden">
                  <Image
                    className="w-full aspect-square object-cover group-hover:scale-105 transition duration-700 ease-out"
                    src={MktplaceImg}
                    width={342}
                    height={342}
                    alt="Direito Digital"
                  />
                </div>
              </div>
              <h3 className="h4 font-playfair-display mb-2">
                <span className="text-slate-800">Direito Digital</span>
              </h3>
              <p className="text-lg text-slate-500">
                Atuamos frente aos grandes marketplaces, acumulando grandes
                vitórias contra plataformas como MercadoLivre e Amazon.
              </p>
            </article>

            {/* 2nd article */}
            <article data-aos="fade-up" data-aos-delay="100">
              <div className="relative group mt-8 mb-4">
                <div
                  className="absolute inset-0 pointer-events-none border-2 border-slate-500 opacity-20 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out -z-10"
                  aria-hidden="true"
                ></div>
                <div className="overflow-hidden">
                  <Image
                    className="w-full aspect-square object-cover group-hover:scale-105 transition duration-700 ease-out"
                    src={DireitoCivilImg}
                    width={342}
                    height={342}
                    alt="Direito Civil"
                  />
                </div>
              </div>
              <h3 className="h4 font-playfair-display mb-2">
                <span className="text-slate-800">Direito Civil</span>
              </h3>
              <p className="text-lg text-slate-500">
                Atuamos nos variados subnichos da área, desde a revisão e
                elaboração de contratos até a propositura de ações e elaboração
                de defesas no judiciário.
              </p>
            </article>

            {/* 3rd article */}
            <article data-aos="fade-up" data-aos-delay="200">
              <div className="relative group mt-8 mb-4">
                <div
                  className="absolute inset-0 pointer-events-none border-2 border-slate-500 opacity-20 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out -z-10"
                  aria-hidden="true"
                ></div>
                <div className="overflow-hidden">
                  <Image
                    className="w-full aspect-square object-cover group-hover:scale-105 transition duration-700 ease-out"
                    src={DireitoConsumidorImg}
                    width={342}
                    height={342}
                    alt="Direito do Consumidor"
                  />
                </div>
              </div>
              <h3 className="h4 font-playfair-display mb-2">
                <span className="text-slate-800">Direito do Consumidor</span>
              </h3>
              <p className="text-lg text-slate-500">
                Ações em favor do consumidor, ou defesas contra pedidos do
                consumidor. Possuímos ampla experiência nestas duas áreas que se
                complementam.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
