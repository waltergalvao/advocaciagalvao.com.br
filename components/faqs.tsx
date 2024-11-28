import Accordion from "@/components/utils/accordion";

export default function Faqs() {
  return (
    <section className="bg-slate-50" id="faq">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-slate-50">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-playfair-display text-slate-800">
              Perguntas Frequentes
            </h2>
          </div>

          {/* Faqs */}
          <ul className="max-w-3xl mx-auto divide-y divide-slate-200">
            <Accordion
              title="Como saber se preciso contratar um advogado?"
              active
            >
              Você deve considerar contratar um advogado sempre que enfrentar
              situações que envolvam questões legais, como resolução de
              conflitos, revisão ou criação de contratos, defesa em processos
              judiciais, ou quando precisar de orientação em casos complexos. Um
              advogado pode ajudá-lo a proteger seus direitos, evitar problemas
              futuros e garantir o melhor desfecho possível.
            </Accordion>
            <Accordion title="Quanto custa uma consulta jurídica?">
              O valor de uma consulta jurídica pode variar dependendo da
              complexidade do caso e da área do Direito envolvida. Entre em
              contato para receber um orçamento personalizado e entender como
              podemos ajudar.
            </Accordion>
            <Accordion title="Como funciona o atendimento online?">
              O atendimento online é feito por meio de plataformas seguras e
              intuitivas, como videoconferências, e-mails ou aplicativos de
              mensagens. Você pode enviar documentos digitalizados e participar
              de reuniões virtuais, tudo de forma prática e eficiente, sem
              precisar sair de casa.
            </Accordion>
            <Accordion title="Quanto tempo leva para resolver meu caso?">
              O prazo para resolver um caso varia de acordo com a sua
              complexidade, a área do Direito envolvida e a tramitação no
              sistema judiciário. Após uma análise inicial, fornecemos uma
              estimativa baseada em nossa experiência para que você saiba o que
              esperar.
            </Accordion>
            <Accordion title="Quais documentos preciso apresentar?">
              Durante o contato inicial, orientamos sobre o que é essencial. Os
              documentos necessários dependem do tipo de serviço. Geralmente,
              pedimos identificação pessoal (RG, CPF), comprovantes relacionados
              ao caso (contratos, e-mails, notificações, etc.), além de
              documentos específicos conforme o tipo de demanda.
            </Accordion>
            <Accordion title="O que acontece se eu perder o caso?">
              Caso o resultado do processo não seja favorável, discutimos as
              possibilidades de recurso e os próximos passos. Além disso,
              explicamos antecipadamente todos os custos envolvidos para que
              você esteja ciente de todos os riscos e benefícios antes de tomar
              qualquer decisão.
            </Accordion>
            <Accordion title="Vocês atendem em quais regiões do Brasil?">
              Atendemos clientes de todo o Brasil por meio do nosso serviço
              online, que permite consultas e acompanhamento de casos de forma
              remota.
            </Accordion>
            <span
              className="block border-t border-gray-200"
              aria-hidden="true"
            ></span>
          </ul>
        </div>
      </div>
    </section>
  );
}
