import Link from 'next/link';
import { FaTelegramPlane } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#7E6BB3] text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/10">
                    <div>
                        <h3 className="font-display font-semibold text-xl text-white mb-2">Wondlo</h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                            71–75 Shelton Street
                            <br />
                            United Kingdom
                        </p>
                    </div>

                    <div>
                        <h4 className="font-display font-semibold text-white/90 text-sm mb-3">Important Link</h4>
                        <ul className="space-y-2 text-white/70 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Safety Guidelines</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Report an Issue</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-semibold text-white/90 text-sm mb-3">Contact</h4>
                        <p className="text-white/70 text-sm">partnership@wondlo.com</p>
                        <div className="flex gap-4 mt-3">
                            <Link
                                href="/signup"
                                className="text-white/70 hover:text-white transition-colors"
                                aria-label="Telegram"
                            >
                                <FaTelegramPlane className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="pt-8 text-center text-white/50 text-sm">
                    <p>Safety as a System®</p>
                    <p className="mt-1">Copyright © 2026 Wondlo</p>
                </div>
            </div>
        </footer>
    );
}