// ============================================================
// Works.tsx - 作品一覧セクション
//
// 役割:
// 1. セクションのヘッダー（見出しと説明文）を表示する
// 2. portfolioData.works の配列を順番に WorkCard へ渡してレンダリングする
// ============================================================
"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { WorkCard } from "./WorkCard";

export function Works() {
  return (
    <section id="works" className="relative bg-background dark">

      {/* ── セクションヘッダー ────────────────────────────────── */}
      <div className="pt-32 pb-16 px-6 md:px-12 lg:px-24 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto w-full">
          <p className="text-sm font-sans tracking-[0.3em] uppercase text-amber-500 mb-6">
            Projects
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-foreground tracking-tighter mb-8 leading-none">
            Selected<br />Works.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl font-light font-sans leading-relaxed">
            チュートリアルレベルにとどまらず、実運用を見据えたアーキテクチャ設計と
            課題解決を意識して開発した作品を紹介します。
          </p>
        </div>
      </div>

      {/* ── 作品カード一覧 ──────────────────────────────────── */}
      <div className="relative">
        {portfolioData.works.map((work, index) => (
          <WorkCard key={work.id} work={work} index={index} />
        ))}
      </div>

    </section>
  );
}
