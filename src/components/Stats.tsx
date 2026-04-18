"use client";

import React from "react";
import { motion } from "framer-motion";

export function Stats() {
  return (
    <section className="py-32 bg-background border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-sm font-sans tracking-[0.3em] uppercase text-amber-500 mb-4">
            Impact
          </h2>
          <p className="text-3xl md:text-5xl text-foreground font-serif font-black tracking-tighter max-w-2xl mx-auto leading-tight">
            これまでの主な実績と<br />効率化の軌跡
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background p-16 flex flex-col items-center justify-center text-center"
          >
            <p className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">通常の作業時間</p>
            <div className="text-7xl md:text-8xl font-serif font-light text-muted-foreground/30 mb-2">
              120<span className="text-2xl md:text-3xl ml-2 font-sans font-light">min</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-background p-16 flex flex-col items-center justify-center text-center relative overflow-hidden group"
          >
            <p className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-amber-500 mb-6 relative z-10 transition-transform group-hover:-translate-y-1">自動化による短縮</p>
            <div className="text-7xl md:text-8xl font-serif font-black text-foreground mb-2 relative z-10">
              14<span className="text-2xl md:text-3xl ml-2 font-sans font-light text-muted-foreground">min</span>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-lg md:text-xl text-muted-foreground font-sans font-light">
            ルーチンワークから{" "}
            <span className="font-semibold text-foreground border-b border-foreground pb-1">1時間以上</span>
            {" "}の時間圧縮に成功
          </p>
        </div>
      </div>
    </section>
  );
}
