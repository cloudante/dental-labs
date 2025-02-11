import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Core Dental Studio</h1>
          <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
            <p>
              Core Dental Studio, situated in Southern California, delivers precision-driven digital dental solutions, 
              playing a pivotal role in the advancement of numerous laboratories. Our superior products, meticulously 
              crafted by our seasoned professionals, culminate in content and appreciative returning clients.
            </p>
            <p>
              Established in 2015 as an accredited milling center, Core Dental Studio proudly boasts a highly adept 
              team and an array of cutting-edge in-house equipment, encompassing a milling machine, advanced CAM software, 
              a Scanner, and a 3D printer. This commitment ensures that our clients consistently encounter the epitome 
              of excellence in both products and services.
            </p>
            <p>
              Guided by forward-thinking strategies, we make substantial investments in dental implant research and 
              development. Our continuous refinement of existing processes is a testament to our unwavering commitment 
              to ensuring that all products we produce stand at the pinnacle of the highest quality.
            </p>
            <p>
              Core Dental Studio epitomizes the forefront of utilizing the latest and most advanced digital technology 
              for a comprehensive suite of services, including Zirconia crowns, copings, custom abutments, temporary 
              crowns, and dental implants. We have broadened our spectrum to incorporate additional choices such as 
              titanium implant bars and bridges, hybrid dentures, and All-on-X solutions, offering a diverse array 
              of premium alternatives.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              image="/sddefault.jpg"
              title="Digital Design Services"
              services={[
                'Custom treatment planning',
                '3D modeling and digital design optimization',
                'Custom implant and abutment design',
                'All-on-X custom design'
              ]}
            />
            <ServiceCard
              image="/CA-milling2.jpg"
              title="Milling & Printing"
              services={[
                'High-precision milling services (Zirconia, metal, composites, etc.)',
                '3D printing (night guard, surgical guides, other custom products)',
                'Post-milling finishing and polishing'
              ]}
            />
            <ServiceCard
              image="/AdobeStock_352796278_Preview.jpeg"
              title="Implants & Restorations"
              services={[
                'Custom implant abutments',
                'Zirconia crowns, copings, temporary crowns',
                'Implant restoration solutions'
              ]}
            />
            <ServiceCard
              image="/AdobeStock_873526832gold.jpg"
              title="All-on-X Solutions"
              services={[
                'Overview and benefits of All-on-X',
                'Custom All-on-X design and implant placement',
                'Full process support'
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Meet Core Dental Studio's<br />
            CAD/CAM specialists today
          </h2>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ image, title, services }) => (
  <div className="bg-gray-50 rounded-lg overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {services.map((service, index) => (
          <li key={index} className="text-gray-600 text-sm">
            • {service}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default About; 