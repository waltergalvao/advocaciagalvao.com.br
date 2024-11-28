import {
  IconBrain,
  IconCurrencyDollarOff,
  IconGavel,
  IconMessageCircleX,
} from "@tabler/icons-react";

const CtaButton = () => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="btn-sm mt-6 w-auto rounded-lg text-white text-md bg-slate-800 hover:bg-green-600 hover:border-green-800 group gap-2"
      href="/https://wa.me/5514997785999?text=Ol%C3%A1%2C%0A%0Agostaria%20de%20agendar%20uma%20consulta.%0A%0AMeu%20caso%20%C3%A9%20sobre%20marketplace"
    >
      Agendar consulta
    </a>
  );
};

export default function Marketplaces() {
  return (
    <section id="marketplaces">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:pt-20 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 font-playfair-display text-slate-800 mb-3">
              Marketplaces & E-commerce
            </h2>
            <p className="text-xl text-slate-500">
              Serviços para lojistas e vendedores de marketplaces.
            </p>
          </div>

          {/* Section content */}
          <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-10 items-start">
            <div
              data-aos="fade-up"
              className="p-8 border border-slate-400 rounded-lg"
            >
              <div className="flex items-center gap-4 mb-4 text-slate-800">
                <div className="p-2 rounded-xl bg-slate-200 text-slate-800">
                  <IconCurrencyDollarOff size={24} stroke={1.5} />
                </div>

                <h3 className="h4 font-playfair-display">
                  Conta ou Saldo Bloqueados
                </h3>
              </div>
              <p className="text-lg text-slate-500">
                Te ajudamos a desbloquear sua conta ou saldo, através de contato
                direto com a plataforma ou com entrada de ação judicial.
              </p>
              <CtaButton />
            </div>

            <div
              data-aos="fade-up"
              className="p-8 border border-slate-400 rounded-lg"
            >
              <div className="flex items-center gap-4 mb-4 text-slate-800">
                <div className="p-2 rounded-xl bg-slate-200 text-slate-800">
                  <IconGavel size={24} stroke={1.5} />
                </div>

                <h3 className="h4 font-playfair-display">Orientação Legal</h3>
              </div>

              <p className="text-lg text-slate-500">
                Ajudamos o seu negócio através de consultoria e elaboração de
                estratégias que vão proteger o seu patrimônio de riscos legais.
              </p>
              <CtaButton />
            </div>

            <div
              data-aos="fade-up"
              className="p-8 border border-slate-400 rounded-lg"
            >
              <div className="flex items-center gap-4 mb-4 text-slate-800">
                <div className="p-2 rounded-xl bg-slate-200 text-slate-800">
                  <IconMessageCircleX size={24} stroke={1.5} />
                </div>

                <h3 className="h4 font-playfair-display">Golpes</h3>
              </div>
              <p className="text-lg text-slate-500">
                Auxiliamos na intermediação de disputas que causam prejuízos ou
                causam o sucesso de um golpe contra o vendedor.
              </p>
              <CtaButton />
            </div>

            <div
              data-aos="fade-up"
              className="p-8 border border-slate-400 rounded-lg"
            >
              <div className="flex items-center gap-4 mb-4 text-slate-800">
                <div className="p-2 rounded-xl bg-slate-200 text-slate-800">
                  <IconBrain size={24} stroke={1.5} />
                </div>

                <h3 className="h4 font-playfair-display">
                  Propriedade Intelectual
                </h3>
              </div>

              <p className="text-lg text-slate-500">
                Auxiliamos com remoção de produtos ilegais, registro de marcas e
                resolução de denúncias falsas de violação de direitos de
                propriedade intelectucal.
              </p>
              <CtaButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
