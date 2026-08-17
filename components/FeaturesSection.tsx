import { FaShieldAlt, FaClock, FaQuestionCircle, FaFileAlt } from 'react-icons/fa';

export default function FeaturesSection() {
  const features = [
    {
      icon: FaShieldAlt,
      title: 'Overall Safety Score',
      description: 'A single 0–100 score weighted across a 7-step safety framework.'
    },
    {
      icon: FaClock,
      title: 'Incident Timeline',
      description: 'Chronological record of reported safety events.'
    },
    {
      icon: FaQuestionCircle,
      title: 'Recommended Questions',
      description: 'Adventure-specific questions to ask the operator during booking.'
    },
    {
      icon: FaFileAlt,
      title: 'Safety Report',
      description: 'Plain-language interpretation of what the evidence means.'
    }
  ];

  return (
    <section className="py-16 bg-[#FAF9FE]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#282740] text-center mb-12">
          What you'll receive
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-[#EDE7FB] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#EDE7FB] rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="text-[#7E6BB3] text-xl" />
              </div>
              <h3 className="font-semibold text-[#282740] mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}