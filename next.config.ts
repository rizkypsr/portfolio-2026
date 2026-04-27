import type { NextConfig } from "next";

const repo = "portfolio-2026";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,

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