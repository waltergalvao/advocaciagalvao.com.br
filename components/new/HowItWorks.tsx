"use client";

import { motion } from 'motion/react';

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Envio do caso",
      desc: "O vendedor informa o problema enfrentado, como suspensão da conta, retenção de saldo ou denúncia recebida."
    },
    {
      number: "02",
      title: "Análise inicial",
      desc: "Avaliamos documentos, notificações da plataforma, histórico da conta e a urgência do cenário apresentado."
    },
    {
      number: "03",
      title: "Estratégia jurídica",
      desc: "Definimos a medida adequada: atuação administrativa, judicial ou preventiva, focando na proteção da operação."
    },
    {
      number: "04",
      title: "Condução e Feedback",
      desc: "Acompanhamento rigoroso com comunicação clara, objetiva e direcionada à resolução do seu problema."
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-4">Metodologia</h2>
          <h3 className="text-3xl md:text-4xl font-playfair-display font-bold text-navy-900 mb-6">
            Processo Ágil e Estratégico
          </h3>
          <p className="text-gray-600">
            Acompanhamento profissional em cada etapa da sua demanda, do diagnóstico à solução.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[2.5rem] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-gray-200 to-transparent z-0"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-navy-900 border-4 border-white shadow-xl flex items-center justify-center text-gold-400 font-bold text-xl mb-6 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                {step.number}
              </div>
              <h4 className="text-lg font-bold text-navy-900 mb-3">{step.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed px-4">
                {step.desc}
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
              href="/obrigado"
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-bold px-10 py-5 rounded-sm shadow-xl hover:-translate-y-0.5 transition-all uppercase text-xs tracking-wider"
            >
              Iniciar análise agora
              <span className="text-gold-400">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
