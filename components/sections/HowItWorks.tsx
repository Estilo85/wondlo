import Image from 'next/image';
import AdventureImg from '../../app/context/Adventure 2.jpeg';
import TrekkingImg from '../../app/context/Trekking 1.jpeg';

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
        <section id="how-it-works" className="bg-[#F6F4FE] py-16">
            <div className="container">
                <div className="bg-white/60 rounded-2xl p-8">
                    <h2 className="font-display font-semibold text-3xl md:text-4xl text-[#2F2F3A] text-center mb-3">
                        How it works
                    </h2>
                    <p className="text-[#6B7280] text-center mb-8">
                        From search to safety intelligence in four steps.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((step, idx) => (
                            <div
                                key={step.number}
                                className="bg-white rounded-xl border border-[#EDE8F8] hover:shadow-lg transition-all overflow-hidden"
                            >
                                {/* Optional image for first two steps */}
                                {idx === 1 && (
                                    <div className="h-44 relative w-full">
                                        <Image src={AdventureImg} alt="Adventure" fill className="object-cover" style={{objectPosition: 'center center'}} />
                                    </div>
                                )}
                                {idx === 2 && (
                                    <div className="h-44 relative w-full">
                                        <Image src={TrekkingImg} alt="Trekking" fill className="object-cover" style={{objectPosition: 'center center'}} />
                                    </div>
                                )}

                                <div className="p-6">
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}