'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push('/signin');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleSignOut = async () => {
    await signOut(auth);
    router.push('/signin');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C7B5F5]"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAF9FE]">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-[#282740] mb-8">Dashboard</h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg border border-[#EDE7FB] p-6">
            <h3 className="font-semibold text-lg mb-2">Safety Checks</h3>
            <p className="text-3xl font-bold text-[#C7B5F5]">3</p>
            <p className="text-gray-600 text-sm">Remaining free checks</p>
            <Link href="/analyze" className="block mt-4 text-[#7E6BB3] hover:underline">
              Analyze Adventure →
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-[#EDE7FB] p-6">
            <h3 className="font-semibold text-lg mb-2">Community</h3>
            <p className="text-gray-600">Join our Telegram group</p>
            <a
              href={process.env.NEXT_PUBLIC_TELEGRAM_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-[#7E6BB3] hover:underline"
            >
              Join Telegram →
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-[#EDE7FB] p-6">
            <h3 className="font-semibold text-lg mb-2">Profile</h3>
            <p className="text-gray-600">{user?.email}</p>
            <button
              onClick={handleSignOut}
              className="mt-4 text-red-600 hover:underline"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}