"use client";

import { motion } from "motion/react";
import {
  IconBan,
  IconCoins,
  IconFileX,
  IconShieldExclamation,
  IconPackageOff,
  IconTrendingDown,
  IconAlertOctagon,
  IconBolt,
} from "@tabler/icons-react";

export function Problem() {
  const painPoints = [
    {
      icon: <IconBan className="w-6 h-6" stroke={1.5} />,
      title: "Conta Bloqueada",
      desc: "Suspensões repentinas de contas de vendedores ativas, impedindo o login ou impossibilitando novas postagens repentinamente.",
    },
    {
      icon: <IconCoins className="w-6 h-6" stroke={1.5} />,
      title: "Saldo Retido",
      desc: "Valores legítimos retidos sob a denominação de reserva preventiva por 90 dias ou mais, asfixiando o giro financeiro.",
    },
    {
      icon: <IconFileX className="w-6 h-6" stroke={1.5} />,
      title: "Anúncios Removidos",
      desc: "Anúncios e listagens líderes de vendas (best-sellers) deletados ou inativados injustamente sem detalhamento plausível.",
    },
    {
      icon: <IconShieldExclamation className="w-6 h-6" stroke={1.5} />,
      title: "Denúncia de Propriedade Intelectual",
      desc: "Ataques de concorrentes desleais ou marcas exclusivas via PPI ou Brand Protection por uso de palavras comuns ou fotos comuns.",
    },
    {
      icon: <IconPackageOff className="w-6 h-6" stroke={1.5} />,
      title: "Estoque Retido ou Descarte",
      desc: "Mercadorias paradas nos depósitos de fulfillment (Mercado Envios Full, Amazon FBA, Shopee Full) sob ameaça de descarte unilateral.",
    },
    {
      icon: <IconTrendingDown className="w-6 h-6" stroke={1.5} />,
      title: "Queda Brusca de Faturamento",
      desc: "Decisões robóticas que interrompem o fluxo de faturamento num piscar de olhos, gerando insegurança na empresa.",
    },
    {
      icon: <IconAlertOctagon className="w-6 h-6" stroke={1.5} />,
      title: "Bloqueio de Operação",
      desc: "Perda imediata de permissões fiscais para emitir notas fiscais eletrônicas de vendas, suspendendo coletas contratadas.",
    },
    {
      icon: <IconBolt className="w-6 h-6" stroke={1.5} />,
      title: "Arbitrariedade Sistêmica",
      desc: "Respostas genéricas enviadas pelo suporte automatizado que não analisam as provas anexadas pelo lojista.",
    },
  ];

  return (
    <section id="problemas" className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-gold-600 text-xs md:text-sm font-bold uppercase tracking-widest mb-4">
            O Impacto do Bloqueio
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-playfair-display font-bold text-navy-900 mb-6 tracking-tight">
            Sua operação não pode parar por decisões robóticas arbitrárias
          </h3>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Quando as plataformas aplicam restrições, retêm valores legítimos ou
            desativam listagens consolidadas, o prejuízo transcende a operação
            diária. Afeta pagamentos, salários, fornecedores estruturados e a
            vitalidade financeira do negócio digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white p-6 md:p-8 rounded-lg shadow-sm md:hover:shadow-lg border-t-4 border-navy-900 flex flex-col group md:hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-navy-900/5 rounded-full flex items-center justify-center text-navy-900 mb-6 md:group-hover:bg-gold-500 md:group-hover:text-white transition-colors">
                {point.icon}
              </div>
              <h4 className="font-bold text-navy-900 text-lg mb-3 tracking-tight">
                {point.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <a
              href="/direito-digital/obrigado"
              className="inline-flex items-center gap-2 bg-navy-900 md:hover:bg-navy-800 text-white font-bold px-10 py-4.5 rounded-sm shadow-xl md:hover:-translate-y-0.5 transition-all uppercase text-xs tracking-wider"
            >
              Entender caminhos para o meu caso
              <span className="text-gold-400">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
