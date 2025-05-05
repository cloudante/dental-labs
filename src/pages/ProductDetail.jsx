import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mobilePopup, setMobilePopup] = useState(null);
  
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

  // Function to handle product click/tap
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };
  
  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  // Function to handle mobile product click
  const handleMobileProductClick = (title, description) => {
    if (window.innerWidth < 768) {
      setMobilePopup({ title, description });
    }
  };
  
  // Function to close mobile popup
  const closeMobilePopup = () => {
    setMobilePopup(null);
  };

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
            {slug === 'zirconia-crown' && (
              <div className="grid grid-cols-2 gap-4">
                {product.images.map((image, index) => (
                  <div 
                    key={index} 
                    className="relative group aspect-square"
                    onClick={() => {
                      const titles = ["HT Zirconia", "Inlay & Onlay", "Veneers", "3M Lava"];
                      const descriptions = [
                        "High translucency zirconia, known for its aesthetic qualities and durability, is often used in dental restorations such as crowns and bridges.",
                        "Dental restorations that are custom-made to fit within or on top of a damaged tooth, providing strength and restoring function and appearance.",
                        "Thin layers of material, typically porcelain or composite resin, bonded to the front surface of teeth to improve appearance and correct imperfections.",
                        "A dental restoration that uses a 3M Lava material, which is a high-strength, durable material that is used to restore teeth."
                      ];
                      handleMobileProductClick(titles[index], descriptions[index]);
                    }}
                  >
                    <img
                      src={image}
                      alt={`Zirconia Crown ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hidden md:flex md:group-hover:opacity-100 transition-opacity duration-300 flex-col justify-center p-4 rounded-lg z-10">
                      <h3 className="text-white text-lg font-bold mb-2">
                        {index === 0 && "HT Zirconia"}
                        {index === 1 && "Inlay & Onlay"}
                        {index === 2 && "Veneers"}
                        {index === 3 && "3M Lava"}
                      </h3>
                      <p className="text-gray-200 text-sm">
                        {index === 0 && "High translucency zirconia, known for its aesthetic qualities and durability, is often used in dental restorations such as crowns and bridges."}
                        {index === 1 && "Dental restorations that are custom-made to fit within or on top of a damaged tooth, providing strength and restoring function and appearance."}
                        {index === 2 && "Thin layers of material, typically porcelain or composite resin, bonded to the front surface of teeth to improve appearance and correct imperfections."}
                        {index === 3 && "A dental restoration that uses a 3M Lava material, which is a high-strength, durable material that is used to restore teeth."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Custom Abutment Section */}
            {slug === 'custom-abutment' && (
              <div className="grid grid-cols-2 gap-4">
                {product.images.map((image, index) => (
                  <div 
                    key={index} 
                    className="relative group aspect-square"
                    onClick={() => {
                      const titles = ["Screw Retained Implant Crown", "Titanium Abutment", "Zirconia Hybrid"];
                      const descriptions = [
                        "A dental restoration where a crown is securely attached to an implant using a screw, providing stability and ease of removal for adjustments.",
                        "A metal connector used in dental implants to attach the crown or prosthetic to the implant fixture, known for its strength and biocompatibility.",
                        "A dental restoration combining the strength and durability of zirconia with the aesthetics of a tooth-colored material, often used in full-arch prosthetics and hybrid dentures."
                      ];
                      handleMobileProductClick(titles[index], descriptions[index]);
                    }}
                  >
                    <img
                      src={image}
                      alt={`Custom Abutment ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hidden md:flex md:group-hover:opacity-100 transition-opacity duration-300 flex-col justify-center p-4 rounded-lg z-10">
                      <h3 className="text-white text-lg font-bold mb-2">
                        {index === 0 && "Screw Retained Implant Crown"}
                        {index === 1 && "Titanium Abutment"}
                        {index === 2 && "Zirconia Hybrid"}
                      </h3>
                      <p className="text-gray-200 text-sm">
                        {index === 0 && "A dental restoration where a crown is securely attached to an implant using a screw, providing stability and ease of removal for adjustments."}
                        {index === 1 && "A metal connector used in dental implants to attach the crown or prosthetic to the implant fixture, known for its strength and biocompatibility."}
                        {index === 2 && "A dental restoration combining the strength and durability of zirconia with the aesthetics of a tooth-colored material, often used in full-arch prosthetics and hybrid dentures."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 3D Print Model Section */}
            {slug === '3d-print-model' && (
              <div className="grid grid-cols-2 gap-4">
                {product.images.map((image, index) => (
                  <div 
                    key={index} 
                    className="relative group aspect-square"
                    onClick={() => {
                      // Add titles and descriptions for 3D print models if needed
                      const titles = ["3D Print Model", "Digital Model", "Printed Prototype", "Final Model"];
                      const descriptions = [
                        "High-precision 3D printed dental models for accurate treatment planning and appliance fabrication.",
                        "Digital dental models created with advanced scanning technology for precise measurements and design.",
                        "Prototype models for testing fit and function before final production.",
                        "Final production models with exceptional detail for dental applications."
                      ];
                      handleMobileProductClick(titles[index], descriptions[index]);
                    }}
                  >
                    <img
                      src={image}
                      alt={`3D Print Model ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hidden md:flex md:group-hover:opacity-100 transition-opacity duration-300 flex-col justify-center p-4 rounded-lg z-10">
                      {/* Desktop hover content for 3D print models */}
                      <h3 className="text-white text-lg font-bold mb-2">
                        {index === 0 && "3D Print Model"}
                        {index === 1 && "Digital Model"}
                        {index === 2 && "Printed Prototype"}
                        {index === 3 && "Final Model"}
                      </h3>
                      <p className="text-gray-200 text-sm">
                        {index === 0 && "High-precision 3D printed dental models for accurate treatment planning and appliance fabrication."}
                        {index === 1 && "Digital dental models created with advanced scanning technology for precise measurements and design."}
                        {index === 2 && "Prototype models for testing fit and function before final production."}
                        {index === 3 && "Final production models with exceptional detail for dental applications."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
      
      {/* Mobile Product Modal */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 md:hidden">
          <div className="bg-white rounded-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedProduct.images[0]} 
                alt={selectedProduct.title} 
                className="w-full h-auto"
              />
              <button 
                onClick={closeModal}
                className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{selectedProduct.title}</h2>
              <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
              {selectedProduct.details && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">Details</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedProduct.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-600">{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Fullscreen Popup */}
      {mobilePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col justify-center items-center p-6 md:hidden">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold text-white mb-4">{mobilePopup.title}</h2>
            <p className="text-gray-200 mb-8">{mobilePopup.description}</p>
            <button 
              onClick={closeMobilePopup}
              className="bg-white text-black py-2 px-6 rounded-full font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </PageTransition>
  );
};

export default ProductDetail; 