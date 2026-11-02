import React from 'react';
import { skillCategories } from '../../data/portfolioData';
import { LayersIcon, SparklesIcon, TerminalIcon, BookOpenIcon, CheckCircleIcon } from '../ui/Icons';

export const SkillsSection: React.FC = () => {
  const categoryIcons = [
    <LayersIcon key="0" size={20} className="text-purple-400" />,
    <TerminalIcon key="1" size={20} className="text-cyan-400" />,
    <BookOpenIcon key="2" size={20} className="text-amber-400" />
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-2 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lavender-500/10 border border-lavender-500/20 text-xs font-mono font-medium text-lavender-300">
            <LayersIcon size={14} />
            <span>03 &bull; Skills &amp; Technologies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Technical Stack &amp; Active Toolchain
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            Cleanly categorized into technologies explored through projects, active developer tooling, and fundamental areas currently studied.
          </p>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={cat.title} className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between glass-card-hover">
              
              <div className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                      {categoryIcons[idx]}
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-white">{cat.title}</h3>
                      <span className="text-[10px] font-mono text-lavender-300">{cat.badgeNote}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills Pill List */}
                <div className="space-y-2 pt-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-lavender-500/20 transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-lavender-400 group-hover:scale-125 transition-transform" />
                        <span className="font-semibold text-xs text-slate-200 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      {skill.detail && (
                        <span className="text-[11px] text-slate-400 font-mono">
                          {skill.detail}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Tag */}
              <div className="pt-6 mt-4 border-t border-white/5 flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                <CheckCircleIcon size={13} className="text-lavender-400" />
                <span>No arbitrary proficiency bars</span>
              </div>

            </div>
          ))}
        </div>

        {/* Ethical Transparency Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-void-900 via-void-850 to-void-900 border border-lavender-500/20 max-w-4xl mx-auto shadow-lg">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="p-3 rounded-xl bg-lavender-500/10 text-lavender-300 border border-lavender-500/20 shrink-0">
              <SparklesIcon size={24} />
            </div>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <h4 className="font-bold text-white text-base">
                Engineering Honesty &amp; Transparency Statement
              </h4>
              <p className="text-slate-300 leading-relaxed">
                As a first-year undergraduate student, I leverage AI-assisted coding tools like <strong className="text-lavender-200">Google Antigravity</strong> to accelerate application architecture and interface development. I am not an experienced software engineer and do not represent myself as one. My focus is on pairing real-world prototype building with disciplined study of programming fundamentals, data structures, and algorithmic principles.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
