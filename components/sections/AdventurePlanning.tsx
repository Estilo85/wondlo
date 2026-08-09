import { FaTimesCircle, FaCheckCircle } from 'react-icons/fa';

export default function AdventurePlanning() {
    const questions = [
        { left: 'How many reviews does it have?', right: 'What happens if someone gets injured?', wrong: true },
        { left: 'Is it worth the price?', right: 'Is there a safety briefing before the activity?', wrong: true },
        { left: 'Is pickup included?', right: 'How is the equipment inspected and monitored?', wrong: true },
        { left: 'How many photos will I get?', right: 'What emergency support is available?', wrong: true },
        { left: 'Is it popular on Instagram?', right: 'Are there limits on group size, permits, or route access?', wrong: true }
    ];

    return (
        <section className="py-[120px] bg-white">
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="font-display font-semibold text-[42px] text-[#2B2740] text-center mb-3">
                    Adventure planning doesn't stop at desire.
                </h2>
                <p className="text-[#C7B5F5] text-center text-base font-bold max-w-[720px] mx-auto mb-12">
                    Before you book, ask better safety questions
                </p>

                <div className="max-w-4xl mx-auto">
                    {questions.map((q, index) => (
                        <div key={index} className="flex items-center justify-between py-4 border-b border-[#E8E5F3] last:border-0">
                            <div className="flex items-center gap-3">
                                <FaTimesCircle className="text-[#DC2626] text-lg flex-shrink-0" />
                                <span className="text-[#DC2626] text-sm font-medium">{q.left}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-[#C7B5F5] flex items-center justify-center text-[#2B2740] font-bold text-xs">
                                    VS
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaCheckCircle className="text-[#C7B5F5] text-lg flex-shrink-0" />
                                <span className="text-[#C7B5F5] text-sm font-medium text-right">{q.right}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}