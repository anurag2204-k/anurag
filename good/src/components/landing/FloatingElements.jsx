import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 rounded-full opacity-60"
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-500 transform rotate-45 opacity-60"
        animate={{
          y: [10, -10, 10],
          x: [5, -5, 5],
          rotate: [45, 135, 45],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-6 h-6 border-2 border-pink-500 rounded-full opacity-60"
        animate={{
          y: [15, -15, 15],
          x: [-8, 8, -8],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/6 w-2 h-8 bg-gradient-to-b from-green-500 to-blue-500 rounded-full opacity-60"
        animate={{
          y: [-25, 25, -25],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/6 w-5 h-5 bg-yellow-500 transform rotate-45 opacity-60"
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10],
          rotate: [45, 225, 45],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </div>
  );
};

export default FloatingElements;
