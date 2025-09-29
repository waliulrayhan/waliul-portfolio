'use client';

import { FiDownload, FiMail, FiArrowRight, FiCode, FiLayers, FiUser, FiBriefcase } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Two-column layout: Text on left, Image on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Main Heading */}
            <div className="mb-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg font-medium text-blue-600 mb-2"
              >
                👋 Hello, I&apos;m
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight break-words"
              >
                <span className="block">Waliul</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                  Rayhan
                </span>
              </motion.h1>
            </div>

            {/* Tagline/Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Full Stack Developer & UI/UX Enthusiast crafting{' '}
              <span className="text-blue-600 font-semibold">
                digital experiences
              </span>{' '}
              that make a difference
            </motion.p>

            {/* Primary CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
            >
              {/* View My Work Button */}
              <Link
                href="/projects"
                className="group inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full sm:w-auto"
                aria-label="View my projects and work"
              >
                <FiCode className="mr-3 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                View My Work
                <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FiArrowRight className="h-4 w-4" />
                </div>
              </Link>

              {/* Contact Me Button */}
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className="group inline-flex items-center px-8 py-4 border-2 border-gray-300 text-base font-medium rounded-xl text-gray-700 hover:bg-gray-50 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 w-full sm:w-auto"
                aria-label="Contact me"
              >
                <FiMail className="mr-3 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                Contact Me
                <FiArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* Secondary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center mb-8"
            >
              <Link
                href="/about"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                <FiUser className="mr-2 h-4 w-4" />
                About Me
              </Link>
              <Link
                href="/experience"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors duration-200"
              >
                <FiBriefcase className="mr-2 h-4 w-4" />
                Experience
              </Link>
              <a
                href="/resume.pdf"
                download="Waliul_Rayhan_Resume.pdf"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-700 transition-colors duration-200"
                aria-label="Download resume as PDF"
              >
                <FiDownload className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </motion.div>

            {/* Tech Stack Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="hidden lg:block"
            >
              <p className="text-sm text-gray-500 mb-4 font-medium">
                Specializing in:
              </p>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'UI/UX'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                    className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-teal-500 rounded-3xl transform -rotate-3 scale-110 opacity-10"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200">
                {/* Placeholder for profile image - you can replace with actual image */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center space-y-6">
                    {/* Icon illustration */}
                    <div className="flex justify-center space-x-4">
                      <div className="p-4 bg-blue-100 rounded-2xl">
                        <FiCode className="h-12 w-12 text-blue-600" />
                      </div>
                      <div className="p-4 bg-purple-100 rounded-2xl">
                        <FiLayers className="h-12 w-12 text-purple-600" />
                      </div>
                    </div>
                    <div className="px-8">
                      <p className="text-gray-600 font-medium">
                        Full Stack Developer
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        Building the future, one line of code at a time
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-full opacity-80 blur-sm"
              ></motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-green-400 rounded-full opacity-60 blur-sm"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5, repeat: Infinity, repeatType: 'reverse', repeatDelay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center cursor-pointer hover:border-blue-500 transition-colors duration-300">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}