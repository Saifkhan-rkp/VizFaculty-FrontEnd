import React from "react";

export default function Salary() {
  return (
    <>
      <div className="relative overflow-x-auto">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="/">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Salary Status
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-900 dark:text-white">
            The salary below is salary of current month so for ..
          </p>
          <h6 className="mb-2 py-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            7800 Rs
          </h6>
          <button
            type="button"
            class="px-8 py-3 text-white bg-blue-300 rounded focus:outline-none"
            disabled
          >
            Process Salary
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
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
          </button>
        </div>
      </div>
    </>
  );
}
