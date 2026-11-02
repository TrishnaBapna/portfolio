import React from 'react';
import { Code2Icon, SparklesIcon, GraduationCapIcon } from '../ui/Icons';
import { aboutNarrative } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-2 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lavender-500/10 border border-lavender-500/20 text-xs font-mono font-medium text-lavender-300">
            <GraduationCapIcon size={14} />
            <span>01 &bull; About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Authentic Foundation &amp; Engineering Curiosity
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            A first-year engineering student pairing theoretical curriculum with modern AI-augmented application building.
          </p>
        </div>

        {/* Narrative & Feature Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Editorial Text (7 cols) */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span>My Academic &amp; Developer Journey</span>
            </h3>

            <p>
              {aboutNarrative.intro}
            </p>

            <p>
              {aboutNarrative.focus}
            </p>

            <div className="p-4 rounded-xl bg-lavender-500/5 border border-lavender-500/15 space-y-2">
              <div className="flex items-center gap-2 text-lavender-300 font-semibold text-xs uppercase tracking-wider font-mono">
                <SparklesIcon size={14} />
                <span>AI-Assisted Development Workflow</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-normal">
                {aboutNarrative.aiWorkflow}
              </p>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm">
              {aboutNarrative.currentStatus}
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-slate-300">
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/5">Pillai University</span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/5">B.Tech AI &amp; DS</span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/5">Software Engineering Explorer</span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/5">Google Antigravity User</span>
            </div>
          </div>

          {/* Right Bento Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Bento Card 1: Core Focus Areas */}
            <div className="glass-card p-6 rounded-2xl space-y-3 glass-card-hover">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <Code2Icon size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Key Domains of Interest</h4>
                  <p className="text-xs text-slate-400">Where I invest my time and projects</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-slate-300">
                  <span className="font-semibold block text-lavender-300">&bull; Software Dev</span>
                  Full stack principles
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-slate-300">
                  <span className="font-semibold block text-lavender-300">&bull; Applied AI</span>
                  Generative models &amp; tools
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-slate-300">
                  <span className="font-semibold block text-lavender-300">&bull; HealthTech</span>
                  Assistive PWA systems
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-slate-300">
                  <span className="font-semibold block text-lavender-300">&bull; EdTech</span>
                  Productivity &amp; study tools
                </div>
              </div>
            </div>

            {/* Bento Card 2: Engineering Aspirations & Focus */}
            <div className="glass-card p-6 rounded-2xl space-y-3 border-l-4 border-l-lavender-400 glass-card-hover">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-lavender-400 font-semibold">Engineering Philosophy</span>
              </div>
              <h4 className="text-base font-bold text-white leading-snug">
                Practical Software &amp; Applied AI Solutions
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Committed to building accessible applications that address real-world human needs, deepening algorithmic foundations, and exploring modern full-stack web and cloud architectures.
              </p>
            </div>

            {/* Bento Card 3: Values & Mindset */}
            <div className="glass-card p-5 rounded-2xl text-xs space-y-2 bg-gradient-to-r from-void-900 to-void-850">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold block">Philosophy</span>
              <p className="text-slate-300 italic">
                "Honest curiosity beats exaggerated claims. I am proud to be a first-year student rapidly learning modern development tools while putting in the effort to master the underlying fundamentals."
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
