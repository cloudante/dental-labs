import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setPageTitle } from '../utils/setPageTitle';
import PageTransition from '../components/layout/PageTransition';

const Home = () => {
  useEffect(() => {
    setPageTitle(''); // Empty for home page to just show "3D Ocean Smile"
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="relative bg-[#3a73f2] rounded-lg overflow-hidden aspect-[16/9]">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src="/hero-dental.jpg" 
                  alt="Digital Dental Excellence" 
                  className="w-full h-full object-cover opacity-30 mix-blend-overlay"
                />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-center p-12 md:p-16">
                <div className="max-w-2xl space-y-8">
                  <h1 className="text-4xl md:text-6xl font-bold">
                    <span className="text-white">Digital Dental</span><br />
                    <span className="text-gray-900">Excellence</span>
                  </h1>
                  <Link 
                    to="/contact" 
                    className="inline-block border-2 border-white text-white px-12 py-3 rounded-md hover:bg-white hover:text-[#3B73F2] transition-colors text-lg"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  3D Ocean Smile
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Founded in 2015 as a certified milling center, 3D Ocean Smile takes pride in its skilled team and state-of-the-art in-house technology. Equipped with a milling machine, advanced CAM software, a scanner, and a 3D printer, we are dedicated to delivering top-tier products and services to our clients.
                </p>
                <Link 
                  to="/about"
                  className="inline-flex items-center border-2 border-[#3a73f2] text-[#3a73f2] px-8 py-3 rounded-md hover:bg-[#3a73f2] hover:text-white transition-colors"
                  onClick={() => {
                    window.scrollTo(0, 0); // Scroll to top when navigating
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

        {/* Why 3D Ocean Smile Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
              Why 3D Ocean Smile?
            </h2>
            
            {/* Mobile Slider */}
            <div className="md:hidden w-full overflow-x-auto snap-x snap-mandatory flex gap-4 pb-6 scrollbar-hide">
              <div className="snap-center shrink-0 w-[80%] first:ml-[10%]">
                <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                  <i className="fas fa-regular fa-microscope text-5xl text-[#3a73f2] block mb-6"></i>
                  <h3 className="text-xl md:text-2xl font-bold text-[#3a73f2] mb-4">
                    Cutting-Edge <br />Digital Dental Solutions
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    3D Ocean Smile delivers high-precision digital dental solutions, empowering laboratories with advanced technology and innovation.
                  </p>
                </div>
              </div>

              <div className="snap-center shrink-0 w-[80%]">
                <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                  <i className="fas fa-compass-drafting text-5xl text-[#3a73f2] block mb-6"></i>
                  <h3 className="text-xl md:text-2xl font-bold text-[#3a73f2] mb-4">
                    Expert Craftsmanship, <br />Exceptional Quality
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Since 2015, our skilled team has been dedicated to precision and excellence, 
                    delivering high-quality products that ensure client satisfaction and trust.
                  </p>
                </div>
              </div>

              <div className="snap-center shrink-0 w-[80%]">
                <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                  <i className="fas fa-tooth text-5xl text-[#3a73f2] block mb-6"></i>
                  <h3 className="text-xl md:text-2xl font-bold text-[#3a73f2] mb-4">
                    Wide-Ranging<br />Dental Solutions
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    From Zirconia crowns to dental implants, 
                    3D Ocean Smile offers a diverse selection of high-quality solutions tailored to meet various needs.
                  </p>
                </div>
              </div>

              <div className="snap-center shrink-0 w-[80%] last:mr-[10%]">
                <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                  <i className="fas fa-award text-5xl text-[#3a73f2] block mb-6"></i>
                  <h3 className="text-xl md:text-2xl font-bold text-[#3a73f2] mb-4">
                    Dedicated to<br />Excellence
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    With a forward-thinking approach, 
                    we invest in dental implant research to deliver superior products and drive continuous innovation.
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                <i className="fas fa-regular fa-microscope text-5xl text-[#3a73f2] block mb-6"></i>
                <h3 className="text-xl md:text-2xl font-bold text-[#3a73f2] mb-4">
                  Cutting-Edge <br />Digital Dental Solutions
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  3D Ocean Smile delivers high-precision digital dental solutions, empowering laboratories with advanced technology and innovation.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                <i className="fas fa-compass-drafting text-5xl text-[#3a73f2] block mb-6"></i>
                <h3 className="text-xl md:text-2xl font-bold text-[#3a73f2] mb-4">
                  Expert Craftsmanship, <br />Exceptional Quality
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  Since 2015, our skilled team has been dedicated to precision and excellence, 
                  delivering high-quality products that ensure client satisfaction and trust.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                <i className="fas fa-tooth text-5xl text-[#3a73f2] block mb-6"></i>
                <h3 className="text-xl md:text-2xl font-bold text-[#3a73f2] mb-4">
                  Wide-Ranging<br />Dental Solutions
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  From Zirconia crowns to dental implants, 
                  3D Ocean Smile offers a diverse selection of high-quality solutions tailored to meet various needs.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                <i className="fas fa-award text-5xl text-[#3a73f2] block mb-6"></i>
                <h3 className="text-xl md:text-2xl font-bold text-[#3a73f2] mb-4">
                  Dedicated to<br />Excellence
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  With a forward-thinking approach, 
                  we invest in dental implant research to deliver superior products and drive continuous innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-16 bg-[#cddbfa]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#3a73f2]">
              Technology
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Modeless and Implants */}
              <div className="text-center space-y-4">
                <div className="aspect-square">
                  <img 
                    src="/modeless-implants.jpg" 
                    alt="Modeless and Implants" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#3a73f2]">
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
                <h3 className="text-xl md:text-2xl font-bold text-[#3a73f2]">
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
                <h3 className="text-xl md:text-2xl font-bold text-[#3a73f2]">
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
                className="inline-flex items-center border-2 border-[#3a73f2] text-[#3a73f2] px-8 py-3 rounded-md hover:bg-[#3a73f2] hover:text-white transition-colors"
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

        {/* Contact Section */}
        <section className="hidden py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
            <div className="max-w-3xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* File Upload Section */}
        <section id="file-upload-section" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">File Submission</h2>
            <p className="text-sm md:text-base text-gray-600 mb-8">
            
              Simply click the button below to access the submission form and provide the required details. <br></br>Our team will review your request and get back to you promptly.
            </p>
            <a 
              href="https://forms.gle/ntzpFP33TfKBMLKg7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#3a73f2] text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Click to begin
            </a>
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