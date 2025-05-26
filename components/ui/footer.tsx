import { IconBrandFacebook } from "@tabler/icons-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" bg-slate-900  border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Bottom area */}
        <div className="md:flex md:justify-between py-6 md:py-8">
          {/* Copyrights note */}
          <div className="text-sm text-slate-400 mr-4 font-medium">
            © Advocacia Galvão - OAB/SP 389789
          </div>

          {/* Social links */}
          <ul className="flex space-x-6 mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a
                className="text-slate-400 hover:text-slate-100 transition duration-150 ease-in-out"
                href="https://www.facebook.com/Galvaodireitodigital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <IconBrandFacebook stroke={1} size={32} />
              </a>
            </li>
          </ul>

          <div>
            <h5 className="text-slate-400 font-medium">Navegação</h5>
            <ul className="mt-2">
              <li>
                <Link
                  href="/"
                  className="mb-1 font-medium text-slate-500 hover:text-slate-200 dark:text-slate-400 dark:hover:text-slate-200 flex items-center transition duration-150 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="mb-1 font-medium text-slate-500 hover:text-slate-200 dark:text-slate-400 dark:hover:text-slate-200 flex items-center transition duration-150 ease-in-out"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/mensalista"
                  className="mb-1 font-medium text-slate-500 hover:text-slate-200 dark:text-slate-400 dark:hover:text-slate-200 flex items-center transition duration-150 ease-in-out"
                >
                  Mensalistas
                </Link>
              </li>
              <li>
                <Link
                  href="/parceiros"
                  className="mb-1 font-medium text-slate-500 hover:text-slate-200 dark:text-slate-400 dark:hover:text-slate-200 flex items-center transition duration-150 ease-in-out"
                >
                  Parceiros
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="mb-1 font-medium text-slate-500 hover:text-slate-200 dark:text-slate-400 dark:hover:text-slate-200 flex items-center transition duration-150 ease-in-out"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-slate-400 font-medium">Marketplaces</h5>
            <ul className="mt-2">
              <li>
                <Link
                  href="/amazon"
                  className="mb-1 font-medium text-slate-500 hover:text-slate-200 dark:text-slate-400 dark:hover:text-slate-200 flex items-center transition duration-150 ease-in-out"
                >
                  Amazon
                </Link>
              </li>
              <li>
                <Link
                  href="/mercadolivre"
                  className="mb-1 font-medium text-slate-500 hover:text-slate-200 dark:text-slate-400 dark:hover:text-slate-200 flex items-center transition duration-150 ease-in-out"
                >
                  Mercado Livre
                </Link>
              </li>
              <li>
                <Link
                  href="/shopee"
                  className="mb-1 font-medium text-slate-500 hover:text-slate-200 dark:text-slate-400 dark:hover:text-slate-200 flex items-center transition duration-150 ease-in-out"
                >
                  Shopee
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-slate-400 font-medium">Legal</h5>
            <ul className="mt-2">
              <li>
                <Link
                  href="/privacidade"
                  className="mb-1 font-medium text-slate-500 hover:text-slate-200 dark:text-slate-400 dark:hover:text-slate-200 flex items-center transition duration-150 ease-in-out"
                >
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
