import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Preloader = ({ onComplete }) => {
  useEffect(() => {
    // Total animation lasts ~3.2s before we call onComplete to unmount
    const timer = setTimeout(() => {
      onComplete();
    }, 3200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#1a1a1a]"
      initial={{ y: 0 }}
      exit={{ 
        y: "-100vh", 
        transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.3 } 
      }}
    >
      <motion.div 
        className="flex flex-col items-center"
        exit={{ opacity: 0, y: -40, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
      >
        <div className="flex items-center justify-center font-serif text-6xl md:text-8xl text-[#f5f1e8] tracking-tight">
          <span>U</span>
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="overflow-hidden whitespace-nowrap"
          >
            tkarsh
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.76, 0, 0.24, 1] }}
            className="ml-3 md:ml-5 text-[#e8a93c]"
          >
            Singh
          </motion.span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.76, 0, 0.24, 1] }}
          className="mt-8 flex items-center gap-4 text-[#d9d2c0] font-mono text-xs md:text-sm uppercase tracking-widest"
        >
          <span className="w-8 md:w-12 h-[1px] bg-[#d9d2c0] opacity-50"></span>
          Full-Stack Developer
          <span className="w-8 md:w-12 h-[1px] bg-[#d9d2c0] opacity-50"></span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
