import type { Metadata } from "next";
import Link from 'next/link';
import {
  UserX,
  Coins,
  Scale,
  ShieldAlert,
  Award,
  ArrowRight,
  Quote, ScaleIcon
} from 'lucide-react';
import { FAQ } from "./components/FAQ";
import { TestimonialsCarousel } from "./components/TestimonialsCarousel";

export const metadata: Metadata = {
  title: "Advocacia Galvão | Especialistas em Direito Digital e E-commerce",
  description:
    "Atuação jurídica em Direito Digital totalmente focada em sellers de marketplaces e donos de e-commerce de todo o Brasil. Protegemos seu faturamento e sua operação digital.",
  openGraph: {
    title: "Advocacia Galvão | Especialistas em Direito Digital e E-commerce",
    description:
      "Atuação jurídica em Direito Digital totalmente focada em sellers de marketplaces e donos de e-commerce de todo o Brasil.",
    type: "website",
  },
};

const reviews = [
  {
    name: "Rafael M.",
    type: "Seller de Alta Performance",
    text: "Tivemos nossa principal conta de vendas suspensa arbitrariamente. A equipe conduziu uma análise minuciosa de compliance e em poucos dias reativamos a loja. O suporte prestado foi altamente técnico, ágil e focado na preservação da nossa reputação comercial."
  },
  {
    name: "Mariana C.",
    type: "Diretora de Operações",
    text: "Enfrentamos uma retenção indevida de saldo sob alegação genérica de garantia preventiva. A atuação do escritório foi impecável, atuando de maneira firme perante os canais jurídicos da plataforma e liberando o fluxo de caixa sem burocracias."
  },
  {
    name: "Felipe A.",
    type: "Lojista Multicanal",
    text: "Nossos anúncios campeões de venda foram desativados por denúncias infundadas de propriedade intelectual feitas por concorrentes de má-fé. A petição elaborada pelo escritório foi cirúrgica, reestabelecendo nossas vendas com rapidez incontestável."
  }
];

