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
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">3D Ocean Smile</h1>
            <p className="text-gray-600">
              Please feel free to contact us for any inquiries, appointments,
              or questions. <br></br>We are always ready to assist you. 
            </p>
            
            <div className="space-y-2">
              <p className="text-gray-800">9750 Katella Avenue</p>
              <p className="text-gray-800">Garden Grove, CA, 92804</p>
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
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name *</label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6188D1] focus:ring-[#6188D1]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6188D1] focus:ring-[#6188D1]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">E-Mail *</label>
                <input
                  type="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6188D1] focus:ring-[#6188D1]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6188D1] focus:ring-[#6188D1]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6188D1] focus:ring-[#6188D1]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#6188D1] text-white px-6 py-3 rounded-lg hover:bg-[#4F73B3] transition-colors"
              >
                Submit
              </button>
            </form>
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
    </PageTransition>
  );
};

export default Contact; 