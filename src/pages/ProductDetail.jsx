import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { setPageTitle } from '../utils/setPageTitle';
import PageTransition from '../components/layout/PageTransition';
// Import the images directly
import zirconiaImage1 from '../assets/1.HT ZIRCONIA.jpeg';
import zirconiaImage2 from '../assets/2.INLAY&ONLAY.jpeg';
import zirconiaImage3 from '../assets/3.VENEERS.jpeg';
import zirconiaImage4 from '../assets/4.3M LAVA.png';
import customabutmentimage1 from '../assets/1.SCREW RETAINED IMPLANT CROWN.jpeg';
import customabutmentimage2 from '../assets/2.TITANIUM ABUTMENT.jpeg';
import customabutmentimage3 from '../assets/3.ZIRCONIA HYBRID.jpeg';
import printmodelimage1 from '../assets/1.jpeg'; 
import printmodelimage2 from '../assets/2.jpeg';
import printmodelimage3 from '../assets/3.jpeg';
import printmodelimage4 from '../assets/4.jpeg';


// Product detail data
const productDetails = {
  'zirconia-crown': {
    title: 'Zirconia Crown',
    description: 'Durable, high-strength crowns crafted for natural aesthetics and long-lasting performance.',
    images: [
      zirconiaImage1, // Use imported variable here
      zirconiaImage2, // For now, use the same image for all four positions
      zirconiaImage3,
      zirconiaImage4,
    ]
  },
  'custom-abutment': {
    title: 'Custom Abutment',
    description: 'Precision-engineered abutments tailored for a perfect fit and optimal functionality.',
    images: [
      customabutmentimage1, // Use imported variable here
      customabutmentimage2, // For now, use the same image for all four positions
      customabutmentimage3,
      
    ]
  },
  '3d-print-model': {
    title: '3D Print Model',
    description: 'Innovative 3D printing solutions for accurate and detailed dental models.',
    images: [
      printmodelimage1, // Use imported variable here
      printmodelimage2, // For now, use the same image for all four positions
      printmodelimage3,
      printmodelimage4,
    ]
  },
  'implant-bar': {
    title: 'Implant Bar',
    description: 'Custom-designed implant bars ensuring secure and comfortable full-arch restorations.',
    images: [
      zirconiaImage1, // Use imported variable here
      zirconiaImage2, // For now, use the same image for all four positions
      zirconiaImage3,
      zirconiaImage4,
    ]
  }
};

// For placeholder images (until you have real detail images)
const placeholderImages = [
  '/zirconia-crown.jpg',
  '/custom-abutment-product.jpg',
  '/hybrid-denture.jpg',
  '/implant-bar.jpg',
];

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  
  useEffect(() => {
    // Get product details or use placeholders if not found
    const productData = productDetails[slug];
    
    if (productData) {
      setProduct(productData);
      setPageTitle(productData.title);
    } else {
      // Handle non-existent product
      setPageTitle('Product Not Found');
    }
    
    window.scrollTo(0, 0);
  }, [slug]);

  // If product doesn't exist
  if (!product) {
    return (
      <PageTransition>
        <div className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Product Not Found</h1>
            <Link 
              to="/product" 
              className="inline-flex items-center text-[#6188D1] hover:underline"
            >
              ← Back to Products
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Link 
                to="/product" 
                className="inline-flex items-center text-[#6188D1] hover:underline"
              >
                ← Back to Products
              </Link>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-600 max-w-3xl mb-12">{product.description}</p>
            
            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.images.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                  <img 
                    src={image}
                    alt={`${product.title} - Detail ${index + 1}`}
                    className="w-full aspect-square object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-[#6188D1] rounded-3xl mx-4 md:mx-8 overflow-hidden mb-16">
          <div className="container mx-auto px-12 py-20">
            <div className="block md:flex md:flex-row justify-between items-center">
              <div className="space-y-4 mb-8 md:mb-0">
                <span className="text-[#c8d0ff] text-sm font-semibold uppercase tracking-wider">
                  TRY IT NOW
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Ready to submit your<br />
                  orders and statements?
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

export default ProductDetail; 