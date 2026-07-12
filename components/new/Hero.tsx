"use client";

import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] flex items-center overflow-hidden">
      <picture className="absolute inset-0 z-0">
        <source media="(max-width: 767px)" srcSet="/images/hero-image-01.jpg" />
        <img
          src="/images/request-demo-bg.jpg"
          alt="Advocacia Jurídica Digital"
          className="w-full h-full object-cover object-top"
        />
      </picture>

      <div className="absolute inset-0 bg-navy-900/50 md:bg-gradient-to-r md:from-navy-900/90 md:via-navy-900/60 md:to-transparent z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-20 py-20">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-playfair-display font-bold text-white leading-tight mb-6"
          >
            Conta suspensa, saldo retido ou anúncio derrubado no marketplace?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl font-medium"
          >
            Atuação jurídica focada em vendedores, lojistas e operações de e-commerce que enfrentam bloqueios, retenções, denúncias e restrições em plataformas digitais.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <a
              href="/obrigado"
              className="bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-sm font-bold text-lg transition-all text-center shadow-lg hover:shadow-gold-500/20 active:scale-95"
            >
              Solicitar análise jurídica
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
