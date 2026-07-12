"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        setIsVisible(window.scrollY > window.innerHeight * 0.8);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring" }}
          className="fixed bottom-6 right-6 z-50"
        >
          <a
            href="/obrigado"
            className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#29a81b] text-white rounded-full shadow-2xl md:hover:scale-110 transition-transform duration-300"
            title="Fale com o Especialista"
          >
            <span className="absolute right-full mr-4 bg-white text-navy-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 md:group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
              Como podemos ajudar?
            </span>
            <Image
              src="/images/whatsapp.svg"
              alt="WhatsApp"
              width={40}
              height={40}
              className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] m-0 p-0 object-contain"
            />
            <span className="absolute inset-0 rounded-full bg-[#29a81b] animate-ping opacity-25" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
