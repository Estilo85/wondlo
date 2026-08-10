'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { name: 'HOME', href: '/' },
        { name: 'COMMUNITY', href: '/community' },
    ];

    // Check if on auth pages (Sign In / Sign Up)
    const isAuthPage = pathname === '/signin' || pathname === '/signup';

    return (
        <nav className="h-[55px] bg-[#F9F7FF] flex items-center">
            <div className="max-w-7xl mx-auto px-8 w-full flex items-center justify-between">
                {/* Logo */}
                <Link 
                    href="/" 
                    className="font-display font-semibold text-[18px] text-[#2B2740] tracking-[-0.5px]"
                >
                    Wondlo
                </Link>

                {/* Right Navigation */}
                <div className="flex items-center gap-6">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href && !isAuthPage;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-[11px] font-medium uppercase tracking-[0.5px] transition-colors px-3 py-1.5 rounded-md ${
                                    isActive 
                                        ? 'bg-[#7E6BB3] text-white' 
                                        : 'text-[#2B2740]/70 hover:text-[#2B2740] hover:bg-[#EDE7FB]'
                                }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}

                    {/* Sign In Button */}
                    <Link
                        href="/signin"
                        className={`px-4 py-1.5 font-display font-semibold text-[11px] rounded-md transition-colors ${
                            pathname === '/signin'
                                ? 'bg-[#7E6BB3] text-white'
                                : 'bg-white border border-[#DDD7EA] text-[#2B2740] hover:bg-[#EDE7FB]'
                        }`}
                    >
                        Sign In
                    </Link>

                    {/* Sign Up Button */}
                    <Link
                        href="/signup"
                        className={`px-4 py-1.5 font-display font-semibold text-[11px] rounded-md transition-colors ${
                            pathname === '/signup'
                                ? 'bg-[#7E6BB3] text-white'
                                : 'bg-white border border-[#DDD7EA] text-[#2B2740] hover:bg-[#EDE7FB]'
                        }`}
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </nav>
    );
}