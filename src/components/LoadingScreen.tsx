import React from 'react';
import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] bg-cafe-50 dark:bg-stone-950 flex flex-col items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="mb-4"
      >
        <Coffee className="h-16 w-16 text-cafe-600" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-xl font-serif font-bold text-stone-800 dark:text-white"
      >
        FreshBite Café
      </motion.h2>
      <motion.div
        className="w-48 h-1 bg-stone-200 dark:bg-stone-800 rounded-full mt-6 overflow-hidden"
      >
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-full h-full bg-cafe-600"
        />
      </motion.div>
    </div>
  );
}
