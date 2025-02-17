import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 Not Found',
};

export default function Page() {
  return (
    <>
      <h1>404 Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>
        Let&#39;s go back to the{' '}
        <Link className="font-bold underline hover:no-underline" href="/">
          home page
        </Link>
        ...
      </p>
      <Image
        className="justify-self-center mt-7 rounded-[50%]"
        src="/404.jpg"
        width={275}
        height={275}
        alt="404 facepalm"
      />
    </>
  );
}
