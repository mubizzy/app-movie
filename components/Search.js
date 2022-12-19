import React from "react";

const Search = () => {
  return (
    <section className="py-2 px-6">
      <p>Search</p>
      <form className="flex items-center">
        <label for="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
          <input
            type="text"
            id="simple-search"
            class="bg-white border  text-sm  focus:ring-black focus:border-blue-500 block w-full pl-10 p-2.5   dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
        </div>
      </form>

      <div id="default-carousel" class="relative" data-carousel="static">
        {/* <!-- Carousel wrapper --> */}
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* <!-- Item 1 --> */}
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <span class="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">
              First Slide
            </span>
            <p>sss</p>
            <img
              src="/docs/images/carousel/carousel-1.svg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* <!-- Item 2 --> */}
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <p>hdhd</p>
            <img
              src="/docs/images/carousel/carousel-2.svg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
            <p>Hello</p>
          </div>
          {/* <!-- Item 3 --> */}
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/docs/images/carousel/carousel-3.svg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        {/* <!-- Slider indicators --> */}
        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
        </div>
        {/* <!-- Slider controls --> */}
        <button
          type="button"
          class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </section>
  );
};

export default Search;
