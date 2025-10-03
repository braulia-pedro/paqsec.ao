"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Resposta a Incidentes (DFIR)",
    desc: "Identificamos, contemos e erradicamos incidentes de segurança rapidamente ...",
    icon: "",
  },
  {
    title: "Threat Intelligence & DRP",
    desc: "Monitoramos a superfície digital da sua organização para detectar vazamen ...",
    icon: "",
  },
  {
    title: "Attack Surface Management",
    desc: "Veja o que os hackers veem. Monitorizamos continuamente os seus ativos ex ...",
    icon: "",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 px-6 text-center bg-gradient-to-b from-black via-[#001f3f] to-black"
    >
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.01 }}
        viewport={{ once: true }}
        className="relative text-4xl font-bold mb-6 z-10"
      >
        Nossos <span className="text-blue-400">Serviços</span>
      </motion.h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10 mb-10">
        {services.map((servico, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-black/60 border border-white/10 p-8 rounded-2xl shadow-lg 
                       hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] 
                       transition"
          >
            <div className="text-5xl mb-4">{servico.icon}</div>
            <h3 className="text-2xl font-semibold mb-3 text-blue-400">
              {servico.title}
            </h3>
            <p className="text-gray-300">{servico.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Botão Ver tudo */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Link
          href="/servicos"
          className="inline-block px-6 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg hover:opacity-90 transition"
        >
          Ver tudo
        </Link>
      </motion.div>
    </section>
  );
}
