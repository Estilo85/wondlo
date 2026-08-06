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
            .catch(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <section id="testimonials" className="bg-[#F1EBFA] py-20">
                <div className="container text-center">
                    <h2 className="font-display font-semibold text-3xl md:text-4xl text-[#2F2F3A] mb-3">
                        What our users say
                    </h2>
                    <p className="text-[#6B7280]">Loading testimonials...</p>
                </div>
            </section>
        );
    }

    return (
        <section id="testimonials" className="bg-[#F1EBFA] py-20">
            <div className="container">
                <div className="bg-[#8B6BCB]/10 rounded-2xl p-8">
                    <h2 className="font-display font-semibold text-3xl md:text-4xl text-[#2F2F3A] text-center mb-3">
                        What our users say
                    </h2>
                    <p className="text-[#6B7280] text-center mb-8">
                        Hear directly from other travelers from across the globe.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-sm">
                                <div className="flex gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <span
                                            key={i}
                                            className={`text-lg ${
                                                i < testimonial.rating ? 'text-yellow-400' : 'text-[#EDE8F8]'
                                            }`}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                                <p className="text-[#2F2F3A] text-sm leading-relaxed mb-3">
                                    "{testimonial.text}"
                                </p>
                                <p className="text-[#6B7280] text-sm font-medium">— {testimonial.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
