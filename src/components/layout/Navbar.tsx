'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import { cn } from '../../lib/utils';
import ThemeSwitch from '../ui/ThemeSwitch';
import { Button } from '../ui/Button';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="#home" className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity">
              Waliul Rayhan
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/resume.pdf"
              download="Waliul_Rayhan_Resume.pdf"
              aria-label="Download CV as PDF"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 bg-gradient-to-r from-[rgb(var(--gradient-from))] to-[rgb(var(--gradient-to))] text-primary-foreground hover:opacity-90 h-9 px-3"
            >
              <FiDownload className="mr-2 h-4 w-4" />
              Download CV
            </a>
            
            <ThemeSwitch variant="compact" size="sm" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeSwitch variant="compact" size="sm" />
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        'md:hidden transition-all duration-300 ease-in-out',
        isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      )}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-sm border-t">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-2 border-t">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 text-base font-medium text-primary hover:text-primary/80 hover:bg-accent rounded-md transition-colors"
            >
              <FiDownload className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}