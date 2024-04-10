import React from "react";

const Numbers = () => {
    return (
        <div>
            <section class="rounded-lg shadow-2xl bg-white dark:bg-gray-900 my-10">
                <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                    <dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-4 dark:text-white">
                        <div class="px-3 border-r border-gray-200 dark:border-gray-700">
                            <div class="flex flex-col items-center justify-center">
                                <dt class="mb-2 text-3xl md:text-4xl font-extrabold">
                                    27+
                                </dt>
                                <dd class="font-light text-gray-500 dark:text-gray-400">
                                    Countries
                                </dd>
                            </div>
                        </div>
                        <div class="px-3 border-r border-gray-200 dark:border-gray-700">
                            <div class="flex flex-col items-center justify-center">
                                <dt class="mb-2 text-3xl md:text-4xl font-extrabold">
                                    2.7M+
                                </dt>
                                <dd class="font-light text-gray-500 dark:text-gray-400">
                                    Heactares Field
                                </dd>
                            </div>
                        </div>
                        <div class="px-3 border-r border-gray-200 dark:border-gray-700">
                            <div class="flex flex-col items-center justify-center">
                                <dt class="mb-2 text-3xl md:text-4xl font-extrabold">
                                    87K+
                                </dt>
                                <dd class="font-light text-gray-500 dark:text-gray-400">
                                    Happy Farm's
                                </dd>
                            </div>
                        </div>
                        <div class="px-3 ">
                            <div class="flex flex-col items-center justify-center">
                                <dt class="mb-2 text-3xl md:text-4xl font-extrabold">
                                    27+
                                </dt>
                                <dd class="font-light text-gray-500 dark:text-gray-400">
                                    Years of Experience
                                </dd>
                            </div>
                        </div>
                    </dl>
                </div>
            </section>
        </div>
    );
};

export default Numbers;
