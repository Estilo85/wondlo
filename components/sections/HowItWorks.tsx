'use client';

const steps = [
    {
        number: '01',
        icon: 'search',
        title: 'Search Operator',
        description:
            'Enter a company name, website, or social handle.',
    },
    {
        number: '02',
        icon: 'info',
        title: 'Collect Public Information',
        description:
            'Our system collects incidents, operator claims, safety-specific information, community notes, and government advisories based on our developed proprietary safety framework.',
    },
    {
        number: '03',
        icon: 'evaluate',
        title: 'Evaluate Safety Evidence',
        description:
            'Our model evaluates evidence across a 7-step safety framework.',
    },
    {
        number: '04',
        icon: 'report',
        title: 'Receive Safety Report',
        description:
            'A structured summary with a safety score and detailed risk breakdown.',
    },
];

export default function HowItWorks() {
    return (
        <section className="bg-[#F6F4FE] pt-0 pb-0">
            <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-10 xl:px-12">

                {/* =====================================================
                    OUTER HOW IT WORKS BLOCK
                ====================================================== */}
                <div
                    className="relative w-full overflow-hidden rounded-[10px]"
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
                            How it works
                        </h2>

                        <div
                            className="my-5 h-[2px] w-[100px]"
                            style={{
                                background:
                                    'linear-gradient(90deg, #7E6BB3 0%, #2B2740 100%)',
                            }}
                        />

                        <p
                            className="text-[#000000]"
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '14px',
                                fontWeight: 500,
                                lineHeight: '1.4',
                            }}
                        >
                            From search to safety intelligence in four steps.
                        </p>

                    </div>


                    {/* =================================================
                        DESKTOP CONTENT
                    ================================================== */}
                    <div
                        className="relative mx-[44px] mt-[10px] hidden min-h-[430px] md:block"
                    >

                        {/* =================================================
                            LEFT IMAGE AREA
                        ================================================== */}
                        <div
                            className="absolute inset-y-0 left-0"
                            style={{
                                width: '50%',
                            }}
                        >

                            <svg
                                className="pointer-events-none absolute inset-0 z-0 h-full w-full"
                                viewBox="0 0 600 500"
                                fill="none"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="
                                        M70 410
                                        C105 390 125 360 145 330
                                        C170 292 205 270 245 275
                                        C285 280 315 270 340 235
                                        C370 195 400 165 425 145
                                        C435 137 440 132 445 126
                                    "
                                    stroke="#C7B5F5"
                                    strokeWidth="2"
                                    strokeDasharray="7 8"
                                    strokeLinecap="round"
                                />

                                {/* Bottom route endpoint */}
                                <circle
                                    cx="70"
                                    cy="410"
                                    r="5"
                                    fill="#7E6BB3"
                                />

                                {/* Top endpoint */}
                                <circle
                                    cx="445"
                                    cy="126"
                                    r="5"
                                    fill="#7E6BB3"
                                />
                            </svg>

                            {/* =================================================
                                TOP IMAGE
                                176 × 146
                            ================================================== */}
                            <div
                                className="absolute right-[130px] top-[20px] z-10 overflow-hidden rounded-[10px] shadow-[0_10px_25px_rgba(43,39,64,0.15)]"
                                style={{
                                    width: '176px',
                                    height: '146px',
                                }}
                            >
                                <img
                                    src="/images/hiking.jpg"
                                    alt="Mountain hiking"
                                    className="h-full w-full object-cover"
                                />
                            </div>


                            {/* =================================================
                                BOTTOM IMAGE
                                195 × 150
                            ================================================== */}
                            <div
                                className="absolute bottom-[45px] left-[20px] z-10 overflow-hidden rounded-[10px] shadow-[0_10px_25px_rgba(43,39,64,0.15)]"
                                style={{
                                    width: '195px',
                                    height: '150px',
                                }}
                            >
                                <img
                                    src="/images/kayaking.jpg"
                                    alt="Kayaking"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                        </div>


                        {/* =================================================
                            RIGHT STEP CONTENT AREA
                        ================================================== */}
                        <div
                            className="absolute inset-y-0 right-0"
                            style={{
                                width: '50%',
                                paddingLeft: '70px',
                            }}
                        >

                            <div className="flex h-full flex-col justify-center">

                                <div className="space-y-[18px]">

                                    {steps.map((step, index) => (
                                        <div
                                            key={index}
                                            className="relative min-h-[88px]"
                                        >

                                            {/* =================================================
                                                NUMBER CIRCLE
                                            ================================================== */}
                                            <div
                                                className="absolute top-[-17px] z-30 h-[55px] w-[55px] -translate-x-1/2"
                                                style={{
                                                    left: 'calc(-70px - 27.5px)',
                                                }}
                                            >
                                                <div
                                                    className="flex h-[55px] w-[55px] items-center justify-center rounded-full"
                                                    style={{
                                                        background:
                                                            'linear-gradient(90deg, #EDE7FB 0%, #C7B5F5 100%)',
                                                    }}
                                                >
                                                    <span
                                                        className="text-[#7E6BB3]"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins, sans-serif',
                                                            fontSize: '24px',
                                                            fontWeight: 600,
                                                            lineHeight: 1,
                                                        }}
                                                    >
                                                        {step.number}
                                                    </span>
                                                </div>
                                            </div>


                                            {/* =================================================
                                                STEP TEXT
                                            ================================================== */}
                                            <div className="max-w-[500px]">

                                                <div className="flex items-center gap-3">

                                                    <StepIcon
                                                        type={step.icon}
                                                    />

                                                    <h3
                                                        className="text-[#2B2740]"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins, sans-serif',
                                                            fontSize: '16px',
                                                            fontWeight: 600,
                                                            lineHeight: '1.35',
                                                        }}
                                                    >
                                                        {step.title}
                                                    </h3>

                                                </div>

                                                <p
                                                    className="mt-2 text-[#000000]"
                                                    style={{
                                                        fontFamily:
                                                            'Inter, sans-serif',
                                                        fontSize: '15px',
                                                        fontWeight: 500,
                                                        lineHeight: '1.5',
                                                    }}
                                                >
                                                    {step.description}
                                                </p>

                                            </div>

                                        </div>
                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        MOBILE VISUAL
                    ================================================== */}
                    <div className="md:hidden">

                        {/* =================================================
                            MOBILE ADVENTURE IMAGES
                        ================================================== */}
                        <div className="relative mx-[20px] mt-[35px] h-[300px]">

                            {/* =================================================
                                MOBILE DECORATIVE DASHED ROUTE
                            ================================================== */}
                            <svg
                                className="pointer-events-none absolute inset-0 z-0 h-full w-full"
                                viewBox="0 0 360 300"
                                fill="none"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="
                                        M35 255
                                        C70 230 80 205 105 185
                                        C135 160 155 170 175 155
                                        C200 135 215 105 240 85
                                        C260 68 285 55 325 40
                                    "
                                    stroke="#C7B5F5"
                                    strokeWidth="2"
                                    strokeDasharray="7 8"
                                    strokeLinecap="round"
                                />

                                {/* Bottom endpoint */}
                                <circle
                                    cx="35"
                                    cy="255"
                                    r="5"
                                    fill="#7E6BB3"
                                />

                                {/* Top endpoint */}
                                <circle
                                    cx="325"
                                    cy="40"
                                    r="5"
                                    fill="#7E6BB3"
                                />
                            </svg>


                            {/* =================================================
                                MOBILE TOP IMAGE
                            ================================================== */}
                            <div
                                className="absolute right-[5px] top-[5px] z-10 overflow-hidden rounded-[10px] shadow-[0_10px_25px_rgba(43,39,64,0.15)]"
                                style={{
                                    width: '176px',
                                    height: '146px',
                                }}
                            >
                                <img
                                    src="/images/hiking.jpg"
                                    alt="Mountain hiking"
                                    className="h-full w-full object-cover"
                                />
                            </div>


                            {/* =================================================
                                MOBILE BOTTOM IMAGE
                            ================================================== */}
                            <div
                                className="absolute bottom-[10px] left-[5px] z-10 overflow-hidden rounded-[10px] shadow-[0_10px_25px_rgba(43,39,64,0.15)]"
                                style={{
                                    width: '195px',
                                    height: '150px',
                                }}
                            >
                                <img
                                    src="/images/kayaking.jpg"
                                    alt="Kayaking"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                        </div>


                        {/* =================================================
                            MOBILE STEPS
                        ================================================== */}
                        <div className="relative mx-auto w-full max-w-[560px] px-[20px] pb-[55px] pt-[35px]">

                            {/* Mobile connecting line */}
                            <div
                                className="absolute bottom-[75px] left-[47px] top-[62px] w-[2px]"
                                style={{
                                    background:
                                        'linear-gradient(180deg, #EDE7FB 0%, #C7B5F5 100%)',
                                }}
                            />

                            <div className="relative space-y-8">

                                {steps.map((step, index) => (
                                    <div
                                        key={index}
                                        className="relative flex gap-4"
                                    >

                                        {/* Number circle */}
                                        <div
                                            className="relative z-10 flex h-[55px] w-[55px] flex-shrink-0 items-center justify-center rounded-full"
                                            style={{
                                                background:
                                                    'linear-gradient(90deg, #EDE7FB 0%, #C7B5F5 100%)',
                                            }}
                                        >
                                            <span
                                                className="text-[#7E6BB3]"
                                                style={{
                                                    fontFamily:
                                                        'Poppins, sans-serif',
                                                    fontSize: '24px',
                                                    fontWeight: 600,
                                                    lineHeight: 1,
                                                }}
                                            >
                                                {step.number}
                                            </span>
                                        </div>


                                        {/* Step content */}
                                        <div className="min-w-0 pt-[3px]">

                                            <div className="flex items-center gap-3">

                                                <StepIcon
                                                    type={step.icon}
                                                />

                                                <h3
                                                    className="text-[#2B2740]"
                                                    style={{
                                                        fontFamily:
                                                            'Poppins, sans-serif',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        lineHeight: '1.35',
                                                    }}
                                                >
                                                    {step.title}
                                                </h3>

                                            </div>

                                            <p
                                                className="mt-2 text-[#000000]"
                                                style={{
                                                    fontFamily:
                                                        'Inter, sans-serif',
                                                    fontSize: '15px',
                                                    fontWeight: 500,
                                                    lineHeight: '1.5',
                                                }}
                                            >
                                                {step.description}
                                            </p>

                                        </div>

                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}


/* =============================================================
   STEP ICONS
============================================================= */

function StepIcon({ type }: { type: string }) {

    const commonProps = {
        className: 'h-[22px] w-[22px] flex-shrink-0',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: '#7E6BB3',
        strokeWidth: 1.6,
        strokeLinecap: 'round' as const,
        strokeLinejoin: 'round' as const,
    };


    /* =========================================================
       SEARCH
    ========================================================== */
    if (type === 'search') {
        return (
            <svg {...commonProps}>
                <circle
                    cx="10.8"
                    cy="10.8"
                    r="6.2"
                />
                <path d="M15.5 15.5L20 20" />
            </svg>
        );
    }


    /* =========================================================
       INFORMATION
    ========================================================== */
    if (type === 'info') {
        return (
            <svg {...commonProps}>
                <circle
                    cx="12"
                    cy="12"
                    r="8.5"
                />

                <path d="M12 10.5v5" />

                <circle
                    cx="12"
                    cy="7.5"
                    r="0.6"
                    fill="#7E6BB3"
                    stroke="none"
                />
            </svg>
        );
    }


    /* =========================================================
       EVALUATE
    ========================================================== */
    if (type === 'evaluate') {
        return (
            <svg {...commonProps}>
                <rect
                    x="5"
                    y="4.5"
                    width="14"
                    height="16"
                    rx="2"
                />

                <path d="M9 4.5V3h6v1.5" />

                <path d="M8.5 10.5l2 2 4.5-4.5" />

                <path d="M8.5 16h7" />
            </svg>
        );
    }


    /* =========================================================
       REPORT
    ========================================================== */
    return (
        <svg {...commonProps}>
            <path d="M6 3.5h8l4 4v13H6z" />

            <path d="M14 3.5v4h4" />

            <path d="M9 12h6" />

            <path d="M9 15.5h6" />

            <path d="M9 19h4" />
        </svg>
    );
}