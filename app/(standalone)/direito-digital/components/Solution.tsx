"use client";

import { motion } from "motion/react";
import { IconCircleCheck, IconChevronRight } from "@tabler/icons-react";

export function Solution() {
  const steps = [
    {
      title: "Análise Técnica",
      desc: "Avaliamos documentos, notificações da plataforma e o histórico completo da conta.",
    },
    {
      title: "Definição de Medida",
      desc: "Identificamos se o caminho administrativo ou judicial é o mais adequado para o cenário.",
    },
    {
      title: "Estratégia Customizada",
      desc: "Elaboramos medidas específicas para o vendedor, focando na proteção do fluxo de caixa.",
    },
  ];

  const scenarios = [
    "Conta suspensa sem explicação clara",
    "Saldo retido pela plataforma indevidamente",
    "Anúncios derrubados após denúncia",
    "Acusação de violação de propriedade intelectual",
    "E-commerce enfrentando ações de consumidores",
    "Mercadoria apreendida pela Receita Federal",
    "Necessidade de revisão de empréstimos do marketplace",
    "Busca por suporte jurídico recorrente (Consultoria)",
  ];

  return (
    <section id="metodo" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Solution Steps */}
          <div>
            <h2 className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-4">
              A Abordagem
            </h2>
            <h3 className="text-3xl md:text-4xl font-playfair-display font-bold text-navy-900 mb-8">
              Estratégia Jurídica sob Medida
            </h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-6 bg-white rounded-lg shadow-sm"
                >
                  <IconCircleCheck
                    className="w-6 h-6 text-gold-500 shrink-0"
                    stroke={1.5}
                  />
                  <div>
                    <h4 className="font-bold text-navy-900 mb-1">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Logical Offer / Scenarios */}
          <div className="bg-navy-900 p-8 md:p-12 rounded-lg text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <h3 className="text-2xl font-playfair-display font-bold mb-6 relative z-10">
              Sua operação se encontra em algum desses cenários?
            </h3>
            <ul className="space-y-4 relative z-10">
              {scenarios.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-white/80 text-sm md:text-base border-b border-white/5 pb-3"
                >
                  <IconChevronRight
                    className="w-4 h-4 text-gold-400 shrink-0"
                    stroke={1.5}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <a
                href="/direito-digital/obrigado"
                className="inline-block w-full bg-gold-500 md:hover:bg-gold-600 text-navy-900 py-4 rounded-sm font-bold text-center transition-all shadow-lg shadow-gold-500/20"
              >
                Solicitar Avaliação Prioritária
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
