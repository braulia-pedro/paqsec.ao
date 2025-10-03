"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const posts = [
  {
    slug: "violacaodedados",
    title: "Como ler um relatório de violação de dados",
    tag: "Blog",
    excerpt: "Aprenda a interpretar relatórios técnicos e identificar riscos para a sua empresa.",
  },
  {
    slug: "typosquatting",
    title: "Typosquatting: proteja a sua marca",
    tag: "DRP",
    excerpt: "Descubra como hackers exploram domínios parecidos e como se defender.",
  },
  {
    slug: "k-anonymity",
    title: "K-Anonymity: verificar palavras-passe com privacidade",
    tag: "Formação",
    excerpt: "Veja como verificar credenciais comprometidas sem expor dados pessoais.",
  },
];

export default function BlogPage() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-black via-[#001f3f] to-black text-white">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold">
            Bem-vindo ao <span className="text-blue-400">Blog</span>
          </h1>
          <p className="mt-3 text-lg text-white/70">
            Conteúdo exclusivo sobre segurança digital, ameaças e melhores práticas.
          </p>
        </div>

        {/* Lista de artigos */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-6 shadow-md hover:shadow-blue-500/20 hover:bg-white/10 transition"
            >
              <span className="text-xs uppercase tracking-wide text-blue-400">
                {p.tag}
              </span>
              <h3 className="font-semibold mt-2 text-xl">{p.title}</h3>
              <p className="mt-3 text-white/70 text-sm">{p.excerpt}</p>
              <Link
                href={`/blog/${p.slug}`}
                className="inline-block mt-4 text-blue-400 font-medium hover:underline"
              >
                Ler artigo →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
