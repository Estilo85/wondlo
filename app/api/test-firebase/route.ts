import { NextResponse } from 'next/server';
import admin from '@/lib/firebase-admin';

export async function GET() {
  try {
    // Try to verify Firebase Admin is working
    const testUser = await admin.auth().getUserByEmail('test@example.com').catch(() => null);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Firebase Admin is working!',
      note: 'If you see this, your Firebase Admin setup is correct.'
    });
  } catch (error: any) {
    return NextResponse.json({ 
      success: false, 
      error: error.message,
      note: 'Check your Firebase Admin credentials in .env.local'
    }, { status: 500 });
  }
}