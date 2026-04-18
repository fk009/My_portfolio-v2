"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Briefcase, Cpu, BarChart2, Mail } from "lucide-react";

export function Header() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "about", label: "About", icon: <User size={15} /> },
    { id: "works", label: "Works", icon: <Briefcase size={15} /> },
    { id: "engineering", label: "Engineering", icon: <Cpu size={15} /> },
    { id: "skills", label: "Skills", icon: <BarChart2 size={15} /> },
    { id: "contact", label: "Contact", icon: <Mail size={15} /> },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          type="button"
          aria-label="ページ先頭へスクロール"
          className="font-serif font-black text-xl text-foreground cursor-pointer uppercase tracking-widest rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Portfolio.
        </button>

        <nav className="flex gap-1 text-[10px] font-sans tracking-[0.15em] font-bold text-muted-foreground uppercase">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-label={item.label}
              onClick={() => scrollTo(item.id)}
              className="flex items-center gap-1.5 px-3 py-2 hover:text-amber-500 hover:bg-amber-500/5 transition-all duration-200 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span aria-hidden="true" className="text-current opacity-60">
                {item.icon}
              </span>
              <span className="hidden sm:inline">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
