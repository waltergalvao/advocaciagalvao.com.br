"use client";

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import {
  UserX,
  Coins,
  ShieldAlert,
  Scale,
  Briefcase,
  ArrowRight,
  Shield,
  TrendingUp,
  FileText,
  DollarSign
} from 'lucide-react';

const practiceAreas = [
  {
    title: "Direito Digital e Direito de E-commerce (PRINCIPAL)",
    bg: "bg-navy-900 text-white",
    borderColor: "border-gold-500",
    description: "Esta é a nossa principal área de especialização jurídica. Atuamos de forma estratégica e focada para garantir a conformidade regulatória, proteger ativos imateriais essenciais e combater atos arbitrários perpetrados por plataformas e marketplaces nacionais e internacionais. Nosso trabalho foca em neutralizar os riscos algorítmicos que ameaçam a continuidade das operações digitais.",
    topics: [
      { name: "Litígios com Marketplaces", desc: "Patrocínio em processos judiciais complexos e urgentes para desconstituir penalidades unilaterais, reverter bloqueios arbitrários e restabelecer contas suspensas de forma célere." },
      { name: "Proteção de Ativos Digitais", desc: "Blindagem de propriedade intelectual, registro de marcas no INPI, defesa e oposição de patentes, além da segurança de listagens de produtos e reputação de sellers." },
      { name: "Termos de Uso e Compliance", desc: "Análise profunda de políticas corporativas, elaboração de termos de uso personalizados, termos de privacidade e adequação contínua à LGPD para lojas virtuais." }
    ]
  },
  {
    title: "Direito Civil Empresarial",
    bg: "bg-white text-navy-900 border border-gray-100",
    borderColor: "border-gray-200",
    description: "Oferecemos assessoria estratégica no âmbito civil-empresarial para estruturar com solidez as relações comerciais e societárias do seu e-commerce. Atuamos tanto de forma preventiva, na formulação de parcerias e contratos comerciais robustos, quanto no contencioso para resguardar o patrimônio da empresa e reaver créditos inadimplidos.",
    topics: [
      { name: "Contratos Corporativos de Parceria", desc: "Desenvolvimento técnico de instrumentos contratuais para prestação de serviços logísticos, intermediação, desenvolvimento de software e parcerias comerciais." },
      { name: "Responsabilidade Civil e Indenizações", desc: "Ações judiciais de reparação de danos decorrentes de lucros cessantes causados por inatividade indevida forçada, quebra de contratos ou abusos comerciais." },
      { name: "Recuperação de Crédito e Cobrança", desc: "Defesa dos interesses creditórios do e-commerce através de execuções de títulos extrajudiciais, ações monitórias e negociações consensuais seguras." }
    ]
  },
  {
    title: "Direito do Consumidor focado em E-commerce",
    bg: "bg-white text-navy-900 border border-gray-100",
    borderColor: "border-gray-200",
    description: "Blindamos as relações de consumo de seu negócio para mitigar litígios recorrentes típicos do comércio eletrônico. Prestamos consultoria de riscos para estruturar fluxos de pós-venda em estrita harmonia com o Código de Defesa do Consumidor (CDC) e realizamos o patrocínio combativo de ações judiciais de menor complexidade em todo o país.",
    topics: [
      { name: "Contestação em Juizados Cíveis (JEC)", desc: "Elaboração e acompanhamento processual integral de defesas contra pedidos abusivos de danos morais, cancelamentos extemporâneos e problemas de entrega de terceiros." },
      { name: "Gestão do Direito de Arrependimento", desc: "Adequação de políticas de trocas e devoluções para mitigar perdas com fraudes de devolução, frete reverso indevido e avarias provocadas pelo comprador." },
      { name: "Prevenção contra Fraudes de Compradores", desc: "Assessoramento técnico para documentação de envios, provas de postagem e relatórios antifraude para repressão jurídica a fraudes de clientes de má-fé." }
    ]
  }
];

