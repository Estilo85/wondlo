import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer-gradient text-slate-400 py-12">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800">
                    <div>
                        <h3 className="font-display font-semibold text-xl text-white mb-2">🌍 Wondlo</h3>
                        <p className="text-sm leading-relaxed">71-75 Shelton Street<br />United Kingdom</p>
                    </div>

                    <div>
                        <h4 className="font-display font-semibold text-white text-sm mb-3">Important Link</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Safety Guidelines</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Report an Issue</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-semibold text-white text-sm mb-3">Contact</h4>
                        <p className="text-sm">partnership@joinwondlo.com</p>
                    </div>
                </div>

                <div className="pt-8 text-center text-sm">
                    <p>Safety as a System™</p>
                    <p className="mt-1">Copyright © wondlo 2026</p>
                </div>
            </div>
        </footer>
    );
}