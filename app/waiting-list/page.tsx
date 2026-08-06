'use client';

import { useEffect } from 'react';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

export default function WaitingListPage() {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = 'https://t.me/joinwandlo';
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-[#FAF8FF] flex flex-col">
            <Navbar />
            <div className="flex-1 flex items-center justify-center px-4 py-10">
                <div className="w-full max-w-[480px] bg-white rounded-[22px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#E8E5F3] p-12 text-center">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>

                    <h1 className="font-bold text-3xl text-[#2F2F3A]">You're in!</h1>

                    <p className="text-[#6B7280] text-sm mt-2">Thanks for joining.</p>
                    <p className="text-[#6B7280] text-sm mt-2">
                        You're being redirected to our Telegram Community...
                    </p>

                    <div className="flex justify-center mt-6">
                        <div className="spinner"></div>
                    </div>

                    <p className="text-[#6B7280] text-sm mt-6">Redirecting...</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}