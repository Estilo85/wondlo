'use client';

import { useRouter } from 'next/navigation';

interface NotLaunchedModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function NotLaunchedModal({ isOpen, onClose }: NotLaunchedModalProps) {
    const router = useRouter();

    if (!isOpen) return null;

    const handleJoinWaitingList = () => {
        onClose();
        router.push('/signup');
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 md:p-12 max-w-md w-full mx-4 text-center relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-5 text-slate-400 hover:text-slate-700 transition-colors text-2xl"
                >
                    ✕
                </button>

                <div className="w-20 h-20 rounded-full bg-[#EDE7FB] flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-[#7E6BB3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </div>

                <h2 className="font-display font-semibold text-2xl text-[#2B2740] mb-2">Know before you go</h2>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                    Know if an adventure is safe by company name, website, or social media handle.
                </p>

                <div className="space-y-2 my-6">
                    <div className="flex items-center justify-center gap-2 text-sm text-[#2B2740]">
                        <svg className="w-4 h-4 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>3 free safety checks</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-[#2B2740]">
                        <svg className="w-4 h-4 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>risk checklist</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-[#2B2740]">
                        <svg className="w-4 h-4 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Questions to ask before paying</span>
                    </div>
                </div>

                <button
                    onClick={handleJoinWaitingList}
                    className="w-full mt-2 px-6 py-3 bg-[#7E6BB3] text-white font-display font-semibold rounded-xl hover:bg-[#6A5A9E] transition-all"
                >
                    Join the free waitlist
                </button>

                <p className="text-[#6B7280] text-xs mt-4">
                    Free early access • Launching September 2026
                </p>
            </div>
        </div>
    );
}