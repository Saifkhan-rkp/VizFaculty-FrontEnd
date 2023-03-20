import React from "react";
// import Chart from "chart.js";

export default function AttendenceForm() {
  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
          <h5 className="mb-1 my-5 text-xl font-medium text-gray-900 dark:text-white">
            Mark Attendence
          </h5>
        </div>

        <div className="flex flex-col items-center pb-5">
          <h5 className="mb-1 text-m font-small text-gray-900 dark:text-white my-2">
            Mode of Lecture ?
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
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Online Mode
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
              Offline Mode
            </label>
          </div>

          <div className="flex mt-4 space-x-3 md:mt-6">
            <a
              href="/"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </a>
            <a
              href="/"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
            >
              Undo
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
