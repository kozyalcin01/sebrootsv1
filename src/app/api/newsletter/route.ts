import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { email } = body;

    // Basit validasyon
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const htmlContent = `
      <div style="background-color: #ffffff; padding: 40px; font-family: sans-serif; color: #1a1a1a; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; text-align: center;">
        <h1 style="font-family: serif; font-size: 28px; font-weight: 300; letter-spacing: 4px; text-transform: uppercase; margin-bottom: 8px;">Sobroots</h1>
        <p style="font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #89A8B2; margin-top: 0;">Carry Your Roots</p>
        <hr style="border: none; border-top: 1px solid #eaeaea; margin: 32px 0;" />
        <h2 style="font-size: 18px; font-weight: normal; margin-bottom: 24px;">Hoş Geldin!</h2>
        <p style="font-size: 14px; line-height: 1.8; color: #4a4a4a; text-align: left;">
          Sobroots bültenine katıldığın için teşekkür ederiz. Sana özel sınırlı üretim deri çanta koleksiyonlarından, yeni tasarımlardan ve markamızın hikayesinden doğrudan haberdar olacaksın.
        </p>
        <p style="font-size: 14px; line-height: 1.8; color: #4a4a4a; text-align: left; margin-top: 24px;">
          Sevgilerle,<br/>Sobroots Ekibi
        </p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: 'Sobroots <hello@sobroots.com>',
      to: [email],
      subject: 'Hoş geldin — Sobroots Bülteni',
      html: htmlContent,
    });

    if (error) {
      return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}
