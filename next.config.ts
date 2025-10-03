import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ignora erros do ESLint durante o build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Ignora erros de TypeScript durante o build
  typescript: {
    ignoreBuildErrors: true,
  },

  // Gera build estático (necessário para GitHub Pages / Netlify / etc.)
  output: "export",
};

export default nextConfig;
