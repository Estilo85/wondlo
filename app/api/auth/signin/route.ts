import { NextRequest, NextResponse } from 'next/server';
import admin from '@/lib/firebase-admin';

export async function POST(req: NextRequest) {
  try {
    const { idToken } = await req.json();

    if (!idToken) {
      return NextResponse.json(
        { error: 'ID token is required' },
        { status: 400 }
      );
    }

    // Verify Firebase ID token
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    
    // Get user from Firebase
    const userRecord = await admin.auth().getUser(decodedToken.uid);

    return NextResponse.json({
      message: 'Sign in successful',
      user: {
        id: decodedToken.uid,
        name: userRecord.displayName || 'User',
        email: userRecord.email,
      }
    });

  } catch (error) {
    console.error('Signin error:', error);
    return NextResponse.json(
      { error: 'Invalid token' },
      { status: 401 }
    );
  }
}