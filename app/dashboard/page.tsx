'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

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
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Wondlo
          </Link>
          <div className="flex gap-4 items-center">
            <span className="text-gray-700">Welcome, {user?.displayName || user?.email}</span>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 text-sm bg-gray-200 rounded-lg hover:bg-gray-300 transition"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-semibold text-lg mb-2">Safety Checks</h3>
            <p className="text-3xl font-bold text-blue-600">3</p>
            <p className="text-gray-600 text-sm">Remaining free checks</p>
            <Link href="/analyze" className="block mt-4 text-blue-600 hover:underline">
              Analyze Adventure →
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-semibold text-lg mb-2">Community</h3>
            <p className="text-gray-600">Join our Telegram group</p>
            <a
              href={process.env.NEXT_PUBLIC_TELEGRAM_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-blue-600 hover:underline"
            >
              Join Telegram →
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-semibold text-lg mb-2">Profile</h3>
            <p className="text-gray-600">{user?.email}</p>
            <button className="mt-4 text-blue-600 hover:underline">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}