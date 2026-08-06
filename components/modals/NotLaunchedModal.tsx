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

                <div className="text-5xl mb-4">🚀</div>
                <h2 className="font-display font-semibold text-2xl text-[#2B2740] mb-2">Coming Soon!</h2>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                    The Wondlo safety intelligence platform is currently in development.
                    We're working hard to bring you the best adventure safety insights.
                </p>
                <p className="text-[#2B2740] text-sm font-medium mt-4">
                    Join our waiting list to get early access!
                </p>
                <button
                    onClick={handleJoinWaitingList}
                    className="w-full mt-6 px-6 py-3 bg-[#8B6BCB] text-white font-display font-semibold rounded-xl hover:bg-[#7E6BB3] transition-all"
                >
                    Join Waiting List →
                </button>
            </div>
        </div>
    );
}