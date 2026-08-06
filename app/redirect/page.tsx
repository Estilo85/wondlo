'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

export default function RedirectPage() {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = 'https://t.me/joinwandlo';
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            <div className="flex-1 flex items-center justify-center px-4 py-12">
                <div className="max-w-md w-full text-center">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h1 className="font-display font-bold text-3xl text-[#2F2F3A]">You're in!</h1>
                    <p className="text-[#6B7280] text-sm mt-2">Thanks for joining.</p>
                    <p className="text-[#6B7280] text-sm mt-2">You're being redirected to our Telegram Community...</p>
                    <div className="flex justify-center mt-6"><div className="spinner"></div></div>
                    <p className="text-[#6B7280] text-sm mt-6">Redirecting...</p>
                    <Link href="https://t.me/joinwandlo" className="btn-primary w-full mt-6 text-sm">
                        Join Telegram Now
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}