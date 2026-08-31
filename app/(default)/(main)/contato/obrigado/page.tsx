import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Mensagem Enviada | Advocacia Galvão",
  description: "Sua mensagem foi enviada com sucesso. Nossa equipe entrará em contato em breve.",
};

export default function ObrigadoPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-lg mx-auto text-center px-4 py-24">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">
          Mensagem Enviada!
        </h1>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
          Recebemos seus dados e nossa equipe entrará em contato em breve pelo WhatsApp informado. Fique atento!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5514997785999?text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20gostaria%20de%20falar%20com%20o%20Advogado%20especialista%20em%20Direito%20Digital%20e%20Processo%20Civil."
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-sm shadow-md transition-all"
          >
            Falar pelo WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-bold text-xs uppercase tracking-widest transition-colors"
          >
            Voltar ao Início →
          </Link>
        </div>
      </div>
    </div>
  );
}
