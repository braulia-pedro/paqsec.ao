// app/api/admin/route.ts
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST() {
  // exemplo: criar usuário direto no banco
  const { data, error } = await supabaseAdmin.from("users").insert([
    { name: "Novo Admin", email: "admin@test.com" }
  ]);

  return NextResponse.json({ data, error });
}
