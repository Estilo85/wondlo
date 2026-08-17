'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-[#EDE7FB] sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - WITHOUT ICON */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-[#282740]">Wondlo</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors ${
                pathname === '/' 
                  ? 'text-[#7E6BB3] border-b-2 border-[#C7B5F5] pb-1' 
                  : 'text-[#282740] hover:text-[#7E6BB3]'
              }`}
            >
              HOME
            </Link>
            <Link 
              href="/community" 
              className="text-sm font-medium text-[#282740] hover:text-[#7E6BB3] transition-colors"
            >
              COMMUNITY
            </Link>
            <Link 
              href="/signin" 
              className="text-sm font-medium px-6 py-2 border-2 border-[#C7B5F5] text-[#7E6BB3] rounded-xl hover:bg-[#F6F4FE] transition-all"
            >
              Sign In
            </Link>
            <Link 
              href="/signup" 
              className="text-sm font-medium px-6 py-2 bg-[#C7B5F5] text-[#282740] rounded-xl hover:opacity-90 transition-all"
            >
              Sign Up
            </Link>
          </nav>

          {/* Mobile Menu */}
          <button className="md:hidden text-[#282740]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}