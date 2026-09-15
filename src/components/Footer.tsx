'use client';

import React from 'react';
import { ArrowUp, Heart, Sparkles, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio-data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-md pt-12 pb-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="text-center md:text-left space-y-1">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="text-base font-extrabold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-[10px] font-mono text-cyan-300">
              v2.0
            </span>
          </div>
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Hak cipta dilindungi undang-undang.
          </p>
        </div>

        {/* Built With Tech Badge */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <span>Dibuat menggunakan</span>
          <span className="text-cyan-400 font-semibold">Next.js</span>
          <span>•</span>
          <span className="text-blue-400 font-semibold">Tailwind CSS</span>
          <span>•</span>
          <span className="text-emerald-400 font-semibold">Supabase</span>
        </div>

        {/* Back to Top Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 text-xs font-semibold text-slate-300 hover:text-white transition-all hover:scale-105 shadow-md group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
