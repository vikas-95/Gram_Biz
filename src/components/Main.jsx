import React from "react";
import one from "/one.png";

const Main = () => {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Greenfields and a green environment are being cultivated.
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Singhtek pioneers agricultural advancement in India, leveraging
              blockchain to bridge the gap between farmers and investors. Our
              platform fosters financial inclusion for farmers while providing
              investors with rewarding lending prospects. With Singhtek, farmers
              gain access to crucial financial services, empowering them to
              thrive in a modern market landscape. Meanwhile, investors find
              lucrative opportunities to support agricultural growth and reap
              sustainable returns. Join us on our mission to revolutionize
              India's agricultural sector, driving prosperity and progress for
              all stakeholders involved.
            </p>
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Get started
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              className="object-cover w-full h-96 rounded-lg lg:h-auto"
              src={one}
              alt="mockup"
            />
          </div>
        </div>
      </section>
      <section>
        <div class="w-screen h-full dark:bg-gray-700">
          <div class="flex justify-center flex-wrap">
            <div
              class="border w-full max-w-sm md:w-1/2 lg:w-1/3 mx-3 rounded-lg shadow-lg mt-5 dark:shadow-blue-900 text-card-foreground  bg-white p-6"
              data-v0-t="card"
            >
              <div class="p-6 flex flex-col items-center justify-center space-y-2">
                <span class="relative flex h-10 w-10 shrink-0 overflow-hidden bg-green-500 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-white h-8 w-8"
                  >
                    <path d="M7 20h10"></path>
                    <path d="M10 20c5.5-2.5.8-6.4 3-10"></path>
                    <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"></path>
                    <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"></path>
                  </svg>
                </span>
                <h3 class="whitespace-nowrap tracking-tight text-2xl font-semibold text-gray-900">
                  Installation
                </h3>
              </div>
              <div class="p-6 mt-4 text-center">
                <p class="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
              <div class="items-center p-6 flex justify-center mt-4">
                <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 bg-gray-200 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-gray-600 h-6 w-6"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div
              class="border w-full max-w-sm md:w-1/2 lg:w-1/3 mx-3 rounded-lg shadow-lg mt-5 dark:shadow-blue-900 bg-[#4CAF50]  p-6 text-white"
              data-v0-t="card"
            >
              <div class="space-y-1.5 p-6 flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-[64px]"
                >
                  <path d="M3 4h9l1 7"></path>
                  <path d="M4 11V4"></path>
                  <path d="M8 10V4"></path>
                  <path d="M18 5c-.6 0-1 .4-1 1v5.6"></path>
                  <path d="m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1"></path>
                  <circle cx="7" cy="15" r=".5"></circle>
                  <circle cx="7" cy="15" r="5"></circle>
                  <path d="M16 18h-5"></path>
                  <circle cx="18" cy="18" r="2"></circle>
                </svg>
                <h3 class="whitespace-nowrap tracking-tight text-2xl font-bold mt-4">
                  Training Center
                </h3>
              </div>
              <div class="p-6 mt-4 text-center">
                <p class="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
              <div class="items-center p-6 flex justify-center mt-4">
                <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 bg-white text-[#4CAF50] rounded-full p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-[#4CAF50]"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div
              class="border w-full max-w-sm md:w-1/2 lg:w-1/3 mx-3 rounded-lg shadow-lg mt-5 dark:shadow-blue-900 text-card-foreground  bg-white p-6"
              data-v0-t="card"
            >
              <div class="p-6 flex flex-col items-center justify-center space-y-2">
                <span class="relative flex h-10 w-10 shrink-0 overflow-hidden bg-green-500 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-white h-8 w-8"
                  >
                    <path d="M7 20h10"></path>
                    <path d="M10 20c5.5-2.5.8-6.4 3-10"></path>
                    <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"></path>
                    <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"></path>
                  </svg>
                </span>
                <h3 class="whitespace-nowrap tracking-tight text-2xl font-semibold text-gray-900">
                  Installation
                </h3>
              </div>
              <div class="p-6 mt-4 text-center">
                <p class="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
              <div class="items-center p-6 flex justify-center mt-4">
                <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 bg-gray-200 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-gray-600 h-6 w-6"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
