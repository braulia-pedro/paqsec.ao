"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-[#0a0a0f] to-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-20 pt-10">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-10"
        >
          <h1 className="text-5xl md:text-5xl font-extrabold">
            <span className="text-white">Entre em </span>
            <span className="bg-gradient-to-r from-[#0043FF] to-[#0029BB] bg-clip-text text-transparent">
              Contato
            </span>
          </h1>
          <p className="mt-4 text-gray-400 text-lg">
            Estamos prontos para ajudar. Fale conosco agora.
          </p>
        </motion.div>

        {/* Cards de contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Mail, title: "Email Us", desc: "contato@paqsec.com" },
            { icon: Phone, title: "Phone Us", desc: "+244 934 031 737" },
            { icon: MapPin, title: "Visit Us", desc: "Sagrada Esperança nº 9, Luanda-Angola" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}

              className="bg-[#0f0f14]/70 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center cursor-pointer transition hover:bg-white/10 hover:shadow-2xl"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 mb-4">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Info + Form + Redes */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-2xl font-bold text-blue-400">
            Vamos trabalhar juntos
          </h2>
          <p className="text-gray-400">
            Nossa equipe está pronta para ouvir sua necessidade e oferecer a
            melhor solução em segurança inteligente.
          </p>

          {/* Formulário */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            action="https://formspree.io/f/mayplkqr"
            method="POST"
            className="bg-[#0f0f14]/70 backdrop-blur-md border border-white/10 rounded-2xl p-8 space-y-6 text-left"
          >
            <h2 className="text-2xl font-bold text-blue-400 mb-4">
              Envie sua Mensagem
            </h2>
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              required
              className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 focus:border-blue-500 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Seu email"
              required
              className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 focus:border-blue-500 outline-none"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Sua mensagem"
              required
              className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 focus:border-blue-500 outline-none"
            />
            <motion.button

              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-lg bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-500 hover:to-blue-500 transition-colors"
            >
              Enviar
            </motion.button>
          </motion.form>

          {/* Redes sociais */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-6"
          >
            <h3 className="text-lg font-semibold text-blue-400 mb-4">
              Siga-nos:
            </h3>
            <div className="flex justify-center gap-8">
              {[
                { name: "Facebook", url: "#", icon: <Facebook />, color: "hover:bg-blue-600" },
                { name: "Twitter", url: "#", icon: <Twitter />, color: "hover:bg-sky-500" },
                { name: "Instagram", url: "#", icon: <Instagram />, color: "hover:bg-gradient-to-r from-pink-500 to-yellow-500" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
                >
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-xl ${social.color} transition-colors`}
                  >
                    {social.icon}
                  </div>
                  <span className="mt-2 text-sm">{social.name}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Subscrição */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-10"
          >
            <h3 className="text-lg font-semibold text-blue-400 mb-4">
              Subscreva para atualizações
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full md:w-2/3 px-4 py-3 rounded-lg bg-black/50 border border-white/10 focus:border-blue-500 outline-none"
              />
              <button className="px-6 py-3 rounded-lg font-semibold text-lg bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-500 hover:to-blue-500 transition-colors">
                Subscreva
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
