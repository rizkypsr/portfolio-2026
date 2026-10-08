import type { NextConfig } from "next";

const repo = "portfolio-2026";
// GitHub Pages serves from /portfolio-2026; Vercel serves from root.
const basePath = process.env.VERCEL ? "" : `/${repo}`;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/user-attachments/assets/**",
      },
    ],
  },
};

export default nextConfig;