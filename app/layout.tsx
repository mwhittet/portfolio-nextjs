import './globals.css';

import type { Metadata } from 'next';
import { Marmelad } from 'next/font/google';
import Footer from '@/app/ui/footer';
import Header from '@/app/ui/header';
import { SITE_DATA } from '@/app/data';

const marmelad = Marmelad({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
const { description, liveURL, title } = SITE_DATA;

export const metadata: Metadata = {
  description,
  metadataBase: new URL(liveURL),
  openGraph: {
    description,
    images: [
      {
        alt: `Preview image for ${title}'s portfolio`,
        url: '/opengraph-image.jpg',
      },
    ],
    siteName: title,
    title,
    type: 'website',
  },
  title: {
    template: `${title} | %s`,
    default: `${title} | Front End Developer`,
  },
  twitter: {
    card: 'summary_large_image',
    description,
    images: ['/twitter-image.jpg'],
    title,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${marmelad.className} antialiased`}>
        <div className="flex flex-col min-h-dvh">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
