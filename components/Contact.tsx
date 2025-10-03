"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-black/90 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12"
      >
        Fale <span className="text-blue-400">Conosco</span>
      </motion.h2>

      <form
        action="https://formspree.io/f/mayvovqz" // 🔑 troque pelo seu endpoint real
        method="POST"
        className="max-w-3xl mx-auto grid gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Seu nome"
          required
          className="p-4 rounded-lg bg-black/60 border border-white/10 focus:border-blue-400 outline-none text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Seu email"
          required
          className="p-4 rounded-lg bg-black/60 border border-white/10 focus:border-blue-400 outline-none text-white"
        />
        <textarea
          name="message"
          placeholder="Escreva sua mensagem..."
          rows={5}
          required
          className="p-4 rounded-lg bg-black/60 border border-white/10 focus:border-blue-400 outline-none text-white"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-gradient-primary py-3 px-6 rounded-lg font-semibold shadow-lg"
        >
          Enviar
        </motion.button>
      </form>
    </section>
  );
}
