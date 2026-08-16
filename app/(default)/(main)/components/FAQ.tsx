const faqs = [
  {
    q: "Qual é o perfil de clientes atendidos pelo escritório?",
    a: "Nossa atuação é estritamente focada em Direito Digital e de E-commerce, atendendo sellers de marketplaces consolidados (como Mercado Livre, Amazon e Shopee) e operações independentes de e-commerce que demandam segurança jurídica de alto nível."
  },
  {
    q: "Como funciona a prestação de serviços para lojistas de outros estados?",
    a: "Atendemos de forma 100% digital e integrada em todo o território nacional. Através de reuniões estruturadas por videoconferência e canais ágeis de comunicação como o WhatsApp, conduzimos os procedimentos judiciais e extrajudiciais com total proximidade e transparência."
  },
  {
    q: "Quais documentos são necessários para dar início à análise de uma conta suspensa?",
    a: "Para realizarmos um diagnóstico de conformidade preciso, solicitamos que o lojista reúna as notas fiscais de aquisição de mercadorias, comprovações de estoque ou fulfillment, notificações de infração emitidas pela plataforma, logs de suporte e o extrato financeiro correspondente."
  },
  {
    q: "Qual é a viabilidade jurídica para reaver saldos bloqueados temporariamente?",
    a: "A retenção indevida de valores legítimos sob pretexto de 'reserva de garantia' por prazos abusivos (como 90 dias) é amplamente combatida por nossa banca. Propomos notificações extrajudiciais fundamentadas e ações com pedidos liminares urgentes para liberação imediata do seu capital de giro."
  },
  {
    q: "O escritório atua perante quais canais de marketplace e e-commerce?",
    a: "Possuímos vasta experiência prática no compliance e no contencioso contra as maiores corporações do setor, incluindo Mercado Livre, Amazon, Shopee, Magalu, Shein, TikTok Shop, B2W, entre outras. Cada ecossistema possui regulamentos internos próprios que conhecemos a fundo para articular a melhor defesa."
  },
  {
    q: "Quem será o responsável pela condução técnica do meu processo?",
    a: "A Advocacia Galvão preza pela excelência em cada atendimento. O Dr. Vitor Galvão lidera e conduz pessoalmente o desenvolvimento estratégico, a redação das peças técnicas e as negociações cruciais, sem intermediários ou repasse de casos para inteligências artificiais ou assistentes genéricos."
  },
  {
    q: "Há disponibilidade para assessoria jurídica recorrente (mensalista)?",
    a: "Sim. Estruturamos planos sob medida de consultoria mensal preventiva para operações consolidadas. O foco é blindar o e-commerce de forma proativa contra penalidades, revisar conformidades de anúncios campeões e oferecer respaldo jurídico permanente para a tomada de decisões corporativas."
  },
  {
    q: "O escritório oferece garantias de êxito na reativação de contas ou liberação de valores?",
    a: "Por imperativo deontológico da Ordem dos Advogados do Brasil (OAB) e devido à natural independência das decisões do Poder Judiciário, nenhum escritório de advocacia sério pode prometer resultados específicos. Nosso compromisso é o emprego da técnica jurídica mais avançada, focada e combativa do mercado para maximizar as chances de êxito."
  }
];

export function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-4">FAQ</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-navy-900">
              Dúvidas Frequentes
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group border border-gray-100 rounded-lg overflow-hidden transition-all duration-300 md:hover:shadow-md"
              >
                <summary className="flex items-center justify-between p-5 md:p-6 text-left bg-gray-50 md:hover:bg-white transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-bold text-navy-900 pr-8">{faq.q}</span>
                  <svg
                    className="w-5 h-5 text-navy-800/30 shrink-0 transition-transform duration-300 group-open:rotate-45 group-open:text-gold-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" />
                  </svg>
                </summary>
                <div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-[grid-template-rows] duration-300">
                  <div className="overflow-hidden">
                    <div className="p-6 text-gray-600 border-t border-gray-100 bg-white leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
