"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabToRoute: Record<string, string> = {
  home: '/',
  sobre: '/sobre',
  servicos: '/servicos',
  planos: '/planos',
  parcerias: '/parceiros',
  contato: '/contato',
};

const menuItems = [
  { label: "Início", tab: "home" },
  { label: "Sobre o Escritório", tab: "sobre" },
  { label: "Nossos Serviços", tab: "servicos" },
  { label: "Planos", tab: "planos" },
  { label: "Parcerias", tab: "parcerias" },
  { label: "Contato", tab: "contato" },
];

const solutions = [
  { label: "Shopee", href: "/shopee" },
  { label: "Mercado Livre", href: "/mercadolivre" },
  { label: "Amazon", href: "/amazon" },
  { label: "Blog", href: "/blog" },
  { label: "Direito Digital", href: "/direito-digital" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileSolucoesOpen, setIsMobileSolucoesOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (tab: string) => {
    const route = tabToRoute[tab];
    if (route === '/') return pathname === '/';
    return pathname === route;
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white py-1 shadow-md"
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center h-[76px] relative">
        {/* Logo anchor */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 flex items-center group focus:outline-none shrink-0 z-10 cursor-pointer"
        >
          <img
            src="/images/logo.png"
            alt="Advocacia Galvão"
            style={{ height: '68px' }}
            className="w-auto object-contain transition-transform md:group-hover:scale-[1.01] drop-shadow-md"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-x-6 xl:gap-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.tab}
              href={tabToRoute[item.tab]}
              className={`text-xs xl:text-[13px] font-bold uppercase tracking-widest transition-colors py-2 cursor-pointer focus:outline-none ${
                isActive(item.tab) ? 'text-gold-600 border-b-2 border-gold-500' : 'text-navy-900 md:hover:text-gold-600'
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Solutions Dropdown Menu */}
          <div className="relative group/dropdown">
            <button className="flex items-center gap-1 text-xs xl:text-[13px] font-bold uppercase tracking-widest text-navy-900 md:hover:text-gold-600 transition-colors py-2 focus:outline-none cursor-pointer">
              Atalhos <ChevronDown className="w-3.5 h-3.5 transition-transform md:group-hover/dropdown:rotate-180" />
            </button>
            <div className="absolute top-full right-0 mt-1 w-64 bg-white/95 backdrop-blur-md border border-navy-900/10 rounded-lg shadow-2xl py-3 opacity-0 invisible translate-y-2 lg:group-hover/dropdown:opacity-100 lg:group-hover/dropdown:visible lg:group-hover/dropdown:translate-y-0 transition-all duration-200 z-50">
              {solutions.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block w-full text-left px-6 py-2.5 text-[11px] font-bold uppercase tracking-wider transition-colors text-navy-800 md:hover:text-gold-600 md:hover:bg-navy-900/5 cursor-pointer"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden absolute right-4 border p-2 rounded-md transition-colors focus:outline-none text-navy-900 bg-navy-900/5 border-navy-900/10 hover:bg-navy-900/10 z-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t overflow-hidden bg-white border-navy-900/5 shadow-inner"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.tab}
                  href={tabToRoute[item.tab]}
                  onClick={() => setIsOpen(false)}
                  className={`text-xs font-bold uppercase tracking-widest py-2 border-b border-navy-900/5 text-left cursor-pointer ${
                    isActive(item.tab) ? 'text-gold-600 font-extrabold' : 'text-navy-900 hover:text-gold-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Solutions mobile collapse list */}
              <div className="flex flex-col border-b border-navy-900/5 pb-1">
                <button
                  onClick={() => setIsMobileSolucoesOpen(!isMobileSolucoesOpen)}
                  className="flex items-center justify-between text-xs font-bold uppercase tracking-widest py-2 focus:outline-none cursor-pointer text-navy-900 hover:text-gold-600"
                >
                  Atalhos
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileSolucoesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileSolucoesOpen && (
                  <div className="pl-4 mt-2 mb-2 border-l border-navy-900/10 flex flex-col gap-y-2.5">
                    {solutions.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className="text-[10px] font-bold uppercase tracking-wide transition-colors text-left text-navy-800 hover:text-gold-600 cursor-pointer"
                      >
                        {sub.label}
                      </Link>
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
