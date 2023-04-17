import React from "react";

const TimeTableData = [
  {
    DayNum: 1,
    Day: "Monday",
    "10:30-11:30": "Open-Elective-1 Faculty : NN , AS",
    "11:30-12:30": "Elective-2 Faculty : PJ , RG",
    "1-2": "Professional Skills : B1 Faculty : RG, H/W Lab : B2 Faculty : PU",
    "2-3": "Professional Skills : B1 Faculty : RG, H/W Lab : B2 Faculty : PU",
    "3:15-4:15": "Elective-3 Faculty : LB",
    "4:15-5:15": "None",
  },
  {
    DayNum: 2,
    Day: "Tuesday",
    "10:30-11:30": "Open-Elective-1 Faculty : NN , AS",
    "11:30-12:30": "Elective-2 Faculty : PJ , RG",
    "1-2": "Professional Skills : B2 Faculty : RG, H/W Lab : B3 Faculty : PU",
    "2-3": "Professional Skills : B2 Faculty : RG, H/W Lab : B3 Faculty : PU",
    "3:15-4:15": "Elective-3 Faculty : LB",
    "4:15-5:15": "None",
  },
  {
    DayNum: 3,
    Day: "Wednesday",
    "10:30-11:30": "Open-Elective-1 Faculty : NN , AS",
    "11:30-12:30": "Elective-2 Faculty : PJ , RG",
    "1-2": "Professional Skills : B3 Faculty : CB, H/W Lab : B4 Faculty : AG",
    "2-3": "Professional Skills : B3 Faculty : CB, H/W Lab : B4 Faculty : AG",
    "3:15-4:15": "Elective-3 Faculty : LB",
    "4:15-5:15": "None",
  },
  {
    DayNum: 4,
    Day: "Thursday",
    "10:30-11:30": "None",
    "11:30-12:30": "None",
    "1-2": "None",
    "2-3": "None",
    "3:15-4:15": "None",
    "4:15-5:15": "None",
  },
  {
    DayNum: 5,
    Day: "Friday",
    "10:30-11:30":
      "Professional Skills : B4 Faculty : RG, H/W Lab : B1 Faculty : AG, Compiler : B3 Faculty : NC",
    "11:30-12:30":
      "Professional Skills : B4 Faculty : RG, H/W Lab : B1 Faculty : AG, Compiler : B3 Faculty : NC",
    "1-2": "Compiler Design Faculty : NC",
    "2-3": "Compiler Design Faculty : NC",
    "3:15-4:15": "Compiler Design PR Faculty : NC",
    "4:15-5:15": "Compiler Design PR Faculty : NC",
  },

  {
    DayNum: 7,
    Day: "Saturday",
    "10:30-11:30": "Compiler Design Faculty : NC",
    "11:30-12:30": "Compiler Design Faculty : NC",
    "1-2": "Compiler Design PR : B1 Faculty : NC",
    "2-3": "Compiler Design PR : B1 Faculty : NC",
    "3:15-4:15": "Compiler Design PR : B4 Faculty : MG",
    "4:15-5:15": "Compiler Design PR : B4 Faculty : MG",
  },
  {
    DayNum: 0,
    Day: "Sunday",
    "10:30-11:30": "Intellectual Property Rights",
    "11:30-12:30": "Intellectual Property Rights",
    "1-2": "Economic Of It",
    "2-3": "Economic Of It",
    "3:15-4:15": "None",
    "4:15-5:15": "None",
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
                <td class="px-6 py-4">{data["3:15-4:15"]}</td>
                <td class="px-6 py-4">{data["4:15-5:15"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
