import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Wrench, HardHat, FileText, FolderOpen } from 'lucide-react';
import logo from "../../assets/constech-logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Task Board', icon: Wrench, path: '/task-board' },
    { name: 'Attendance', icon: HardHat, path: '/attendance' },
    { name: 'Files', icon: FileText, path: '/vault' }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logging out...');
    navigate('/');
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  
  const handleLogoutClick = () => {
    setShowLogoutPopup(true);
  };

  // 🔹 Confirm logout
  const confirmLogout = () => {
    setShowLogoutPopup(false);
    navigate("/"); // redirect to login or home page
  };

  const cancelLogout = () => {
    setShowLogoutPopup(false);
  };

  return (
    <nav className={`fixed w-full z-[9999] bg-white top-0  shadow-sm transition-all duration-300 ${
      scrolled ? 'bg-black shadow-2xl shadow-yellow-500/20' : 'bg-gradient-to-r from-yellow/10 to-yellow/10'
    }`}>
      {/* Construction Warning Stripe */}
      <div className="h-1.5 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
      </div>
      
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo with Construction Badge */}
          <button
            onClick={() => handleNavigation('/site-engineer-dashboard')}
            className="hover:opacity-80 transition-opacity flex-shrink-0"
            aria-label="Constech Home"
          >
            <img
              className="h-16 w-32 sm:h-14 sm:w-28 md:h-16 md:w-32 lg:h-20 lg:w-40"
              src={logo}
              alt="Constech logo"
            />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-2">
            {menuItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleNavigation(item.path)}
                className={`group relative px-6 py-3 overflow-hidden ${
                  isActive(item.path) ? 'bg-yellow-400/20' : ''
                }`}
              >
                {/* Background Effect */}
                <div className="absolute inset-0 bg-yellow-400 transform -skew-x-12 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                
                {/* Content */}
                <div className="relative flex items-center space-x-2">
                  <item.icon className={`w-4 h-4 transition-colors ${
                    isActive(item.path) 
                      ? 'text-yellow-400' 
                      : 'text-yellow-400 group-hover:text-black'
                  }`} />
                  <span className={`font-semibold transition-colors whitespace-nowrap ${
                    isActive(item.path)
                      ? 'text-yellow-400'
                      : 'text-yellow-100 group-hover:text-black'
                  }`}>
                    {item.name}
                  </span>
                </div>
                
                {/* Bottom Border */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400 transform transition-transform duration-300 ${
                  isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></div>
              </button>
            ))}
          </div>

          {/* Desktop User Section */}
          <div className="hidden md:flex items-center space-x-4">
            {/* User Info with Industrial Style */}
            <div className="flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-yellow-400/10 to-transparent border border-yellow-400/30 rounded-lg backdrop-blur-sm">
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg shadow-yellow-500/30">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                {/* Online Status */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-black animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm">Nirmal</span>
                <span className="text-yellow-400 text-xs font-semibold">Site Manager</span>
              </div>
            </div>

            {/* Logout Button */}
            <button 
              onClick={handleLogoutClick}
              className="group relative px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-lg overflow-hidden shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative flex items-center space-x-2">
                <span>LOG OUT</span>
                <div className="w-1.5 h-1.5 bg-black rounded-full group-hover:animate-ping"></div>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative p-2 text-yellow-400 hover:text-yellow-300 transition-colors group"
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 bg-yellow-400/10 rounded-lg transform scale-0 group-hover:scale-100 transition-transform"></div>
            {isMenuOpen ? <X size={28} className="relative z-10" /> : <Menu size={28} className="relative z-10" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-yellow-400/30">
          <div className="px-4 py-6 space-y-6">
            {/* Mobile Navigation Links */}
            <div className="space-y-3">
              {menuItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full group flex items-center space-x-3 p-4 rounded-lg transition-all ${
                    isActive(item.path)
                      ? 'bg-yellow-400/20 border-yellow-400/50'
                      : 'bg-gradient-to-r from-yellow-400/5 to-transparent border-yellow-400/20 hover:border-yellow-400/50 hover:bg-yellow-400/10'
                  } border`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    isActive(item.path)
                      ? 'bg-yellow-400'
                      : 'bg-yellow-400/20 group-hover:bg-yellow-400'
                  }`}>
                    <item.icon className={`w-5 h-5 transition-colors ${
                      isActive(item.path)
                        ? 'text-black'
                        : 'text-yellow-400 group-hover:text-black'
                    }`} />
                  </div>
                  <span className={`font-semibold transition-colors ${
                    isActive(item.path)
                      ? 'text-yellow-400'
                      : 'text-yellow-100 group-hover:text-yellow-400'
                  }`}>
                    {item.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Mobile User Section */}
            <div className="space-y-4 pt-4 border-t border-yellow-400/30">
              <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-yellow-400/10 to-transparent border border-yellow-400/30 rounded-lg">
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-black"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold">Hi, Nirmal</span>
                  <span className="text-yellow-400 text-sm font-semibold">Site Manager</span>
                </div>
              </div>
              
              <button 
                onClick={handleLogout}
                className="w-full py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-lg shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-all"
              >
                LOGOUT
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        .clip-hexagon {
          clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
        }
      `}</style>

      {showLogoutPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[60]">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Are you sure you want to logout?
            </h2>
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={confirmLogout}
                className="bg-[#ffbe00] hover:bg-amber-400 text-gray-900 font-medium px-4 py-2 rounded-md"
              >
                Yes, Log Out
              </button>
              <button
                onClick={cancelLogout}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}