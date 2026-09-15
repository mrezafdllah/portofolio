'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Cloud, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio-data';

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: 'Modern Frontend',
    desc: 'Membangun antarmuka interaktif dan reaktif dengan Next.js, React, Tailwind CSS, dan Framer Motion yang memikat pengguna.',
    accent: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Server,
    title: 'Robust Backend API',
    desc: 'Merancang RESTful API dan arsitektur microservice tangguh menggunakan Python (FastAPI), Node.js, dan optimasi query PostgreSQL.',
    accent: 'from-blue-500 to-violet-500',
  },
  {
    icon: Cloud,
    title: 'Cloud Database & DevOps',
    desc: 'Integrasi cloud database terdistribusi (Supabase, Redis), containerization Docker, serta continuous deployment ke platform modern (Vercel).',
    accent: 'from-violet-500 to-pink-500',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 font-mono"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>TENTANG SAYA</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Menciptakan Solusi Digital dengan Ketepatan Rekayasa
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
          >
            Dedikasi tinggi terhadap penulisan kode bersih, struktur data yang terukur, dan pengalaman pengguna yang luar biasa.
          </motion.p>
        </div>

        {/* Content Grid: Bio & Stat Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Detailed Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden"
          >
            {/* Subtle glow border */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span>Latar Belakang & Filosofi Rekayasa</span>
            </h3>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Saya adalah Software Engineer yang berfokus pada ekosistem fullstack web dan backend engineering. Saya memiliki ketertarikan mendalam dalam memecahkan masalah kompleks melalui desain sistem yang elegan, efisien, dan mudah dipelihara.
              </p>
              <p>
                Dalam setiap proyek yang saya kembangkan, saya memprioritaskan performa rendering, keamanan data, arsitektur database relasional, serta integrasi layanan cloud terkini seperti <strong>Supabase</strong> dan <strong>Vercel</strong>.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm italic border-l-2 border-cyan-500 pl-3">
                &ldquo;Kode yang baik bukan sekadar berjalan tanpa bug, melainkan mudah dipahami, skalabel saat pengguna bertambah, dan menyenangkan untuk dikembangkan di masa depan.&rdquo;
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-800">
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {PERSONAL_INFO.experienceYears}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Tahun Pengalaman</div>
              </div>

              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">
                  {PERSONAL_INFO.completedProjects}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Proyek Selesai</div>
              </div>

              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-500">
                  {PERSONAL_INFO.techStackCount}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Teknologi Utama</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Focus Areas */}
          <div className="lg:col-span-5 space-y-4">
            {HIGHLIGHTS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="glass-card p-5 sm:p-6 rounded-2xl group hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${item.accent} text-white shadow-lg shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
