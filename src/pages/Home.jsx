import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
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
                <h1 className="text-5xl md:text-7xl font-bold">
                  <span className="text-white">Digital Dental</span><br />
                  <span className="text-gray-900">Excellence</span>
                </h1>
                <Link 
                  to="/contact" 
                  className="inline-block bg-white text-[#3a73f2] px-12 py-3 rounded-md hover:bg-gray-100 transition-colors text-lg"
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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Core Dental Studio
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Established in 2015 as an accredited milling center, Core Dental Studio proudly boasts a highly adept 
                team and an array of cutting-edge in-house equipment, encompassing a milling machine, advanced CAM software, 
                a Scanner, and a 3D printer. This commitment ensures that our clients consistently encounter the epitome 
                of excellence in both products and services.
              </p>
              <Link 
                to="/about"
                className="inline-block bg-[#3a73f2] text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                About us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Core Dental Studio Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
            WHY Core Dental Studio?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* Leading Digital Solutions */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#3a73f2]">
                Leading Digital<br />Solutions
              </h3>
              <p className="text-gray-600">
                Core Dental Studio offers precision-driven digital dental 
                solutions, leading the advancement of laboratories 
                with innovative technology.
              </p>
            </div>

            {/* Skilled Professionals */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#3a73f2]">
                Skilled<br />Professionals,<br />
                Superior Products
              </h3>
              <p className="text-gray-600">
                Established in 2015, our adept team crafts superior 
                products meticulously, ensuring client satisfaction 
                and loyalty.
              </p>
            </div>

            {/* Comprehensive Services */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#3a73f2]">
                Comprehensive<br />Services
              </h3>
              <p className="text-gray-600">
                From Zirconia crowns to dental implants, Core Dental 
                Studio provides a wide range of premium alternatives to 
                meet diverse needs.
              </p>
            </div>

            {/* Commitment to Excellence */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#3a73f2]">
                Commitment to<br />Excellence
              </h3>
              <p className="text-gray-600">
                Guided by forward-thinking strategies, we invest in dental 
                implant research, ensuring top-quality products and 
                continuous innovation
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
              <h3 className="text-2xl font-bold text-[#3a73f2]">
                MODELESS AND<br />IMPLANTS
              </h3>
              <p className="text-gray-700">
                Specialize in fabricating custom dental implants
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
              <h3 className="text-2xl font-bold text-[#3a73f2]">
                Custom Abutment<br />ASC Solution
              </h3>
              <p className="text-gray-700">
                Up to 25°adjustable Custom abutment solution
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
              <h3 className="text-2xl font-bold text-[#3a73f2]">
                Custom All on X<br />Solution
              </h3>
              <p className="text-gray-700">
                Try our Custom Location and Custom Multi Unit Abutment
              </p>
            </div>
          </div>

          {/* More Information Button */}
          <div className="text-center mt-12">
            <Link 
              to="/technology"
              className="bg-[#3a73f2] text-white px-8 py-3 rounded hover:bg-blue-700 transition-colors"
            >
              More Information
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
    </div>
  );
};

// Helper Components
const FeatureCard = ({ title, description }) => (
  <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-xl font-bold mb-4 text-blue-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TechnologyCard = ({ title, description, image }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-blue-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
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