'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HEADER_NAV_ITEMS } from '../data';

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="pt-4 pr-12 pb-4 pl-12 flex justify-between items-center">
      <Link href="/" title="Michael Whittet">
        <Image
          aria-hidden
          src="/logo.svg"
          alt="Michael Whittet"
          width={36}
          height={48}
        />
      </Link>

      <nav aria-label="main navigation">
        {HEADER_NAV_ITEMS.map(({ href, label }) => {
          const isActive = pathname === href;

          return (
            <Link
              className="group mr-4 last:mr-0 text-2xl font-bold"
              href={href}
              key={href}
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
