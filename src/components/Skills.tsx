'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Terminal,
  Database,
  Layout,
  Atom,
  Flame,
  Palette,
  Sparkles,
  Server,
  Cpu,
  Zap,
  Globe,
  Cloud,
  Layers,
  CloudRain,
  GitBranch,
  Box,
  Send,
  Command,
  CheckCircle2,
  FileCode2,
} from 'lucide-react';
import { SKILLS_DATA } from '@/data/portfolio-data';
import { SkillCategory } from '@/types/portfolio';

// Map icon string name to Lucide component
const ICON_MAP: Record<string, React.ElementType> = {
  FileCode2,
  Terminal,
  Code,
  Database,
  Layout,
  Atom,
  Flame,
  Palette,
  Sparkles,
  Server,
  Cpu,
  Zap,
  Globe,
  Cloud,
  Layers,
  CloudRain,
  GitBranch,
  Box,
  Send,
  Command,
};

const CATEGORIES: ('All' | SkillCategory)[] = [
  'All',
  'Languages',
  'Frontend',
  'Backend & API',
  'Database & Cloud',
  'Tools & Workflow',
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | SkillCategory>('All');

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 z-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-400 font-mono"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>KEAHLIAN & TEKNOLOGI</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Stack Teknologi & Alat Unggulan
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
          >
            Kumpulan bahasa pemrograman, framework, dan layanan cloud yang saya gunakan dalam membangun sistem perangkat lunak yang tangguh.
          </motion.p>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                    : 'bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat === 'All' ? 'Semua Kategori' : cat}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const Icon = ICON_MAP[skill.iconName] || Code;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="glass-card p-4 sm:p-5 rounded-2xl flex flex-col items-center justify-center text-center group cursor-pointer relative overflow-hidden"
                >
                  {/* Subtle hover background highlight */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                    style={{ backgroundColor: skill.color || '#06B6D4' }}
                  />

                  {/* Skill Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 shadow-inner"
                    style={{
                      backgroundColor: 'rgba(30, 41, 59, 0.7)',
                      border: `1px solid ${skill.color ? `${skill.color}40` : 'rgba(255,255,255,0.1)'}`,
                    }}
                  >
                    <Icon
                      className="w-6 h-6 transition-colors"
                      style={{ color: skill.color || '#38BDF8' }}
                    />
                  </div>

                  {/* Skill Name */}
                  <span className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </span>

                  {/* Category / Level Badge */}
                  <div className="mt-2 flex items-center gap-1.5">
                    <span className="text-[11px] font-mono text-slate-400">
                      {skill.level || skill.category}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
