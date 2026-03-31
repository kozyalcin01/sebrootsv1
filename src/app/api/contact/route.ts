import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Basit validasyon
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const htmlContent = `
      <div style="font-family: sans-serif; color: #1a1a1a; padding: 24px; max-width: 600px; margin: 0 auto;">
        <h2 style="font-size: 18px; font-weight: normal; margin-bottom: 24px; color: #89A8B2; text-transform: uppercase; letter-spacing: 2px;">Yeni İletişim Formu Mesajı</h2>
        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px;">
          <tr>
            <th style="padding: 12px; border: 1px solid #eaeaea; background-color: #f9f9f9; width: 120px; font-weight: normal; color: #666;">İsim:</th>
            <td style="padding: 12px; border: 1px solid #eaeaea;">${name}</td>
          </tr>
          <tr>
            <th style="padding: 12px; border: 1px solid #eaeaea; background-color: #f9f9f9; font-weight: normal; color: #666;">E-posta:</th>
            <td style="padding: 12px; border: 1px solid #eaeaea;">
              <a href="mailto:${email}" style="color: #89A8B2; text-decoration: none;">${email}</a>
            </td>
          </tr>
          <tr>
            <th style="padding: 12px; border: 1px solid #eaeaea; background-color: #f9f9f9; font-weight: normal; color: #666;">Konu:</th>
            <td style="padding: 12px; border: 1px solid #eaeaea;">${subject}</td>
          </tr>
          <tr>
            <th style="padding: 12px; border: 1px solid #eaeaea; background-color: #f9f9f9; font-weight: normal; color: #666; vertical-align: top;">Mesaj:</th>
            <td style="padding: 12px; border: 1px solid #eaeaea; line-height: 1.6;">${message.replace(/\n/g, '<br/>')}</td>
          </tr>
        </table>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: 'Sobroots İletişim <hello@sobroots.com>',
      to: ['hello@sobroots.com'],
      replyTo: email,
      subject: `[Sobroots İletişim] ${subject}`,
      html: htmlContent,
    });

    if (error) {
      return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
