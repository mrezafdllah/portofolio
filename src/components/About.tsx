'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Briefcase,
  Trophy,
  Award,
  Sparkles,
  Code2,
  Server,
  Layers,
  Camera,
  MapPin,
} from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio-data';

const FOCUS_AREAS = [
  {
    icon: Code2,
    title: 'Pengembangan Web & Framework',
    desc: 'Pengembangan aplikasi web tangguh dan interaktif berbasis Laravel (PHP), Next.js, dan Tailwind CSS dengan arsitektur modular.',
    accent: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Layers,
    title: 'Sistem Kota Cerdas & IoT',
    desc: 'Perancangan basis data, integrasi mikrokontroler sensor IoT (ESP32, DHT22), dan pemodelan proses bisnis BPM/ERP untuk kebutuhan smart city.',
    accent: 'from-blue-500 to-violet-500',
  },
  {
    icon: Camera,
    title: 'Desain Visual & Multimedia Kreatif',
    desc: 'Produksi konten media kreatif profesional, desain grafis (Photoshop, Illustrator), serta editing video promosi dan dokumenter (Premiere Pro, After Effects).',
    accent: 'from-violet-500 to-pink-500',
  },
];

const ACHIEVEMENTS = [
  'IPK 3.91 / 4.00 - Politeknik Negeri Indramayu (D4 Sistem Informasi Kota Cerdas)',
  'Penghargaan Aang Yayu Gatsu 2022',
  'Juara Harapan 3 Lomba Matematika Tingkat Provinsi',
  'Kontributor Proyek Riset Dosen: Smart Waste Disposal Detection (IoT)',
  'Lulus Uji Kompetensi Kejuruan Produksi Video Dokumenter Kewirausahaan',
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
            <span>PROFIL & LATAR BELAKANG</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Memadukan Teknologi Web, IoT & Kreativitas Visual
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
          >
            {PERSONAL_INFO.tagline}
          </motion.p>
        </div>

        {/* Content Grid: Bio & Focus Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Column: Detailed Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>Tentang {PERSONAL_INFO.name}</span>
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>{PERSONAL_INFO.bio}</p>
                <p>
                  Memiliki latar belakang pendidikan formal di bidang <strong>Multimedia (SMKN 1 Indramayu)</strong> dan melanjutkan studi pada <strong>D4 Sistem Informasi Kota Cerdas (Politeknik Negeri Indramayu)</strong> dengan capaian akademik luar biasa (IPK 3.91).
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 pt-1">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-800">
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {PERSONAL_INFO.gpa}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">IPK Akademik</div>
              </div>

              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">
                  {PERSONAL_INFO.completedProjects}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Proyek & Riset</div>
              </div>

              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-500">
                  {PERSONAL_INFO.techStackCount}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Keahlian & Tools</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Focus Areas */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            {FOCUS_AREAS.map((item, idx) => {
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

        {/* Education, Experience & Achievements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 rounded-2xl space-y-4"
          >
            <div className="flex items-center gap-3 text-cyan-400">
              <GraduationCap className="w-5 h-5" />
              <h4 className="text-base font-bold text-white">Pendidikan Formal</h4>
            </div>
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="border-l-2 border-cyan-500/50 pl-3">
                <div className="font-bold text-white">Politeknik Negeri Indramayu</div>
                <div className="text-cyan-300">D4 Sistem Informasi Kota Cerdas</div>
                <div className="text-slate-400 text-xs">Sep 2023 - Okt 2027 (Expected)</div>
                <span className="inline-block mt-1 px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-mono">
                  IPK: 3.91 / 4.00
                </span>
              </div>
              <div className="border-l-2 border-slate-700 pl-3">
                <div className="font-bold text-white">SMKN 1 Indramayu</div>
                <div className="text-slate-300">Multimedia (MM)</div>
                <div className="text-slate-400 text-xs">Jul 2020 - Jun 2023</div>
              </div>
            </div>
          </motion.div>

          {/* Organizational & Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6 rounded-2xl space-y-4"
          >
            <div className="flex items-center gap-3 text-violet-400">
              <Briefcase className="w-5 h-5" />
              <h4 className="text-base font-bold text-white">Pengalaman & Organisasi</h4>
            </div>
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="border-l-2 border-violet-500/50 pl-3">
                <div className="font-bold text-white">Komunitas Jurnalistik Pecinta Karya</div>
                <div className="text-violet-300">Kepala Divisi Hubungan Masyarakat</div>
                <div className="text-slate-400 text-xs">Jun 2024 - Jun 2025</div>
              </div>
              <div className="border-l-2 border-slate-700 pl-3">
                <div className="font-bold text-white">WTEAM of Pasekan</div>
                <div className="text-slate-300">Photography & Videography Specialist</div>
                <div className="text-slate-400 text-xs">Agu 2020 - Sekarang</div>
              </div>
            </div>
          </motion.div>

          {/* Achievements Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-6 rounded-2xl space-y-4"
          >
            <div className="flex items-center gap-3 text-amber-400">
              <Trophy className="w-5 h-5" />
              <h4 className="text-base font-bold text-white">Prestasi & Penghargaan</h4>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              {ACHIEVEMENTS.map((ach) => (
                <li key={ach} className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">•</span>
                  <span className="leading-relaxed">{ach}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
