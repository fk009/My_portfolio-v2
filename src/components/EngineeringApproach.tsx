"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, AlertTriangle, Bot, CheckCircle2 } from "lucide-react";
import { portfolioData, type EngineeringItem } from "@/data/portfolio";

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "インフラの安定性", label: "🔧 インフラの安定性" },
  { id: "セキュリティと認証", label: "🔒 セキュリティ" },
  { id: "UXと非同期処理", label: "⚡ UX & 非同期" },
  { id: "開発基盤", label: "🛠 開発基盤" },
] as const;

const CATEGORY_COLORS: Record<string, { border: string; badge: string; icon: string }> = {
  "インフラの安定性": {
    border: "border-blue-500/25 hover:border-blue-500/50",
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    icon: "text-blue-400",
  },
  "セキュリティと認証": {
    border: "border-amber-500/25 hover:border-amber-500/50",
    badge: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    icon: "text-amber-400",
  },
  "UXと非同期処理": {
    border: "border-violet-500/25 hover:border-violet-500/50",
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    icon: "text-violet-400",
  },
  "開発基盤": {
    border: "border-emerald-500/25 hover:border-emerald-500/50",
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    icon: "text-emerald-400",
  },
};

function EngineeringCard({
  item,
  idx,
}: {
  item: EngineeringItem;
  idx: number;
}) {
  const colors = CATEGORY_COLORS[item.category] ?? CATEGORY_COLORS["開発基盤"];

  return (
    <motion.article
      key={item.id}
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.97 }}
      transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative flex flex-col border ${colors.border} bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-400 p-7`}
    >
      <div className="flex items-start justify-between gap-3 mb-5">
        <span
          className={`inline-flex items-center px-2.5 py-1 text-[10px] font-sans font-bold tracking-[0.15em] uppercase border ${colors.badge} rounded-sm`}
        >
          {item.category}
        </span>
        {item.articleUrl && item.articleUrl !== "#" && (
          <a
            href={item.articleUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Qiita記事を開く"
            className="opacity-40 hover:opacity-100 transition-opacity text-muted-foreground hover:text-amber-500 flex-shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            title="Qiitaで読む"
          >
            <ExternalLink size={14} strokeWidth={1.5} />
          </a>
        )}
      </div>

      <h3 className="text-base font-serif font-bold text-foreground tracking-tight mb-6 leading-snug">
        {item.title}
      </h3>

      <div className="flex flex-col gap-5 flex-1">
        <div className="flex gap-3">
          <div className="flex-shrink-0 mt-0.5">
            <AlertTriangle size={14} className="text-red-400/70" />
          </div>
          <div>
            <p className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-red-400/70 mb-1">
              直面した課題
            </p>
            <p className="text-sm font-sans font-light text-slate-300 leading-relaxed">
              {item.challenge}
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex-shrink-0 mt-0.5">
            <Bot size={14} className="text-violet-400/80" />
          </div>
          <div>
            <p className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-violet-400/80 mb-1">
              AIとの壁打ち
            </p>
            <p className="text-sm font-sans font-light text-slate-300 leading-relaxed">
              {item.approach}
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex-shrink-0 mt-0.5">
            <CheckCircle2 size={14} className="text-emerald-400/80" />
          </div>
          <div>
            <p className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-emerald-400/80 mb-1">
              解決策
            </p>
            <p className="text-sm font-sans font-light text-slate-300 leading-relaxed">
              {item.solution}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between gap-3 flex-wrap">
        <div className="flex flex-wrap gap-2">
          {item.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[9px] font-sans font-bold tracking-widest uppercase text-muted-foreground/50 border border-white/8 px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
        {item.articleUrl && item.articleUrl !== "#" && (
          <a
            href={item.articleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-sans font-bold tracking-[0.15em] uppercase text-muted-foreground/50 hover:text-amber-500 transition-colors flex items-center gap-1 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Qiitaで読む
            <ExternalLink size={10} />
          </a>
        )}
      </div>

      <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
    </motion.article>
  );
}

export function EngineeringApproach() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? portfolioData.engineeringApproach
      : portfolioData.engineeringApproach.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section
      id="engineering"
      className="py-32 px-6 md:px-12 lg:px-24 bg-background border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16"
        >
          <div className="lg:col-span-4">
            <p className="text-sm font-sans tracking-[0.3em] uppercase text-amber-500 mb-4">
              Engineering Approach
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-black text-foreground tracking-tighter leading-none">
              課題解決の<br />カタログ。
            </h2>
          </div>
          <div className="lg:col-span-8 flex flex-col justify-center pt-6 gap-4">
            <p className="text-slate-200 leading-loose text-base md:text-lg font-light font-sans">
              「動いた」で終わらせず、本番環境で直面したインフラ・セキュリティ・UXの
              課題を AIとの壁打ちで突破したプロセスをまとめています。
            </p>
            <p className="text-slate-400 text-sm font-sans font-light">
              各カードの「AIとの壁打ち」が、私の開発スタンスを最も体現している部分です。
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-[10px] font-sans font-bold tracking-[0.15em] uppercase transition-all duration-200 border rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                activeCategory === cat.id
                  ? "bg-amber-500 text-black border-amber-500"
                  : "bg-transparent text-muted-foreground border-white/15 hover:border-white/30 hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
          <span className="ml-auto flex items-center text-[10px] font-sans text-muted-foreground/40 tracking-widest uppercase">
            {filtered.length} items
          </span>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => (
              <EngineeringCard key={item.id} item={item} idx={idx} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <a
            href={portfolioData.profile.qiita}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 border border-white/15 px-8 py-4 text-sm font-sans font-bold tracking-[0.15em] uppercase text-muted-foreground hover:text-amber-500 hover:border-amber-500/40 transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Qiitaで全記事を読む
            <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
