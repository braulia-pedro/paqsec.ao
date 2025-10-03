"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// 🔹 Componente de fundo animado (rede neural)
function NeuralNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame: number;
    let phase = 0;

    const nodes = Array.from({ length: 25 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: (Math.random() - 0.5) * 0.6,
      dy: (Math.random() - 0.5) * 0.6,
    }));

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Atualizar posição dos nós
      nodes.forEach((n) => {
        n.x += n.dx;
        n.y += n.dy;

        if (n.x < 0 || n.x > canvas.width) n.dx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.dy *= -1;

        ctx.beginPath();
        ctx.arc(n.x, n.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#00AEFF";
        ctx.fill();
      });

      // Conexões cintilantes
      phase += 0.03;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n = nodes[i];
          const m = nodes[j];
          const dist = Math.hypot(n.x - m.x, n.y - m.y);
          if (dist < 250) {
            const alpha = 0.5 + 0.5 * Math.sin(phase + dist * 0.05);
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.strokeStyle = `rgba(0, 67, 255, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      animationFrame = requestAnimationFrame(draw);
    }

    function resize() {
      canvas.width = window.innerWidth / 2;
      canvas.height = window.innerHeight;
    }

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

// 🔹 Componente principal Hero
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-between min-h-screen px-8 pt-24 bg-black text-white overflow-hidden"
    >
      {/* Texto lado esquerdo */}
      <div className="z-10 max-w-xl space-y-6">
        {/* 🔹 Texto institucional topo */}


        {/* 🔹 Título principal */}
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-5xl font-bold leading-tight"
        >
          <span className="bg-gradient-to-r from-[#00AEFF] to-[#0029BB] bg-clip-text text-transparent">
            PAQSEC
          </span>{" "}
          <span className="text-white">
            Cibersegurança que antecipa riscos —
          </span>
              {/* Última linha também com gradiente cyan → blueDark */}
              <span className="block bg-gradient-to-r from-[#00AEFF] to-[#0029BB] bg-clip-text text-transparent mt-2">
                inteligência, investigação e proteção
              </span>
        </motion.h1>

        {/* 🔹 Subtítulo ferramenta */}
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300"
        >
          
          Descubra se o seu email ou senha já apareceu em violações de dados. Verifique agora mesmo com  nossa ferramenta gratuita -<strong>Olhar Atento</strong>
        </motion.p>

        {/* 🔹 Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            href="/ferramenta"
            className="inline-block px-6 py-3 mt-4 text-lg font-semibold text-white bg-[#EE1216] rounded-xl shadow-lg hover:bg-[#0030B5] transition-colors"
          >
             Verificar vazamentos
          </Link>
        </motion.div>
      </div>

      {/* Rede neural lado direito */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true }}
        className="absolute right-0 top-0 bottom-0 w-1/2"
      >
        <NeuralNetworkBackground />
      </motion.div>
    </section>
  );
}


{/*"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Hero from "@/components/Hero";
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
    <PageTransition>

      <section className="py-20 px-6 max-w-5xl mx-auto space-y-20">
        
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <h3 className="text-3xl font-semibold text-center">Essência da Marca</h3>
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
 
        <div className="text-center">
          <Link href="/servicos" className="text-blue-400 hover:underline">
            Ver nossos serviços →
          </Link>
        </div>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-center text-white">Nossos Valores</h2>
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
      </section>
    </PageTransition>
  );
}
*/}