const mainServices = [
  {
    id: "rec_conta",
    title: "Recuperação de Conta em Marketplace",
    icon: <UserX className="w-6 h-6" />,
    desc: "Análise aprofundada de conformidade e auditoria de histórico para reversão de suspensões e bloqueios arbitrários aplicados por algoritmos. Atuamos na esfera administrativa diretamente com as plataformas e, caso necessário, ingressamos com Tutelas de Urgência (liminares) em caráter preventivo e reparatório perante o Poder Judiciário para o restabelecimento imediato das atividades e preservação da reputação do lojista."
  },
  {
    id: "saldo_ret",
    title: "Saldo Retido e Bloqueios de Capital",
    icon: <Coins className="w-6 h-6" />,
    desc: "Combate à retenção abusiva de receitas legítimas sob pretextos unilaterais de 'reserva de contingência' ou averiguação sistêmica que ultrapassam prazos razoáveis. Atuamos na liberação imediata do capital de giro por meio de interpelações jurídicas com pedido de tutela provisória de urgência, amparados na abusividade da retenção integral do faturamento do seller."
  },
  {
    id: "def_consumidor",
    title: "Contencioso e Defesa de Sellers (JEC)",
    icon: <Scale className="w-6 h-6" />,
    desc: "Defesa processual cirúrgica (contestações técnicas) estruturada especificamente para lojistas de e-commerce e ações consumeristas nos Juizados Especiais Cíveis (JEC) em todo o Brasil. Prevenimos a revelia decorrente de falhas de citação sistêmicas, mitigamos condenações indenizatórias infundadas e pleiteamos a exclusão da responsabilidade do lojista quando o dano for de autoria exclusiva das transportadoras ou da própria plataforma."
  },
  {
    id: "concorrencia_desleal",
    title: "Repressão à Concorrência Desleal",
    icon: <ShieldAlert className="w-6 h-6" />,
    desc: "Adoção de providências cíveis e criminais urgentes para cessar práticas nocivas perpetradas por concorrentes desleais, tais como clonagem de listagens de anúncios best-sellers, sabotagem de estoque via compras simuladas, campanhas difamatórias estruturadas e abuso de poder por meio de denúncias falsas de propriedade intelectual no portal da plataforma."
  },
  {
    id: "revisao_operacao",
    title: "Auditoria de Operações de Crédito de Marketplace",
    icon: <TrendingUp className="w-6 h-6" />,
    desc: "Exame rigoroso dos contratos de mútuo e empréstimos de fomento ao e-commerce contratados junto a braços financeiros integrados (como Mercado Crédito). Identificamos a cobrança excessiva de encargos e taxas de juros abusivas que asfixiam a lucratividade da empresa, promovendo renegociações na esfera consensual ou revisões perante o Judiciário."
  },
  {
    id: "rec_tributaria",
    title: "Gestão de Passivos e Recuperação Tributária",
    icon: <DollarSign className="w-6 h-6" />,
    desc: "Auditoria analítica dos lançamentos fiscais de e-commerce optantes pelo Simples Nacional ou Lucro Presumido que revendem mercadorias sujeitas ao regime monofásico de PIS e COFINS (como autopeças, cosméticos, eletrônicos específicos, bebidas, entre outros). Recuperamos os valores recolhidos a maior em duplicidade de forma rápida através do portal do Simples Nacional."
  },
  {
    id: "apreensao_receita",
    title: "Liberação de Carga e Mercadoria Apreendida",
    icon: <FileText className="w-6 h-6" />,
    desc: "Intervenção técnica imediata, elaboração de impugnações e impetração de Mandado de Segurança com o objetivo de suspender apreensões arbitrárias de mercadorias conduzidas pela Receita Federal ou Secretarias Estaduais de Fazenda (SEFAZ) durante o fluxo logístico interestadual, garantindo a entrega célere e prevenindo o cancelamento de pedidos."
  },
  {
    id: "planos_recorrentes",
    title: "Assessoria Jurídica Corporativa (Consultoria Mensal)",
    icon: <Briefcase className="w-6 h-6" />,
    desc: "Retaguarda jurídica mensal permanente para e-commerces em ritmo de escala. Oferecemos análise de compliance contínua, revisão preventiva de termos de uso de fornecedores e prestadores de serviços, auditoria de anúncios para mitigar riscos de passivo com o consumidor, e suporte prioritário direto para tomadas de decisões estratégicas de negócios."
  }
];

