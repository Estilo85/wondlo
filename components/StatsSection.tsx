import { FaUsers, FaFlag, FaDatabase, FaCompass } from 'react-icons/fa';

export default function StatsSection() {
  const stats = [
    { icon: FaUsers, value: '1,000+', label: 'Users', sub: 'Joined in Q1 Launch' },
    { icon: FaFlag, value: '190+', label: 'Countries', sub: 'Monitored' },
    { icon: FaDatabase, value: '500,000+', label: 'Data points', sub: '' },
    { icon: FaCompass, value: '27', label: 'Adventure', sub: 'Categories' },
  ];

  return (
    <section className="bg-white border-y border-[#EDE7FB] py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-2">
                <stat.icon className="text-[#C7B5F5] text-2xl" />
              </div>
              <div className="text-2xl font-bold text-[#282740]">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
              {stat.sub && <div className="text-xs text-gray-400">{stat.sub}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}