"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { GitBranch } from "lucide-react";

export function Contact() {
  const { github } = portfolioData.profile;

  return (
    <section
      id="contact"
      className="py-32 px-6 bg-background border-t border-white/5 relative"
    >
      <div className="absolute inset-0 bg-background" />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <h2 className="text-6xl md:text-8xl font-serif font-black text-foreground tracking-tighter mb-8 max-w-2xl mx-auto leading-[0.9]">
            Let&apos;s
            <br />
            Connect.
          </h2>

          <div className="w-24 h-[1px] bg-amber-500 mx-auto mb-8" />

          <p className="text-muted-foreground mb-16 text-lg md:text-xl font-light font-sans leading-relaxed max-w-xl mx-auto">
            ご覧いただきありがとうございます。
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-4 border border-white/20 px-8 py-5 text-sm font-sans tracking-[0.2em] font-medium uppercase text-foreground hover:bg-white hover:text-black transition-all duration-500 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <GitBranch
                  size={20}
                  className="group-hover:-rotate-12 transition-transform duration-500"
                />
                <span>GitHub Profile</span>
              </a>
            )}
          </div>
        </motion.div>

        <div className="mt-32 text-muted-foreground/60 text-xs font-sans tracking-widest uppercase text-center">
          &copy; {new Date().getFullYear()} {portfolioData.profile.name}. All
          rights reserved.
          <div className="mt-4 text-[10px] tracking-[0.18em] uppercase">
            <Link
              href="/privacy-policy"
              className="hover:text-foreground transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              プライバシーポリシー
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
