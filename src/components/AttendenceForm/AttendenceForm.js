import React from "react";
// import Chart from "chart.js";

export default function AttendenceForm() {
  return (
    <>
      <div className="h-full w-full max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-5">
          <h5 className="mb-0 my-5 text-xl font-medium text-gray-1000 dark:text-white">
            Today's Schedule
          </h5>
        </div>

        <div class="grid grid-cols-2 gap-4 p-5">
          <div className="flex flex-col items-center pb-5">
            <h5 className="mb-1 text-m font-small text-gray-900 dark:text-white">
              Lectures
            </h5>

            <div className="flex items-center mb-4">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-radio-1"
                className="ml-2 my-10 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                10-12 Compiler Design Theory
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked
                id="default-radio-2"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-radio-2"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                3-5 Compiler Design Theory
              </label>
            </div>
          </div>

          <div className="flex flex-col items-center pb-5">
            <h5 className="mb-1 text-m font-small text-gray-900 dark:text-white">
              Practicals
            </h5>
            <div class="my-9 flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Default checkbox
              </label>
            </div>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <a
                href="/"
                className="content-center absolute bottom-1 justify-center items-center inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
