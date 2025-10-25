"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative pt-50 pb-24 px-6 text-center bg-gradient-to-b from-black via-blue-950 via-60% to-black"
    >
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-white mb-6"
      >
        Sobre a <span className="text-blue-400">PAQSEC</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-gray-300 mb-8 leading-relaxed"
      >
        Somos especialistas em cibersegurança corporativa. Nossa missão é
        antecipar riscos, investigar com profundidade e proteger sua empresa
        com precisão, fornecendo soluções inovadoras e estratégicas. Com
        presença global a partir de Luanda, entregamos soluções completas em
        cibersegurança.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Link
          href="/sobre"
          className="inline-block px-6 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg hover:opacity-90 transition"
        >
          Ver mais
        </Link>
      </motion.div>
    </section>
  );
}

