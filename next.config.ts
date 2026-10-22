import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Statyczny eksport do katalogu out/ — hostowany na Cloudflare Pages
  output: "export",
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig;
