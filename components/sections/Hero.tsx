'use client';

import { useState } from 'react';
import Image from 'next/image';
import NotLaunchedModal from '../modals/NotLaunchedModal';
import { searchOperators } from '@/services/api';
import { OperatorSummary } from '@/types';
import DesignImg from '../../app/context/Design 1.png';

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<OperatorSummary[]>([]);
    const [error, setError] = useState('');

    const adventureTypes = [
        'Parasailing', 'Snowboarding', 'Trekking', 'Kayaking', 'ATV', 'Ziplining', 'Cave diving', 'Paragliding', 'Volcano boarding', 'Heli skiing'
    ];

    const demoScores = [85, 75, 50, 25];
    const demoScore = demoScores[Math.floor(Math.random() * demoScores.length)];

    const handleSearch = async () => {
        if (!query.trim()) {
            setError('Enter a company name, website, or social handle to start.');
            setResults([]);
            return;
        }

        setLoading(true);
        setError('');
        setResults([]);

        try {
            const data = await searchOperators(query.trim());

            if (data?.results?.length > 0) {
                setResults(data.results.slice(0, 3));
            } else {
                setError('No matching operators found. Try a different name or website.');
            }
        } catch (err) {
            setError('Could not retrieve search results. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Coordinates in Figma are relative to page top; Navbar occupies 54px.
    // We position items inside this hero so their top values are offset by -54.
    return (
        <section className="relative bg-[#F6F4FE]">
            <div className="mx-auto relative" style={{width: 1440, height: 840}}>
                {/* H1/H2 block at (0,54) -> within this component top: 0 */}
                <div style={{position: 'absolute', left: 0, top: 0, maxWidth: 665}}>
                    <div style={{paddingLeft: 64, paddingTop: 24, paddingRight: 24}}>
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#EDE7FB] text-[#7E6BB3] text-[11px] font-semibold tracking-[0.18em] uppercase mb-5">Adventure Safety Intelligence</span>
                        <h1 className="font-display font-extrabold text-[#2B2740] tracking-[-0.035em]" style={{fontSize: '96px', lineHeight: '88px', letterSpacing: '-0.035em'}}>
                            Know if it's <span className="text-[#8B6BCB]">safe</span>
                            <br /> before you pay a deposit.
                        </h1>

                        <p className="font-sans text-[18px] font-medium mt-6 text-[#6B7280] max-w-[560px]" style={{lineHeight: '32px'}}>
                            Check an adventure provider by company name, website, or social media handle.
                        </p>
                    </div>
                </div>

                {/* Design image at (684,74) -> top relative inside hero = 20px */}
                <div style={{position: 'absolute', left: 684, top: 20, width: 692, height: 389, borderRadius: 12, overflow: 'hidden'}}>
                    <Image src={DesignImg} alt="Design" width={692} height={389} className="object-cover" priority />
                </div>

                {/* Search section at (61,475) */}
                <div style={{position: 'absolute', left: 61, top: 475, width: 870, height: 190}}>
                    <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }} className="flex items-center gap-4 bg-white rounded-[56px] px-6 py-5 shadow-[0_20px_40px_rgba(43,39,64,0.08)] border border-[#ECE6F8]">
                        <div className="flex items-center gap-3 text-[#9CA3AF]">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" /></svg>
                        </div>
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search by company name, website, or social media handle"
                            className="flex-1 bg-transparent outline-none text-[16px] font-medium text-[#2B2740] placeholder:text-[#9CA3AF]"
                            style={{minWidth: 0}}
                        />
                        <button type="submit" className="ml-4 h-14 px-8 bg-[#8B6BCB] text-white rounded-full font-semibold text-sm shadow-lg hover:bg-[#7A5BB8] transition-colors">
                            Analyse Adventure →
                        </button>
                    </form>

                    <div className="flex flex-wrap items-center gap-3 mt-4">
                        {adventureTypes.slice(0, 10).map((t, i) => (
                            <span key={i} className="px-4 py-2 rounded-full text-sm bg-[#F0EBFF] text-[#7E6BB3] font-medium">{t}</span>
                        ))}
                    </div>
                </div>

                {/* Safety card overlay at (1113,322) -> top inside hero = 268 */}
                <div style={{position: 'absolute', left: 1113, top: 268, width: 288, height: 375}}>
                    <div className="w-full h-full bg-white rounded-[32px] p-6 shadow-[0_30px_80px_rgba(43,39,64,0.12)] border border-[#ECE6F8]" style={{fontFamily: 'var(--font-inter)'}}>
                        <div className="text-xs text-[#6B7280] uppercase tracking-[0.2em] font-semibold">Safety Score</div>
                        <div className="flex items-start justify-between mt-4">
                            <div>
                                <div className="text-5xl font-bold text-[#2B2740] leading-none">{results.length > 0 ? (results[0].safetyScore ?? demoScore) : demoScore}</div>
                                <div className="text-xs text-[#6B7280] mt-1">/100</div>
                            </div>
                            <div className="text-sm text-[#8B6BCB] font-semibold mt-1">{(results.length > 0 ? (results[0].safetyScore ?? demoScore) : demoScore) >= 70 ? 'Good' : ((results.length > 0 ? (results[0].safetyScore ?? demoScore) : demoScore) >= 40 ? 'Fair' : 'Poor')}</div>
                        </div>

                        <div className="mt-6 text-sm text-[#6B7280] space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="text-xs font-semibold text-[#2B2740]">Incident History</div>
                                <div className="text-xs">5 Years - No Reported Incidents</div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="text-xs font-semibold text-[#2B2740]">Equipment Maintenance</div>
                                <div className="text-xs">Inspection Every 3 Months</div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="text-xs font-semibold text-[#2B2740]">Operational Transparency</div>
                                <div className="text-xs">Registered &amp; Licenced</div>
                            </div>
                        </div>

                        <div className="mt-6 w-full bg-[#F1EBFA] h-3 rounded-full overflow-hidden">
                            <div className="bg-[#8B6BCB] h-full rounded-full" style={{width: `${results.length > 0 ? (results[0].safetyScore ?? demoScore) : demoScore}%`}} />
                        </div>
                    </div>
                </div>

                {/* Data points at (61,689) -> top inside hero = 635 */}
                <div style={{position: 'absolute', left: 61, top: 635, width: 1316, height: 150}}>
                    <div className="w-full h-full rounded-[32px] bg-white/0 flex items-center justify-between px-8 py-6" style={{boxShadow: '0px 30px 80px rgba(43, 39, 64, 0.08)'}}>
                        {[
                            { value: '1,000+', label: 'Users' },
                            { value: '190+', label: 'Countries' },
                            { value: '500,000+', label: 'Data points' },
                            { value: '27', label: 'Adventure Categories' }
                        ].map((item, index) => (
                            <div key={index} className={index === 0 ? 'text-left' : 'text-left border-l border-[#E8E5F3] pl-10'}>
                                <div className="text-[40px] font-extrabold text-[#2B2740]">{item.value}</div>
                                <div className="text-sm font-medium text-[#6B7280] mt-2">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <NotLaunchedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
        </section>
    );
}