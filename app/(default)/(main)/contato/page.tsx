import type { Metadata } from "next";
import { Phone, Clock, Instagram, Globe, ShieldCheck, AlertCircle } from "lucide-react";
import { sendContactForm } from "../components/contact-actions";
import { SubmitButton } from "../components/SubmitButton";

export const metadata: Metadata = {
  title: "Contato | Advocacia Galvão",
  description:
    "Entre em contato com a Advocacia Galvão. Atendimento especializado para sellers de marketplaces e donos de e-commerce de todo o Brasil.",
};

export default function ContatoPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  return <ContatoContent searchParams={searchParams} />;
}

async function ContatoContent({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <section className="bg-navy-gradient text-white py-24 md:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 to-navy-950/90 z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
          <span className="text-gold-400 font-bold uppercase tracking-widest text-xs block mb-4">Fale Conosco</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 tracking-tight leading-[1.1]">
            Canais de Atendimento e Triagem Prioritária
          </h1>
          <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Atendimento 100% online, dinâmico e focado na urgência do e-commerce nacional. Fale com um advogado especialista sem burocracias.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 lg:py-32 bg-gray-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 max-w-6xl mx-auto items-start">

            {/* Contact details / channels (5 cols) */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <span className="text-gold-600 font-bold uppercase tracking-widest text-xs md:text-sm block mb-3">Contato Corporativo</span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-navy-900 tracking-tight">
                  Prontidão Total Contra Arbitrariedades
                </h2>
                <p className="text-gray-500 text-sm md:text-base mt-5 leading-relaxed">
                  Não permita que decisões sistêmicas asfixiem seu negócio. Utilize nossos canais oficiais para receber orientações estratégicas e iniciar a reativação da sua conta ou liberação de saldos de forma rápida.
                </p>
              </div>

              {/* Channels list */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-gray-50 rounded-md text-gold-600 shrink-0 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 text-sm">WhatsApp de Emergência</h4>
                    <p className="text-gray-500 text-sm mt-1">Conexão direta com a equipe de triagem.</p>
                    <a
                      href="https://wa.me/5514997785999?text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20gostaria%20de%20falar%20com%20o%20Advogado%20especialista%20em%20Direito%20Digital%20e%20Processo%20Civil."
                      className="text-gold-600 hover:text-gold-700 font-bold text-xs uppercase tracking-wider block mt-2"
                    >
                      Iniciar conversa imediata →
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-gray-50 rounded-md text-gold-600 shrink-0 flex items-center justify-center">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 text-sm">Instagram Oficial</h4>
                    <p className="text-gray-500 text-sm mt-1">Acompanhe dicas diárias de proteção de e-commerce.</p>
                    <a
                      href="https://www.instagram.com/vitor.adv.ecommerce/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-600 hover:text-gold-700 font-bold text-xs uppercase tracking-wider block mt-2"
                    >
                      @vitor.adv.ecommerce →
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-gray-50 rounded-md text-gold-600 shrink-0 flex items-center justify-center">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 text-sm">Atuação 100% Nacional</h4>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                      Representação legal online em todo o Brasil (especialmente SP, MG, PR, SC, RS, RJ, GO) através do Processo Judicial Eletrônico (PJE).
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-gray-50 rounded-md text-gold-600 shrink-0 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 text-sm">Horário de Expediente</h4>
                    <p className="text-gray-500 text-sm mt-1">Segunda a Sexta-feira, das 09h às 18h (Horário de Brasília).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Leads Intake Form (7 cols) */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-xl border border-gray-100 shadow-md">
              <span className="text-gold-600 font-bold uppercase tracking-widest text-xs block mb-3">Triagem Inicial Gratuita</span>
              <h3 className="font-serif font-bold text-2xl text-navy-900 mb-8">
                Informe os Detalhes do Seu Caso Jurídico
              </h3>

              <form action={sendContactForm} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">Seu Nome / Razão Social</label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Ex: Carlos Silva ou E-commerce Silva LTDA"
                    className="w-full bg-gray-50 border border-gray-200 focus:border-gold-500 focus:bg-white rounded px-4 py-3.5 text-sm text-navy-900 focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">WhatsApp com DDD</label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      placeholder="Ex: (11) 99999-9999"
                      className="w-full bg-gray-50 border border-gray-200 focus:border-gold-500 focus:bg-white rounded px-4 py-3.5 text-sm text-navy-900 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">Plataforma Principal</label>
                    <select
                      name="marketplace"
                      defaultValue="Mercado Livre"
                      className="w-full bg-gray-50 border border-gray-200 focus:border-gold-500 focus:bg-white rounded px-4 py-3.5 text-sm text-navy-900 focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Mercado Livre">Mercado Livre</option>
                      <option value="Amazon">Amazon</option>
                      <option value="Shopee">Shopee</option>
                      <option value="Tiktok Shop">Tiktok Shop</option>
                      <option value="Outros / Próprio">Outros / E-commerce Próprio</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">Faturamento Mensal Estimado</label>
                  <select
                    name="revenue"
                    defaultValue="Até R$ 50k/mês"
                    className="w-full bg-gray-50 border border-gray-200 focus:border-gold-500 focus:bg-white rounded px-4 py-3.5 text-sm text-navy-900 focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="Até R$ 50k/mês">Até R$ 50.000,00 / mês</option>
                    <option value="Entre R$ 50k e 100k/mês">Entre R$ 50.000,00 e R$ 100.000,00 / mês</option>
                    <option value="Entre R$ 100k e 500k/mês">Entre R$ 100.000,00 e R$ 500.000,00 / mês</option>
                    <option value="Acima de R$ 500k/mês">Acima de R$ 500.000,00 / mês</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">Descreva o Problema Enfrentado (Ex: saldo retido, IP, bloqueio)</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Descreva detalhadamente o ocorrido..."
                    className="w-full bg-gray-50 border border-gray-200 focus:border-gold-500 focus:bg-white rounded px-4 py-3.5 text-sm text-navy-900 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-4 rounded">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="pt-2">
                  <SubmitButton />
                </div>
              </form>

              <div className="mt-8 flex items-center gap-2 text-sm text-gray-400">
                <ShieldCheck className="w-4 h-4 text-gold-500 shrink-0" />
                <span>Seus dados comerciais e relatos jurídicos estão assegurados sob estrito sigilo profissional.</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
