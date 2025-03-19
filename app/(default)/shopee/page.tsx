import { IconBrandWhatsapp } from "@tabler/icons-react";

export default function ShopeePage() {
  return (
    <section className="mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="flex items-center">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl font-bold text-slate-800 mb-6">
                Sua conta na Shopee foi suspensa, saldo retido ou prejuízo com mediação e alteração de serviço?
              </h1>
              <p className="text-lg text-slate-500 mb-6">
                Nosso escritório jurídico presta assessoria para lojistas que enfrentam esse tipo de problema. Atuamos na defesa dos seus direitos e na busca por soluções jurídicas adequadas para cada caso.
              </p>

              <div className="flex justify-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn rounded-lg font-bold text-xl text-white bg-green-700 hover:bg-green-800 px-6 py-3 flex items-center gap-2 border border-green-500"
                  href="https://wa.me/5514997785999?text=Ol%C3%A1%2C%0A%0AEstou%20enfrentando%20problemas%20na%20Shopee%20e%20gostaria%20de%20ajuda.%0A%0AComo%20podemos%20resolver%3F"
                >
                  <IconBrandWhatsapp size={24} />
                  Fale Conosco no WhatsApp
                </a>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2">
              <img
                src="/images/person.jpg"
                alt="Pessoa preocupada"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Atendimento especializado para você que:</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-800">✅ Teve a conta suspensa ou valores retidos e precisa entender seus direitos</h3>
                <p className="text-lg text-slate-500">
                  Um bloqueio repentino pode impactar sua operação. Nossa equipe jurídica pode analisar o caso e indicar os melhores e mais rápidos caminhos legais.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800">✅ Teve alteração de serviço que te prejudicou ou problema com cliente que comprou e teve mediação favorável</h3>
                <p className="text-lg text-slate-500">
                  Muitas alterações de contrato por parte da Shopee podem ser ilegais, ainda mais nos casos que não são aplicados para todos ou causam prejuízo direto. Além disso, muitos bloqueios ocorrem sem explicação clara, dificultando a defesa dos lojistas.
                </p>
                <p className="text-lg text-slate-500">
                  Com orientação jurídica, é possível avaliar os motivos e adotar as medidas cabíveis para evitar e/ou ressarcir o problema.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800">✅ Já tentou contato com a Shopee e não obteve resposta</h3>
                <p className="text-lg text-slate-500">
                  Caso seus pedidos de revisão não tenham sido atendidos, existe a possibilidade de recorrer por vias legais de forma ágil para buscar a reativação da conta.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Existe possibilidade de reverter o bloqueio?</h2>
              <p className="text-lg text-slate-500">
                Cada caso deve ser analisado individualmente. Se o bloqueio for indevido ou irregular, é possível adotar medidas legais para buscar a solução adequada.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Quem somos?</h2>
              <p className="text-lg text-slate-500">
                Nosso escritório é especializado em Direito Digital e Defesa de Lojistas da Shopee, atuando em casos de contas suspensas ou bloqueadas em marketplaces há mais de oito anos. Trabalhamos com transparência e buscamos soluções seguras dentro da legalidade para cada cliente.
              </p>
              <p className="text-lg text-slate-500">
                Nosso compromisso é oferecer assessoria jurídica qualificada, proporcionando suporte técnico e esclarecendo dúvidas sobre o tema.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Dúvidas frequentes</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">❓ Por que minha conta foi bloqueada?</h3>
                  <p className="text-lg text-slate-500">
                    Bloqueios podem ocorrer por diversas razões, incluindo supostas violações de políticas da Shopee, erros de análise automatizada ou denúncias de terceiros. Caso o bloqueio seja indevido, há formas legais de contestá-lo.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">❓ Como funciona a assessoria jurídica nesse caso?</h3>
                  <p className="text-lg text-slate-500">
                    O primeiro passo é a análise do seu caso. Se houver indícios de irregularidade, estudamos as medidas cabíveis para tentar solucionar o problema o mais rápido possível, fazendo provas, também, de todo o prejuízo financeiro e ranqueamento de anúncios.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">❓ Quanto tempo pode levar um processo de desbloqueio?</h3>
                  <p className="text-lg text-slate-500">
                    O prazo pode variar conforme a complexidade do caso e a necessidade de adoção de medidas administrativas ou judiciais, mas há muitos casos onde há urgência em que é possível uma decisão liminar para o desbloqueio da conta em 48 horas.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">❓ Vale a pena buscar assessoria jurídica?</h3>
                  <p className="text-lg text-slate-500">
                    A orientação de um advogado pode ser fundamental para esclarecer dúvidas e identificar as melhores alternativas disponíveis, traçando estratégias de como coletar a prova digital e como evitar os argumentos mais utilizados pelas plataformas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="btn rounded-lg font-bold text-xl text-white bg-green-700 hover:bg-green-800 px-6 py-3 flex items-center gap-2 border border-green-500"
              href="https://wa.me/5514997785999?text=Ol%C3%A1%2C%0A%0AEstou%20enfrentando%20problemas%20na%20Shopee%20e%20gostaria%20de%20ajuda.%0A%0AComo%20podemos%20resolver%3F"
            >
              <IconBrandWhatsapp size={24} />
              Fale Conosco no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
