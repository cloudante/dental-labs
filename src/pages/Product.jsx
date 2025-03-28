import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setPageTitle } from '../utils/setPageTitle';
import PageTransition from '../components/layout/PageTransition';
import technologyImage1 from '../assets/modeless.png';
import technologyImage2 from '../assets/abutment.png';
import technologyImage4 from '../assets/3d.jpeg';

const Product = () => {
  useEffect(() => {
    setPageTitle('Products');
  }, []);

  return (
    <PageTransition>
      <div>

        {/* Products Grid Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Products Row */}
              <div>
                <ProductCard
                  image={technologyImage1}
                  title="Zirconia Crown"
                  description="Durable, high-strength crowns crafted for natural aesthetics and long-lasting performance."
                />
              </div>

              <div>
                <ProductCard
                  image={technologyImage2}
                  title="Custom Abutment"
                  description="Precision-engineered abutments tailored for a perfect fit and optimal functionality."
                />
              </div>

              <div>
                <ProductCard
                  image={technologyImage4}
                  title="3D Print Model"
                  description="Innovative hybrid prosthetics combining the benefits of fixed and removable solutions."
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#6188D1] rounded-3xl mx-4 md:mx-8 overflow-hidden">
          <div className="container mx-auto px-12 py-20">
            <div className="block md:flex md:flex-row justify-between items-center">
              <div className="space-y-4 mb-8 md:mb-0">
                <span className="text-[#c8d0ff] text-sm font-semibold uppercase tracking-wider">
                  TRY IT NOW
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Ready to submit your<br />
                  digital case?
                </h2>
              </div>
              <div className="flex justify-start sm:justify-start">
                <a 
                  href="https://forms.gle/ntzpFP33TfKBMLKg7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-[#6188D1] transition-colors"
                >
                  Get Started Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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

const ProductCard = ({ image, title, description }) => {
  // Convert title to slug format
  const slug = title.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <Link to={`/product/${slug}`} className="block">
      <div className="relative group rounded-lg overflow-hidden">
        {/* Image Container */}
        <div className="aspect-square bg-black">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Overlay that appears on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-6">
          <h3 className="text-lg md:text-xl font-bold mb-4 text-white">
            {title}
          </h3>
          <p className="text-sm md:text-base text-gray-200">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Product; 