import { FaSearch, FaInfoCircle, FaClipboardCheck, FaFileAlt } from 'react-icons/fa';

const steps = [
    {
        number: '01',
        icon: FaSearch,
        title: 'Search Operator',
        description: 'Enter a company name, website, or social handle.'
    },
    {
        number: '02',
        icon: FaInfoCircle,
        title: 'Collect Public Information',
        description: 'Our system collects incidents, operator claims, safety-specific reviews, community notes, and government advisories based on our developed proprietary safety framework.'
    },
    {
        number: '03',
        icon: FaClipboardCheck,
        title: 'Evaluate Safety Evidence',
        description: 'Our model evaluates evidence across a 7-step safety framework.'
    },
    {
        number: '04',
        icon: FaFileAlt,
        title: 'Receive Safety Report',
        description: 'A structured summary with a safety score and detailed risk breakdown.'
    }
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-[120px] bg-[#F9F7FF]">
            <div className="max-w-7xl mx-auto px-8">
                <div className="bg-[#FBFAFF] border border-[#DCD6E8] rounded-lg shadow-[0_2px_5px_rgba(47,39,64,0.08)] p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left - Adventure Visual with Dotted Path */}
                        <div className="relative h-[500px] w-full">
                            {/* Dotted Path - SVG */}
                            <svg 
                                className="absolute inset-0 z-0 w-full h-full"
                                viewBox="0 0 400 500"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* Curved Path Matching Your Image */}
                                <path
                                    d="M60 440 
                                       C80 400, 100 370, 130 350 
                                       C160 330, 180 320, 200 330 
                                       C220 340, 230 360, 250 340 
                                       C270 320, 280 280, 300 250 
                                       C320 220, 330 180, 345 140"
                                    stroke="#C9B65A"
                                    strokeWidth="3"
                                    strokeDasharray="10 10"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                {/* Decorative dots */}
                                <circle cx="80" cy="420" r="3" fill="#C9B65A" opacity="0.5" />
                                <circle cx="110" cy="380" r="3" fill="#C9B65A" opacity="0.5" />
                                <circle cx="150" cy="340" r="3" fill="#C9B65A" opacity="0.5" />
                                <circle cx="190" cy="325" r="3" fill="#C9B65A" opacity="0.5" />
                                <circle cx="210" cy="335" r="3" fill="#C9B65A" opacity="0.5" />
                                <circle cx="235" cy="345" r="3" fill="#C9B65A" opacity="0.5" />
                                <circle cx="260" cy="315" r="3" fill="#C9B65A" opacity="0.5" />
                                <circle cx="285" cy="275" r="3" fill="#C9B65A" opacity="0.5" />
                                <circle cx="310" cy="230" r="3" fill="#C9B65A" opacity="0.5" />
                                <circle cx="330" cy="185" r="3" fill="#C9B65A" opacity="0.5" />
                                {/* End dots */}
                                <circle cx="60" cy="440" r="5" fill="#C9B65A" />
                                <circle cx="345" cy="140" r="5" fill="#C9B65A" />
                            </svg>

                            {/* Photo 1 - Bottom Left */}
                            <div className="absolute bottom-0 left-0 z-10 w-[220px] h-[280px] rounded-lg overflow-hidden shadow-lg rotate-[-3deg]">
                                <img 
                                    src="/images/kayaking.jpg" 
                                    alt="Kayaking" 
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Photo 2 - Top Right */}
                            <div className="absolute top-0 right-0 z-10 w-[200px] h-[260px] rounded-lg overflow-hidden shadow-lg rotate-[3deg]">
                                <img 
                                    src="/images/hiking.jpg" 
                                    alt="Mountain Hiking" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Right - Steps */}
                        <div>
                            <h2 className="font-display font-semibold text-[42px] text-[#2B2740] mb-2">
                                How it works
                            </h2>
                            <p className="text-[#6F6A7F] text-base mb-10">
                                From search to safety intelligence in four steps.
                            </p>

                            <div className="space-y-8 relative">
                                <div className="absolute left-[15px] top-8 bottom-8 w-0.5 bg-[#EDE7FB]"></div>

                                {steps.map((step, index) => (
                                    <div key={index} className="flex gap-6 relative items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EDE7FB] text-[#7E6BB3] font-display font-bold text-sm flex items-center justify-center z-10">
                                            {step.number}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3">
                                                <h3 className="font-display font-semibold text-lg text-[#2B2740]">{step.title}</h3>
                                                <step.icon className="text-[#7E6BB3] text-lg ml-auto" />
                                            </div>
                                            <p className="text-[#6F6A7F] text-sm leading-relaxed mt-1">{step.description}</p>
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