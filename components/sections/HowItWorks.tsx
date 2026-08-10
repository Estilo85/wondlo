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
        description: 'Our system collects incidents, operator claims, safety-specific information, community notes, and government advisories based on our developed proprietary safety framework.'
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Adventure Visual with Dashed Route */}
                    <div className="relative h-[500px] w-full">
                        {/* Dashed Route Line - SVG */}
                        <svg 
                            className="absolute inset-0 z-0 w-full h-full"
                            viewBox="0 0 400 500"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M50 450 C100 350, 200 200, 350 100"
                                stroke="#C9B65A"
                                strokeWidth="3"
                                strokeDasharray="8 8"
                                fill="none"
                            />
                            {/* Small circles at ends */}
                            <circle cx="50" cy="450" r="4" fill="#C9B65A" />
                            <circle cx="350" cy="100" r="4" fill="#C9B65A" />
                        </svg>

                        {/* Photo 1 - Bottom Left (Kayaking) */}
                        <div className="absolute bottom-0 left-0 z-10 w-[220px] h-[280px] rounded-lg overflow-hidden shadow-lg rotate-[-3deg]">
                            <img 
                                src="/images/kayaking.jpg" 
                                alt="Kayaking" 
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Photo 2 - Top Right (Hiking) */}
                        <div className="absolute top-0 right-0 z-10 w-[200px] h-[260px] rounded-lg overflow-hidden shadow-lg rotate-[3deg]">
                            <img 
                                src="/images/hiking.jpg" 
                                alt="Mountain Hiking" 
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Small extra details - tiny decorative elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
                            <div className="w-3 h-3 rounded-full bg-[#C9B65A]/20"></div>
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
                                <div key={index} className="flex gap-6 relative">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EDE7FB] text-[#7E6BB3] font-display font-bold text-sm flex items-center justify-center z-10">
                                        {step.number}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <step.icon className="text-[#7E6BB3] text-lg" />
                                            <h3 className="font-display font-semibold text-lg text-[#2B2740]">{step.title}</h3>
                                        </div>
                                        <p className="text-[#6F6A7F] text-sm leading-relaxed mt-1">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}