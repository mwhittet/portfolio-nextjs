'use client';

import Link from 'next/link';
import { IconContext } from 'react-icons';
import { SOCIAL_LINKS } from '@/app/data';
import type { SocialLink } from '@/app/types';

export default function SocialLinks() {
  return (
    <nav className="flex justify-center pb-4">
      <IconContext.Provider value={{ size: '2rem' }}>
        {SOCIAL_LINKS.map(({ icon, href, label }, index) => {
          return <SocialLink {...{ icon, href, label }} key={index} />;
        })}
      </IconContext.Provider>
    </nav>
  );
}

function SocialLink({ href, icon, label }: SocialLink) {
  const Icon = icon;

  return (
    <Link
      aria-label={label}
      className="block size-[32] transition-[color] delay-300 duration-300 ease-out hover:text-international-orange motion-reduce:transition-none first-of-type:mr-4"
      href={href}
      rel="nofollow noreferrer"
      target="_blank"
    >
      <Icon />
    </Link>
  );
}
