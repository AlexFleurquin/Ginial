import React, { useEffect } from 'react';
import Image from 'next/image';

// Import Swiper
import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
Swiper.use([Navigation]);

export default function Carousel() {
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const carousel = new Swiper('.carousel', {
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        640: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 4
        }
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.carousel-next',
        prevEl: '.carousel-prev'
      }
    });
  }, []);

  return (
    <section className="bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2  text-gray-100">Trending collections</h2>
          </div>
          {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
          {/* * Custom styles in src/css/additional-styles/theme.scss */}
          <div className="carousel swiper-container max-w-sm mx-auto sm:max-w-none ">
            <div className="swiper-wrapper">
              {/* Carousel items */}
              <div className="swiper-slide h-auto flex flex-col">
                {/* Image */}
                <Image
                  className="w-full aspect-[7/4] object-cover"
                  src="/static/images/home/carousel-01.jpg"
                  width="259"
                  height="148"
                  alt="Carousel 01"
                />
                {/* White box */}
                <div className="grow bg-white px-4 pb-6">
                  {/* Avatars */}
                  <div className="flex items-start -space-x-3 -ml-0.5 mb-4 -mt-5">
                    <Image
                      className="rounded-full border-2 border-white box-content"
                      src="/static/images/home/carousel-avatar-01.jpg"
                      width="36"
                      height="36"
                      alt="Avatar 01"
                    />
                    <Image
                      className="rounded-full border-2 border-white box-content"
                      src="/static/images/home/carousel-avatar-02.jpg"
                      width="36"
                      height="36"
                      alt="Avatar 02"
                    />
                    <Image
                      className="rounded-full border-2 border-white box-content"
                      src="/static/images/home/carousel-avatar-03.jpg"
                      width="36"
                      height="36"
                      alt="Avatar 03"
                    />
                    <Image
                      className="rounded-full border-2 border-white box-content"
                      src="/static/images/home/carousel-avatar-04.jpg"
                      width="36"
                      height="36"
                      alt="Avatar 04"
                    />
                  </div>
                  {/* Title */}
                  <a
                    className="inline-block  font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                    href="#0"
                  >
                    Digital Art
                  </a>
                  <div className="text-sm text-gray-500 italic">
                    34 collections
                  </div>
                </div>
              </div>
              <div className="swiper-slide h-auto flex flex-col">
                {/* Image */}
                <Image
                  className="w-full aspect-[7/4] object-cover"
                  src="/static/images/home/carousel-02.jpg"
                  width="259"
                  height="148"
                  alt="Carousel 02"
                />
                {/* White box */}
                <div className="grow bg-white px-4 pb-6">
                  {/* Avatars */}
                  <div className="flex items-start -space-x-3 -ml-0.5 mb-4 -mt-5">
                    <Image
                      className="rounded-full border-2 border-white box-content"
                      src="/static/images/home/carousel-avatar-05.jpg"
                      width="36"
                      height="36"
                      alt="Avatar 05"
                    />
                    <Image
                      className="rounded-full border-2 border-white box-content"
                      src="/static/images/home/carousel-avatar-06.jpg"
                      width="36"
                      height="36"
                      alt="Avatar 06"
                    />
                    <Image
                      className="rounded-full border-2 border-white box-content"
                      src="/static/images/home/carousel-avatar-07.jpg"
                      width="36"
                      height="36"
                      alt="Avatar 07"
                    />
                    <Image
                      className="rounded-full border-2 border-white box-content"
                      src="/static/images/home/carousel-avatar-08.jpg"
                      width="36"
                      height="36"
                      alt="Avatar 08"
                    />
                  </div>
                  {/* Title */}
                  <a
                    className="inline-block  font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                    href="#0"
                  >
                    Gradients
                  </a>
                  <div className="text-sm text-gray-500 italic">
                    129 collections
                  </div>
                </div>
              </div>
              <div className="swiper-slide h-auto flex flex-col">
                {/* Image */}
                <Image
                  className="w-full aspect-[7/4] object-cover"
                  src="/static/images/home/carousel-03.jpg"
                  width="259"
                  height="148"
                  alt="Carousel 03"
                />
                {/* White box */}
                <div className="grow bg-white px-4 pb-6">
                  {/* Avatars */}
                  <div className="flex items-start -space-x-3 -ml-0.5 mb-4 -mt-5">
                    <Image
                      className="rounded-full border-2 border-white box-content"
                      src="/static/images/home/carousel-avatar-09.jpg"
                      width="36"
                      height="36"
                      alt="Avatar 09"
                    />
                    <Image
                      className="rounded-full border-2 border-white box-content"
                      src="/static/images/home/carousel-avatar-08.jpg"
                      width="36"
                      height="36"
                      alt="Avatar 08"
                    />
                    <Image
                      className="rounded-full border-2 border-white box-content"
                      src="/static/images/home/carousel-avatar-10.jpg"
                      width="36"
                      height="36"
                      alt="Avatar 10"
                    />
                    <img
                      className="rounded-full border-2 border-white box-content"
                      src="/static/images/home/carousel-avatar-11.jpg"
                      width="36"
                      height="36"
                      alt="Avatar 11"
                    />
                  </div>
                  {/* Title */}
                  <a
                    className="inline-block  font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                    href="#0"
                  >
                    Liquid 3D
                  </a>
                  <div className="text-sm text-gray-500 italic">
                    49 collections
                  </div>
                </div>
              </div>
              <div className="swiper-slide h-auto flex flex-col">
                {/* Image */}
                <Image
                  className="w-full aspect-[7/4] object-cover"
                  src="/static/images/home/carousel-04.jpg"
                  width="259"
                  height="148"
                  alt="Carousel 04"
                />
                {/* White box */}
                <div className="grow bg-white px-4 pb-6">
                  {/* Avatars */}
                  <div className="flex items-start -space-x-3 -ml-0.5 mb-4 -mt-5">
                    <Image
                      className="rounded-full border-2 border-white box-content"
                      src="/static/images/home/carousel-avatar-18.jpg"
                      width="36"
                      height="36"
                      alt="Avatar 18"
                    />
                    <Image
                      className="rounded-full border-2 border-white box-content"
                      src="/static/images/home/carousel-avatar-08.jpg"
                      width="36"
                      height="36"
                      alt="Avatar 08"
                    />
                    <Image
                      className="rounded-full border-2 border-white box-content"
                      src="/static/images/home/carousel-avatar-01.jpg"
                      width="36"
                      height="36"
                      alt="Avatar 01"
                    />
                    <Image
                      className="rounded-full border-2 border-white box-content"
                      src="/static/images/home/carousel-avatar-11.jpg"
                      width="36"
                      height="36"
                      alt="Avatar 11"
                    />
                  </div>
                  {/* Title */}
                  <a
                    className="inline-block  font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                    href="#0"
                  >
                    Abstraction
                  </a>
                  <div className="text-sm text-gray-500 italic">
                    24 collections
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Arrows */}
          <div className="flex mt-12 space-x-4 justify-end">
            <button className="carousel-prev relative z-20 w-14 h-14 rounded-full flex items-center justify-center group bg-gray-700 hover:bg-blue-500 transition duration-150 ease-in-out">
              <span className="sr-only">Previous</span>
              <svg
                className="w-4 h-4 fill-gray-400 group-hover:fill-white transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-14 h-14 rounded-full flex items-center justify-center group bg-gray-700 hover:bg-blue-500 transition duration-150 ease-in-out">
              <span className="sr-only">Next</span>
              <svg
                className="w-4 h-4 fill-gray-400 group-hover:fill-white transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
