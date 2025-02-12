import React from 'react';

const Product = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Product</h1>
          <div className="max-w-4xl mx-auto text-lg text-gray-700 text-center">
            <p>
              Explore Core Dental Studio's diverse range of dental restorations.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Zirconia Crown */}
            <ProductCard
              image="/zirconia-crown.jpg"
              title="Zirconia Crown"
              description="High-strength, natural-looking dental crowns crafted with precision for optimal aesthetics and durability."
            />

            {/* Custom Abutment */}
            <ProductCard
              image="/custom-abutment-product.jpg"
              title="Custom Abutment"
              description="Precision-engineered custom abutments designed for perfect fit and optimal function."
            />

            {/* All-on-X */}
            <ProductCard
              image="/all-on-x-product.jpg"
              title="All-on-X"
              description="Complete arch restoration solutions with superior stability and natural aesthetics."
            />

            {/* Implant Bar */}
            <ProductCard
              image="/implant-bar.jpg"
              title="Implant Bar"
              description="Custom-designed implant bars for secure and comfortable full-arch restorations."
            />

            {/* Hybrid Denture */}
            <ProductCard
              image="/hybrid-denture.jpg"
              title="Hybrid Denture"
              description="Advanced hybrid solutions combining the benefits of fixed and removable prosthetics."
            />

            {/* Full Denture */}
            <ProductCard
              image="/full-denture.jpg"
              title="Full Denture"
              description="Premium quality full dentures designed for comfort, functionality, and natural appearance."
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
      <h3 className="text-xl font-bold mb-4 text-white">
        {title}
      </h3>
      <p className="text-gray-200 text-sm">
        {description}
      </p>
    </div>
  </div>
);

export default Product; 