'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import NotLaunchedModal from '../modals/NotLaunchedModal';

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAnalyzeClick = () => {
        setIsModalOpen(true);
    };

    const chips = [
        'Parasailing', 'Kayaking', 'Trekking', 'Ziplining',
        'Snowboarding', 'Cave Diving', 'ATV', 'More'
    ];

    return (
        <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-[#FAF8FF]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <span className="inline-block px-4 py-1.5 bg-[#EDE7FB] text-[#7E6BB3] font-display font-medium text-sm rounded-full">
                            AI Powered Adventure Safety
                        </span>

                        <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-[#2B2740] leading-[110%] tracking-[-1px]">
                            Know if it's safe <br />
                            <span className="text-[#8B6BCB]">before you pay a deposit.</span>
                        </h1>

                        <p className="text-[#6B7280] text-base md:text-lg leading-relaxed max-w-xl">
                            Check an adventure provider by company name, website or social media handle.
                        </p>

                        {/* Search Box */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="text"
                                placeholder="Search by company name, website or social media handle"
                                className="flex-1 h-[60px] px-5 bg-white border border-[#E8E5F3] rounded-2xl text-[#2B2740] placeholder:text-[#A1A1AA] focus:outline-none focus:border-[#8B6BCB] focus:shadow-[0_0_0_4px_rgba(139,107,203,0.15)] transition-all text-sm"
                            />
                            <button
                                onClick={handleAnalyzeClick}
                                className="h-[60px] px-8 bg-[#8B6BCB] text-white font-display font-semibold rounded-2xl hover:bg-[#7E6BB3] hover:-translate-y-0.5 transition-all whitespace-nowrap text-sm"
                            >
                                Analyse Adventure →
                            </button>
                        </div>

                        {/* Adventure Chips */}
                        <div className="flex flex-wrap gap-2">
                            {chips.map((chip, index) => (
                                <span
                                    key={index}
                                    className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                                        chip === 'More'
                                            ? 'bg-[#8B6BCB] text-white'
                                            : 'bg-white text-[#6B7280] border border-[#E8E5F3] hover:border-[#8B6BCB] transition-colors'
                                    }`}
                                >
                                    {chip}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Safety Score Card */}
                    <div className="relative hidden lg:block">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="rounded-[22px] overflow-hidden shadow-lg h-64">
                                    <img src="/images/paragliding.jpg" alt="Paragliding" className="w-full h-full object-cover" />
                                </div>
                                <div className="rounded-[22px] overflow-hidden shadow-lg h-48">
                                    <img src="/images/kayaking.jpg" alt="Kayaking" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="rounded-[22px] overflow-hidden shadow-lg h-48">
                                    <img src="/images/hiking.jpg" alt="Mountain Hiking" className="w-full h-full object-cover" />
                                </div>
                                <div className="rounded-[22px] overflow-hidden shadow-lg h-64">
                                    <img src="/images/snowboarding.jpg" alt="Snowboarding" className="w-full h-full object-cover" />
                            </div>
                            </div>
                        </div>

                        {/* Safety Score Card - Matches Image Exactly */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[280px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(139,107,203,0.18)] p-5 border border-[#E8E5F3]">
                            {/* Title */}
                            <p className="text-xs text-[#6B7280] font-medium font-sans">Safety Score</p>

                            {/* Score & Operator Name */}
                            <div className="flex items-end justify-between mb-2">
                                <div>
                                    <span className="font-display font-bold text-4xl text-[#2B2740]">85</span>
                                    <span className="font-display font-bold text-2xl text-[#6B7280]">/100</span>
                                </div>
                                <span className="px-3 py-1 bg-[#EDE7FB] text-[#7E6BB3] text-xs font-semibold rounded-full font-sans">Good</span>
                            </div>

                            {/* Operator Name */}
                            <p className="text-sm text-[#2B2740] font-medium font-sans mb-3">Summit Trails Expeditions</p>

                            {/* Incident History */}
                            <div className="mb-3">
                                <p className="text-xs text-[#6B7280] font-medium font-sans">Incident History</p>
                                <p className="text-sm text-[#2B2740] font-medium font-sans">5 Years - No Reported Incidents</p>
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-[#E8E5F3] mb-3"></div>

                            {/* Verification & Compliance */}
                            <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                    <svg className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-xs text-[#2B2740] font-sans">Equipment Maintenance</span>
                                    <span className="text-xs text-[#6B7280] font-sans ml-auto">Inspection Every 3 Months</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-[#22C55E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-xs text-[#2B2740] font-sans">Operational Transparency</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-[#22C55E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-xs text-[#2B2740] font-sans">Registered & Licenced</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <NotLaunchedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}