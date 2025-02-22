import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setPageTitle } from '../utils/setPageTitle';
import PageTransition from '../components/layout/PageTransition';
import logo from '../assets/3doceansmile_v2.svg';

const Home = () => {
  useEffect(() => {
    setPageTitle(''); // Empty for home page to just show "3D Ocean Smile"
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-24 bg-[#F2F7FF] relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('/pattern-bg.svg')] opacity-5"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <h1 className="text-5xl md:text-7xl font-bold text-[#0A2540] leading-tight">
                  Digital Dental<br />
                  Excellence
                </h1>
                <p className="text-lg text-gray-600 max-w-lg">
                  Empowering dental laboratories with precision-driven digital solutions, advanced technology, and innovative processes.
                </p>
                <div className="space-y-6">
                  <Link 
                    to="/product" 
                    className="inline-block bg-[#4070C9] text-white px-8 py-4 rounded-xl hover:opacity-90 transition-opacity text-lg"
                  >
                    Explore our products
                  </Link>
                </div>
              </div>

              {/* Right Image/Illustration */}
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-xl p-6 transform rotate-2">
                  <img 
                    src="/hero-dental.jpg" 
                    alt="Digital Dental Excellence" 
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why 3D Ocean Smile Section */}
        <section className="relative">
          {/* Top Background */}
          <div className="h-40 bg-[#F2F7FF]"></div>
          
          {/* Main Content with Overlap */}
          <div className="relative -mt-20">
            <div className="container mx-auto px-4">
              {/* White Content Box */}
              <div className="bg-white rounded-3xl shadow-lg p-12 mb-16">
                <div className="max-w-3xl mx-auto text-center mb-16">
                  <span className="text-[#517CCD] text-sm font-semibold uppercase tracking-wider">Unmatched Quality in Digital Dentistry</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mt-4 mb-6">
                    Why 3D Ocean Smile
                  </h2>
                 
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                      <i className="fas fa-microscope text-4xl text-[#517CCD]"></i>
                    </div>
                    <h3 className="text-xl font-bold text-[#0A2540] mb-4">
                      Cutting-Edge Dental Solutions
                    </h3>
                    <p className="text-gray-600">
                    3D Ocean Smile provides precise digital dental solutions with cutting-edge technology and innovation.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                      <i className="fas fa-compass-drafting text-4xl text-[#517CCD]"></i>
                    </div>
                    <h3 className="text-xl font-bold text-[#0A2540] mb-4">
                      Expert Craftsmanship
                    </h3>
                    <p className="text-gray-600">
                    Since 2015, our expert team has crafted high-quality products with precision and care, ensuring client satisfaction and trust.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                      <i className="fas fa-tooth text-4xl text-[#517CCD]"></i>
                    </div>
                    <h3 className="text-xl font-bold text-[#0A2540] mb-4">
                    Comprehensive Dental Solutions
                    </h3>
                    <p className="text-gray-600">
                    3D Ocean Smile provides a wide range of high-quality solutions, from Zirconia crowns to dental implants, tailored to diverse needs.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                      <i className="fas fa-award text-4xl text-[#517CCD]"></i>
                    </div>
                    <h3 className="text-xl font-bold text-[#0A2540] mb-4">
                      Dedicated to Excellence
                    </h3>
                    <p className="text-gray-600">
                    We invest in dental implant research to deliver top-quality products and drive ongoing innovation.                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Background */}
         
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left side - Image */}
              <div className="relative h-[400px] md:h-[500px]">
                <img 
                  src="/dental-closeup.jpg" 
                  alt="Dental Work Closeup" 
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              
              {/* Right side - Content */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  About 3D Ocean Smile
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Founded in 2015 as a certified milling center, 3D Ocean Smile takes pride in its skilled team and state-of-the-art in-house technology. Equipped with a milling machine, advanced CAM software, a scanner, and a 3D printer, we are dedicated to delivering top-tier products and services to our clients.
                </p>
                <Link 
                  to="/about"
                  className="inline-flex items-center border-2 border-[#517CCD] text-[#517CCD] px-8 py-3 rounded-md hover:bg-[#517CCD] hover:text-white transition-colors"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Who we are
                  <svg 
                    className="w-4 h-4 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-[#517CCD] text-sm font-semibold uppercase tracking-wider">
                Advanced Digital Solutions
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mt-4 mb-6">
                Our Technology
              </h2>
              
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Modeless and Implants */}
              <div className="text-center space-y-4">
                <div className="aspect-square">
                  <img 
                    src="/modeless-implants.jpg" 
                    alt="Modeless and Implants" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#517CCD]">
                  Modeless Solutions &<br /> Custom Implants
                </h3>
                <p className="text-sm md:text-base text-gray-700">
                  High-precision milling for Zirconia, metal, composites, and more
                </p>
              </div>

              {/* Custom Abutment */}
              <div className="text-center space-y-4">
                <div className="aspect-square">
                  <img 
                    src="/custom-abutment.jpg" 
                    alt="Custom Abutment ASC Solution" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#517CCD]">
                  Custom Abutment<br />ASC Solution
                </h3>
                <p className="text-sm md:text-base text-gray-700">
                Offering up to 25° adjustable custom abutment solutions 
                <br></br>for optimal fit and functionality.
                </p>
              </div>

              {/* Custom All on X */}
              <div className="text-center space-y-4">
                <div className="aspect-square">
                  <img 
                    src="/all-on-x.jpg" 
                    alt="Custom All on X Solution" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#517CCD]">
                  Custom All-on-X<br />Solution
                </h3>
                <p className="text-sm md:text-base text-gray-700">
                Experience precision with our Custom Location 
                and <br></br>Custom Multi-Unit Abutment solutions.
                </p>
              </div>

             
            </div>

            {/* More Information Button */}
            <div className="text-center mt-12">
              <Link 
                to="/technology"
                className="inline-flex items-center border-2 border-[#517CCD] text-[#517CCD] px-8 py-3 rounded-md hover:bg-[#517CCD] hover:text-white transition-colors"
              >
                Learn more
                <svg 
                  className="w-4 h-4 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

     
        {/* File Submission CTA Section */}
        <section className="bg-[#6188D1] rounded-3xl mx-4 md:mx-8 overflow-hidden">
          <div className="container mx-auto px-12 py-20">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="space-y-4 mb-8 md:mb-0">
                <span className="text-[#c8d0ff] text-sm font-semibold uppercase tracking-wider">
                  TRY IT NOW
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Ready to submit your<br />
                  orders and statements?
                </h2>
                
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://forms.gle/ntzpFP33TfKBMLKg7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-[#6188D1] transition-colors inline-flex items-center"
                >
                  Get Started Now
                </a>
               
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

// Helper Components
const FeatureCard = ({ title, description }) => (
  <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-xl font-bold mb-4 text-blue-900">{title}</h3>
    <p className="text-sm md:text-base text-gray-600">{description}</p>
  </div>
);

const TechnologyCard = ({ title, description, image }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-blue-900">{title}</h3>
      <p className="text-sm md:text-base text-gray-600">{description}</p>
      <button className="mt-4 text-blue-600 hover:text-blue-800">Learn More →</button>
    </div>
  </div>
);

const TestimonialCard = ({ quote, author }) => (
  <div className="p-6 bg-blue-800 rounded-lg">
    <blockquote className="text-lg mb-4">"{quote}"</blockquote>
    <p className="font-bold">- {author}</p>
  </div>
);

const ContactForm = () => (
  <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <input 
      type="text" 
      placeholder="First Name" 
      className="p-3 border rounded-md"
    />
    <input 
      type="text" 
      placeholder="Last Name" 
      className="p-3 border rounded-md"
    />
    <input 
      type="email" 
      placeholder="Email" 
      className="p-3 border rounded-md"
    />
    <input 
      type="tel" 
      placeholder="Phone" 
      className="p-3 border rounded-md"
    />
    <input 
      type="text" 
      placeholder="Company" 
      className="p-3 border rounded-md"
    />
    <input 
      type="text" 
      placeholder="Address" 
      className="p-3 border rounded-md"
    />
    <textarea 
      placeholder="Message" 
      className="p-3 border rounded-md md:col-span-2 h-32"
    ></textarea>
    <button 
      type="submit" 
      className="bg-[#3a73f2] hover:bg-blue-700 text-white py-3 px-6 rounded-md md:col-span-2"
    >
      Submit
    </button>
  </form>
);

export default Home; 