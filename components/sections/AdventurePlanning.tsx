export default function AdventurePlanning() {
    const questions = [
        {
            left: 'How many reviews does it have?',
            right: 'What happens if someone gets injured?',
            leftIcon: 'reviews',
            rightIcon: 'injury',
        },
        {
            left: 'Is it worth the price?',
            right: 'Is there a safety briefing before the activity?',
            leftIcon: 'price',
            rightIcon: 'briefing',
        },
        {
            left: 'Is pickup included?',
            right: 'How is the equipment inspected and monitored?',
            leftIcon: 'pickup',
            rightIcon: 'equipment',
        },
        {
            left: 'How many photos will I get?',
            right: 'What emergency support is available?',
            leftIcon: 'photos',
            rightIcon: 'emergency',
        },
        {
            left: 'Is it popular on Instagram?',
            right: 'Are there limits on group size, permits, or route access?',
            leftIcon: 'social',
            rightIcon: 'permits',
        },
    ];

    return (
        <section className="bg-[#F6F4FE] pt-0 pb-[60px] md:pb-[80px]">
            <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-10 xl:px-12">

                {/* =================================================
                    MAIN ADVENTURE PLANNING BLOCK
                ================================================== */}
                <div
                    className="w-full overflow-hidden rounded-[10px]"
                    style={{
                        backgroundColor: '#F6F4FE',
                        border: '0.1px solid rgba(43, 39, 64, 0.10)',
                        boxShadow: '0 8px 30px rgba(43, 39, 64, 0.20)',
                    }}
                >

                    {/* =================================================
                        HEADING AREA
                    ================================================== */}
                    <div className="flex flex-col items-center px-6 pb-[40px] pt-[50px] text-center md:px-10 md:pt-[55px]">

                        <h2
                            className="text-[#2B2740]"
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '30px',
                                fontWeight: 700,
                                lineHeight: '1.25',
                            }}
                        >
                            Adventure planning doesn't stop at desire.
                        </h2>

                        {/* 100 × 2 gradient divider */}
                        <div
                            className="my-5 h-[2px] w-[100px] flex-shrink-0"
                            style={{
                                background:
                                    'linear-gradient(90deg, #7E6BB3 0%, #2B2740 100%)',
                            }}
                        />

                        <p
                            className="text-[#7E6BB3]"
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '30px',
                                fontWeight: 700,
                                lineHeight: '1.25',
                            }}
                        >
                            Before you book, ask better safety questions
                        </p>

                    </div>


                    {/* =================================================
                        DESKTOP QUESTIONS
                    ================================================== */}
                    <div className="hidden md:block">

                        {questions.map((q, index) => (
                            <div
                                key={index}
                                className={`relative px-8 ${
                                    index !== questions.length - 1
                                        ? 'pb-3'
                                        : 'pb-[50px]'
                                }`}
                            >

                                {/* =================================================
                                    QUESTION ROW
                                ================================================== */}
                                <div className="relative flex items-stretch">

                                    {/* =================================================
                                        LEFT / WRONG QUESTION
                                    ================================================== */}
                                    <div
                                        className="relative z-10 flex min-h-[90px] w-[calc(50%+30px)] items-center gap-5 rounded-[10px] px-7 pr-[55px]"
                                        style={{
                                            backgroundColor:
                                                'rgba(255, 241, 232, 0.75)',
                                        }}
                                    >
                                        <QuestionIcon
                                            type={q.leftIcon}
                                            side="wrong"
                                        />

                                        <span
                                            style={{
                                                fontFamily:
                                                    'Inter, sans-serif',
                                                fontSize: '20px',
                                                fontWeight: 500,
                                                lineHeight: '1.35',
                                                color: 'rgba(197, 81, 20, 0.75)',
                                            }}
                                        >
                                            {q.left}
                                        </span>
                                    </div>


                                    {/* =================================================
                                        RIGHT / CORRECT QUESTION
                                    ================================================== */}
                                    <div
                                        className="relative z-10 ml-[-30px] flex min-h-[90px] w-[calc(50%+30px)] items-center gap-5 rounded-[10px] pl-[55px] pr-7"
                                        style={{
                                            backgroundColor: '#EDE7FB',
                                        }}
                                    >
                                        <QuestionIcon
                                            type={q.rightIcon}
                                            side="right"
                                        />

                                        <span
                                            className="text-left"
                                            style={{
                                                fontFamily:
                                                    'Inter, sans-serif',
                                                fontSize: '20px',
                                                fontWeight: 500,
                                                lineHeight: '1.35',
                                                color: '#7E6BB3',
                                            }}
                                        >
                                            {q.right}
                                        </span>
                                    </div>


                                    {/* =================================================
                                        VS CIRCLE
                                    ================================================== */}
                                    <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
                                        <div
                                            className="flex h-[60px] w-[60px] items-center justify-center rounded-full"
                                            style={{
                                                background:
                                                    'linear-gradient(180deg, #EDE7FB 0%, #C7B5F5 100%)',
                                            }}
                                        >
                                            <span
                                                className="text-[#7E6BB3]"
                                                style={{
                                                    fontFamily:
                                                        'Inter, sans-serif',
                                                    fontSize: '20px',
                                                    fontWeight: 700,
                                                    lineHeight: 1,
                                                }}
                                            >
                                                VS
                                            </span>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>


                    {/* =================================================
                        MOBILE VISUAL
                    ================================================== */}
                    <div className="flex flex-col gap-5 px-5 pb-8 md:hidden">

                        {questions.map((q, index) => (
                            <div
                                key={index}
                                className="relative rounded-[10px]"
                            >

                                {/* =================================================
                                    WRONG QUESTION
                                ================================================== */}
                                <div
                                    className="relative z-10 flex min-h-[90px] items-center gap-4 rounded-[10px] px-5 py-4"
                                    style={{
                                        backgroundColor:
                                            'rgba(255, 241, 232, 0.75)',
                                    }}
                                >
                                    <QuestionIcon
                                        type={q.leftIcon}
                                        side="wrong"
                                    />

                                    <span
                                        style={{
                                            fontFamily:
                                                'Inter, sans-serif',
                                            fontSize: '20px',
                                            fontWeight: 500,
                                            lineHeight: '1.35',
                                            color: 'rgba(197, 81, 20, 0.75)',
                                        }}
                                    >
                                        {q.left}
                                    </span>
                                </div>


                                {/* =================================================
                                    VS CIRCLE
                                ================================================== */}
                                <div className="relative z-30 my-[-15px] flex justify-center">
                                    <div
                                        className="flex h-[60px] w-[60px] items-center justify-center rounded-full"
                                        style={{
                                            background:
                                                'linear-gradient(180deg, #EDE7FB 0%, #C7B5F5 100%)',
                                        }}
                                    >
                                        <span
                                            className="text-[#7E6BB3]"
                                            style={{
                                                fontFamily:
                                                    'Inter, sans-serif',
                                                fontSize: '20px',
                                                fontWeight: 700,
                                                lineHeight: 1,
                                            }}
                                        >
                                            VS
                                        </span>
                                    </div>
                                </div>


                                {/* =================================================
                                    CORRECT QUESTION

                                    Icon intentionally comes BEFORE
                                    the question text here as well.
                                ================================================== */}
                                <div
                                    className="relative z-10 flex min-h-[90px] items-center gap-4 rounded-[10px] px-5 py-4"
                                    style={{
                                        backgroundColor: '#EDE7FB',
                                    }}
                                >
                                    <QuestionIcon
                                        type={q.rightIcon}
                                        side="right"
                                    />

                                    <span
                                        className="text-left"
                                        style={{
                                            fontFamily:
                                                'Inter, sans-serif',
                                            fontSize: '20px',
                                            fontWeight: 500,
                                            lineHeight: '1.35',
                                            color: '#7E6BB3',
                                        }}
                                    >
                                        {q.right}
                                    </span>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </section>
    );
}


/* =============================================================
   QUESTION ICONS
============================================================= */

function QuestionIcon({
    type,
    side,
}: {
    type: string;
    side: 'wrong' | 'right';
}) {
    const stroke =
        side === 'wrong'
            ? 'rgba(197, 81, 20, 0.75)'
            : '#7E6BB3';

    const commonProps = {
        className: 'h-[45px] w-[45px] flex-shrink-0',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke,
        strokeWidth: 1.5,
        strokeLinecap: 'round' as const,
        strokeLinejoin: 'round' as const,
    };

    /* =========================================================
       REVIEWS / STAR
    ========================================================== */
    if (type === 'reviews') {
        return (
            <svg {...commonProps}>
                <path d="M12 3.5l2.6 5.25 5.8.84-4.2 4.09.99 5.78L12 16.73l-5.19 2.73.99-5.78-4.2-4.09 5.8-.84L12 3.5Z" />
            </svg>
        );
    }

    /* =========================================================
       PRICE / COIN
    ========================================================== */
    if (type === 'price') {
        return (
            <svg {...commonProps}>
                <circle cx="12" cy="12" r="8.5" />
                <path d="M14.5 8.5c-.6-.55-1.45-.85-2.45-.85-1.45 0-2.5.75-2.5 1.8 0 2.8 5 1.35 5 4.05 0 1.05-1.05 1.85-2.55 1.85-1.05 0-1.95-.35-2.55-1" />
                <path d="M12 6.5v11" />
            </svg>
        );
    }

    /* =========================================================
       PICKUP / VEHICLE
    ========================================================== */
    if (type === 'pickup') {
        return (
            <svg {...commonProps}>
                <path d="M5 16.5h14l-1-5H6l-1 5Z" />
                <path d="M7 11.5l1.5-3h7l1.5 3" />
                <circle cx="8" cy="17" r="1.5" />
                <circle cx="16" cy="17" r="1.5" />
                <path d="M3.5 13h2" />
                <path d="M18.5 13h2" />
            </svg>
        );
    }

    /* =========================================================
       PHOTOS / CAMERA
    ========================================================== */
    if (type === 'photos') {
        return (
            <svg {...commonProps}>
                <rect x="4" y="7" width="16" height="12" rx="2" />
                <path d="M8 7l1.5-2h5L16 7" />
                <circle cx="12" cy="13" r="3" />
            </svg>
        );
    }

    /* =========================================================
       SOCIAL / HEART
    ========================================================== */
    if (type === 'social') {
        return (
            <svg {...commonProps}>
                <path d="M20.8 8.8c0 5.2-8.8 10-8.8 10s-8.8-4.8-8.8-10C3.2 6 5.1 4 7.6 4c1.8 0 3.4 1 4.4 2.5C13 5 14.6 4 16.4 4c2.5 0 4.4 2 4.4 4.8Z" />
            </svg>
        );
    }

    /* =========================================================
       INJURY / FIRST AID
    ========================================================== */
    if (type === 'injury') {
        return (
            <svg {...commonProps}>
                <rect x="4" y="6" width="16" height="12" rx="2" />
                <path d="M9 6V4.8A1.8 1.8 0 0 1 10.8 3h2.4A1.8 1.8 0 0 1 15 4.8V6" />
                <path d="M12 9v6" />
                <path d="M9 12h6" />
            </svg>
        );
    }

    /* =========================================================
       SAFETY BRIEFING / CLIPBOARD
    ========================================================== */
    if (type === 'briefing') {
        return (
            <svg {...commonProps}>
                <rect x="5" y="4.5" width="14" height="16" rx="2" />
                <path d="M9 4.5V3h6v1.5" />
                <path d="M8.5 9h7" />
                <path d="M8.5 12.5h7" />
                <path d="M8.5 16h4.5" />
            </svg>
        );
    }

    /* =========================================================
       EQUIPMENT / WRENCH
    ========================================================== */
    if (type === 'equipment') {
        return (
            <svg {...commonProps}>
                <path d="M14.5 5.2a4.1 4.1 0 0 0-5.3 5.3l-5 5a1.8 1.8 0 0 0 2.5 2.5l5-5a4.1 4.1 0 0 0 5.3-5.3l-2.6 2.6-2.3-2.3 2.4-2.8Z" />
            </svg>
        );
    }

    /* =========================================================
       EMERGENCY / SIREN
    ========================================================== */
    if (type === 'emergency') {
        return (
            <svg {...commonProps}>
                <path d="M6 16h12" />
                <path d="M7 16v-3.5a5 5 0 0 1 10 0V16" />
                <path d="M9 19h6" />
                <path d="M12 3v2" />
                <path d="M5.5 6l1.4 1.4" />
                <path d="M18.5 6l-1.4 1.4" />
            </svg>
        );
    }

    /* =========================================================
       PERMITS / DOCUMENT
    ========================================================== */
    return (
        <svg {...commonProps}>
            <path d="M6 3.5h8l4 4v13H6z" />
            <path d="M14 3.5v4h4" />
            <path d="M9 11h6" />
            <path d="M9 14h6" />
            <path d="M9 17h4" />
        </svg>
    );
}