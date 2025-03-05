import { createElement } from 'react';
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { render } from '@react-email/render';
import { ContactFormType } from '@/app/types';
import ContactEmail from '@/app/ui/contactEmail';

export async function POST(req: Request) {
  try {
    const data: ContactFormType = await req.json();
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

    const html = await render(createElement(ContactEmail, data));

    const msg = {
      to: process.env.RECIPIENT_EMAIL!,
      from: process.env.SENDER_EMAIL!,
      subject: `New portfolio submission from: '${data.name}'`,
      html,
    };

    await sgMail.send(msg);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 }
    );
  }
}
