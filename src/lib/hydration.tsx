import { useEffect, useState, ReactNode } from 'react';

/**
 * Props to add to elements that may be affected by browser extensions
 * to suppress hydration warnings for attributes like data-* or style
 */
export const suppressHydrationWarning = {
  suppressHydrationWarning: true,
};

/**
 * Hook to prevent hydration mismatches by ensuring code only runs on client
 */
export function useIsClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}

/**
 * Component wrapper to prevent hydration mismatches
 */
interface ClientOnlyProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const isClient = useIsClient();
  
  return isClient ? <>{children}</> : <>{fallback}</>;
}