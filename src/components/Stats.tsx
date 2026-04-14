// ============================================================
// Stats.tsx - 実績・数値を視覚的に表示するセクション
//
// 「通常の作業時間」と「自動化後の時間」を並べて表示し、
// 自動化によってどれだけ工数を削減できたかをアピールします。
//
// グリッドの gap-px + bg-white/10 のテクニックで
// 各ボックスの間に細い仕切り線を表現しています。
// ============================================================
"use client";

import React from "react";

// framer-motion のアニメーションコンポーネント
import { motion } from "framer-motion";

export function Stats() {
  return (
    // overflow-hidden → 背景テクスチャがはみ出ないようにする
    <section className="py-32 bg-background border-t border-white/5 relative overflow-hidden">

      {/* ── 背景テクスチャ ──────────────────────────── */}
      {/* 外部の透明テクスチャ画像を背景に敷いてノイズ感を演出 */}
      {/* opacity-[0.03] → ほぼ見えないくらい薄くする */}
      {/* pointer-events-none → クリックなど操作を受け付けない */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] pointer-events-none" />
      
      {/* メインコンテンツ（テクスチャより前面に表示） */}
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* ── セクションタイトル ───────────────────── */}
        <div className="text-center mb-24">
          <h2 className="text-sm font-sans tracking-[0.3em] uppercase text-amber-500 mb-4">
            Impact
          </h2>
          {/* <br/> で改行 */}
          <p className="text-3xl md:text-5xl text-foreground font-serif font-black tracking-tighter max-w-2xl mx-auto leading-tight">
            これまでの主な実績と<br/>効率化の軌跡
          </p>
        </div>
        
        {/* ── 数値カードグリッド ───────────────────── */}
        {/* gap-px + bg-white/10 のテクニック:
            親要素を bg-white/10（薄い白）で塗りつぶし、
            子要素を bg-background で塗りつぶすことで、
            1px の隙間が境界線として見える */}
        <div className="grid md:grid-cols-2 gap-px bg-white/10">
          
          {/* ── カード1: 通常作業時間 ── */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}    // 初期: 透明 + 少し下
            whileInView={{ opacity: 1, y: 0 }}  // 画面に入ったら: 不透明 + 正位置
            viewport={{ once: true }}           // 一度だけ発動
            className="bg-background p-16 flex flex-col items-center justify-center text-center"
          >
            {/* ラベル */}
            <p className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">通常の作業時間</p>
            {/* 大きな数字（薄い色で「before」感を演出） */}
            <div className="text-7xl md:text-8xl font-serif font-light text-muted-foreground/30 mb-2">
              120<span className="text-2xl md:text-3xl ml-2 font-sans font-light">min</span>
            </div>
          </motion.div>

          {/* ── カード2: 自動化後の時間（強調） ── */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}  // 少し遅らせて順番に表示
            className="bg-background p-16 flex flex-col items-center justify-center text-center relative overflow-hidden group"
          >
            {/* ラベル: ホバーで上にわずかに動く */}
            <p className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-amber-500 mb-6 relative z-10 transition-transform group-hover:-translate-y-1">自動化による短縮</p>
            {/* 大きな数字（こちらは明るい色で「after」感を強調） */}
            <div className="text-7xl md:text-8xl font-serif font-black text-foreground mb-2 relative z-10">
              14<span className="text-2xl md:text-3xl ml-2 font-sans font-light text-muted-foreground">min</span>
            </div>
          </motion.div>

        </div>
        
        {/* ── まとめ文 ─────────────────────────────── */}
        <div className="mt-20 text-center">
          <p className="text-lg md:text-xl text-muted-foreground font-sans font-light">
            ルーチンワークから{" "}
            {/* border-b → テキストに下線を付けるデザイン */}
            <span className="font-semibold text-foreground border-b border-foreground pb-1">1時間以上</span>
            {" "}の時間圧縮に成功
          </p>
        </div>

      </div>
    </section>
  );
}
