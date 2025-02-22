import React, { useEffect } from 'react';
import { setPageTitle } from '../utils/setPageTitle';

const Terms = () => {
  useEffect(() => {
    setPageTitle('Terms of Service');
  }, []);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Terms of Service</h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#3a73f2]">Introduction</h2>
            <p className="text-gray-600">
              Welcome to 3D Ocean Smile. By accessing our website and using our services, 
              you agree to comply with and be bound by the following terms and conditions.
            </p>
          </section>

          {/* Services */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#3a73f2]">Services</h2>
            <p className="text-gray-600">
              3D Ocean Smile provides digital dental solutions including but not limited to 
              CAD/CAM services, custom dental implants, and related dental laboratory services. 
              We reserve the right to modify, suspend, or discontinue any aspect of our services 
              at any time.
            </p>
          </section>

          {/* File Submission */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#3a73f2]">File Submission</h2>
            <p className="text-gray-600">
              When submitting files for production, you agree that:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>All submitted files meet our technical requirements</li>
              <li>You have the right to use and submit these files</li>
              <li>Files will be handled according to our standard procedures</li>
              <li>Turnaround times are estimates and subject to change</li>
            </ul>
          </section>

          {/* Quality and Warranty */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#3a73f2]">Quality and Warranty</h2>
            <p className="text-gray-600">
              We strive to maintain the highest quality standards in all our products and services. 
              Our warranty terms are specific to each product category and will be provided with 
              your order details.
            </p>
          </section>

          {/* Privacy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#3a73f2]">Privacy</h2>
            <p className="text-gray-600">
              Your privacy is important to us. We handle all information according to industry 
              standards and best practices. For detailed information about how we handle your 
              data, please contact us.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#3a73f2]">Contact</h2>
            <p className="text-gray-600">
              If you have any questions about these Terms of Service, please contact us at{' '}
              <a 
                href="mailto:crowns@3doceansmile.com" 
                className="text-[#3a73f2] hover:underline"
              >
                crowns@3doceansmile.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms; 