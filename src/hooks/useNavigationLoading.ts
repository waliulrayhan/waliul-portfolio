'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const useNavigationLoading = () => {
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Show loading when pathname changes
    setIsNavigating(true);
    
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 500); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, [pathname]);

  return isNavigating;
};