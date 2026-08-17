'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SignInPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      console.log('🔐 Attempting sign in with email:', formData.email);
      
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      console.log('✅ Sign in successful:', userCredential.user.uid);
      
      const token = await userCredential.user.getIdToken();
      localStorage.setItem('token', token);
      
      router.push('/redirect');
    } catch (err: any) {
      console.error('❌ Sign in error:', err.code, err.message);
      setError(err.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF9FE]">
      <Header />
      
      <div className="flex items-center justify-center px-6 py-12">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-xl border border-[#EDE7FB] p-8">
            <h1 className="text-3xl font-bold text-[#282740] text-center mb-2">
              Sign In
            </h1>
            <p className="text-center text-gray-600 mb-6">
              Don't have an account?{' '}
              <a href="/signup" className="text-[#7E6BB3] hover:underline">
                Sign Up
              </a>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-[#282740] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-[#EDE7FB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C7B5F5] focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#282740] mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-3 border border-[#EDE7FB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C7B5F5] focus:border-transparent transition-all"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#C7B5F5] text-[#282740] rounded-xl font-semibold hover:opacity-90 transition-all disabled:opacity-50"
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}