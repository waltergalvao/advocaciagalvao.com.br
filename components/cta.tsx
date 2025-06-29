import Link from "next/link";
import Image from "next/image";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import ButtonCta from "./ui/button-cta";

export default function Cta() {
  return (
    <section className="bg-slate-800">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-32">
          <div className="relative max-w-3xl mx-auto text-center">
            <div
              className="absolute right-0 -mt-4 -mr-1 fill-slate-300 hidden lg:block"
              aria-hidden="true"
            >
              <svg className="fill-slate-300" width="56" height="43">
                <path d="M4.532 30.45C15.785 23.25 24.457 12.204 29.766.199c.034-.074-.246-.247-.3-.186-4.227 5.033-9.298 9.282-14.372 13.162C10 17.07 4.919 20.61.21 24.639c-1.173 1.005 2.889 6.733 4.322 5.81M18.96 42.198c12.145-4.05 24.12-8.556 36.631-12.365.076-.024.025-.349-.055-.347-6.542.087-13.277.083-19.982.827-6.69.74-13.349 2.24-19.373 5.197-1.53.75 1.252 7.196 2.778 6.688" />
              </svg>
            </div>

            <div className="relative">
              <h2 className="h2 font-playfair-display text-white mb-4">
                Reivindique os seus{" "}
                <span className="text-green-500">direitos</span>
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Defenda o que é seu com quem entende do assunto.
              </p>
              <div>
                <ButtonCta />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
