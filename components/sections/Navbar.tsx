'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = [
        { name: 'HOME', href: '/' },
        { name: 'COMMUNITY', href: '/community' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)]'
                    : 'bg-[#F6F4FE]'
            }`}
        >
            {/* =====================================================
                SAME CONTENT BOUNDS AS HERO / STATS / ADVENTURE PLANNING
            ====================================================== */}
            <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between px-6 sm:px-8 lg:px-10 xl:px-12">

                {/* =================================================
                    LOGO
                ================================================== */}
                <Link
                    href="/"
                    className="text-[#2B2740] transition-opacity hover:opacity-80"
                    style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '22px',
                        fontWeight: 700,
                        lineHeight: 1,
                    }}
                >
                    Wondlo
                </Link>


                {/* =================================================
                    DESKTOP NAVIGATION
                ================================================== */}
                <div className="hidden items-center gap-8 md:flex">

                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="transition-colors duration-200"
                                style={{
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    lineHeight: '20px',
                                    color: isActive
                                        ? '#7E6BB3'
                                        : '#2B2740',
                                }}
                            >
                                {link.name}
                            </Link>
                        );
                    })}


                    {/* =================================================
                        SIGN IN
                    ================================================== */}
                    <Link
                        href="/signin"
                        className="flex h-[30px] w-[84px] items-center justify-center rounded-[6px] transition-all duration-200 hover:bg-[#EDE7FB]"
                        style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '16px',
                            fontWeight: 600,
                            lineHeight: '20px',
                            color: '#2B2740',
                            border: '1px solid #7E6BB3',
                        }}
                    >
                        Sign In
                    </Link>


                    {/* =================================================
                        SIGN UP
                    ================================================== */}
                    <Link
                        href="/signup"
                        className="flex h-[30px] w-[84px] items-center justify-center rounded-[6px] transition-all duration-200 hover:bg-[#6A5A9E]"
                        style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '16px',
                            fontWeight: 600,
                            lineHeight: '20px',
                            color: '#FFFFFF',
                            backgroundColor: '#7E6BB3',
                        }}
                    >
                        Sign Up
                    </Link>

                </div>


                {/* =================================================
                    MOBILE MENU BUTTON
                ================================================== */}
                <button
                    className="text-[#2B2740] md:hidden"
                    aria-label="Open navigation menu"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

            </div>
        </nav>
    );
}