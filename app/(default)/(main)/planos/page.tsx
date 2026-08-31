import type { Metadata } from "next";
import { Check, ShieldCheck, Clock, CheckCircle2, Zap, ArrowRight, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Planos E-commerce | Advocacia Galvão",
  description:
    "Planos mensais de assessoria jurídica para sellers de marketplaces. Básico, Avançado e Premium.",
};

export default function PlanosPage() {
  const plans = [
    {
      name: "Plano Básico",
      price: "R$ 1.000",
      period: "/ mês",
      target: "Desenvolvido especificamente para pequenos e-commerces e lojistas em fase de estruturação jurídica inicial.",
      features: [
        "Consultoria jurídica estratégica ilimitada para prevenção de riscos operacionais",
        "Duas reuniões de alinhamento estratégico individual previamente agendadas",
        "Análise preventiva mensal de contratos com fornecedores e prestadores de serviços",
        "Confecção e envio direcionado de notificações extrajudiciais para resolução de conflitos",
        "Suporte cotidiano ágil focado na conformidade legal e segurança comercial",
        "Acesso prioritário a tabelas de ações com condições e formas de pagamento exclusivas"
      ],
      cta: "Selecionar Plano Básico",
      isPopular: false
    },
    {
      name: "Plano Avançado",
      price: "R$ 2.500",
      period: "/ mês",
      target: "A solução sob medida para empresas em ritmo acelerado de expansão e consolidação multicanal.",
      features: [
        "Consultoria e redação ilimitada de contratos comerciais e de parceria",
        "Elaboração e envio de notificações extrajudiciais ilimitadas",
        "Patrocínio e defesa especializada em Juizados Especiais Cíveis (JEC) contra fraudes",
        "Auditoria e blindagem preventiva da Propriedade Intelectual e registro de marcas",
        "Acesso à tabela de serviços e contencioso com descontos e formas de pagamento exclusivas",
        "Suporte direto de alta prioridade via canais exclusivos de comunicação"
      ],
      cta: "Selecionar Plano Avançado",
      isPopular: true
    },
    {
      name: "Plano Premium",
      price: "R$ 4.500",
      period: "/ mês",
      target: "Garantia de segurança jurídica integral e retaguarda total para grandes operações de e-commerce.",
      features: [
        "Inclusão de todas as vantagens operacionais dos planos anteriores",
        "Revisão contínua de compliance algorítmico, termos de uso e governança preventiva",
        "Representação contenciosa judicial ilimitada nas demandas setoriais de e-commerce",
        "Gestão avançada de crises, proteção de listagens de produtos e denúncias de patentes",
        "Assessoramento consultivo multidisciplinar em esferas correlatas (Trabalhista, Tributária e Empresarial)",
        "Canal direto de atendimento dedicado com o sócio-fundador para decisões críticas"
      ],
      cta: "Selecionar Plano Premium",
      isPopular: false
    }
  ];

  const workflow = [
    {
      title: "Alinhamento e Diagnóstico Inicial",
      desc: "Iniciamos com uma avaliação técnica rigorosa para identificar as vulnerabilidades fiscais, contratuais e de marketplaces que cercam sua marca."
    },
    {
      title: "Modelagem do Plano",
      desc: "Com base na maturidade e no volume transacional da sua empresa, definimos o escopo preventivo ideal para acompanhar seu ritmo de crescimento."
    },
    {
      title: "Retaguarda Jurídica Contínua",
      desc: "Passamos a atuar na linha de frente do seu negócio, respondendo de forma imediata a crises e garantindo conformidade diária."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <section className="bg-navy-gradient text-white py-24 md:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 to-navy-950/90 z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
          <span className="text-gold-400 font-bold uppercase tracking-widest text-xs block mb-4">Assessoria Mensal Recorrente</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 tracking-tight leading-[1.1]">
            Planos de Proteção Contínua para Operações Digitais
          </h1>
          <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Blinde seu faturamento com segurança e previsibilidade financeira. Oferecemos retaguarda jurídica ativa para manter seu e-commerce seguro e escalável.
          </p>
        </div>
      </section>

      {/* Grid de Planos */}
      <section className="py-24 lg:py-32 bg-gray-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative bg-white rounded-2xl border p-8 md:p-12 flex flex-col justify-between transition-all duration-300 ${
                  plan.isPopular
                    ? 'border-gold-500 shadow-xl lg:scale-[1.03] z-10'
                    : 'border-gray-100 shadow-sm hover:shadow-md'
                }`}
              >
                {plan.isPopular && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-500 text-navy-900 font-bold text-xs uppercase tracking-widest px-5 py-2 rounded-full shadow-md">
                    Alta Performance
                  </span>
                )}
                <div>
                  <h3 className="font-serif font-bold text-2xl text-navy-900 mb-3 tracking-tight">{plan.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8">{plan.target}</p>

                  <div className="border-b border-gray-100 pb-8 mb-8">
                    <span className="text-gray-400 text-xs uppercase tracking-wider block font-bold mb-2">Mensalidade corporativa</span>
                    <span className="text-4xl md:text-5xl font-serif font-bold text-navy-900">{plan.price}</span>
                    <span className="text-gray-400 text-sm font-semibold">{plan.period}</span>
                  </div>

                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                        <Check className="w-4 h-4 text-gold-500 shrink-0 mt-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://wa.me/5514997785999?text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20gostaria%20de%20falar%20com%20o%20Advogado%20especialista%20em%20Direito%20Digital%20e%20Processo%20Civil."
                  className={`block w-full text-center py-4.5 rounded-sm font-bold text-xs uppercase tracking-wider transition-all ${
                    plan.isPopular
                      ? 'bg-gold-500 text-navy-900 hover:bg-gold-600 shadow-lg shadow-gold-500/10'
                      : 'bg-navy-900 text-white hover:bg-navy-800'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Como Funciona */}
      <section className="py-24 lg:py-32 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-gold-600 font-bold uppercase tracking-widest text-xs md:text-sm block mb-4">Fluxo Operacional</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy-900">
              Como Funciona a Parceria Preventiva
            </h2>
            <p className="text-gray-500 text-base md:text-lg mt-6 max-w-xl mx-auto leading-relaxed">
              Integramos os processos de defesa jurídica de forma transparente e adaptada ao volume de vendas de sua empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {workflow.map((step, idx) => (
              <div key={idx} className="p-10 bg-gray-50 rounded-xl border border-gray-100/80 relative">
                <span className="absolute -top-4 left-10 w-8 h-8 rounded-full bg-navy-900 text-gold-400 flex items-center justify-center font-bold text-sm border border-gold-500/40">
                  {idx + 1}
                </span>
                <h3 className="text-xl font-serif font-bold text-navy-900 mb-4 tracking-tight pt-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Agende uma Consulta Gratuita */}
      <section className="py-24 lg:py-32 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-gradient opacity-90 z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl text-center">
          <HelpCircle className="w-12 h-12 text-gold-500 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Agende uma Consulta Inicial Diagnóstica
          </h2>
          <p className="text-white/80 text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Entre em contato hoje mesmo com nossos especialistas para realizar uma avaliação prévia gratuita de riscos jurídicos e descubra como nossos planos podem garantir o crescimento seguro da sua marca.
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
    </div>
  );
}
