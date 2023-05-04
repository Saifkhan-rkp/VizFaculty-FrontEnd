import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../assets/styles/calendar.css";

export default function CardCalendar(props) {
  const [value, setValue] = useState(new Date());
  const handleDateChange = async (newDate) => {
    setValue(newDate);
    // setTimes(coachSchedule?.times ? coachSchedule?.times : []);
    // setTime(true);
  };
  return (
    <>
      console.log(new Date().getDay())
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
              {props.TimeTableData.map(
                (data, index) =>
                  data.DayNum === new Date().getDay() && (
                    <div className="my-2 border-b pb-4 border-gray-400 border-dashed">
                      <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
                        10:30-11:30
                      </p>
                      <p className="text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 pt-2">
                        {data["10:30-11:30"]}
                        <div className="my-2 border-b pb-4 border-gray-400 border-dashed"></div>
                        <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
                          11:30-12:30
                        </p>
                        {data["11:30-12:30"]}

                        <div className="my-2 border-b pb-4 border-gray-400 border-dashed"></div>
                        <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
                          1:00-2:00
                        </p>
                        {data["1-2"]}
                        <div className="my-2 border-b pb-4 border-gray-400 border-dashed"></div>
                        <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
                          2:00-3:00
                        </p>
                        {data["2-3"]}
                        <div className="my-2 border-b pb-4 border-gray-400 border-dashed"></div>
                        <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
                          3:15-4:15
                        </p>
                        {data["3:15-4:15"]}
                        <div className="my-2 border-b pb-4 border-gray-400 border-dashed"></div>
                        <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
                          4:15-5:15
                        </p>
                        {data["4:15-5:15"]}
                      </p>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
