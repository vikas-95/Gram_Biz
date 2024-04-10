import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useStateContext } from "../context/ContextProvider";

const Dashboard = () => {
  const { addr } = useStateContext();
  const [userType, setUserType] = useState(true);
  const handleToggle = () => {
    setUserType(!userType);
  };

  return (
    <>
      <div>
        <Navbar />
        <div>
          <label class="flex justify-center items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              class="sr-only peer"
              onClick={handleToggle}
            />
            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 px-2">
              Change user type
            </span>
            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>

          {userType ? (
            <section class="bg-gray-50 dark:bg-gray-900">
              <div class="flex flex-col items-center justify-center px-6 py-4 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div class="p-4 space-y-3 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Investor
                    </h1>
                    <p class="text-sm text-gray-500 dark:text-gray-400">{addr}</p>
                    <form class="space-y-4 md:space-y-6" action="#">
                      <div>
                        <label
                          for="text"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Amount
                        </label>
                        <input
                          type="text"
                          name="text"
                          id="text"
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Amount"
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          for="text"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Amount
                        </label>
                        <input
                          type="text"
                          name="text"
                          id="text"
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Amount"
                          required=""
                        />
                      </div>

                      <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          List of Farmers
                        </h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">
                          <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                          </ul>
                          <a href="#">View All</a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <section class="bg-gray-50 dark:bg-gray-900">
              <div class="flex flex-col items-center justify-center px-6 py-4 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div class="p-4 space-y-3 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Farmers
                    </h1>
                    <p class="text-sm text-gray-500 dark:text-gray-400">{addr}</p>
                    <form class="space-y-4 md:space-y-6" action="#">
                      <div>
                        <label
                          for="text"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Amount
                        </label>
                        <input
                          type="text"
                          name="text"
                          id="text"
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Amount"
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          for="text"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Amount
                        </label>
                        <input
                          type="text"
                          name="text"
                          id="text"
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Amount"
                          required=""
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
