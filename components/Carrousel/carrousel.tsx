import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

export const Carrousel = ({
	images,
}: {
	images: { image: string; title: string; description: string }[];
}) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const previousSlide = () => {
		setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
	};

	const nextSlide = () => {
		setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
	};

	return (
		<section className="flex flex-col items-center justify-center mx-8 my-2 md:mx-10 xl:max-w-screen-xl xl:mx-auto relative">

				{images.map((item, index) => (
					<div
						key={index}
						className={`${
							index === activeIndex ? "flex" : "hidden"
						} overlay-image transition-opacity duration-500 justify-center`}>
						<Image className='rounded-xl' src={item.image} alt={item.title} height="600" width="688" />
						<div className="hover absolute rounded-xl -bottom-6 p-4 bg-myBlue-400 bg-opacity-30 text-white w-full h-full top-6 left-0 hover:-translate-y-6 transform-gpu">
							<h2 className="text-sm sm:text-xl font-bold text-center m-8 sm:m-16">{item.title}</h2>
							<p className="text-sm sm:text-md text-center">{item.description}</p>
						</div>
					</div>
				))}
				<button
					className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors duration-300 focus:outline-none"
					onClick={previousSlide}>
					<ArrowLeftIcon className="h-6 w-6" />
				</button>
				<button
					className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors duration-300 focus:outline-none"
					onClick={nextSlide}>
					<ArrowRightIcon className="h-6 w-6" />
				</button>
		</section>
	);
};

/*
import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid';

interface CarouselProps {
  items: { image: string; title: string; description: string }[];
}

const Carousel = ({ items }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const previousSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      {items.map((item, index) => (
        <div
          key={index}
          className={`${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500 absolute top-0 left-0 w-full h-full`}
        >
          <Image
            src={item.image}
            alt={item.title}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-900 bg-opacity-50 text-white">
            <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors duration-300 focus:outline-none"
        onClick={previousSlide}
      >
        <ArrowLeftIcon className="h-6 w-6" />
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors duration-300 focus:outline-none"
        onClick={nextSlide}
      >
        <ArrowRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Carousel;*/
/*
const [currentIndex, setCurrentIndex] = useState(0);
const [direction, setDirection] = useState<"left" | "right">("right");

const handleNext = () => {
  setCurrentIndex((currentIndex + 1) % images.length);
  setDirection("right");
};

const handlePrev = () => {
  setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  setDirection("left");
};

return (
  <section className="mx-8 md:mx-10 xl:max-w-screen-xl xl:mx-auto pt-0 md:pt-16 pb-10 xl:pb-24 ">
    <div className="relative">
      <div className="carousel">
        {images.map((item, index) => (
          <Transition
            key={index}
            show={index === currentIndex}
            enter={`${
              direction === "left"
                ? "transition transform translate-x-full"
                : "transition transform -translate-x-full"
            }`}
            enterFrom={`${direction === "left" ? "-translate-x-full" : "translate-x-full"}`}
            enterTo="transform translate-x-0"
            leave="transition transform"
            leaveFrom="translate-x-0"
            leaveTo={`${direction === "left" ? "-translate-x-full" : "translate-x-full"}`}>
            <div className="carousel__item">
              <Image src={item.image} alt={item.title} height="600" width="1110" />
              <h3 className="carousel__title">{item.title}</h3>
              <p className="carousel__description">{item.description}</p>
            </div>
          </Transition>
        ))}
      </div>
      <button className="absolute top-0 left-0 carousel__button carousel__button--prev" onClick={handlePrev}>
        <ChevronLeftIcon className="carousel__icon" />
      </button>
      <button className="carousel__button carousel__button--next" onClick={handleNext}>
        <ChevronRightIcon className="carousel__icon" />
      </button>
    </div>
  </section>
);
*/
