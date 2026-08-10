'use client';

import { useState, useEffect } from 'react';
import { FaStar, FaChevronRight } from 'react-icons/fa';
import { getTestimonials } from '@/services/api';
import { Testimonial } from '@/types';

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;

    useEffect(() => {
        getTestimonials()
            .then(data => {
                setTestimonials(data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, []);

    const nextSlide = () => {
        const maxIndex = Math.max(0, testimonials.length - itemsPerPage);
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);

    if (loading) {
        return (
            <section id="testimonials" className="py-[120px] bg-[#EDE7FB]">
                <div className="max-w-7xl mx-auto px-8 text-center">
                    <h2 className="font-display font-semibold text-[42px] text-[#2B2740] mb-3">What our users say</h2>
                    <p className="text-[#6F6A7F]">Loading testimonials...</p>
                </div>
            </section>
        );
    }

    if (testimonials.length === 0) {
        return (
            <section id="testimonials" className="py-[120px] bg-[#EDE7FB]">
                <div className="max-w-7xl mx-auto px-8 text-center">
                    <h2 className="font-display font-semibold text-[42px] text-[#2B2740] mb-3">What our users say</h2>
                    <p className="text-[#6F6A7F] text-base max-w-2xl mx-auto">
                        We're collecting feedback from our first users. Check back soon to see real traveler experiences.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section id="testimonials" className="py-[120px] bg-[#EDE7FB]">
            <div className="max-w-7xl mx-auto px-8">
                <div className="bg-[#FBFAFF] border border-[#DCD6E8] rounded-lg shadow-[0_2px_5px_rgba(47,39,64,0.08)] p-8 md:p-12">
                    <h2 className="font-display font-semibold text-[42px] text-[#2B2740] text-center mb-3">
                        What our users say
                    </h2>
                    <p className="text-[#6F6A7F] text-center text-base max-w-2xl mx-auto mb-12">
                        Hear directly from other travelers from across the globe.
                    </p>

                    <div className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {visibleTestimonials.map((testimonial) => (
                                <div key={testimonial.id} className="bg-white border border-[#DDD7EA] rounded-lg shadow-[0_2px_5px_rgba(47,39,64,0.08)] p-6 text-center hover:-translate-y-1 transition-all duration-300">
                                    <div className="w-16 h-16 rounded-full bg-[#EDE7FB] flex items-center justify-center mx-auto mb-3 text-[#7E6BB3] font-bold text-xl">
                                        {testimonial.name?.[0] || 'U'}
                                    </div>
                                    <div className="flex justify-center gap-0.5 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className={`text-lg ${i < testimonial.rating ? 'text-[#FBBF24]' : 'text-[#DDD7EA]'}`} />
                                        ))}
                                    </div>
                                    <p className="text-[#2B2740] text-sm leading-relaxed mb-3">"{testimonial.text}"</p>
                                    <p className="text-[#6F6A7F] text-sm font-medium">— {testimonial.name}</p>
                                </div>
                            ))}
                        </div>

                        {testimonials.length > itemsPerPage && currentIndex < testimonials.length - itemsPerPage && (
                            <button
                                onClick={nextSlide}
                                className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#EDE7FB] hover:bg-[#DCCAF8] transition-all duration-200 flex items-center justify-center shadow-[0_2px_8px_rgba(47,39,64,0.1)] cursor-pointer border-none outline-none"
                                aria-label="Next testimonials"
                            >
                                <FaChevronRight className="text-[#7E6BB3] text-lg hover:text-[#6A5A9E] transition-colors" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}