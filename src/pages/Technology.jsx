import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { setPageTitle } from '../utils/setPageTitle';

const Technology = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageTitle('Technology');
  }, [location]);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Technology</h1>
          <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
            <p>
            3D Ocean Smile harnesses advanced digital technology to deliver precision-driven dental solutions. With state-of-the-art equipment and innovative processes, we guarantee top-quality results for each client.
            </p>
            <p>
            From cutting-edge CAD/CAM systems to the latest 3D printing technology, we are committed to ongoing investments in top-tier tools and training, ensuring we remain leaders in digital dentistry.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TechnologyCard
              image="/modeless-implants.jpg"
              title="Modeless and Implants"
              description="Specializing in the fabrication of custom dental implants with precision and expertise."
            />
            <TechnologyCard
              image="/custom-abutment.jpg"
              title="Custom Abutment ASC"
              description="Offering up to 25° adjustable custom abutment solutions for optimal fit and functionality."
            />
            <TechnologyCard
              image="/all-on-x.jpg"
              title="Custom All on X Solution"
              description="Explore our Custom Location and Multi-Unit Abutment options for the perfect All-on-X fit."
            />
            <TechnologyCard
              image="/io-scan.jpg"
              title="IO Scan for ALL-on-X"
              description="Accurately capture All-on-X MUA and gingiva data for seamless, precise CAD design."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#cddbfa] text-[#3a73f2]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Meet 3D Ocean Smile's<br />
            CAD/CAM specialists today
          </h2>
          <Link 
            to="/contact"
            className="inline-flex items-center border-2 border-[#3a73f2] text-[#3a73f2] px-8 py-3 rounded-md hover:bg-[#3a73f2] hover:text-white transition-colors"
          >
            Contact Us
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
      </section>
    </div>
  );
};

const TechnologyCard = ({ image, title, description }) => (
  <div className="bg-gray-50 rounded-lg overflow-hidden">
    <div className="aspect-square">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-4 text-[#3a73f2]">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

export default Technology;
