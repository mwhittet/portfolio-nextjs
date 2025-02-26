import Link from 'next/link';
import { Metadata } from 'next';

import ContactForm from '@/app/ui/contactForm';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function Page() {
  return (
    <>
      <h1>Contact</h1>
      <p>
        If you wish to contact me about a freelance project or just fancy a
        chat, please feel free to fill out the contact form below or reach out
        to me via{' '}
        <Link
          className="font-bold underline hover:no-underline"
          href="https://www.linkedin.com/in/mike-w-b8756168/"
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </Link>
        .
      </p>
      <ContactForm />
      <figure className="lg:w-1/2 m-0">
        <blockquote>Creativity is contagious. Pass it on.</blockquote>
        <figcaption> — Albert Einstein</figcaption>
      </figure>
    </>
  );
}
