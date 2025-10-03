"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    title: "Proteja-se com o auxilio da PAQSEC.",
    subtitle: "Proteção avançada contra ameaças digitais.",
    bg: "/slides/seguro.jpg",
  },
  {
    title: "Olhar atento em cada detalhe.",
    subtitle: "Prevenção inteligente, confiança garantida.",
    bg: "/slides/eye.jpg",
  },
];

export default function FuturisticSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[70vh] overflow-hidden bg-black">
      {slides.map((slide, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex"
        >
          {/* Imagem alinhada à esquerda */}
          <div className="relative w-1/2 h-full">
            <Image
              src={slide.bg}
              alt={slide.title}
              fill
              quality={100}
              priority={i === current}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/70 to-black" />
          </div>

          {/* Texto deslocado um pouco mais para a esquerda */}
          <div className="flex-1 flex items-center justify-center px-10 md:px-20">
            <div className="text-right max-w-xl ml-[-40px]">
              {/* ^--- ALTERADO: antes usava -translate-x-[3cm], troquei por ml-[-40px] 
                   para mover só o texto um pouco mais à esquerda de forma mais controlada */}
              <motion.h1
                whileHover={{ scale: 1.03 }}
                className="text-4xl md:text-6xl font-bold text-white"
              >
                {slide.title}
              </motion.h1>
              <p className="mt-4 text-lg md:text-xl text-gray-300">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Indicadores */}
      <div className="absolute bottom-8 w-full flex justify-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === current ? "bg-cyan-400" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
