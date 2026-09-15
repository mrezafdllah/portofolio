'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github, Linkedin, MessageSquare, Terminal, Copy, Check, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio-data';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const scrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 z-10"
    >
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-white/10 text-xs font-medium text-zinc-300 mb-6 backdrop-blur-md shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>{PERSONAL_INFO.availability}</span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-400 font-mono text-[11px]">POLINDRA</span>
        </motion.div>

        {/* Name & Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-3"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Muhammad <span className="text-gradient-cyan">Reza Fadillah</span>
          </h1>

          <p className="text-base sm:text-xl font-medium text-zinc-300 flex items-center justify-center gap-2">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Smart City & Web Developer | Creative Technologist</span>
          </p>
        </motion.div>

        {/* Short Clean Bio */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed"
        >
          Mahasiswa D4 Sistem Informasi Kota Cerdas di <strong>Politeknik Negeri Indramayu (IPK 3.91)</strong>. Berfokus pada perancangan aplikasi web (Laravel & Next.js), integrasi sistem IoT, dan media kreatif.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <button
            onClick={() => scrollTo('projects')}
            className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-zinc-950 bg-white hover:bg-zinc-200 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto shadow-sm"
          >
            <span>Lihat Karya & Proyek</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
          >
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span>Hubungi Saya</span>
          </button>

          {/* Interactive Copy Email */}
          <button
            onClick={copyEmail}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-mono text-zinc-400 hover:text-white bg-zinc-950/60 hover:bg-zinc-900 border border-white/5 hover:border-white/10 transition-all active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400">Email Tersalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-zinc-500" />
                <span>mreza.fadhilah88@gmail.com</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Social Icons & Quick Tech Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-500 font-mono"
        >
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-cyan-400 border border-zinc-800 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-emerald-400 border border-zinc-800 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <span className="hidden sm:inline text-zinc-800">|</span>

          {/* Tech stack highlights */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            <span className="px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-[11px]">
              Laravel (PHP)
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-[11px]">
              Next.js
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-[11px]">
              IoT ESP32
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-[11px]">
              Tailwind CSS
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
