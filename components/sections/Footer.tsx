import Link from 'next/link';
import { FaTelegramPlane, FaInstagram, FaLinkedin, FaFacebook, FaYoutube, FaQuestionCircle } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#9B88C7] text-white py-12 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content - 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Column 1: Wondlo & Address */}
                    <div className="md:pr-8">
                        <h3 className="font-display font-semibold text-xl text-white mb-2">Wondlo</h3>
                        <p className="text-white/85 text-sm leading-relaxed">
                            71–75 Shelton Street
                            <br />
                            United Kingdom
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-4 mt-4">
                            <Link href="#" className="text-white/70 hover:text-white transition-colors">
                                <FaInstagram className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="text-white/70 hover:text-white transition-colors">
                                <FaLinkedin className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="text-white/70 hover:text-white transition-colors">
                                <FaFacebook className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="text-white/70 hover:text-white transition-colors">
                                <FaYoutube className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Important Links (with vertical divider) */}
                    <div className="md:border-l md:border-white/35 md:pl-8">
                        <h4 className="font-display font-semibold text-white/90 text-sm mb-3">Important Link</h4>
                        <ul className="space-y-2 text-white/85 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Safety Guidelines</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Report an Issue</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact (with vertical divider) */}
                    <div className="md:border-l md:border-white/35 md:pl-8">
                        <h4 className="font-display font-semibold text-white/90 text-sm mb-3">Contact</h4>
                        <p className="text-white/85 text-sm">partnership@wondlo.com</p>
                    </div>
                </div>

                {/* Bottom Row: Copyright (left) + Telegram Icon (right) */}
                <div className="mt-8 pt-6 border-t border-white/30 flex flex-col sm:flex-row justify-between items-center gap-4">
                    {/* Copyright - Left */}
                    <div className="text-white/70 text-sm text-center sm:text-left">
                        <p>Safety as a System®</p>
                        <p className="mt-1">Copyright © 2023 Wondlo</p>
                    </div>

                    {/* Telegram Icon - Right */}
                    <div className="flex items-center gap-3">
                        <span className="text-white/50 text-xs">Join us on</span>
                        <Link
                            href="/signup"
                            className="text-white/80 hover:text-white transition-colors"
                            aria-label="Telegram"
                        >
                            <FaTelegramPlane className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom-right help icon */}
            <div className="absolute right-6 bottom-6">
                <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center text-white">
                    <FaQuestionCircle className="w-5 h-5" />
                </button>
            </div>
        </footer>
    );
}