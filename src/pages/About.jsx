import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setPageTitle } from '../utils/setPageTitle';

const About = () => {
  useEffect(() => {
    setPageTitle('About Us');
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">3D Ocean Smile</h1>
          <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
            <p>
            3D Ocean Smile, based in Southern California, specializes in precision-driven digital dental solutions, helping laboratories stay at the forefront of 
            innovation. Our expertly crafted products, developed by a skilled team, foster lasting client satisfaction and loyalty.
            </p>
            <p>
            Founded in 2015 as an accredited milling center, 3D Ocean Smile takes pride in its highly experienced team and cutting-edge in-house technology, 
            including a milling machine, advanced CAM software, a scanner, and a 3D printer. This dedication ensures that every product meets the highest standards of quality and excellence.
            </p>
            <p>
            With a forward-thinking approach, we invest heavily in dental implant research and development, continuously refining our processes to deliver industry-leading solutions. Our unwavering 
            commitment to innovation guarantees that every product we create meets the highest standards of precision and reliability.
            </p>
            <p>
            Leveraging the latest advancements in digital technology, 3D Ocean Smile offers a comprehensive range of services, including Zirconia crowns, copings, custom abutments, temporary crowns, and dental implants. Expanding our offerings, we also provide titanium 
            implant bars and bridges, hybrid dentures, and All-on-X solutions, delivering a diverse selection of premium dental solutions.
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
                'Tailored treatment planning',
                '3D modeling and digital design enhancement',
                'Custom implant and abutment design',
                'All-on-X custom design solutions'
              ]}
            />
            <ServiceCard
              image="/CA-milling2.jpg"
              title="Milling & Printing"
              services={[
                'High-precision milling for Zirconia, metal, composites, and more',
                '3D printing for night guards, surgical guides, and other custom products',
                'Post-milling finishing and polishing'
              ]}
            />
            <ServiceCard
              image="/AdobeStock_352796278_Preview.jpeg"
              title="Implants & Restorations"
              services={[
                'Custom implant abutments',
                'Zirconia crowns, copings, and temporary crowns',
                'Comprehensive implant restoration solutions'
              ]}
            />
            <ServiceCard
              image="/AdobeStock_873526832gold.jpg"
              title="All-on-X Solutions"
              services={[
                'Overview and advantages of All-on-X',
                'Custom All-on-X design and implant placement',
                'Full process support from start to finish'
              ]}
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
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=crowns@3doceansmile.com&su=Inquiry from Website&body=Hello 3D Ocean Smile team,"
            target="_blank"
            rel="noopener noreferrer"
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
          </a>
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