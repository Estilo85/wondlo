'use client';

import { useRouter } from 'next/navigation';

interface NotLaunchedModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function NotLaunchedModal({ isOpen, onClose }: NotLaunchedModalProps) {
    const router = useRouter();

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-5 text-slate-400 hover:text-slate-700 transition-colors text-2xl">✕</button>
                <div className="text-5xl mb-4">🚀</div>
                <h2 className="font-display font-semibold text-2xl text-[#2F2F3A] mb-2">Coming Soon!</h2>
                <p className="text-[#6B7280] text-sm leading-relaxed">The Wondlo safety intelligence platform is currently in development.</p>
                <p className="text-[#2F2F3A] text-sm font-medium mt-4">Join our waiting list to get early access!</p>
                <button onClick={() => { onClose(); router.push('/signup'); }} className="btn-primary w-full mt-6">
                    Join Waiting List →
                </button>
            </div>
        </div>
    );
}