import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../../data/portfolioData';
import { Code2Icon, SparklesIcon, ExternalLinkIcon, GithubIcon } from '../ui/Icons';

export const ProjectsSection: React.FC = () => {
  const [showSecondary, setShowSecondary] = useState(false);

  const featuredProjects = projects.filter((p) => p.featured);
  const secondaryProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-2 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lavender-500/10 border border-lavender-500/20 text-xs font-mono font-medium text-lavender-300">
            <Code2Icon size={14} />
            <span>02 &bull; Featured Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Practical Applications &amp; Prototypes
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            Real software built through an iterative AI-assisted workflow, focusing on assistive healthcare and student productivity.
          </p>
        </div>

        {/* Featured Projects Grid (Large visual cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Transparency Callout */}
        <div className="mt-10 p-4 sm:p-5 rounded-2xl glass-card border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-500/10 text-lavender-300">
              <SparklesIcon size={20} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Authentic Project Disclosure</h4>
              <p className="text-xs text-slate-400">
                These projects were architected and implemented using AI-assisted tools (Google Antigravity) while I am actively developing independent programming mastery.
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowSecondary(!showSecondary)}
            className="text-xs font-semibold px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-lavender-300 border border-white/10 transition-colors whitespace-nowrap self-end sm:self-center"
          >
            {showSecondary ? 'Hide Explorations' : 'View Secondary Explorations (2)'}
          </button>
        </div>

        {/* Secondary Explorations Drawer */}
        {showSecondary && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            {secondaryProjects.map((project) => (
              <div key={project.id} className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-lavender-300">{project.category}</span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {project.status}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white">{project.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-slate-400">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="pt-2 flex items-center gap-3 text-xs">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-lavender-400 hover:underline flex items-center gap-1 font-semibold">
                      Live App <ExternalLinkIcon size={12} />
                    </a>
                  )}
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white flex items-center gap-1">
                    GitHub <GithubIcon size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
