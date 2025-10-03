import type { NextApiRequest, NextApiResponse } from "next";

/**
 * /api/check_email
 * - Modo mock (quando process.env.HIBP_API_KEY não estiver definida)
 * - Modo real (quando HIBP_API_KEY estiver definida) usando HaveIBeenPwned API v3
 *
 * Observações:
 * - Garante que o runtime é node (não edge), pois HIBP pode bloquear edge runtimes.
 * - Retorna { found: boolean, breaches: Array } em caso de sucesso.
 * - Em caso de erro devolve { error: string } com status 4xx/5xx apropriado.
 */

export const config = {
  runtime: "nodejs",
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.query;

  if (!email || typeof email !== "string") {
    return res.status(400).json({ error: "Email inválido." });
  }

  // Normaliza
  const emailStr = email.trim();

  // Modo mock grátis (quando não há HIBP_API_KEY)
  if (!process.env.HIBP_API_KEY) {
    // Simulação: emails que contenham "teste" são considerados vazados
    if (emailStr.toLowerCase().includes("teste")) {
      return res.status(200).json({
        found: true,
        breaches: [
          {
            name: "ExemploLeak",
            domain: "teste.com",
            date: "2023-01-01",
            description: "Simulação para ambiente de desenvolvimento",
          },
          {
            name: "OutraFalha",
            domain: "example.org",
            date: "2022-09-12",
            description: "Simulação para ambiente de desenvolvimento",
          },
        ],
      });
    }

    // Caso padrão - sem vazamentos
    return res.status(200).json({ found: false, breaches: [] });
  }

  // Modo pago - HIBP real
  try {
    const apiUrl = `https://haveibeenpwned.com/api/v3/breachedaccount/${encodeURIComponent(
      emailStr
    )}?truncateResponse=false`;

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "hibp-api-key": process.env.HIBP_API_KEY!,
        "User-Agent": "OlharAtento/1.0", // obrigatório
        Accept: "application/json",
      },
    });

    // 404 do HIBP significa "nenhum breach encontrado" para o e-mail
    if (response.status === 404) {
      return res.status(200).json({ found: false, breaches: [] });
    }

    // 401/403 => chave inválida ou acesso bloqueado
    if (response.status === 401 || response.status === 403) {
      return res.status(500).json({
        error: "Chave HIBP inválida ou sem permissões (401/403).",
      });
    }

    if (!response.ok) {
      // devolve status e texto para ajudar debugging
      const text = await response.text().catch(() => "");
      return res.status(502).json({
        error: `Erro na API HIBP: ${response.status} ${response.statusText}`,
        details: text,
      });
    }

    const breaches = await response.json();
    // Garantir formato consistente ao frontend
    if (!Array.isArray(breaches)) {
      return res.status(502).json({ error: "Resposta inesperada da API HIBP." });
    }

    return res
      .status(200)
      .json({ found: breaches.length > 0, breaches });
  } catch (err: any) {
    // Log mínimo para investigação (servidor)
    console.error("check_email error:", err);
    return res
      .status(500)
      .json({ error: err?.message || "Erro inesperado no servidor." });
  }
}
