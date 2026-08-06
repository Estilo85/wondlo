const steps = [
    {
        number: '01',
        title: 'Search Operator',
        description: 'Enter a company name, website, or social handle.'
    },
    {
        number: '02',
        title: 'Collect Public Information',
        description: 'Our system collects incidents, operator claims, safety-specific reviews, community notes, and government advisories.'
    },
    {
        number: '03',
        title: 'Evaluate Safety Evidence',
        description: 'Our model evaluates evidence across a 7-step safety framework.'
    },
    {
        number: '04',
        title: 'Receive Safety Report',
        description: 'A structured summary with a safety score and detailed risk breakdown.'
    }
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-16 md:py-24 bg-[#F6F4FE]">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Images */}
                    <div className="space-y-4">
                        <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                            <img src="/images/hiking.jpg" alt="Adventure" className="w-full h-full object-cover" />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg h-48">
                            <img src="/images/kayaking.jpg" alt="Hiking" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Right - Steps */}
                    <div>
                        <h2 className="font-display font-semibold text-3xl md:text-4xl text-[#2B2740] mb-2">
                            How it works
                        </h2>
                        <p className="text-[#6B7280] text-base mb-10">
                            From search to safety intelligence in four steps.
                        </p>

                        <div className="space-y-8 relative">
                            {/* Vertical line */}
                            <div className="absolute left-[15px] top-8 bottom-8 w-0.5 bg-[#8B6BCB]/30"></div>

                            {steps.map((step, index) => (
                                <div key={index} className="flex gap-6 relative">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#8B6BCB] text-white font-display font-bold text-sm flex items-center justify-center z-10">
                                        {step.number}
                                    </div>
                                    <div>
                                        <h3 className="font-display font-semibold text-lg text-[#2B2740]">{step.title}</h3>
                                        <p className="text-[#6B7280] text-sm leading-relaxed">{step.description}</p>
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