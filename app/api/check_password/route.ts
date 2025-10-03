
// API check_password/route.ts
import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  const { password } = await req.json();
  if (!password) return NextResponse.json({ error: "Password é obrigatória." }, { status: 400 });
  try {
    const hash = crypto.createHash("sha1").update(password).digest("hex").toUpperCase();
    const prefix = hash.slice(0, 5);
    const suffix = hash.slice(5);
    const res = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`, { headers: { "User-Agent": "paqsec-app" } });
    if (!res.ok) return NextResponse.json({ error: "Erro na API HIBP." }, { status: res.status });
    const text = await res.text();
    const match = text.split("\n").find((line) => line.startsWith(suffix));
    return NextResponse.json(match ? { found: true, count: match.split(":")[1] } : { found: false });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Erro de rede." }, { status: 500 });
  }
}
