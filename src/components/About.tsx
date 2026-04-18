"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Bot } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const stances = [
  {
    icon: Zap,
    title: "自走力 & キャッチアップ力",
    subtitle: "Autonomy & Catch-up",
    description:
      "未知の課題に直面したとき、公式ドキュメントとAIを技術顧問として駆使し、自力で突破口を切り開きます。「教わるのを待つ」ではなく「自走して完遂する」エンジニアです。",
    highlight: "AIを道具として使いこなし、ゼロから技術をキャッチアップ。",
    accentColor: "text-blue-400",
    borderColor: "border-blue-500/20",
    bgColor: "bg-blue-500/5",
    glowColor: "group-hover:shadow-blue-900/20",
  },
  {
    icon: Shield,
    title: "完遂力",
    subtitle: "Follow-through",
    description:
      "「とりあえず動く」状態を本番レベルに引き上げることに価値があると考えています。タイムアウト・セキュリティホール・コールドスタードなど、泥臭い問題を一つひとつ解決してリリースまで完遂します。",
    highlight: "動いた、ではなく「安定稼働した」まで責任を持つ。",
    accentColor: "text-amber-400",
    borderColor: "border-amber-500/20",
    bgColor: "bg-amber-500/5",
    glowColor: "group-hover:shadow-amber-900/20",
  },
  {
    icon: Bot,
    title: "AI協働開発",
    subtitle: "AI-Paired Engineering",
    description:
      "AIは「答えを出す機械」ではなく、「技術的な壁打ち相手」として活用します。設計の選択肢を出させ、トレードオフを議論し、最終判断は自分で行う。AIを使いこなす、次世代の開発スタイルを体現します。",
    highlight: "AIとの協働で、開発スピードと実装品質を同時に高める。",
    accentColor: "text-violet-400",
    borderColor: "border-violet-500/20",
    bgColor: "bg-violet-500/5",
    glowColor: "group-hover:shadow-violet-900/20",
  },
];

export function About() {
  const { description, qualifications, github, qiita } = portfolioData.profile;

  return (
    <section id="about" className="py-32 px-6 bg-background relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-24"
        >
          <div className="lg:col-span-4">
            <p className="text-sm font-sans tracking-[0.3em] uppercase text-amber-500 mb-4">
              Mindset
            </p>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-foreground tracking-tighter">
              About Me.
            </h2>
          </div>
          <div className="lg:col-span-8 flex items-center pt-6">
            <p className="text-slate-200 leading-loose text-lg md:text-xl font-light font-sans">
              {description}
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {stances.map((stance, idx) => {
            const Icon = stance.icon;
            return (
              <motion.div
                key={stance.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative flex flex-col p-8 border ${stance.borderColor} ${stance.bgColor} transition-all duration-500 hover:shadow-2xl ${stance.glowColor}`}
              >
                <div className={`mb-6 ${stance.accentColor} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon size={36} strokeWidth={1.5} />
                </div>

                <div className="mb-4">
                  <p className={`text-[10px] font-sans font-bold tracking-[0.25em] uppercase ${stance.accentColor} mb-1`}>
                    {stance.subtitle}
                  </p>
                  <h3 className="text-xl font-serif font-bold text-foreground tracking-tight">
                    {stance.title}
                  </h3>
                </div>

                <p className="text-slate-300 font-sans font-light text-sm leading-relaxed mb-6 flex-1">
                  {stance.description}
                </p>

                <div className={`pt-5 border-t ${stance.borderColor}`}>
                  <p className={`text-sm font-sans font-semibold ${stance.accentColor} leading-snug`}>
                    {stance.highlight}
                  </p>
                </div>

                <div
                  className={`absolute left-0 top-8 bottom-8 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    stance.accentColor
                      .replace("text-", "bg-")
                      .replace("-400", "-500")
                  }`}
                />
              </motion.div>
            );
          })}
        </div>

        <div className="w-full h-px bg-white/10 mb-24" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <p className="text-sm font-sans tracking-[0.3em] uppercase text-amber-500 mb-6">
              Qualification
            </p>
            <ul className="space-y-3">
              {qualifications.map((q) => (
                <li key={q} className="flex items-start gap-4 text-slate-200/90 font-sans text-[15px] font-normal">
                  <span className="text-amber-400/80 mt-0.5">—</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-sans tracking-[0.3em] uppercase text-amber-500 mb-6">
              Links
            </p>
            <div className="flex flex-col gap-3">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-[15px] font-sans text-slate-200/90 hover:text-amber-300 transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <div className="w-4 h-px bg-current" />
                  GitHub
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-500">→</span>
                </a>
              )}
              {qiita && (
                <a
                  href={qiita}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-[15px] font-sans text-slate-200/90 hover:text-amber-300 transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <div className="w-4 h-px bg-current" />
                  Qiita（技術記事）
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-500">→</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
