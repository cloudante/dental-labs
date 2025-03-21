import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/3doceansmile_v2.svg';  // Fix: Use ../../ to go up two levels

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const bgColor = location.pathname === '/' ? 'bg-[#F2F7FF]' : 'bg-white';

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Specialties', path: '/specialties' },
    { label: 'Products', path: '/product' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`${bgColor} shadow-sm`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="3D Ocean Smile" className="h-12" />
          </Link>

          {/* Mobile view - Instagram and Menu icons */}
          <div className="flex items-center space-x-4 md:hidden">
            <a
              href="https://www.instagram.com/3doceansmile/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#6188D1] transition-colors"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-600 hover:text-[#4070C9] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* File Submissions Button */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/3doceansmile/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#6188D1] transition-colors"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="https://forms.gle/ntzpFP33TfKBMLKg7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6188D1] text-white px-4 py-2 rounded-lg hover:bg-[#4F73B3] transition-colors"
              >
                File Submission
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 md:hidden">
            <div className="container mx-auto px-4 py-6">
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 p-2"
                onClick={() => setIsMenuOpen(false)}
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
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Logo */}
              <Link to="/" className="flex items-start" onClick={() => setIsMenuOpen(false)}>
                <img 
                  src={logo} 
                  alt="3D Ocean Smile" 
                  className="h-16 w-auto"
                />
              </Link>

              {/* Menu Items */}
              <div className="flex flex-col space-y-8 mt-16">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-xl text-gray-600 hover:text-[#4070C9] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <a 
                  href="https://forms.gle/ntzpFP33TfKBMLKg7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-[#4070C9] hover:text-[#4070C9]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  File Submissions
                </a>
                <Link
                  to="/contact"
                  className="text-xl text-gray-600 hover:text-[#6188D1] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 