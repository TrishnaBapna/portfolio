import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon, FileTextIcon, GithubIcon } from '../ui/Icons';
import { personalInfo } from '../../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'projects', 'skills', 'education', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Journey', href: '#journey', id: 'journey' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'py-3 bg-void-950/80 backdrop-blur-xl border-b border-white/10 shadow-lg' : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-lavender-500/20 to-purple-600/30 border border-lavender-500/30 flex items-center justify-center text-lavender-300 font-bold text-sm tracking-tight transition-transform group-hover:scale-105">
              TB
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-white group-hover:text-lavender-300 transition-colors">
                Trishna Bapna
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                AI &amp; DS Student &bull; Pillai Univ
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-void-900/60 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  activeSection === link.id
                    ? 'bg-lavender-500/20 text-lavender-300 border border-lavender-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 hover:border-lavender-500/30 transition-all group"
            >
              <FileTextIcon size={15} className="text-lavender-400 group-hover:scale-110 transition-transform" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-lavender-500 to-purple-600 text-slate-950 hover:opacity-95 transition-opacity shadow-[0_0_20px_rgba(168,85,247,0.25)]"
            >
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 text-xs rounded-lg bg-white/5 border border-white/10 text-lavender-300"
              aria-label="Open Resume"
            >
              <FileTextIcon size={16} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg bg-white/5 border border-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden mt-3 px-4 pb-4 bg-void-950/95 backdrop-blur-2xl border-b border-white/10 animate-fade-in">
          <nav className="flex flex-col gap-1.5 py-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3.5 py-2 rounded-xl text-sm font-medium ${
                  activeSection === link.id
                    ? 'bg-lavender-500/15 text-lavender-300 font-semibold'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold text-slate-200 flex items-center justify-center gap-2"
              >
                <FileTextIcon size={16} className="text-lavender-400" />
                <span>View / Download Resume</span>
              </button>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-slate-300 flex items-center justify-center gap-2"
              >
                <GithubIcon size={16} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
