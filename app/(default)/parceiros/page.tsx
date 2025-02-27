import { ParceiroForm } from "@/components/form/parceiro-form";

export const metadata = {
  title: "Galvão Advocacia",
};

export default function Parceiros() {
  return (
    <section className="mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-lg text-slate-500">
              <h2 className="h3 font-playfair-display text-slate-800 mb-4">
                Parceiros - Juntos Podemos Ir Mais Longe
              </h2>

              <p className="mb-8">
                Na Advocacia Galvão, acreditamos no poder da colaboração. Seja
                você um advogado, criador de conteúdo, palestrante ou mentor, há
                espaço para criarmos parcerias que gerem valor para ambas as
                partes. Nossa missão é oferecer soluções jurídicas de excelência
                e, para isso, queremos construir uma rede de parceiros que
                compartilhem desse mesmo propósito.
              </p>

              <h3 className="h4 font-playfair-display text-slate-800 mb-4">
                Quem Pode Ser Nosso Parceiro?
              </h3>
              <ul className="list-disc ml-6 mb-8">
                <li>
                  <strong>Advogados de Outros Estados:</strong> Para realização
                  de audiências, diligências ou suporte jurídico em locais fora
                  da nossa base de atuação.
                </li>
                <li>
                  <strong>Advogados:</strong> Possui um cliente com uma demanda
                  específica de direito digital? Podemos ajudar com a melhor
                  solução, seja num simples assessoramento ou até na redação de
                  petições.
                </li>
                <li>
                  <strong>Criadores de Conteúdo:</strong> Blogueiros,
                  influencers e especialistas que produzem conteúdo relevante
                  sobre e-commerce, marketplaces ou empreendedorismo.
                </li>
                <li>
                  <strong>Palestrantes e Mentores:</strong> Profissionais que
                  lideram grupos de mentoria, eventos e treinamentos voltados
                  para empresários.
                </li>
                <li>
                  <strong>Empresas e Profissionais de Tecnologia:</strong>{" "}
                  Desenvolvedores, plataformas e consultores especializados em
                  soluções para e-commerce.
                </li>
                <li>
                  <strong>Outros Profissionais:</strong> Qualquer pessoa ou
                  empresa que enxergue valor em colaborar para resolver
                  problemas e proteger negócios no setor jurídico, contando com
                  o amplo know-how do escritório.
                </li>
              </ul>

              <h3 className="h4 font-playfair-display text-slate-800 mb-4">
                Por Que Fazer Parceria Com a Advocacia Galvão?
              </h3>
              <ul className="list-disc ml-6 mb-8">
                <li>
                  <strong>Benefício mútuo:</strong> Compartilhamos
                  oportunidades, seja na indicação de clientes, palestras ou
                  projetos conjuntos.
                </li>
                <li>
                  <strong>Confiança e Profissionalismo:</strong> Garantimos
                  transparência e ética em todas as parcerias.
                </li>
                <li>
                  <strong>Rede de Colaboração:</strong> Juntos, podemos ampliar
                  o impacto e gerar mais resultados para nossos clientes e
                  parceiros.
                </li>
              </ul>

              <h3 className="h4 font-playfair-display text-slate-800 mb-4">
                Como Funciona?
              </h3>
              <ol className="list-decimal ml-6 mb-8">
                <li>
                  <strong>Preencha o Formulário:</strong> Conte-nos mais sobre
                  você e como gostaria de colaborar conosco.
                </li>
                <li>
                  <strong>Avaliação:</strong> Analisaremos sua proposta e
                  entraremos em contato para alinhar as possibilidades.
                </li>
                <li>
                  <strong>Estabelecimento da Parceria:</strong> Definiremos como
                  podemos trabalhar juntos, seja por meio de indicações, divisão
                  de honorários ou projetos em conjunto.
                </li>
              </ol>

              <h3 className="h4 font-playfair-display text-slate-800 mb-4">
                Entre em Contato e Seja Nosso Parceiro
              </h3>
              <p className="mb-8">
                Preencha o formulário abaixo e envie sua proposta. Estamos
                ansiosos para conhecer você!
              </p>

              <ParceiroForm />
              <br />
              <p className="mb-8">
                Se preferir, entre em contato diretamente pelo e-mail
                <a
                  href="mailto:parcerias@advocaciagalvao.com.br"
                  className="text-blue-600"
                >
                  {" "}
                  parcerias@advocaciagalvao.com.br{" "}
                </a>
                ou pelo nosso telefone. Estamos à disposição para conversar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
