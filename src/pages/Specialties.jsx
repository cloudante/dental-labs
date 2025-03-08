import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { setPageTitle } from '../utils/setPageTitle';
import PageTransition from '../components/layout/PageTransition';
import technologyImage1 from '../assets/modeless.png';
import technologyImage2 from '../assets/abutment.png';
import technologyImage3 from '../assets/allonx.png';
import technologyImage5 from '../assets/ioscan.png';

const Specialties = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageTitle('Specialties');
  }, [location]);

  return (
    <PageTransition>
      <div>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Specialties</h1>
            <div className="max-w-4xl mx-auto text-base md:text-lg text-gray-700 space-y-6 mb-20">
              <p>
                3D Ocean Smile harnesses advanced digital technology to deliver precision-driven dental solutions. With state-of-the-art equipment and innovative processes, we guarantee top-quality results for each client.
              </p>
              <p>
                From cutting-edge CAD/CAM systems to the latest 3D printing technology, we are committed to ongoing investments in top-tier tools and training, ensuring we remain leaders in digital dentistry.
              </p>
            </div>
            
            {/* Mobile Slider */}
            <div className="md:hidden w-full overflow-x-auto snap-x snap-mandatory flex gap-4 pb-6 scrollbar-hide">
              <div className="snap-center shrink-0 w-[80%] first:ml-[10%]">
                <TechnologyCard
                  image="/modeless-implants.jpg"
                  title="Modeless and Implants"
                  description="Specializing in the fabrication of custom dental implants with precision and expertise."
                />
              </div>
              <div className="snap-center shrink-0 w-[80%]">
                <TechnologyCard
                  image="/custom-abutment.jpg"
                  title="Custom Abutment ASC"
                  description="Offering up to 25° adjustable custom abutment solutions for optimal fit and functionality."
                />
              </div>
              <div className="snap-center shrink-0 w-[80%]">
                <TechnologyCard
                  image="/all-on-x.jpg"
                  title="Custom All on X Solution"
                  description="Explore our Custom Location and Multi-Unit Abutment options for the perfect All-on-X fit."
                />
              </div>
              <div className="snap-center shrink-0 w-[80%] last:mr-[10%]">
                <TechnologyCard
                  image="/io-scan.jpg"
                  title="IO Scan for ALL-on-X"
                  description="Accurately capture All-on-X MUA and gingiva data for seamless, precise CAD design."
                />
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <TechnologyCard
                image={technologyImage1}
                title="Modeless and Implants"
                description="Specializing in the fabrication of custom dental implants with precision and expertise."
              />
              <TechnologyCard
                image={technologyImage2}
                title="Custom Abutment ASC"
                description="Offering up to 25° adjustable custom abutment solutions for optimal fit and functionality."
              />
              <TechnologyCard
                image={technologyImage3}
                title="Custom All on X Solution"
                description="Explore our Custom Location and Multi-Unit Abutment options for the perfect All-on-X fit."
              />
              <TechnologyCard
                image={technologyImage5}
                title="IO Scan for ALL-on-X"
                description="Accurately capture All-on-X MUA and gingiva data for seamless, precise CAD design."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#6188D1] rounded-3xl mx-4 md:mx-8 overflow-hidden">
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

const TechnologyCard = ({ image, title, description }) => (
  <div className="bg-gray-50 rounded-lg overflow-hidden h-full">
    <div className="aspect-square">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-lg md:text-xl font-bold mb-4 text-[#3a73f2]">{title}</h3>
      <p className="text-sm md:text-base text-gray-600">{description}</p>
    </div>
  </div>
);

export default Specialties;
