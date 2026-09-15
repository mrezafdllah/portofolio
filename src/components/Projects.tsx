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
  Layers,
  AlertCircle,
} from 'lucide-react';
import { ProjectItem } from '@/types/portfolio';
import { FALLBACK_PROJECTS, PERSONAL_INFO } from '@/data/portfolio-data';
import { getLanguageColor } from '@/lib/utils';

export default function Projects() {
  const [projects, setProjects] = useState<ProjectItem[]>(FALLBACK_PROJECTS);
  const [isLoading, setIsLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);
  const [filter, setFilter] = useState<'all' | 'featured' | 'github'>('all');
  const [githubUsername, setGithubUsername] = useState(
    PERSONAL_INFO.githubUsername || 'octocat'
  );

  const loadProjects = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/github?username=${encodeURIComponent(githubUsername)}`);
      const json = await res.json();

      if (json.success && json.data && json.data.projects) {
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
    <section id="projects" className="relative py-24 px-4 sm:px-6 z-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 font-mono"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Karya & Proyek Terpilih
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
          >
            Terintegrasi langsung dengan GitHub REST API untuk menampilkan repositori terbaru dan proyek unggulan secara real-time.
          </motion.p>
        </div>

        {/* Filter & Live Status Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-slate-800/80">
          {/* Filter Pills */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                filter === 'all'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                  : 'text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              Semua Proyek ({projects.length})
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                filter === 'featured'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                  : 'text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              Unggulan ⭐
            </button>
          </div>

          {/* GitHub Live Sync Indicator & Refresh Button */}
          <div className="flex items-center gap-3">
            {isFallback ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Mode Offline / Data Fallback</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>GitHub API Live: @{githubUsername}</span>
              </span>
            )}

            <button
              onClick={loadProjects}
              disabled={isLoading}
              title="Sinkronkan ulang data dari GitHub"
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-cyan-400 transition-all disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-cyan-400' : ''}`} />
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {displayedProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Glowing Gradient accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 opacity-80 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(90deg, ${project.languageColor || '#06B6D4'}, #8B5CF6)`,
                  }}
                />

                {/* Card Top: Title & GitHub Icon */}
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-slate-800/80 text-cyan-400 border border-slate-700/60">
                        <FolderGit2 className="w-4 h-4" />
                      </div>
                      {project.featured && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Live Demo untuk ${project.title}`}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Repository GitHub untuk ${project.title}`}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1 mb-2">
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
                  <p className="text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Card Bottom: Meta info (Language, Stars, Topics) */}
                <div className="pt-4 border-t border-slate-800/80 mt-auto">
                  {/* Topics Pills */}
                  {project.topics && project.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.topics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800/60 text-slate-400 border border-slate-700/40"
                        >
                          #{topic}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs text-slate-400">
                    {/* Primary Language */}
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: project.languageColor || '#38BDF8' }}
                      />
                      <span className="font-medium text-slate-300">
                        {project.primaryLanguage}
                      </span>
                    </div>

                    {/* Stats: Stars & Forks */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 text-slate-400">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
                        <span>{project.stars}</span>
                      </div>
                      {project.forks !== undefined && (
                        <div className="flex items-center gap-1 text-slate-400">
                          <GitFork className="w-3.5 h-3.5 text-slate-400" />
                          <span>{project.forks}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More on GitHub Button */}
        <div className="mt-12 text-center">
          <a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 transition-all hover:scale-105 shadow-md"
          >
            <Github className="w-4 h-4 text-cyan-400" />
            <span>Lihat Semua Repositori di GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>
      </div>
    </section>
  );
}
