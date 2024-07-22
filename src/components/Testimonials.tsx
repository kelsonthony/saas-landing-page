import React from 'react';
import Slider from 'react-slick';

const testimonials = [
  {
    text: "This SaaS has transformed the way we operate. The best decision we made for our business.",
    author: "Jane Doe, CEO of Company",
  },
  {
    text: "Amazing features and incredible support. Highly recommend!",
    author: "John Smith, CTO of Another Company",
  },
  {
    text: "Excellent software that meets all our needs. Great user experience.",
    author: "Emily Johnson, Product Manager",
  },
];

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

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
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center px-4">
                <blockquote className="text-xl leading-8 text-gray-500">
                  <p>"{testimonial.text}"</p>
                  <footer className="mt-4">
                    <p className="text-base font-semibold text-gray-900">{testimonial.author}</p>
                  </footer>
                </blockquote>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
