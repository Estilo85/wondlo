export default function Stats() {
    const stats = [
        { number: '1,000+', label: 'Users Joined' },
        { number: '190+', label: 'Countries Monitored' },
        { number: '500,000+', label: 'Safety Data Points' },
        { number: '27', label: 'Adventure Categories' },
    ];

    return (
        <section className="bg-white py-16">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <h3 className="font-display font-semibold text-3xl md:text-4xl text-[#8B6BCB]">
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