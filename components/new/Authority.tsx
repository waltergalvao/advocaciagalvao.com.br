"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Award, Shield, Target, TrendingUp } from "lucide-react";

export function Authority() {
  const highlights = [
    { icon: <Award className="w-5 h-5" />, text: "Atuação em Direito Digital desde 2017" },
    { icon: <Shield className="w-5 h-5" />, text: "Especialista em Defesa de Sellers" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "+R$ 1 milhão recuperado para clientes" },
    { icon: <Target className="w-5 h-5" />, text: "Estratégias específicas para Marketplace" },
  ];

  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-4">Sobre o Advogado</h2>
            <h3 className="text-3xl md:text-5xl font-playfair-display font-bold text-navy-900 mb-6 leading-tight">
              Vitor Galvão
            </h3>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-8">
              <p>
                Atua desde 2017 com Direito Digital e concentra sua atuação na defesa de vendedores de marketplaces e empresas de e-commerce.
              </p>
              <p>
                Seu trabalho envolve análise estratégica de contas suspensas, saldos retidos, denúncias de propriedade intelectual, disputas com plataformas digitais e demandas relacionadas à operação comercial online.
              </p>
            </div>

            <div className="lg:hidden mb-12">
              <div className="relative rounded-xl overflow-hidden shadow-xl aspect-square max-w-sm mx-auto">
                <Image
                  src="/images/about.jpg"
                  alt="Dr. Vitor Galvão"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 border-l-4 border-gold-500 rounded-r-md">
                  <div className="text-gold-600">{item.icon}</div>
                  <span className="text-sm font-bold text-navy-800">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block lg:w-1/2 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]"
            >
              <Image
                src="/images/about.jpg"
                alt="Dr. Vitor Galvão"
                fill
                className="object-cover grayscale md:hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-gold-400 font-bold uppercase tracking-widest text-xs">Fundador</span>
                <p className="text-white font-playfair-display text-xl font-bold">Vitor Galvão</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
