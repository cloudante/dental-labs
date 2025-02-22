import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mb-16">
          {/* Company Column */}
          <div>
            <h3 className="text-gray-600 font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-500 hover:text-[#3a73f2]">About us</Link></li>
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-gray-600 font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/product" className="text-gray-500 hover:text-[#3a73f2]">All products</Link></li>
              <li><Link to="/technology" className="text-gray-500 hover:text-[#3a73f2]">Technology</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-gray-600 font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://forms.gle/ntzpFP33TfKBMLKg7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#3a73f2]"
                >
                  Submit files
                </a>
              </li>
            </ul>
          </div>

          {/* Follow our Socials Column */}
          <div>
            <h3 className="text-gray-600 font-semibold mb-4">Contact</h3>
            <div className="flex flex-col space-y-3">
              <a 
                href="https://www.instagram.com/oceansmile" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-[#FF6B4A]"
              >
                Instagram
              </a>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=crowns@3doceansmile.com&su=Inquiry from Website&body=Hello 3D Ocean Smile team,"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#3a73f2]"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 mb-4 md:mb-0">
            © 2025 3D Ocean Smile
          </div>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-gray-500 hover:text-[#3a73f2]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 