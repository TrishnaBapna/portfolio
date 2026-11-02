import React, { useState } from 'react';
import { personalInfo } from '../../data/portfolioData';
import { MailIcon, GithubIcon, CopyIcon, CheckIcon, FileTextIcon, MapPinIcon, ArrowUpRightIcon } from '../ui/Icons';

interface ContactSectionProps {
  onShowToast: (message: string) => void;
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast, onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    onShowToast('Email copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      onShowToast('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    // Simulate immediate reliable submission feedback with mailto trigger fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onShowToast('Message transmitted! A copy has been drafted for your mail client.');

      // Open mailto to allow direct delivery as well
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formState.subject || `Inquiry from ${formState.name} (MES Winter Internship / Portfolio)`
      )}&body=${encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 700);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-2 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lavender-500/10 border border-lavender-500/20 text-xs font-mono font-medium text-lavender-300">
            <MailIcon size={14} />
            <span>06 &bull; Connect &amp; Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let's Discuss Opportunities
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            Currently open for discussions regarding the MES Winter Internship Programme 2026, academic research, and engineering collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 space-y-6">
              
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Get in Touch Directly</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Whether you are an internship coordinator from the Department of Computer Engineering, a faculty member, or a fellow student, I would love to connect.
                </p>
              </div>

              {/* Email Card with 1-Click Copy */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Official Student Email</span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-lavender-300 transition-colors"
                  >
                    {copied ? <CheckIcon size={12} className="text-emerald-400" /> : <CopyIcon size={12} />}
                    <span>{copied ? 'Copied' : 'Copy Email'}</span>
                  </button>
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm font-mono text-lavender-300 hover:underline block break-all font-medium"
                >
                  {personalInfo.email}
                </a>
              </div>

              {/* Location & University */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold block">Campus Location</span>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <MapPinIcon size={15} className="text-lavender-400 shrink-0" />
                  <span>Pillai University, New Panvel, Navi Mumbai</span>
                </div>
              </div>

              {/* GitHub Link */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold block">GitHub Profile</span>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-lavender-300 hover:underline"
                  >
                    github.com/TrishnaBapna
                  </a>
                </div>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={18} />
                </a>
              </div>

              {/* Quick Resume CTA */}
              <button
                onClick={onOpenResume}
                className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs font-semibold flex items-center justify-center gap-2 transition-all hover:border-lavender-500/30"
              >
                <FileTextIcon size={16} className="text-lavender-400" />
                <span>View / Download Complete Resume</span>
              </button>

            </div>

          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">Send a Direct Message</h3>
                <p className="text-xs text-slate-400">
                  Send a note regarding internships, reviews, or project inquiries.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-lavender-500/10 border border-lavender-500/20 text-center space-y-3 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckIcon size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white">Thank You for Connecting!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Your message has been formatted and initiated. I will respond to your email address at the earliest convenience.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-xs font-semibold text-lavender-300 hover:underline pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="font-medium text-slate-300">
                        Your Name <span className="text-lavender-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Dr. Faculty / Recruiter Name"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-lavender-400 focus:outline-none text-slate-100 text-xs transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="font-medium text-slate-300">
                        Your Email Address <span className="text-lavender-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. coordinator@pillai.edu"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-lavender-400 focus:outline-none text-slate-100 text-xs transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="font-medium text-slate-300">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="e.g. MES Winter Internship 2026 / Project Discussion"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-lavender-400 focus:outline-none text-slate-100 text-xs transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="font-medium text-slate-300">
                      Message <span className="text-lavender-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Write your note or question here..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-lavender-400 focus:outline-none text-slate-100 text-xs transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-lavender-500 to-purple-600 text-slate-950 font-bold text-xs hover:opacity-95 transition-opacity flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.25)] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Drafting Message...</span>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <ArrowUpRightIcon size={14} />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
