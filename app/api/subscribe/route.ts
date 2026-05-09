import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Set your Resend audience ID in .env as RESEND_AUDIENCE_ID
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID ?? '';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Valid email required.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (AUDIENCE_ID) {
      // Add to Resend audience / contact list
      await resend.contacts.create({
        email,
        audienceId: AUDIENCE_ID,
        unsubscribed: false,
      });
    }

    // Send a welcome email to the subscriber
    await resend.emails.send({
      from: 'TheoGuard <hello@theoguard.com>',
      to: email,
      subject: 'Welcome to TheoGuard — Theological discernment for your ministry',
      html: `
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; padding: 40px 24px; color: #1c1917;">
          <div style="margin-bottom: 32px;">
            <div style="width: 36px; height: 36px; background: #b45309; border-radius: 6px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px;">
              <span style="color: white; font-size: 18px; font-weight: bold;">T</span>
            </div>
            <h1 style="font-size: 24px; font-weight: 700; color: #1c1917; margin: 0 0 8px;">You're in.</h1>
            <p style="font-size: 16px; color: #57534e; line-height: 1.6; margin: 0;">
              Thank you for joining the TheoGuard community. You'll receive our monthly newsletter on
              doctrinal discernment, ministry resources, and updates on new features.
            </p>
          </div>

          <div style="border-top: 1px solid #e7e5e4; padding-top: 24px; margin-bottom: 24px;">
            <h2 style="font-size: 16px; font-weight: 600; color: #1c1917; margin: 0 0 12px;">Start protecting your congregation today.</h2>
            <p style="font-size: 14px; color: #57534e; line-height: 1.6; margin: 0 0 16px;">
              TheoGuard gives you 5 free theological analyses — no credit card required.
              Upload a sermon PDF, YouTube link, or book title and receive a detailed
              doctrinal soundness report in minutes.
            </p>
            <a href="https://app.theoguard.com"
               style="display: inline-block; background: #b45309; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 600; font-family: system-ui, sans-serif;">
              Start your free analyses
            </a>
          </div>

          <p style="font-size: 12px; color: #a8a29e; line-height: 1.5; margin: 0;">
            You received this because you subscribed at theoguard.com.
            If you did not sign up, you can safely ignore this email.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
