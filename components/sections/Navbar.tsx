'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 h-[54px] transition-all duration-300 ${
            isScrolled ? 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)]' : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
                {/* Logo with Circular Image */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full overflow-hidden bg-[#8B6BCB] flex items-center justify-center">
                        <img 
                            src="/wondlo-logo.png" 
                            alt="Wondlo" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span className="font-display font-semibold text-[20px] text-[#2F2F3A]">
                        Wondlo
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    <Link href="/" className="text-sm text-[#6B7280] hover:text-[#2F2F3A] transition-colors">Home</Link>
                    <Link href="/community" className="text-sm text-[#6B7280] hover:text-[#2F2F3A] transition-colors">Community</Link>
                    <Link href="#how-it-works" className="text-sm text-[#6B7280] hover:text-[#2F2F3A] transition-colors">How it works</Link>
                    <Link href="/signin" className="text-sm px-3 py-1.5 rounded-full border border-[#E8E5F3] text-[#2F2F3A] hover:bg-white/80 transition-colors">Sign In</Link>
                    <Link
                        href="/signup"
                        className="px-4 py-2 bg-[#8B6BCB] text-white font-semibold text-sm rounded-[14px] hover:bg-[#7A5BB8] transition-colors"
                    >
                        Sign Up
                    </Link>
                </div>

                <button
                    className="md:hidden text-[#2F2F3A]"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-[#E8E5F3] p-4 flex flex-col gap-4">
                    <Link href="/" className="text-sm text-[#2F2F3A] hover:text-[#8B6BCB] transition-colors">Home</Link>
                    <Link href="#how-it-works" className="text-sm text-[#2F2F3A] hover:text-[#8B6BCB] transition-colors">How it works</Link>
                    <Link href="/signin" className="text-sm text-[#2F2F3A] hover:text-[#8B6BCB] transition-colors">Sign In</Link>
                    <Link href="/signup" className="px-5 py-2.5 bg-[#8B6BCB] text-white font-semibold text-sm rounded-[14px] hover:bg-[#7A5BB8] transition-colors text-center">
                        Sign Up
                    </Link>
                </div>
            )}
        </nav>
    );
}