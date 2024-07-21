"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const slideData = [
  {
    id: 1,
    title: 'Big Summer Sale',
    description: 'Up to 50% off on all electronics! Grab your favorite gadgets at unbeatable prices. Limited time offer, hurry up and save big on top brands.',
    bgGradient: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
    image: '/image1.jpg'
  },
  {
    id: 2,
    title: 'Winter Clearance',
    description: 'Save big on winter wear! Get cozy with our exclusive winter collection at amazing discounts. Stay warm and stylish this winter season.',
    bgGradient: 'linear-gradient(to right, #373b44, #4286f4)',
    image: '/image3.jpg'
  },
  {
    id: 3,
    title: 'Spring Collection',
    description: 'New arrivals at amazing prices! Refresh your wardrobe with our latest spring collection. Trendy styles and vibrant colors await you.',
    bgGradient: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
    image: '/image2.jpg'
  },
  {
    id: 4,
    title: 'Exclusive Deals',
    description: 'Limited time offers on top brands! Don\'t miss out on our exclusive deals. Shop now and enjoy fantastic savings on premium products.',
    bgGradient: 'linear-gradient(to right, #355c7d, #6c5b7b, #c06c84)',
    image: '/image4.jpg'
  }
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === slideData.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slideData.length - 1 : current - 1);
  };

  return (
    <div className='relative h-[500px] md:h-[600px] overflow-hidden'>
      <div className="absolute inset-0 flex transition-all ease-in-out duration-1000">
        {slideData.map((slide, index) => (
          <div
            key={slide.id}
            style={{ background: slide.bgGradient }}
            className={`w-full h-full absolute top-0 left-0 flex ${index === current ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
          >
            <div className="flex items-center justify-between w-full h-full p-8">
              {/* Left Side: Text Content */}
              <div className="w-full md:w-1/2 flex flex-col justify-center p-4 md:p-8 text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">{slide.title}</h2>
                <p className="text-lg md:text-2xl mb-4 md:mb-6">{slide.description}</p>
                <button className="bg-black  w-52 items-center  justify-center sm:bg-black text-white py-2 px-4 rounded-md text-base md:text-lg ">Shop Now</button>
              </div>
              {/* Right Side: Image */}
              <div className="hidden md:flex w-1/2 items-center justify-center">
                <Image src={slide.image} alt={slide.title} width={420} height={400} className="rounded-md" />
              </div>
            </div>
            {/* Background image for small screens */}
            <div className="md:hidden absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${slide.image})` }}></div>
          </div>
        ))}
      </div>
      {/* Navigation Buttons */}
      <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">‹</button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">›</button>
      {/* Navigation Dots */}
      <div className="absolute bottom-4 w-full flex justify-center">
        {slideData.map((_, index) => (
          <div 
            key={index} 
            className={`h-2 w-2 mx-1 rounded-full ${index === current ? 'bg-black' : 'bg-gray-400'}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
