"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      q: "O atendimento é somente para vendedores de marketplace?",
      a: "O foco principal da nossa atuação é o Direito Digital voltado para sellers de marketplaces (como Mercado Livre, Amazon e Shopee) e donos de e-commerce que operam com faturamento estruturado."
    },
    {
      q: "Vocês atendem empresas de todo o Brasil?",
      a: "Sim, realizamos atendimento 100% online em todo o território nacional. Utilizamos videoconferências pelo Google Meet e comunicação via WhatsApp para garantir agilidade e proximidade, independentemente da sua localização."
    },
    {
      q: "Minha conta foi suspensa. O que devo separar para análise?",
      a: "Para uma análise precisa, separe todos os comprovantes de estoque, notas fiscais de compra, notificações recebidas da plataforma, logs de conversas com o suporte e o histórico da conta suspensa."
    },
    {
      q: "É possível atuar em caso de saldo retido?",
      a: "Sim, a retenção indevida de valores é uma das nossas especialidades. Analisamos se a retenção viola os termos de uso ou a legislação vigente para buscar a liberação administrativa ou judicial do seu capital de giro."
    },
    {
      q: "Vocês atendem casos contra Mercado Livre, Amazon, Shopee e outras plataformas?",
      a: "Sim. Temos ampla experiência técnica e jurídica em demandas envolvendo as principais plataformas de e-commerce e marketplace nacionais e internacionais, tais como Mercado Livre, Amazon, Shopee, TikTok Shop, Magalu, Shein, B2W, entre outras. Cada canal possui suas próprias regências e regras de conformidade, e dominamos as particularidades de cada uma delas."
    },
    {
      q: "O atendimento é feito diretamente com o advogado?",
      a: "Sim. Um diferencial da Advocacia Galvão é o contato direto com o Dr. Vitor Galvão em todas as etapas estratégicas, garantindo que o seu negócio receba a atenção técnica necessária."
    },
    {
      q: "Vocês fazem consultoria mensal para sellers?",
      a: "Sim, oferecemos planos de consultoria preventiva e suporte recorrente para empresas que desejam operar com segurança jurídica e evitar bloqueios ou problemas recorrentes."
    },
    {
      q: "Existe garantia de reativação da conta ou liberação de valores?",
      a: "De acordo com as normas éticas e a realidade do Judiciário, cada caso exige análise individual. O trabalho jurídico é técnico e de meio, focando na melhor estratégia possível, mas não há promessa de resultado garantido."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-4">FAQ</h2>
            <h3 className="text-3xl md:text-4xl font-playfair-display font-bold text-navy-900">
              Dúvidas Frequentes
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-100 rounded-lg overflow-hidden transition-all duration-300 md:hover:shadow-md"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left bg-gray-50 md:hover:bg-white transition-colors"
                >
                  <span className="font-bold text-navy-900 pr-8">{faq.q}</span>
                  {activeIndex === index ? (
                    <Minus className="w-5 h-5 text-gold-500 shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-navy-800/30 shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 text-gray-600 border-t border-gray-100 bg-white leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
