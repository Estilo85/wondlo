import { FaUsers, FaGlobe, FaDatabase, FaTags } from 'react-icons/fa';

export default function Stats() {
    const stats = [
        { icon: FaUsers, number: '1,000+', label: 'Users' },
        { icon: FaGlobe, number: '190+', label: 'Countries' },
        { icon: FaDatabase, number: '500,000+', label: 'Data Points' },
        { icon: FaTags, number: '27', label: 'Adventure Categories' },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <stat.icon className="text-3xl text-[#C7B5F5] mx-auto mb-3" />
                            <h3 className="font-display font-semibold text-3xl md:text-4xl text-[#2B2740]">
                                {stat.number}
                            </h3>
                            <p className="text-[#6B7280] text-sm mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}