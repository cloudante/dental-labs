import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800">
          <img 
            src="/main-img.jpg" 
            alt="Digital Dental Excellence" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative container mx-auto px-4 py-20 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Digital Dental<br />
            Excellence
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-xl">
            Leading the advancement of laboratories with innovative technology and precision-driven digital dental solutions.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md">
            Contact Us
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Core Dental Studio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              title="Leading Digital Solutions"
              description="Core Dental Studio offers precision-driven digital dental solutions, leading the advancement of laboratories."
            />
            <FeatureCard 
              title="Skilled Professionals"
              description="Established in 2015, our adept team crafts superior products meticulously, ensuring client satisfaction."
            />
            <FeatureCard 
              title="Comprehensive Services"
              description="From Zirconia crowns to dental implants, we provide a wide range of premium alternatives."
            />
            <FeatureCard 
              title="Commitment to Excellence"
              description="Guided by forward-thinking strategies, we invest in dental implant research and innovation."
            />
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Technology</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TechnologyCard 
              title="MODELESS AND IMPLANTS"
              description="Specialize in fabricating custom dental implants"
              image="/ASC-Solution.jpeg"
            />
            <TechnologyCard 
              title="Custom Abutment ASC Solution"
              description="Up to 25°adjustable Custom abutment solution"
              image="/abutment-solution.jpg"
            />
            <TechnologyCard 
              title="Custom All on X Solution"
              description="Try our Custom Location and Custom Multi Unit Abutment"
              image="/all-on-x.jpg"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Core Dental Studio's CAD/CAM expertise is unparalleled. Their precision in utilizing advanced technology ensures that each restoration is meticulously crafted."
              author="Emily Park"
            />
            <TestimonialCard 
              quote="What sets Core Dental Studio apart is their exceptional care and responsiveness. Beyond their digital expertise, their team demonstrates kindness."
              author="Ethan Nguyen"
            />
            <TestimonialCard 
              quote="Core Dental Studio's dedication to patient satisfaction is remarkable. Beyond their impressive digital capabilities, their unwavering commitment is outstanding."
              author="Ava Patel"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contact Us</h2>
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Components
const FeatureCard = ({ title, description }) => (
  <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-xl font-bold mb-4 text-blue-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TechnologyCard = ({ title, description, image }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-blue-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <button className="mt-4 text-blue-600 hover:text-blue-800">Learn More →</button>
    </div>
  </div>
);

const TestimonialCard = ({ quote, author }) => (
  <div className="p-6 bg-blue-800 rounded-lg">
    <blockquote className="text-lg mb-4">"{quote}"</blockquote>
    <p className="font-bold">- {author}</p>
  </div>
);

const ContactForm = () => (
  <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <input 
      type="text" 
      placeholder="First Name" 
      className="p-3 border rounded-md"
    />
    <input 
      type="text" 
      placeholder="Last Name" 
      className="p-3 border rounded-md"
    />
    <input 
      type="email" 
      placeholder="Email" 
      className="p-3 border rounded-md"
    />
    <input 
      type="tel" 
      placeholder="Phone" 
      className="p-3 border rounded-md"
    />
    <input 
      type="text" 
      placeholder="Company" 
      className="p-3 border rounded-md"
    />
    <input 
      type="text" 
      placeholder="Address" 
      className="p-3 border rounded-md"
    />
    <textarea 
      placeholder="Message" 
      className="p-3 border rounded-md md:col-span-2 h-32"
    ></textarea>
    <button 
      type="submit" 
      className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md md:col-span-2"
    >
      Submit
    </button>
  </form>
);

export default Home; 