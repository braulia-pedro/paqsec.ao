"use client";

import { motion } from "framer-motion";
import { Shield, Radar, Bug, LockIcon, Search, Building2, MonitorSmartphone, Layers, Users, GraduationCap } from "lucide-react";

const services = [
  {
    key: "dfir",
    title: "Resposta a Incidentes (DFIR)",
    icon: Shield,
    desc: "Identificamos, contemos e erradicamos incidentes de segurança rapidamente, garantindo continuidade de operações e preservação de evidências digitais conforme ISO/IEC 27037.",
    image: "/shield.jpg",
  },
  {
    key: "threat",
    title: "Threat Intelligence & DRP",
    icon: Radar,
    desc: "Monitoramos a superfície digital da sua organização para detectar vazamentos, exposições e ameaças emergentes, possibilitando respostas rápidas e proativas.",
    image: "/eyes.jpg",
  },
  {
    key: "attack_surface",
    title: "Attack Surface Management",
    icon: Search,
    desc: "Veja o que os hackers veem. Monitorizamos continuamente os seus ativos expostos e priorizamos os riscos críticos antes que sejam explorados.",
    image: "/lupa.jpg",
  },
  {
    key: "privacy",
    title: "Conformidade & Privacidade",
    icon: LockIcon,
    desc: "Transformamos a LPDP (Lei de Proteção de Dados Pessoais de Angola) e normas como a ISO/IEC 27001 em vantagem competitiva, com políticas robustas e segurança integrada ao negócio.",
    image: "/defesa.jpg",
  },
  {
    key: "vapt",
    title: "VAPT (Testes de Vulnerabilidade & Intrusão)",
    icon: Bug,
    desc: "Mais do que identificar falhas: simulamos ataques reais para provar impacto e fortalecer as suas defesas.",
    image: "/vtp.jpg",
  },
  {
    key: "duediligence",
    title: "Verificação de Antecedentes & Due Diligence",
    icon: Building2,
    desc: "Proteja decisões críticas: investigação rigorosa de colaboradores, fornecedores e parceiros, avaliação de riscos reputacionais, compliance e exposição legal antes de contratar ou fechar negócios.",
    image: "verify.png",
  },  
  {
    key: "grc",
    title: "GRC (Governança, Risco & Conformidade)",
    icon: Layers,
    desc: "Governança sólida, gestão de risco inteligente e conformidade estratégica para proteger o presente e preparar o futuro da sua organização.",
    image: "/grc.jpg",
  },
  {
    key: "edr",
    title: "Soluções EDR/XDR",
    icon: MonitorSmartphone,
    desc: "Defesa de nova geração: monitorização contínua, deteção avançada e resposta imediata.",
    image: "/privacidade.jpg",
  },
  {
    key: "redteam",
    title: "Red Teaming",
    icon: Users,
    desc: "Pensamos como os atacantes. Simulamos campanhas avançadas para testar a sua resiliência e desafiar a sua capacidade de defesa.",
    image: "/rede.jpg",
  },
  {
    key: "training",
    title: "Formação & Consciencialização em Cibersegurança",
    icon: GraduationCap,
    desc: "Porque a sua equipa é a primeira linha de defesa: treinamentos práticos, certificações e programas de sensibilização que criam uma verdadeira cultura de segurança.",
    image: "/formacao.jpg",
  },
];

export default function ServicesPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-[#0a0a0f] to-black text-white px-6 pt-20 pb-20">
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-10"
        >
          <h1 className="text-5xl md:text-5xl font-extrabold">
            <span className="text-white">Nossos </span>
            <span className="bg-gradient-to-r from-[#0043FF] to-[#0029BB] bg-clip-text text-transparent">
              Serviços
            </span>
          </h1>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Soluções completas para proteger sua organização contra riscos digitais.
          </p>
        </motion.div>

        {/* Cards explicativos em grid */}
        <section className="px-6 max-w-6xl mx-auto mt-16 pb-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((s, i) => (
            <motion.div
              key={s.key}
              id={`service-${s.key}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-8 shadow-md hover:shadow-blue-500/20 hover:bg-white/10 transition text-center"
            >
              <h2 className="text-2xl font-bold text-blue-400 mb-4">{s.title}</h2>
              <div className="w-full h-64 overflow-hidden rounded-xl mb-4">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-white/80">{s.desc}</p>
            </motion.div>
          ))}
        </section>
      </div>
    </section>
  );
}
