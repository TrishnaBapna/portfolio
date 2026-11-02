import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import { GithubIcon, MailIcon, FileTextIcon, ArrowUpRightIcon } from '../ui/Icons';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-void-950 py-12 relative text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/5">
          
          {/* Col 1: Identity (6 cols) */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-lavender-500/20 border border-lavender-500/30 flex items-center justify-center text-lavender-300 font-bold text-xs">
                TB
              </div>
              <span className="font-bold text-sm text-white tracking-tight">Trishna Bapna</span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed">
              First-year B.Tech Student in Artificial Intelligence and Data Science at Pillai University. Actively exploring software engineering, assistive healthcare systems, and student learning tools through AI-augmented workflows.
            </p>
            <p className="text-[11px] text-slate-500 font-mono">
              B.Tech – Artificial Intelligence &amp; Data Science &bull; Pillai University
            </p>
          </div>

          {/* Col 2: Navigation Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-white font-semibold block text-xs uppercase tracking-wider font-mono">Index</span>
            <ul className="space-y-1.5">
              <li><a href="#about" className="hover:text-lavender-300 transition-colors">01. About Me</a></li>
              <li><a href="#projects" className="hover:text-lavender-300 transition-colors">02. Featured Projects</a></li>
              <li><a href="#skills" className="hover:text-lavender-300 transition-colors">03. Skills &amp; Tools</a></li>
              <li><a href="#education" className="hover:text-lavender-300 transition-colors">04. Education &amp; Certs</a></li>
              <li><a href="#journey" className="hover:text-lavender-300 transition-colors">05. Learning Journey</a></li>
              <li><a href="#contact" className="hover:text-lavender-300 transition-colors">06. Contact Section</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Connect & Resume (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-white font-semibold block text-xs uppercase tracking-wider font-mono">Connect</span>
            <ul className="space-y-1.5">
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-lavender-300 transition-colors inline-flex items-center gap-1.5"
                >
                  <GithubIcon size={14} />
                  <span>github.com/TrishnaBapna</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-lavender-300 transition-colors inline-flex items-center gap-1.5 break-all"
                >
                  <MailIcon size={14} />
                  <span>{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenResume}
                  className="hover:text-lavender-300 transition-colors inline-flex items-center gap-1.5 text-left"
                >
                  <FileTextIcon size={14} />
                  <span>Download Verified Resume</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-500 font-mono text-center sm:text-left">
            &copy; {new Date().getFullYear()} Trishna Bapna &bull; Pillai University, New Panvel.
          </p>

          <button
            onClick={scrollToTop}
            className="text-[11px] font-mono text-lavender-300 hover:text-white transition-colors flex items-center gap-1"
          >
            <span>Back to top</span>
            <ArrowUpRightIcon size={12} className="-rotate-45" />
          </button>
        </div>

      </div>
    </footer>
  );
};
