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
              title="Por que minha conta foi suspensa no marketplace?"
              active
            >
              As contas podem ser suspensas por diversos motivos, como violações
              das políticas do marketplace, atraso no envio de pedidos, alta
              taxa de reclamações ou suspeitas de práticas irregulares. É
              fundamental identificar a causa exata para planejar a reativação
              ou fazer a prova de que tentou buscar o motivo e não conseguiu,
              vez que, muitas vezes, as plataformas dão motivos genéricos, o que é ilegal.
            </Accordion>
            <Accordion title="O que devo fazer se minha conta for suspensa?">
              O primeiro passo é entrar em contato com o suporte do marketplace
              para entender o motivo da suspensão. Após isso, recomendamos buscar
              auxílio jurídico para elaborar uma defesa sólida e aumentar as chances
              de reativação. No caso de dúvidas, oferecemos análise inicial gratuita
              para avaliar seu caso.
            </Accordion>
            <Accordion title="Quais serviços a Advocacia Galvão oferece para vendedores de marketplaces?">
              Oferecemos suporte jurídico completo, incluindo:
              <br />
              - Reativação de contas suspensas ou bloqueadas.<br />
              - Ações de indenização por prejuízos causados por marketplaces.<br />
              - Revisão e elaboração de contratos com fornecedores e parceiros.<br />
              - Consultoria em conformidade jurídica para operações de e-commerce.<br />
              - Defesa contra compradores, seja judicialmente ou extrajudicialmente.<br />
              - Desbloqueio de saldo ilegalmente retido.<br />
              - Estratégias e ferramentas contra golpes e mais...
            </Accordion>
            <Accordion title="É possível evitar problemas jurídicos com o marketplace?">
              Sim! A prevenção é sempre o melhor caminho. Contar com suporte jurídico
              contínuo ajuda a revisar contratos e anúncios, manter conformidade
              com as políticas do marketplace e evitar disputas desnecessárias.
              Oferecemos planos mensalistas para garantir que sua empresa esteja protegida.
            </Accordion>
            <Accordion title="Como funcionam os planos mensalistas da Advocacia Galvão?">
              Nossos planos mensalistas foram desenvolvidos para atender empresas
              de todos os portes:<br />
              - Plano Básico: Consultoria jurídica e análise de contratos limitados.<br />
              - Plano Avançado: Suporte jurídico ampliado, incluindo representações judiciais.<br />
              - Plano Premium: Atendimento completo e prioritário com suporte estratégico.<br />
              Entre em contato para mais detalhes sobre cada plano.
            </Accordion>
            <Accordion title="Posso parcelar os honorários?">
              Sim! Oferecemos opções de parcelamento via plataformas online.
              Nosso objetivo é facilitar o acesso ao suporte jurídico para que você
              se preocupe apenas com o crescimento do seu negócio.
            </Accordion>
            <Accordion title="É possível entrar com uma ação judicial contra o marketplace?">
              Sim, em casos de bloqueios indevidos, suspensões arbitrárias ou prejuízos
              causados pela plataforma, você pode buscar reparação judicial. Nós
              analisamos seu caso detalhadamente para identificar a melhor estratégia
              visto nosso amplo conhecimento e experiência na área.
            </Accordion>
            <Accordion title="Como a Advocacia Galvão pode ajudar na reativação da minha conta?">
              Nossa equipe especializada elabora recursos administrativos e, se necessário,
              ingressa com medidas judiciais para reativar sua conta. Trabalhamos em
              proximidade com os vendedores, sendo que, o conhecimento prático do dia a dia
              e dos abusos dentro desta área de ecommerce é nosso diferençal, pois traduzimos
              isto em “juridiquês”, construindo uma estratégia solida e para que o juiz
              entenda perfeitamente o caso e o que se pede.
            </Accordion>
            <Accordion title="Quais marketplaces vocês atendem?">
              Atendemos vendedores de todas as principais plataformas, incluindo:
              Mercado Livre, Amazon, Shopee, Magalu, Americanas e outros marketplaces
              nacionais e internacionais.
            </Accordion>
            <Accordion title="Minha loja virtual enfrenta muitas reclamações de consumidores e/ou denuncias de propriedade intelectual. Vocês podem ajudar?">
              Sim! Auxiliamos na análise e resposta a reclamações, além de ajudar a
              implementar práticas que reduzem problemas futuros. Nossa consultoria preventiva
              pode evitar que disputas escalem para ações judiciais e ajudam a identificar
              até mesmo se o denunciante de marcas são verdadeiros e/ou possuem direito legítimo.
            </Accordion>
            <Accordion title="O que fazer em caso de prejuízos causados por marketplaces?">
              Se sua empresa sofreu prejuízos por conta de práticas abusivas, bloqueios
              indevidos ou retenção de valores por marketplaces, você pode buscar indenização.
              Nossa equipe está pronta para avaliar o caso e buscar a reparação adequada.
            </Accordion>
            <Accordion title="Como agendar uma consulta com a Advocacia Galvão?">
              Você pode agendar uma consulta diretamente pelo nosso site, enviando uma
              mensagem na seção de contato ou ligando para nosso escritório. Oferecemos
              uma análise inicial gratuita para entender melhor suas necessidades e
              dali traçarmos as medidas cabíveis.
            </Accordion>
            <Accordion title="Como vocês lidam com a confidencialidade das informações? ">
              Todas as informações compartilhadas conosco são tratadas com absoluta
              confidencialidade e em conformidade com as normas do Código de Ética da OAB.
              Garantimos segurança e sigilo total em todos os casos.
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
