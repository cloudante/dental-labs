import React, { useEffect } from 'react';
import { setPageTitle } from '../utils/setPageTitle';
import PageTransition from '../components/layout/PageTransition';

const Contact = () => {
  useEffect(() => {
    setPageTitle('Contact');
  }, []);

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-8">
          {/* Contact Information */}
          <div className="space-y-6 max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-800">3D Ocean Smile</h1>
            <p className="text-gray-600">
              Please feel free to contact us for any inquiries, appointments,
              or questions. <br />We are always ready to assist you. 
            </p>
            
            <div className="space-y-2">
              <p className="text-gray-800">9750 Katella Avenue</p>
              <p className="text-gray-800">Anaheim, CA, 92804</p>
            </div>

            <div className="space-y-2">
              <p className="text-gray-800">213-760-2550</p>
              <a 
                href="mailto:crowns@3doceansmile.com" 
                className="text-[#6188D1] hover:underline"
              >
                crowns@3doceansmile.com
              </a>
            </div>

            {/* Contact Button */}
            <div className="pt-6">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=crowns@3doceansmile.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#6188D1] text-white px-8 py-4 rounded-xl hover:bg-[#4F73B3] transition-colors"
              >
                Contact Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.8975727068275!2d-117.96685772357744!3d33.80225847322752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd28f7a2a6e3c1%3A0x8c6d89c3c5c8b5a5!2s9750%20Katella%20Ave%2C%20Garden%20Grove%2C%20CA%2092804!5e0!3m2!1sen!2sus!4v1710901145776!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact; 