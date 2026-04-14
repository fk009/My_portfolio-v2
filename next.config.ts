import type { NextConfig } from "next";

const basePathEnv = process.env.NEXT_PUBLIC_BASE_PATH;
const basePath =
  basePathEnv && basePathEnv !== "/"
    ? basePathEnv.replace(/\/$/, "")
    : undefined;

const nextConfig: NextConfig = {
  output: "export", // 静的エクスポートを有効化
  trailingSlash: true,
  images: {
    unoptimized: true, // GitHub PagesではNext.jsの画像最適化が使えないため
  },
  basePath,
};

export default nextConfig;
