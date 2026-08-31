import type { Metadata } from "next";
import { Scale, Trophy, Landmark } from 'lucide-react';

export const metadata: Metadata = {
  title: "Sobre o Escritório | Advocacia Galvão",
  description:
    "Conheça a Advocacia Galvão, especialistas em Direito Digital e E-commerce. Saiba mais sobre nossa história, valores e o Dr. Vitor Galvão.",
};

export default function SobrePage() {
  const metrics = [
    { value: "+7 Anos", label: "De experiência especializada em Direito Digital" },
    { value: "+R$ 1 Milhão", label: "Recuperados em saldos bloqueados e indenizações" },
    { value: "Vitórias Reais", label: "Contra Mercado Livre, Amazon, Shopee e Magalu" },
    { value: "Atuação Nacional", label: "Defesa de sellers em todos os estados do Brasil" }
  ];

  const values = [
    {
      title: "Advocacia de Prontidão",
      desc: "No e-commerce, cada hora fora do ar é prejuízo. Por isso, nosso atendimento é consultivo e direto, respondendo urgências em minutos."
    },
    {
      title: "Tesese Jurídicas Customizadas",
      desc: "Rejeitamos soluções genéricas. Nossas petições são aprofundadas, incluindo lucros cessantes detalhados e cálculos reais de perda de faturamento."
    },
    {
      title: "Conhecimento Prático das Plataformas",
      desc: "Entendemos as regras internas, os algoritmos e os termos de uso de cada marketplace, sabendo exatamente onde estão os abusos contratuais."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="bg-navy-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-800 to-transparent opacity-80 z-0"></div>
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl z-0"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <span className="text-gold-400 font-bold uppercase tracking-widest text-xs md:text-sm block mb-3">Conheça nossa trajetória</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight max-w-4xl leading-tight">
            Autoridade Nacional em Defesa de Sellers e Empresas de E-commerce
          </h1>
          <p className="text-white/80 text-base md:text-xl max-w-2xl mt-6 leading-relaxed">
            Advocacia Galvão combina excelência jurídica, velocidade operacional e conhecimento prático dos maiores marketplaces do país.
          </p>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm text-center lg:text-left flex flex-col justify-between">
                <span className="text-3xl md:text-4xl font-serif font-bold text-gold-600 block mb-2">{metric.value}</span>
                <span className="text-navy-900 font-bold text-sm tracking-tight leading-snug">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Image Container */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto">
                <img
                  src="/images/vitor-galvao.jpg"
                  alt="Dr. Vitor Dalpiaz Galvão"
                  className="w-full h-auto object-cover grayscale md:hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-gold-400 font-bold uppercase tracking-widest text-xs">Sócio Fundador</span>
                  <p className="text-white font-serif text-2xl font-bold">Dr. Vitor Dalpiaz Galvão</p>
                  <p className="text-white/80 text-xs mt-1">OAB/SP • Especialista em Direito Digital e Processo Civil</p>
                </div>
              </div>
            </div>

            {/* Profile Copy */}
            <div className="w-full lg:w-1/2 space-y-6">
              <span className="text-gold-600 font-bold uppercase tracking-widest text-sm">O Fundador</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 tracking-tight leading-tight">
                Dr. Vitor Dalpiaz Galvão
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                <p>
                  Com atuação ininterrupta desde 2017 com Direito Digital e e-commerce, o <strong>Dr. Vitor Dalpiaz Galvão</strong> consolidou sua carreira como um dos principais advogados de defesa corporativa voltada para sellers e lojistas em marketplaces do cenário nacional.
                </p>
                <p>
                  Sua abordagem moderna desmistifica a burocracia do Direito Tradicional. O foco está no dinamismo que o e-commerce exige: reverter bloqueios arbitrários, recuperar saldos de vendas legítimas e anular punições robotizadas promovidas por grandes plataformas de intermediação comercial.
                </p>
                <p>
                  Ao longo de sua trajetória, liderou dezenas de litígios de alta complexidade contra corporações como <strong>Mercado Livre, Amazon, Shopee e Magalu</strong>, garantindo não apenas o retorno imediato das vendas das empresas representadas, mas também indenizações por lucros cessantes e danos materiais causados pela inatividade forçada da conta.
                </p>
              </div>

              {/* Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-navy-900/5 flex items-center justify-center text-gold-600 shrink-0">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 text-sm">Foco em Resultados</h4>
                    <p className="text-gray-500 text-xs">Estratégia voltada ao fluxo de caixa</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-navy-900/5 flex items-center justify-center text-gold-600 shrink-0">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 text-sm">Combate à Arbitrariedade</h4>
                    <p className="text-gray-500 text-xs">Anulação de decisões robóticas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="py-24 bg-gray-50 border-t border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-gold-600 font-bold uppercase tracking-widest text-sm">Nosso Diferencial</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mt-2">
              Uma Estrutura Jurídica Pensada para o Empresário Digital
            </h2>
            <p className="text-gray-500 text-sm md:text-base mt-4 max-w-2xl mx-auto">
              Rejeitamos o formalismo lento da advocacia tradicional. Entendemos que cada hora com a operação travada representa perda direta de clientes, faturamento e reputação.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((val, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border border-gray-200/60 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-12 h-12 bg-navy-900 flex items-center justify-center rounded-sm text-gold-400 mb-6 font-serif font-bold text-lg">
                    {`0${i + 1}`}
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-3 tracking-tight">{val.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA in page */}
      <section className="py-20 bg-navy-gradient text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 to-navy-800/80 z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-3xl">
          <Landmark className="w-12 h-12 text-gold-400 mx-auto mb-6" />
          <h2 className="text-2xl md:text-4xl font-serif font-bold mb-4">
            Precisa de uma Assessoria Jurídica de Alto Nível?
          </h2>
          <p className="text-white/70 text-sm md:text-base mb-8 max-w-2xl mx-auto">
            Fale diretamente com o Dr. Vitor Dalpiaz Galvão e receba um diagnóstico preciso sobre as pendências jurídicas da sua operação digital.
          </p>
          <a
            href="https://wa.me/5514997785999?text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20gostaria%20de%20falar%20com%20o%20Advogado%20especialista%20em%20Direito%20Digital%20e%20Processo%20Civil."
            className="inline-block bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold uppercase tracking-wider text-xs px-10 py-4.5 rounded-sm shadow-xl transition-all"
          >
            Falar diretamente com o Advogado
          </a>
        </div>
      </section>
    </div>
  );
}
