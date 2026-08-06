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
        <nav className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
            isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}>
            <div className="container h-full flex items-center justify-between">
                <Link href="/" className="font-display font-semibold text-[30px] text-white">
                    Wondlo
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm text-white/80 hover:text-white transition-colors">Home</Link>
                    <Link href="/community" className="text-sm text-white/80 hover:text-white transition-colors">Community</Link>
                    <Link href="/signin" className="text-sm text-white/80 hover:text-white transition-colors">Sign In</Link>
                    <Link
                        href="/signup"
                        className="px-5 py-2 bg-[#C7B5F5] text-[#2B2740] font-semibold text-sm rounded-lg hover:bg-[#7E6BB3] hover:text-white transition-colors"
                    >
                        Sign Up
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-[#E5E7EB] p-4 flex flex-col gap-4">
                    <Link href="/" className="text-sm text-[#2B2740] hover:text-[#C7B5F5] transition-colors">Home</Link>
                    <Link href="/community" className="text-sm text-[#2B2740] hover:text-[#C7B5F5] transition-colors">Community</Link>
                    <Link href="/signin" className="text-sm text-[#2B2740] hover:text-[#C7B5F5] transition-colors">Sign In</Link>
                    <Link href="/signup" className="px-5 py-2 bg-[#C7B5F5] text-[#2B2740] font-semibold text-sm rounded-lg hover:bg-[#7E6BB3] hover:text-white transition-colors text-center">
                        Sign Up
                    </Link>
                </div>
            )}
        </nav>
    );
}