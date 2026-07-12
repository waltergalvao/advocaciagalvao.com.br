"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function Marketplaces() {
  const platforms = [
    { name: "Mercado Livre", src: "/images/logo-mercadolivre.svg", width: 180, height: 70 },
    { name: "Amazon", src: "/images/logo-amazon.svg", width: 120, height: 70 },
    { name: "Shopee", src: "/images/logo-shopee.svg", width: 120, height: 70 },
    { name: "Mercado Pago", src: "/images/logo-mercadopago.svg", width: 140, height: 70 },
  ];

  return (
    <section id="plataformas" className="py-16 bg-gray-50 border-y border-gray-200/50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <h3 className="text-center text-navy-900/60 text-xs md:text-sm font-bold uppercase tracking-widest mb-12">
          Atuação Específica nas Principais Plataformas
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center justify-center opacity-75 md:hover:opacity-100 transition-all cursor-default"
            >
              <Image
                src={platform.src}
                alt={`Logo ${platform.name}`}
                width={platform.width}
                height={platform.height}
                className="h-[70px] w-auto object-contain drop-shadow-md"
              />
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-xs mt-12 italic max-w-lg mx-auto leading-relaxed">
          Também atendemos demandas contra outros marketplaces e plataformas de e-commerce mediante análise prévia do caso jurídico.
        </p>
      </div>
    </section>
  );
}
