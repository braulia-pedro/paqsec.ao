"use client";
import { motion } from "framer-motion";
import { Shield, Target, Users, Briefcase, Laptop, ArrowRight } from "lucide-react";
import Card from "@/components/Card";

export default function TrainingCareer() {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="relative py-24 px-6 text-center bg-gradient-to-br from-[#001a4d] via-black to-[#000814] overflow-hidden">        
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-widest text-sm text-[#00AEFF] mb-3 mt-8" // <-- espaço extra no topo
        >
          Programas Profissionais de Cibersegurança
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Treinamento &{" "}
          <span className="text-[#0043FF]">Carreira</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 max-w-3xl mx-auto text-lg text-gray-300"
        >
          Formação prática para equipas técnicas e executivos: Blue/Red/Purple
          Team, phishing awareness e resposta a incidentes.
        </motion.p>

        <div className="mt-8 flex justify-center gap-4">
          <motion.button
            aria-label="Solicitar Proposta"
            className="px-6 py-3 rounded-xl bg-[#0043FF] hover:bg-[#0029BB] font-semibold shadow-lg"
          >
            Solicitar Proposta
          </motion.button>

          <motion.a
            href="#programs"
            aria-label="Ver Programas"
            className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 font-semibold"
          >
            Ver Programas
          </motion.a>
        </div>
      </section>

      {/* Programas */}
      <section id="programs" className="pt-12 pb-20 px-6 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Programas Avançados
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <Card
            icon={<Shield className="w-8 h-8 text-[#00AEFF]" />}
            title="Blue / Red / Purple Team"
            desc="Formação prática em defesa, ataque e colaboração híbrida."
          />
          <Card
            icon={<Target className="w-8 h-8 text-[#EE1216]" />}
            title="Phishing Awareness"
            desc="Capacitação para detectar e responder a campanhas de engenharia social."
          />
          <Card
            icon={<Users className="w-8 h-8 text-[#7F56D9]" />}
            title="Resposta a Incidentes"
            desc="Playbooks, exercícios tabletop e prática guiada em ambientes simulados."
          />
        </div>
      </section>

      {/* Workshops & Labs 
      <section className="py-20 px-6 bg-gradient-to-r from-[#0a0a0a] to-[#001233]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}

            className="p-8 rounded-2xl border border-white/10 bg-white/5 shadow-xl cursor-pointer transition"
          >
            <Briefcase className="w-10 h-10 text-[#00AEFF]" />
            <h3 className="text-xl font-semibold mt-4">Workshops Executivos</h3>
            <p className="text-gray-300 mt-2">
              Sessões exclusivas para conselhos de administração, com foco em
              gestão de crises e governança em cibersegurança.
            </p>
          </motion.div>
        </div>
      </section>*/}

      {/* CTA Final */}
      <section id="proposal" className="py-20 px-6 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="px-3 py-1 rounded-full text-xs bg-[#0043FF]/20 text-[#00AEFF] font-medium"
        >
          Exclusivo para empresas
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6 mt-4"
        >
          Eleve a maturidade em cibersegurança da sua organização
        </motion.h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Junte-se a dezenas de empresas que já transformaram sua postura de
          defesa com os programas exclusivos da PAQSEC.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          aria-label="Fale com a Equipe"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold shadow-lg bg-red-600 hover:bg-red-500"
        >
          Fale com a Equipe <ArrowRight className="w-5 h-5" />
        </motion.button>
      </section>
    </div>
  );
}
