'use client';

import Image from 'next/image';
import Link from 'next/link';

type Card = {
  href: string;
  src: string;
  name: string;
};

export default function Card({ href, name, src }: Card) {
  return (
    <Link
      className="group text-center overflow-hidden transition-[color] delay-300 duration-300 ease-out hover:text-international-orange motion-reduce:transition-none"
      href={href}
    >
      <Image
        alt={name}
        className="transform-[rotate(15deg)_scale(1.4)] hover:transform-[rotate(0deg)_scale(1)] transition duration-400 ease-in-out motion-reduce:transform-none motion-reduce:hover:transform-none motion-reduce:transition-none "
        src={src}
        height={340}
        width={800}
      />
      <span className="block text-2xl mt-2.5 opacity-0 group-hover:opacity-100">
        {name}
      </span>
    </Link>
  );
}
