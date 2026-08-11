'use client';

import { useEffect, useState } from 'react';
import NotLaunchedModal from '../modals/NotLaunchedModal';

type SafetyCardData = {
    score: number;
    status: string;
    provider: string;
    details: {
        label: string;
        value: string;
    }[];
    isExample?: boolean;
};

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    /*
     * =============================================================
     * SAFETY CARD DEMO DATA
     *
     * Card sequence:
     *
     * 0: 85 / 100
     * 1: 75 / 100
     * 2: 25 / 100
     * 3: 50 / 100
     *
     * Each card is displayed for 60 seconds.
     * =============================================================
     */
    const safetyCards: SafetyCardData[] = [
        {
            score: 85,
            status: 'Good',
            provider: 'Example Provider',
            details: [
                {
                    label: 'Incident History',
                    value: '5 Years - No Reported Incidents',
                },
                {
                    label: 'Equipment Maintenance',
                    value: 'Inspection Every 3 Months',
                },
                {
                    label: 'Operational Transparency',
                    value: 'Registered & Licensed',
                },
            ],
            isExample: true,
        },

        {
            score: 75,
            status: 'Moderate',
            provider: 'Example Provider',
            details: [
                {
                    label: 'Safety Sentiment',
                    value: 'Generally Positive',
                },
                {
                    label: 'Risk Assessment',
                    value: 'Moderate Risk',
                },
                {
                    label: 'Quality of Experience',
                    value: 'Good',
                },
            ],
            isExample: true,
        },

        {
            score: 25,
            status: 'High Risk',
            provider: 'Example Provider',
            details: [
                {
                    label: 'Safety Sentiment',
                    value: 'Mostly Negative',
                },
                {
                    label: 'Risk Assessment',
                    value: 'High Risk',
                },
                {
                    label: 'Quality of Experience',
                    value: 'Needs Improvement',
                },
            ],
            isExample: true,
        },

        {
            score: 50,
            status: 'Caution',
            provider: 'Example Provider',
            details: [
                {
                    label: 'Safety Sentiment',
                    value: 'Mixed',
                },
                {
                    label: 'Risk Assessment',
                    value: 'Moderate Risk',
                },
                {
                    label: 'Quality of Experience',
                    value: 'Average',
                },
            ],
            isExample: true,
        },
    ];

    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const [isCardVisible, setIsCardVisible] = useState(true);

    /*
     * =============================================================
     * CYCLE SAFETY CARD EVERY 60 SECONDS
     * =============================================================
     */
    useEffect(() => {
        const interval = setInterval(() => {
            // Fade the current card out first.
            setIsCardVisible(false);

            // Change the card after the fade-out.
            setTimeout(() => {
                setActiveCardIndex((currentIndex) => {
                    return (currentIndex + 1) % safetyCards.length;
                });

                setIsCardVisible(true);
            }, 350);
        }, 60000);

        return () => {
            clearInterval(interval);
        };
    }, [safetyCards.length]);

    const activeCard = safetyCards[activeCardIndex];

    const handleAnalyzeClick = () => {
        setIsModalOpen(true);
    };

    const chips = [
        'Parasailing',
        'Snowboarding',
        'Trekking',
        'Kayaking',
        'ATV',
        'Ziplining',
        'Cave diving',
        'Paragliding',
        'Volcano boarding',
        'Heli skiing',
        'More',
    ];

    return (
        <section className="bg-[#F7F5FD] pt-[112px] pb-8 md:pt-[124px] md:pb-10">
            <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-10 xl:px-12">

                {/* =====================================================
                    HERO CONTENT
                ====================================================== */}
                <div className="grid grid-cols-1 items-start lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:gap-10 xl:gap-14">

                    {/* =================================================
                        LEFT SIDE
                    ================================================== */}
                    <div className="relative z-10 pt-1">

                        {/* =================================================
                            EYEBROW
                        ================================================== */}
                        <div
                            className="mb-7 inline-flex h-[34px] items-center gap-2 rounded-full px-[15px]"
                            style={{
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '15px',
                                fontWeight: 500,
                                background:
                                    'linear-gradient(90deg, #EDE7FB 0%, #C7B5F5 100%)',
                                color: '#806DB6',
                            }}
                        >
                            {/* Shield + checkmark */}
                            <svg
                                className="h-[18px] w-[18px] flex-shrink-0"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M12 3L19 6V11C19 15.55 16.01 19.74 12 21C7.99 19.74 5 15.55 5 11V6L12 3Z"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />

                                <path
                                    d="M9 12L11 14L15 10"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            <span>
                                Adventure Safety Intelligence
                            </span>
                        </div>

                        {/* =================================================
                            H1
                        ================================================== */}
                        <h1
                            className="m-0 text-[#29243F]"
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '70px',
                                fontWeight: 780,
                                lineHeight: '1.03',
                                letterSpacing: '-2.8px',
                            }}
                        >
                            Know if it&apos;s{' '}
                            <span className="text-[#806DB6]">safe</span>
                            <br />
                            before you pay
                            <br />
                            a deposit.
                        </h1>

                        {/* =================================================
                            DESCRIPTION
                        ================================================== */}
                        <p
                            className="mt-7 max-w-[590px] text-[#625C70]"
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '20px',
                                fontWeight: 400,
                                lineHeight: '1.55',
                                letterSpacing: '-0.15px',
                            }}
                        >
                            Check an adventure provider by company name,
                            <br />
                            website, or social media handle.
                        </p>

                        {/* =================================================
                            SEARCH + CHIPS
                        ================================================== */}
                        <div className="mt-8 w-full lg:w-[835px] lg:max-w-none">

                            {/* =================================================
                                SEARCH BAR
                            ================================================== */}
                            <div className="flex min-h-[64px] w-full items-center rounded-[8px] border border-[#DDD8E8] bg-[#F7F5FD] p-[4px] shadow-[0_2px_8px_rgba(43,39,64,0.04)]">

                                {/* Search icon */}
                                <div className="flex h-full flex-shrink-0 items-center pl-4">

                                    <svg
                                        className="h-[23px] w-[23px] text-[#8F8998]"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <circle
                                            cx="10.8"
                                            cy="10.8"
                                            r="7"
                                            stroke="currentColor"
                                            strokeWidth="1.7"
                                        />

                                        <path
                                            d="M16 16L21 21"
                                            stroke="currentColor"
                                            strokeWidth="1.7"
                                            strokeLinecap="round"
                                        />
                                    </svg>

                                </div>

                                {/* Input */}
                                <div className="min-w-0 flex-1">

                                    <input
                                        type="text"
                                        placeholder="Search by company name, website, or social media handle"
                                        className="block h-[54px] w-full min-w-0 bg-transparent px-4 text-[#29243F] outline-none placeholder:text-[#85808F]"
                                        style={{
                                            fontFamily: 'Inter, sans-serif',
                                            fontSize: '18px',
                                            fontWeight: 300,
                                            lineHeight: 1,
                                        }}
                                    />

                                </div>

                                {/* Analyse button */}
                                <button
                                    onClick={handleAnalyzeClick}
                                    className="flex h-[54px] flex-shrink-0 items-center justify-center gap-2 rounded-[6px] bg-[#806DB6] px-6 text-white transition-all hover:-translate-y-[1px] hover:bg-[#705DA5]"
                                    style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: '19px',
                                        fontWeight: 600,
                                        lineHeight: 1,
                                    }}
                                >
                                    <span className="whitespace-nowrap">
                                        Analyse Adventure
                                    </span>

                                    <svg
                                        className="h-[20px] w-[20px]"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M5 12H19"
                                            stroke="currentColor"
                                            strokeWidth="1.7"
                                            strokeLinecap="round"
                                        />

                                        <path
                                            d="M13 6L19 12L13 18"
                                            stroke="currentColor"
                                            strokeWidth="1.7"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>

                            </div>

                            {/* =================================================
                                ADVENTURE TYPE
                            ================================================== */}
                            <div className="mt-6 w-full">

                                <div
                                    className="mb-3 text-[#514B63]"
                                    style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: '18px',
                                        fontWeight: 400,
                                        lineHeight: 1.2,
                                    }}
                                >
                                    Adventure type:
                                </div>

                                {/* =================================================
                                    CHIPS
                                ================================================== */}
                                <div
                                    className="flex w-full flex-wrap items-center"
                                    style={{
                                        columnGap: '24px',
                                        rowGap: '18px',
                                    }}
                                >
                                    {chips.map((chip, index) => (
                                        <span
                                            key={index}
                                            className={
                                                chip === 'More'
                                                    ? 'inline-flex h-[34px] items-center rounded-full px-[24px] text-[#806DB6]'
                                                    : 'inline-flex h-[34px] items-center rounded-full border border-[#D6C9ED] bg-[#DDD2F4] px-[24px] text-[#806DB6]'
                                            }
                                            style={{
                                                fontFamily: 'Inter, sans-serif',
                                                fontSize: '16px',
                                                fontWeight:
                                                    chip === 'More' ? 600 : 400,
                                                lineHeight: 1,
                                            }}
                                        >
                                            {chip}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* =================================================
                        RIGHT SIDE
                    ================================================== */}
                    <div className="relative mt-5 hidden min-h-[510px] lg:block">

                        {/* =================================================
                            IMAGE STRIP
                        ================================================== */}
                        <div className="absolute right-0 top-0 w-full max-w-[735px]">

                            <div className="relative h-[330px] w-full overflow-hidden rounded-[7px] bg-white shadow-[0_10px_30px_rgba(43,39,64,0.08)]">

                                {/* Paragliding */}
                                <div className="absolute inset-y-0 left-0 w-1/4 overflow-hidden border-r-[3px] border-[#F7F5FD]">
                                    <img
                                        src="/images/paragliding.jpg"
                                        alt="Paragliding adventure"
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                {/* Hiking */}
                                <div className="absolute inset-y-0 left-1/4 w-1/4 overflow-hidden border-r-[3px] border-[#F7F5FD]">
                                    <img
                                        src="/images/hiking.jpg"
                                        alt="Mountain hiking adventure"
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                {/* Snowboarding */}
                                <div className="absolute inset-y-0 left-2/4 w-1/4 overflow-hidden border-r-[3px] border-[#F7F5FD]">
                                    <img
                                        src="/images/snowboarding.jpg"
                                        alt="Snowboarding adventure"
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                {/* Kayaking */}
                                <div className="absolute inset-y-0 right-0 w-1/4 overflow-hidden">
                                    <img
                                        src="/images/kayaking.jpg"
                                        alt="Kayaking adventure"
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                {/* Image overlay */}
                                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-black/[0.025] via-transparent to-black/[0.05]" />

                                <div className="pointer-events-none absolute inset-0 z-20 rounded-[7px] ring-1 ring-inset ring-black/[0.05]" />

                            </div>
                        </div>

                        {/* =================================================
                            DYNAMIC SAFETY CARD
                        ================================================== */}
                        <div
                            className={`absolute right-[4%] top-[265px] z-30 w-[320px] rounded-[10px] border border-[#DDD6EA] bg-[#F7F5FD] p-[17px] shadow-[0_18px_45px_rgba(43,39,64,0.16)] transition-all duration-350 ${
                                isCardVisible
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-1 opacity-0'
                            }`}
                        >

                            {/* =================================================
                                CARD HEADER
                            ================================================== */}
                            <div className="mb-3 flex items-center justify-between">

                                <div className="flex items-center gap-2">

                                    {/* Shield + checkmark */}
                                    <svg
                                        className="h-[24px] w-[24px] flex-shrink-0 text-[#806DB6]"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M12 3L19 6V11C19 15.55 16.01 19.74 12 21C7.99 19.74 5 15.55 5 11V6L12 3Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />

                                        <path
                                            d="M8.8 12L11 14.2L15.5 9.8"
                                            stroke="currentColor"
                                            strokeWidth="1.7"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>

                                    <span
                                        className="text-[#29243F]"
                                        style={{
                                            fontFamily: 'Poppins, sans-serif',
                                            fontSize: '16px',
                                            fontWeight: 600,
                                            lineHeight: 1.2,
                                        }}
                                    >
                                        Safety Card
                                    </span>

                                </div>

                                {/* Example badge */}
                                {activeCard.isExample && (
                                    <span
                                        className="rounded-full bg-[#F1EDF8] px-2 py-1 text-[#806DB6]"
                                        style={{
                                            fontFamily: 'Inter, sans-serif',
                                            fontSize: '9px',
                                            fontWeight: 600,
                                            lineHeight: 1,
                                        }}
                                    >
                                        EXAMPLE
                                    </span>
                                )}

                            </div>

                            {/* =================================================
                                SCORE PANEL
                            ================================================== */}
                            <div className="rounded-[8px] bg-[#ECE5FB] px-4 py-3">

                                <p
                                    className="text-[#806DB6]"
                                    style={{
                                        fontFamily: 'Poppins, sans-serif',
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        lineHeight: 1.2,
                                    }}
                                >
                                    Safety Score
                                </p>

                                <div className="mt-1 flex items-end justify-between">

                                    <div className="flex items-baseline">

                                        <span
                                            className="text-[#29243F]"
                                            style={{
                                                fontFamily: 'Poppins, sans-serif',
                                                fontSize: '70px',
                                                fontWeight: 600,
                                                lineHeight: 0.9,
                                                letterSpacing: '-2px',
                                            }}
                                        >
                                            {activeCard.score}
                                        </span>

                                        <span
                                            className="ml-1 text-[#29243F]"
                                            style={{
                                                fontFamily: 'Poppins, sans-serif',
                                                fontSize: '20px',
                                                fontWeight: 500,
                                                lineHeight: 1,
                                            }}
                                        >
                                            /100
                                        </span>

                                    </div>

                                    <span
                                        className="pb-1 text-[#806DB6]"
                                        style={{
                                            fontFamily: 'Poppins, sans-serif',
                                            fontSize: '18px',
                                            fontWeight: 500,
                                            lineHeight: 1,
                                        }}
                                    >
                                        {activeCard.status}
                                    </span>

                                </div>

                                {/* =================================================
                                    PROVIDER
                                ================================================== */}
                                <div className="mt-3">

                                    <span
                                        className="inline-flex rounded-full border border-[#D9D0E8] bg-white/70 px-3 py-1.5 text-[#625C70]"
                                        style={{
                                            fontFamily: 'Poppins, sans-serif',
                                            fontSize: '14px',
                                            fontWeight: 600,
                                            lineHeight: 1.2,
                                        }}
                                    >
                                        {activeCard.provider}
                                    </span>

                                </div>

                                {/* Score progress */}
                                <div className="mt-3 h-[7px] overflow-hidden rounded-full bg-[#D3CEDA]">
                                    <div
                                        className="h-full rounded-full bg-[#806DB6] transition-all duration-500"
                                        style={{
                                            width: `${activeCard.score}%`,
                                        }}
                                    />
                                </div>

                            </div>

                            {/* =================================================
                                SAFETY DETAILS
                            ================================================== */}
                            <div className="mt-4 space-y-4">

                                {activeCard.details.map(
                                    (detail, index) => (
                                        <SafetyDetail
                                            key={`${activeCardIndex}-${detail.label}`}
                                            title={detail.label}
                                            description={detail.value}
                                            showLine={
                                                index <
                                                activeCard.details.length - 1
                                            }
                                        />
                                    )
                                )}

                            </div>

                        </div>
                    </div>
                </div>

                {/* =====================================================
                    MOBILE VISUAL
                ====================================================== */}
                <div className="relative mt-10 block h-[430px] lg:hidden">

                    {/* Paragliding */}
                    <div className="absolute left-0 top-0 h-[250px] w-[52%] overflow-hidden rounded-[7px]">
                        <img
                            src="/images/paragliding.jpg"
                            alt="Paragliding adventure"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Hiking */}
                    <div className="absolute right-0 top-0 h-[220px] w-[52%] overflow-hidden rounded-[7px]">
                        <img
                            src="/images/hiking.jpg"
                            alt="Mountain hiking adventure"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Snowboarding */}
                    <div className="absolute bottom-0 left-0 h-[180px] w-[34%] overflow-hidden rounded-[7px]">
                        <img
                            src="/images/snowboarding.jpg"
                            alt="Snowboarding adventure"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Kayaking */}
                    <div className="absolute bottom-0 left-[29%] h-[180px] w-[34%] overflow-hidden rounded-[7px] border-[4px] border-[#F7F5FD]">
                        <img
                            src="/images/kayaking.jpg"
                            alt="Kayaking adventure"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* =================================================
                        MOBILE SAFETY CARD
                    ================================================== */}
                    <div
                        className={`absolute bottom-[-5px] right-0 z-20 w-[275px] rounded-[10px] border border-[#DDD6EA] bg-[#F7F5FD] p-3 shadow-[0_15px_35px_rgba(43,39,64,0.15)] transition-all duration-350 ${
                            isCardVisible
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-1 opacity-0'
                        }`}
                    >

                        {/* Mobile card header */}
                        <div className="mb-2 flex items-center justify-between">

                            <div className="flex items-center gap-2">

                                {/* Shield + checkmark */}
                                <svg
                                    className="h-5 w-5 text-[#806DB6]"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M12 3L19 6V11C19 15.55 16.01 19.74 12 21C7.99 19.74 5 15.55 5 11V6L12 3Z"
                                        stroke="currentColor"
                                        strokeWidth="1.4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />

                                    <path
                                        d="M8.8 12L11 14.2L15.5 9.8"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                                <span
                                    className="text-[#29243F]"
                                    style={{
                                        fontFamily: 'Poppins, sans-serif',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                    }}
                                >
                                    Safety Card
                                </span>

                            </div>

                            {activeCard.isExample && (
                                <span
                                    className="rounded-full bg-[#F1EDF8] px-2 py-1 text-[#806DB6]"
                                    style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: '8px',
                                        fontWeight: 600,
                                        lineHeight: 1,
                                    }}
                                >
                                    EXAMPLE
                                </span>
                            )}

                        </div>

                        {/* Mobile score */}
                        <div className="rounded-[8px] bg-[#ECE5FB] px-3 py-2.5">

                            <p
                                className="text-[#806DB6]"
                                style={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                }}
                            >
                                Safety Score
                            </p>

                            <div className="mt-1 flex items-end justify-between">

                                <div className="flex items-baseline">

                                    <span
                                        className="text-[#29243F]"
                                        style={{
                                            fontFamily: 'Poppins, sans-serif',
                                            fontSize: '50px',
                                            fontWeight: 600,
                                            lineHeight: 0.9,
                                        }}
                                    >
                                        {activeCard.score}
                                    </span>

                                    <span
                                        className="ml-1 text-[#29243F]"
                                        style={{
                                            fontFamily: 'Poppins, sans-serif',
                                            fontSize: '16px',
                                            fontWeight: 500,
                                        }}
                                    >
                                        /100
                                    </span>

                                </div>

                                <span
                                    className="pb-1 text-[#806DB6]"
                                    style={{
                                        fontFamily: 'Poppins, sans-serif',
                                        fontSize: '16px',
                                        fontWeight: 500,
                                    }}
                                >
                                    {activeCard.status}
                                </span>

                            </div>

                            {/* Mobile provider */}
                            <div className="mt-2">

                                <span
                                    className="inline-flex rounded-full border border-[#D9D0E8] bg-white/70 px-2.5 py-1 text-[#625C70]"
                                    style={{
                                        fontFamily: 'Poppins, sans-serif',
                                        fontSize: '13px',
                                        fontWeight: 600,
                                    }}
                                >
                                    {activeCard.provider}
                                </span>

                            </div>

                            {/* Mobile progress */}
                            <div className="mt-2 h-[6px] overflow-hidden rounded-full bg-[#D3CEDA]">
                                <div
                                    className="h-full rounded-full bg-[#806DB6]"
                                    style={{
                                        width: `${activeCard.score}%`,
                                    }}
                                />
                            </div>

                        </div>

                        {/* Mobile details */}
                        <div className="mt-3 space-y-3">

                            {activeCard.details.map(
                                (detail, index) => (
                                    <SafetyDetail
                                        key={`mobile-${activeCardIndex}-${detail.label}`}
                                        title={detail.label}
                                        description={detail.value}
                                        showLine={
                                            index <
                                            activeCard.details.length - 1
                                        }
                                    />
                                )
                            )}

                        </div>

                    </div>
                </div>
            </div>

            {/* =====================================================
                EXISTING FUNCTIONALITY — UNCHANGED
            ====================================================== */}
            <NotLaunchedModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
}


