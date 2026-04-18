"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-6 md:px-12 lg:px-24 bg-background border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-20"
        >
          <div className="lg:col-span-4">
            <p className="text-sm font-sans tracking-[0.3em] uppercase text-amber-500 mb-4">
              Technical Skills
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-black text-foreground tracking-tighter leading-none">
              Skills.
            </h2>
          </div>
          <div className="lg:col-span-8 flex items-center pt-6">
            <p className="text-slate-200 leading-loose text-base md:text-lg font-normal font-sans">
              ポートフォリオ開発を通じて実際に触れた技術と、その活用内容をまとめました。未知の技術領域であっても、公式ドキュメントやAIの支援を頼りに必要な知識を自らキャッチアップし、「動く形」へと組み上げるプロセスを経験しています。
            </p>
          </div>
        </motion.div>

        <div className="space-y-6">
          {portfolioData.skills.map((skill, idx) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group border border-white/8 hover:border-white/15 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-400 p-6"
            >
              <div className="grid md:grid-cols-12 gap-4 md:gap-8 items-start">
                <div className="md:col-span-3">
                  <h3 className="text-base font-serif font-bold text-foreground mb-1 tracking-tight">
                    {skill.category}
                  </h3>
                  <span className="text-[11px] font-sans font-semibold tracking-[0.14em] uppercase text-amber-400">
                    {skill.level}
                  </span>
                </div>

                <div className="md:col-span-6">
                  <p className="text-[15px] font-sans font-normal text-slate-200/95 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="md:col-span-3 flex flex-wrap gap-x-3 gap-y-1.5 md:justify-end">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="text-[10px] font-sans font-semibold tracking-[0.14em] uppercase text-slate-200/85 border border-white/15 bg-white/[0.03] px-2.5 py-0.5 group-hover:border-white/30 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
