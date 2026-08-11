'use client';

import Link from 'next/link';
import {
    FaTelegramPlane,
    FaInstagram,
    FaLinkedin,
    FaFacebook,
    FaYoutube,
    FaQuestionCircle,
} from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#F6F4FE] px-4 sm:px-6 md:px-8 lg:px-10 py-6 md:py-8">
            {/* =========================================================
                OUTER FOOTER BLOCK
            ========================================================= */}
            <div
                className="relative mx-auto w-full max-w-[1408px] overflow-hidden rounded-[10px]"
                style={{
                    backgroundColor: 'rgba(126, 107, 179, 0.80)',
                    border: '0.1px solid rgba(43, 39, 64, 0.10)',
                }}
            >
                {/* =====================================================
                    MAIN FOOTER CONTENT
                ====================================================== */}
                <div className="px-6 py-10 sm:px-8 md:px-[44px] md:py-12 lg:px-[44px]">

                    {/* =================================================
                        DESKTOP / TABLET CONTENT
                    ================================================== */}
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">

                        {/* =================================================
                            COLUMN 1 - WONDLO + ADDRESS + SOCIALS
                        ================================================== */}
                        <div>
                            <Link
                                href="/"
                                className="inline-block font-display text-[22px] font-bold text-white transition-opacity hover:opacity-90"
                            >
                                Wondlo
                            </Link>

                            <div className="mt-4 space-y-1">
                                <p className="font-sans text-[15px] font-medium text-white/90">
                                    71–75 Shelton Street
                                </p>

                                <p className="font-sans text-[15px] font-medium text-white/90">
                                    United Kingdom
                                </p>
                            </div>

                            {/* Social Icons */}
                            <div className="mt-6 flex items-center gap-4">
                                <a
                                    href="#"
                                    aria-label="Instagram"
                                    className="text-white/80 transition-colors hover:text-white"
                                >
                                    <FaInstagram className="h-5 w-5" />
                                </a>

                                <a
                                    href="#"
                                    aria-label="LinkedIn"
                                    className="text-white/80 transition-colors hover:text-white"
                                >
                                    <FaLinkedin className="h-5 w-5" />
                                </a>

                                <a
                                    href="#"
                                    aria-label="Facebook"
                                    className="text-white/80 transition-colors hover:text-white"
                                >
                                    <FaFacebook className="h-5 w-5" />
                                </a>

                                <a
                                    href="#"
                                    aria-label="YouTube"
                                    className="text-white/80 transition-colors hover:text-white"
                                >
                                    <FaYoutube className="h-5 w-5" />
                                </a>
                            </div>
                        </div>


                        {/* =================================================
                            COLUMN 2 -IMPORTANT LINKS
                        ================================================== */}
                        <div className="border-t border-white/35 pt-8 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                            <h4 className="mb-4 font-display text-sm font-semibold text-white/90">
                                Important Link
                            </h4>

                            <ul className="space-y-3 font-sans text-[15px] font-medium text-white/85">
                                <li>
                                    <a
                                        href="#"
                                        className="transition-colors hover:text-white"
                                    >
                                        Safety Guidelines
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="transition-colors hover:text-white"
                                    >
                                        Report an Issue
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="transition-colors hover:text-white"
                                    >
                                        Help Center
                                    </a>
                                </li>
                            </ul>
                        </div>


                        {/* =================================================
                            COLUMN 3 -CONTACT
                        ================================================== */}
                        <div className="border-t border-white/35 pt-8 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                            <h4 className="mb-4 font-display text-sm font-semibold text-white/90">
                                Contact
                            </h4>

                            <p className="break-words font-sans text-[15px] font-medium text-white/85">
                                partnership@wondlo.com
                            </p>
                        </div>
                    </div>


                    {/* =====================================================
                        BOTTOM ROW
                    ====================================================== */}
                    <div className="mt-10 flex flex-col gap-5 border-t border-white/30 pt-6 sm:flex-row sm:items-center sm:justify-between">

                        {/* Copyright */}
                        <div className="font-sans text-[14px] font-medium text-white/70">
                            <p>Safety as a System®</p>

                            <p className="mt-1">
                                Copyright © 2023 Wondlo
                            </p>
                        </div>


                        {/* Telegram */}
                        <div className="flex items-center gap-3">
                            <span className="font-sans text-[13px] font-medium text-white/50">
                                Join us on
                            </span>

                            <Link
                                href="/signup"
                                className="text-white/80 transition-colors hover:text-white"
                                aria-label="Telegram"
                            >
                                <FaTelegramPlane className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>


                {/* =========================================================
                    BOTTOM-RIGHT HELP BUTTON
                ========================================================== */}
                <div className="absolute bottom-5 right-5 hidden sm:block md:bottom-6 md:right-6">
                    <button
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
                        aria-label="Help"
                    >
                        <FaQuestionCircle className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </footer>
    );
}