import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/about/AboutSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { SkillsSection } from './components/skills/SkillsSection';
import { EducationSection } from './components/education/EducationSection';
import { JourneySection } from './components/journey/JourneySection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';
import { ResumeModal } from './components/contact/ResumeModal';
import { Toast } from './components/ui/Toast';

export function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; isOpen: boolean }>({
    message: '',
    isOpen: false,
  });

  const showToast = (message: string) => {
    setToast({ message, isOpen: true });
  };

  const closeToast = () => {
    setToast({ message: '', isOpen: false });
  };

  return (
    <div className="min-h-screen bg-void-950 text-slate-100 flex flex-col relative selection:bg-lavender-500/30 selection:text-lavender-200">
      
      {/* Top Glass Navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection onOpenResume={() => setResumeOpen(true)} />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <JourneySection />
        <ContactSection onShowToast={showToast} onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Recruiter-Ready Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Interactive Resume View & Download Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Global Feedback Toast */}
      <Toast
        message={toast.message}
        isOpen={toast.isOpen}
        onClose={closeToast}
      />
    </div>
  );
}

export default App;
