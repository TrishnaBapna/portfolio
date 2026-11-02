import React, { useState } from 'react';
import { Project } from '../../types';
import { GithubIcon, SparklesIcon, CheckCircleIcon, ArrowUpRightIcon } from '../ui/Icons';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'tech'>('overview');

  const statusBadgeStyles = {
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  };

  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-white/10 glass-card-hover flex flex-col">
      {/* Visual Screenshot / Interactive Mockup Preview */}
      <div className="relative w-full h-64 sm:h-72 bg-void-950 overflow-hidden border-b border-white/10 group">
        <img
          src={project.image}
          alt={`${project.title} screenshot preview`}
          className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void-950 via-void-950/20 to-transparent" />

        {/* Top Floating Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-void-950/80 backdrop-blur-md text-lavender-300 border border-white/10 shadow-md">
            {project.category}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border shadow-md flex items-center gap-1.5 ${statusBadgeStyles[project.statusColor]}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            {project.status}
          </span>
        </div>

        {/* Bottom Title Bar over image */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight drop-shadow-md">
              {project.title}
            </h3>
            <p className="text-xs text-slate-300 line-clamp-1 drop-shadow">
              {project.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
        
        {/* Sub-navigation tabs */}
        <div>
          <div className="flex border-b border-white/10 gap-2 mb-4 text-xs font-medium">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-2 transition-all relative ${
                activeTab === 'overview'
                  ? 'text-lavender-300 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-lavender-400'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`pb-2 transition-all relative ${
                activeTab === 'features'
                  ? 'text-lavender-300 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-lavender-400'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Verified Features ({project.keyFeatures.length})
            </button>
            <button
              onClick={() => setActiveTab('tech')}
              className={`pb-2 transition-all relative ${
                activeTab === 'tech'
                  ? 'text-lavender-300 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-lavender-400'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Tech Stack &amp; Workflow
            </button>
          </div>

          {/* Tab Content: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-4 animate-fade-in text-sm">
              <p className="text-slate-300 leading-relaxed">
                {project.description}
              </p>
              
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold">Key Highlights:</span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {project.keyFeatures.slice(0, 3).map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircleIcon size={14} className="text-lavender-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tab Content: Features */}
          {activeTab === 'features' && (
            <div className="space-y-2.5 animate-fade-in text-xs">
              <ul className="space-y-2 text-slate-300">
                {project.keyFeatures.map((feat, i) => (
                  <li key={i} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-lavender-500/20 text-lavender-300 flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tab Content: Tech & Workflow */}
          {activeTab === 'tech' && (
            <div className="space-y-4 animate-fade-in text-xs">
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-semibold mb-2">Technologies Used:</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-200 font-mono text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-lavender-500/5 border border-lavender-500/15">
                <div className="flex items-center gap-1.5 text-lavender-300 font-semibold mb-1">
                  <SparklesIcon size={13} />
                  <span>AI-Assisted Workflow Note</span>
                </div>
                <p className="text-slate-300 leading-normal">
                  {project.aiAssistedDetails}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Links & CTAs */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-lavender-500 hover:bg-lavender-600 text-slate-950 font-bold text-xs transition-colors shadow-sm"
              >
                <span>Live Demo</span>
                <ArrowUpRightIcon size={14} />
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs font-semibold transition-colors"
            >
              <GithubIcon size={15} />
              <span>GitHub</span>
            </a>
          </div>

          <span className="text-[11px] font-mono text-slate-400">
            #{project.id}
          </span>
        </div>

      </div>
    </div>
  );
};
