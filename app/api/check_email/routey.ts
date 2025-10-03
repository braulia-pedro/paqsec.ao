import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json({ error: "Email é obrigatório." }, { status: 400 });
  }

  try {
    const apiKey = process.env.HIBP_API_KEY;
    if (!apiKey) {
      throw new Error("API key não definida.");
    }

    const res = await fetch(`https://haveibeenpwned.com/api/v3/breachedaccount/${encodeURIComponent(email)}?truncateResponse=false`, {
      headers: {
        "hibp-api-key": apiKey,
        "User-Agent": "paqsec-app",
      },
    });

    if (res.status === 404) {
      return NextResponse.json({ found: false, breaches: [] });
    }

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json({ error: text || "Erro na API HIBP." }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json({ found: true, breaches: data });
  } catch (err: any) {
    // 🔁 MOCK fallback
    const breaches = [
      {
        Name: "ExampleService",
        BreachDate: "2021-06-12",
        Description: "Credenciais e emails expostos.",
      },
      {
        Name: "ShopOnline",
        BreachDate: "2019-11-02",
        Description: "Dados de usuários vazados em pastebin.",
      },
    ];
    return NextResponse.json({
      found: true,
      breaches: breaches.slice(0, Math.floor(Math.random() * breaches.length) + 1),
      mock: true,
    });
  }
}
