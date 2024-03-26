import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import axios from 'axios';
import { getAuthData } from '../utils/utils';
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

function SingleFacultySalaryModel({ totalAmount = 0, id, range = {}, hidden, userDetail = {} }) {
  // const []
  // console.log(hidden);
  // console.log(id);
  const auth = getAuthData();
  const [flag, setFlag] = useState(false);
  const [attendenceData, setAttendenceData] = useState([]);
  useEffect(() => {
    if (flag) {
      axios.post(`${process.env.REACT_APP_API_KEY}/api/attendance/view/byDateRange`, {
        facultyId: id,
        ...range
      }, {
        headers: {
          authorization: `Bearer ${auth?.accessToken}`
        }
      }).then(res => {
        if (res.data?.success) {
          setAttendenceData(res.data?.attendances)
        }
      })
    }
  }, [flag, id, range, auth?.accessToken])

  const setPopup = () => {
    setFlag(!flag)
    // if (flag) {
    //   document.getElementById("POPUP").classList.add("hidden");
    // } else {
    //   document.getElementById("POPUP").classList.remove("hidden");
    // }
  };

  const downloadExcelFile = () => {
    const data = attendenceData?.map((data) => (
      data.attendance.map(att => (
        {
          Date: new Date(data.date).toDateString(),
          Day: data.day,
          Subject: att.subject,
          "Year/Branch": att.yearAndBranch,
          "Teaching Type": att.teachingType,
          "Time From": att.timeFrom,
          "Time To": att.timeTo,
          "Total Hours": att.totalHours,
          Rate: att.rate,
          Amount: att.amount
        }
      ))
    ));

    // console.log(data.flat())
    // const data =[{}]
    const worksheet = XLSX.utils.json_to_sheet(data.flat());
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Attendance");
    const dateRange = new Date(range?.dateFrom).toLocaleDateString().replace("/","-")+"_to_"+new Date(range?.dateTo).toLocaleDateString().replace("/","-")
    // Buffer to store the generated Excel file
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    saveAs(blob, `${userDetail?.name?.replace(" ", "_")}_Attendance_Data_${dateRange}.xlsx`);
  }
  // attendenceData.forEach(ele => totalSalary += ele.amount);

  // const findOcc = (arr, key) => {
  //   let arr2 = [];

  //   arr.forEach((att) => {
  //     att?.attendance.forEach((x)=>{
  //       if (arr2.some((val) => { return val[key] === x[key] })) {
  //         arr2.forEach((k) => {
  //           if (k[key] === x[key]) {
  //             k.total++
  //           }
  //         })

  //       } else {
  //         let a = {}
  //         a[key] = x[key]
  //         a.total = 1
  //         arr2.push(a);
  //       }
  //     })
  //     })
  //   // return arr2
  // }
  const teachingType = [];
  return (<>
    <button
      type="button"
      className="fas fa-eye fa-lg"
      style={{ color: "blue" }}
      onClick={setPopup}
    >
    </button>
    {flag
      &&
      <div id="POPUP" className="z-50 fixed w-full flex justify-center inset-0">
        <div onClick={setPopup} className="w-full h-full bg-transparent z-0 absolute inset-0" />
        <div className="mx-auto container md:h-screen sm:h-screen">
          <div className="flex items-center justify-center h-full w-full">
            <div className="bg-white rounded-md shadow overflow-y-auto fixed sm:h-auto w-9/12 lg:w-9/12 md:w-11/12 max-sm:w-11/12">
              <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-4 md:py-4 py-7 flex items-center justify-between">
                <p className="text-base font-semibold">Faculty Salary Details</p>
                <button onClick={setPopup} className="focus:outline-none">
                  <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 7L7 21" stroke="#A1A1AA" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 7L21 21" stroke="#A1A1AA" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <div className="container w-full h-full">

              </div>
              <div className="p-4 dark:bg-gray-800 flex-auto">
                {/* Code block starts */}
                <div className="bg-white dark:bg-gray-800 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between px-5 sm:px-10 shadow rounded-t">

                  <div className="flex items-center mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0">
                    <div className="relative w-12 h-12 rounded">
                      <img className="w-full h-full object-cover inset-0 absolute rounded" src={userDetail?.profilePhoto === "default" ? require("../assets/img/user_avtar.png") : "https://tuk-cdn.s3.amazonaws.com/assets/components/card_headings/ch_1.png"} alt="avatar" />
                    </div>
                    <div className="ml-2">
                      <h2 className="text-gray-800 dark:text-gray-100 text-sm font-bold">{userDetail?.name}</h2>
                      <p className="font-normal text-xs text-gray-600 dark:text-gray-400 cursor-pointer hover:text-gray-700">{userDetail?.contactNo}</p>
                    </div>
                  </div>
                  <div>
                    {/* <button className="font-normal bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-indigo-600 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300 rounded text-indigo-600 px-6 py-2 text-sm">Options</button> */}
                    <button onClick={downloadExcelFile} className="ml-2 sm:ml-3 font-normal focus:outline-none bg-indigo-700 dark:hover:bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 dark:bg-indigo-600 rounded text-white px-6 py-2 text-sm">Download Data</button>
                  </div>
                </div>
                {/* Code block ends */}
                {/* Chart */}
                {/* <div className="relative h-350-px"> */}
                {/* <canvas id="line-chart"></canvas> */}
                <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
                  <div className="flex items-center flex-1 space-x-4">
                    <h5>
                      <span className="text-gray-500">Total TH:</span>
                      <span className="dark:text-white">{teachingType?.find(ele => ele.teachingType === "TH")?.total}</span>
                    </h5>
                    <h5>
                      <span className="text-gray-500">Total PR:</span>
                      <span className="dark:text-white">{teachingType?.find(ele => ele.teachingType === "PR")?.total}</span>
                    </h5>
                    <h5>
                      <span className="text-gray-500">Total TU:</span>
                      <span className="dark:text-white">{ }</span>
                    </h5>
                    {/* <h5>
                    <span className="text-gray-500">All Products:</span>
                    <span className="dark:text-white">{ }</span>
                  </h5> */}
                    <h5>
                      <span className="text-gray-500">Total Amount: </span>
                      <span className="dark:text-white"><i className='fas fa-indian-rupee' style={{ color: 'gray' }} />{totalAmount}</span>
                    </h5>
                  </div>
                </div>

                <div className="relative h-350-px overflow-x-auto overflow-y-scroll shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          <div className="flex items-center">
                            Date
                            {/* <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a> */}
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Day
                        </th>
                        <th scope="col" className="px-6 py-3">
                          <div className="flex items-center">
                            Subject
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                          <div className="flex items-center">
                            Year/Branch
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Teaching Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Time From
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Time To
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Total Hours
                        </th>
                        <th scope="col" className="px-6 py-3">
                          rate
                        </th>
                        <th scope="col" className="px-6 py-3">
                          amount
                        </th>
                        {/* <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th> */}
                      </tr>
                    </thead>
                    <tbody className='h-96 overflow-y-auto'>
                      {
                        attendenceData.map(data => (
                          data.attendance.map(att => (
                            <tr name="attRows" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={att?._id}>
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
                        ))
                      }
                    </tbody>

                  </table>
                </div>

                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    }
  </>)
}
SingleFacultySalaryModel.defaultProps = {
  hidden: true,
  faculty: { name: "Jane Doe", email: "janedoe@mail.com", depatment: "CSE" },
  id: "ad4df7fdafd3ad7ad75d634fd746fa"
}
SingleFacultySalaryModel.propType = {
  hidden: PropTypes.bool,
  faculty: PropTypes.object,
  id: PropTypes.string
}

export default SingleFacultySalaryModel