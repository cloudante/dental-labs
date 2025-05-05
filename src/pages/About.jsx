import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setPageTitle } from '../utils/setPageTitle';
import PageTransition from '../components/layout/PageTransition';
import cover1 from '../assets/cover1.svg';

const About = () => {
  useEffect(() => {
    setPageTitle('About Us');
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div>
        {/* Main Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">About Us</h1>
            <div className="max-w-4xl mx-auto text-base md:text-lg text-gray-700 space-y-6 mb-16">
              <p>
                3D Ocean Smile, based in Southern California, specializes in precision-driven digital dental solutions, helping laboratories stay at the forefront of innovation.
              </p>
              <p>
                Founded in 2015 as an accredited milling center, we take pride in our highly experienced team and cutting-edge in-house technology.
              </p>
            </div>
          </div>
        </section>

        {/* About Us Expanded Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="max-w-4xl md:w-1/2 text-base md:text-lg text-gray-700">
                <p className="leading-relaxed">
                  3D OCEAN SMILE, based in Southern California, offers precise digital dental solutions. Since 2015, our experienced team and advanced in-house equipment milling machines, CAM software, scanners, and 3D printers enable us to deliver high-quality, reliable products quickly.
                </p>
                <p className="leading-relaxed mt-4">
                  Committed to ongoing research, particularly in dental implant technology, we ensure our solutions stay at the forefront of innovation and quality. Partner with us to elevate your practice with consistent, top-tier digital dentistry.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src={cover1} 
                  alt="3D Ocean Smile Technology" 
                  className="max-w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative">
          {/* Top Background */}
          <div className="h-20 bg-[#FffffF]"></div>
          
          {/* Main Content with Overlap */}
          <div className="relative -mt-20">
            <div className="container mx-auto px-4">
              {/* White Content Box */}
              <div className="bg-white rounded-3xl shadow-lg p-12 mb-16">
                <div className="max-w-3xl mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6">
                    Our Services
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* Value Cards */}
                  <div className="text-left">
                    <div className="mb-6">
                      <div className="w-12 h-12 flex items-center justify-center bg-[#EBF1FF] rounded-xl">
                        <i className="fas fa-laptop text-2xl text-[#517CCD]"></i>
                      </div>
                      <h3 className="text-xl font-bold text-[#0A2540] mt-4">
                        Digital Design Services
                      </h3>
                    </div>
                    <ul className="text-left text-gray-600 space-y-2">
                      
                      <li className="flex items-start">
                        <span className="text-[#517CCD] mr-2">•</span>
                        3D modeling and digital design enhancement
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#517CCD] mr-2">•</span>
                        Custom implant and abutment design
                      </li>
                     
                    </ul>
                  </div>

                  <div className="text-left">
                    <div className="mb-6">
                      <div className="w-12 h-12 flex items-center justify-center bg-[#EBF1FF] rounded-xl">
                        <i className="fas fa-print text-2xl text-[#517CCD]"></i>
                      </div>
                      <h3 className="text-xl font-bold text-[#0A2540] mt-4">
                        Milling & Printing
                      </h3>
                    </div>
                    <ul className="text-left text-gray-600 space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#517CCD] mr-2">•</span>
                        High-precision milling for Zirconia, metal, composites, and more
                      </li>
                      
                      <li className="flex items-start">
                        <span className="text-[#517CCD] mr-2">•</span>
                        Post-milling finishing and polishing
                      </li>
                    </ul>
                  </div>

                  <div className="text-left">
                    <div className="mb-6">
                      <div className="w-12 h-12 flex items-center justify-center bg-[#EBF1FF] rounded-xl">
                        <i className="fas fa-tooth text-2xl text-[#517CCD]"></i>
                      </div>
                      <h3 className="text-xl font-bold text-[#0A2540] mt-4">
                        Implants & Restorations
                      </h3>
                    </div>
                    <ul className="text-left text-gray-600 space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#517CCD] mr-2">•</span>
                        Custom implant abutments
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#517CCD] mr-2">•</span>
                        Zirconia crowns, copings, and temporary crowns
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#517CCD] mr-2">•</span>
                        Comprehensive implant restoration solutions
                      </li>
                    </ul>
                  </div>

                  <div className="text-left">
                    <div className="mb-6">
                      <div className="w-12 h-12 flex items-center justify-center bg-[#EBF1FF] rounded-xl">
                        <i className="fas fa-gears text-2xl text-[#517CCD]"></i>
                      </div>
                      <h3 className="text-xl font-bold text-[#0A2540] mt-4">
                        Accurate Due Date
                      </h3>
                    </div>
                    <ul className="text-left text-gray-600 space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#517CCD] mr-2">•</span>
                       Full crown: 5 Working Days
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#517CCD] mr-2">•</span>
                        Implant crown: 7 Working Days
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#517CCD] mr-2">•</span>
                        There's no charge for rush cases
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#6188D1] rounded-3xl mx-4 md:mx-8 mb-16 overflow-hidden">
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

const ServiceCard = ({ icon, title, list }) => (
  <div className="text-left">
    <div className="mb-6">
      <div className="w-12 h-12 flex items-center justify-center bg-[#EBF1FF] rounded-xl">
        <i className={`fas fa-${icon} text-2xl text-[#517CCD]`}></i>
      </div>
      <h3 className="text-xl font-bold text-[#0A2540] mt-4">
        {title}
      </h3>
    </div>
    <ul className="text-left text-gray-600 space-y-2">
      {list.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-[#517CCD] mr-2">•</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default About; 