"use client";

import { motion } from 'motion/react';

export function FinalCTA() {
  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-gold-500/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center border border-gold-500/20 p-8 md:p-16 rounded-3xl backdrop-blur-sm bg-white/5">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-playfair-display font-bold text-white mb-6"
          >
            Sua operação no marketplace precisa de uma análise jurídica estratégica?
          </motion.h2>
          
          <p className="text-xl text-white/70 mb-10 leading-relaxed">
            Se sua conta foi suspensa, seu saldo está retido ou sua empresa enfrenta problemas com marketplaces, solicite uma análise inicial e entenda os caminhos possíveis para o seu caso.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/obrigado"
              className="w-full sm:w-auto bg-gold-500 md:hover:bg-gold-600 text-navy-900 px-12 py-5 rounded-sm font-bold text-lg tracking-wide shadow-xl shadow-gold-500/10 transition-all md:hover:-translate-y-1 text-center"
            >
              Solicitar análise jurídica do caso
            </a>
          </div>
          
          <p className="mt-8 text-white/40 text-sm italic">
            Fale com o especialista e garanta a segurança da sua operação digital.
          </p>
        </div>
      </div>
    </section>
  );
}
