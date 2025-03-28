import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/3doceansmile_v2.svg';

const Footer = () => {
  return (
    <footer className="bg-[#ECF2FC] mt-16 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <img 
              src={logo} 
              alt="3D Ocean Smile" 
              className="h-16 w-auto"
            />
           
          </div>
          
          <div>
            <h3 className="text-black font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/product" className="text-gray-500 hover:text-[#517CCD]">Products</Link></li>
              <li><Link to="/specialties" className="text-gray-500 hover:text-[#517CCD]">Specialties</Link></li>
              <li><a href="https://forms.gle/ntzpFP33TfKBMLKg7" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#517CCD]">File Upload</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-500 hover:text-[#517CCD]">About Us</Link></li>
             
              <li><Link to="/terms" className="text-gray-500 hover:text-[#517CCD]">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-500">
              <li>9750 Katella Avenue</li>
              <li>Garden Grove, CA, 92804</li>
              <li><a href="mailto:crowns@3doceansmile.com" className="hover:text-[#517CCD]">crowns@3doceansmile.com</a></li>
              <li><a href="tel:213-760-2550" className="hover:text-[#517CCD]">213-760-2550</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-center">
              ©3D Ocean Smile {new Date().getFullYear()}. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-2">
              <a
                href="https://www.instagram.com/3doceansmile/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#6188D1] transition-colors flex items-center gap-2"
              >
                <i className="fab fa-instagram text-3xl"></i>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 