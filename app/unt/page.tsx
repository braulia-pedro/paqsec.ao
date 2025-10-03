// app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import Hero from "@/components/Hero";


export default function AboutPage() {
  const values = [
    {
      title: "Inovação",
      desc:
        "Estar sempre à frente das ameaças, com soluções criativas e eficazes.",
      delay: 0.05,
    },
    {
      title: "Confiança",
      desc:
        "Construir relações sólidas com nossos clientes, baseadas em ética e transparência.",
      delay: 0.15,
    },
    {
      title: "Excelência",
      desc:
        "Oferecer sempre o melhor serviço, com dedicação e profissionalismo.",
      delay: 0.25,
    },
    {
      title: "Impacto",
      desc: "Ajudar empresas a crescerem de forma segura e sustentável.",
      delay: 0.35,
    },
  ];

  const essenceCards = [
    {
      title: "Proatividade",
      desc:
        "Antecipamos riscos e transformamos ameaças em oportunidades de fortalecimento.",
      delay: 0.1,
    },
    {
      title: "Confiabilidade",
      desc:
        "Relações baseadas em transparência, ética e investigação rigorosa.",
      delay: 0.2,
    },
    {
      title: "Estratégia",
      desc:
        "Alinhamos segurança digital aos objetivos do negócio e ao crescimento sustentável.",
      delay: 0.3,
    },
  ];

  return (
    <PageTransition>
      {/* Hero */}
      <Hero
        title={
          <>
            Sobre a <span className="text-blue-500">PAQSEC</span>
          </>
        }
        subtitle="Conheça nossa missão, valores e o time que transforma ameaças em inteligência estratégica."
        ctaPrimary={{ href: "/contact", label: "Fale com a equipe" }}
        ctaSecondary={{ href: "/careers", label: "Junte-se a nós" }}
      />

      <main className="bg-[#0a0f1f] text-white">
        {/* Missão */}
        <section className="py-16 px-6 max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nossa Missão
          </motion.h2>

          <motion.p
            className="text-lg text-white/70 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            A PAQSEC nasceu com o propósito de proteger organizações contra
            ciberameaças cada vez mais sofisticadas. Nossa missão é oferecer
            soluções de segurança digital que unem tecnologia avançada,
            inteligência e estratégia para apoiar o crescimento sustentável.
          </motion.p>
        </section>

        {/* Valores */}
        <section className="py-12 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <motion.h3
              className="text-2xl font-semibold text-center mb-8"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Nossos Valores
            </motion.h3>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: v.delay }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-sm hover:shadow-lg hover:bg-white/8 transition"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {v.title}
                  </h4>
                  <p className="text-gray-300 text-sm">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Essência */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <motion.h3
            className="text-3xl font-semibold text-center mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Essência da Marca
          </motion.h3>

          <motion.p
            className="text-gray-400 text-center max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            A PAQSEC observa, identifica e isola anomalias — buscando sempre
            transformar sinais técnicos em decisões estratégicas. Nosso design,
            linguagem e operações refletem essa disciplina: clareza, precisão e
            responsabilidade.
          </motion.p>

          <div className="grid gap-6 md:grid-cols-3">
            {essenceCards.map((c, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: c.delay }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 shadow-lg hover:shadow-blue-500/20 transition"
              >
                <h4 className="text-xl font-semibold text-blue-400 mb-2">
                  {c.title}
                </h4>
                <p className="text-gray-300 text-sm">{c.desc}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Equipe */}
        <section className="py-16 px-6 bg-gradient-to-b from-[#071024] to-transparent border-t border-white/5">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h3
              className="text-3xl font-semibold mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Nossa Equipe
            </motion.h3>

            <motion.p
              className="text-gray-400 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >

              Com uma equipa jovem, criativa e apaixonada por inovação, a PAQSEC combina agilidade com solidez técnica para entregar soluções que acompanham o ritmo acelerado do mercado digital.
            </motion.p>

            {/* Exemplo simples de membros (substituir por dados reais se houver) */}
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { name: "Ana Silva", role: "Head de Threat Intelligence" },
                { name: "João Pereira", role: "Lead DFIR" },
                { name: "Mariana Costa", role: "Consultora Estratégica" },
              ].map((m, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + idx * 0.05 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-sm"
                >
                  <div className="h-28 w-28 rounded-full mx-auto bg-gradient-to-br from-[#0029BB] to-[#00AEFF] mb-4 grid place-items-center text-white font-bold">
                    {m.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <h5 className="font-semibold">{m.name}</h5>
                  <p className="text-sm text-gray-300 mt-1">{m.role}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition"
              >
                Fale com a nossa equipe
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
