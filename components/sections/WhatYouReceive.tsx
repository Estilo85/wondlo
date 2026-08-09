import { FaShieldAlt, FaClock, FaQuestionCircle, FaFileAlt } from 'react-icons/fa';

export default function WhatYouReceive() {
    const items = [
        { icon: FaShieldAlt, title: 'Overall Safety Score', description: 'A single 0–100 score weighted across a 7-step safety framework.' },
        { icon: FaClock, title: 'Incident Timeline', description: 'Chronological record of reported safety events.' },
        { icon: FaQuestionCircle, title: 'Recommended Questions', description: 'We send you adventure-specific questions to ask the operator during your check-in with them.' },
        { icon: FaFileAlt, title: 'Safety Report', description: 'Risk-language interpretation of what the evidence means.' }
    ];

    return (
        <section className="py-[120px] bg-white">
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="font-display font-semibold text-[42px] text-[#2B2740] text-center mb-10">
                    What you'll receive
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, index) => (
                        <div key={index} className="bg-[#F6F4FE] rounded-2xl p-6 border border-[#E8E5F3] hover:-translate-y-1 transition-all duration-300">
                            <item.icon className="text-3xl text-[#7E6BB3] mb-4" />
                            <h3 className="font-display font-semibold text-lg text-[#2B2740] mb-2">{item.title}</h3>
                            <p className="text-[#6B7280] text-sm leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}