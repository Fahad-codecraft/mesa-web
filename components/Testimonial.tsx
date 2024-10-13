'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Prajakta Wagh',
    role: 'Data Engineer, Amazon',
    quote: `Thank you for providing a great platform for learning.
            Recently, Amazon visited our campus, 
            and I was interviewed by Amazon and got
            the offer just because of GeeksforGeeks.
            Thanks a lot.`,
    image: '/PVPs/Prajakta.webp',
  },
  {
    name: 'Prajakta Wagh',
    role: 'Data Engineer, Amazon',
    quote: `Thank you for providing a great platform for learning.
            Recently, Amazon visited our campus, 
            and I was interviewed by Amazon and got
            the offer just because of GeeksforGeeks.
            Thanks a lot.`,
    image: '/PVPs/Prajakta.webp',
  },
  {
    name: 'Prajakta Wagh',
    role: 'Data Engineer, Amazon',
    quote: `Thank you for providing a great platform for learning.
            Recently, Amazon visited our campus, 
            and I was interviewed by Amazon and got
            the offer just because of GeeksforGeeks.
            Thanks a lot.`,
    image: '/PVPs/Prajakta.webp',
  },
  {
    name: 'Prajakta Wagh',
    role: 'Data Engineer, Amazon',
    quote: `Thank you for providing a great platform for learning.
            Recently, Amazon visited our campus, 
            and I was interviewed by Amazon and got
            the offer just because of GeeksforGeeks.
            Thanks a lot.`,
    image: '/PVPs/Prajakta.webp',
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto pb-10 p-6 rounded-lg shadow-lg">
      <div className="overflow-hidden">
        <div className="flex transition-transform 
                        duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 w-full p-8">
              <div className="bg-[#27292B]
                              shadow-lg rounded-lg 
                              hover:shadow-2xl transition-shadow
                              duration-300 p-6">
                <div className="flex justify-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center text-white">{testimonial.name}</h3>
                <p className="text-center text-sm font-semibold text-gray-500">
                  <span className="text-green-600">{testimonial.role}</span>
                </p>
                <div className="mt-4 text-gray-300 text-center italic">
                  <p className="max-w-xs mx-auto">{testimonial.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots for navigation */}
      <div className="flex justify-center space-x-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${current === index ? 'bg-green-600' : 'bg-gray-300'} transition-all duration-300`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      {/* Previous button */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button
          className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors duration-300"
          onClick={prevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Next button */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <button
          className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors duration-300"
          onClick={nextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
