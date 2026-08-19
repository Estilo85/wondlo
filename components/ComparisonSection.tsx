import { FaQuestionCircle, FaShieldAlt } from 'react-icons/fa';

export default function ComparisonSection() {
  const comparisons = [
    {
      question: 'How many reviews does it have?',
      safety: 'What happens if someone gets injured?'
    },
    {
      question: 'Is it worth the price?',
      safety: 'Is there a safety briefing before the activity?'
    },
    {
      question: 'Is pickup included?',
      safety: 'How is the equipment inspected and monitored?'
    },
    {
      question: 'How many photos will I get?',
      safety: 'What emergency support is available?'
    },
    {
      question: 'Is it popular on Instagram?',
      safety: 'Are there limits on group size, permits, or route access?'
    }
  ];

  return (
    <section className="py-16 bg-[#FAF9FE]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#282740] text-center mb-2">
            Ask Better Safety Questions
          </h2>
          <p className="text-[#7E6BB3] text-center text-lg mb-12">
            Before you book, ask better safety questions
          </p>

          <div className="space-y-4">
            {comparisons.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-1 bg-pink-50 p-4 rounded-xl">
                  <div className="flex items-center gap-2">
                    <FaQuestionCircle className="text-pink-400" />
                    <span className="text-[#282740]">{item.question}</span>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-[#EDE7FB] rounded-full flex items-center justify-center">
                    <span className="text-[#7E6BB3] font-bold text-sm">VS</span>
                  </div>
                </div>

                <div className="flex-1 bg-[#EDE7FB] p-4 rounded-xl border border-[#C7B5F5]/30">
                  <div className="flex items-center gap-2">
                    <FaShieldAlt className="text-[#7E6BB3]" />
                    <span className="text-[#282740] font-medium">{item.safety}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}