import { NextRequest, NextResponse } from 'next/server';
import admin from '@/lib/firebase-admin';
import { query } from '@/lib/db';
import { sendSetPasswordEmail } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Check if user exists in PostgreSQL
    const existing = await query(
      'SELECT id FROM users WHERE email = $1',
      [email]
    );

    if (existing.rows.length > 0) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 409 }
      );
    }

    // Create user in Firebase
    let firebaseUser;
    try {
      firebaseUser = await admin.auth().createUser({
        email,
        displayName: name,
        emailVerified: false,
      });
    } catch (firebaseError: any) {
      console.error('Firebase user creation error:', firebaseError);
      return NextResponse.json(
        { error: firebaseError.message || 'Failed to create user' },
        { status: 500 }
      );
    }

    console.log('✅ Firebase user created:', firebaseUser.uid);

    // Generate password reset link
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const resetLink = await admin.auth().generatePasswordResetLink(email);
    
    console.log('🔗 Reset link from Firebase:', resetLink);

    // Store user in PostgreSQL
    await query(
      `INSERT INTO users (name, email, firebase_uid, is_active)
       VALUES ($1, $2, $3, $4)`,
      [name, email, firebaseUser.uid, true]
    );

    // Send email with the reset link
    await sendSetPasswordEmail(email, name, resetLink);

    return NextResponse.json({
      message: 'Account created. Check your email to set your password.',
    });

  } catch (error: any) {
    console.error('❌ Signup error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create account' },
      { status: 500 }
    );
  }
}