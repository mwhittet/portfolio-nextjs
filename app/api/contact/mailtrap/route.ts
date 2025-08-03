import { createElement } from 'react';
import { NextResponse } from 'next/server';
import { MailtrapClient } from 'mailtrap';
import { render } from '@react-email/render';
import { ContactFormType } from '@/app/types';
import ContactEmail from '@/app/ui/contactEmail';

const mailtrap = new MailtrapClient({
  // accountId: +process.env.ACCOUNT_ID!,
  // testInboxId: +process.env.TEST_INBOX_ID!,
  // sandbox: true,
  token: process.env.MAILTRAP_TOKEN!,
});

export async function POST(req: Request) {
  try {
    const data: ContactFormType = await req.json();
    const html = await render(createElement(ContactEmail, data));

    const result = await mailtrap.send({
      from: { email: process.env.SENDER_EMAIL!, name: 'Portfolio' },
      to: [{ email: process.env.RECIPIENT_EMAIL! }],
      subject: `New portfolio submission from: '${data.name}'`,
      html,
    });

    console.log('Email sent successfully:', result);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);

    return NextResponse.json(
      { message: 'Failed to send email', error },
      { status: 500 }
    );
  }
}
