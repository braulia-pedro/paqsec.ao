"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
  companyLogo?: string;
};

const stats = [
  { label: "Empresas atendidas", value: "50+" },
  { label: "Incidentes resolvidos", value: "1.2k" },
  { label: "Tempo médio de resposta", value: "≤ 2h" },
];

const logos = [
  "/clients/logo1.png",
  "/clients/logo2.png",
  "/clients/logo3.png",
  "/clients/logo4.png",
]; // substitua pelos caminhos reais em /public

const testimonials: Testimonial[] = [
  {
    name: "Ana Marques",
    role: "CISO, Empresa X",
    quote:
      "A PAQSEC elevou a nossa maturidade de segurança em poucas semanas — equipe técnica excelente e comunicação clara.",
    avatar: "/avatars/ana.jpg",
    companyLogo: "/clients/logo1.png",
  },
  {
    name: "João Silva",
    role: "CTO, Empresa Y",
    quote:
      "A intervenção de DFIR salvou-nos de uma exposição crítica. Recomendo sem hesitar.",
    avatar: "/avatars/joao.jpg",
    companyLogo: "/clients/logo2.png",
  },
  {
    name: "Mariana Costa",
    role: "Diretora de Riscos, Empresa Z",
    quote:
      "Metodologia prática e resultados mensuráveis — os treinamentos transformaram a cultura interna.",
    avatar: "/avatars/mariana.jpg",
    companyLogo: "/clients/logo3.png",
  },
];

export default function SocialProof() {
  return (
    <section id="social-proof" className="relative py-20 px-6 bg-gradient-to-b from-black via-[#031025] to-black text-white">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold">
            Confiam na <span className="text-blue-400">PAQSEC</span>
          </h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            Histórias reais, resultados tangíveis. Parceiros e clientes que
            escolheram segurança como vantagem competitiva.
          </p>
        </motion.div>

        {/* Logos line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-8 flex-wrap"
        >
          {logos.map((src, i) => (
            <div
              key={i}
              className="flex items-center justify-center p-3 rounded-md bg-black/40 border border-white/5"
            >
              {/* limit size so large logos remain small in footer */}
              <Image src={src} alt={`client-${i}`} width={120} height={48} />
            </div>
          ))}
        </motion.div>

        {/* Stats + Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-8"
          >
            <h3 className="text-xl font-semibold mb-4">Impacto em números</h3>
            <div className="flex flex-col gap-4">
              {stats.map((s, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="text-sm text-gray-300">{s.label}</div>
                  <div className="text-2xl font-bold text-white">{s.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link
                href="/contactos"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-blue-500 bg-blue-500 hover:bg-blue-400 font-medium"
              >
                Fale connosco <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Testimonials carousel (simple grid) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {testimonials.map((t, i) => (
              <article
                key={i}
                className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-6 flex flex-col justify-between"
              >
                <blockquote className="text-gray-200 italic leading-relaxed">
                  “{t.quote}”
                </blockquote>

                <div className="mt-6 flex items-center gap-4">
                  {t.avatar ? (
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-sm">
                      {t.name.split(" ").map(n => n[0]).slice(0,2).join("")}
                    </div>
                  )}

                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-gray-400">{t.role}</div>
                  </div>

                  <div className="ml-auto">
                    {t.companyLogo && (
                      <div className="w-24 h-8 flex items-center justify-center">
                        <Image src={t.companyLogo} alt={`${t.name}-company`} width={96} height={32} />
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </div>

        {/* Micro-CTA + trust links */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 mb-4">
            Quer provas? Agende uma avaliação gratuita e veja como protegemos seus
            ativos críticos.
          </p>
          <div className="inline-flex gap-3">
            <Link
              href="/contactos"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-red-600 bg-red-600 hover:bg-red-500 font-semibold"
            >
              Agendar Avaliação
            </Link>
            <Link
              href="/casos-de-sucesso"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 hover:bg-white/5 font-medium"
            >
              Casos de Sucesso
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
