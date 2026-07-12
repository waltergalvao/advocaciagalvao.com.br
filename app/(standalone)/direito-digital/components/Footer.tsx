"use client";

import { IconBrandInstagram } from "@tabler/icons-react";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleOpenModal = (
    modalType: "privacy" | "terms" | "cookies" | "blog" | "parcerias"
  ) => {
    window.dispatchEvent(new CustomEvent("open-legal", { detail: modalType }));
  };

  const quickLinks = [
    { label: "Problemas", href: "#problemas" },
    { label: "Serviços", href: "#servicos" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "FAQ", href: "#faq" },
  ];

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
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          {/* Col 1: Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="#home" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Advocacia Galvão"
                width={120}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="text-gray-500 text-xs leading-relaxed max-w-sm">
              Atuação jurídica em Direito Digital totalmente focada em sellers
              de marketplaces e donos de e-commerce de todo o Brasil. Protegemos
              seu faturamento e sua operação digital.
            </p>
            <div className="pt-2">
              <a
                href="https://instagram.com/vitor.adv.ecommerce"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-gold-600 text-navy-900 font-semibold transition-colors text-xs"
              >
                <IconBrandInstagram
                  className="w-4 h-4 text-gold-500"
                  stroke={1.5}
                />
                @vitor.adv.ecommerce
              </a>
            </div>
          </div>

          {/* Col 2: Links Rápidos */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-navy-900 font-bold mb-5 text-xs uppercase tracking-widest text-[#B5945B]">
              Links Rápidos
            </h4>
            <ul className="text-navy-800 space-y-2.5 text-xs">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-gold-600 transition-colors uppercase tracking-wider font-bold text-[10px]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Soluções */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-navy-900 font-bold mb-5 text-xs uppercase tracking-widest text-[#B5945B]">
              Soluções
            </h4>
            <ul className="text-navy-800 space-y-2.5 text-xs">
              {solutions.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold-600 transition-colors uppercase tracking-wider font-bold text-[10px]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Termos & LGPD */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-navy-900 font-bold mb-5 text-xs uppercase tracking-widest text-[#B5945B]">
              Legalidade
            </h4>
            <ul className="text-navy-800 space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleOpenModal("privacy")}
                  className="hover:text-gold-600 transition-colors text-left font-bold uppercase text-[10px] tracking-wider focus:outline-none cursor-pointer"
                >
                  Política de Privacidade e LGPD
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleOpenModal("terms")}
                  className="hover:text-gold-600 transition-colors text-left font-bold uppercase text-[10px] tracking-wider focus:outline-none cursor-pointer"
                >
                  Termos de Uso
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleOpenModal("cookies")}
                  className="hover:text-gold-600 transition-colors text-left font-bold uppercase text-[10px] tracking-wider focus:outline-none cursor-pointer"
                >
                  Política de Cookies
                </button>
              </li>
              <li className="text-[10px] text-gray-400 pt-1 leading-snug">
                Segunda a sexta, das 9h às 18h
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-500">
          <p className="text-center md:text-left">
            © {currentYear} Advocacia Galvão. Todos os direitos reservados. Dr.
            Vitor Galvão - OAB/SP.
          </p>

          <div className="flex items-center gap-4">
            <p>
              Desenvolvimento por{" "}
              <a
                href="https://www.instagram.com/startdigitaloficial1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-900 hover:text-gold-600 transition-colors font-bold underline underline-offset-4"
              >
                Start Digital
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
