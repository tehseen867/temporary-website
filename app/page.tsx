"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white text-center px-6">
      {/* Animated logo or icon */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-6"
      >
        <div className="relative w-20 h-20 bg-white/10 rounded-full flex items-center justify-center border border-white/20 shadow-lg">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            className="absolute inset-0 border-4 border-t-transparent border-white/40 rounded-full"
          />
          <span className="text-3xl font-bold">🚧</span>
        </div>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        Website Under Development
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-gray-300 max-w-lg mb-8"
      >
        We're working hard to bring you something amazing.  
        Stay tuned — our website will be live soon!
      </motion.p>

      {/* Animated dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="flex space-x-2"
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-3 h-3 bg-white rounded-full"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>

      {/* Footer text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-10 text-sm text-gray-500"
      >
        © {new Date().getFullYear()} JoChaho.store — All Rights Reserved
      </motion.p>
    </div>
  );
}
