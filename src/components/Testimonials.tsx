import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What our customers say
          </p>
        </div>
        <div className="mt-10">
          <div className="space-y-8">
            <blockquote className="text-center">
              <p className="text-xl leading-8 text-gray-500">
                "This SaaS has transformed the way we operate. The best decision we made for our business."
              </p>
              <footer className="mt-4">
                <p className="text-base font-semibold text-gray-900">Jane Doe, CEO of Company</p>
              </footer>
            </blockquote>
            <blockquote className="text-center">
              <p className="text-xl leading-8 text-gray-500">
                "Amazing features and incredible support. Highly recommend!"
              </p>
              <footer className="mt-4">
                <p className="text-base font-semibold text-gray-900">John Smith, CTO of Another Company</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
