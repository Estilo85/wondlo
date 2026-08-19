import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendSetPasswordEmail(email: string, name: string, token: string) {
  // Use the token directly (it already contains the full link)
  // If token is a full URL, use it directly, otherwise construct it
  let setPasswordUrl: string;
  
  if (token.startsWith('http')) {
    // Token is already a full URL
    setPasswordUrl = token;
  } else {
    // Token is just the token string, construct the URL
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    setPasswordUrl = `${baseUrl}/set-password?token=${token}`;
  }
  
  console.log('📧 Sending email to:', email);
  console.log('🔗 Password link:', setPasswordUrl);

  try {
    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Wondlo <noreply@wondlo.com>',
      to: email,
      subject: 'Welcome to Wondlo - Set Your Password',
      html: `
        <div style="font-family: 'Poppins', sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #FAF9FE;">
          <div style="background: white; border-radius: 16px; padding: 40px; border: 1px solid #EDE7FB; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
            <!-- Logo -->
            <div style="text-align: center; margin-bottom: 30px;">
              <div style="display: inline-block; background: #C7B5F5; color: #282740; width: 56px; height: 56px; border-radius: 50%; line-height: 56px; font-size: 28px; font-weight: 700;">
                W
              </div>
              <h1 style="color: #282740; margin: 10px 0 0; font-size: 24px; font-weight: 700;">
                Welcome to <span style="color: #7E6BB3;">Wondlo</span>
              </h1>
            </div>
            
            <!-- Greeting -->
            <p style="color: #282740; font-size: 16px; font-weight: 500;">Hi ${name},</p>
            
            <!-- Message -->
            <p style="color: #4a4a6a; font-size: 16px; line-height: 1.8;">
              Thanks for joining Wondlo! We're excited to help you explore the world with confidence.
            </p>
            
            <p style="color: #4a4a6a; font-size: 16px; line-height: 1.8;">
              Please set your password to activate your account:
            </p>
            
            <!-- Button -->
            <div style="text-align: center; margin: 35px 0;">
              <a href="${setPasswordUrl}" 
                 style="display: inline-block; background: #C7B5F5; color: #282740; padding: 16px 48px; 
                        text-decoration: none; border-radius: 12px; font-weight: 600; font-size: 16px;
                        box-shadow: 0 4px 12px rgba(199, 181, 245, 0.4);">
                Set My Password →
              </a>
            </div>
            
            <!-- Footer info -->
            <p style="color: #6b6b8a; font-size: 14px; line-height: 1.8;">
              This link expires in <strong>24 hours</strong>.
            </p>
            
            <p style="color: #6b6b8a; font-size: 14px; line-height: 1.8;">
              If you didn't request this, please ignore this email.
            </p>
            
            <hr style="border: none; border-top: 1px solid #EDE7FB; margin: 30px 0;" />
            
            <!-- Footer -->
            <p style="color: #8b8b9e; font-size: 12px; text-align: center; line-height: 1.6;">
              Wondlo - Adventure Safety Intelligence<br>
              Safety as a System™
            </p>
          </div>
        </div>
      `,
    });
    
    console.log('✅ Email sent successfully to:', email);
    return result;
  } catch (error) {
    console.error('❌ Email send error:', error);
    throw new Error('Failed to send email');
  }
}