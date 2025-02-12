import React from 'react';

const Contact = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-16">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl text-[#3a73f2] font-bold mb-4">
                Core Dental Studio
              </h2>
              <p className="text-gray-600 mb-8">
                Please feel free to contact us for any inquiries, appointments,
                or questions. <br></br>We are always ready to assist you. Thank you.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-gray-600">
                7372 Walnut Ave Suite X<br />
                Buena Park, CA, 90620
              </p>
              
              <a 
                href="mailto:support@coredentalstudio.com"
                className="text-gray-600 hover:text-[#3a73f2] underline block"
              >
                support@coredentalstudio.com
              </a>
              
              <a 
                href="tel:657-239-0077"
                className="text-gray-600 hover:text-[#FF6B4A] block"
              >
                657-239-0077
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#6380c2] mb-2">First Name *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full p-2 border-b border-gray-300 focus:border-[#3a73f2] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[#6380c2] mb-2">Last Name *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full p-2 border-b border-gray-300 focus:border-[#3a73f2] outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#6380c2] mb-2">E-Mail *</label>
                  <input 
                    type="email" 
                    required
                    className="w-full p-2 border-b border-gray-300 focus:border-[#3a73f2] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[#6380c2] mb-2">Phone</label>
                  <input 
                    type="tel"
                    className="w-full p-2 border-b border-gray-300 focus:border-[#FF6B4A] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#6380c2] mb-2">Address</label>
                <input 
                  type="text"
                  className="w-full p-2 border-b border-gray-300 focus:border-[#FF6B4A] outline-none"
                />
              </div>

              <div>
                <label className="block text-[#6380c2] mb-2">Company</label>
                <input 
                  type="text"
                  className="w-full p-2 border-b border-gray-300 focus:border-[#FF6B4A] outline-none"
                />
              </div>

              <div>
                <label className="block text-[#6380c2] mb-2">Message</label>
                <textarea 
                  rows="4"
                  className="w-full p-2 border-b border-gray-300 focus:border-[#FF6B4A] outline-none resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#3a73f2] text-white py-3 rounded hover:bg-blue-700 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 