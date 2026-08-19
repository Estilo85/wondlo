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

    const currentPath = pathname?.replace(/\/$/, '') || '/';

    const isHomePage = currentPath === '/';
    const isCommunityPage = currentPath === '/community';
    const isSignInPage = currentPath === '/signin';
    const isSignUpPage = currentPath === '/signup';

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 h-[55px] flex items-center transition-colors duration-300"
            style={{
                backgroundColor: isScrolled ? '#FFFFFF' : '#F6F4FE',
            }}
        >
            <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between px-3 sm:px-8 lg:px-10 xl:px-12">

                {/* =====================================================
                    LOGO
                ====================================================== */}
                <Link
                    href="/"
                    className="flex-shrink-0 text-[#2B2740] tracking-[-0.3px]"
                    style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '22px',
                        fontWeight: 700,
                        lineHeight: 1,
                    }}
                >
                    <span className="text-[18px] sm:text-[22px]">
                        Wondlo
                    </span>
                </Link>


                {/* =====================================================
                    RIGHT NAVIGATION
                ====================================================== */}
                <div className="flex min-w-0 items-center gap-[6px] sm:gap-6">

                    {/* =================================================
                        HOME / COMMUNITY
                    ================================================== */}
                    <div className="flex min-w-0 items-center gap-[8px] sm:gap-6">

                        {navLinks.map((link) => {
                            const isHome = link.href === '/';

                            const isActive = isHome
                                ? isHomePage
                                : isCommunityPage;

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="whitespace-nowrap transition-colors duration-200"
                                    style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: '13px',
                                        fontWeight: 600,
                                        lineHeight: 1,
                                        color: isActive
                                            ? '#7E6BB3'
                                            : '#2B2740',
                                    }}
                                >
                                    <span className="sm:text-[16px]">
                                        {link.name}
                                    </span>
                                </Link>
                            );
                        })}

                    </div>


                    {/* =================================================
                        SIGN IN
                    ================================================== */}
                    <Link
                        href="/signin"
                        className="flex h-[28px] w-[62px] flex-shrink-0 items-center justify-center rounded-[6px] transition-all duration-200 sm:h-[30px] sm:w-[84px]"
                        style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '13px',
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
                        <span className="sm:text-[16px]">
                            Sign In
                        </span>
                    </Link>


                    {/* =================================================
                        SIGN UP
                    ================================================== */}
                    <Link
                        href="/signup"
                        className="flex h-[28px] w-[62px] flex-shrink-0 items-center justify-center rounded-[6px] transition-all duration-200 sm:h-[30px] sm:w-[84px]"
                        style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '13px',
                            fontWeight: 600,
                            lineHeight: 1,

                            color: isHomePage || isSignUpPage
                                ? '#FFFFFF'
                                : '#2B2740',

                            backgroundColor: isHomePage || isSignUpPage
                                ? '#7E6BB3'
                                : 'transparent',

                            border: '1px solid #7E6BB3',
                        }}
                    >
                        <span className="sm:text-[16px]">
                            Sign Up
                        </span>
                    </Link>

                </div>
            </div>
        </nav>
    );
}