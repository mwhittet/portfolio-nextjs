'use client';

import { motion } from 'motion/react';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      animate={{ opacity: 1 }}
      className="p-4 mx-auto lg:w-4/5 xl:w-3/5 text-lg flex flex-col flex-[1_1_0%]"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
    >
      {children}
    </motion.main>
  );
}
