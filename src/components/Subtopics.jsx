import React from "react";

const Subtopics = () => {
    return (
        <div>
            <div class="max-w-7xl mx-auto p-6 bg-white">
                <div class="grid grid-cols-2 gap-10">
                    <div class="rounded-lg overflow-hidden">
                        {/* <img
                            src="/vite.svg"
                            alt="Organic farming"
                            class="w-full h-full object-cover"
                            width="600"
                            height="500"
                            style="aspect-ratio: 600 / 500; object-fit: cover;"
                        /> */}
                    </div>
                    <div class="space-y-6">
                        <div class="space-y-2">
                            <h2 class="text-lg font-semibold text-gray-600 uppercase">
                                Why choose us
                            </h2>
                            <p class="text-4xl font-bold text-gray-800">
                                It’s excellent for the environment, and it’s
                                also good for your health.
                            </p>
                            <p class="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Ut elit tellus, luctus nec
                                ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="flex items-start space-x-4">
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
                                    class="text-green-500 h-6 w-6"
                                >
                                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                                </svg>
                                <div>
                                    <h3 class="font-semibold text-gray-800">
                                        Organic Product
                                    </h3>
                                    <p class="text-gray-600">
                                        Dolor praesent curabitur lacus faucibus
                                        duis ligula sapien per himenaeos.
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-4">
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
                                    class="text-green-500 h-6 w-6"
                                >
                                    <path d="M3 7V5c0-1.1.9-2 2-2h2"></path>
                                    <path d="M17 3h2c1.1 0 2 .9 2 2v2"></path>
                                    <path d="M21 17v2c0 1.1-.9 2-2 2h-2"></path>
                                    <path d="M7 21H5c-1.1 0-2-.9-2-2v-2"></path>
                                    <rect
                                        width="7"
                                        height="5"
                                        x="7"
                                        y="7"
                                        rx="1"
                                    ></rect>
                                    <rect
                                        width="7"
                                        height="5"
                                        x="10"
                                        y="12"
                                        rx="1"
                                    ></rect>
                                </svg>
                                <div>
                                    <h3 class="font-semibold text-gray-800">
                                        Certified Team Expert
                                    </h3>
                                    <p class="text-gray-600">
                                        Dolor praesent curabitur lacus faucibus
                                        duis ligula sapien per himenaeos.
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-4">
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
                                    class="text-green-500 h-6 w-6"
                                >
                                    <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                                    <line x1="12" x2="12" y1="2" y2="12"></line>
                                </svg>
                                <div>
                                    <h3 class="font-semibold text-gray-800">
                                        Green Energy
                                    </h3>
                                    <p class="text-gray-600">
                                        Dolor praesent curabitur lacus faucibus
                                        duis ligula sapien per himenaeos.
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-4">
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
                                    class="text-green-500 h-6 w-6"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                    <path d="M12 17h.01"></path>
                                </svg>
                                <div>
                                    <h3 class="font-semibold text-gray-800">
                                        24/7 Premium Support
                                    </h3>
                                    <p class="text-gray-600">
                                        Dolor praesent curabitur lacus faucibus
                                        duis ligula sapien per himenaeos.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subtopics;
