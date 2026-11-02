import React, { useEffect } from 'react';
import { CheckCircleIcon, XIcon } from './Icons';

interface ToastProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  type?: 'success' | 'info';
}

export const Toast: React.FC<ToastProps> = ({ message, isOpen, onClose, type = 'success' }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-void-900/95 border border-lavender-500/30 text-white shadow-2xl backdrop-blur-md animate-fade-in text-sm">
      <div className={type === 'success' ? 'text-emerald-400' : 'text-lavender-400'}>
        <CheckCircleIcon size={18} />
      </div>
      <span className="font-medium">{message}</span>
      <button 
        onClick={onClose} 
        className="text-slate-400 hover:text-white transition-colors ml-2"
        aria-label="Dismiss toast"
      >
        <XIcon size={14} />
      </button>
    </div>
  );
};
