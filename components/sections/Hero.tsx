'use client';

import { useState } from 'react';
import NotLaunchedModal from '../modals/NotLaunchedModal';

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const adventureTypes = [
        'Parasailing', 'Kayaking', 'Ziplining', 'Trekking',
        'Snowboarding', 'Scuba Diving', 'More'
    ];

    return (
        <section className="hero-gradient min-h-screen flex items-center pt-20 section-padding">
            <div className="container">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-[110%] tracking-[-1px]">
                        Know if it's safe <br />
                        <span className="text-[#8B6BCB]">before you pay a deposit.</span>
                    </h1>

                    <p className="text-slate-300 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
                        Check an adventure provider by company name, website, or social media handle.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 mt-8 max-w-2xl mx-auto">
                        <input
                            type="text"
                            placeholder="Search by company name, website, or social media handle"
                            className="flex-1 px-5 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#8B6BCB] transition-all text-sm"
                        />
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-8 py-4 bg-[#8B6BCB] text-white font-display font-semibold rounded-lg hover:bg-[#7A5BB8] hover:-translate-y-0.5 transition-all whitespace-nowrap text-sm"
                        >
                            Analyse Adventure →
                        </button>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
                        <span className="text-slate-400 text-sm font-medium">Adventure Type:</span>
                        {adventureTypes.map((type, index) => (
                            <span
                                key={index}
                                className={`px-4 py-1.5 rounded-full text-sm ${
                                    type === 'More'
                                        ? 'bg-[#8B6BCB]/20 text-[#D8C8F1]'
                                        : 'bg-white/10 text-slate-200'
                                }`}
                            >
                                {type}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <NotLaunchedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}