/* =============================================================
   SAFETY DETAIL COMPONENT
============================================================= */

function SafetyDetail({
    title,
    description,
    showLine = false,
}: {
    title: string;
    description: string;
    showLine?: boolean;
}) {
    return (
        <div className="relative flex gap-2.5">

            {/* Icon / Timeline */}
            <div className="relative flex w-[22px] flex-shrink-0 justify-center">

                <div className="relative z-10 flex h-[22px] w-[22px] items-center justify-center bg-[#F7F5FD]">

                    {/* Shield + checkmark */}
                    <svg
                        className="h-[22px] w-[22px] text-[#806DB6]"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M12 3L19 6V11C19 15.55 16.01 19.74 12 21C7.99 19.74 5 15.55 5 11V6L12 3Z"
                            stroke="currentColor"
                            strokeWidth="1.35"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        <path
                            d="M8.8 12L11 14.2L15.5 9.8"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                </div>

                {/* Connecting line */}
                {showLine && (
                    <span className="absolute left-1/2 top-[22px] h-[calc(100%+12px)] w-px -translate-x-1/2 bg-[#D1C9E1]" />
                )}

            </div>

            {/* Text */}
            <div className="min-w-0 pt-[1px]">

                <p
                    className="text-[#29243F]"
                    style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '13px',
                        fontWeight: 600,
                        lineHeight: 1.25,
                    }}
                >
                    {title}
                </p>

                <p
                    className="mt-[3px] text-[#806DB6]"
                    style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '13px',
                        fontWeight: 600,
                        lineHeight: 1.3,
                    }}
                >
                    {description}
                </p>

            </div>
        </div>
    );
}