import React from "react";
// import Chart from "chart.js";

export default function AttendenceForm({ attendanceData = [], isSubmitted }) {
  return (
    // <>
    //   <div className="h-full w-full max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    //     <div className="flex flex-col items-center pb-5">
    //       <h5 className="mb-0 my-5 text-xl font-medium text-gray-1000 dark:text-white">
    //         Today's Schedule
    //       </h5>
    //     </div>

    //     <div class="grid grid-cols-2 gap-4 p-5">
    //       <div className="flex flex-col items-center pb-5">
    //         <h5 className="mb-1 text-m font-small text-gray-900 dark:text-white">
    //           Lectures
    //         </h5>

    //         <div className="flex items-center mb-4">
    //           <input
    //             id="default-radio-1"
    //             type="radio"
    //             value=""
    //             name="default-radio"
    //             className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    //           />
    //           <label
    //             htmlFor="default-radio-1"
    //             className="ml-2 my-10 text-sm font-medium text-gray-900 dark:text-gray-300"
    //           >
    //             10-12 Compiler Design Theory
    //           </label>
    //         </div>
    //         <div className="flex items-center">
    //           <input
    //             checked
    //             id="default-radio-2"
    //             type="radio"
    //             value=""
    //             name="default-radio"
    //             className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    //           />
    //           <label
    //             htmlFor="default-radio-2"
    //             className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    //           >
    //             3-5 Compiler Design Theory
    //           </label>
    //         </div>
    //       </div>

    //       <div className="flex flex-col items-center pb-5">
    //         <h5 className="mb-1 text-m font-small text-gray-900 dark:text-white">
    //           Practicals
    //         </h5>
    //         <div class="my-9 flex items-center mb-4">
    //           <input
    //             id="default-checkbox"
    //             type="checkbox"
    //             value=""
    //             class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    //           />
    //           <label
    //             htmlFor="default-checkbox"
    //             class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    //           >
    //             Default checkbox
    //           </label>
    //         </div>
    //         <div className="flex mt-4 space-x-3 md:mt-6">
    //           <a
    //             href="/"
    //             className="content-center absolute bottom-1 justify-center items-center inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //           >
    //             Submit
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 mt-10 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-slate-400 mb-1 text-xs font-semibold">
                Attendence
              </h6>
              <h2 className="uppercase text-slate-700 mb-10 text-xl font-semibold">
                Today's Schedule
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          <h2 className="mb-4 text-slate-700 font-semibold uppercase">
            Theory
          </h2>
          <div className="mb-10 grid grid-cols-2 divide-x">
            {attendanceData?.schedule.map((attendance, idx) => attendance.teachingType === "TH" ? (
              <div key={idx}>
                <div className="flex items-center ps-4 border border-gray-200 rounded ">
                  <input id="bordered-checkbox-1" type="checkbox" value="" name="THCheckbox" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                  {/* <label htmlFor="bordered-checkbox-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label> */}
                  <div class="w-full py-2 ms-2 text-sm">
                    <label htmlFor="bordered-checkbox-1" class="font-medium text-gray-900 ">
                      {attendance?.subject}
                      <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500"> {attendance?.timeFrom + " - " + attendance?.timeTo}</p>
                    </label>
                  </div>
                </div>
              </div>
            ) : "")}
          </div>
          <div className="relative h-350-px">
            <h2 className="mb-4 text-slate-700 font-semibold uppercase">
              Practical
            </h2>
            <div className="mb-10 grid grid-cols-2 divide-x">
              {attendanceData?.schedule.map((attendance, idx) => attendance.teachingType === "PR" ? (
                <div key={idx}>
                  <div className="flex items-center ps-4 border border-gray-200 rounded ">
                    <input id="bordered-checkbox-1" type="checkbox" value="" name="PRCheckbox" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                    {/* <label htmlFor="bordered-checkbox-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label> */}
                    <div class="w-full py-2 ms-2 text-sm">
                      <label htmlFor="bordered-checkbox-1" class="font-medium text-gray-900 ">
                        {attendance?.subject}
                        <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500"> {attendance?.timeFrom + " - " + attendance?.timeTo}</p>
                      </label>
                    </div>
                  </div>
                </div>
              ) : "")}
            </div>
            <div>
              <h2 className="mb-5 text-slate-700 font-semibold uppercase">
                Mode
              </h2>
              <div className="grid grid-cols-2 divide-x">
                <div>
                  <input
                    id="default-radio-mode-1"
                    type="radio"
                    value=""
                    name="mode-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-radio-mode-1"
                    className="ml-2 text-sm font-medium text-black-900 dark:text-black-300"
                  >
                    Online
                  </label>
                </div>
                <div>
                  <input
                    checked
                    id="default-radio-mode-2"
                    type="radio"
                    value=""
                    name="mode-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-radio-mode-2"
                    className="ml-2 text-sm font-medium text-black-900 dark:text-black-300"
                  >
                    Offline
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex content-center items-center justify-center bottom-3">
            <a
              href="/"
              className="mb-5 content-center mx-50 bottom-20 justify-center inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
