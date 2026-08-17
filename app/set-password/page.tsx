'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { auth } from '@/lib/firebase';
import { confirmPasswordReset, verifyPasswordResetCode } from 'firebase/auth';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [verifying, setVerifying] = useState(true);
  const [email, setEmail] = useState('');

  // Verify the token when the page loads
  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        setError('Invalid or missing token');
        setVerifying(false);
        return;
      }

      try {
        // This verifies the token and returns the email
        const userEmail = await verifyPasswordResetCode(auth, token);
        setEmail(userEmail);
        console.log('✅ Token verified for:', userEmail);
        setVerifying(false);
      } catch (err: any) {
        console.error('❌ Token verification error:', err);
        setError('Invalid or expired token. Please request a new password reset.');
        setVerifying(false);
      }
    };

    verifyToken();
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Confirm the password reset with Firebase
      await confirmPasswordReset(auth, token!, password);
      console.log('✅ Password set successfully for:', email);
      setSuccess(true);
      
      // Redirect to sign in after 3 seconds
      setTimeout(() => router.push('/signin'), 3000);
    } catch (err: any) {
      console.error('❌ Password set error:', err);
      setError(err.message || 'Failed to set password');
    } finally {
      setLoading(false);
    }
  };

  // Show loading while verifying
  if (verifying) {
    return (
      <main className="min-h-screen bg-[#FAF9FE]">
        <Header />
        <div className="flex items-center justify-center min-h-[70vh] px-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C7B5F5] mx-auto"></div>
            <p className="mt-4 text-gray-600 font-medium">Verifying your link...</p>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  // Show error if token is invalid
  if (error) {
    return (
      <main className="min-h-screen bg-[#FAF9FE]">
        <Header />
        <div className="flex items-center justify-center min-h-[70vh] px-6">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-red-600">Invalid Link</h1>
            <p className="text-gray-600 mt-2">{error}</p>
            <Link href="/signup" className="text-[#7E6BB3] hover:underline mt-4 inline-block">
              Create a new account
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  // Main password set form
  return (
    <main className="min-h-screen bg-[#FAF9FE]">
      <Header />
      
      <div className="flex items-center justify-center min-h-[70vh] px-6 py-12">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-xl border border-[#EDE7FB] p-8">
            {/* Success State */}
            {success ? (
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#00C853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-[#282740] mb-2">Password Set!</h2>
                <p className="text-gray-600">Your password has been set successfully.</p>
                <p className="text-gray-500 text-sm mt-2">Redirecting to sign in...</p>
                <div className="mt-4 w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-[#C7B5F5] rounded-full animate-pulse w-full" />
                </div>
              </div>
            ) : (
              <>
                {/* Header */}
                <h1 className="text-3xl font-bold text-[#282740] text-center mb-2">
                  Set your password
                </h1>
                <p className="text-center text-gray-600 mb-6">
                  Create a secure password for your Wondlo account.
                </p>
                
                {/* Email display */}
                {email && (
                  <div className="bg-[#EDE7FB] rounded-xl p-3 text-center mb-6">
                    <p className="text-sm text-[#7E6BB3]">
                      Setting password for: <span className="font-medium">{email}</span>
                    </p>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                      {error}
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-[#282740] mb-1">
                      New Password
                    </label>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 border border-[#EDE7FB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C7B5F5] focus:border-transparent transition-all"
                      placeholder="Minimum 8 characters"
                      minLength={8}
                    />
                    <p className="text-xs text-gray-400 mt-1">Must be at least 8 characters</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#282740] mb-1">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full px-4 py-3 border border-[#EDE7FB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C7B5F5] focus:border-transparent transition-all"
                      placeholder="Re-enter your password"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-[#C7B5F5] text-[#282740] rounded-xl font-semibold hover:opacity-90 transition-all disabled:opacity-50 text-lg"
                  >
                    {loading ? 'Setting Password...' : 'Set Password'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}