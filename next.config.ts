import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 静的エクスポートを有効化
  images: {
    unoptimized: true, // GitHub PagesではNext.jsの画像最適化が使えないため
  },
  // basePath: '/リポジトリ名', // 必要に応じて追加
};

export default nextConfig;
