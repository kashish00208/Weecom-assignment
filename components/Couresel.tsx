import React, { useState, useEffect } from "react";
import Image from "next/image";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  if (images.length === 0) return null;
  return (
    <div className="w-full h-80 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="w-full flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-10 bg-white/70 rounded-full px-2 py-1"
        >
          &#10094;
        </button>
        <Image
          src={images[currentIndex]}
          width={300}
          height={300}
          alt={`Slide ${currentIndex}`}
          className="mx-auto rounded-md"
        />
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-10 bg-white/70 rounded-full px-2 py-1"
        >
          &#10095;
        </button>
      </div>
      <div className="flex gap-2 mt-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full ${idx === currentIndex ? "bg-blue-600" : "bg-gray-300"}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
