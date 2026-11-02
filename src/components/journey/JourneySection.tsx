import React from 'react';
import { learningJourney } from '../../data/portfolioData';
import { ClockIcon, CheckCircleIcon } from '../ui/Icons';

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-2 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lavender-500/10 border border-lavender-500/20 text-xs font-mono font-medium text-lavender-300">
            <ClockIcon size={14} />
            <span>05 &bull; My Learning Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Progression &amp; Growth Milestones
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            How I progressed from initial code syntax to architecting assistive platforms and preparing for industry internship immersion.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Glow Track */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-lavender-500/40 via-purple-500/30 to-white/10 hidden sm:block" />

          <div className="space-y-8 sm:space-y-12">
            {learningJourney.map((milestone, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={milestone.stage}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 sm:gap-12`}
                >
                  
                  {/* Timeline Center Node */}
                  <div className="hidden sm:flex absolute left-1/2 top-5 -translate-x-1/2 w-8 h-8 rounded-full bg-void-950 border-2 border-lavender-400 shadow-[0_0_15px_rgba(168,85,247,0.4)] items-center justify-center text-lavender-300 font-mono text-xs font-bold z-10">
                    {milestone.status === 'completed' ? (
                      <CheckCircleIcon size={14} className="text-emerald-400" />
                    ) : milestone.status === 'current' ? (
                      <span className="w-2 h-2 rounded-full bg-lavender-400 animate-ping" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-slate-500" />
                    )}
                  </div>

                  {/* Card Content (half width) */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <div className={`glass-card p-6 rounded-2xl border border-white/10 space-y-3 glass-card-hover ${
                      milestone.status === 'current' ? 'border-lavender-400/40 shadow-[0_0_30px_rgba(168,85,247,0.15)]' : ''
                    }`}>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-lavender-400">
                          STAGE {milestone.stage}
                        </span>
                        <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full border ${
                          milestone.status === 'current'
                            ? 'bg-lavender-500/15 border-lavender-500/30 text-lavender-300 font-semibold'
                            : milestone.status === 'completed'
                            ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                            : 'bg-white/5 border-white/10 text-slate-400'
                        }`}>
                          {milestone.period}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white">
                        {milestone.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {milestone.description}
                      </p>

                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {milestone.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/5 text-slate-300 border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Spacer for other half */}
                  <div className="hidden sm:block w-[calc(50%-2rem)]" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
