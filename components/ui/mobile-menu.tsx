"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // Fecha o menu móvel ao clicar fora dele
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // Fecha o menu móvel se a tecla ESC for pressionada
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="flex md:hidden">
      {/* Botão de hambúrguer */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-slate-900 dark:text-slate-100"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/* Navegação móvel */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="px-5 py-2">
            <li>
              <Link
                href="/sobre"
                className="flex font-medium text-slate-800 hover:text-blue-600 py-2"
                onClick={() => setMobileNavOpen(false)}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="/#marketplaces"
                className="flex font-medium text-slate-800 hover:text-blue-600 py-2"
                onClick={() => setMobileNavOpen(false)}
              >
                Marketplaces
              </Link>
            </li>
            <li>
              <Link
                href="/#areas-de-atuacao"
                className="flex font-medium text-slate-800 hover:text-blue-600 py-2"
                onClick={() => setMobileNavOpen(false)}
              >
                Áreas de Atuação
              </Link>
            </li>
            <li>
              <Link
                href="/mensalista"
                className="flex font-medium text-slate-800 hover:text-blue-600 py-2"
                onClick={() => setMobileNavOpen(false)}
              >
                Mensalistas
              </Link>
            </li>
            <li>
              <Link
                href="/parceiros"
                className="flex font-medium text-slate-800 hover:text-blue-600 py-2"
                onClick={() => setMobileNavOpen(false)}
              >
                Parceiros
              </Link>
            </li>
            <li>
              <Link
                href="/#faq"
                className="flex font-medium text-slate-800 hover:text-blue-600 py-2"
                onClick={() => setMobileNavOpen(false)}
              >
                Perguntas Frequentes
              </Link>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  );
}
