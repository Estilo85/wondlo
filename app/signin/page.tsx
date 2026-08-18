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
      // Check if auth is available
      if (!auth) {
        throw new Error('Firebase is not configured. Please check environment variables.');
      }

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

  // Rest of your component...
}