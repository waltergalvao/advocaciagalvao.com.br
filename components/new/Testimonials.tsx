"use client";

import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function Testimonials() {
  const reviews = [
    {
      name: "Rafael M.",
      type: "Vendedor de Marketplace",
      text: "Recebi um atendimento ágil e especializado após ter minha principal conta bloqueada. Dr. Vitor Galvão analisou meu caso de forma detalhada e em poucos dias elaboramos a defesa jurídica correta. O suporte foi extremamente profissional."
    },
    {
      name: "Mariana C.",
      type: "Diretora de E-commerce",
      text: "Estávamos desesperados com um saldo expressivo retido sob pretexto de reserva de garantia. Fomos indicados à Advocacia Galvão: a condução do caso foi impecável, direta, técnica e as explicações nos trouxeram total tranquilidade."
    },
    {
      name: "Felipe A.",
      type: "Seller Multicanal",
      text: "Nossos melhores anúncios foram derrubados por denúncias de marca sem cabimento por um concorrente de má-fé. O Dr. Vitor Galvão agiu prontamente e devolveu o ritmo de faturamento normal à nossa operação no e-commerce."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section id="depoimentos" className="py-24 bg-gray-50 overflow-hidden border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-4">Experiência do Cliente</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-playfair-display font-bold text-navy-900 tracking-tight">
            O que dizem os Vendedores
          </h3>
          <p className="text-gray-500 text-sm md:text-base mt-2 max-w-xl mx-auto">
            Garantimos sigilo profissional absoluto e integridade corporativa em cada análise.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100/50 relative group md:hover:shadow-xl md:hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-gold-500/10" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex gap-1 mb-5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="text-gold-500 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-8 leading-relaxed text-sm">
                    "{review.text}"
                  </p>
                </div>
                
                {/* Custom avatar layout */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-gray-100">
                  <div className="w-11 h-11 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-600 flex items-center justify-center font-bold text-base select-none shrink-0">
                    {review.name.split(' ')[0][0]}{review.name.split(' ')[1]?.[0] || ''}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-navy-900 leading-tight">{review.name}</span>
                    <span className="text-gold-600 text-[10px] uppercase font-bold tracking-widest mt-1">{review.type}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative max-w-md mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative min-h-[300px] flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-gold-500/10" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex gap-1 mb-5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="text-gold-500 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-8 leading-relaxed text-sm">
                    "{reviews[currentIndex].text}"
                  </p>
                </div>
                
                {/* Custom mobile avatar */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-gray-100">
                  <div className="w-11 h-11 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-600 flex items-center justify-center font-bold text-base select-none shrink-0">
                    {reviews[currentIndex].name.split(' ')[0][0]}{reviews[currentIndex].name.split(' ')[1]?.[0] || ''}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-navy-900 leading-tight">{reviews[currentIndex].name}</span>
                    <span className="text-gold-600 text-[10px] uppercase font-bold tracking-widest mt-1">{reviews[currentIndex].type}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center items-center gap-6 mt-8">
            <button 
              onClick={prev}
              className="p-2.5 rounded-full bg-white border border-gray-200 shadow-md text-navy-900 md:hover:bg-gold-500 md:hover:text-white transition-all active:scale-90"
              aria-label="Depoimento Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentIndex ? 'bg-gold-500 w-3' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="p-2.5 rounded-full bg-white border border-gray-200 shadow-md text-navy-900 md:hover:bg-gold-500 md:hover:text-white transition-all active:scale-90"
              aria-label="Próximo Depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Link to see more reviews on Google */}
          <div className="flex justify-center mt-8">
            <a 
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-900 border border-navy-900/10 bg-white px-6 py-3 rounded shadow-sm active:scale-95 transition-transform"
            >
              <svg className="w-4.5 h-4.5 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.08H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.92l2.85-2.22.81-.6z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.08l3.66 2.84c.87-2.6 3.3-4.54 6.16-4.54z"/>
              </svg>
              Ver mais no Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
