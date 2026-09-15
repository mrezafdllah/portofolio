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
  GitBranch,
  Command,
  FileCode2,
} from 'lucide-react';
import { SKILLS_DATA } from '@/data/portfolio-data';
import { SkillCategory } from '@/types/portfolio';

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
  GitBranch,
  Command,
};

const CATEGORIES: ('All' | SkillCategory)[] = [
  'All',
  'Backend & API',
  'Languages',
  'Frontend',
  'Database & Cloud',
  'Tools & Workflow',
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | SkillCategory>('All');

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-2 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-[11px] font-mono font-medium text-indigo-400"
          >
            <Cpu className="w-3 h-3" />
            <span>KEAHLIAN TEKNIS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Teknologi, Framework & Alat Kerja
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-zinc-400 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed"
          >
            Stack teknologi yang saya gunakan dalam pengembangan web aplikasi dan sistem multimedia.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-8">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                    : 'bg-zinc-900/60 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/5'
                }`}
              >
                {cat === 'All' ? 'Semua' : cat}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const Icon = ICON_MAP[skill.iconName] || Code;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ y: -3 }}
                  className="modern-card p-3.5 rounded-xl flex flex-col items-center justify-center text-center group cursor-pointer"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform border border-white/5">
                    <Icon
                      className="w-5 h-5 transition-colors"
                      style={{ color: skill.color || '#38BDF8' }}
                    />
                  </div>

                  {/* Name */}
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </span>

                  {/* Level / Category */}
                  <span className="text-[10px] font-mono text-zinc-400 mt-1">
                    {skill.level || skill.category}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
