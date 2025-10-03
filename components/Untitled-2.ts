// app/services/page.jsx
"use client";

import { motion } from "framer-motion";
import { Shield, Search, Bug, GraduationCap, Headset } from "lucide-react";

import Hero from "@/components/Hero";
import Card3D from "@/components/Card3D";
import PageTransition from "@/components/PageTransition";




const services = [
  {
    icon: <Shield className="w-10 h-10 text-blue-500" />,
    title: "Proteção Digital",
    desc: "Monitoramento contínuo e defesa contra ameaças digitais em tempo real.",
  },
  {
    icon: <Search className="w-10 h-10 text-blue-500" />,
    title: "Threat Intelligence",
    desc: "Inteligência aplicada para identificar, analisar e responder a riscos emergentes.",
  },
  {
    icon: <Bug className="w-10 h-10 text-blue-500" />,
    title: "Testes de Intrusão",
    desc: "Simulação de ataques reais para avaliar vulnerabilidades e fortalecer defesas.",
  },
  {
    icon: <GraduationCap className="w-10 h-10 text-blue-500" />,
    title: "Treinamento & Carreira",
    desc: "Capacitação de equipes e profissionais com foco em cibersegurança.",
  },
  {
    icon: <Headset className="w-10 h-10 text-blue-500" />,
    title: "Consultoria",
    desc: "Apoio estratégico para conformidade, governança e gestão de riscos digitais.",
  },
];

export default function ServicesPage() {
  return (
    <PageTransition>
        {/* Hero */}
        <Hero/>
        
          title={
            <>
              Nossos <span className="text-blue-500">Serviços</span>
            </>
          }
          subtitle="Soluções completas para proteger sua organização contra riscos digitais."
        

        {/* Lista de Serviços */}
        <section className="py-20 px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {services.map((s, i) => (
              <Card3D key={i}>
                <div className="p-8 rounded-2xl bg-[#0f0f14]/80 backdrop-blur-md border border-white/10 shadow-lg text-center hover:shadow-xl transition">
                  <div className="flex justify-center mb-4">{s.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                  <p className="text-gray-400 mt-3">{s.desc}</p>
                </div>
              </Card3D>
            ))}
          </motion.div>
        </section>
    </PageTransition>
  );
}
