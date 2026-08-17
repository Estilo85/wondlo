import { NextRequest, NextResponse } from 'next/server';
import admin from '@/lib/firebase-admin';

export async function GET(req: NextRequest) {
  try {
    const token = req.nextUrl.searchParams.get('token');

    if (!token) {
      return NextResponse.json(
        { error: 'Token is required' },
        { status: 400 }
      );
    }

    // ✅ Use type assertion to bypass TypeScript
    const auth = admin.auth() as any;
    const email = await auth.verifyPasswordResetCode(token);
    
    return NextResponse.json({
      valid: true,
      email: email,
    });

  } catch (error: any) {
    console.error('Token verification error:', error);
    return NextResponse.json(
      { error: error.message || 'Invalid or expired token' },
      { status: 400 }
    );
  }
}