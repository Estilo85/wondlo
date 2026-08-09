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
        <section id="how-it-works" className="py-[120px] bg-[#F6F4FE]">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-4">
                        <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                            <img src="/images/hiking.jpg" alt="Adventure" className="w-full h-full object-cover" />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg h-48">
                            <img src="/images/kayaking.jpg" alt="Hiking" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <div>
                        <h2 className="font-display font-semibold text-[42px] text-[#2B2740] mb-2">
                            How it works
                        </h2>
                        <p className="text-[#6B7280] text-base mb-10">
                            From search to safety intelligence in four steps.
                        </p>

                        <div className="space-y-8 relative">
                            <div className="absolute left-[15px] top-8 bottom-8 w-0.5 bg-[#C7B5F5]/30"></div>

                            {steps.map((step, index) => (
                                <div key={index} className="flex gap-6 relative">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C7B5F5] text-[#2B2740] font-display font-bold text-sm flex items-center justify-center z-10">
                                        {step.number}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <step.icon className="text-[#7E6BB3] text-lg" />
                                            <h3 className="font-display font-semibold text-lg text-[#2B2740]">{step.title}</h3>
                                        </div>
                                        <p className="text-[#6B7280] text-sm leading-relaxed mt-1">{step.description}</p>
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