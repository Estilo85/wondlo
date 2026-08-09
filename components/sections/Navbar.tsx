'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

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
                <Link href="/" className="font-display font-semibold text-[30px] text-[#2B2740]">
                    Wondlo
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors ${
                                    isActive ? 'text-[#C7B5F5]' : 'text-[#6B7280] hover:text-[#C7B5F5]'
                                }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                <button className="md:hidden text-[#2B2740]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}