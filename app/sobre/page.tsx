"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface EssenciaItem {
  title: string;
  desc: string;
  delay: number;
}

interface ValorItem {
  titulo: string;
  texto: string;
}

export default function SobrePage() {
  const essencia: EssenciaItem[] = [
    { title: "Proatividade", desc: "Antecipamos riscos e transformamos ameaças em oportunidades de fortalecimento.", delay: 0.1 },
    { title: "Confiabilidade", desc: "Relações baseadas em transparência, ética e investigação rigorosa.", delay: 0.2 },
    { title: "Estratégia", desc: "Alinhamos segurança digital aos objetivos do negócio e ao crescimento sustentável.", delay: 0.3 },
  ];

  const valores: ValorItem[] = [
    { titulo: "Inovação", texto: "Estar sempre à frente das ameaças, com soluções criativas e eficazes." },
    { titulo: "Confiança", texto: "Construir relações sólidas com nossos clientes, baseadas em ética e transparência." },
    { titulo: "Excelência", texto: "Oferecer sempre o melhor serviço, com dedicação e profissionalismo." },
    { titulo: "Impacto", texto: "Ajudar empresas a crescerem de forma segura e sustentável." },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-6 max-w-5xl mx-auto space-y-20"
    >
      {/* Cabeçalho da Página */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-5xl font-extrabold mt-20">
          <span className="text-white">Sobre a </span>
          <span className="bg-gradient-to-r from-[#0043FF] to-[#0029BB] bg-clip-text text-transparent">
            PAQSEC
          </span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Oferecemos soluções completas em cibersegurança, alinhando estratégia, inovação e confiança
          para proteger o crescimento sustentável do seu negócio.
        </p>
      </div>

      {/* Missão */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-6 text-center"
      >
        <h2 className="text-3xl font-bold text-white">Nossa Missão</h2>
        <blockquote className="text-xl italic text-blue-400">
          “Construindo confiança na era digital.”
        </blockquote>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Nossa missão é transformar ameaças em inteligência estratégica,
          antecipar riscos e alinhar segurança ao crescimento sustentável.
        </p>
      </motion.div>

      {/* Essência */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-10"
      >
        <h3 className="text-3xl font-semibold text-center text-white">
          Essência da Marca
        </h3>
        <p className="text-gray-400 text-center max-w-3xl mx-auto">
          A PAQSEC observa, identifica e isola anomalias — tal como o símbolo da lupa com o círculo vermelho.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {essencia.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: item.delay }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 shadow-lg hover:shadow-blue-500/20 transition"
            >
              <h4 className="text-xl font-semibold text-blue-400 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Link para Serviços */}
      <div className="text-center">
        <Link href="/servicos" className="text-blue-400 hover:underline">
          Ver nossos serviços →
        </Link>
      </div>

      {/* Valores */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-white">
          Nossos <span className="text-blue-400">Valores</span>
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-300">
          {valores.map((valor, i) => (
            <li
              key={i}
              className="p-6 bg-white/5 rounded-xl shadow hover:shadow-lg hover:bg-white/10 transition"
            >
              <strong className="block text-lg text-white mb-2">
                {valor.titulo}
              </strong>
              {valor.texto}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.section>
  );
}
