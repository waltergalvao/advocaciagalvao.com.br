import { Instagram } from 'lucide-react';
import Link from 'next/link';
import { LegalLinks } from './LegalLinks';

const quickLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre o Escritório", href: "/sobre" },
  { label: "Serviços & Preços", href: "/servicos" },
  { label: "Planos E-commerce", href: "/planos" },
];

const secondaryLinks = [
  { label: "Parcerias Estratégicas", href: "/parceiros" },
  { label: "Fale Conosco", href: "/contato" },
  { label: "Perguntas Frequentes", href: "/" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center md:text-left">

          {/* Col 1: Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="flex items-center cursor-pointer">
              <img src="/images/logo.png" alt="Advocacia Galvão" className="h-12 w-auto object-contain" />
            </Link>
            <p className="text-gray-500 text-xs leading-relaxed max-w-sm">
              Atuação jurídica em Direito Digital totalmente focada em sellers de marketplaces e donos de e-commerce de todo o Brasil. Protegemos seu faturamento e sua operação digital.
            </p>
            <div className="pt-2">
              <a
                href="https://instagram.com/vitor.adv.ecommerce"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-gold-600 text-navy-900 font-semibold transition-colors text-xs"
              >
                <Instagram className="w-4 h-4 text-gold-500" />
                @vitor.adv.ecommerce
              </a>
            </div>
          </div>

          {/* Col 2: Links Rápidos */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-navy-900 font-bold mb-5 text-xs uppercase tracking-widest text-[#B5945B]">Links Institucionais</h4>
            <ul className="text-navy-800 space-y-2.5 text-xs">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-gold-600 transition-colors uppercase tracking-wider focus:outline-none"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Soluções */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-navy-900 font-bold mb-5 text-xs uppercase tracking-widest text-[#B5945B]">Conexão & Apoio</h4>
            <ul className="text-navy-800 space-y-2.5 text-xs">
              {secondaryLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-gold-600 transition-colors uppercase tracking-wider focus:outline-none"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Termos & LGPD */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-navy-900 font-bold mb-5 text-xs uppercase tracking-widest text-[#B5945B]">Legalidade</h4>
            <LegalLinks />
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p className="text-center md:text-left">© {currentYear} Advocacia Galvão. Todos os direitos reservados. Dr. Vitor Galvão - OAB/SP.</p>

        </div>
      </div>
    </footer>
  );
}
