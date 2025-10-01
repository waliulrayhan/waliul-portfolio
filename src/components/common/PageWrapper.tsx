'use client';

import { useEffect, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingSpinner from '../ui/LoadingSpinner';

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function PageWrapper({ children, className = '' }: PageWrapperProps) {
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Set isClient to true once component mounts on client
    setIsClient(true);
    setIsLoading(true);
    
    // Simulate page loading - shorter delay for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Small delay to ensure smooth transition
      setTimeout(() => setShowContent(true), 100);
    }, 500); // Reduced from 800ms to 500ms

    return () => clearTimeout(timer);
  }, []);

  // Render without animations on server to prevent hydration mismatch
  if (!isClient) {
    return (
      <div className={`relative ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* Initial loading overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-30"
            key="initial-loading"
          >
            <LoadingSpinner />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}