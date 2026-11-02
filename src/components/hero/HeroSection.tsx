import React from 'react';
import { ArrowUpRightIcon, DownloadIcon, GithubIcon, SparklesIcon, MapPinIcon } from '../ui/Icons';
import { personalInfo } from '../../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle Ambient Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] bg-gradient-to-tr from-purple-600/15 via-lavender-500/10 to-indigo-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-lavender-500/5 blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-lavender-400/20 backdrop-blur-md text-xs font-medium text-lavender-300 shadow-sm animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>MES Winter Internship Programme 2026 Candidate</span>
            </div>

            {/* Main Greeting & Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-gradient-lavender">Trishna Bapna</span>.
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300">
                Aspiring Software Developer &amp; AI Enthusiast.
              </p>
            </div>

            {/* Core Mission Quote */}
            <blockquote className="relative p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <p className="italic">
                "{personalInfo.shortBio}"
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPinIcon size={14} className="text-lavender-400" />
                  {personalInfo.college}
                </span>
                <span>&bull;</span>
                <span className="text-lavender-300">{personalInfo.degree}</span>
              </div>
            </blockquote>

            {/* AI-Assisted Development Transparency Pill */}
            <div className="p-3.5 rounded-xl bg-lavender-500/5 border border-lavender-500/15 max-w-2xl mx-auto lg:mx-0 text-left">
              <div className="flex items-start gap-3">
                <SparklesIcon size={18} className="text-lavender-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-300 leading-normal">
                  <strong className="text-lavender-200">First-Year Student Perspective:</strong> I am actively building my foundational programming knowledge while using AI-assisted development tools (like Google Antigravity) to design, explore, and prototype real-world software.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-lavender-500 to-purple-600 text-slate-950 font-bold text-sm hover:opacity-95 transition-all shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:scale-[1.02]"
              >
                <span>View My Projects</span>
                <ArrowUpRightIcon size={16} />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 font-semibold text-sm border border-white/10 hover:border-lavender-500/40 transition-all hover:scale-[1.02]"
              >
                <DownloadIcon size={16} className="text-lavender-400" />
                <span>Download Resume</span>
              </button>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] text-slate-300 hover:text-white font-medium text-sm border border-white/10 transition-all"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Column: Hero Portrait Frame (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              
              {/* Outer decorative glow ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-purple-600 to-lavender-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-700 animate-pulse-subtle" />

              {/* Portrait Container */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden glass-card p-2 border border-white/10">
                <div className="w-full h-full rounded-xl overflow-hidden relative bg-void-900">
                  <img
                    src={personalInfo.portraitUrl}
                    alt="Trishna Bapna Portrait"
                    className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  {/* Subtle bottom gradient to blend overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-void-950/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Badge over portrait */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-void-950/85 backdrop-blur-md border border-white/10 text-center">
                    <span className="text-xs font-semibold text-white block">Trishna Bapna</span>
                    <span className="text-[10px] text-lavender-300 font-mono">B.Tech AI &amp; DS &bull; 2026–Present</span>
                  </div>
                </div>
              </div>

              {/* Floating micro-card: Projects Highlight */}
              <div className="absolute -bottom-5 -left-6 sm:-left-8 p-3 rounded-xl bg-void-900/90 border border-white/10 backdrop-blur-xl shadow-xl flex items-center gap-3 animate-float-slow">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs">
                  2+
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Active Projects</div>
                  <div className="text-[10px] text-slate-400">Saksham 3.0 &bull; FocusMate</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
