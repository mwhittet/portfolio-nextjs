import './globals.css';

import type { Metadata } from 'next';
import { Marmelad } from 'next/font/google';
import Footer from '@/app/ui/footer';
import Header from '@/app/ui/header';
import { NAME } from '@/app/data';

const marmelad = Marmelad({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: `${NAME} | %s`,
    default: `${NAME} | Front End Developer`,
  },
  description: `Portfolio of ${NAME}, a Front End Developer based just outside of London in Essex`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${marmelad.className} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
