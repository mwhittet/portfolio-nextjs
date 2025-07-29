import Image from 'next/image';
import Link from 'next/link';
import type { Card } from '@/app/types';

export default function Card({ href, name, src }: Card) {
  const cardContent = (
    <>
      <Image alt="" height={370} priority={true} src={src} width={740} />
      <span className="block text-xl sm:text-2xl mt-2.5">{name}</span>
    </>
  );
  const cardStyling: string = 'group text-center overflow-hidden';

  return href === '/' ? (
    <li className={cardStyling}>{cardContent}</li>
  ) : (
    <li>
      <Link
        className={`transition-[color] delay-300 duration-300 ease-out md:hover:text-international-orange motion-reduce:transition-none ${cardStyling}`}
        href={href}
      >
        {cardContent}
      </Link>
    </li>
  );
}
