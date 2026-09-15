'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github, Linkedin, Sparkles, Terminal, Code2, Database } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio-data';

export default function Hero() {
  const scrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 z-10"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-800/80 border border-cyan-500/30 text-xs sm:text-sm font-medium text-slate-300 mb-8 backdrop-blur-md shadow-lg shadow-cyan-950/30"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-slate-200">{PERSONAL_INFO.availability}</span>
          <span className="text-cyan-400 font-mono text-xs hidden sm:inline">• Open to Collaborate</span>
        </motion.div>

        {/* Main Title & Gradient Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.15]">
            Halo, Saya{' '}
            <span className="text-gradient-cyan-violet">
              {PERSONAL_INFO.name}
            </span>
          </h1>

          <div className="flex items-center justify-center gap-2 text-lg sm:text-2xl font-semibold text-slate-300">
            <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 inline-block" />
            <span className="text-cyan-300">{PERSONAL_INFO.role}</span>
          </div>
        </motion.div>

        {/* Short Bio Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-slate-400 max-w-2xl leading-relaxed"
        >
          {PERSONAL_INFO.tagline} Berfokus pada pengembangan arsitektur cloud, performa tinggi, dan pengalaman antarmuka modern yang memikat.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA: Lihat Proyek */}
          <button
            onClick={() => scrollTo('projects')}
            className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] w-full sm:w-auto"
          >
            <span>Lihat Proyek Unggulan</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary CTA: Hubungi Saya */}
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/50 backdrop-blur-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] w-full sm:w-auto shadow-md"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Hubungi Saya</span>
          </button>
        </motion.div>

        {/* Quick Social Links & Tech Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 border-t border-slate-800/60 w-full max-w-xl"
        >
          <div className="flex items-center gap-4 text-slate-400">
            <span className="text-xs uppercase tracking-wider font-mono text-slate-500">Connect:</span>
            <a
              href={PERSONAL_INFO.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 transition-all hover:scale-110"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:border-blue-500/50 text-slate-300 hover:text-blue-400 transition-all hover:scale-110"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socialLinks.email}
              aria-label="Email Me"
              className="p-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:border-violet-500/50 text-slate-300 hover:text-violet-400 transition-all hover:scale-110"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="hidden sm:block h-4 w-px bg-slate-800" />

          {/* Quick Tech Highlights */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="px-2.5 py-1 rounded-md bg-slate-800/60 border border-slate-700/40 text-cyan-300">
              Next.js
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-800/60 border border-slate-700/40 text-blue-300">
              TypeScript
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-800/60 border border-slate-700/40 text-emerald-300">
              Supabase
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
