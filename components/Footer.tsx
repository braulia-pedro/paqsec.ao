

"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        <div>
          <Image
            src="/LOGO_PAQSEC.png"
            alt="PAQSEC"
            width={155}
            height={55}
            className="mb-4"
          />          
          <p className="text-sm text-gray-400 leading-relaxed">
            Segurança como pilar de valor, inteligência e vantagem competitiva.
          </p>
        </div>


        <div>
          <h4 className="font-semibold mb-3">Navegação</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link href="/" className="hover:text-blue-400 transition">Início</Link>
            </li>
            <li>
              <Link href="/sobre" className="hover:text-blue-400 transition">Sobre</Link>
            </li>
            <li>
              <Link href="/servicos" className="hover:text-blue-400 transition">Serviços</Link>
            </li>
            <li>
              <Link href="/treinamento" className="hover:text-blue-400 transition">Treinamento &amp; Carreira</Link>
            </li>
            <li>
              <Link href="/ferramenta" className="hover:text-blue-400 transition">Ferramenta Gratuita</Link>
            </li>
          </ul>
        </div>

        {/* Contactos */}
        <div>
          <h4 className="font-semibold mb-3">Contactos</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Email: <a href="mailto:info@paqsec.com" className="hover:text-blue-400">contato@paqsec.com</a></li>
            <li>Tel: <a href="tel:+244999000000" className="hover:text-blue-400">+244 934 031 737</a></li>
            <li>Luanda, Angola</li>
          </ul>
        </div>

        {/* Ferramenta */}
        <div>
          <h4 className="font-semibold mb-3">Ferramenta</h4>
          <p className="text-sm text-white/80">
            Verifique emails em violações conhecidas. Dados providos via HIBP.
          </p>
                                                                                                                                                  
          <Link href="/ferramenta" className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-red-600 bg-red-600 hover:bg-red-500 font-medium">Verificar Vazamento <Search className="w-4 h-4" /></Link>

        </div>

      </div>

      {/* Linha final */}
      <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} PAQSEC. Todos os direitos reservados.
      </div>
    </footer>
  );
}
