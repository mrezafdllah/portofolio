'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Briefcase,
  Trophy,
  Sparkles,
  Layers,
  MapPin,
  Award,
  ExternalLink,
} from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio-data';

export default function About() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-2 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-[11px] font-mono font-medium text-cyan-400"
          >
            <Sparkles className="w-3 h-3" />
            <span>TENTANG REZA</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Latar Belakang & Perjalanan Rekayasa
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-zinc-400 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed"
          >
            Menghubungkan analisis sistem informasi, pemrograman web, dan multimedia kreatif.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Tile 1: Main Story (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-7 modern-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Profil Singkat
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-zinc-400">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                Menghadirkan Solusi Digital yang Bermanfaat & Fungsional
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                <p>
                  Saya adalah mahasiswa <strong>Sistem Informasi Kota Cerdas</strong> di Politeknik Negeri Indramayu dengan fondasi kuat dalam rekayasa aplikasi web, sistem basis data, dan konten multimedia visual.
                </p>
                <p>
                  Berpengalaman dalam pengembangan sistem informasi terapan seperti <strong>Sistem Pemetaan Donor Darah</strong> berbasis Web GIS, <strong>Platform Rekrutmen Kotak Pena</strong>, serta aplikasi manajemen operasional berbasis <strong>Laravel</strong>.
                </p>
              </div>
            </div>

            {/* Metrics Footer */}
            <div className="grid grid-cols-3 gap-3 pt-5 mt-6 border-t border-zinc-800/80 text-center">
              <div>
                <div className="text-xl sm:text-2xl font-black text-white">{PERSONAL_INFO.gpa}</div>
                <div className="text-[11px] text-zinc-400 font-mono">IPK POLINDRA</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-cyan-400">{PERSONAL_INFO.completedProjects}</div>
                <div className="text-[11px] text-zinc-400 font-mono">Proyek & Riset</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-indigo-400">15+</div>
                <div className="text-[11px] text-zinc-400 font-mono">Stack & Tools</div>
              </div>
            </div>
          </motion.div>

          {/* Tile 2: Academic Excellence Highlight (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="md:col-span-5 modern-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-zinc-900/90 to-zinc-950"
          >
            <div>
              <div className="flex items-center gap-2 text-cyan-400 mb-4">
                <GraduationCap className="w-4 h-4" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
                  Pendidikan Formal
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-white/5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">POLINDRA</span>
                    <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-mono font-bold">
                      IPK 3.91
                    </span>
                  </div>
                  <div className="text-zinc-300 font-medium text-xs mt-0.5">
                    D4 Sistem Informasi Kota Cerdas
                  </div>
                  <div className="text-zinc-400 text-[11px] mt-1">2023 - 2027 (Expected)</div>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-white/5">
                  <div className="font-bold text-white">SMKN 1 Indramayu</div>
                  <div className="text-zinc-300 text-xs">Multimedia (MM)</div>
                  <div className="text-zinc-400 text-[11px] mt-1">2020 - 2023</div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-800 text-[11px] text-zinc-400 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Fokus Riset: Web GIS & Smart Waste IoT</span>
            </div>
          </motion.div>

          {/* Tile 3: Experience (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="md:col-span-6 modern-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 text-indigo-400 mb-4">
              <Briefcase className="w-4 h-4" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400">
                Pengalaman & Organisasi
              </span>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="border-l-2 border-indigo-500/40 pl-3">
                <div className="font-bold text-white text-sm">
                  Komunitas Jurnalistik Pecinta Karya
                </div>
                <div className="text-cyan-400 font-medium">
                  Kepala Divisi Hubungan Masyarakat (Humas)
                </div>
                <div className="text-zinc-400 text-[11px] mt-0.5">
                  2024 - 2025 • Produksi media kreatif, komunikasi publik, dan dokumentasi.
                </div>
              </div>

              <div className="border-l-2 border-zinc-800 pl-3">
                <div className="font-bold text-white text-sm">WTEAM of Pasekan</div>
                <div className="text-zinc-300 font-medium">Photography & Videography Specialist</div>
                <div className="text-zinc-400 text-[11px] mt-0.5">
                  2020 - Sekarang • Penyuntingan video (Premiere Pro), foto, dan produksi visual.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tile 4: Achievements & Awards (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="md:col-span-6 modern-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 text-amber-400 mb-4">
              <Trophy className="w-4 h-4" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
                Prestasi & Kontribusi Riset
              </span>
            </div>

            <div className="space-y-2.5 text-xs text-zinc-300">
              <div className="flex items-start gap-2">
                <span className="text-amber-400 font-mono font-bold">•</span>
                <span className="leading-relaxed">Penghargaan Aang Yayu Gatsu 2022</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400 font-mono font-bold">•</span>
                <span className="leading-relaxed">Juara Harapan 3 Lomba Matematika Tingkat Provinsi</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400 font-mono font-bold">•</span>
                <span className="leading-relaxed">
                  Kontributor Riset Dosen: Smart Waste Disposal Detection (IoT ESP32)
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400 font-mono font-bold">•</span>
                <span className="leading-relaxed">
                  Kelulusan Uji Kompetensi Kejuruan Produksi Video Dokumenter Kewirausahaan
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
