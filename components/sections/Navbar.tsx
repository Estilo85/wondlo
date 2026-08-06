'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Community', href: '/community' },
        { name: 'Sign In', href: '/signin' },
        { name: 'Sign Up', href: '/signup' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
            isScrolled ? 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)]' : 'bg-white'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="font-display font-semibold text-[30px] text-[#2B2740]">
                    Wondlo
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`relative text-sm font-medium transition-colors ${
                                    isActive ? 'text-[#8B6BCB]' : 'text-[#6B7280] hover:text-[#8B6BCB]'
                                }`}
                            >
                                {link.name}
                                {isActive && (
                                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#8B6BCB]"></span>
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-[#2B2740]"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-[#E8E5F3] p-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium ${
                                pathname === link.href ? 'text-[#8B6BCB]' : 'text-[#6B7280]'
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}