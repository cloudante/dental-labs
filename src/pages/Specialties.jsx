import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { setPageTitle } from '../utils/setPageTitle';
import PageTransition from '../components/layout/PageTransition';
import technologyImage1 from '../assets/modeless.png';
import technologyImage2 from '../assets/abutment.png';
import technologyImage3 from '../assets/allonx.png';
import technologyImage4 from '../assets/3d.jpeg';
import technologyImage5 from '../assets/inlay_v2.jpeg';

const Specialties = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageTitle('Specialties');
  }, [location]);

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Specialties</h1>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          3D Ocean Smile harnesses advanced digital technology to deliver precision-driven dental solutions. With state-of-the-art equipment and innovative processes, we guarantee top-quality results for each client.
        </p>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          From cutting-edge CAD/CAM systems to the latest 3D printing technology, we are committed to ongoing investments in top-tier tools and training, ensuring we remain leaders in digital dentistry.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow">
            <div className="h-56 sm:h-64 w-full overflow-hidden">
              <img 
                src={technologyImage1} 
                alt="Modeless and Implants" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4 text-[#3a73f2]">Zirconia Crown and Inlay Onlay</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  
High-precision milling for Zirconia, 3M LAVA and more                </li>
              </ul>
            </div>
          </div>

          {/* Custom Abutment */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow">
            <div className="h-56 sm:h-64 w-full overflow-hidden">
              <img 
                src={technologyImage2} 
                alt="Custom Abutment" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4 text-[#3a73f2]">Custom Abutment with Screw Retained Crown</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  
                  Offering a diverse range of implant systems that ensure accuracy and fit
                </li>
             
              </ul>
            </div>
          </div>
          
          {/* All-on-X Solution */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow">
            <div className="h-56 sm:h-64 w-full overflow-hidden">
              <img 
                src={technologyImage3} 
                alt="All-on-X Solution" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4 text-[#3a73f2]">Modeless Solutions</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                
High-resolution 3D models utilizing advanced pixel technology for enhanced accuracy                </li>
               
              </ul>
            </div>
          </div>
          
          {/* Inlays & Onlays */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow">
            <div className="h-56 sm:h-64 w-full overflow-hidden">
              <img 
                src={technologyImage5} 
                alt="Inlays & Onlays" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4 text-[#3a73f2]">Inlays & Onlays</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#517CCD] mr-2">•</span>
                  Precision-crafted restorations for damaged teeth
                </li>
                <li className="flex items-start">
                  <span className="text-[#517CCD] mr-2">•</span>
                  Conservative alternative to full crowns
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <section className="bg-[#6188D1] rounded-3xl mx-4 md:mx-8 overflow-hidden mt-16">
          <div className="container mx-auto px-12 py-20">
            <div className="block md:flex md:flex-row justify-between items-center">
              <div className="space-y-4 mb-8 md:mb-0">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Meet 3D Ocean Smile's<br />
                  CAD/CAM specialists today
                </h2>
              </div>
              <div className="flex justify-start sm:justify-start">
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=crowns@3doceansmile.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-[#6188D1] transition-colors"
                >
                  Contact Us
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Specialties;
