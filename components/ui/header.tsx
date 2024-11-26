import Link from "next/link";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";

export default function Header({ mode = "dark" }: { mode?: string }) {
  return (
    <header
      className={`bg-slate-900 border-b border-slate-700 absolute w-full z-30 ${
        mode !== "light" && "dark"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow justify-start flex-wrap items-center">
              <li>
                <Link
                  href="/about"
                  className="font-medium text-slate-800 hover:text-slate-200 dark:text-slate-400 dark:hover:text-slate-200 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  O Escritório
                </Link>
              </li>
              <li>
                <Link
                  href="/advogado-para-marketplace"
                  className="font-medium text-slate-800 hover:text-slate-200 dark:text-slate-400 dark:hover:text-slate-200 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Marketplace
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
