import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#8B6BCB] text-white mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                    <div>
                        <h3 className="font-display font-semibold text-lg mb-2">Wondlo</h3>
                        <p className="text-white/90 text-sm leading-relaxed">
                            71-75 Shelton Street
                            <br />
                            United Kingdom
                        </p>
                    </div>

                    <div>
                        <h4 className="font-display font-semibold text-sm mb-3">Important Link</h4>
                        <ul className="space-y-2 text-white/90 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Safety Guidelines</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Report an Issue</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-semibold text-sm mb-3">Contact</h4>
                        <p className="text-white/90 text-sm">partnership@joinwondlo.com</p>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/20 text-center text-white/80 text-xs">
                    <p>Safety as a System™</p>
                    <p className="mt-1">Copyright © wondlo 2026</p>
                </div>
            </div>
        </footer>
    );
}