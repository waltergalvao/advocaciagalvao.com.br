import type { Metadata } from "next";
import {
  Users,
  Handshake,
  CheckCircle,
  MapPin,
  Briefcase,
  BookOpen,
  PenTool,
  Cpu,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  FileText
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Parcerias Estratégicas | Advocacia Galvão",
  description:
    "Programa de parcerias estratégicas da Advocacia Galvão. Para advogados, escritórios, criadores de conteúdo e empresas de tecnologia.",
};

export default function ParceirosPage() {
  const partnerTypes = [
    {
      title: "Advogados de Outros Estados",
      icon: <MapPin className="w-6 h-6 text-gold-500" />,
      desc: "Colaboração estratégica para representação local, realização de audiências qualificadas, cumprimento de diligências presenciais ou suporte operacional em tribunais fora da nossa base."
    },
    {
      title: "Advogados & Escritórios Aliados",
      icon: <Briefcase className="w-6 h-6 text-gold-500" />,
      desc: "Se o seu escritório atende clientes com necessidades complexas de Direito Digital e e-commerce, somamos esforços atuando como parceiros técnicos em consultas estratégicas ou na elaboração de peças processuais específicas."
    },
    {
      title: "Criadores de Conteúdo",
      icon: <PenTool className="w-6 h-6 text-gold-500" />,
      desc: "Blogueiros, influenciadores de negócios e especialistas digitais que criam materiais relevantes e desejam contar com respaldo jurídico de credibilidade para munir suas audiências."
    },
    {
      title: "Palestrantes & Mentores",
      icon: <BookOpen className="w-6 h-6 text-gold-500" />,
      desc: "Líderes de grupos de mentoria, eventos corporativos e programas de treinamento para sellers que buscam integrar soluções jurídicas de conformidade em suas grades de ensino."
    },
    {
      title: "Empresas & Soluções de Tecnologia",
      icon: <Cpu className="w-6 h-6 text-gold-500" />,
      desc: "Desenvolvedores de plataformas, assessores de ERP, consultorias de integração e hubs que enxergam sinergia em agregar segurança contratual e assessoria aos seus clientes lojistas."
    },
    {
      title: "Outras Conexões de Valor",
      icon: <Sparkles className="w-6 h-6 text-gold-500" />,
      desc: "Qualquer empresa ou profissional estratégico que compartilhe o propósito de amparar, blindar e proteger operações comerciais frente às arbitrariedades regulatórias das plataformas digitais."
    }
  ];

  const valueProps = [
    {
      title: "Benefício Mútuo e Crescimento",
      desc: "Compartilhamos ativamente oportunidades reais, indicações recíprocas de clientes altamente qualificados, convites para palestras e projetos institucionais conjuntos.",
      icon: <TrendingUp className="w-5 h-5 text-gold-500" />
    },
    {
      title: "Confiança e Rigor Ético",
      desc: "Asseguramos total transparência operacional, contratos claros de parceria e estrito cumprimento dos preceitos éticos recomendados pela OAB.",
      icon: <ShieldCheck className="w-5 h-5 text-gold-500" />
    },
    {
      title: "Rede de Colaboração Sólida",
      desc: "Fomentamos uma infraestrutura de suporte integrada que gera resultados reais e mitiga litígios de forma assertiva em todo o território nacional.",
      icon: <Users className="w-5 h-5 text-gold-500" />
    }
  ];

  const steps = [
    {
      title: "Preenchimento Cadastral",
      desc: "Apresente suas aspirações, área de atuação principal e compartilhe como enxerga uma potencial cooperação institucional."
    },
    {
      title: "Avaliação Estrutural",
      desc: "Analisamos detalhadamente sua proposta em sinergia com o nosso modelo de governança interna para identificar oportunidades mútuas."
    },
    {
      title: "Formalização da Aliança",
      desc: "Definimos o modelo ideal de colaboração (indicações dirigidas, regime de co-advocacia ou desenvolvimento de projetos bilaterais)."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <section className="bg-navy-gradient text-white py-24 md:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 to-navy-950/90 z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
          <span className="text-gold-400 font-bold uppercase tracking-widest text-xs block mb-4">Rede de Sinergia</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 tracking-tight leading-[1.1]">
            Parcerias Estratégicas - Juntos Podemos Ir Mais Longe
          </h1>
          <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Na Advocacia Galvão, valorizamos alianças sólidas de benefício mútuo. Unimos inteligências e especialidades para resguardar a integridade de negócios e e-commerces em todo o país.
          </p>
        </div>
      </section>

      {/* Intro & Manifesto */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            <div className="lg:w-1/2">
              <span className="text-gold-600 font-bold uppercase tracking-widest text-xs md:text-sm block mb-4">Nosso Propósito</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy-900 mb-6 leading-tight tracking-tight">
                Construindo uma Rede de Defesa e Excelência
              </h2>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-6">
                Acreditamos firmemente no poder da cooperação estruturada. Quer você atue como advogado, criador de conteúdo, palestrante, mentor ou empresário de tecnologia, existe espaço em nossa banca para desenvolvermos conexões sólidas de negócios.
              </p>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                Nossa prioridade é prestar soluções jurídicas personalizadas com agilidade técnica, amparados por uma rede nacional de parceiros comprometidos com os mesmos valores de transparência e profissionalismo.
              </p>
            </div>

            {/* Value Props */}
            <div className="lg:w-1/2 space-y-6">
              {valueProps.map((prop, i) => (
                <div
                  key={i}
                  className="p-7 bg-gray-50 rounded-xl border border-gray-100 flex items-start gap-5 hover:shadow-sm transition-shadow duration-300"
                >
                  <div className="p-2.5 bg-navy-900/5 rounded-lg text-gold-600 shrink-0 mt-1">
                    {prop.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 text-base mb-1.5 tracking-tight">{prop.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{prop.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Perfis de Parceiros */}
      <section className="py-24 lg:py-32 bg-gray-50/50 border-t border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-gold-600 font-bold uppercase tracking-widest text-xs md:text-sm block mb-4">Modelos de Colaboração</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy-900 tracking-tight">
              Quem Pode Ser Nosso Parceiro?
            </h2>
            <p className="text-gray-500 text-base md:text-lg mt-4 max-w-lg mx-auto leading-relaxed">
              Descubra onde o seu perfil se conecta ao ecossistema de soluções jurídicas avançadas do nosso escritório.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {partnerTypes.map((type, i) => (
              <div
                key={i}
                className="p-10 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-navy-900/5 flex items-center justify-center rounded-lg text-gold-600 mb-6 shrink-0">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-4 tracking-tight">{type.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{type.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-24 lg:py-32 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-gold-600 font-bold uppercase tracking-widest text-xs md:text-sm block mb-4">Fluxo de Integração</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy-900 tracking-tight">
              Como Funciona a Integração de Parcerias?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, idx) => (
              <div key={idx} className="p-10 bg-gray-50 rounded-xl border border-gray-100 relative">
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

      {/* CTA Final */}
      <section className="py-24 lg:py-32 bg-white text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <Handshake className="w-14 h-14 text-gold-500 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy-900 tracking-tight mb-6">
            Construa Uma Parceria Sólida Conosco
          </h2>
          <p className="text-gray-500 text-base md:text-lg mb-12 leading-relaxed max-w-xl mx-auto">
            Seja integrando clientes, compartilhando conhecimento técnico ou prestando co-assessoria sob medida, estamos prontos para receber sua proposta.
          </p>
          <a
            href="https://wa.me/5514997785999?text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20gostaria%20de%20falar%20com%20o%20Advogado%20especialista%20em%20Direito%20Digital%20e%20Processo%20Civil."
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold uppercase tracking-wider text-xs px-12 py-5 rounded-sm shadow-lg transition-all hover:shadow-gold-500/20 active:scale-95"
          >
            Seja um Parceiro Oficial
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
