"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function Marketplaces() {
  const platforms = [
    { name: "Mercado Livre", src: "/images/mercado-livre.png" },
    { name: "Amazon", src: "/images/amazon.png" },
    { name: "Shopee", src: "/images/shopee.png" },
    { name: "TikTok Shop", src: "/images/tiktok-shop.png" },
  ];

  return (
    <section
      id="plataformas"
      className="py-16 bg-gray-50 border-y border-gray-200/50 overflow-hidden"
    >
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
                width={140}
                height={70}
                className="h-[70px] w-auto object-contain drop-shadow-md"
              />
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-xs mt-12 italic max-w-lg mx-auto leading-relaxed">
          Também atendemos demandas contra outros marketplaces e plataformas de
          e-commerce mediante análise prévia do caso jurídico.
        </p>
      </div>
    </section>
  );
}
