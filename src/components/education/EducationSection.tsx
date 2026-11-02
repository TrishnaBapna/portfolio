import React from 'react';
import { educationData, certifications, personalInfo } from '../../data/portfolioData';
import { GraduationCapIcon, AwardIcon, CheckCircleIcon, MapPinIcon } from '../ui/Icons';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-2 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lavender-500/10 border border-lavender-500/20 text-xs font-mono font-medium text-lavender-300">
            <GraduationCapIcon size={14} />
            <span>04 &bull; Education &amp; Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Academic Grounding &amp; Verified Learning
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            Pursuing Artificial Intelligence &amp; Data Science at Pillai University with continuous technical upskilling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Education Card (7 cols) */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6 glass-card-hover">
            
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-white/10">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-lavender-400 font-semibold block">Undergraduate Degree</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {educationData.degree}
                </h3>
                <p className="text-lavender-300 font-medium text-sm">
                  Specialization: {educationData.specialization}
                </p>
              </div>

              <div className="text-left sm:text-right">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium bg-lavender-500/15 border border-lavender-500/30 text-lavender-300">
                  {educationData.period}
                </span>
                <p className="text-xs text-slate-400 mt-1 font-mono">{educationData.yearTrack}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-300">
              <MapPinIcon size={16} className="text-lavender-400 shrink-0" />
              <span><strong>{educationData.institution}</strong> &bull; {educationData.location}</span>
            </div>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                Curriculum &amp; Objectives:
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {educationData.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircleIcon size={15} className="text-lavender-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* University Internship Spotlight */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-lavender-300 font-semibold block">Internship Focus</span>
                <span className="text-xs text-slate-200">{personalInfo.internshipTarget}</span>
              </div>
              <span className="text-[11px] font-mono px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 whitespace-nowrap">
                Candidate 2026
              </span>
            </div>

          </div>

          {/* Certification Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {certifications.map((cert) => (
              <div key={cert.title} className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 space-y-4 glass-card-hover">
                
                <div className="flex items-start justify-between gap-3 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-lavender-500/10 border border-lavender-500/20 text-lavender-400">
                      <AwardIcon size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">{cert.title}</h4>
                      <p className="text-xs text-slate-400">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                    <CheckCircleIcon size={11} />
                    <span>{cert.status}</span>
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {cert.description}
                </p>

                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-semibold mb-2">
                    Verified Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-slate-300 text-xs font-mono">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Credential Status</span>
                  <span className="text-lavender-300 font-mono">Completed</span>
                </div>

              </div>
            ))}

            {/* Note for Recruiter */}
            <div className="p-4 rounded-xl bg-void-900 border border-white/5 text-xs text-slate-400">
              <p>
                Additional course certifications and lab evaluations from Pillai University will be documented here as semesters progress.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
