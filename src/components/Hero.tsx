// ============================================================
// Hero.tsx - ページ最上部のメインビジュアル（ヒーローセクション）
//
// 機能:
// - バックエンド開発者としてのキャッチコピーを大きく表示
// - framer-motion による段階的フェードインアニメーション
// - 背景はアニメーティングなグラデーション＋グリッド装飾
// - WorksセクションとEngineeringセクションへのCTAボタン
// ============================================================
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";

// テキストを1単語ずつアニメーションするためのヘルパー
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.3 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 30, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

// スムーズスクロールヘルパー
const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export function Hero() {
  // キャッチコピー（要修正時はここだけ変更）
  const headline1 = "見えない部分を整え、";
  const headline2 = "システムの";
  const headline3 = "土台を支える。";

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background"
    >
      {/* ── 背景: アニメーティングなグラデーションメッシュ ────── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* グラデーション球体1 */}
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-blue-900/20 blur-[120px]"
        />
        {/* グラデーション球体2 */}
        <motion.div
          animate={{
            x: [0, -40, 20, 0],
            y: [0, 30, -20, 0],
            scale: [1, 0.9, 1.05, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute -bottom-48 -right-32 w-[700px] h-[700px] rounded-full bg-amber-900/15 blur-[140px]"
        />
        {/* グラデーション球体3（中央アクセント） */}
        <motion.div
          animate={{
            x: [0, 20, -30, 0],
            y: [0, -20, 40, 0],
            opacity: [0.1, 0.2, 0.08, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8,
          }}
          className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-indigo-700/20 blur-[100px]"
        />
        {/* ドットグリッド */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* ボーダーライン（下部） */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ── メインコンテンツ ──────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-24 text-center">
        {/* ラベル */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-3 mb-12"
        >
          <div className="w-8 h-px bg-amber-500" />
          <span className="text-xs font-sans font-bold tracking-[0.35em] uppercase text-amber-500">
            Backend Developer
          </span>
          <div className="w-8 h-px bg-amber-500" />
        </motion.div>

        {/* メインキャッチコピー */}
        <div className="overflow-hidden mb-8" style={{ perspective: "1000px" }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-2"
          >
            {[headline1, headline2, headline3].map((line, lineIdx) => (
              <motion.div
                key={lineIdx}
                variants={wordVariants}
                className={`font-serif font-black tracking-tighter leading-[1.0] text-foreground ${
                  lineIdx === 2
                    ? // 「土台を支える。」にアクセントカラー
                      "text-5xl md:text-7xl lg:text-8xl text-amber-400"
                    : "text-5xl md:text-7xl lg:text-8xl"
                }`}
              >
                {line}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* サブテキスト */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="text-lg md:text-xl text-slate-200 font-sans font-light leading-relaxed max-w-2xl mx-auto mb-16"
        >
          ユーザーの目に触れない裏側の仕組みを丁寧に構築。
          <br className="hidden md:block" />
          サービスが滞りなく動き続けるための「当たり前」を
          <br className="hidden md:block" />
          一つずつ積み上げていく実装を心がけています。
        </motion.p>

        {/* CTAボタン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* プライマリCTA: Works */}
          <button
            type="button"
            onClick={() => scrollTo("works")}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-sans font-bold text-sm tracking-[0.15em] uppercase rounded-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all duration-300 hover:bg-amber-500 hover:text-white"
          >
            Works を見る
            <ArrowDown
              size={16}
              className="group-hover:translate-y-1 transition-transform"
            />
          </button>

          {/* セカンダリCTA: Engineering */}
          <button
            type="button"
            onClick={() => scrollTo("engineering")}
            className="group inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-foreground font-sans font-bold text-sm tracking-[0.15em] uppercase rounded-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all duration-300 hover:border-amber-500 hover:text-amber-500"
          >
            Engineering Approach
            <ExternalLink
              size={16}
              className="group-hover:scale-110 transition-transform"
            />
          </button>
        </motion.div>

        {/* Qiita リンク */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-8"
        >
          <a
            href="https://qiita.com/yuurei_09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-sans text-muted-foreground/60 hover:text-amber-500 transition-colors tracking-widest uppercase rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Qiita で技術記事を読む →
          </a>
        </motion.div>
      </div>

      {/* ── スクロールインジケーター ──────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-white/20" />
        </motion.div>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}
