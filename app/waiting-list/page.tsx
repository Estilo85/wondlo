'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

export default function WaitingListPage() {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = 'https://t.me/joinwandlo';
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-[#FAF9FE] flex flex-col">
            <Navbar />
            <div className="flex-1 flex items-center justify-center px-4 py-12">
                <div className="w-full max-w-[480px] bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#E8E5F3] p-8 md:p-12 text-center">
                    {/* Icon */}
                    <div className="w-20 h-20 rounded-full bg-[#EDE7FB] flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-[#C7B5F5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </div>

                    {/* Heading */}
                    <h1 className="font-display font-bold text-3xl text-[#2B2740] mb-2">
                        Know before you go
                    </h1>

                    {/* Subtitle */}
                    <p className="text-[#6B7280] text-sm mb-6">
                        Know if an adventure is safe by company name, website, or social media handle.
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-8">
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

                    {/* Join Button */}
                    <Link
                        href="/redirect"
                        className="w-full h-14 bg-[#C7B5F5] text-[#2B2740] font-display font-semibold text-base rounded-xl hover:bg-[#7E6BB3] hover:text-white transition-all flex items-center justify-center"
                    >
                        Join the free waitlist
                    </Link>

                    {/* Footer Text */}
                    <p className="text-[#6B7280] text-xs mt-4">
                        Free early access • Launching September 2026
                    </p>

                    {/* Auto-redirect info */}
                    <p className="text-[#6B7280] text-xs mt-6">
                        You'll be redirected automatically in 5 seconds.
                    </p>
                    <div className="flex justify-center mt-3">
                        <div className="spinner"></div>
                    </div>
                    <p className="text-[#6B7280] text-xs mt-3">
                        If you're not redirected,{' '}
                        <a
                            href="https://t.me/joinwandlo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#C7B5F5] hover:underline"
                        >
                            click here
                        </a>
                        .
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}