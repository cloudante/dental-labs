import React, { useEffect } from 'react';
import { setPageTitle } from '../utils/setPageTitle';
import PageTransition from '../components/layout/PageTransition';

const Terms = () => {
  useEffect(() => {
    setPageTitle('Terms of Service');
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">Terms of Service</h1>
            <div className="max-w-4xl mx-auto text-base md:text-lg text-gray-700 space-y-6 mb-16">
              <h2 className="text-2xl font-bold text-[#0A2540] mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using 3D Ocean Smile's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>

              <h2 className="text-2xl font-bold text-[#0A2540] mt-8 mb-4">2. Service Description</h2>
              <p>
                3D Ocean Smile provides digital dental laboratory services, including but not limited to CAD/CAM design, milling, and 3D printing services for dental professionals.
              </p>

              <h2 className="text-2xl font-bold text-[#0A2540] mt-8 mb-4">3. User Responsibilities</h2>
              <p>
                Users are responsible for providing accurate information and maintaining the confidentiality of their account information. Any misuse of services may result in immediate termination.
              </p>

              <h2 className="text-2xl font-bold text-[#0A2540] mt-8 mb-4">4. Intellectual Property</h2>
              <p>
                All content, designs, and materials created by 3D Ocean Smile remain the exclusive property of 3D Ocean Smile unless explicitly stated otherwise in writing.
              </p>

              <h2 className="text-2xl font-bold text-[#0A2540] mt-8 mb-4">5. Privacy Policy</h2>
              <p>
                Our privacy practices are governed by our Privacy Policy, which is incorporated into these Terms of Service by reference.
              </p>

              <h2 className="text-2xl font-bold text-[#0A2540] mt-8 mb-4">6. Limitation of Liability</h2>
              <p>
                3D Ocean Smile shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
              </p>

              <h2 className="text-2xl font-bold text-[#0A2540] mt-8 mb-4">7. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of our services following any changes constitutes acceptance of those changes.
              </p>

              <h2 className="text-2xl font-bold text-[#0A2540] mt-8 mb-4">8. Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us at crowns@3doceansmile.com.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Terms; 