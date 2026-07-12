"use client";

import { motion } from 'motion/react';
import {
  UserX,
  Coins,
  TrendingDown,
  Award,
  PackageX,
  FileText,
  Zap
} from 'lucide-react';

export function PracticeAreas() {
  const primaryAreas = [
    {
      title: "Suspensão de Conta",
      description: "Atuação jurídica ágil para reverter bloqueios e suspensões de contas de vendedores nos principais marketplaces do país, restabelecendo as vendas o quanto antes.",
      icon: <UserX className="w-8 h-8" />
    },
    {
      title: "Retenção de Saldo",
      description: "Medidas extrajudiciais e judiciais para a liberação imediata de valores retidos arbitrariamente por plataformas digitais sob a justificativa de reserva de segurança.",
      icon: <Coins className="w-8 h-8" />
    },
    {
      title: "Anúncios Derrubados",
      description: "Contestações técnicas para restabelecer listagens, anúncios e produtos campeões de vendas (best-sellers) desativados indevidamente ou sem prévio aviso.",
      icon: <TrendingDown className="w-8 h-8" />
    },
    {
      title: "Propriedade Intelectual",
      description: "Ampla assessoria em denúncias de marca registrada, patentes, direitos de imagem e combate a falsas notificações de contrafação (programas como PPI e Brand Protection).",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Estoque Retido ou Descarte",
      description: "Ações coordenadas e eficientes para evitar a retenção ilegal de sua mercadoria ou a ameaça de descarte unilateral do seu estoque nos modelos Fulfillment.",
      icon: <PackageX className="w-8 h-8" />
    },
    {
      title: "Consultoria Preventiva para E-commerce",
      description: "Análise estratégica dos termos de uso, auditoria de processos de compliance e assessoria de contratos para blindar permanentemente sua operação online.",
      icon: <FileText className="w-8 h-8" />
    }
  ];

  const highlightedArea = {
    title: "Processo Ágil e Estratégico",
    description: "Cada minuto com anúncios desativados ou contas bloqueadas custa caro. Conduzimos as demandas com o máximo de agilidade, elaborando defesas personalizadas, sem respostas genéricas ou amadoras, focando na reativação rápida da sua operação comercial.",
    icon: <Zap className="w-8 h-8" />
  };

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-4">Soluções Jurídicas</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-playfair-display font-bold text-navy-900 tracking-tight">
            Atuação sob medida para sua operação de E-commerce
          </h3>
          <p className="text-base md:text-lg text-gray-500 mt-4 leading-relaxed max-w-2xl mx-auto">
            Deixe as burocracias sob nossa responsabilidade e proteja de forma ativa o ritmo de vendas do seu negócio online.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {primaryAreas.map((area, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-8 border border-gray-100 rounded-lg md:hover:border-gold-400 md:hover:shadow-xl transition-all group md:hover:-translate-y-1 bg-white cursor-default flex flex-col justify-between"
            >
              <div>
                <div className="text-gold-500 mb-6 md:group-hover:scale-110 transition-transform w-fit">
                  {area.icon}
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-3 md:group-hover:text-gold-600 transition-colors tracking-tight">
                  {area.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Highlighted 7th Card spanning across columns */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-8 md:p-10 rounded-lg bg-navy-900 border border-gold-500/30 shadow-2xl md:col-span-2 lg:col-span-3 md:hover:border-gold-400 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 text-gold-400 mb-4">
                {highlightedArea.icon}
                <h4 className="text-xl md:text-2xl font-bold tracking-tight text-white">
                  {highlightedArea.title}
                </h4>
              </div>
              <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-4xl">
                {highlightedArea.description}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Center CTA button */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <a 
              href="/obrigado"
              className="inline-flex items-center gap-2 bg-gold-500 md:hover:bg-gold-600 text-navy-900 font-bold px-10 py-5 rounded-sm shadow-xl shadow-gold-500/10 md:hover:-translate-y-0.5 transition-all uppercase text-xs tracking-wider"
            >
              Iniciar análise agora
              <span>→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
