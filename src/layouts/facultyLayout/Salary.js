import React from "react";

export default function Salary() {
  return (
    <>
      <div className="relative overflow-x-auto bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <div className="px-4 md:px-10 py-4 md:py-7">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="py-2 uppercase text-slate-400 mb-1 text-xs font-semibold">
                Salary Status
              </h6>
            </div>
          </div>
          <h2 className="py-4 font-medium text-blue-700 dark:text-white">
            Check your current month salary here and keep track of it !!
          </h2>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-blue-700 dark:text-white">
              Salary Tracker
            </span>
            <span className="text-sm font-medium text-blue-700 dark:text-white">
              1300 Rs
            </span>
          </div>
          <div className="w-full bg-white-200 rounded-full h-2.5 dark:bg-white-700">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: "15%" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
