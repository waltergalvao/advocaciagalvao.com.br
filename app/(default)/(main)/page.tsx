import type { Metadata } from "next";
import Link from 'next/link';
import {
  UserX,
  Coins,
  Scale,
  ShieldAlert,
  Award,
  ArrowRight,
  Shield,
  Target,
  Quote,
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

  const highlights = [
    {
      icon: <Award className="w-5 h-5 text-gold-500" />,
      title: "Experiência no Direito Digital",
      text: "+7 anos de dedicação exclusiva em blindar negócios digitais contra abusos e bloqueios."
    },
    {
      icon: <Shield className="w-5 h-5 text-gold-500" />,
      title: "Atuação contra Grandes Marketplaces",
      text: "Histórico consolidado de êxito contra Mercado Livre, Amazon, Shopee, Magalu e outras."
    },
    {
      icon: <Target className="w-5 h-5 text-gold-500" />,
      title: "Resultados Relevantes",
      text: "+R$ 1 Milhão de saldos arbitrários reavidos e faturamentos protegidos em todo o país."
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

        <div className="container mx-auto px-4 md:px-6 relative z-20 pt-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
              Proteção Jurídica Especializada para Operações de E-commerce
            </h1>

            <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed max-w-2xl">
              Defesa estratégica para sellers contra bloqueios arbitrários de contas, retenção indevida de saldos e concorrência desleal. Restabelecemos seu fluxo de faturamento com agilidade e rigor técnico.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="https://wa.me/5514997785999?text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20gostaria%20de%20falar%20com%20o%20Advogado%20especialista%20em%20Direito%20Digital%20e%20Processo%20Civil."
                className="bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-sm font-bold text-base uppercase tracking-wider transition-all text-center shadow-lg hover:shadow-gold-500/20 active:scale-95"
              >
                Falar com um Advogado Especialista
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplaces */}
      <section id="plataformas" className="py-16 bg-gray-50 border-y border-gray-200/50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <h3 className="text-center text-navy-900/60 text-xs md:text-sm font-bold uppercase tracking-widest mb-12">
            Expertise Técnica Homologada Frente às Maiores Plataformas
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="flex flex-col items-center justify-center opacity-75 md:hover:opacity-100 transition-all cursor-default"
              >
                <img
                  src={platform.src}
                  alt={`Logo ${platform.name}`}
                  className="h-[70px] w-auto object-contain drop-shadow-md"
                />
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-xs mt-12 italic max-w-lg mx-auto leading-relaxed">
            Nossa advocacia abrange disputas e consultoria em qualquer ecossistema de marketplace ou plataforma de e-commerce própria sob avaliação técnica.
          </p>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="servicos-resumo" className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-gold-600 font-bold uppercase tracking-widest text-xs md:text-sm block mb-3">Soluções Jurídicas</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy-900 tracking-tight leading-tight">
              Atuação Estratégica em Direito de E-commerce
            </h2>
            <p className="text-sm md:text-base text-gray-500 mt-4 leading-relaxed max-w-xl mx-auto">
              Articulamos defesas baseadas nas especificidades contratuais e regulatórias do setor digital, devolvendo previsibilidade ao fluxo de caixa do seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto items-stretch">
            {summaryServices.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm md:hover:shadow-md md:hover:border-gold-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-gold-600 mb-5">
                    {service.icon}
                  </div>
                  <h4 className="font-bold text-navy-900 text-sm md:text-base mb-3 tracking-tight">
                    {service.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
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

      {/* Authority */}
      <section id="autoridade-resumo" className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">

            <div className="lg:w-1/2">
              <span className="text-gold-600 font-bold uppercase tracking-widest text-xs md:text-sm block mb-3">Autoridade de Destaque</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy-900 leading-tight tracking-tight mb-6">
                Defesa Jurídica Especializada e Reconhecida
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
                Nossa equipe atua na linha de frente do Direito Digital, traduzindo regras complexas de compliance em defesas rápidas para manter sua loja faturando.
              </p>

              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer focus:outline-none"
              >
                Conhecer nossa história completa, valores e OAB
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:w-1/2 w-full grid gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white border border-gray-100/80 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="p-3 bg-navy-900/5 rounded-lg shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 text-sm md:text-base mb-1 tracking-tight">{item.title}</h4>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-24 bg-gray-50 overflow-hidden border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-4">Depoimentos de Clientes</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy-900 tracking-tight">
              Resultados Concretos e Parcerias de Confiança
            </h3>
            <p className="text-gray-500 text-sm md:text-base mt-2 max-w-xl mx-auto">
              A satisfação das operações que blindamos é o reflexo de nossa dedicação técnica exclusiva.
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100/50 relative group md:hover:shadow-xl md:hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <Quote className="absolute top-6 right-8 w-12 h-12 text-gold-500/10" />
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex gap-1 mb-5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span key={s} className="text-gold-500 text-lg">&#9733;</span>
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-8 leading-relaxed text-sm">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center gap-3.5 pt-4 border-t border-gray-100">
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
      <section className="py-24 bg-navy-900 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-gold-500/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center border border-gold-500/20 p-8 md:p-16 rounded-3xl backdrop-blur-sm bg-white/5">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
              Garanta a Blindagem e a Estabilidade da sua Operação de Vendas
            </h2>

            <p className="text-base md:text-lg text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto">
              Evite prejuízos operacionais e restabeleça o controle financeiro do seu e-commerce. Nossos especialistas estão prontos para examinar a inconformidade da sua conta e traçar o melhor direcionamento técnico.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/5514997785999?text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20gostaria%20de%20falar%20com%20o%20Advogado%20especialista%20em%20Direito%20Digital%20e%20Processo%20Civil."
                className="w-full sm:w-auto bg-gold-500 md:hover:bg-gold-600 text-navy-900 px-12 py-5 rounded-sm font-bold text-base uppercase tracking-wider shadow-xl shadow-gold-500/10 transition-all md:hover:-translate-y-1 text-center cursor-pointer"
              >
                Iniciar Diagnóstico Especializado
              </a>
            </div>

            <p className="mt-8 text-white/40 text-xs tracking-wider uppercase font-medium">
              Atendimento direto por canais seguros e sigilo profissional absoluto.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
