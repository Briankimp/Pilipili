import React from "react";
import Image from "next/image";

const Carousel: React.FC = () => {
  return (
    <div className="relative w-full">
      {/* Carousel wrapper */}
      <div className="relative h-44 rounded-lg  md:h-96">
        {/* Item 1 */}
        <div className="hidden duration-700 ease-in-out bg-black-100">
          <Image
            width={500}
            height={500}
            src="https://www.pinterest.com/pin/636626097345165837/"
            className="absolute block w-full pl-5-translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
          <div>HeyHey</div>
        </div>
        {/* Item 2 */}
        <div className="hidden duration-700 ease-in-out bg-black-100">
          {/* <Image
            width={500}
            height={500}
            src="/uses/pizza.jpg"
            className="absolute block w-full pl-5-translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          /> */}
          <div>
            <h1>Hey</h1>
          </div>
        </div>
      </div>
      {/* Item 3 */}
      <div className="hidden duration-700 ease-in-out bg-black-100">
        <Image
          width={500}
          height={500}
          src="https://www.pinterest.com/pin/636626097345165837/"
          className="absolute block w-full pl-5-translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
        <div>Hey</div>
      </div>
      {/* Item 4 */}
      <div className="hidden duration-700 ease-in-out bg-black-100">
        <Image
          width={500}
          height={500}
          src="https://www.pinterest.com/pin/636626097345165837/"
          className="absolute block w-full pl-5-translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
        <div>Hey</div>
      </div>
      {/* Item 5 */}
      <div className="hidden duration-700 ease-in-out bg-black-100">
        {/* <Image
            width={500}
            height={500}
            src="/uses/pizza.jpg"
            className="absolute block w-full pl-5-translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          /> */}
        <div>Hey</div>
      </div>

      {/* Slider controls */}
      <>
        <button className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </>
    </div>
  );
};

export default Carousel;
