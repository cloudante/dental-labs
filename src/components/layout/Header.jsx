import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/3doceansmile_v2.svg';  // Fix: Use ../../ to go up two levels

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToFileUpload = () => {
    const element = document.getElementById('file-upload-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Technology', path: '/technology' },
    { label: 'Product', path: '/product' },
  
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-start">
            <img 
              src={logo} 
              alt="3D Ocean Smile" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* File Submissions Button */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={scrollToFileUpload}
              className="inline-flex items-center border-2 border-[#3a73f2] text-[#3a73f2] px-6 py-2 rounded-md hover:bg-[#3a73f2] hover:text-white transition-colors"
            >
              File Submissions
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button 
                onClick={() => {
                  scrollToFileUpload();
                  setIsMenuOpen(false);
                }}
                className="text-[#3a73f2] hover:text-blue-800 text-left"
              >
                File Submissions
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 