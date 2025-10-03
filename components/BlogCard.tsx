"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type Post = {
  title: string;
  tag: string;
  href: string;
};

export default function BlogTeasers() {
  const posts: Post[] = [
    {
      title: "Como ler um relatório de violação de dados",
      tag: "Blog",
      href: "/blog/violacaodedados",
    },
    {
      title: "Typosquatting: proteja a sua marca",
      tag: "DRP",
      href: "/blog/typosquatting",
    },
    {
      title: "K-Anonymity: verificar palavras-passe com privacidade",
      tag: "Formação",
      href: "/blog/k-anonymity",
    },
  ];

  return (
    <section
      id="blog"
      className="relative py-20 px-6 bg-gradient-to-b from-black via-[#001f3f] to-black"
    >
      <div className="mx-auto max-w-7xl">
        {/* Título + subtítulo centralizados */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold">
            Conteúdos <span className="text-blue-400">& Radar</span>
          </h2>
          <p className="text-white/70 mt-2 max-w-2xl mx-auto">
            Inteligência viva sobre ciberameaças, exposição digital e melhores
            práticas.
          </p>
        </motion.div>

        {/* Grid de artigos */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
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
              <h3 className="font-semibold mt-2 text-lg">{p.title}</h3>
              <Link
                href={p.href}
                className="text-sm text-white/70 mt-3 flex items-center gap-1 hover:underline"
              >
                Leia mais <ArrowRight className="inline w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Botão Ver tudo */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/blog"
            className="inline-block px-6 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg hover:opacity-90 transition"
          >
            Ver tudo
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
