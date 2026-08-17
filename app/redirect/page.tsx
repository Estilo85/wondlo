'use client';

import { useEffect } from 'react';

export default function RedirectPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const telegramUrl = process.env.NEXT_PUBLIC_TELEGRAM_GROUP_URL || 'https://t.me/joinwandlo';
      window.location.href = telegramUrl;
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#FAF9FE]">
      <div className="text-center max-w-md px-6">
        <div className="w-24 h-24 bg-[#00C853] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-12 h-12 text-[#00C853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-4xl font-bold text-[#282740] mb-4">You're in!</h1>
        
        <p className="text-gray-600 text-lg mb-8">
          Thanks for joining. You're being redirected to our Telegram Community...
        </p>
        
        <div className="flex items-center justify-center gap-3 text-[#7E6BB3]">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <span className="font-medium">Redirecting...</span>
        </div>
      </div>
    </main>
  );
}