'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  ExternalLink,
  Star,
  GitFork,
  FolderGit2,
  RefreshCw,
  Sparkles,
} from 'lucide-react';
import { ProjectItem } from '@/types/portfolio';
import { FALLBACK_PROJECTS, PERSONAL_INFO } from '@/data/portfolio-data';

export default function Projects() {
  const [projects, setProjects] = useState<ProjectItem[]>(FALLBACK_PROJECTS);
  const [isLoading, setIsLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const [githubUsername] = useState(PERSONAL_INFO.githubUsername || 'mrezafdllah');

  const loadProjects = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/github?username=${encodeURIComponent(githubUsername)}`);
      const json = await res.json();

      if (json.success && json.data && json.data.projects && json.data.projects.length > 0) {
        setProjects(json.data.projects);
        setIsFallback(Boolean(json.data.isFallback));
      } else {
        setProjects(FALLBACK_PROJECTS);
        setIsFallback(true);
      }
    } catch (err) {
      console.warn('Error fetching projects, using fallback data:', err);
      setProjects(FALLBACK_PROJECTS);
      setIsFallback(true);
    } finally {
      setIsLoading(false);
    }
  }, [githubUsername]);

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  const displayedProjects = projects.filter((project) => {
    if (filter === 'featured') return project.featured;
    return true;
  });

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-2 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-[11px] font-mono font-medium text-cyan-400"
          >
            <FolderGit2 className="w-3 h-3" />
            <span>KARYA & PROYEK</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Showcase Proyek Unggulan
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-zinc-400 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed"
          >
            Aplikasi web terapan, sistem pemetaan interaktif, integrasi IoT, dan karya multimedia.
          </motion.p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-8 pb-3 border-b border-zinc-800/80">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                filter === 'all'
                  ? 'bg-white text-zinc-950 font-semibold'
                  : 'text-zinc-400 hover:text-white bg-zinc-900/60 border border-white/5'
              }`}
            >
              Semua ({projects.length})
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                filter === 'featured'
                  ? 'bg-white text-zinc-950 font-semibold'
                  : 'text-zinc-400 hover:text-white bg-zinc-900/60 border border-white/5'
              }`}
            >
              Unggulan ⭐
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900 border border-white/5 text-zinc-400 font-mono text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>@{githubUsername}</span>
            </span>

            <button
              onClick={loadProjects}
              disabled={isLoading}
              title="Sinkronkan data GitHub"
              className="p-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-cyan-400' : ''}`} />
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence>
            {displayedProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
                className="modern-card rounded-2xl p-5 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Language & Links */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: project.languageColor || '#06B6D4' }}
                      />
                      <span className="text-[11px] font-mono text-zinc-300">
                        {project.primaryLanguage}
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Live Demo ${project.title}`}
                          className="p-1 text-zinc-400 hover:text-white transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub ${project.title}`}
                        className="p-1 text-zinc-400 hover:text-white transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 line-clamp-1">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {project.title}
                    </a>
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 text-xs line-clamp-3 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Card Bottom Meta */}
                <div className="pt-3 border-t border-zinc-800/80 mt-auto flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <div className="flex items-center gap-1">
                    {project.topics && project.topics[0] && (
                      <span className="px-2 py-0.5 rounded bg-zinc-900 border border-white/5 text-zinc-300">
                        #{project.topics[0]}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-400" />
                      <span>{project.stars}</span>
                    </div>
                    {project.forks !== undefined && (
                      <div className="flex items-center gap-1">
                        <GitFork className="w-3 h-3 text-zinc-500" />
                        <span>{project.forks}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer GitHub Link */}
        <div className="mt-10 text-center">
          <a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 transition-all hover:scale-105"
          >
            <Github className="w-3.5 h-3.5 text-cyan-400" />
            <span>Kunjungi Repositori GitHub @{githubUsername}</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        </div>
      </div>
    </section>
  );
}
