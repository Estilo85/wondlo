'use client';

import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

interface AnalyzeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AnalyzeModal({ isOpen, onClose }: AnalyzeModalProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-8 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <FaTimes size={24} />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#00C853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#282740]">You're on the list!</h2>
            <p className="text-gray-600 mt-2">We'll notify you when we launch.</p>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-[#282740] text-center mb-2">
              Know before you go
            </h2>
            
            <p className="text-gray-600 text-center mb-6">
              Know if an adventure is safe by company name, website, or social media handle.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="badge-green">3 free safety checks</span>
              <span className="badge-blue">risk checklist</span>
              <span className="badge-orange">Questions to ask before paying</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input-field text-center text-lg"
              />

              <button
                type="submit"
                className="w-full py-4 bg-[#C7B5F5] text-[#282740] rounded-xl font-semibold text-lg hover:opacity-90 transition-all"
              >
                Join the free waitlist
              </button>

              <p className="text-center text-gray-400 text-sm">
                Free early access • Launching September 2026
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}