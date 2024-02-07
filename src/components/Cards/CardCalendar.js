import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../assets/styles/calendar.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getAuthData } from "../../utils/utils";

export default function CardCalendar(props) {
  const [value, setValue] = useState(new Date());
  const handleDateChange = async (newDate) => {
    setValue(newDate);
    // setTimes(coachSchedule?.times ? coachSchedule?.times : []);
    // setTime(true);
  };
  const { data: mySchedule, isLoading } = useQuery(["mySchedule", value], () => axios.get(`${process.env.REACT_APP_API_KEY}/api/faculty/schedule/${value?.getDay()}`, {
    headers: {
      authorization: `Bearer ${getAuthData()?.accessToken}`,
    },
  }).then(res => res?.data));

  console.log(mySchedule);
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
            // value={value}
            onChange={handleDateChange}
            minDate={new Date()}
          // defaultValue={[new Date(2023, 4, 5), new Date(2023, 4, 9)]}
          />
          <div className="py-3 px-5 dark:bg-gray-700 bg-gray-50 rounded-b">
            <div className="px-4">
              <div className="my-2 border-b pb-4 border-gray-400 border-dashed">
                {!isLoading && mySchedule?.schedules?.map(
                  (data, index) =>
                  (<>
                    {/* <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
                      10:30-11:30
                    </p> */}
                    <p className="text-lg font-medium leading-5 text-gray-800 dark:text-gray-100">

                      <div className="my-2 border-b pb-4 border-gray-400 border-dashed"></div>
                      <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
                        {data?.timeFrom + " - " + data?.timeTo}
                      </p>
                      {data?.teachingType + " : " + data?.subject}
                    </p>
                  </>
                  )
                )}
                {!isLoading && !mySchedule?.schedules.length > 0 &&
                  <p className="text-lg font-medium leading-5 text-gray-800 dark:text-gray-100">
                    *Seems no schedules for today..!
                  </p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
