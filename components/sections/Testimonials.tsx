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
            <section id="testimonials" className="bg-[#8B6BCB] py-20">
                <div className="container text-center">
                    <h2 className="font-display font-semibold text-3xl md:text-4xl text-white mb-3">
                        What our users say
                    </h2>
                    <p className="text-white/80">Loading testimonials...</p>
                </div>
            </section>
        );
    }

    return (
        <section id="testimonials" className="bg-[#8B6BCB] py-20">
            <div className="container">
                <h2 className="font-display font-semibold text-3xl md:text-4xl text-white text-center mb-3">
                    What our users say
                </h2>
                <p className="text-white/80 text-center mb-12">
                    Hear directly from other travelers from across the globe.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white p-6 rounded-xl">
                            <div className="flex gap-0.5 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <span
                                        key={i}
                                        className={`text-lg ${
                                            i < testimonial.rating ? 'text-yellow-400' : 'text-[#E5E7EB]'
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
        </section>
    );
}