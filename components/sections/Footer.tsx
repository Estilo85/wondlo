import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#C7B5F5] text-[#2B2740] py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-[#2B2740]/10">
                    {/* Column 1: Wondlo & Address */}
                    <div>
                        <h3 className="font-display font-semibold text-xl text-[#2B2740] mb-2">Wondlo</h3>
                        <p className="text-[#2B2740]/70 text-sm leading-relaxed">
                            71-75 Shelton Street
                            <br />
                            United Kingdom
                        </p>
                    </div>

                    {/* Column 2: Important Links */}
                    <div>
                        <h4 className="font-display font-semibold text-[#2B2740] text-sm mb-3">Important Link</h4>
                        <ul className="space-y-2 text-[#2B2740]/70 text-sm">
                            <li><a href="#" className="hover:text-[#2B2740] transition-colors">Safety Guidelines</a></li>
                            <li><a href="#" className="hover:text-[#2B2740] transition-colors">Report an Issue</a></li>
                            <li><a href="#" className="hover:text-[#2B2740] transition-colors">Help Center</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 className="font-display font-semibold text-[#2B2740] text-sm mb-3">Contact</h4>
                        <p className="text-[#2B2740]/70 text-sm">partnership@joinwondlo.com</p>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 text-center text-[#2B2740]/60 text-sm">
                    <p>Safety as a System™</p>
                    <p className="mt-1">Copyright © wondlo 2026</p>
                </div>
            </div>
        </footer>
    );
}