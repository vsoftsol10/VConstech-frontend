import React, { useState } from 'react'
import logo from "../../assets/constech-logo.png"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const notification = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      className="w-5 h-5 md:w-6 md:h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 17h5l-1.5-1.5A2 2 0 0 1 18 14v-3a6 6 0 1 0-12 0v3a2 2 0 0 1-.5 1.5L4 17h5m0 0v1a3 3 0 0 0 6 0v-1m-6 0h6"
      />
    </svg>
  );

  const hamburgerIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );

  const closeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  return (
    <div>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
        {/* Main navbar */}
        <div className="flex items-center justify-between px-4 md:px-8 py-3">
          {/* Logo */}
          <a 
            href="https://prebuiltui.com"
            className="hover:opacity-80 transition-opacity flex-shrink-0"
            aria-label="Constech Home"
          >
            <img 
              className="h-16 w-32 sm:h-14 sm:w-28 md:h-16 md:w-32 lg:h-20 lg:w-40" 
              src={logo} 
              alt="Constech logo" 
            />
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-3 lg:gap-5 text-gray-600">
            <p className="text-sm lg:text-base font-medium whitespace-nowrap">Hi, Admin!</p>
            
            <button 
              className="p-2 text-[#ffbe00] hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
              aria-label="View notifications"
            >
              {notification}
            </button>
            
            <button className="bg-[#ffbe00] hover:bg-amber-400 text-gray-800 font-medium border border-amber-400 rounded-full text-sm px-4 py-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 whitespace-nowrap">
              Logout
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? closeIcon : hamburgerIcon}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-64 opacity-100 border-t border-gray-200' 
            : 'max-h-3 opacity-0 overflow-hidden'
        }`}>
          <div className="px-4 py-4 bg-gray-50 space-y-4">
            {/* User greeting */}
            <div className="flex items-center justify-center">
              <p className="text-sm font-medium text-gray-600">Hi, Admin!</p>
            </div>
            
            {/* Mobile buttons */}
            <div className="flex flex-col space-y-3">
              <button 
                className="flex items-center justify-center gap-2 p-3 text-[#ffbe00] hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 bg-white border border-gray-200"
                aria-label="View notifications"
              >
                {notification}
                <span className="text-sm font-medium">Notifications</span>
              </button>
              
              <button className="bg-[#ffbe00] hover:bg-amber-400 text-gray-800 font-medium border border-amber-400 rounded-lg text-sm px-4 py-3 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2">
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar