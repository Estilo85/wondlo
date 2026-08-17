'use client';

import { useState } from 'react';

interface AuthCardProps {
  type: 'signup' | 'signin';
  onSubmit: (data: any) => void;
  loading?: boolean;
  error?: string;
}

export default function AuthCard({ type, onSubmit, loading, error }: AuthCardProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isSignup = type === 'signup';

  return (
    <div className="max-w-md w-full">
      <div className="flex justify-center mb-6">
        <span className="bg-[#EDE7FB] text-[#7E6BB3] px-6 py-2 rounded-full text-sm font-medium">
          3 Free Safety Checks
        </span>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-[#EDE7FB] p-8">
        <h1 className="text-3xl font-bold text-[#282740] text-center mb-2">
          {isSignup ? 'Create an account' : 'Sign In'}
        </h1>
        
        <p className="text-center text-gray-600 mb-6">
          {isSignup ? (
            <>Already have an account? <a href="/signin" className="text-[#7E6BB3] hover:underline">Sign In</a></>
          ) : (
            <>Don't have an account? <a href="/signup" className="text-[#7E6BB3] hover:underline">Sign Up</a></>
          )}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
              {error}
            </div>
          )}

          {isSignup && (
            <div>
              <label className="block text-sm font-medium text-[#282740] mb-1">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="input-field"
                placeholder="John Doe"
              />
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
              className="input-field"
              placeholder="john@example.com"
            />
          </div>

          {!isSignup && (
            <div>
              <label className="block text-sm font-medium text-[#282740] mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="input-field pr-24"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#7E6BB3] hover:underline"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#C7B5F5] text-[#282740] rounded-xl font-semibold hover:opacity-90 transition-all disabled:opacity-50"
          >
            {loading ? 'Processing...' : (isSignup ? 'Create an account' : 'Sign In')}
          </button>
        </form>
      </div>
    </div>
  );
}