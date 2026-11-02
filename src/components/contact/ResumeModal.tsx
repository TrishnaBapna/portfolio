import React, { useEffect } from 'react';
import { XIcon, DownloadIcon, FileTextIcon, ExternalLinkIcon, CheckCircleIcon } from '../ui/Icons';
import { personalInfo, educationData, projects, skillCategories, certifications } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-void-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-void-950/90 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-lavender-500/10 border border-lavender-500/20 text-lavender-400">
              <FileTextIcon size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-100 text-lg">Curriculum Vitae / Resume</h3>
              <p className="text-xs text-slate-400">Targeting MES Winter Internship Programme 2026</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.resumePdfUrl}
              download="Trishna_Bapna_Resume.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-lavender-500 hover:bg-lavender-600 text-slate-950 transition-colors shadow-sm"
            >
              <DownloadIcon size={14} />
              <span>Download PDF</span>
            </a>
            <a
              href={personalInfo.resumeDocxUrl}
              download="Trishna_Bapna_Resume.docx"
              className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors border border-white/10"
            >
              <FileTextIcon size={14} />
              <span>DOCX</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-100 hover:bg-white/10 rounded-lg transition-colors ml-2"
              aria-label="Close resume preview"
            >
              <XIcon size={20} />
            </button>
          </div>
        </div>

        {/* Modal Resume Content Container (Paper style) */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto space-y-8 bg-void-900/90 text-slate-200 text-sm leading-relaxed">
          {/* Header */}
          <div className="border-b border-white/10 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">{personalInfo.name}</h1>
              <span className="text-xs font-medium px-2.5 py-1 rounded bg-lavender-500/10 border border-lavender-500/30 text-lavender-300 w-fit">
                First Year B.Tech (2026–27)
              </span>
            </div>
            <p className="text-lavender-400 font-medium text-base mt-1">{personalInfo.title}</p>
            <div className="flex flex-wrap gap-y-1 gap-x-4 text-xs text-slate-400 mt-3">
              <span>{personalInfo.college}</span>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`} className="text-lavender-300 hover:underline">{personalInfo.email}</a>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-lavender-300 hover:underline">github.com/TrishnaBapna</a>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-white/[0.03] border border-white/10 text-xs text-slate-300">
              <strong className="text-lavender-300">Application:</strong> {personalInfo.internshipTarget}
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-lavender-400 font-semibold mb-2">Professional Summary</h4>
            <p className="text-slate-300 text-sm text-justify">
              First-year B.Tech student in Artificial Intelligence and Data Science at Pillai University, aspiring to work in software engineering, full stack web development, artificial intelligence and generative AI, with a focus on building practical software solutions. Hands-on exposure to AI-assisted software development through two real-world projects in healthcare and educational technology, actively improving programming fundamentals and technical understanding. Looking for a winter internship to learn from structured guidance and strengthen core engineering skills.
            </p>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-lavender-400 font-semibold mb-3">Education</h4>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <span className="font-semibold text-white">{educationData.degree} in {educationData.specialization}</span>
                <span className="text-xs text-slate-400">{educationData.period}</span>
              </div>
              <p className="text-xs text-slate-400">{educationData.institution}, {educationData.location} • {educationData.yearTrack}</p>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-lavender-400 font-semibold mb-3">Projects (AI-Assisted Development)</h4>
            <div className="space-y-4">
              {projects.filter(p => p.featured).map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">{proj.title}</span>
                      <span className="text-xs text-slate-400">| {proj.category}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      {proj.liveUrl && (
                        <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="text-lavender-400 hover:underline flex items-center gap-1">
                          Live Demo <ExternalLinkIcon size={12} />
                        </a>
                      )}
                      <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="text-lavender-400 hover:underline flex items-center gap-1">
                        GitHub <ExternalLinkIcon size={12} />
                      </a>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300">{proj.description}</p>
                  <ul className="list-disc list-inside text-xs text-slate-400 space-y-1">
                    {proj.keyFeatures.slice(0, 3).map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-slate-300 border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-lavender-400 font-semibold mb-3">Technical Skills & Tools</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {skillCategories.map((cat) => (
                <div key={cat.title} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                  <span className="font-semibold text-white text-xs block">{cat.title}</span>
                  <div className="flex flex-wrap gap-1">
                    {cat.skills.map((s) => (
                      <span key={s.name} className="px-2 py-0.5 text-[11px] rounded bg-white/5 text-slate-300">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-400 italic mt-2">
              * Note: Project technologies above were applied with AI assistance (e.g. Google Antigravity); actively building independent programming proficiency.
            </p>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-lavender-400 font-semibold mb-3">Certifications</h4>
            {certifications.map((cert) => (
              <div key={cert.title} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-white text-sm block">{cert.title}</span>
                  <span className="text-xs text-slate-400">{cert.issuer}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                  <CheckCircleIcon size={14} />
                  <span>{cert.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
