export default function WhatYouReceive() {
    const items = [
        {
            title: 'Overall Safety Score',
            description: 'A single 0-100 score weighted across a 7-step safety framework.'
        },
        {
            title: 'Incident Timeline',
            description: 'Chronological record of reported safety events.'
        },
        {
            title: 'Recommended Questions',
            description: 'We send you adventure-specific questions to ask the operator during your activity.'
        },
        {
            title: 'Safety Report',
            description: 'Plain-language interpretation of what the adventure means.'
        }
    ];

    return (
        <section className="bg-[#F6F4FE] py-16">
            <div className="container">
                <h2 className="font-display font-semibold text-3xl md:text-4xl text-[#2F2F3A] text-center mb-8">
                    What you'll receive
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl border border-[#EDE8F8] shadow-sm">
                            <h3 className="font-display font-semibold text-lg text-[#2F2F3A] mb-2">
                                {item.title}
                            </h3>
                            <p className="text-[#6B7280] text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}