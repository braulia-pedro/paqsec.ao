"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative w-full max-w-6xl mx-auto my-20 rounded-2xl overflow-hidden shadow-xl">
      
      <div className="relative w-full h-[313px]">
        <Image
          src="/slides/cta.jpg"
          alt="Fale Conosco"
          fill
          className="object-cover"
          quality={100}
          priority
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.85) 100%)",
          }}
        />

        {/* leves fades topo/baixo */}
        <div
          className="absolute inset-x-0 top-0 h-[40px] pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0))",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[40px] pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0))",
          }}
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center md:justify-start px-6 md:pl-16 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-lg"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">
            Do que está à espera para ligar para nós?
          </h2>
          <p className="mt-3 text-lg md:text-xl text-gray-200 drop-shadow">
            Basta um clique.
          </p>

          <Link
            href="/contactos"
            className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-xl 
            bg-cyan-600 hover:bg-cyan-500 text-white font-medium shadow-lg"
          >
            Falar Conosco
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
