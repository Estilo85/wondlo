'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

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

    const isHomePage = pathname === '/';
    const isSignInPage = pathname === '/signin';
    const isSignUpPage = pathname === '/signup';

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 h-[55px] flex items-center transition-colors duration-300"
            style={{
                backgroundColor: isScrolled ? '#FFFFFF' : '#F6F4FE',
            }}
        >
            <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between px-6 sm:px-8 lg:px-10 xl:px-12">

                {/* =====================================================
                    LOGO
                ====================================================== */}
                <Link
                    href="/"
                    className="text-[#2B2740] tracking-[-0.3px]"
                    style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '22px',
                        fontWeight: 700,
                        lineHeight: 1,
                    }}
                >
                    Wondlo
                </Link>


                {/* =====================================================
                    RIGHT NAVIGATION
                ====================================================== */}
                <div className="flex items-center gap-5 sm:gap-6">

                    {/* =================================================
                        HOME / COMMUNITY
                    ================================================== */}
                    <div className="flex items-center gap-5 sm:gap-6">

                        {navLinks.map((link) => {
                            const isHome = link.href === '/';
                            const isActive = isHome
                                ? isHomePage
                                : pathname === link.href;

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="transition-colors duration-200"
                                    style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        lineHeight: 1,
                                        color: isActive
                                            ? '#7E6BB3'
                                            : '#2B2740',
                                    }}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}

                    </div>


                    {/* =================================================
                        SIGN IN
                    ================================================== */}
                    <Link
                        href="/signin"
                        className="flex h-[30px] w-[84px] items-center justify-center rounded-[6px] transition-all duration-200"
                        style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '16px',
                            fontWeight: 600,
                            lineHeight: 1,
                            color: isSignInPage
                                ? '#FFFFFF'
                                : '#2B2740',
                            backgroundColor: isSignInPage
                                ? '#7E6BB3'
                                : 'transparent',
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
                        className="flex h-[30px] w-[84px] items-center justify-center rounded-[6px] transition-all duration-200"
                        style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '16px',
                            fontWeight: 600,
                            lineHeight: 1,

                            // Filled on landing page and Sign Up page
                            color: isHomePage || isSignUpPage
                                ? '#FFFFFF'
                                : '#2B2740',

                            backgroundColor: isHomePage || isSignUpPage
                                ? '#7E6BB3'
                                : 'transparent',

                            border: '1px solid #7E6BB3',
                        }}
                    >
                        Sign Up
                    </Link>

                </div>
            </div>
        </nav>
    );
}