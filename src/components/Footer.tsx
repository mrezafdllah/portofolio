'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio-data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative z-10 border-t border-zinc-800/80 bg-zinc-950/60 backdrop-blur-md py-8 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <div className="text-center sm:text-left">
          <span className="text-zinc-300 font-semibold">{PERSONAL_INFO.name}</span>
          <span className="mx-2">•</span>
          <span>Sistem Informasi Kota Cerdas POLINDRA</span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-all text-xs font-mono group"
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
