"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <Image 
          src="/LOGO_PAQSEC.png" 
          alt="Logotipo PAQSEC" 
          width={200} 
          height={60} 
          priority
        />

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-8 text-gray-300">
          
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Início
          </Link>
          <Link href="/ferramenta" className="hover:text-blue-400 transition-colors">
            Ferramenta Gratuita
          </Link>
          <Link href="/sobre" className="hover:text-blue-400 transition-colors">
            Sobre
          </Link>
          <Link href="/servicos" className="hover:text-blue-400 transition-colors">
            Serviços
          </Link>
          <Link href="/treinamento" className="hover:text-blue-400 transition-colors">
            Treinamento & Carreira
          </Link>
          <Link href="/contactos" className="hover:text-blue-400 transition-colors">
            Contato
          </Link>
          
        </nav>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-gray-300 hover:text-blue-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col gap-4 bg-black/95 px-6 py-6 border-t border-white/10"
        >
          <Link href="/" onClick={() => setIsOpen(false)}>Início</Link>
          <Link href="/ferramenta" onClick={() => setIsOpen(false)}>Ferramenta Gratuita</Link>
          <Link href="/sobre" onClick={() => setIsOpen(false)}>Sobre</Link>
          <Link href="/servicos" onClick={() => setIsOpen(false)}>Serviços</Link>
          <Link href="/treinamento" onClick={() => setIsOpen(false)}>Treinamento & Carreira</Link>
          <Link href="/contactos" onClick={() => setIsOpen(false)}>Contato</Link>
        </motion.nav>
      )}
    </motion.header>
  );
}
