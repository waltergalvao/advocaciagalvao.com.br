"use client";

import { motion, AnimatePresence } from "motion/react";
import { IconX } from "@tabler/icons-react";
import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export function LegalModal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy-900/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white w-full max-w-4xl max-h-[85vh] overflow-hidden rounded-xl shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h2 className="text-xl md:text-2xl font-playfair-display font-bold text-navy-900">
                {title}
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors text-navy-900"
              >
                <IconX className="w-6 h-6" stroke={1.5} />
              </button>
            </div>
            <div className="p-8 overflow-y-auto text-gray-600 leading-relaxed space-y-6">
              {children}
            </div>
            <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
              <button
                onClick={onClose}
                className="bg-navy-900 text-white px-6 py-2 rounded-sm font-bold hover:bg-navy-800 transition-colors"
              >
                Fechar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function PrivacyPolicyContent() {
  return (
    <>
      <section>
        <h3 className="text-navy-900 font-bold mb-2">1. Identificação</h3>
        <p>
          Este site é de propriedade e responsabilidade da Advocacia Galvão, com
          foco em Direito Digital para Marketplaces e E-commerce.
        </p>
      </section>
      <section>
        <h3 className="text-navy-900 font-bold mb-2">
          2. Dados Coletados e Finalidade
        </h3>
        <p>
          Coletamos dados fornecidos voluntariamente pelo usuário através de
          nossos canais de atendimento, incluindo nome, e-mail e informações
          sobre o caso jurídico. A finalidade é a prestação de serviços de
          consultoria jurídica inicial e agendamento de atendimentos.
        </p>
      </section>
      <section>
        <h3 className="text-navy-900 font-bold mb-2">3. Bases Legais</h3>
        <p>
          O tratamento de dados é realizado com base no consentimento do titular
          e para procedimentos preliminares relacionados a contrato de prestação
          de serviços jurídicos (Art. 7º, V, LGPD).
        </p>
      </section>
      <section>
        <h3 className="text-navy-900 font-bold mb-2">4. Compartilhamento</h3>
        <p>
          Os dados podem ser compartilhados com ferramentas de atendimento
          (WhatsApp), serviços de hospedagem, sistemas de analytics e
          plataformas de anúncios para otimização da experiência do usuário.
        </p>
      </section>
      <section>
        <h3 className="text-navy-900 font-bold mb-2">
          5. Armazenamento e Confidencialidade
        </h3>
        <p>
          Os dados são armazenados pelo prazo necessário para cumprir as
          finalidades descritas, respeitando o sigilo profissional
          advogado-cliente. Todas as informações enviadas sobre casos jurídicos
          são tratadas sob estrita confidencialidade.
        </p>
      </section>
      <section>
        <h3 className="text-navy-900 font-bold mb-2">6. Seus Direitos</h3>
        <p>
          O titular pode solicitar a confirmação, acesso, correção ou exclusão
          de seus dados a qualquer momento através de nossos canais oficiais de
          contato.
        </p>
      </section>
    </>
  );
}

export function TermsOfUseContent() {
  return (
    <>
      <section>
        <h3 className="text-navy-900 font-bold mb-2">
          1. Natureza Informativa
        </h3>
        <p>
          Todo o conteúdo deste site tem caráter puramente informativo. O texto
          aqui apresentado não substitui uma consulta jurídica individualizada e
          não deve ser interpretado como parecer legal.
        </p>
      </section>
      <section>
        <h3 className="text-navy-900 font-bold mb-2">
          2. Inexistência de Garantia de Resultado
        </h3>
        <p>
          A advocacia é uma atividade de meio. Embora busquemos a melhor
          estratégia jurídica, o envio de informações ou a contratação de
          serviços não garante resultados específicos, reativação de contas ou
          liberação de saldos, cujas decisões dependem de terceiros (plataformas
          e Judiciário).
        </p>
      </section>
      <section>
        <h3 className="text-navy-900 font-bold mb-2">
          3. Inexistência de Contratação Automática
        </h3>
        <p>
          O simples preenchimento de formulários ou envio de mensagens não
          estabelece relação contratual de advocacia. A contratação apenas se
          formaliza após análise do caso e assinatura de contrato específico.
        </p>
      </section>
      <section>
        <h3 className="text-navy-900 font-bold mb-2">
          4. Responsabilidade do Usuário
        </h3>
        <p>
          O usuário compromete-se a fornecer informações verdadeiras e completas
          sobre seu caso, sendo responsável por quaisquer inconsistências nos
          dados enviados.
        </p>
      </section>
    </>
  );
}

