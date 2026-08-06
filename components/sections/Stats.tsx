export default function Stats() {
    const stats = [
        { number: '1,000+', label: 'Users Joined' },
        { number: '190+', label: 'Countries Monitored' },
        { number: '500,000+', label: 'Safety Data Points' },
        { number: '27', label: 'Adventure Categories' },
    ];

    return (
        <section className="py-16 bg-[#FAF8FF]">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-[22px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#E8E5F3] p-6 text-center card">
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