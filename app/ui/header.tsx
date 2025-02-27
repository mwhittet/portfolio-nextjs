'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HEADER_LINKS } from '@/app/data';

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="pt-4 pr-12 pb-4 pl-12 flex justify-between items-center">
      <Link
        className="block transition-[fill] delay-300 duration-300 ease-out hover:fill-international-orange motion-reduce:transition-none"
        href="/"
        title="Michael Whittet"
      >
        <svg
          aria-hidden
          height={48}
          viewBox="0 0 72 96"
          width={36}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 35.5v35.7L5 67l5-4.2V20.9l13 10.6 13 10.6 18-14.6 18-14.6v-13L54 14.5 36 29.1 18 14.5 0-.1v35.6zM66.8 29.1L62 33.2v41.9L49 64.5 36 53.9 18 68.5 0 83.1v13l18-14.6 18-14.6 18 14.6 18 14.6V60.6C72 41 71.9 25 71.8 25c-.2.1-2.4 1.9-5 4.1z" />
        </svg>
      </Link>

      <nav aria-label="main navigation">
        {HEADER_LINKS.map(({ href, label }, index) => {
          const isActive = pathname.includes(href);

          return (
            <Link
              className="group mr-4 last:mr-0 text-2xl font-bold"
              href={href}
              key={index}
            >
              <span
                className={`bg-left-bottom bg-gradient-to-r from-international-orange to-international-orange bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all delay-150 duration-500 ease-out pb-1.5 ${
                  isActive
                    ? 'bg-left-bottom bg-gradient-to-r from-international-orange to-international-orange bg-[length:100%_3px]'
                    : 'text-black'
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
