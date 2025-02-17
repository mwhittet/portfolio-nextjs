'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export default function SocialLinks() {
  return (
    <nav className="flex justify-center pb-4">
      <IconContext.Provider value={{ size: '2rem' }}>
        <Link
          aria-label="Visit my Github profile"
          className="block size-[32] transition-[color] delay-300 duration-300 ease-out hover:text-international-orange motion-reduce:transition-none mr-4"
          href="https://github.com/mwhittet/"
          rel="nofollow noreferrer"
          target="_blank"
        >
          <FaGithub />
        </Link>
        <Link
          aria-label="Visit my LinkedIn profile"
          className="block size-[32] transition-[color] delay-300 duration-300 ease-out hover:text-international-orange motion-reduce:transition-none"
          href="https://www.linkedin.com/in/mike-w-b8756168/"
          rel="nofollow noreferrer"
          target="_blank"
        >
          <FaLinkedin />
        </Link>
      </IconContext.Provider>
    </nav>
  );
}
