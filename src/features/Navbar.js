import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { logo } from './assets';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    {name: 'Home', href: '/'},
    {name: 'About Us', href: '/about'},
    {name: 'Our Properties', href: '/properties'},
    {name: 'Our Services', href: '/services'},
    {name: 'Contact Us', href: '/contact'},
  ]

  return (
    <nav className="relative bg-black/20 backdrop-blur-md shadow">
      <div className="container px-6 py-4 mx-auto">
        <div className="flex items-center justify-between">
          
          {/* Logo (Beginning) */}
          <div className="flex items-center">
            <Link href="/" className="cursor-pointer">
              <Image
                className="w-auto h-6 sm:h-7"
                src={logo}
                alt="Logo"
                width={100}
                height={28}
              />
            </Link>
          </div>

          {/* Nav Items (Middle) - Hidden on mobile */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    text-sm font-medium transition-colors duration-300 relative
                    hover:text-red-500 dark:hover:text-red-400
                    ${router.pathname === item.href 
                      ? 'text-red-500 dark:text-red-400' 
                      : 'text-gray-700 dark:text-gray-200'
                    }
                  `}
                >
                  {item.name}
                  {/* Active underline */}
                  {router.pathname === item.href && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-500"></span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Get Started Button (End) */}
          <div className="hidden lg:flex items-center">
            <button
              className="px-6 py-2 text-sm font-medium text-white bg-red-600 hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-300"
              onClick={() => {
                router.push('/get-started');
              }}
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 mt-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  block px-3 py-2 text-base font-medium transition-colors duration-300 relative
                  hover:text-red-500 dark:hover:text-red-400
                  ${router.pathname === item.href 
                    ? 'text-red-500 dark:text-red-400' 
                    : 'text-gray-700 dark:text-gray-200'
                  }
                `}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
                {/* Active underline for mobile */}
                {router.pathname === item.href && (
                  <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-red-500"></span>
                )}
              </Link>
            ))}
            
            {/* Mobile Get Started Button */}
            <div className="px-3 pt-4">
              <button
                className="w-full px-6 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-300"
                onClick={() => {
                  router.push('/get-started');
                  setIsOpen(false);
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;