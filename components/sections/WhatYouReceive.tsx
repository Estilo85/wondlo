'use client';

const items = [
    {
        icon: 'shield',
        title: 'Overall Safety Score',
        description:
            'A single 0–100 score weighted across a 7-step safety framework.',
    },
    {
        icon: 'clock',
        title: 'Incident Timeline',
        description:
            'Chronological record of reported safety events.',
    },
    {
        icon: 'question',
        title: 'Recommended Questions',
        description:
            'We send you adventure-specific questions to ask the operator during your check-in with them.',
    },
    {
        icon: 'report',
        title: 'Safety Report',
        description:
            'Risk-language interpretation of what the evidence means.',
    },
];

export default function WhatYouReceive() {
    return (
        <section className="bg-[#F6F4FE] pt-[40px] pb-0">
            <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-10 xl:px-12">

                {/* =====================================================
                    OUTER WHAT YOU'LL RECEIVE BLOCK
                ====================================================== */}
                <div
                    className="relative w-full rounded-[10px] mt-[40px]"
                    style={{
                        backgroundColor: '#F6F4FE',
                        border: '0.1px solid rgba(43, 39, 64, 0.10)',
                        boxShadow: '0 8px 30px rgba(43, 39, 64, 0.20)',
                    }}
                >

                    {/* =================================================
                        HEADER
                    ================================================== */}
                    <div className="px-[44px] pt-[50px]">

                        <h2
                            className="text-[#2B2740]"
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '30px',
                                fontWeight: 700,
                                lineHeight: '1.25',
                            }}
                        >
                            What you'll receive
                        </h2>

                        {/* Same divider treatment as AdventurePlanning
                            and HowItWorks */}
                        <div
                            className="my-5 h-[2px] w-[100px]"
                            style={{
                                background:
                                    'linear-gradient(90deg, #7E6BB3 0%, #2B2740 100%)',
                            }}
                        />

                    </div>


                    {/* =================================================
                        CONTENT
                    ================================================== */}
                    <div className="px-[44px] pb-[50px] pt-[20px]">

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="rounded-[10px] p-[24px] transition-transform duration-300 hover:-translate-y-1"
                                    style={{
                                        backgroundColor: '#FFFFFF',
                                        border: '0.1px solid rgba(43, 39, 64, 0.10)',
                                        boxShadow:
                                            '0 8px 20px rgba(43, 39, 64, 0.12)',
                                    }}
                                >

                                    {/* =================================================
                                        ICON CIRCLE
                                    ================================================== */}
                                    <div
                                        className="mb-[20px] flex h-[55px] w-[55px] items-center justify-center rounded-full"
                                        style={{
                                            background:
                                                'linear-gradient(90deg, #EDE7FB 0%, #C7B5F5 100%)',
                                        }}
                                    >
                                        <ReceiveIcon type={item.icon} />
                                    </div>


                                    {/* =================================================
                                        TITLE
                                    ================================================== */}
                                    <h3
                                        className="text-[#7E6BB3]"
                                        style={{
                                            fontFamily:
                                                'Poppins, sans-serif',
                                            fontSize: '16px',
                                            fontWeight: 600,
                                            lineHeight: '1.35',
                                        }}
                                    >
                                        {item.title}
                                    </h3>


                                    {/* =================================================
                                        DESCRIPTION
                                    ================================================== */}
                                    <p
                                        className="mt-[10px] text-[#000000]"
                                        style={{
                                            fontFamily:
                                                'Inter, sans-serif',
                                            fontSize: '15px',
                                            fontWeight: 500,
                                            lineHeight: '1.5',
                                        }}
                                    >
                                        {item.description}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}


/* =============================================================
   WHAT YOU'LL RECEIVE ICONS
============================================================= */

function ReceiveIcon({ type }: { type: string }) {
    const commonProps = {
        className: 'h-[35px] w-[35px] flex-shrink-0',
        viewBox: '0 0 35 35',
        fill: 'none',
        stroke: '#7E6BB3',
        strokeWidth: 1.7,
        strokeLinecap: 'round' as const,
        strokeLinejoin: 'round' as const,
        'aria-hidden': true,
    };


    /* =========================================================
       SAFETY SHIELD
    ========================================================== */
    if (type === 'shield') {
        return (
            <svg {...commonProps}>
                <path
                    d="
                        M17.5 3
                        L27 6.5
                        V15
                        C27 22.5
                        23.2 28
                        17.5 31.5
                        C11.8 28
                        8 22.5
                        8 15
                        V6.5
                        Z
                    "
                />

                <path d="M12.5 17.5L16 21L23 13.5" />
            </svg>
        );
    }


    /* =========================================================
       CLOCK
    ========================================================== */
    if (type === 'clock') {
        return (
            <svg {...commonProps}>
                <circle
                    cx="17.5"
                    cy="19"
                    r="9"
                />

                <path d="M17.5 13.5V19L21 21.5" />

                <path d="M14 4.5H21" />

                <path d="M17.5 4.5V10" />
            </svg>
        );
    }


    /* =========================================================
       QUESTION
    ========================================================== */
    if (type === 'question') {
        return (
            <svg {...commonProps}>
                <circle
                    cx="17.5"
                    cy="19"
                    r="9"
                />

                <path
                    d="
                        M14.5 16
                        C14.8 14
                        16 12.8
                        17.8 11.8
                        C19.5 10.9
                        20.5 9.7
                        20.5 8
                        C20.5 5.8
                        18.7 4.2
                        16.3 4.2
                        C14.2 4.2
                        12.5 5.2
                        11.5 6.8
                    "
                />

                <circle
                    cx="17.5"
                    cy="23.5"
                    r="1"
                    fill="#7E6BB3"
                    stroke="none"
                />
            </svg>
        );
    }


    /* =========================================================
       SAFETY REPORT
    ========================================================== */
    return (
        <svg {...commonProps}>
            <path
                d="
                    M8 3.5
                    H21
                    L27 9
                    V31.5
                    H8
                    Z
                "
            />

            <path d="M21 3.5V9H27" />

            <path d="M12 15H23" />

            <path d="M12 20H23" />

            <path d="M12 25H20" />
        </svg>
    );
}