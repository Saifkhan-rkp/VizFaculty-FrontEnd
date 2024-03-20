import axios from "axios";
import React, { useEffect, useState } from "react";
import { getAuthData } from "../../utils/utils";
import toast from "react-hot-toast";
// import Chart from "chart.js";

export default function AttendenceForm({ attendanceData = [], isSubmitted, refetch = () => { }, isFormLoading }) {
  const daysArray = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const auth = getAuthData();
  const today = new Date();
  const [isLoading, setIsLoading] = useState(false);
  const [attendanceBody, setAttendanceBody] = useState({
    day: daysArray[today.getDay()],
    date: today.toDateString(),//today.getDate()+"-"+(today.getMonth()+1)+"-"+today.getFullYear(),
    attendanceArray: []
  });
  // console.log(attendanceBody);
  useEffect(() => {
    if (attendanceData?.attendance && attendanceData?.attendance?.attendance.length > 0) {
      setAttendanceBody(state => ({
        day: state.day,
        date: state.date,
        attendanceArray: attendanceData?.attendance?.attendance || []
      }))
    }
  }, [isFormLoading])
  const onHandleChange = (e, body) => {
    const { checked } = e.target;
    // console.log(checked, body);

    if (checked) {
      const attendanceArray = [...attendanceBody.attendanceArray, body]
      setAttendanceBody(state => ({
        ...state,
        attendanceArray
      }));
    } else {
      setAttendanceBody(state => ({
        ...state,
        attendanceArray: state.attendanceArray.filter((attd) => attd._id !== body._id)
      }));
    }
  }
  const onSubmitAttendance = () => {
    if (attendanceBody.attendanceArray.length > 0) {
      setIsLoading(true);
      axios.post(`${process.env.REACT_APP_API_KEY}/api/attendance`, attendanceBody, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${auth?.accessToken}`,
        }
      }).then(res => {
        if (res.data?.success) {
          toast.success(res.data?.message);
        }
        setIsLoading(false);
        refetch();
        console.log(res.data);
      }).catch(err => {
        setIsLoading(false);
        console.log(err);
        toast.error(err.message);
      });
    }
    else {
      toast.error("No Subject selected..!")
    }
  }
  // useEffect(()=>{console.log(attendanceBody);},[attendanceBody])
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 mt-10 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-slate-400 mb-1 text-xs font-semibold">
                Attendance
              </h6>
              <h2 className="uppercase text-slate-700 mb-10 text-xl font-semibold">
                Today's Schedule
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          <h2 className="mb-4 text-slate-700 text-lg uppercase">
            Theory
          </h2>
          <div className="mb-10 grid grid-cols-2 divide-x">
            {!isFormLoading ? attendanceData?.schedule.map((attendance, idx) => attendance.teachingType === "TH" ? (
              <div key={attendance?._id}>
                <div className="flex items-center ps-4 border border-gray-200 rounded ">
                  <input id={`th-checkbox-${idx}`} type="checkbox" onChange={(e) => { onHandleChange(e, attendance) }} value="" name="THCheckbox" defaultChecked={attendance.marked} className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                  {/* <label htmlFor="bordered-checkbox-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label> */}
                  <div className="w-full py-2 ms-2 text-sm">
                    <label htmlFor={`th-checkbox-${idx}`} className="font-medium text-gray-900 ">
                      {attendance?.subject}
                      {attendance?.marked
                        ? <i className="fa fa-check-circle" style={{ color: "green" }}></i>
                        : <i className="fa fa-times-circle" style={{ color: "red" }}></i>
                      }
                      <p id="helper-checkbox-text" className="text-xs font-normal text-gray-500"> {attendance?.timeFrom + " - " + attendance?.timeTo}</p>
                    </label>
                  </div>
                </div>
              </div>
            ) : "")
              :
              <div className="flex items-center ps-4 border border-gray-200 rounded ">
                <input type="checkbox" value="" name="skeleton" disabled className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                {/* <label htmlFor="bordered-checkbox-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label> */}
                <div className="w-full py-2 ms-2 text-sm">
                  <div>
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                    <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  </div>
                </div>
              </div>
            }
          </div>
          <div className="relative h-350-px">
            <h2 className="mb-4 text-slate-700 text-lg uppercase">
              Practical
            </h2>
            <div className="mb-10 grid grid-cols-2 divide-x">
              {!isFormLoading ? attendanceData?.schedule.map((attendance, idx) => attendance.teachingType === "PR" ? (
                <div key={attendance?._id}>
                  <div className="flex items-center ps-4 border border-gray-200 rounded ">
                    <input id={`pr-checkbox-${idx}`} type="checkbox" onChange={(e) => { onHandleChange(e, attendance) }} value="" name="PRCheckbox" defaultChecked={attendance.marked} className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                    {/* <label htmlFor="bordered-checkbox-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label> */}
                    <div className="w-full py-2 ms-2 text-sm">
                      <label htmlFor={`pr-checkbox-${idx}`} className="font-medium text-gray-900 ">
                        {attendance?.subject}
                        {attendance?.marked
                          ? <i className="fa fa-check-circle" style={{ color: "green" }}></i>
                          : <i className="fa fa-times-circle" style={{ color: "red" }}></i>
                        }
                        <p id="helper-checkbox-text" className="text-xs font-normal text-gray-500"> {attendance?.timeFrom + " - " + attendance?.timeTo}</p>
                      </label>
                    </div>
                  </div>
                </div>
              ) : "")
                :
                <div className="flex items-center ps-4 border border-gray-200 rounded ">
                  <input type="checkbox" value="" name="skeleton" disabled className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                  {/* <label htmlFor="bordered-checkbox-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label> */}
                  <div className="w-full py-2 ms-2 text-sm">
                    <div>
                      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                      <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                  </div>
                </div>
              }
            </div>
            <div>
              <h2 className="mb-4 text-slate-700 text-lg uppercase">
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
                    id="default-radio-mode-2"
                    type="radio"
                    value=""
                    name="mode-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    defaultChecked
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
            <button
              type="button"
              onClick={onSubmitAttendance}
              className="mb-5 content-center mx-50 bottom-20 justify-center inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              disabled={isLoading}
            >
              {!isLoading ? "Submit" : "Submitting..."}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
