import { IconBrandWhatsapp } from "@tabler/icons-react";
import Image from "next/image";
import IntroImage from "@/public/images/about.jpg";
import Accordion from "@/components/utils/accordion";
import HeroShopee from "@/components/marketplaces/shopee/hero-shopee";
import ProblemasShopee from "@/components/marketplaces/shopee/problemas-shopee";
import { CtaButton } from "@/components/cta-button";
import { Avaliacoes } from "@/components/avaliacoes";
import Qualidades from "@/components/qualidades";
import Quote1 from "@/components/assets/quote-1.png";
import Quote2 from "@/components/assets/quote2.jpeg";
import Quote3 from "@/components/assets/quote-3.png";
import Quote4 from "@/components/assets/quote-4.png";
import { Quote } from "@/components/quote";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export const metadata = {
  title: "Shopee | Galvão Advocacia",
  description:
    "Conta bloqueada na Shopee? Saiba como reverter! Com análise especializada, podemos recorrer e adotar medidas legais para desbloquear sua conta e recuperar seu prejuízo.",
};

export default function ShopeePage() {
  return (
    <>
      {/* Section 1 */}
      <HeroShopee />

      {/* Section 3 */}
      <div className="mt-8 max-w-6xl mx-4 md:mx-auto border-4 border-dashed border-slate-600 p-12 rounded-lg shadow-lg text-center">
        <h2 className="h2 font-playfair-display font-extrabold text-slate-800 mb-4">
          Conta bloqueada na Shopee? <br />
          Saiba como reverter!
        </h2>
        <p className="text-xl text-slate-800">
          Se sua conta foi suspensa ou seu saldo ficou retido sem motivo claro,
          existe solução! Com análise especializada, podemos recorrer e adotar
          medidas legais para desbloquear sua conta e recuperar seu prejuízo.
        </p>
        <CtaButton />
      </div>

      {/* Section 2 */}
      <ProblemasShopee />

      <section className="mt-32 px-4 md:px-0">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="h2 font-playfair-display text-slate-800 mb-3">
            Outros já passaram por isso
          </h2>
          <p className="text-xl text-slate-500">
            Veja depoimentos de clientes que confiaram em nossos serviços.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4">
          <Quote
            imageSrc={Quote1}
            name="Beatriz Torres"
            role="Microempreendedora"
          >
            &ldquo;Minha conta na Shopee foi suspensa sem explicação, e meu
            saldo ficou preso. Fiquei desesperada, pois era minha principal
            fonte de renda. Com ajuda jurídica, consegui reverter a suspensão e
            recuperar meus valores. Voltei a vender normalmente e com conta como
            Vendedor Indicado!&rdquo;
          </Quote>
          <Quote imageSrc={Quote4} name="Priscila Silva" role="Artesã">
            &ldquo;Vendo produtos personalizados e, do nada, minha conta foi
            bloqueada e os pagamentos congelados. Depois do contato com o Dr.
            Vitor, finalmente recuperei minha conta e meus ganhos. Foi um alívio
            enorme poder continuar meu trabalho!&rdquo;
          </Quote>
          <Quote
            imageSrc={Quote3}
            name="Everton Morelli"
            role="Grande Loja Multiuso"
          >
            &ldquo;A Shopee bloqueou minha conta alegando violação de
            propriedade intelectual, mas eu não tinha feito nada errado. Entrei
            com notificação extrajudicial e minha conta foi restaurada. Agora,
            redobro os cuidados para evitar novos bloqueios.&rdquo;
          </Quote>
          <Quote
            imageSrc={Quote2}
            name="Caio Trindade"
            role="Loja de Eletrônicos"
          >
            &ldquo;Minha conta foi banida sem motivo claro. Com orientação
            especializada do Dr. Vitor, consegui liberar minha conta e cobrar
            lucros cessantes com dano moral. Hoje, continuo vendendo e sempre
            salvo a nota da loja e número de pedidos para evitar problemas no
            futuro.&rdquo;
          </Quote>
        </div>
      </section>

      {/* Section 4 */}

      <div className="mt-32 mb-16 max-w-6xl mx-4 md:mx-auto">
        <h2 className="h2 text-center font-bold font-playfair-display text-slate-800 mb-4">
          Quem somos?
        </h2>
        <div className="mt-12 flex flex-col md:flex-row items-center md:space-x-8">
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
            <p className="text-lg text-slate-500">
              Nosso escritório é especializado em Direito Digital e Defesa de
              Lojistas da Shopee, atuando em casos de contas suspensas ou
              bloqueadas em marketplaces há mais de oito anos. Trabalhamos com
              transparência e buscamos soluções seguras dentro da legalidade
              para cada cliente.
            </p>
            <p className="text-lg text-slate-500 mt-4">
              Nosso compromisso é oferecer assessoria jurídica qualificada,
              proporcionando suporte técnico e esclarecendo dúvidas sobre o
              tema.
            </p>
            <Avaliacoes variant="light" />
          </div>
        </div>
      </div>

      <Qualidades />

      {/* Section 5 */}
      <section className="bg-slate-50 mt-16" id="faq">
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
                evitar os argumentos mais utilizados pelas plataformas já
                fazendo prova específica.
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
