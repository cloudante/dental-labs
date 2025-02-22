import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setPageTitle } from '../utils/setPageTitle';
import PageTransition from '../components/layout/PageTransition';

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Large Item */}
              <div className="lg:col-span-2 lg:row-span-2">
                <ProductCard
                  image="/zirconia-crown.jpg"
                  title="Zirconia Crown"
                  description="Durable, high-strength crowns crafted for natural aesthetics and long-lasting performance."
                />
              </div>

              {/* Regular Items */}
              <div>
                <ProductCard
                  image="/custom-abutment-product.jpg"
                  title="Custom Abutment"
                  description="Precision-engineered abutments tailored for a perfect fit and optimal functionality."
                />
              </div>

              <div>
                <ProductCard
                  image="/all-on-x-product.jpg"
                  title="All-on-X"
                  description="Full-arch restoration solutions offering superior stability and a natural look."
                />
              </div>

              {/* Bottom Row - 3 Equal Columns */}
              <div>
                <ProductCard
                  image="/hybrid-denture.jpg"
                  title="Hybrid Denture"
                  description="Innovative hybrid prosthetics combining the benefits of fixed and removable solutions."
                />
              </div>

              <div>
                <ProductCard
                  image="/implant-bar.jpg"
                  title="Implant Bar"
                  description="Custom-designed implant bars ensuring secure and comfortable full-arch restorations."
                />
              </div>

              <div>
                <ProductCard
                  image="/full-denture.jpg"
                  title="Full Denture"
                  description="High-quality full dentures designed for exceptional comfort, function, and aesthetics."
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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

const ProductCard = ({ image, title, description }) => (
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
);

export default Product; 