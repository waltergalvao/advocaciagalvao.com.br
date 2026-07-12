"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconMenu2, IconX, IconChevronDown } from "@tabler/icons-react";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileSolucoesOpen, setIsMobileSolucoesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solutions = [
    {
      label: "Planos Mensalistas",
      href: "https://www.advocaciagalvao.com.br/mensalista",
    },
    { label: "Blog", href: "https://www.advocaciagalvao.com.br/blog" },
    {
      label: "Vendedor Amazon",
      href: "https://www.advocaciagalvao.com.br/amazon",
    },
    {
      label: "Vendedor Mercado Livre",
      href: "https://www.advocaciagalvao.com.br/mercadolivre",
    },
    {
      label: "Vendedor Shopee",
      href: "https://www.advocaciagalvao.com.br/shopee",
    },
  ];

  return (
    <nav
      style={{
        backgroundColor: scrolled ? "#ffffff" : "rgba(255, 255, 255, 0.7)",
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled ? "py-1 shadow-md" : "py-2"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center h-[76px] relative">
        {/* Logo anchor without background or borders, exactly 68px high (centered only on mobile) */}
        <a
          href="#home"
          className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 flex items-center group focus:outline-none shrink-0 z-10"
        >
          <Image
            src="/images/logo.png"
            alt="Advocacia Galvão"
            width={200}
            height={68}
            style={{ height: "68px", width: "auto" }}
            className="object-contain transition-transform md:group-hover:scale-[1.01] drop-shadow-md"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-x-6 xl:gap-x-8">
          <a
            href="#problemas"
            className="text-xs xl:text-sm font-bold uppercase tracking-widest text-navy-900 md:hover:text-gold-600 transition-colors py-2"
          >
            Problemas
          </a>
          <a
            href="#servicos"
            className="text-xs xl:text-sm font-bold uppercase tracking-widest text-navy-900 md:hover:text-gold-600 transition-colors py-2"
          >
            Serviços
          </a>
          <a
            href="#diferenciais"
            className="text-xs xl:text-sm font-bold uppercase tracking-widest text-navy-900 md:hover:text-gold-600 transition-colors py-2"
          >
            Diferenciais
          </a>
          <a
            href="#faq"
            className="text-xs xl:text-sm font-bold uppercase tracking-widest text-navy-900 md:hover:text-gold-600 transition-colors py-2"
          >
            FAQ
          </a>

          {/* Solutions Dropdown Menu (Must be the last item) */}
          <div className="relative group/dropdown">
            <button className="flex items-center gap-1 text-xs xl:text-sm font-bold uppercase tracking-widest text-navy-900 md:hover:text-gold-600 transition-colors py-2 focus:outline-none cursor-pointer">
              Soluções{" "}
              <IconChevronDown
                className="w-3.5 h-3.5 transition-transform md:group-hover/dropdown:rotate-180"
                stroke={1.5}
              />
            </button>
            <div className="absolute top-full right-0 mt-1 w-64 bg-white/95 backdrop-blur-md border border-navy-900/10 rounded-lg shadow-2xl py-3 opacity-0 invisible translate-y-2 lg:group-hover/dropdown:opacity-100 lg:group-hover/dropdown:visible lg:group-hover/dropdown:translate-y-0 transition-all duration-200 z-50">
              {solutions.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors text-navy-800 md:hover:text-gold-600 md:hover:bg-navy-900/5"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Toggle Button (Darker color when unscrolled for premium visibility against white overlay, positioned right) */}
        <button
          className="lg:hidden absolute right-4 lg:static border p-2 rounded-md transition-colors focus:outline-none text-navy-900 bg-navy-900/5 border-navy-900/10 hover:bg-navy-900/10 z-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <IconX className="w-5 h-5" stroke={1.5} />
          ) : (
            <IconMenu2 className="w-5 h-5" stroke={1.5} />
          )}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t overflow-hidden bg-white border-navy-900/5 shadow-inner"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-y-4">
              <a
                href="#problemas"
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold uppercase tracking-widest py-1 border-b border-navy-900/5 text-navy-900 hover:text-gold-600"
              >
                Problemas
              </a>
              <a
                href="#servicos"
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold uppercase tracking-widest py-1 border-b border-navy-900/5 text-navy-900 hover:text-gold-600"
              >
                Serviços
              </a>
              <a
                href="#diferenciais"
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold uppercase tracking-widest py-1 border-b border-navy-900/5 text-navy-900 hover:text-gold-600"
              >
                Diferenciais
              </a>
              <a
                href="#faq"
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold uppercase tracking-widest py-1 border-b border-navy-900/5 text-navy-900 hover:text-gold-600"
              >
                FAQ
              </a>

              {/* Solutions mobile collapse list */}
              <div className="flex flex-col border-b border-navy-900/5 pb-1">
                <button
                  onClick={() => setIsMobileSolucoesOpen(!isMobileSolucoesOpen)}
                  className="flex items-center justify-between text-sm font-bold uppercase tracking-widest py-1 focus:outline-none cursor-pointer text-navy-900 hover:text-gold-600"
                >
                  Soluções
                  <IconChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isMobileSolucoesOpen ? "rotate-180" : ""
                    }`}
                    stroke={1.5}
                  />
                </button>
                {isMobileSolucoesOpen && (
                  <div className="pl-4 mt-2 mb-2 border-l border-navy-900/10 flex flex-col gap-y-3">
                    {solutions.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="text-xs font-bold uppercase tracking-wide transition-colors text-navy-800 hover:text-gold-600"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
