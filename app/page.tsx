'use client';

import { motion } from 'motion/react';
import { NAME } from '@/app/data';

export default function Home() {
  return (
    <motion.div
      animate="visible"
      className="flex flex-col flex-[1] justify-center"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      initial="hidden"
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      <motion.h1
        className="text-center !no-underline !m-0"
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0, transition: { duration: 2 } },
        }}
      >
        <span className="text-international-orange">Hello!</span> I&#39;m{' '}
        <span className="text-international-orange">{NAME}</span> aka Mike,
        Bruce, Buzz, Spike, Goo, Whittet (those are some of my nicknames!) &amp;
        I am a{' '}
        <span className="text-international-orange">Front End Developer</span>{' '}
        based just outside of{' '}
        <span className="text-international-orange">London</span> in{' '}
        <span className="text-international-orange">Essex</span>.
      </motion.h1>
    </motion.div>
  );
}
