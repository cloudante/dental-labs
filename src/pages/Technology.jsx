import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Technology = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Technology</h1>
          <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
            <p>
              Core Dental Studio leverages cutting-edge digital technology to provide precision-driven dental solutions. 
              Our state-of-the-art equipment and innovative processes ensure the highest quality results for every client.
            </p>
            <p>
              From advanced CAD/CAM systems to the latest in 3D printing technology, we continuously invest in the best tools 
              and training to stay at the forefront of digital dentistry.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Technology Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TechnologyCard
              image="/modeless-implants.jpg"
              title="MODELESS AND IMPLANTS"
              description="Specialize in fabricating custom dental implants"
            />
            <TechnologyCard
              image="/custom-abutment.jpg"
              title="Custom Abutment ASC Solution"
              description="Up to 25°adjustable Custom abutment solution"
            />
            <TechnologyCard
              image="/all-on-x.jpg"
              title="Custom All on X Solution"
              description="Try our Custom Location and Custom Multi Unit Abutment"
            />
            <TechnologyCard
              image="/io-scan.jpg"
              title="IO Scan for ALL-on-X"
              description="Accurately capture All-on-X MUA and gingiva data for seamless CAD design"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#cddbfa] text-[#3a73f2]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Meet Core Dental Studio's<br />
            CAD/CAM specialists today
          </h2>
          <button className="bg-[#3a73f2] text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
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
