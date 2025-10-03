// API check_email/route.ts
import { NextResponse } from "next/server";
function deterministicHash(str: string) {
  let h = 5381; for (let i = 0; i < str.length; i++) h = (h * 33) ^ str.charCodeAt(i);
  return Math.abs(h);
}
function generateMockResponse(email: string) {
  const h = deterministicHash(email.toLowerCase());
  const chance = h % 10;
  if (chance <= 2) {
    const breaches = [{ Name: "ExampleService", BreachDate: "2021-06-12" }, { Name: "ShopOnline", BreachDate: "2019-11-02" }];
    const count = (h % breaches.length) + 1;
    return { found: true, breaches: breaches.slice(0, count) };
  } else return { found: false, breaches: [] };
}
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");
  if (!email) return NextResponse.json({ error: "Email é obrigatório." }, { status: 400 });
  const apiKey = process.env.HIBP_API_KEY;
  if (!apiKey) return NextResponse.json(generateMockResponse(email));
  try {
    const res = await fetch(`https://haveibeenpwned.com/api/v3/breachedaccount/${encodeURIComponent(email)}?truncateResponse=false`, { headers: { "hibp-api-key": apiKey, "User-Agent": "paqsec-app" } });
    if (res.status === 404) return NextResponse.json({ found: false, breaches: [] });
    if (!res.ok) return NextResponse.json({ error: "Erro na API HIBP." }, { status: res.status });
    const breaches = await res.json();
    return NextResponse.json({ found: true, breaches });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Erro de rede." }, { status: 500 });
  }
}