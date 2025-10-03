import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  const { password } = await req.json();

  if (!password) {
    return NextResponse.json({ error: "Password é obrigatória." }, { status: 400 });
  }

  try {
    // Gera SHA1
    const hash = crypto.createHash("sha1").update(password).digest("hex").toUpperCase();
    const prefix = hash.slice(0, 5);
    const suffix = hash.slice(5);

    // Faz request à API HIBP
    const res = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`, {
      headers: { "User-Agent": "paqsec-app" },
    });

    if (!res.ok) {
      throw new Error("Falha ao consultar API de senhas.");
    }

    const text = await res.text();
    const lines = text.split("\n");
    const match = lines.find((line) => line.startsWith(suffix));

    if (match) {
      const count = match.split(":")[1];
      return NextResponse.json({ found: true, count });
    } else {
      return NextResponse.json({ found: false });
    }
  } catch (err: any) {
    // 🔁 MOCK fallback
    const mockBreached = Math.random() < 0.4; // 40% chance de "encontrar"
    if (mockBreached) {
      return NextResponse.json({
        found: true,
        count: Math.floor(Math.random() * 1000) + 1,
        mock: true,
      });
    } else {
      return NextResponse.json({ found: false, mock: true });
    }
  }
}
