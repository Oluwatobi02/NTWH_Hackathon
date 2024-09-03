"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronIcon } from './icons/chevronIcon'; // Ensure this component is defined correctly

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    'https://i.pinimg.com/474x/4a/68/7b/4a687bcc50d66de6c20bb33153c7f296.jpg',
    'https://i.pinimg.com/736x/f4/9e/c3/f49ec3797d046773ffaa182615f00720.jpg',
    'https://i.pinimg.com/474x/a7/43/f0/a743f08a87ca491534dded4eab624c5f.jpg',
    'https://i.pinimg.com/474x/af/36/18/af3618539c75160eaab60b2f431bc274.jpg',
    'https://i.pinimg.com/474x/95/4f/b9/954fb9f28385a95471c21dda6cd98e36.jpg',
    'https://i.pinimg.com/474x/31/11/1b/31111b04364b97086bb58257dcfa3a42.jpg',
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-[50vh] flex items-center justify-center bg-gray-200 relative"
          >
            <Image
              src={slide}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        <ChevronIcon />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        <ChevronIcon className="rotate-180" />
      </button>
    </div>
  );
};

export default Carousel;
