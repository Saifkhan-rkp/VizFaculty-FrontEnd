import React from "react";

const attendenceData = [
  {
    date: "01-11-2022",
    day: "TUE",
    subject: "CW- I",
    yearAndBranch: "2nd yr,CSE",
    teachingType: "PR",
    timeFrom: "10:30",
    timeTo: "12:30",
    totalHours: "2HRS",
    rate: 300,
    amount: 600,
  },
  {
    date: "01-11-2022",
    day: "TUE",
    subject: "CA & DS",
    yearAndBranch: "2nd yr,CSE",
    teachingType: "TH",
    timeFrom: "02:00",
    timeTo: "03:00",
    totalHours: "1HR",
    rate: 600,
    amount: 600,
  },
  {
    date: "01-11-2022",
    day: "TUE",
    subject: "DW & M",
    yearAndBranch: "4th yr,CSE",
    teachingType: "PR",
    timeFrom: "03:15",
    timeTo: "05:15",
    totalHours: "2HRS",
    rate: 300,
    amount: 600,
  },
  {
    date: "02-11-2022",
    day: "WED",
    subject: "CA & DS",
    yearAndBranch: "2nd yr,CSE",
    teachingType: "TH",
    timeFrom: "11:30",
    timeTo: "12:30",
    totalHours: "1HR",
    rate: 600,
    amount: 600,
  },
  {
    date: "02-11-2022",
    day: "WED",
    subject: "CW- I",
    yearAndBranch: "2nd yr,CSE",
    teachingType: "PR",
    timeFrom: "01:00",
    timeTo: "03:00",
    totalHours: "2HRS",
    rate: 300,
    amount: 600,
  },
  {
    date: "03-11-2022",
    day: "THU",
    subject: "CW- I",
    yearAndBranch: "2nd yr,CSE",
    teachingType: "PR",
    timeFrom: "10:30",
    timeTo: "12:30",
    totalHours: "2HRS",
    rate: 300,
    amount: 600,
  },
  {
    date: "04-11-2022",
    day: "FRI",
    subject: "CA & DS",
    yearAndBranch: "2nd yr,CSE",
    teachingType: "TH",
    timeFrom: "01:00",
    timeTo: "02:00",
    totalHours: "1HR",
    rate: 600,
    amount: 600,
  },
  {
    date: "07-11-2022",
    day: "MON",
    subject: "CA & DS",
    yearAndBranch: "2nd yr,CSE",
    teachingType: "TH",
    timeFrom: "02:00",
    timeTo: "03:00",
    totalHours: "1HR",
    rate: 600,
    amount: 600,
  },
  {
    date: "07-11-2022",
    day: "MON",
    subject: "DW & M",
    yearAndBranch: "4th yr,CSE",
    teachingType: "PR",
    timeFrom: "03:15",
    timeTo: "05:15",
    totalHours: "2HRS",
    rate: 300,
    amount: 600,
  },
  {
    date: "09-11-2022",
    day: "WED",
    subject: "CA & DS",
    yearAndBranch: "2nd yr,CSE",
    teachingType: "TH",
    timeFrom: "11:30",
    timeTo: "12:30",
    totalHours: "1HR",
    rate: 600,
    amount: 600,
  },
  {
    date: "09-11-2022",
    day: "WED",
    subject: "CW- I",
    yearAndBranch: "2nd yr,CSE",
    teachingType: "PR",
    timeFrom: "01:00",
    timeTo: "03:00",
    totalHours: "2HRS",
    rate: 300,
    amount: 600,
  },
  {
    date: "10-11-2022",
    day: "THU",
    subject: "CW- I",
    yearAndBranch: "2nd yr,CSE",
    teachingType: "PR",
    timeFrom: "10:30",
    timeTo: "12:30",
    totalHours: "2HRS",
    rate: 300,
    amount: 600,
  },
  {
    date: "11-11-2022",
    day: "FRI",
    subject: "CA & DS",
    yearAndBranch: "2nd yr,CSE",
    teachingType: "TH",
    timeFrom: "01:00",
    timeTo: "02:00",
    totalHours: "1HR",
    rate: 600,
    amount: 600,
  },
  {
    date: "14-11-2022",
    day: "MON",
    subject: "CA & DS",
    yearAndBranch: "2nd yr,CSE",
    teachingType: "TH",
    timeFrom: "02:00",
    timeTo: "03:00",
    totalHours: "1HR",
    rate: 600,
    amount: 600,
  },
  {
    date: "14-11-2022",
    day: "MON",
    subject: "DW & M",
    yearAndBranch: "4th yr,CSE",
    teachingType: "PR",
    timeFrom: "03:15",
    timeTo: "05:15",
    totalHours: "2HRS",
    rate: 300,
    amount: 600,
  },
  {
    date: "15-11-2022",
    day: "TUE",
    subject: "CW- I",
    yearAndBranch: "2nd yr,CSE",
    teachingType: "PR",
    timeFrom: "10:30",
    timeTo: "12:30",
    totalHours: "2HRS",
    rate: 300,
    amount: 600,
  },
  {
    date: "15-11-2022",
    day: "TUE",
    subject: "CA & DS",
    yearAndBranch: "2nd yr,CSE",
    teachingType: "TH",
    timeFrom: "02:00",
    timeTo: "03:00",
    totalHours: "1HR",
    rate: 600,
    amount: 600,
  },
  {
    date: "15-11-2022",
    day: "TUE",
    subject: "DW & M",
    yearAndBranch: "4th yr,CSE",
    teachingType: "PR",
    timeFrom: "03:15",
    timeTo: "05:15",
    totalHours: "2HRS",
    rate: 300,
    amount: 600,
  },
  {
    date: "16-11-2022",
    day: "WED",
    subject: "CA & DS",
    yearAndBranch: "2nd yr,CSE",
    teachingType: "TH",
    timeFrom: "11:30",
    timeTo: "12:30",
    totalHours: "1HR",
    rate: 600,
    amount: 600,
  },
  {
    date: "16-11-2022",
    day: "WED",
    subject: "CW- I",
    yearAndBranch: "2nd yr,CSE",
    teachingType: "PR",
    timeFrom: "01:00",
    timeTo: "03:00",
    totalHours: "2HRS",
    rate: 300,
    amount: 600,
  },
  {
    date: "17-11-2022",
    day: "THU",
    subject: "CW- I",
    yearAndBranch: "2nd yr,CSE",
    teachingType: "PR",
    timeFrom: "10:30",
    timeTo: "12:30",
    totalHours: "2HRS",
    rate: 300,
    amount: 600,
  },
  {
    date: "18-11-2022",
    day: "FRI",
    subject: "CA & DS",
    yearAndBranch: "2nd yr,CSE",
    teachingType: "TH",
    timeFrom: "01:00",
    timeTo: "02:00",
    totalHours: "1HR",
    rate: 600,
    amount: 600,
  },
  {
    date: "21-11-2022",
    day: "MON",
    subject: "CA & DS",
    yearAndBranch: "2nd yr,CSE",
    teachingType: "TH",
    timeFrom: "02:00",
    timeTo: "03:00",
    totalHours: "1HR",
    rate: 600,
    amount: 600,
  },
  {
    date: "21-11-2022",
    day: "MON",
    subject: "DW & M",
    yearAndBranch: "4th yr,CSE",
    teachingType: "PR",
    timeFrom: "03:15",
    timeTo: "05:15",
    totalHours: "2HRS",
    rate: 300,
    amount: 600,
  },
  {
    date: "22-11-2022",
    day: "TUE",
    subject: "CW- I",
    yearAndBranch: "2nd yr,CSE",
    teachingType: "PR",
    timeFrom: "10:30",
    timeTo: "12:30",
    totalHours: "2HRS",
    rate: 300,
    amount: 600,
  },
  {
    date: "22-11-2022",
    day: "TUE",
    subject: "CA & DS",
    yearAndBranch: "2nd yr,CSE",
    teachingType: "TH",
    timeFrom: "02:00",
    timeTo: "03:00",
    totalHours: "1HR",
    rate: 600,
    amount: 600,
  },
  {
    date: "22-11-2022",
    day: "TUE",
    subject: "DW & M",
    yearAndBranch: "4th yr,CSE",
    teachingType: "PR",
    timeFrom: "03:15",
    timeTo: "05:15",
    totalHours: "2HRS",
    rate: 300,
    amount: 600,
  },
  {
    date: "23-11-2022",
    day: "WED",
    subject: "CA & DS",
    yearAndBranch: "2nd yr,CSE",
    teachingType: "TH",
    timeFrom: "11:30",
    timeTo: "12:30",
    totalHours: "1HR",
    rate: 600,
    amount: 600,
  },
  {
    date: "23-11-2022",
    day: "WED",
    subject: "CW- I",
    yearAndBranch: "2nd yr,CSE",
    teachingType: "PR",
    timeFrom: "01:00",
    timeTo: "03:00",
    totalHours: "2HRS",
    rate: 300,
    amount: 600,
  },
  {
    date: "24-11-2022",
    day: "THU",
    subject: "CW- I",
    yearAndBranch: "2nd yr,CSE",
    teachingType: "PR",
    timeFrom: "10:30",
    timeTo: "12:30",
    totalHours: "2HRS",
    rate: 300,
    amount: 600,
  },
  {
    date: "25-11-2022",
    day: "FRI",
    subject: "CA & DS",
    yearAndBranch: "2nd yr,CSE",
    teachingType: "TH",
    timeFrom: "01:00",
    timeTo: "02:00",
    totalHours: "1HR",
    rate: 600,
    amount: 600,
  },
  {
    date: "29-11-2022",
    day: "TUE",
    subject: "CA & DS",
    yearAndBranch: "2nd yr,CSE",
    teachingType: "TH",
    timeFrom: "02:00",
    timeTo: "03:00",
    totalHours: "1HR",
    rate: 600,
    amount: 600,
  },
];

export default function Attendance() {
  return (
    <>
      <div className="relative overflow-x-auto bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <div className="px-4 md:px-10 py-4 md:py-7">
          <div className="flex items-center justify-between">
            <div className="text-white bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800  dark:border-gray-700py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 cursor-pointer rounded">
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
              className="text-white bg-gray-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-gray-700 dark:border-gray-700"
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
            {attendenceData.map((data) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data.date}
                </th>
                <td class="px-6 py-4">{data.day}</td>
                <td class="px-6 py-4">{data.subject}</td>
                <td class="px-6 py-4">{data.yearAndBranch}</td>
                <td class="px-6 py-4">{data.teachingType}</td>
                <td class="px-6 py-4">{data.timeFrom}</td>
                <td class="px-6 py-4">{data.timeTo}</td>
                <td class="px-6 py-4">{data.totalHours}</td>
                <td class="px-6 py-4">{data.rate}</td>
                <td class="px-6 py-4">{data.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
