'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface LoadingBarProps {
  isLoading: boolean;
}

export default function LoadingBar({ isLoading }: LoadingBarProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ 
            duration: 0.8,
            ease: "easeInOut"
          }}
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 z-[60] origin-left"
          style={{
            transformOrigin: 'left center'
          }}
        />
      )}
    </AnimatePresence>
  );
}