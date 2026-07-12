"use client";

import { motion } from "motion/react";
import {
  IconBolt,
  IconUserCheck,
  IconShieldExclamation,
  IconWorld,
  IconPencil,
  IconFileSearch,
  IconBriefcase2,
  IconCalendarCheck,
} from "@tabler/icons-react";

export function Differentials() {
  const diffs = [
    {
      title: "Atendimento Direto",
      desc: "Você fala diretamente com o Dr. Vitor Galvão, sem intermediários.",
      icon: <IconUserCheck className="w-6 h-6" stroke={1.5} />,
    },
    {
      title: "Resposta em Minutos",
      desc: "Geralmente imediata ou em até 3 minutos, entendendo a urgência do seller.",
      icon: <IconBolt className="w-6 h-6" stroke={1.5} />,
    },
    {
      title: "Foco Exclusivo",
      desc: "Atuação voltada especificamente para as dores de sellers e e-commerces.",
      icon: <IconShieldExclamation className="w-6 h-6" stroke={1.5} />,
    },
    {
      title: "Alcance Nacional",
      desc: "Atendimento 100% online por WhatsApp e Call em todo o Brasil.",
      icon: <IconWorld className="w-6 h-6" stroke={1.5} />,
    },
    {
      title: "Petições Sob Medida",
      desc: "Nada de modelos genéricos. Cada caso recebe uma tese jurídica específica.",
      icon: <IconPencil className="w-6 h-6" stroke={1.5} />,
    },
    {
      title: "Experiência Prática",
      desc: "Conhecimento real das políticas de Mercado Livre, Amazon e Shopee.",
      icon: <IconFileSearch className="w-6 h-6" stroke={1.5} />,
    },
    {
      title: "Causas Relevantes",
      desc: "Foco em operações estruturadas que buscam segurança jurídica.",
      icon: <IconBriefcase2 className="w-6 h-6" stroke={1.5} />,
    },
    {
      title: "Consultoria Recorrente",
      desc: "Possibilidade de planos mensais para proteção contínua da sua empresa.",
      icon: <IconCalendarCheck className="w-6 h-6" stroke={1.5} />,
    },
  ];

  return (
    <section id="diferenciais" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-4">
            Por que nos escolher?
          </h2>
          <h3 className="text-3xl md:text-4xl font-playfair-display font-bold text-navy-900">
            Diferenciais que Protegem sua Operação
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {diffs.map((diff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-6 bg-gray-50 border-b-2 border-transparent md:hover:border-gold-500 md:hover:shadow-lg transition-all rounded-lg group"
            >
              <div className="text-navy-800 mb-4 md:group-hover:text-gold-600 transition-colors">
                {diff.icon}
              </div>
              <h4 className="font-bold text-navy-900 mb-2">{diff.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {diff.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Informative Pressure */}
        <div className="mt-20 max-w-4xl mx-auto p-8 rounded-2xl bg-navy-gradient text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-bold mb-4">
                Agir no tempo certo é fundamental
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">
                Quanto antes o caso é analisado, maior a clareza sobre
                documentos necessários, caminhos possíveis e riscos envolvidos.
                A demora pode consolidar prejuízos irreparáveis à sua conta.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <a
                href="/direito-digital/obrigado"
                className="bg-gold-500 text-navy-900 px-8 py-3 rounded-sm font-bold md:hover:bg-gold-600 transition-all uppercase text-sm tracking-widest"
              >
                Solicitar agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
