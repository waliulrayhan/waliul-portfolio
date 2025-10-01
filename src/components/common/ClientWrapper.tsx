'use client';

import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingSpinner from '../ui/LoadingSpinner';
import LoadingBar from '../ui/LoadingBar';

interface ClientWrapperProps {
  children: ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [prevPathname, setPrevPathname] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    // Only show loading if pathname actually changed (not on initial load)
    if (prevPathname !== null && prevPathname !== pathname) {
      setIsLoading(true);
      
      // Hide loading after content is ready - faster for better UX
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 800); // Increased slightly to show the loading bar

      return () => clearTimeout(timer);
    }
    
    setPrevPathname(pathname);
  }, [pathname, prevPathname]);

  // Render static content on server to prevent hydration mismatch
  if (!isClient) {
    return <>{children}</>;
  }

  return (
    <>
      <LoadingBar isLoading={isLoading} />
      
      {/* Loading overlay - positioned to not affect layout */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40"
            key="navigation-loading"
          >
            <LoadingSpinner />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content with opacity transition only */}
      <motion.div
        animate={{ opacity: isLoading ? 0.3 : 1 }}
        transition={{ duration: 0.3 }}
        key={pathname}
      >
        {children}
      </motion.div>
    </>
  );
}