export function CookiesPolicyContent() {
  return (
    <>
      <section>
        <h3 className="text-navy-900 font-bold mb-2">O que são Cookies?</h3>
        <p>
          Cookies são pequenos arquivos de texto enviados ao seu navegador para
          registrar seu comportamento e preferências ao visitar nosso site.
        </p>
      </section>
      <section>
        <h3 className="text-navy-900 font-bold mb-2">
          Tipos de Cookies que utilizamos:
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Essenciais:</strong> Necessários para o funcionamento básico
            do site.
          </li>
          <li>
            <strong>Analíticos:</strong> Para entender como os visitantes
            interagem com a página (Google Analytics).
          </li>
          <li>
            <strong>Marketing:</strong> Para exibir anúncios relevantes em
            outras plataformas após sua visita.
          </li>
        </ul>
      </section>
      <section>
        <h3 className="text-navy-900 font-bold mb-2">Controle de Cookies</h3>
        <p>
          Você pode gerenciar ou desativar os cookies diretamente nas
          configurações do seu navegador, embora isso possa afetar algumas
          funcionalidades do site.
        </p>
      </section>
    </>
  );
}

export function ParceriasContent() {
  return (
    <div className="space-y-6">
      <section>
        <h3 className="text-navy-900 font-bold mb-2 text-lg">
          Impulsione a Segurança das Operações dos Seus Clientes
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Oferecemos um programa de parceria sólido e estratégico para
          profissionais parceiros do ecossistema de e-commerce e tecnologia. Dr.
          Vitor Galvão atua em sinergia com assessorias comerciais, agências de
          performance, contabilidades especializadas e consultores em todo o
          país.
        </p>
      </section>
      <section className="bg-gray-50 p-6 rounded-lg border border-gray-100">
        <h4 className="text-navy-900 font-bold mb-3 text-base">
          Quem pode se beneficiar do programa?
        </h4>
        <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
          <li>
            <strong>Agências de Marketing e Gestores de Tráfego:</strong>{" "}
            Proteção para as contas que hospedam campanhas ativas, evitando
            prejuízos com bloqueios injustos.
          </li>
          <li>
            <strong>Contabilidades de E-commerce:</strong> Resguarde a saúde
            tributária e o fluxo de caixa do lojista frente a retenções fiscais
            ou administrativas em gateways de pagamento.
          </li>
          <li>
            <strong>Assessores de Marketplace:</strong> Viabilize uma
            retaguarda jurídica ativa para seus mentorados e clientes avançados
            contra pirataria de anúncios e remoções arbitrárias de listagens.
          </li>
        </ul>
      </section>
      <div className="pt-4 text-center">
        <a
          href="/direito-digital/obrigado"
          className="inline-block bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-3 rounded-sm font-bold transition-all shadow-md uppercase text-xs tracking-wider"
        >
          Seja um Parceiro Estratégico
        </a>
      </div>
    </div>
  );
}

export function BlogContent() {
  const posts = [
    {
      title:
        "Saldo retido em marketplaces: É legal reter valores de vendas legítimas?",
      date: "22 de Junho, 2026",
      desc: "Entenda por que a retenção imotivada de valores sob o pretexto de 'reserva de proteção contra futuras contestações' por tempo indefinido é abusiva frente aos contratos nacionais de intermediação de pagamentos.",
      readTime: "5 min de leitura",
    },
    {
      title:
        "Como contestar denúncia de Propriedade Intelectual infundada com eficiência e rapidez",
      date: "15 de Junho, 2026",
      desc: "Seja por concorrência desleal ou disparos equivocados de ferramentas como o PPI do Mercado Livre, saiba agir rápido com as contestações administrativas corretas para resguardar seu faturamento por anúncios.",
      readTime: "6 min de leitura",
    },
    {
      title:
        "Guia básico de sobrevivência jurídica para vendedores bloqueados arbitrariamente",
      date: "05 de Junho, 2026",
      desc: "O primeiro impulso após o bloqueio de uma conta ativa costuma ser as respostas automáticas repetitivas. Veja como organizar seu acervo de notas fiscais, XMLs e contatos de fornecedores para reverter a punição.",
      readTime: "7 min de leitura",
    },
  ];

  return (
    <div className="space-y-8">
      <p className="text-gray-600 leading-relaxed text-center max-w-2xl mx-auto text-sm">
        Artigos e informações de apoio redigidos para clareza sobre o Direito
        Digital aplicável ao e-commerce, trazendo boas práticas de mercado e
        posicionamentos judiciais atualizados.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post, i) => (
          <div
            key={i}
            className="border border-gray-100 p-6 rounded-lg bg-gray-50 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex justify-between items-center text-xs text-gray-400 mb-3">
                <span>{post.date}</span>
                <span className="bg-gold-500/10 text-gold-600 px-2 py-0.5 rounded font-medium">
                  {post.readTime}
                </span>
              </div>
              <h4 className="text-navy-900 font-bold mb-3 line-clamp-2 hover:text-gold-500 transition-colors text-base leading-snug">
                {post.title}
              </h4>
              <p className="text-gray-500 text-xs leading-relaxed line-clamp-4">
                {post.desc}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-gray-200/50">
              <a
                href="/direito-digital/obrigado"
                className="text-gold-600 hover:text-gold-700 text-xs font-bold uppercase tracking-wider flex items-center gap-1"
              >
                Analisar caso com especialista →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
