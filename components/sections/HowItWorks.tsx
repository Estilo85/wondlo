const steps = [
    {
        number: '01',
        title: 'Search Operator',
        description: 'Enter a company name, website, or social handle.'
    },
    {
        number: '02',
        title: 'Collect Public Information',
        description: 'Our system collects incidents, operator claims, safety-specific reviews, community notes, and government advisories based on our developed proprietary safety framework.'
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
        <section id="how-it-works" className="bg-[#F8F6FD] py-20">
            <div className="container">
                <h2 className="font-display font-semibold text-3xl md:text-4xl text-[#2F2F3A] text-center mb-3">
                    How it works
                </h2>
                <p className="text-[#6B7280] text-center mb-12">
                    From search to safety intelligence in four steps.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="bg-white p-6 rounded-xl border border-[#E5E7EB] hover:shadow-lg transition-all hover:-translate-y-1"
                        >
                            <div className="font-display font-bold text-3xl text-[#8B6BCB] mb-3">
                                {step.number}
                            </div>
                            <h3 className="font-display font-semibold text-lg text-[#2F2F3A] mb-2">
                                {step.title}
                            </h3>
                            <p className="text-[#6B7280] text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}