'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import { cn } from '../../lib/utils';

const NAVIGATION_ITEMS = [
  { name: 'Home', href: '/', isExternal: false },
  { name: 'About', href: '/about', isExternal: false },
  { name: 'Experience', href: '/experience', isExternal: false },
  { name: 'Projects', href: '/projects', isExternal: false },
  { name: 'Blog', href: '/blog', isExternal: false },
  { name: 'Achievements', href: '/achievements', isExternal: false },
  { name: 'Contact', href: '#contact', isExternal: true },
] as const;

const RESUME_CONFIG = {
  path: '/resume.pdf',
  filename: 'Md. Waliul Islam Rayhan\'s CV.pdf',
} as const;

export default function Navbar() {
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Set client flag after mount to prevent hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle scroll effect for navbar
  useEffect(() => {
    if (!isClient) return;
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      const navbar = document.getElementById('mobile-menu');
      const menuButton = document.getElementById('mobile-menu-button');
      
      if (
        isOpen && 
        navbar && 
        menuButton && 
        !navbar.contains(target) && 
        !menuButton.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle smooth scroll for anchor links (Contact section)
    if (!href.startsWith('#')) return;
    
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    
    setIsOpen(false);
  };

  const getNavbarStyles = () => cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
    scrolled 
      ? "bg-white/70 backdrop-blur-lg border-b border-gray-200/50 shadow-sm" 
      : "bg-white/60 backdrop-blur-md border-b border-gray-200/30",
    isOpen && "bg-white/80 backdrop-blur-xl border-b border-gray-400/60 shadow-md"
  );

  const getMobileMenuButtonStyles = () => cn(
    "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 rounded-md focus:outline-none flex-shrink-0",
    isOpen ? "bg-gray-100 text-gray-900" : ""
  );

  const renderLogo = () => (
    <div className="flex-shrink-0 min-w-0 px-2">
      <Link 
        href="/" 
        className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent hover:opacity-80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-sm font-great-vibes inline-block px-1"
        style={{ overflow: 'visible' }}
      >
        Waliul Rayhan
      </Link>
    </div>
  );

  const renderDesktopNavigation = () => (
    <div className="hidden lg:block">
      <div className="flex items-center space-x-1">
        {NAVIGATION_ITEMS.map((item) => (
          item.isExternal ? (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-gray-50"
            >
              {item.name}
            </a>
          ) : (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-gray-50"
            >
              {item.name}
            </Link>
          )
        ))}
      </div>
    </div>
  );

  const renderDesktopActions = () => (
    <div className="hidden lg:flex items-center">
      <a
        href={RESUME_CONFIG.path}
        download={RESUME_CONFIG.filename}
        aria-label="Download CV as PDF"
        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:from-blue-700 hover:to-teal-700 hover:shadow-md transform hover:scale-105 h-9 px-4"
      >
        <FiDownload className="mr-2 h-4 w-4" />
        Download CV
      </a>
    </div>
  );

  const renderMobileActions = () => (
    <div className="lg:hidden flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
      <a
        href={RESUME_CONFIG.path}
        download={RESUME_CONFIG.filename}
        aria-label="Download CV"
        className="hidden sm:inline-flex items-center justify-center rounded-md text-xs sm:text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:opacity-90 h-8 px-2 sm:px-3 whitespace-nowrap"
      >
        <FiDownload className="h-3 w-3 sm:h-4 sm:w-4" />
        <span className="ml-1 hidden md:inline">CV</span>
      </a>
      
      <button
        id="mobile-menu-button"
        onClick={() => setIsOpen(!isOpen)}
        className={getMobileMenuButtonStyles()}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? (
          <FiX className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300" />
        ) : (
          <FiMenu className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300" />
        )}
      </button>
    </div>
  );

  // Render simple navbar on server to prevent hydration mismatch
  if (!isClient) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 w-full">
            <Link 
              href="/" 
              className="text-xl sm:text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300"
            >
              Waliul Rayhan
            </Link>
            <div className="hidden lg:flex items-center space-x-8">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={getNavbarStyles()}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 w-full">
          {renderLogo()}

          {renderDesktopNavigation()}
          {renderDesktopActions()}
          {renderMobileActions()}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        id="mobile-menu"
        className={cn(
          'lg:hidden fixed left-0 right-0 top-16 transition-all duration-300 ease-in-out z-40 w-full',
          isOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-2 pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div 
          className={cn(
            "absolute inset-0 bg-black/10 backdrop-blur-sm transition-opacity duration-300 w-full h-screen",
            isOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Content */}
        <div className="relative bg-white backdrop-blur-none border-b border-gray-200 shadow-lg w-full">
          <div className="px-4 sm:px-6 py-4 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto w-full">
            <div className="space-y-1 w-full">
              {NAVIGATION_ITEMS.map((item, index) => (
                item.isExternal ? (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className={cn(
                      "block px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-gray-50 transform w-full text-left",
                      isOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                    )}
                    style={{
                      transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                    }}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-gray-50 transform w-full text-left",
                      isOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                    )}
                    style={{
                      transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                    }}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
            
            <div className="pt-4 border-t border-gray-200 w-full">
              <a
                href={RESUME_CONFIG.path}
                download={RESUME_CONFIG.filename}
                className={cn(
                  "flex items-center justify-center w-full px-4 py-3 text-base font-medium bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:from-blue-700 hover:to-teal-700 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transform hover:scale-[0.98]",
                  isOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                )}
                style={{
                  transitionDelay: isOpen ? `${NAVIGATION_ITEMS.length * 50}ms` : '0ms'
                }}
              >
                <FiDownload className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}