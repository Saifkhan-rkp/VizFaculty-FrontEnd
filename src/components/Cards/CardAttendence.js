import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { getAuthData } from "../../utils/utils";

export default function CardAttendence(props) {
  const auth = getAuthData();
  const { data: attendanceData, isLoading, isError, refetch } = useQuery(["attendanceData"], () => axios.get(`${process.env.REACT_APP_API_KEY}/api/attendance/by-month/${(new Date().getMonth() + 1)}`,
    {
      headers: {
        authorization: `Bearer ${auth?.accessToken}`
      }
    })
    .then(res => res.data));

  // console.log(attendanceData)
  return (
    <>
      <div className="relative overflow-x-auto bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <div className="px-4 md:px-10 py-4 md:py-7">
          <div className="flex items-center justify-between">
            <div className="text-white bg-gray-800 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800  dark:border-gray-700py-3 px-4 flex items-center font-medium leading-none cursor-pointer ">
              <p>Filter By:</p>
              <select className="focus:outline-none bg-transparent ml-1">
                <option className="text-sm text-indigo-800">
                  Current Month
                </option>
                <option className="text-sm text-indigo-800">Last Month</option>
                <option className="text-sm text-indigo-800">
                  Last 3 Months
                </option>
              </select>
            </div>
            <button
              type="button"
              class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-1000 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Download
            </button>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Day
              </th>
              <th scope="col" className="px-6 py-3">
                Subject
              </th>
              <th scope="col" class="px-6 py-3">
                Year/Branch
              </th>
              <th scope="col" className="px-6 py-3">
                teachingType
              </th>
              <th scope="col" className="px-6 py-3">
                timeFrom
              </th>
              <th scope="col" className="px-6 py-3">
                timeTo
              </th>
              <th scope="col" className="px-6 py-3">
                totalHours
              </th>
              <th scope="col" className="px-6 py-3">
                rate
              </th>
              <th scope="col" className="px-6 py-3">
                amount
              </th>
            </tr>
          </thead>
          <tbody>
            {!isLoading && attendanceData?.data.length===0 && <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"> No Attendence Data found</tr>}
            {!isLoading && attendanceData?.data.map((data) => (
              data.attendance.map(att => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={att?._id}>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {new Date(data.date).toDateString()}
                  </th>
                  <td class="px-6 py-4">{data.day}</td>
                  <td class="px-6 py-4">{att.subject}</td>
                  <td class="px-6 py-4">{att.yearAndBranch}</td>
                  <td class="px-6 py-4">{att.teachingType}</td>
                  <td class="px-6 py-4">{att.timeFrom}</td>
                  <td class="px-6 py-4">{att.timeTo}</td>
                  <td class="px-6 py-4">{att.totalHours}</td>
                  <td class="px-6 py-4">{att.rate}</td>
                  <td class="px-6 py-4">{att.amount}</td>
                </tr>
              ))
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
