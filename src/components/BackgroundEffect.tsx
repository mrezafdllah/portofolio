'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle Dot Matrix Pattern */}
      <div className="absolute inset-0 bg-subtle-grid opacity-80" />

      {/* Radial Vignette to soften edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,#09090b_70%)]" />

      {/* Top Ambient Glow - Linear/Vercel Aesthetic */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-cyan-500/10 via-indigo-500/5 to-transparent blur-[120px] rounded-full pointer-events-none" />

      {/* Subtle Bottom Accent Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[250px] bg-cyan-600/5 blur-[140px] rounded-full pointer-events-none" />
    </div>
  );
}
