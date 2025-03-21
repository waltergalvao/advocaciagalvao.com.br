import Image from "next/image";
import MktplaceImg from "@/public/images/mktplace.jpg";
import DireitoCivilImg from "@/public/images/direito-civil.jpg";
import DireitoConsumidorImg from "@/public/images/direito-consumidor.jpg";
import { CtaButton } from "@/components/cta-button";
export default function AreasDeAtuacao() {
  return (
    <section className="relative">
      <div
        className="relative max-w-6xl mx-auto px-4 sm:px-6"
        id="areas-de-atuacao"
      >
        <div className="mt-12">
          {/* Section header */}

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
                <span className="text-slate-800">
                  Teve a conta suspensa ou valores retidos e precisa entender
                  seus direitos
                </span>
              </h3>
              <p className="text-lg text-slate-500">
                Um bloqueio repentino pode impactar sua operação. Nossa equipe
                jurídica pode analisar o caso e indicar os melhores e mais
                rápidos caminhos legais.
              </p>
              <CtaButton />
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
                <span className="text-slate-800">
                  Teve alteração de serviço que te prejudicou ou problema com
                  cliente que comprou e teve mediação favorável
                </span>
              </h3>
              <p className="text-lg text-slate-500">
                Muitas alterações de contrato por parte da Shopee podem ser
                ilegais, ainda mais nos casos que não são aplicados para todos
                ou causam prejuízo direto. Além disso, muitos bloqueios ocorrem
                sem explicação clara, dificultando a defesa dos lojistas. Com
                orientação jurídica, é possível avaliar os motivos e adotar as
                medidas cabíveis para evitar e/ou ressarcir o problema.
              </p>
              <CtaButton />
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
                <span className="text-slate-800">
                  Já tentou contato com a Shopee e não obteve resposta
                </span>
              </h3>
              <p className="text-lg text-slate-500">
                Caso seus pedidos de revisão não tenham sido atendidos, existe a
                possibilidade de recorrer por vias legais de forma ágil para
                buscar a reativação da conta.
              </p>
              <CtaButton />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