export function ServicesTabs() {
  const [activeTab, setActiveTab] = useState<'practice' | 'services'>('services');

  return (
    <>
      {/* Banner Superior */}
      <section className="bg-navy-gradient text-white py-24 md:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 to-navy-950/90 z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
          <span className="text-gold-400 font-bold uppercase tracking-widest text-xs block mb-4">Serviços Especializados</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 tracking-tight leading-[1.1]">
            Nossas Áreas de Atuação e Soluções Estruturadas
          </h1>
          <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Garantimos suporte jurídico robusto, transparente e com forte foco na saúde institucional e na segurança da sua operação digital.
          </p>

          {/* Tab Toggles */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={() => setActiveTab('services')}
              className={`px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'services'
                  ? 'bg-gold-500 text-navy-900 shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Nossos Serviços
            </button>
            <button
              onClick={() => setActiveTab('practice')}
              className={`px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'practice'
                  ? 'bg-gold-500 text-navy-900 shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Áreas de Atuação
            </button>
          </div>
        </div>
      </section>

      {/* Conditionally Render Content */}
      <section className="py-24 lg:py-32 bg-gray-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatePresence mode="wait">
            {activeTab === 'practice' ? (
              <motion.div
                key="practice"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
              >
                {practiceAreas.map((area, index) => (
                  <div
                    key={index}
                    className={`p-10 rounded-xl shadow-sm border-t-4 flex flex-col justify-between ${area.borderColor} ${area.bg}`}
                  >
                    <div>
                      <h3 className="text-xl md:text-2xl font-serif font-bold mb-5 tracking-tight">
                        {area.title}
                      </h3>
                      <p className={`text-sm mb-8 leading-relaxed ${area.bg.includes('navy') ? 'text-white/80' : 'text-gray-500'}`}>
                        {area.description}
                      </p>

                      <div className="space-y-6">
                        {area.topics.map((topic, idx) => (
                          <div key={idx} className="border-t border-gray-100/10 pt-4">
                            <h4 className="font-bold text-sm uppercase tracking-wider text-gold-500 flex items-center gap-2 mb-2">
                              <Shield className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                              {topic.name}
                            </h4>
                            <p className={`text-sm ${area.bg.includes('navy') ? 'text-white/70' : 'text-gray-500'} leading-relaxed`}>
                              {topic.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="services"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
              >
                {mainServices.map((service, index) => (
                  <div
                    key={index}
                    className="p-10 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3 text-gold-500 mb-6 border-b border-gray-100 pb-5">
                        <div className="p-2.5 bg-gray-50 rounded-lg text-gold-600">
                          {service.icon}
                        </div>
                        <h3 className="font-serif font-bold text-lg md:text-xl text-navy-900 tracking-tight">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {service.desc}
                      </p>
                    </div>

                    <a
                      href="https://wa.me/5514997785999?text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20gostaria%20de%20falar%20com%20o%20Advogado%20especialista%20em%20Direito%20Digital%20e%20Processo%20Civil."
                      className="flex items-center gap-2 text-gold-600 hover:text-gold-700 text-xs font-bold uppercase tracking-wider mt-4 transition-colors"
                    >
                      <span>Falar com especialista</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Institutional Compliance Notice */}
          <div className="mt-20 bg-navy-900 text-white p-10 md:p-12 rounded-xl max-w-4xl mx-auto border border-gold-500/30">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="text-gold-400 shrink-0">
                <Shield className="w-12 h-12" />
              </div>
              <div>
                <h4 className="text-xl font-serif font-bold mb-3">Compromisso Ético e Rigor Profissional</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  Todas as nossas frentes de atuação são pautadas nas diretrizes de ética estabelecidas pela Ordem dos Advogados do Brasil (OAB). Garantimos sigilo profissional absoluto na condução dos seus dados operacionais e comerciais, atuando como verdadeiros parceiros estratégicos para o crescimento sustentável de sua empresa.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-14">
            <a
              href="https://wa.me/5514997785999?text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20gostaria%20de%20falar%20com%20o%20Advogado%20especialista%20em%20Direito%20Digital%20e%20Processo%20Civil."
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-10 py-4.5 rounded-sm shadow-xl transition-all uppercase text-xs tracking-wider"
            >
              Agendar Consulta Inicial
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
