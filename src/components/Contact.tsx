// ============================================================
// Contact.tsx - お問い合わせ・フッターセクション
//
// portfolioData.profile.github から GitHub の URL を取得して
// 「GitHub Profile」ボタンを表示します。
//
// ページ最下部のフッターとしても機能しており、
// コピーライト表示（© 年 名前）も含まれています。
// ============================================================
"use client";

import React from "react";

// framer-motion のアニメーションコンポーネント
import { motion } from "framer-motion";

// ポートフォリオデータ（github URL や名前を取得）
import { portfolioData } from "@/data/portfolio";

// アイコン
// GitBranch → GitHub ボタン用のアイコン
import { GitBranch } from "lucide-react";

export function Contact() {
  // profile から github URL だけを取り出す（分割代入）
  const { github } = portfolioData.profile;

  return (
    // id="contact" → ヘッダーの「Contact」ボタンからここへジャンプ
    <section
      id="contact"
      className="py-32 px-6 bg-background border-t border-white/5 relative"
    >
      {/* 背景を塗りつぶす div（重ね合わせ用） */}
      <div className="absolute inset-0 bg-background" />

      {/* メインコンテンツ（背景より前面） */}
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
        {/* ── フェードイン + スケールアップ アニメーション ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} // 初期: 透明 + わずかに縮小
          whileInView={{ opacity: 1, scale: 1 }} // 画面に入ったら: 不透明 + 通常サイズ
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          {/* 大見出し: &apos; は「'」のHTMLエンティティ（JSX内ではこう書く） */}
          <h2 className="text-6xl md:text-8xl font-serif font-black text-foreground tracking-tighter mb-8 max-w-2xl mx-auto leading-[0.9]">
            Let&apos;s
            <br />
            Connect.
          </h2>

          {/* アクセントライン（アンバー色の細い横線） */}
          <div className="w-24 h-[1px] bg-amber-500 mx-auto mb-8" />

          {/* 説明文 */}
          <p className="text-muted-foreground mb-16 text-lg md:text-xl font-light font-sans leading-relaxed max-w-xl mx-auto">
            ご覧いただきありがとうございます。
          </p>

          {/* ── リンクボタン群 ─────────────────────────── */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {/* GitHub ボタン（github URL が設定されている場合のみ表示） */}
            {github && (
              <a
                href={github}
                target="_blank" // 新しいタブで開く
                rel="noopener noreferrer" // セキュリティ（フィッシング防止）
                // hover時: 背景白・文字黒に反転するスタイル
                className="group relative flex items-center justify-center gap-4 border border-white/20 px-8 py-5 text-sm font-sans tracking-[0.2em] font-medium uppercase text-foreground hover:bg-white hover:text-black transition-all duration-500 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {/* ホバー時に -12度 回転するアイコン */}
                <GitBranch
                  size={20}
                  className="group-hover:-rotate-12 transition-transform duration-500"
                />
                <span>GitHub Profile</span>
              </a>
            )}
          </div>
        </motion.div>

        {/* ── コピーライト表示 ─────────────────────────── */}
        {/* mt-32 → ボタンから十分な余白を取る */}
        {/* new Date().getFullYear() → 現在の年を自動取得（常に最新年が表示される） */}
        <div className="mt-32 text-muted-foreground/60 text-xs font-sans tracking-widest uppercase">
          &copy; {new Date().getFullYear()} {portfolioData.profile.name}. All
          rights reserved.
        </div>
      </div>
    </section>
  );
}
