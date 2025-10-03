"use client";

import { motion } from "framer-motion";
import { Shield, Search, Bug, GraduationCap, Headset } from "lucide-react";

import Hero from "@/components/Hero";

import PageTransition from "@/components/PageTransition";
import Card from "@/components/Card";

export default function ServicesPage() {
  return (
    <PageTransition>
      {/* Hero isolado */}
      <Hero />

      {/* Título e subtítulo abaixo do Hero */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Nossos <span className="text-blue-500">Serviços</span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Soluções completas para proteger sua organização contra riscos digitais.
        </p>
      </section>

      {/* Lista de Serviços */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <Card
              icon={<Shield className="w-8 h-8 text-[#00AEFF]" />}
              title="Blue / Red / Purple Team"
              desc="Formação prática em defesa, ataque e colaboração híbrida."
            />
            <Card
              icon={<Shield className="w-10 h-10 text-blue-500" />}
              title="Phishing Awareness"
              desc="Capacitação para detectar e responder a campanhas de engenharia social."
            />
            <Card
              icon={<Shield className="w-8 h-8 text-[#7F56D9]" />}
              title="Resposta a Incidentes"
              desc="Playbooks, exercícios tabletop e prática guiada em ambientes simulados."
            />
          </div>

        </motion.div>
      </section>
    </PageTransition>
  );
}//75
