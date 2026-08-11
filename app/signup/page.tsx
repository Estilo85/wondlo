'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { joinWaitingList } from '@/services/api';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import { FaUserFriends } from 'react-icons/fa';

export default function SignUpPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [copied, setCopied] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        if (!name.trim() || !email.trim()) {
            setError('Please fill in all fields.');
            setLoading(false);
            return;
        }

        if (!email.includes('@')) {
            setError('Please enter a valid email address.');
            setLoading(false);
            return;
        }

        try {
            const response = await joinWaitingList(name, email);
            console.log('Signup response:', response);

            if (response.success) {
                setSuccess(true);
                setSuccessMessage(
                    response.message ||
                        'Account created! Check your email to set your password.'
                );
                setLoading(false);

                setTimeout(() => {
                    router.push('/redirect');
                }, 2000);
            } else {
                setError(
                    response.message ||
                        'Something went wrong. Please try again.'
                );
                setLoading(false);
            }
        } catch (err: any) {
            console.error('Signup error:', err);

            const errorMessage =
                err.response?.data?.message ||
                err.message ||
                'Something went wrong. Please try again.';

            setError(errorMessage);
            setLoading(false);
        }
    };

    const handleRefer = () => {
        const link = window.location.origin + '/signup';

        navigator.clipboard
            .writeText(link)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 3000);
            })
            .catch(() => {
                const textArea = document.createElement('textarea');
                textArea.value = link;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);

                setCopied(true);
                setTimeout(() => setCopied(false), 3000);
            });
    };

    return (
        <div className="flex min-h-screen flex-col bg-[#F6F4FE]">
            <Navbar />

            <div className="flex flex-1 items-center justify-center px-4 pb-12 pt-24 sm:px-6 md:pt-28">
                <div className="w-full max-w-md">

                    {/* =====================================================
                        BADGE
                    ====================================================== */}
                    <div className="mb-6 flex justify-center">
                        <span className="inline-flex rounded-full bg-[#7E6BB3] px-6 py-2 text-sm font-medium text-white">
                            3 Free Safety Checks
                        </span>
                    </div>


                    {/* =====================================================
                        SIGN UP FORM
                    ====================================================== */}
                    <div
                        className="rounded-lg border border-[#DDD7EA] bg-[#F6F4FE] p-6 shadow-[0_2px_5px_rgba(47,39,64,0.08)] sm:p-8"
                    >

                        {/* =================================================
                            HEADING
                        ================================================== */}
                        <h1
                            className="mb-2 text-center text-3xl font-semibold text-[#2B2740]"
                        >
                            Create an account
                        </h1>

                        <p className="mb-8 text-center text-sm text-[#6B7280]">
                            Already have an account?{' '}
                            <Link
                                href="/signin"
                                className="text-[#8B6BCB] hover:underline"
                            >
                                Sign In
                            </Link>
                        </p>


                        {/* =================================================
                            ERROR / SUCCESS
                        ================================================== */}
                        {error && (
                            <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
                                {error}
                            </div>
                        )}

                        {success && (
                            <div className="mb-4 rounded-lg bg-green-50 p-3 text-sm text-green-600">
                                ✅ {successMessage}
                            </div>
                        )}


                        {/* =================================================
                            FORM
                        ================================================== */}
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4"
                        >

                            {/* =================================================
                                NAME
                            ================================================== */}
                            <div>
                                <label className="mb-1 block text-sm font-medium text-[#2B2740]">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Your full name"
                                    value={name}
                                    onChange={(e) =>
                                        setName(e.target.value)
                                    }
                                    disabled={success}
                                    className="h-12 w-full rounded-lg border border-[#DDD7EA] bg-[#F6F4FE] px-4 text-[#2B2740] placeholder:text-[#A1A1AA] transition-all focus:border-[#8B6BCB] focus:outline-none focus:ring-2 focus:ring-[#8B6BCB]/20 disabled:bg-[#F6F4FE]"
                                />
                            </div>


                            {/* =================================================
                                EMAIL
                            ================================================== */}
                            <div>
                                <label className="mb-1 block text-sm font-medium text-[#2B2740]">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    disabled={success}
                                    className="h-12 w-full rounded-lg border border-[#DDD7EA] bg-[#F6F4FE] px-4 text-[#2B2740] placeholder:text-[#A1A1AA] transition-all focus:border-[#8B6BCB] focus:outline-none focus:ring-2 focus:ring-[#8B6BCB]/20 disabled:bg-[#F6F4FE]"
                                />
                            </div>


                            {/* =================================================
                                CREATE ACCOUNT BUTTON
                            ================================================== */}
                            <button
                                type="submit"
                                disabled={loading || success}
                                className="h-12 w-full rounded-lg bg-[#8B6BCB] text-sm font-semibold text-white transition-all hover:bg-[#7A5BB8] disabled:opacity-60"
                            >
                                {loading
                                    ? 'Creating account...'
                                    : 'Create an account'}
                            </button>

                        </form>


                        {/* =================================================
                            DIVIDER
                        ================================================== */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-[#DDD7EA]" />
                            </div>

                            <div className="relative flex justify-center text-sm">
                                <span className="bg-[#F6F4FE] px-4 text-[#6B7280]">
                                    or
                                </span>
                            </div>
                        </div>


                        {/* =================================================
                            REFER YOUR TRAVEL BUDDY
                        ================================================== */}
                        <button
                            onClick={handleRefer}
                            className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border-2 border-[#C7B5F5] text-sm font-semibold text-[#2B2740] transition-all hover:bg-[#EDE7FB]"
                        >
                            <FaUserFriends className="text-[#8B6BCB]" />

                            Refer Your Travel Buddy
                        </button>


                        {/* =================================================
                            COPIED MESSAGE
                        ================================================== */}
                        {copied && (
                            <p className="mt-3 text-center text-sm text-green-600">
                                ✅ Link copied to clipboard!
                            </p>
                        )}

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}