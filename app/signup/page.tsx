'use client';

import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AuthCard from '@/components/AuthCard';

export default function SignUpPage() {
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.error);

      router.push('/signin');
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF9FE]">
      <Header />
      <div className="flex items-center justify-center px-6 py-12">
        <AuthCard type="signup" onSubmit={handleSubmit} />
      </div>
      <Footer />
    </main>
  );
}