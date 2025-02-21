import React from 'react';

const Contact = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-16">Contact Us</h1>
        
        {/* Contact Info */}
        <div className="max-w-2xl mx-auto space-y-8">
          <div>
            <h2 className="text-2xl text-[#3a73f2] font-bold mb-4">
              3D Ocean Smile
            </h2>
            <p className="text-gray-600 mb-8">
              Please feel free to contact us for any inquiries, appointments,
              or questions. <br></br>We are always ready to assist you. Thank you.
            </p>
          </div>

          <div className="space-y-4 text-center">
            <p className="text-gray-600 text-lg">
              7372 Walnut Ave Suite X<br />
              Buena Park, CA, 90620
            </p>
            
            <a 
              href="mailto:crowns@3doceansmile.com"
              className="text-gray-600 hover:text-[#3a73f2] underline block text-lg"
            >
              crowns@3doceansmile.com
            </a>
            
            <a 
              href="tel:213-760-2550"
              className="text-gray-600 hover:text-[#FF6B4A] block text-lg"
            >
              213-760-2550
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 