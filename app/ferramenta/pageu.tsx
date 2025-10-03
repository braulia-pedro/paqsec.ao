// app/ferramenta/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  ScanLine,
  Search,
  Lock,
  Shield,
  Radar,
  Terminal,
  Globe,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

export default function FerramentaPage() {
  const [mode, setMode] = useState<"email" | "password">("email"); // novo
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // novo
  const [status, setStatus] = useState<
    null | { type: "ok" | "found" | "error"; message: string; details?: any }
  >(null);
  const [loading, setLoading] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  // SHA-1 nativo (retorna HEX uppercase)
  async function sha1Native(message: string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hashBuffer = await crypto.subtle.digest("SHA-1", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("").toUpperCase();
  }

  // Verificação de email (mantive a lógica original, mas usei /api/check_email)
  async function handleCheckEmail() {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({
        type: "error",
        message: "Por favor, introduza um email válido.",
      });
      return;
    }
    setLoading(true);
    setIsScanning(true);
    setStatus(null);
    try {
      // NOTE: endpoint server-side esperado: /api/check_email?email=...
      const res = await fetch(`/api/check_email?email=${encodeURIComponent(email)}`);
      const data = await res.json();
      if (res.ok) {
        if (data.found || (Array.isArray(data.breaches) && data.breaches.length > 0)) {
          const total = Array.isArray(data.breaches) ? data.breaches.length : (data.found ? 1 : 0);
          setStatus({
            type: "found",
            message: ` O seu email foi encontrado em ${total} violações.`,
            details: data.breaches,
          });
        } else {
          setStatus({
            type: "ok",
            message: " Nenhuma violação conhecida encontrada para este email.",
          });
        }
      } else {
        setStatus({
          type: "error",
          message: data?.error || "Ocorreu um erro ao consultar a API.",
        });
      }
    } catch (e: any) {
      setStatus({
        type: "error",
        message: e?.message || "Erro de rede ao consultar a API.",
      });
    } finally {
      setLoading(false);
      setTimeout(() => setIsScanning(false), 600);
    }
  }

  // Verificação de senha (k-anonymity, cliente)
  async function handleCheckPassword() {
    if (!password) {
      setStatus({
        type: "error",
        message: "Por favor, introduza uma palavra-passe.",
      });
      return;
    }
    setLoading(true);
    setIsScanning(true);
    setStatus(null);

    try {
      const sha1 = await sha1Native(password); // HEX UPPER
      const prefix = sha1.slice(0, 5);
      const suffix = sha1.slice(5).toUpperCase();

      const res = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`);
      if (!res.ok) {
        throw new Error(`Erro ao consultar Pwned Passwords: ${res.status}`);
      }
      const text = await res.text();
      const lines = text.split(/\r?\n/);
      let foundCount = 0;
      for (const line of lines) {
        const [hashSuffix, countStr] = line.split(":");
        if (!hashSuffix) continue;
        if (hashSuffix.trim().toUpperCase() === suffix) {
          foundCount = parseInt((countStr || "0").trim(), 10) || 0;
          break;
        }
      }

      if (foundCount > 0) {
        setStatus({
          type: "found",
          message: `⚠️ A sua palavra-passe apareceu em ${foundCount} vazamentos públicos.`,
          details: [],
        });
      } else {
        setStatus({
          type: "ok",
          message: " Nenhuma ocorrência conhecida encontrada para esta palavra-passe.",
        });
      }
    } catch (e: any) {
      setStatus({
        type: "error",
        message: e?.message || "Erro ao verificar a palavra-passe.",
      });
    } finally {
      setLoading(false);
      setTimeout(() => setIsScanning(false), 600);
    }
  }

  // Handler único do botão principal (executa a ação conforme mode)
  function handlePrimaryAction() {
    if (mode === "email") {
      handleCheckEmail();
    } else {
      handleCheckPassword();
    }
  }

  // Toggle entre email <-> password (limpa estado relevante)
  function toggleMode() {
    const next = mode === "email" ? "password" : "email";
    setMode(next);
    setStatus(null);
    setIsScanning(false);
    setLoading(false);
    // opcional: limpar campos quando alternar
    // setEmail("");
    setPassword("");
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden pt-24">
        <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Ferramenta Gratuita—{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0043FF] to-[#0029BB]">
                Olhar Atento
              </span>
            </h2>
            <p className="mt-6 text-lg text-white/80 max-w-2xl">
              Descubra se o seu email já apareceu em violações de dados.
              Verifique agora mesmo com o nosso <strong>Olhar Atento</strong>.
            </p>

            {/* Form (mantive layout; input troca por password quando mode==='password') */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <div className="flex-1 min-w-[260px] relative">
                {mode === "email" ? (
                  <>
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 opacity-70" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="  Digite aqui o seu email"
                      className="w-full pl-10 pr-4 py-3 rounded-2xl border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#00AEFF] placeholder-white/40"
                    />
                  </>
                ) : (
                  <>
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 opacity-70" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="  Digite aqui a sua palavra-passe"
                      className="w-full pl-10 pr-4 py-3 rounded-2xl border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#00AEFF] placeholder-white/40"
                    />
                  </>
                )}
              </div>

              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={handlePrimaryAction}
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-semibold shadow-lg border border-red-600 bg-red-600 hover:bg-red-500 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isScanning ? (
                  <>
                    <ScanLine className="animate-pulse" />
                    A analisar...
                  </>
                ) : (
                  <>
                    <Search />
                    {mode === "email" ? "Verificar Vazamento" : "Verificar Senha"}
                  </>
                )}
              </motion.button>
            </div>

            <p className="mt-3 text-xs text-white/60">
              Ao utilizar esta ferramenta concorda com o nosso aviso de privacidade.
            </p>

            <div className="mt-5 flex items-center gap-4 text-sm">
              <button
                onClick={toggleMode}
                className="inline-flex items-center gap-2 opacity-80 hover:opacity-100 transition"
              >
                {mode === "email" ? (
                  <>
                    <Lock className="w-4 h-4" /> Verificar palavra-passe (k-anonymity)
                  </>
                ) : (
                  <>
                    <Shield className="w-4 h-4" /> Verificar email
                  </>
                )}
              </button>

              <a
                href="#contacto"
                className="inline-flex items-center gap-2 opacity-80 hover:opacity-100"
              >
                <Shield className="w-4 h-4" /> Obter relatório detalhado
              </a>
            </div>
          </div>

          {/* Card lateral (mantive exatamente como estava) */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl grid place-items-center bg-[#0029BB]">
                  <Radar />
                </div>
                <div>
                  <p className="text-white/70 text-sm">PAQ SEC • Radar</p>
                  <h3 className="font-semibold">Monitorização Contínua</h3>
                </div>
              </div>

              {/* Placeholder ou Resultados (mantive lógica de status) */}
              <div className="mt-6 space-y-3 text-sm">
                {!status && (
                  <p className="text-white/60">
                    Os resultados da sua verificação irão aparecer aqui.
                    Enquanto isso, sabia que emails expostos costumam surgir em
                    redes sociais, serviços financeiros e até plataformas de
                    compras online?
                  </p>
                )}
                {status?.type === "found" && (
                  <InfoRow
                    icon={<Terminal className="w-4 h-4" />}
                    label="Credenciais vazadas"
                    value={`${status.details?.length || 0} referências`}
                    accent="#EE1216"
                  />
                )}
                {status?.type === "ok" && (
                  <p className="text-green-400">
                     Nenhum vazamento conhecido para este email/senha.
                  </p>
                )}
                {status?.type === "error" && (
                  <p className="text-red-400"> {status.message}</p>
                )}
              </div>

              <a
                href="#servicos"
                className="mt-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
              >
                Explorar soluções <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO EXPLICATIVA */}
      <section id="ferramenta" className="bg-[#0a0f1f] py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold">Por que esta ferramenta é importante?</h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Todos os dias milhões de credenciais vazam na internet — emails,
              senhas e dados de acesso. Muitas vezes, os utilizadores só
              descobrem quando já é tarde demais. O{" "}
              <strong>Olhar Atento</strong> ajuda você a identificar se o seu
              email foi exposto e a tomar medidas práticas para reforçar a sua
              segurança digital.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="font-semibold mb-3">Porque oferecemos isto?</h3>
            <ul className="space-y-2 text-sm text-white/70 list-disc pl-5">
              <li>Educar e reduzir risco para cidadãos e organizações.</li>
              <li>Transformar sinais técnicos em ações práticas.</li>
              <li>Conectar com serviços de Threat Intelligence & DRP.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Toast */}
      <div className="fixed bottom-6 right-6 max-w-sm">
        {status && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-2xl p-4 shadow-2xl border backdrop-blur ${
              status.type === "ok"
                ? "bg-green-900/40 border-green-700"
                : status.type === "found"
                ? "bg-red-900/40 border-red-700"
                : "bg-gray-900/60 border-gray-700"
            }`}
          >
            <div className="flex items-start gap-3">
              {status.type === "ok" && <CheckCircle2 className="mt-0.5" />}
              {status.type === "found" && <AlertCircle className="mt-0.5" />}
              {status.type === "error" && <AlertCircle className="mt-0.5" />}
              <div>
                <p className="text-sm">{status.message}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function InfoRow({ icon, label, value, accent }: any) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 text-white/80">
        {icon}
        <span>{label}</span>
      </div>
      <span className="font-medium" style={{ color: accent }}>
        {value}
      </span>
    </div>
  );
}
