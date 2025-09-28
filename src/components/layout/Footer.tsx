import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from 'react-icons/fi';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/waliulrayhan',
    icon: FiGithub,
    ariaLabel: 'Visit my GitHub profile',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/waliulrayhan',
    icon: FiLinkedin,
    ariaLabel: 'Connect with me on LinkedIn',
  },
  {
    name: 'Email',
    href: 'mailto:waliul.rayhan@example.com',
    icon: FiMail,
    ariaLabel: 'Send me an email',
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Waliul Rayhan. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <nav className="flex items-center space-x-6" aria-label="Social media links">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              const isEmail = link.name === 'Email';
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noopener noreferrer"}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center space-x-1 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-md p-1"
                  aria-label={link.ariaLabel}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  {!isEmail && (
                    <FiExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-hidden="true" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Additional Links */}
          <div className="flex items-center space-x-4 text-sm">
            <a
              href="/resume.pdf"
              download="Waliul_Rayhan_Resume.pdf"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded px-2 py-1"
              aria-label="Download resume as PDF"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="text-center">
            <p className="text-xs text-gray-500">
              Built with Next.js, TypeScript, and Tailwind CSS • Designed with accessibility in mind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}