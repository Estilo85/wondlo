import { FaSearch, FaFileAlt, FaShieldAlt, FaClipboardList } from 'react-icons/fa';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: FaSearch,
      title: 'Search Operator',
      description: 'Enter a company name, website, or social handle.'
    },
    {
      number: '02',
      icon: FaFileAlt,
      title: 'Collect Public Information',
      description: 'Our system collects incidents, operator claims, safety-specific reviews, community notes, and government advisories.'
    },
    {
      number: '03',
      icon: FaShieldAlt,
      title: 'Evaluate Safety Evidence',
      description: 'Our model evaluates evidence across a 7-step safety framework.'
    },
    {
      number: '04',
      icon: FaClipboardList,
      title: 'Receive Safety Report',
      description: 'A structured summary with a safety score and detailed risk breakdown.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Illustration */}
          <div className="relative">
            <div className="bg-[#FAF9FE] rounded-2xl p-8 min-h-[400px] flex items-center justify-center border border-[#EDE7FB]">
              <div className="text-center">
                <div className="text-6xl mb-4">🏔️</div>
                <p className="text-[#7E6BB3] font-medium">Adventure Illustration</p>
                <p className="text-sm text-gray-400">(Dotted path with adventure images)</p>
              </div>
            </div>
          </div>

          {/* Right - Steps */}
          <div>
            <h2 className="text-4xl font-bold text-[#282740] mb-2">How it works</h2>
            <p className="text-gray-600 mb-8">From search to safety intelligence in four steps.</p>

            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#EDE7FB] rounded-full flex items-center justify-center">
                      <span className="text-[#7E6BB3] font-bold">{step.number}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <step.icon className="text-[#7E6BB3]" />
                      <h3 className="font-semibold text-[#282740]">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{step.description}</p>
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