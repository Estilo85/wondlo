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
                setSuccessMessage(response.message || 'Account created! Check your email to set your password.');
                setLoading(false);
                setTimeout(() => {
                    router.push('/waiting-list');
                }, 2000);
            } else {
                setError(response.message || 'Something went wrong. Please try again.');
                setLoading(false);
            }
        } catch (err: any) {
            console.error('Signup error:', err);
            const errorMessage = err.response?.data?.message || err.message || 'Something went wrong. Please try again.';
            setError(errorMessage);
            setLoading(false);
        }
    };

    const handleRefer = () => {
        const link = window.location.origin + '/signup';
        navigator.clipboard.writeText(link).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 3000);
        }).catch(() => {
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
        <div className="min-h-screen bg-[#FAF8FF] flex flex-col">
            <Navbar />
            <div className="flex-1 flex items-center justify-center px-4 py-10">
                <div className="w-full max-w-[480px] bg-white rounded-[22px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#E8E5F3] p-12">
                    <div className="flex justify-center mb-6">
                        <span className="inline-flex px-4 py-2 bg-[#EDE8F8] text-[#8B6BCB] font-medium text-sm rounded-full">
                            3 Free Safety Checks
                        </span>
                    </div>

                    <h1 className="font-bold text-3xl text-[#2F2F3A] text-center mb-2">
                        Create an account
                    </h1>

                    <p className="text-[#6B7280] text-center text-sm mb-8">
                        Already have an account?{' '}
                        <Link href="/signin" className="text-[#8B6BCB] hover:underline">
                            Sign In
                        </Link>
                    </p>

                    {error && (
                        <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg">
                            {error}
                        </div>
                    )}
                    {success && (
                        <div className="mb-4 p-3 bg-green-50 text-green-600 text-sm rounded-lg">
                            ✅ {successMessage}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-[#2F2F3A] mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Your full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                disabled={success}
                                className="w-full h-12 px-4 bg-white border border-[#E8E5F3] rounded-lg text-[#2F2F3A] placeholder:text-[#A1A1AA] focus:outline-none focus:border-[#8B6BCB] focus:ring-2 focus:ring-[#8B6BCB]/20 transition-all disabled:bg-slate-100"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#2F2F3A] mb-1">Email Address</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={success}
                                className="w-full h-12 px-4 bg-white border border-[#E8E5F3] rounded-lg text-[#2F2F3A] placeholder:text-[#A1A1AA] focus:outline-none focus:border-[#8B6BCB] focus:ring-2 focus:ring-[#8B6BCB]/20 transition-all disabled:bg-slate-100"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading || success}
                            className="w-full h-12 bg-[#8B6BCB] text-white font-semibold text-sm rounded-lg hover:bg-[#7A5BB8] transition-all disabled:opacity-60"
                        >
                            {loading ? 'Creating account...' : 'Create an account'}
                        </button>
                    </form>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-[#E8E5F3]"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-[#6B7280]">or</span>
                        </div>
                    </div>

                    <button
                        onClick={handleRefer}
                        className="w-full flex items-center justify-center gap-2 h-12 border-2 border-[#E8E5F3] text-[#2F2F3A] font-semibold text-sm rounded-lg hover:bg-[#FAF8FF] hover:border-[#8B6BCB] transition-all"
                    >
                        <FaUserFriends className="text-[#8B6BCB]" />
                        Refer Your Travel Buddy
                    </button>
                    {copied && (
                        <p className="text-green-600 text-sm text-center mt-3">✅ Link copied to clipboard!</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}