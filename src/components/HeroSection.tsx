import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Welcome to Our SaaS</span>
            <span className="block text-indigo-600">The Best Solution for Your Business</span>
          </h1>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Our software helps you to manage and grow your business efficiently.
          </p>
          <div className="mt-8 flex justify-center">
            <a href="#" className="bg-indigo-500 text-white px-6 py-3 rounded-md text-lg font-medium">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
