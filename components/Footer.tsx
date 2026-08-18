import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube, FaTelegram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#282740] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#C7B5F5]">Wondlo</h3>
            <p className="text-gray-400 text-sm mb-4">
              71-75 Shelton Street<br />
              United Kingdom
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#C7B5F5] transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C7B5F5] transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C7B5F5] transition-colors">
                <FaTiktok size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C7B5F5] transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Important Link</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-[#C7B5F5] transition-colors">Safety Guidelines</Link></li>
              <li><Link href="#" className="hover:text-[#C7B5F5] transition-colors">Report an Issue</Link></li>
              <li><Link href="#" className="hover:text-[#C7B5F5] transition-colors">Help Center</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <p className="text-gray-400">
              <a href="mailto:partnership@joinwondlo.com" className="hover:text-[#C7B5F5] transition-colors">
                partnership@joinwondlo.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            Safety as a System™ • Copyright © wondlo 2026
          </p>
          
          <a 
            href={process.env.NEXT_PUBLIC_TELEGRAM_GROUP_URL || 'https://t.me/+YOUR_GROUP_LINK'}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C7B5F5] p-3 rounded-full hover:opacity-90 transition-colors"
          >
            <FaTelegram className="text-[#282740] text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}