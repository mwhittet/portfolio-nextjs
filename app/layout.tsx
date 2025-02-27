import './globals.css';

import type { Metadata } from 'next';
import { Marmelad } from 'next/font/google';
import Footer from '@/app/ui/footer';
import Header from '@/app/ui/header';

const marmelad = Marmelad({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: 'Michael Whittet | %s',
    default: 'Michael Whittet | Front End Developer',
  },
  description:
    'Portfolio of Michael Whittet, a Front End Developer based just outside of London in Essex',
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
          <main className="p-4 mr-auto ml-auto lg:w-4/5 xl:w-3/5 text-lg flex flex-col flex-[1_1_0%]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