export default function Home() {
  const platforms = [
    { name: "Mercado Livre", src: "/images/mercado-livre.png" },
    { name: "Amazon", src: "/images/amazon.png" },
    { name: "Shopee", src: "/images/shopee.png" },
    { name: "TikTok Shop", src: "/images/tiktok-shop.png" }
  ];

  const summaryServices = [
    {
      title: "Recuperação de Conta",
      desc: "Reativação ágil de contas de vendedores suspensas ou inativadas indevidamente por filtros robóticos em marketplaces.",
      icon: <UserX className="w-7 h-7" />
    },
    {
      title: "Saldo Retido",
      desc: "Medidas extrajudiciais e judiciais urgentes para a liberação imediata de saldos legítimos bloqueados sob reserva preventiva.",
      icon: <Coins className="w-7 h-7" />
    },
    {
      title: "Defesa Judicial de Sellers",
      desc: "Patrocínio completo em Juizados Especiais Cíveis (JEC) de todo o Brasil, prevenindo revelias e condenações abusivas.",
      icon: <Scale className="w-7 h-7" />
    },
    {
      title: "Concorrência Desleal",
      desc: "Bloqueio e repressão a práticas abusivas de concorrentes, como sabotagem de anúncios, estoque ou falsas denúncias de IP.",
      icon: <ShieldAlert className="w-7 h-7" />
    },
    {
      title: "Propriedade Intelectual",
      desc: "Defesa contra denúncias abusivas de marcas e patentes (PPI / Brand Protection) e blindagem de anúncios best-sellers.",
      icon: <Award className="w-7 h-7" />
    }
  ];

  const stats = [
    {
      number: "+7",
      suffix: "anos",
      label: "De dedicação exclusiva em blindar negócios digitais contra abusos e bloqueios de plataformas."
    },
    {
      number: "R$ 1M+",
      suffix: "",
      label: "Mais de 1 milhão em saldos recuperados e faturamentos protegidos para sellers em todo o país."
    },
    {
      number: "27",
      suffix: "estados",
      label: "Atuação nacional contra Mercado Livre, Amazon, Shopee, Magalu e outras plataformas de e-commerce."
    }
  ];

  return (
    <>
      {/* Hero */}
      <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden -mt-[76px] pt-[76px]">
        <picture className="absolute inset-0 z-0">
          <source media="(max-width: 767px)" srcSet="/images/hero-mobile.jpg" />
          <img
            src="/images/hero-desktop.jpg"
            alt="Advocacia Jurídica Digital"
            className="w-full h-full object-cover object-top"
          />
        </picture>

        <div className="absolute inset-0 bg-navy-900/50 md:bg-gradient-to-r md:from-navy-900/90 md:via-navy-900/60 md:to-transparent z-10" />

        <div className="container mx-auto px-4 md:px-6 relative z-20 py-24">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-8">
              Proteção Jurídica para Operações de E-commerce
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl">
              Defesa estratégica para sellers contra bloqueios arbitrários de contas, retenção indevida de saldos e concorrência desleal. Restabelecemos seu fluxo de faturamento com agilidade e rigor técnico.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5514997785999?text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20gostaria%20de%20falar%20com%20o%20Advogado%20especialista%20em%20Direito%20Digital%20e%20Processo%20Civil."
                className="bg-gold-500 hover:bg-gold-600 text-navy-900 px-10 py-4.5 rounded-sm font-bold text-sm uppercase tracking-wider transition-all text-center shadow-lg hover:shadow-gold-500/20 active:scale-95"
              >
                Falar com um Advogado Especialista
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplaces */}
      <section id="plataformas" className="py-14 md:py-24 bg-gray-50 border-y border-gray-200/50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <h3 className="text-center text-navy-900/60 text-xs md:text-sm font-bold uppercase tracking-widest mb-12">
            Especialista nas Maiores Plataformas de E-commerce
          </h3>

          <div className="flex items-center justify-center gap-24">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="flex flex-col items-center justify-center"
              >
                <img
                  src={platform.src}
                  alt={`Logo ${platform.name}`}
                  className="h-[90px] w-auto object-contain drop-shadow-md"
                />
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-12 max-w-lg mx-auto leading-relaxed">
            Nossa advocacia abrange disputas e consultoria em qualquer ecossistema de marketplace ou plataforma de e-commerce própria sob avaliação técnica.
          </p>
        </div>
      </section>

      {/* Practice Areas — Featured + Grid */}
      <section id="servicos-resumo" className="py-24 lg:py-48 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className=" mx-auto text-center mb-20">
            <span className="text-gold-600 font-bold uppercase tracking-widest text-xs md:text-sm block mb-4">Soluções Jurídicas</span>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-serif font-bold text-navy-900 tracking-tight leading-tight">
              Atuação Estratégica em <br/>Direito de E-commerce
            </h2>
            <p className="text-base md:text-lg text-gray-500 mt-6 leading-relaxed max-w-xl mx-auto">
              Articulamos defesas baseadas nas especificidades contratuais e regulatórias do setor digital, devolvendo previsibilidade ao fluxo de caixa do seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Featured service */}
            <div className="bg-navy-900 text-white p-10 md:p-12 rounded-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="text-gold-500 mb-6">
                  {summaryServices[0].icon}
                </div>
                <h4 className="font-serif font-bold text-2xl md:text-3xl mb-4 tracking-tight leading-tight">
                  {summaryServices[0].title}
                </h4>
                <p className="text-white/70 text-base leading-relaxed max-w-md">
                  {summaryServices[0].desc}
                </p>
              </div>
              <a
                href="https://wa.me/5514997785999?text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20gostaria%20de%20falar%20com%20o%20Advogado%20especialista%20em%20Direito%20Digital%20e%20Processo%20Civil."
                className="relative z-10 inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-bold text-xs uppercase tracking-widest mt-8 transition-colors"
              >
                Falar com especialista
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* 2×2 grid of remaining services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {summaryServices.slice(1).map((service, index) => (
                <div
                  key={index}
                  className="p-7 bg-white border border-gray-100 rounded-xl shadow-sm md:hover:shadow-md md:hover:border-gold-500/40 transition-all flex flex-col"
                >
                  <div className="text-gold-600 mb-4">
                    {service.icon}
                  </div>
                  <h4 className="font-bold text-navy-900 text-base mb-3 tracking-tight">
                    {service.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/servicos"
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-bold px-10 py-4.5 rounded-sm shadow-xl transition-all uppercase text-xs tracking-wider cursor-pointer focus:outline-none"
            >
              Conhecer Detalhes de Cada Serviço
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </Link>
          </div>
        </div>
      </section>

      <section
        id="autoridade-resumo"
        className="py-24 lg:py-48 relative overflow-hidden "
        style={{
          background: `
            linear-gradient(135deg,  #0a2540 1%, #001529 70%,  #001529 100%)
          `,
        }}
      >
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mx-auto text-center mb-16 lg:mb-32">
            <h2 className="text-gold-500 font-bold uppercase tracking-widest text-xs md:text-sm mb-4">Nossos resultados</h2>
            <h2 className="mx-auto text-3xl md:text-4xl lg:text-6xl font-serif font-bold text-white leading-tight tracking-tight mb-6">
              Defesa Jurídica<br/>Especializada e Reconhecida
            </h2>
            <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Nossa equipe atua na linha de frente do Direito Digital, traduzindo regras complexas de compliance em defesas rápidas para manter sua loja faturando.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gold-500/20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center py-10 md:py-0 md:px-10">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-gold-500 tracking-tight leading-none">
                      {stat.number}
                    </span>
                    {stat.suffix && (
                      <span className="text-xl md:text-2xl font-sans text-gold-500/60 font-bold">
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                  <p className="text-white/50 text-md leading-relaxed mt-4 max-w-xs mx-auto">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16 lg:mt-24">
            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-300 font-bold text-md uppercase tracking-widest transition-colors cursor-pointer focus:outline-none"
            >
              Conhecer nossa história
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-24 lg:py-48 overflow-hidden border-b border-gray-100 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-gold-600 font-bold uppercase tracking-widest text-xs md:text-sm mb-4">Depoimentos de Clientes</h2>
            <h3 className="text-3xl md:text-4xl lg:text-6xl font-serif font-bold text-navy-900 tracking-tight">
              Resultados Concretos e <br/>Parcerias de Confiança
            </h3>
            <p className="text-gray-500 text-base md:text-lg mt-4 max-w-xl mx-auto leading-relaxed">
              A satisfação das operações que blindamos é o reflexo de nossa dedicação técnica exclusiva.
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-xl shadow-sm border border-gray-100/50 relative group md:hover:shadow-xl md:hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <Quote className="absolute top-8 right-8 w-12 h-12 text-gold-500/20" />
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex gap-1 mb-5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span key={s} className="text-gold-500 text-lg">&#9733;</span>
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-8 leading-relaxed text-base">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center gap-3.5 pt-5 border-t border-gray-100">
                    <div className="w-11 h-11 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-600 flex items-center justify-center font-bold text-base select-none shrink-0">
                      {review.name.split(' ')[0][0]}{review.name.split(' ')[1]?.[0] || ''}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-navy-900 leading-tight">{review.name}</span>
                      <span className="text-gold-600 text-[10px] uppercase font-bold tracking-widest mt-1">{review.type}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel (client component) */}
          <TestimonialsCarousel reviews={reviews} />
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-navy-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl text-center">
          <ScaleIcon className="w-12 h-12 text-gold-500 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
          Sua operação está em risco. <br/>O próximo passo é jurídico.
          </h2>
          <p className="text-white/80 text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Entre em contato para realizar uma avaliação prévia gratuita de seu caso.
          </p>
          <a
            href="https://wa.me/5514997785999?text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20gostaria%20de%20falar%20com%20o%20Advogado%20especialista%20em%20Direito%20Digital%20e%20Processo%20Civil."
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-12 py-5 rounded-sm shadow-xl transition-all uppercase text-xs tracking-widest"
          >
            Falar com Especialista Sem Custo
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
