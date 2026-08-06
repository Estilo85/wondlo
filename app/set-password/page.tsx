'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { setPassword } from '@/services/api';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

export default function SetPasswordPage() {
    const [password, setPasswordValue] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    useEffect(() => {
        if (!token) {
            setError('Invalid or missing verification token.');
        }
    }, [token]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (password.length < 6) {
            setError('Password must be at least 6 characters.');
            setLoading(false);
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            setLoading(false);
            return;
        }

        try {
            const response = await setPassword(token!, password);
            console.log('Set password response:', response);
            
            if (response.success) {
                setSuccess(true);
                setLoading(false);
                setTimeout(() => {
                    router.push('/signin');
                }, 2000);
            } else {
                setError(response.message || 'Something went wrong.');
                setLoading(false);
            }
        } catch (err: any) {
            console.error('Set password error:', err);
            const errorMessage = err.response?.data?.message || err.message || 'Something went wrong. Please try again.';
            setError(errorMessage);
            setLoading(false);
        }
    };

    if (!token) {
        return (
            <div className="min-h-screen bg-[#F6F4FE] flex flex-col">
                <Navbar />
                <div className="flex-1 flex items-center justify-center px-4 py-12">
                    <div className="max-w-md w-full text-center">
                        <div className="text-5xl mb-4">⚠️</div>
                        <h1 className="font-display font-semibold text-2xl text-[#2B2740]">Invalid Link</h1>
                        <p className="text-[#6B7280] text-sm mt-2">The verification link is invalid or has expired.</p>
                        <Link href="/signup" className="btn-primary w-full mt-6 text-sm">Sign Up Again</Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F6F4FE] flex flex-col">
            <Navbar />
            <div className="flex-1 flex items-center justify-center px-4 py-12">
                <div className="max-w-md w-full">
                    <div className="text-center mb-8">
                        <h1 className="font-display font-semibold text-3xl text-[#2B2740]">Set Your Password</h1>
                        <p className="text-[#6B7280] text-sm mt-1">Create a password for your account</p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E5E7EB]">
                        {error && <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg">{error}</div>}
                        {success && <div className="mb-4 p-3 bg-green-50 text-green-600 text-sm rounded-lg">✅ Password set successfully! Redirecting...</div>}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-[#2B2740] mb-1">Password</label>
                                <input
                                    type="password"
                                    placeholder="Min 6 characters"
                                    value={password}
                                    onChange={(e) => setPasswordValue(e.target.value)}
                                    disabled={success}
                                    className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C7B5F5] text-sm disabled:bg-slate-100"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#2B2740] mb-1">Confirm Password</label>
                                <input
                                    type="password"
                                    placeholder="Confirm your password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    disabled={success}
                                    className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C7B5F5] text-sm disabled:bg-slate-100"
                                />
                            </div>
                            <button type="submit" disabled={loading || success} className="btn-primary w-full text-sm">
                                {loading ? 'Setting...' : 'Set Password'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}