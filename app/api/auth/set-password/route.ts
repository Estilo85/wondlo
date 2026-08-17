import { NextRequest, NextResponse } from 'next/server';
import admin from '@/lib/firebase-admin';

export async function POST(req: NextRequest) {
  try {
    const { token, password } = await req.json();

    console.log('🔑 Received token:', token?.substring(0, 20) + '...');

    if (!token || !password) {
      return NextResponse.json(
        { error: 'Token and password are required' },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters' },
        { status: 400 }
      );
    }

    try {
      // ✅ Use type assertion to bypass TypeScript
      const auth = admin.auth() as any;
      
      // First verify the token
      const email = await auth.verifyPasswordResetCode(token);
      console.log('✅ Token verified for:', email);
      
      // Then confirm the password reset
      await auth.confirmPasswordReset(token, password);
      console.log('✅ Password reset confirmed for:', email);
      
    } catch (firebaseError: any) {
      console.error('❌ Firebase error:', firebaseError.code, firebaseError.message);
      
      if (firebaseError.code === 'auth/invalid-action-code') {
        return NextResponse.json(
          { error: 'Invalid or expired token. Please request a new password reset.' },
          { status: 400 }
        );
      }
      
      return NextResponse.json(
        { error: firebaseError.message || 'Failed to set password' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      message: 'Password set successfully. You can now sign in.'
    });

  } catch (error: any) {
    console.error('❌ Set password error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to set password' },
      { status: 500 }
    );
  }
}