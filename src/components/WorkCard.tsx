"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { PlayCircle, ArrowUpRight, Globe, BookOpen, GitBranch, HelpCircle } from "lucide-react";
import type { WorkItem } from "@/data/portfolio";
import { withBasePath } from "@/lib/withBasePath";

type WorkProps = {
  work: WorkItem;
  index: number;
};

type TabType = "overview" | "architecture" | "why";

export function WorkCard({ work, index }: WorkProps) {
  const isEven = index % 2 === 0;

  const [activeTab, setActiveTab] = useState<TabType>("overview");

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const enableParallax = work.disableParallax !== true;
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    enableParallax ? ["-8%", "8%"] : ["0%", "0%"],
  );
  const hasArchitecture = work.architectureImageUrl.trim().length > 0;
  const imageFit = work.imageFit ?? "cover";
  const imagePosition = work.imagePosition ?? "center";
  const imageFitClass = imageFit === "contain" ? "object-contain" : "object-cover";

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: "overview", label: "Overview", icon: <GitBranch size={13} /> },
    ...(hasArchitecture
      ? [{ id: "architecture" as TabType, label: "Architecture", icon: <HelpCircle size={13} /> }]
      : []),
    ...(work.techReason.length > 0
      ? [{ id: "why" as TabType, label: "Why?", icon: <HelpCircle size={13} /> }]
      : []),
  ];

  return (
    <div
      id={`work-${work.id}`}
      ref={containerRef}
      className="relative min-h-[90vh] py-24 px-6 md:px-12 lg:px-24 flex items-center border-b border-white/5"
    >
      <div
        className={`max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row items-stretch lg:items-start gap-16 lg:gap-24 relative z-10 ${
          isEven ? "" : "lg:flex-row-reverse"
        }`}
      >
        <div className="lg:w-7/12 relative aspect-[4/3] overflow-hidden">
          <motion.div
            style={{ y: imageY }}
            className={`absolute inset-0 w-full ${enableParallax ? "h-[120%]" : "h-full"}`}
          >
            {work.imageUrl ? (
              <motion.div
                initial={{ filter: "grayscale(100%)" }}
                whileInView={{ filter: "grayscale(0%)" }}
                viewport={{ once: false, margin: "-25% 0px -25% 0px" }}
                transition={{ duration: 1 }}
                className={`w-full h-full relative ${imageFit === "contain" ? "bg-white/[0.02]" : ""}`}
              >
                <Image
                  src={withBasePath(work.imageUrl)}
                  alt={work.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  loading={work.id === "sidebar-notes" ? "eager" : undefined}
                  className={imageFitClass}
                  style={{ objectPosition: imagePosition }}
                />
              </motion.div>
            ) : (
              <div className="w-full h-full bg-white/5 flex items-center justify-center">
                <span className="text-white/20 font-sans tracking-widest uppercase text-sm">
                  No Visual
                </span>
              </div>
            )}
          </motion.div>
          <div className="absolute inset-0 bg-background/20 mix-blend-overlay pointer-events-none" />

          {work.catchcopy && (
            <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-4 py-2 border border-white/10">
              <p className="text-xs font-sans text-muted-foreground tracking-wide">
                {work.catchcopy}
              </p>
            </div>
          )}
        </div>

        <div className="lg:w-5/12 flex flex-col justify-center py-12">
          <motion.div
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-wrap gap-3 mb-6">
              {work.technologies.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-amber-500"
                >
                  {tech}
                </span>
              ))}
              {work.technologies.length > 6 && (
                <span className="text-[10px] font-sans text-muted-foreground/50">
                  +{work.technologies.length - 6}
                </span>
              )}
            </div>

            <h3 className="text-5xl lg:text-7xl font-serif font-black text-foreground mb-4 tracking-tighter leading-none">
              {work.title}
            </h3>

            <div className="flex gap-0 mb-8 border-b border-white/10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-4 py-2.5 text-[10px] font-sans font-bold tracking-[0.2em] uppercase transition-all duration-200 border-b-2 -mb-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    activeTab === tab.id
                      ? "border-amber-500 text-amber-500"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {activeTab === "overview" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <p className="text-lg text-slate-200 font-sans font-light leading-relaxed">
                  {work.summary}
                </p>

                {work.challenge && (
                  <div className="relative pl-5 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[2px] before:bg-amber-500/40">
                    <h4 className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-foreground mb-2">
                      Solved Problem
                    </h4>
                    <p className="text-slate-300 font-sans font-light text-sm leading-relaxed">
                      {work.challenge}
                    </p>
                  </div>
                )}

                <div className="relative pl-5 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[2px] before:bg-amber-500/40">
                  <h4 className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-foreground mb-2">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {work.features.slice(0, 4).map((feature, i) => (
                      <li key={i} className="text-slate-300 font-sans font-light text-sm flex items-start gap-2">
                        <span className="text-amber-500/60 mt-1 text-xs">▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {work.achievements && (
                  <div className="p-4 bg-amber-500/5 border border-amber-500/15">
                    <p className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-amber-500 mb-1">
                      Outcome
                    </p>
                    <p className="text-slate-200 text-sm font-sans font-light leading-relaxed">
                      {work.achievements}
                    </p>
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === "architecture" && hasArchitecture && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {work.architectureImageUrl ? (
                  <div className="relative aspect-[16/9] w-full overflow-hidden border border-white/10">
                    <Image
                      src={withBasePath(work.architectureImageUrl)}
                      alt={`${work.title} アーキテクチャ図`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="aspect-[16/9] w-full border-2 border-dashed border-white/15 flex flex-col items-center justify-center gap-4 bg-white/[0.02]">
                    <div className="w-16 h-16 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center">
                      <GitBranch size={24} className="text-white/20" />
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-white/20 mb-1">
                        Architecture Diagram
                      </p>
                      <p className="text-[11px] font-sans text-white/15">
                        画像を /public/img/ に配置後、<br />
                        portfolio.ts の architectureImageUrl を更新
                      </p>
                    </div>
                  </div>
                )}
                <p className="mt-4 text-xs font-sans text-muted-foreground/60 leading-relaxed">
                  システム全体のアーキテクチャ構成図。コンテナ分離構成・データフロー・インフラの相関を可視化しています。
                </p>
              </motion.div>
            )}

            {activeTab === "why" && work.techReason.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-5"
              >
                <p className="text-xs font-sans text-muted-foreground leading-relaxed">
                  技術選定には必ずトレードオフがあります。採用した理由と
                  検討した選択肢をまとめました。
                </p>
                {work.techReason.map((item, i) => (
                  <div
                    key={i}
                    className="relative pl-5 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[2px] before:bg-violet-500/50"
                  >
                    <p className="text-xs font-sans font-bold tracking-wide text-violet-400 mb-1.5">
                      {item.tech}
                    </p>
                    <p className="text-sm font-sans font-light text-slate-300 leading-relaxed">
                      {item.reason}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}

            <div className="mt-10 flex items-center flex-wrap gap-6">
              {work.siteUrl && (
                <a
                  href={work.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase font-bold text-foreground hover:text-amber-500 transition-colors group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Globe size={18} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                  Live Site
                </a>
              )}
              {work.articleUrl && (
                <a
                  href={work.articleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase font-bold text-foreground hover:text-amber-500 transition-colors group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <BookOpen size={18} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                  Read Article
                </a>
              )}
              {work.videoUrl && (
                <a
                  href={work.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase font-bold text-foreground hover:text-amber-500 transition-colors group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <PlayCircle size={18} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                  Watch Demo
                </a>
              )}
              {work.githubUrl && (
                <a
                  href={work.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase font-bold text-foreground hover:text-amber-500 transition-colors group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <ArrowUpRight size={18} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                  View Source
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-serif font-black text-white/[0.02] whitespace-nowrap pointer-events-none z-0">
        {index + 1 < 10 ? `0${index + 1}` : index + 1}
      </h2>
    </div>
  );
}
