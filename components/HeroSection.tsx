'use client';

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import SafetyCard from './SafetyCard';
import AnalyzeModal from './AnalyzeModal';

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const adventureTypes = [
    'Parasailing', 'Snowboarding', 'Trekking', 'Kayaking',
    'ATV', 'Ziplining', 'Cave diving', 'Paragliding',
    'Volcano boarding', 'Heli skiing', 'More'
  ];

  return (
    <>
      <section className="bg-[#FAF9FE] py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#282740] leading-tight mb-6">
                Know if it's{' '}
                <span className="text-[#C7B5F5]">safe</span>
                <br />
                before you pay
                <br />
                a deposit.
              </h1>

              <p className="text-gray-600 text-lg mb-8">
                Check an adventure provider by company name, website, or social media handle.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by company name, website, or social media handle"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#EDE7FB] focus:outline-none focus:ring-2 focus:ring-[#C7B5F5] focus:border-transparent"
                  />
                </div>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#C7B5F5] text-[#282740] px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-all whitespace-nowrap"
                >
                  Analyse Adventure →
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-gray-600 mr-2">Adventure type:</span>
                {adventureTypes.map((type) => (
                  <span
                    key={type}
                    className="px-4 py-1 bg-[#EDE7FB] text-[#7E6BB3] rounded-full text-sm hover:bg-[#C7B5F5] hover:text-[#282740] cursor-pointer transition-all"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column - Safety Card */}
            <div>
              <SafetyCard />
            </div>
          </div>
        </div>
      </section>

      <AnalyzeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}