import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../assets/styles/calendar.css";

export default function CardCalendar() {
  const [value, setValue] = useState(new Date());
  const handleDateChange = async (newDate) => {
    setValue(newDate);
    // setTimes(coachSchedule?.times ? coachSchedule?.times : []);
    // setTime(true);
  };
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-slate-700 w-full mb-6 shadow-lg rounded">
        <div className="p-4 flex-auto">
          <div className="px-4 flex items-center justify-evenly">
            <h1 className="text-md font-bold dark:text-gray-100 text-gray-800">
              My Calendar
            </h1>
          </div>
          <Calendar
            value={value}
            onChange={handleDateChange}
            minDate={new Date()}
            defaultValue={[new Date(2023, 4, 5), new Date(2023, 4, 9)]}
          />
          <div className="py-3 px-5 dark:bg-gray-700 bg-gray-50 rounded-b">
            <div className="px-4">
              <div className="border-b pb-4 border-gray-400 border-dashed">
                <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
                  9:00 AM
                </p>
                <p className="text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 pt-2">
                  Zoom call with design team
                </p>
                <p className="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">
                  Discussion on UX sprint and Wireframe review
                </p>
              </div>
              <div className="border-b pb-4 border-gray-400 border-dashed pt-5">
                <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
                  10:00 AM
                </p>
                <p className="text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 pt-2">
                  Orientation session with new hires
                </p>
              </div>
              <div className="border-b pb-4 border-gray-400 border-dashed pt-5">
                <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
                  9:00 AM
                </p>
                <p className="text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 pt-2">
                  Zoom call with design team
                </p>
                <p className="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">
                  Discussion on UX sprint and Wireframe review
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
