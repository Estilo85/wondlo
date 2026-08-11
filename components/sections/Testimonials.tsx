'use client';

import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
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

    /*
    ============================================================
    LOADING STATE
    ============================================================
    */
    if (loading) {
        return (
            <section
                id="testimonials"
                className="bg-[#F6F4FE] py-[60px] md:py-[80px]"
            >
                <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-10 xl:px-12">

                    <div
                        className="relative w-full rounded-[10px]"
                        style={{
                            background:
                                'linear-gradient(90deg, rgba(237,231,251,0.8) 0%, rgba(199,181,245,0.8) 100%)',
                            border: '0.1px solid rgba(43, 39, 64, 0.10)',
                            boxShadow:
                                '0 8px 30px rgba(43, 39, 64, 0.20)',
                        }}
                    >
                        <div className="px-[20px] py-[40px] text-center sm:px-[32px] md:px-[44px] md:py-[50px]">

                            <h2
                                className="text-[#2B2740]"
                                style={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: '30px',
                                    fontWeight: 700,
                                    lineHeight: '1.25',
                                }}
                            >
                                What our users say
                            </h2>

                            <p
                                className="mx-auto mt-5 max-w-[650px] text-center text-[#7E6BB3]"
                                style={{
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '15px',
                                    fontWeight: 500,
                                    lineHeight: '1.5',
                                }}
                            >
                                Loading testimonials...
                            </p>

                        </div>
                    </div>

                </div>
            </section>
        );
    }

    /*
    ============================================================
    EMPTY STATE
    ============================================================
    */
    if (testimonials.length === 0) {
        return (
            <section
                id="testimonials"
                className="bg-[#F6F4FE] py-[60px] md:py-[80px]"
            >
                <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-10 xl:px-12">

                    <div
                        className="relative w-full rounded-[10px]"
                        style={{
                            background:
                                'linear-gradient(90deg, rgba(237,231,251,0.8) 0%, rgba(199,181,245,0.8) 100%)',
                            border: '0.1px solid rgba(43, 39, 64, 0.10)',
                            boxShadow:
                                '0 8px 30px rgba(43, 39, 64, 0.20)',
                        }}
                    >
                        <div className="px-[20px] py-[40px] text-center sm:px-[32px] md:px-[44px] md:py-[50px]">

                            <h2
                                className="text-[#2B2740]"
                                style={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: '30px',
                                    fontWeight: 700,
                                    lineHeight: '1.25',
                                }}
                            >
                                What our users say
                            </h2>

                            <p
                                className="mx-auto mt-5 max-w-[650px] text-center text-[#7E6BB3]"
                                style={{
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '15px',
                                    fontWeight: 500,
                                    lineHeight: '1.5',
                                }}
                            >
                                We're collecting feedback from our first users.
                                Check back soon to see real traveler experiences.
                            </p>

                        </div>
                    </div>

                </div>
            </section>
        );
    }

    /*
    ============================================================
    MAIN TESTIMONIALS SECTION
    ============================================================
    */
    return (
        <section
            id="testimonials"
            className="bg-[#F6F4FE] py-[60px] md:py-[80px]"
        >
            <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-10 xl:px-12">

                {/* =================================================
                    OUTER TESTIMONIALS BLOCK
                ================================================== */}
                <div
                    className="relative w-full rounded-[10px]"
                    style={{
                        background:
                            'linear-gradient(90deg, rgba(237,231,251,0.8) 0%, rgba(199,181,245,0.8) 100%)',
                        border: '0.1px solid rgba(43, 39, 64, 0.10)',
                        boxShadow:
                            '0 8px 30px rgba(43, 39, 64, 0.20)',
                    }}
                >

                    {/* =================================================
                        HEADER
                    ================================================== */}
                    <div className="px-[20px] pt-[40px] text-center sm:px-[32px] md:px-[44px] md:pt-[50px]">

                        <h2
                            className="text-center text-[#2B2740]"
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '30px',
                                fontWeight: 700,
                                lineHeight: '1.25',
                            }}
                        >
                            What our users say
                        </h2>

                        {/* No horizontal divider — intentionally removed */}

                        <p
                            className="mx-auto mt-5 max-w-[650px] text-center text-[#7E6BB3]"
                            style={{
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '15px',
                                fontWeight: 500,
                                lineHeight: '1.5',
                            }}
                        >
                            Hear directly from other sources from across the globe.
                        </p>

                    </div>


                    {/* =================================================
                        TESTIMONIAL CARDS
                    ================================================== */}
                    <div className="px-[20px] pb-[40px] pt-[35px] sm:px-[32px] md:px-[44px] md:pb-[50px]">

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="rounded-[10px] bg-white p-6 text-center transition-transform duration-300 hover:-translate-y-1"
                                    style={{
                                        border:
                                            '0.1px solid rgba(43, 39, 64, 0.10)',
                                        boxShadow:
                                            '0 8px 20px rgba(43, 39, 64, 0.12)',
                                    }}
                                >

                                    {/* =================================================
                                        USER INITIAL
                                    ================================================== */}
                                    <div
                                        className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#EDE7FB] text-xl font-bold text-[#7E6BB3]"
                                    >
                                        {testimonial.name?.[0] || 'U'}
                                    </div>


                                    {/* =================================================
                                        RATING
                                    ================================================== */}
                                    <div className="mb-3 flex justify-center gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                className={`text-lg ${
                                                    i < testimonial.rating
                                                        ? 'text-[#FBBF24]'
                                                        : 'text-[#DDD7EA]'
                                                }`}
                                            />
                                        ))}
                                    </div>


                                    {/* =================================================
                                        TESTIMONIAL MESSAGE
                                    ================================================== */}
                                    <p
                                        className="mb-3 text-center text-[#7E6BB3]"
                                        style={{
                                            fontFamily:
                                                'Inter, sans-serif',
                                            fontSize: '15px',
                                            fontWeight: 600,
                                            lineHeight: '1.5',
                                        }}
                                    >
                                        "{testimonial.text}"
                                    </p>


                                    {/* =================================================
                                        USER NAME
                                    ================================================== */}
                                    <p
                                        className="text-center text-[#6F6A7F]"
                                        style={{
                                            fontFamily:
                                                'Inter, sans-serif',
                                            fontSize: '15px',
                                            fontWeight: 500,
                                        }}
                                    >
                                        — {testimonial.name}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}