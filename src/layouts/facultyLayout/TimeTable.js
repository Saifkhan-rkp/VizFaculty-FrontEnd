import React from "react";

const TimeTableData = [
  {
    Day: "Monday",
    "10:30-11:30": "Open-Elective-1",
    "11:30-12:30": "Elective-2",
    "1-2": "Professional Skills : B1 , H/W Lab : B2",
    "2-3": "Professional Skills : B1 , H/W Lab : B2",
    "3:15-4-15": "Elective-3",
    "4:15-5:15": "",
  },
  {
    Day: "Tuesday",
    "10:30-11:30": "Open-Elective-1",
    "11:30-12:30": "Elective-2",
    "1-2": "Professional Skills : B2 , H/W Lab : B3",
    "2-3": "Professional Skills : B2 , H/W Lab : B3",
    "3:15-4-15": "Elective-3",
    "4:15-5:15": "",
  },
  {
    Day: "Wednesday",
    "10:30-11:30": "Open-Elective-1",
    "11:30-12:30": "Elective-2",
    "1-2": "Professional Skills : B3 , H/W Lab : B4",
    "2-3": "Professional Skills : B3 , H/W Lab : B4",
    "3:15-4-15": "Elective-3",
    "4:15-5:15": "",
  },
  {
    Day: "Thursday",
    "10:30-11:30": "",
    "11:30-12:30": "",
    "1-2": "",
    "2-3": "",
    "3:15-4-15": "",
    "4:15-5:15": "",
  },
  {
    Day: "Friday",
    "10:30-11:30": "Professional Skills : B4 , H/W Lab : B1 , Compiler : B3",
    "11:30-12:30": "Professional Skills : B4 , H/W Lab : B1 , Compiler : B3",
    "1-2": "Compiler Dasign",
    "2-3": "Compiler Design",
    "3:15-4-15": "Compiler Design PR",
    "4:15-5:15": "Compiler Design PR",
  },
  {
    Day: "Friday",
    "10:30-11:30": "Professional Skills : B4 , H/W Lab : B1 , Compiler : B3",
    "11:30-12:30": "Professional Skills : B4 , H/W Lab : B1 , Compiler : B3",
    "1-2": "Compiler Design",
    "2-3": "Compiler Design",
    "3:15-4-15": "Compiler Design PR : B4",
    "4:15-5:15": "Compiler Design PR : B4",
  },
  {
    Day: "Saturday",
    "10:30-11:30": "Compiler Design",
    "11:30-12:30": "Compiler Design",
    "1-2": "Compiler Design PR : B1",
    "2-3": "Compiler Design PR : B1",
    "3:15-4-15": "Compiler Design PR : B4",
    "4:15-5:15": "Compiler Design PR : B4",
  },
  {
    Day: "Sunday",
    "10:30-11:30": "Intellectual Property Rights",
    "11:30-12:30": "Intellectual Property Rights",
    "1-2": "Economic Of It",
    "2-3": "Economic Of It",
    "3:15-4-15": "",
    "4:15-5:15": "",
  },
];

export default function TimeTable() {
  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                DAY
              </th>
              <th scope="col" className="px-6 py-3">
                10:30-11:30
              </th>
              <th scope="col" className="px-6 py-3">
                11:30-12:30
              </th>
              <th scope="col" class="px-6 py-3">
                1:00-2:00
              </th>
              <th scope="col" className="px-6 py-3">
                2:00-3:00
              </th>
              <th scope="col" className="px-6 py-3">
                3:15-4:15
              </th>
              <th scope="col" className="px-6 py-3">
                4:15-5:15
              </th>
            </tr>
          </thead>
          <tbody>
            {TimeTableData.map((data) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data.Day}
                </th>
                <td class="px-6 py-4">{data["10:30-11:30"]}</td>
                <td class="px-6 py-4">{data["11:30-12:30"]}</td>
                <td class="px-6 py-4">{data["1-2"]}</td>
                <td class="px-6 py-4">{data["2-3"]}</td>
                <td class="px-6 py-4">{data["3:15-4-15"]}</td>
                <td class="px-6 py-4">{data["4:15-5:15"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
