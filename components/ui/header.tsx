import Link from "next/link";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";

export default function Header({
  mode = "dark",
  showNav = true,
}: {
  mode?: string;
  showNav?: boolean;
}) {
  return (
    <header
      className={`border-b bg-white/80 backdrop-blur-md py-2 md:py-1 border-slate-200 fixed w-full z-30 ${
        mode !== "light" && "dark"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {showNav && (
              <Link
                href="/"
                className="block text-blue-600 transition duration-150 ease-in-out"
                aria-label="Galvao Advocacia"
              >
                <Logo />
              </Link>
            )}
            {!showNav && (
              <div className="flex items-center gap-4">
                <Logo />
                <span className="font-bold font-playfair-display text-xl">
                  Advocacia Galvão
                </span>
              </div>
            )}
          </div>

          {/* Desktop navigation */}
          {showNav && (
            <>
              <nav className="hidden md:flex md:grow">
                {/* Desktop menu links */}
                <ul className="flex grow justify-start flex-wrap items-center">
                  <li>
                    <Link
                      href="/sobre"
                      className="font-bold text-slate-800 hover:text-slate-200 dark:text-slate-700 dark:hover:text-slate-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                    >
                      Sobre
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#marketplaces"
                      className="font-bold text-slate-800 hover:text-slate-200 dark:text-slate-700 dark:hover:text-slate-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                    >
                      Marketplaces
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#areas-de-atuacao"
                      className="font-bold text-slate-800 hover:text-slate-200 dark:text-slate-700 dark:hover:text-slate-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                    >
                      Áreas de Atuação
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/mensalista"
                      className="font-bold text-slate-800 hover:text-slate-200 dark:text-slate-700 dark:hover:text-slate-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                    >
                      Mensalistas
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/parceiros"
                      className="font-bold text-slate-800 hover:text-slate-200 dark:text-slate-700 dark:hover:text-slate-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                    >
                      Parceiros
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#faq"
                      className="font-bold text-slate-800 hover:text-slate-200 dark:text-slate-700 dark:hover:text-slate-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                    >
                      Perguntas Frequentes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="font-bold text-slate-800 hover:text-slate-200 dark:text-slate-700 dark:hover:text-slate-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </nav>
              <MobileMenu />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
