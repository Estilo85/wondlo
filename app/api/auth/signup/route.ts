import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Check if Firebase Admin is initialized
    const isAdminInitialized = process.env.FIREBASE_PROJECT_ID && 
                              process.env.FIREBASE_PRIVATE_KEY && 
                              process.env.FIREBASE_CLIENT_EMAIL;

    if (!isAdminInitialized) {
      console.warn('⚠️ Firebase Admin not configured, using mock response');
      return NextResponse.json({
        success: true,
        message: 'Account created (mock). In production, Firebase Admin would send an email.',
        user: { name, email }
      });
    }

    // Your actual Firebase Admin logic here...

  } catch (error: any) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create account' },
      { status: 500 }
    );
  }
}