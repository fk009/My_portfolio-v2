// ============================================================
// layout.tsx - アプリ全体の「外枠（レイアウト）」を定義するファイル
//
// Next.js の App Router では、このファイルが
// すべてのページの共通ラッパーとして自動的に使われます。
// ここで設定したフォントや HTML の基本構造は
// 全ページに適用されます。
// ============================================================

// Next.js が提供する「メタデータ（タイトルや説明文）」の型定義をインポート
import type { Metadata } from "next";

// Google Fonts からフォントを読み込む
// Outfit  → サンセリフ体（本文・UI用）
// Playfair Display → セリフ体（見出し用）
import { Outfit, Playfair_Display } from "next/font/google";

// グローバルCSS（全ページ共通のスタイル）を読み込む
import "./globals.css";

// ── フォント設定 ──────────────────────────────────────────
// CSS変数として登録しておくと、globals.css や className で
// "--font-outfit" という名前で参照できるようになる
const outfit = Outfit({
  variable: "--font-outfit",     // CSS変数名
  subsets: ["latin"],            // 使用する文字セット（ラテン文字）
});

const playfair = Playfair_Display({
  variable: "--font-playfair",   // CSS変数名
  subsets: ["latin"],
});

// ── SEO メタデータ ────────────────────────────────────────
// ブラウザのタブや検索エンジン向けの情報
export const metadata: Metadata = {
  title: "Portfolio",
  description: "A bold and dynamic creative portfolio",
};

// ── ルートレイアウト コンポーネント ──────────────────────
// children = このファイルの「中身」として渡されるページコンポーネント
// Readonly<{ children: React.ReactNode }> は
// 「children という React のノードを受け取る、変更不可な型」を意味する
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // html タグ: ダークモードクラスと両フォントのCSS変数クラスをまとめて付与
    <html
      lang="en"
      className={`dark ${outfit.variable} ${playfair.variable} h-full relative antialiased`}
    >
      {/* body タグ: 画面の高さを最低でも100%にし、縦方向のflex配置にする */}
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
