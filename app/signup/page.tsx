'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { joinWaitingList } from '@/services/api';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

export default function SignUpPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

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
            setSuccess(true);
            setLoading(false);
            setTimeout(() => router.push('/redirect'), 2000);
        } catch (err: any) {
            console.error('Signup error:', err);
            const errorMessage = err.response?.data?.message || err.message || 'Something went wrong. Please try again.';
            setError(errorMessage);
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            <div className="flex-1 flex items-center justify-center px-4 py-12">
                <div className="max-w-md w-full">
                    <div className="text-center mb-8">
                        <span className="badge-purple">3 Free Safety Checks</span>
                        <h1 className="font-display font-semibold text-3xl text-[#2B2740] mt-4">Create an account</h1>
                        <p className="text-[#6B7280] text-sm mt-1">Already have an account? <Link href="/signin" className="text-[#C7B5F5] hover:underline">Sign In</Link></p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E5E7EB]">
                        {error && <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg">{error}</div>}
                        {success && <div className="mb-4 p-3 bg-green-50 text-green-600 text-sm rounded-lg">✅ Thank you for joining! Redirecting...</div>}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-[#2B2740] mb-1">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your full name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    disabled={success}
                                    className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C7B5F5] text-sm disabled:bg-slate-100"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#2B2740] mb-1">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={success}
                                    className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C7B5F5] text-sm disabled:bg-slate-100"
                                />
                            </div>
                            <button type="submit" disabled={loading || success} className="btn-primary w-full text-sm">
                                {loading ? 'Joining...' : 'Create an account'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}