'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi';
import clsx from 'clsx';

interface ThemeSwitchProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'compact' | 'dropdown';
  className?: string;
}

export default function ThemeSwitch({ 
  size = 'md', 
  variant = 'default',
  className 
}: ThemeSwitchProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, themes } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={clsx(
        'animate-pulse bg-muted rounded-lg',
        {
          'h-8 w-8': size === 'sm',
          'h-10 w-10': size === 'md',
          'h-12 w-12': size === 'lg',
        },
        className
      )} />
    );
  }

  const iconSize = {
    sm: 14,
    md: 18,
    lg: 22,
  }[size];

  const getThemeIcon = (themeName: string) => {
    switch (themeName) {
      case 'light':
        return <FiSun size={iconSize} />;
      case 'dark':
        return <FiMoon size={iconSize} />;
      case 'system':
        return <FiMonitor size={iconSize} />;
      default:
        return <FiSun size={iconSize} />;
    }
  };

  if (variant === 'compact') {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    return (
      <button
        onClick={() => setTheme(nextTheme)}
        className={clsx(
          'relative inline-flex items-center justify-center rounded-lg',
          'bg-background border border-border',
          'hover:bg-accent hover:text-accent-foreground',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
          'transition-all duration-200',
          {
            'h-8 w-8': size === 'sm',
            'h-10 w-10': size === 'md',
            'h-12 w-12': size === 'lg',
          },
          className
        )}
        aria-label={`Switch to ${nextTheme} theme`}
      >
        {getThemeIcon(theme || 'light')}
      </button>
    );
  }

  if (variant === 'dropdown') {
    return (
      <div className={clsx('relative', className)}>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className={clsx(
            'appearance-none bg-background border border-border rounded-lg px-3 py-2',
            'text-foreground text-sm font-medium',
            'hover:bg-accent hover:text-accent-foreground',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
            'transition-all duration-200 cursor-pointer',
            {
              'text-xs px-2 py-1': size === 'sm',
              'text-sm px-3 py-2': size === 'md',
              'text-base px-4 py-3': size === 'lg',
            }
          )}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </select>
      </div>
    );
  }

  // Default variant - toggle between themes
  return (
    <div className={clsx('flex items-center gap-1 p-1 bg-muted rounded-lg', className)}>
      {['light', 'dark', 'system'].map((themeName) => (
        <button
          key={themeName}
          onClick={() => setTheme(themeName)}
          className={clsx(
            'relative inline-flex items-center justify-center rounded-md',
            'transition-all duration-200',
            {
              'h-6 w-6': size === 'sm',
              'h-8 w-8': size === 'md',
              'h-10 w-10': size === 'lg',
            },
            theme === themeName
              ? 'bg-background text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          )}
          aria-label={`Switch to ${themeName} theme`}
          aria-pressed={theme === themeName}
        >
          {getThemeIcon(themeName)}
        </button>
      ))}
    </div>
  );
}

// Export individual theme toggle for simple use cases
export function ThemeToggle({ className }: { className?: string }) {
  return <ThemeSwitch variant="compact" className={className} />;
}