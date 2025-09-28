'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import { cn } from '../../lib/utils';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
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
      
      if (isOpen && navbar && menuButton && 
          !navbar.contains(target) && 
          !menuButton.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        scrolled 
          ? "bg-white/98 backdrop-blur-md border-b border-gray-200 shadow-sm" 
          : "bg-white/95 backdrop-blur-sm border-b border-gray-200"
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Logo */}
          <div className="flex-shrink-0 min-w-0">
            <Link 
              href="#home" 
              onClick={(e) => handleSmoothScroll(e, '#home')}
              className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm truncate"
            >
              <span className="hidden sm:inline">Waliul Rayhan</span>
              <span className="sm:hidden">W. Rayhan</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center">
            <a
              href="/resume.pdf"
              download="Waliul_Rayhan_Resume.pdf"
              aria-label="Download CV as PDF"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:shadow-md transform hover:scale-105 h-9 px-4"
            >
              <FiDownload className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </div>

          {/* Mobile/Tablet Download Button & Menu Button */}
          <div className="lg:hidden flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
            {/* Mobile Download CV Button - Hidden on very small screens */}
            <a
              href="/resume.pdf"
              download="Waliul_Rayhan_Resume.pdf"
              aria-label="Download CV"
              className="hidden sm:inline-flex items-center justify-center rounded-md text-xs sm:text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 h-8 px-2 sm:px-3 whitespace-nowrap"
            >
              <FiDownload className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="ml-1 hidden md:inline">CV</span>
            </a>
            
            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-shrink-0"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                <span className={cn(
                  "absolute inset-0 transition-all duration-300 ease-in-out",
                  isOpen ? "rotate-45 opacity-100" : "rotate-0 opacity-100"
                )}>
                  {isOpen ? <FiX className="w-5 h-5 sm:w-6 sm:h-6" /> : <FiMenu className="w-5 h-5 sm:w-6 sm:h-6" />}
                </span>
              </div>
            </button>
          </div>
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
            "absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 w-full h-screen",
            isOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Content */}
        <div className="relative bg-white/98 backdrop-blur-md border-b border-gray-200 shadow-lg w-full">
          <div className="px-4 sm:px-6 py-4 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto w-full">
            {/* Navigation Links */}
            <div className="space-y-1 w-full">
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={cn(
                    "block px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-50 transform w-full text-left",
                    isOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                  )}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            {/* Mobile Download CV Section */}
            <div className="pt-4 border-t border-gray-200 w-full">
              <a
                href="/resume.pdf"
                download="Waliul_Rayhan_Resume.pdf"
                className={cn(
                  "flex items-center justify-center w-full px-4 py-3 text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-[0.98]",
                  isOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                )}
                style={{
                  transitionDelay: isOpen ? `${navigation.length * 50}ms` : '0ms'
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