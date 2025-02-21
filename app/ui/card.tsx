import Image from 'next/image';
import Link from 'next/link';
import type { Card } from '../types';

export default function Card({ href, name, src }: Card) {
  const cardContent = (
    <>
      <Image
        alt=""
        className="transform-[rotate(15deg)_scale(1.4)] duration-400 ease-in-out"
        src={src}
        height={340}
        width={800}
      />
      <span className="block text-2xl mt-2.5 opacity-0 group-hover:opacity-100">
        {name}
      </span>
    </>
  );
  const cardStyling: string =
    'group text-center overflow-hidden hover:[&>img]:transform-[rotate(0deg)_scale(1)] motion-reduce:hover:[&>img]:transform-none';

  return href === '/' ? (
    <div className={cardStyling}>{cardContent}</div>
  ) : (
    <Link
      className={`transition-[color] delay-300 duration-300 ease-out hover:text-international-orange motion-reduce:transition-none ${cardStyling}`}
      href={href}
    >
      {cardContent}
    </Link>
  );
}
