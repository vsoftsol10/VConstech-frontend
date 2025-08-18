import React from 'react'
import logo from "../../assets/constech-logo.png"

const Navbar = () => {
  const notification = (
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
        d="M15 17h5l-1.5-1.5A2 2 0 0 1 18 14v-3a6 6 0 1 0-12 0v3a2 2 0 0 1-.5 1.5L4 17h5m0 0v1a3 3 0 0 0 6 0v-1m-6 0h6"
      />
    </svg>
  );

  return (
    <div>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 border-b border-gray-200 py-3 bg-white shadow-sm">
        <a 
          href="https://prebuiltui.com"
          className="hover:opacity-80 transition-opacity"
          aria-label="Constech Home"
        >
          <img className="h-16 w-32 md:h-20 md:w-40" src={logo} alt="Constech logo" />
        </a>
        
        <div className="flex items-center gap-3 md:gap-5 text-gray-600">
          <p className="text-sm md:text-base font-medium">Hi, Admin!</p>
          
          <button 
            className="p-2 text-[#ffbe00] hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
            aria-label="View notifications"
          >
            {notification}
          </button>
          
          <button className="bg-[#ffbe00] hover:bg-amber-400 text-gray-800 font-medium border border-amber-400 rounded-full text-sm px-4 py-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2">
            Logout
          </button>
        </div>
      </header>
    </div>
  )
}

export default Navbar