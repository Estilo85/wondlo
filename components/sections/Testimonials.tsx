'use client';

import { useState, useEffect } from 'react';
import { getTestimonials } from '@/services/api';
import { Testimonial } from '@/types';

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);

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

    // If no reviews, show empty state
    if (!loading && testimonials.length === 0) {
        return (
            <section id="testimonials" className="py-[120px] bg-[#8B6BCB]">
                <div className="max-w-7xl mx-auto px-8 text-center">
                    <h2 className="font-display font-semibold text-[42px] text-white mb-3">What our users say</h2>
                    <p className="text-white/80 text-base max-w-2xl mx-auto">
                        We're collecting feedback from our first users. Check back soon to see real traveler experiences.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section id="testimonials" className="py-[120px] bg-[#8B6BCB]">
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="font-display font-semibold text-[42px] text-white text-center mb-3">
                    What our users say
                </h2>
                <p className="text-white/80 text-center text-base max-w-2xl mx-auto mb-12">
                    Hear directly from other travelers from across the globe.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:-translate-y-1 transition-all duration-300">
                            {/* Avatar */}
                            <div className="w-16 h-16 rounded-full bg-[#EDE7FB] flex items-center justify-center mx-auto mb-3 text-[#8B6BCB] font-bold text-xl">
                                {testimonial.name?.[0] || 'U'}
                            </div>

                            {/* Stars */}
                            <div className="flex justify-center gap-0.5 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'text-[#FBBF24]' : 'text-[#E8E5F3]'}`} fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="text-[#2B2740] text-sm leading-relaxed mb-3">"{testimonial.text}"</p>
                            <p className="text-[#6B7280] text-sm font-medium">— {testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}