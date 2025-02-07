export const metadata = {
  title: "Galvão Advocacia",
};
import { IconBrandWhatsapp } from "@tabler/icons-react";

export default function Mensalistas() {
  return (
    <section className="mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-lg text-slate-500">
              <h2 className="h3 font-playfair-display text-slate-800 mb-4">
                Clientes Mensalistas - Soluções Jurídicas para Seu E-commerce
              </h2>

              <p className="mb-8">
                Como empresário de e-commerce, você lida diariamente com desafios como
                suspensões de contas, disputas com clientes e exigências legais. Nossa
                proposta é oferecer um suporte jurídico contínuo para proteger seu
                negócio e garantir que você tenha mais tempo para focar no crescimento das
                suas vendas. <strong>Os três primeiros meses não possuem taxa de cancelamento para
                que você tenha total segurança e confiança no nosso trabalho.</strong>
              </p>

              <h3 className="h4 font-playfair-display text-slate-800 mb-4">
                Vantagens exclusivas de um plano mensalista:
              </h3>
              <ul className="list-disc ml-6 mb-8">
                <li><strong>Prevenção de Problemas Jurídicos:</strong> Identificamos e resolvemos riscos antes que eles prejudiquem sua operação.</li>
                <li><strong>Economia de Custos:</strong> Reduza gastos e riscos com soluções avulsas contratando um serviço completo e contínuo que vai lhe dar a solidez de uma estratégia global alinhada com os objetivos da empresa.</li>
                <li><strong>Atendimento Ágil:</strong> Priorizamos emergências como reativações de contas e bloqueios de pagamentos.</li>
                <li><strong>Conformidade Legal:</strong> Mantemos sua empresa em dia com normas e regulamentações do setor de e-commerce.</li>
              </ul>

              <h3 className="h4 font-playfair-display text-slate-800 mb-4">
                Nossos Planos Mensais
              </h3>

              <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#1E3A8A' }}>
                <h4 className="font-playfair-display text-white mb-2">Plano Básico</h4>
                <p className="text-white mb-4">Ideal para pequenos e-commerces.</p>
                <ul className="list-disc ml-6 mb-4 text-white">
                  <li>Consultoria jurídica ilimitada com duas calls presenciais já pré-agendadas.</li>
                  <li>Análise de contratos com fornecedores por mês.</li>
                  <li>Envio de notificações extrajudiciais.</li>
                  <li>Suporte simples no dia a dia da empresa e conformidade com a lei.</li>
                  <li>Acesso a tabela de ações com valores e meios de pagamentos exclusivos.</li>
                </ul>
                <p className="text-white"><strong>Investimento:</strong> a partir de R$ 1.000/mês.</p>
              </div>

              <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#172554' }}>
                <h4 className="font-playfair-display text-white mb-2">Plano Avançado</h4>
                <p className="text-white mb-4">Perfeito para empresas em expansão.</p>
                <ul className="list-disc ml-6 mb-4 text-white">
                  <li>Consultoria e elaboração de contratos ilimitados.</li>
                  <li>Envio de notificações extrajudiciais ilimitados.</li>
                  <li>Defesa em ações de juizado especiais contra compradores e prestadores de serviços.</li>
                  <li>Acesso a tabela de ações com valores e meios de pagamentos exclusivos.</li>
                  <li>Análise e proteção de propriedade intelectual.</li>
                </ul>
                <p className="text-white"><strong>Investimento:</strong> a partir de R$ 2.500/mês.</p>
              </div>

              <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#0F172A' }}>
                <h4 className="font-playfair-display text-white mb-2">Plano Premium</h4>
                <p className="text-white mb-4">A solução completa para grandes operações.</p>
                <ul className="list-disc ml-6 mb-4 text-white">
                  <li>Tudo o que oferece os outros planos, mais:</li>
                  <li>Revisão de contratos, compliance e planejamento estratégico.</li>
                  <li>Representação ilimitada em processos judiciais dentro da área de atuação de e-commerce.</li>
                  <li>Defesa e análise de proteção intelectual.</li>
                  <li>Assessoramento jurídico completo em outras áreas do direito, como tributário, trabalhista e etc.</li>
                </ul>
                <p className="text-white"><strong>Investimento:</strong> a partir de R$ 4.500/mês.</p>
              </div>

              <h3 className="h4 font-playfair-display text-slate-800 mb-4">
                Como Funciona
              </h3>
              <ol className="list-decimal ml-6 mb-8">
                <li><strong>Consulta Inicial:</strong> Avaliamos suas necessidades e identificamos os principais riscos jurídicos para adequarmos os planos e valores à sua necessidade.</li>
                <li><strong>Escolha do Plano:</strong> Você seleciona o pacote mais adequado ao tamanho e às demandas do seu negócio.</li>
                <li><strong>Suporte Contínuo:</strong> Garantimos assistência jurídica estratégica sempre que você precisar.</li>
              </ol>

              <h3 className="h4 font-playfair-display text-slate-800 mb-4">
                Agende uma Consulta Gratuita
              </h3>
              <p className="mb-8">
                Entre em contato agora mesmo para uma análise inicial gratuita e descubra como nossos planos podem ajudar sua empresa a crescer com segurança.
              </p>

              <a
                href="https://wa.me/5514997785999?text=Ol%C3%A1%2C%0A%0Atenho%20interesse%20nos%20planos%20mensais%20de%20suporte%20jur%C3%ADdico.%0A%0APode%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-white font-semibold bg-green-500 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
              >
                <IconBrandWhatsapp className="w-6 h-6 mr-2" />
                Primeiro contato sem custo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}