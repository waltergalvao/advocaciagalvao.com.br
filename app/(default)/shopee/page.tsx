import { IconBrandWhatsapp } from "@tabler/icons-react";
import Image from "next/image";
import IntroImage from "@/public/images/about.jpg";
import Accordion from "@/components/utils/accordion";
import HeroShopee from "@/components/marketplaces/shopee/hero-shopee";
import ProblemasShopee from "@/components/marketplaces/shopee/problemas-shopee";
import { CtaButton } from "@/components/cta-button";
import { Avaliacoes } from "@/components/avaliacoes";

export const metadata = {
  title: "Shopee | Galvão Advocacia",
};

export default function ShopeePage() {
  return (
    <>
      {/* Section 1 */}
      <HeroShopee />

      {/* Section 2 */}
      <ProblemasShopee />

      {/* Section 3 */}
      <div className="mt-32 max-w-6xl  mx-auto border-4 border-dashed border-slate-600 p-12 rounded-lg shadow-lg text-center">
        <h2 className="text-4xl font-playfair-display font-extrabold text-slate-800 mb-4">
          Existe possibilidade de reverter o bloqueio?
        </h2>
        <p className="text-xl text-slate-800">
          Cada caso deve ser analisado individualmente. Se o bloqueio for
          indevido ou irregular, é possível adotar medidas legais para buscar a
          solução adequada.
        </p>
        <CtaButton />
      </div>

      {/* Section 4 */}
      <div className="mt-32 max-w-6xl  mx-auto flex flex-col md:flex-row items-center md:space-x-8">
        <div className="w-full md:w-1/2">
          <Image
            src={IntroImage}
            alt="Vitor Galvão"
            className="w-full h-auto rounded-2xl border-8 border-slate-500"
            width={1024}
            height={576}
            priority
            quality={100}
          />
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Quem somos?
          </h2>
          <p className="text-lg text-slate-500">
            Nosso escritório é especializado em Direito Digital e Defesa de
            Lojistas da Shopee, atuando em casos de contas suspensas ou
            bloqueadas em marketplaces há mais de oito anos. Trabalhamos com
            transparência e buscamos soluções seguras dentro da legalidade para
            cada cliente.
          </p>
          <p className="text-lg text-slate-500 mt-4">
            Nosso compromisso é oferecer assessoria jurídica qualificada,
            proporcionando suporte técnico e esclarecendo dúvidas sobre o tema.
          </p>
          <Avaliacoes variant="light" />
        </div>
      </div>

      {/* Section 5 */}
      <section className="bg-slate-50 mt-32" id="faq">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-slate-50">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 font-playfair-display text-slate-800">
                Perguntas Frequentes
              </h2>
            </div>

            {/* Faqs */}
            <ul className="max-w-3xl mx-auto divide-y divide-slate-200">
              <Accordion title="Por que minha conta foi bloqueada?">
                Bloqueios podem ocorrer por diversas razões, incluindo supostas
                violações de políticas da Shopee, erros de análise automatizada
                ou denúncias de terceiros. Caso o bloqueio seja indevido, há
                formas legais de contestá-lo.
              </Accordion>

              <Accordion title="Como funciona a assessoria jurídica nesse caso?">
                O primeiro passo é a análise do seu caso. Se houver indícios de
                irregularidade, estudamos as medidas cabíveis para tentar
                solucionar o problema o mais rápido possível, fazendo provas,
                também, de todo o prejuízo financeiro e ranqueamento de
                anúncios.
              </Accordion>

              <Accordion title="Quanto tempo pode levar um processo de desbloqueio?">
                O prazo pode variar conforme a complexidade do caso e a
                necessidade de adoção de medidas administrativas ou judiciais,
                mas há muitos casos onde há urgência em que é possível uma
                decisão liminar para o desbloqueio da conta em 48 horas.
              </Accordion>

              <Accordion title="Vale a pena buscar assessoria jurídica?">
                A orientação de um advogado pode ser fundamental para esclarecer
                dúvidas e identificar as melhores alternativas disponíveis,
                traçando estratégias de como coletar a prova digital e como
                evitar os argumentos mais utilizados pelas plataformas.
              </Accordion>
              <span
                className="block border-t border-gray-200"
                aria-hidden="true"
              ></span>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-800">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-32">
            <div className="relative max-w-3xl mx-auto text-center">
              <div
                className="absolute right-0 -mt-4 -mr-1 fill-slate-300 hidden lg:block"
                aria-hidden="true"
              >
                <svg className="fill-slate-300" width="56" height="43">
                  <path d="M4.532 30.45C15.785 23.25 24.457 12.204 29.766.199c.034-.074-.246-.247-.3-.186-4.227 5.033-9.298 9.282-14.372 13.162C10 17.07 4.919 20.61.21 24.639c-1.173 1.005 2.889 6.733 4.322 5.81M18.96 42.198c12.145-4.05 24.12-8.556 36.631-12.365.076-.024.025-.349-.055-.347-6.542.087-13.277.083-19.982.827-6.69.74-13.349 2.24-19.373 5.197-1.53.75 1.252 7.196 2.778 6.688" />
                </svg>
              </div>

              <div className="relative">
                <h2 className="h2 font-playfair-display text-white mb-4">
                  Reivindique os seus{" "}
                  <span className="text-green-500">direitos</span>
                </h2>
                <p className="text-xl text-slate-300 mb-8">
                  Defenda o que é seu com quem entende do assunto.
                </p>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn rounded-lg font-bold text-xl text-white bg-green-700 hover:bg-green-800 w-full group gap-2 border border-green-500 max-w-lg"
                    href="https://wa.me/5514997785999?text=Ol%C3%A1%2C%0A%0Agostaria%20de%20agendar%20uma%20consulta.%0A%0AMeu%20caso%20%C3%A9%20sobre"
                    data-umami-event="agendar_consulta"
                    data-umami-event-type="cta"
                  >
                    <IconBrandWhatsapp size={32} stroke={1.5} />
                    Primeiro contato sem custo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
