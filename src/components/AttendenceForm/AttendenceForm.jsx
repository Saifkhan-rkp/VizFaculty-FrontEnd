import axios from "axios";
import React, { useEffect, useState } from "react";
import { getAuthData } from "../../utils/utils";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
// import Chart from "chart.js";

export default function AttendenceForm({ attendanceData = { schedule: [], transfered: [] }, refetch = () => { }, isFormLoading }) {
  const daysArray = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const mySubjects = useSelector(state => state.faculty?.subjects)
  const auth = getAuthData();
  const today = new Date();
  const [isLoading, setIsLoading] = useState(false);
  const [isTrasnferLoading, setTranferLoading] = useState(false);
  const [selectedSubjects, setSelectedSubjects] = useState({});
  const [errors, setErrors] = useState({ transferError: {}, attendanceError: {} });
  const [isTransfer, setIsTransfer] = useState(false);
  const [faculties, setFaculties] = useState([]);
  const [transferSchedule, setTransferSchedule] = useState([]);
  const [attendanceBody, setAttendanceBody] = useState({
    day: daysArray[today.getDay()],
    date: today.toDateString(),//today.getDate()+"-"+(today.getMonth()+1)+"-"+today.getFullYear(),
    attendanceArray: []
  });
  // console.log(mySubjects);
  useEffect(() => {
    if (attendanceData?.attendance && attendanceData?.attendance?.attendance.length > 0) {
      setAttendanceBody(state => ({
        day: state.day,
        date: state.date,
        attendanceArray: attendanceData?.attendance?.attendance || []
      }))
    }
  }, [isFormLoading]);
  useEffect(() => {
    if (isTransfer) {
      axios.get(`${process.env.REACT_APP_API_KEY}/api/getFaculties`, {
        headers: {
          authorization: `Bearer ${auth?.accessToken}`
        }
      }).then(res => {
        if (res.data?.success) {
          setFaculties(res.data?.faculties);
        }
      }).catch(err => {
        console.log(err);
        toast.error("Unable to load faculties data");
      })
    }
  }, [isTransfer, auth?.accessToken]);

  const onHandleChange = (e, body) => {
    const { checked } = e.target;
    // console.log(checked, body);

    if (checked && body?.isTransfered) {
      if (!selectedSubjects[body?._id] || selectedSubjects[body?._id] === "") {
        setErrors(state => ({ ...state, attendanceError: { ...state.attendanceError, [body?._id]: "*Required to select subject!" } }));
        e.target.checked = false;
        return;
      }
      body.subject = selectedSubjects[body?._id];
      const attendanceArray = [...attendanceBody.attendanceArray, body]
      setAttendanceBody(state => ({
        ...state,
        attendanceArray
      }));
    }
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
    if (isTransfer) {
      return toast.error("Transfer schedule is in Progress!");
    }
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
        setIsTransfer(false);
        setTransferSchedule([]);
        refetch();
      }).catch(err => {
        setIsLoading(false);
        setIsTransfer(false);
        setTransferSchedule([]);
        // console.log(err);
        toast.error(err.message);
      });
    }
    else {
      toast.error("No Subject selected..!")
    }
  }

  const onClickTransfer = () => {
    // console.log(attendanceBody.attendanceArray);
    if (attendanceBody.attendanceArray.find(sch => sch.marked))
      return toast.error("Marked schedule is not transferable!");

    if (attendanceBody.attendanceArray.length > 0) {
      setIsTransfer(true);
      setTransferSchedule(attendanceBody.attendanceArray);
    } else {
      toast.error("Please select schedule to transfer!")
    }
  }
  const handleChangeTransferSchedule = (e, idx) => {
    if (e.target.value !== "") {
      const trErrors = errors.transferError;
      delete trErrors[idx];
      setErrors(state => ({
        ...state,
        transferError: trErrors
      }))
      setTransferSchedule(state => { state[idx].transferTo = e.target.value; return state; })
    } else {
      setTransferSchedule(state => { delete state[idx]?.transferTo; return state; });
      setErrors(state => ({ ...state, transferError: { ...state.transferError, [idx]: "*Required to select Faculty" } }));
    }
    // console.log(e.target.value, transferSchedule)
  }
  const onConfirmTransfer = (transferError = errors.transferError) => {
    // const 
    setTranferLoading(true);
    setTransferSchedule(state => {
      state.forEach((val, idx) => {
        if (!val.transferTo) {
          // console.log("executing")
          setErrors(state => ({ ...state, transferError: { ...state.transferError, [idx]: "*Required to select Faculty" } }));
        }
        val.transferScheduleId = val?._id;
        val.transferFrom = auth?.roleId;
        val.transferDate = new Date().toDateString();
        val.userId = auth?._id;
        return val;
      });
      return state;
    })
    if (Object.keys(transferError).length === 0) {
      axios.post(`${process.env.REACT_APP_API_KEY}/api/transfer-schedule/multiple`, { transferSchedule },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${auth?.accessToken}`,
          }
        })
        .then(res => {
          if (res.data?.success) {
            toast.success("Schedule transerfered successfuly!");
            setTransferSchedule([])
            setIsTransfer(false);
            setTranferLoading(false);
            setErrors(state => ({ ...state, transferError: {} }))
            refetch();
          }
        }).catch(err => {
          setTranferLoading(false);
          toast.error(err.message || "Error While Transfering Schedule! try again later.");
        });
    } else {
      setTranferLoading(false);
      return toast.error("Error: select 'Transfer to' field");
    }
  }
  // useEffect(()=>{console.log(attendanceBody);},[attendanceBody])
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-slate-100 w-full shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 mt-10 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-slate-400 mb-1 text-xs font-semibold">
                Attendance
              </h6>
              {/* <h2 className="uppercase text-slate-700 mb-10 text-xl font-semibold">
                Today's Schedule
              </h2> */}
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium text-gray-800">Today's Schedule</h2>
            {/* <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">VIEW ALL SCHEDULE</button> */}
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-4 py-5 border-b border-gray-200">
              <h3 className="text-base font-medium text-gray-900">Theory</h3>
            </div>
            {!isFormLoading && !attendanceData?.schedule?.find(attendance => attendance.teachingType === "TH")
              && <div className="flex items-center mt-5 content-center justify-center text-rose-700"><p>*No Theory Today</p></div>
            }
            <div className="mt-2 mx-4 gap-x-4 grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 divide-x">
              {!isFormLoading ? attendanceData?.schedule.map((attendance, idx) => attendance.teachingType === "TH" ? (
                <div key={attendance?._id}>
                  <div className="flex items-center ps-4 border shadow-sm bg-slate-100 border-gray-200 rounded-lg ">
                    <input id={`th-checkbox-${idx}`} type="checkbox" disabled={attendance?.transfered} onChange={(e) => { onHandleChange(e, attendance) }} value="" name="THCheckbox" defaultChecked={attendance.marked} className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                    {/* <label htmlFor="bordered-checkbox-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label> */}
                    <div className="w-full py-2 ms-2 text-sm grid grid-cols-2">
                      <label htmlFor={`th-checkbox-${idx}`} className="font-medium text-gray-900">
                        <span className="flex">
                          <p>
                            {attendance?.subject}
                          </p>
                        </span>
                        <p id="helper-checkbox-text" className="text-xs font-normal text-gray-500"> {attendance?.timeFrom + " - " + attendance?.timeTo}</p>
                      </label>
                      {!attendance?.transfered && (attendance?.marked
                        ? <i className="fa fa-check-circle fa-lg self-center mx-3" style={{ color: "green" }}></i>
                        : <i className="fa fa-times-circle fa-lg self-center mx-3" style={{ color: "red" }}></i>)
                      }
                      {attendance?.transfered && <i className="fa fa-reply fa-flip-horizontal fa-lg self-center mx-3" style={{ color: "orange" }}></i>}
                    </div>
                  </div>
                </div>
              ) : "")
                :
                <div className="flex items-center ps-4 border shadow-sm bg-slate-100 border-gray-200 rounded-lg ">
                  <input type="checkbox" value="" name="skeleton" disabled className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                  {/* <label htmlFor="bordered-checkbox-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label> */}
                  <div className="w-full py-2 ms-2 text-sm">
                    <div>
                      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                      <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                  </div>
                </div>
              }
            </div>
            <div className="px-4 py-5 border-b border-gray-200">
              <h3 className="text-base font-medium text-gray-900">Practical</h3>
            </div>
            {!isFormLoading && !attendanceData?.schedule?.find(attendance => attendance.teachingType === "PR")
              && <div className="flex items-center mt-5 content-center justify-center text-rose-700"><p>*No Practical Today</p></div>
            }
            <div className="mt-2 mx-4 gap-x-2 grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 divide-x">
              {!isFormLoading ? attendanceData?.schedule.map((attendance, idx) => attendance.teachingType === "PR" ? (
                <div key={attendance?._id}>
                  <div className="flex items-center ps-4 border shadow-sm bg-slate-100 border-gray-200 rounded-lg ">
                    <input id={`pr-checkbox-${idx}`} type="checkbox" disabled={attendance?.transfered} onChange={(e) => { onHandleChange(e, attendance) }} value="" name="PRCheckbox" defaultChecked={attendance.marked} className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                    {/* <label htmlFor="bordered-checkbox-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label> */}
                    <div className="w-full py-2 ms-2 text-sm grid grid-cols-2">
                      <label htmlFor={`pr-checkbox-${idx}`} className="font-medium text-gray-900 grid-rows-2">
                        <span className="flex">
                          <p>
                            {attendance?.subject}
                          </p>
                        </span>
                        <p id="helper-checkbox-text" className="text-xs font-normal text-gray-500"> {attendance?.timeFrom + " - " + attendance?.timeTo}</p>
                      </label>
                      {!attendance?.transfered && (attendance?.marked
                        ? <i className="fa fa-check-circle fa-lg self-center mx-3" style={{ color: "green" }}></i>
                        : <i className="fa fa-times-circle fa-lg self-center mx-3" style={{ color: "red" }}></i>)
                      }
                      {attendance?.transfered && <i className="fa fa-reply fa-flip-horizontal fa-lg self-center mx-3" style={{ color: "orange" }}></i>}
                    </div>
                  </div>
                </div>
              ) : "")
                :
                <div className="flex items-center ps-4 border shadow-sm bg-slate-100 border-gray-200 rounded-lg ">
                  <input type="checkbox" value="" name="skeleton" disabled className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                  {/* <label htmlFor="bordered-checkbox-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label> */}
                  <div className="w-full py-2 ms-2 text-sm">
                    <div>
                      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                      <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                  </div>
                </div>
              }
            </div>

            {/* ------------Transfered Schedule----------------- */}
            <div className="px-4 py-5 border-b border-gray-200">
              <h3 className="text-base font-medium text-gray-900">Transfered Schedule</h3>
              {Object.keys(errors.attendanceError).length > 0 &&
                <div class="flex items-center mt-2 text-rose-700">
                  *Require to select the Subject
                </div>}
            </div>
            {!isFormLoading && !attendanceData?.transfered?.length > 0
              && <div className="flex items-center mt-5 content-center justify-center text-rose-700"><p>*No Transfered Schedule</p></div>
            }
            <div className="mt-2 mx-4 gap-x-2 gap-2 grid grid-cols-1 divide-x">
              {!isFormLoading ?
                attendanceData?.transfered?.map((attendance, idx) => {
                  attendance.isTransfered = true;
                  const subjects = [...new Set(mySubjects?.find(subObj => subObj?._id === attendance?.teachingType)?.subjects || [])];
                  return (
                    <div key={attendance?._id}>
                      <div className={`flex items-center ps-4 border shadow-sm bg-slate-100 ${errors.attendanceError[attendance?._id] ? "border-rose-700" : "border-gray-200"} rounded-lg`}>
                        <input id={`TRATT-checkbox-${idx}`} type="checkbox" onChange={(e) => { onHandleChange(e, attendance) }} value="" name="PRCheckbox" defaultChecked={attendance.marked} className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                        {/* <label htmlFor="bordered-checkbox-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label> */}
                        <div className="w-full py-2 ms-2 me-2 text-sm grid grid-cols-3">
                          <label htmlFor={`TRATT-checkbox-${idx}`} className="font-medium text-gray-900 grid-rows-2">
                            <span className="flex">
                              <p>
                                {attendance.teachingType + ": " + attendance?.subject}
                              </p>
                            </span>
                            <p id="helper-checkbox-text" className="text-xs font-normal text-gray-500"> {attendance?.timeFrom + " - " + attendance?.timeTo}</p>
                          </label>
                          {/* col-2 */}
                          <div className="grid-rows-2 text-xs overflow-hidden">
                            <p>{"From: " + attendance?.transferFrom?.abbrivation}</p>
                            <p>{"Timetable: " + attendance?.yearAndBranch}</p>
                          </div>
                          {/* col-3 */}
                          <div className="flex">
                            <select id={`subject-${attendance?._id}`} onChange={e => { setSelectedSubjects(state => ({ ...state, [attendance?._id]: e.target.value })); }} className={`bg-gray-50 border ${errors.attendanceError[attendance?._id] ? "border-rose-700" : "border-gray-300"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}>
                              <option value={""}>Select Subject</option>
                              {subjects?.map((subject, idx) => (
                                <option key={idx} value={subject} selected={subject === attendance?.newSubject}>{subject}</option>
                              ))}
                              {/* <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option> */}
                            </select>
                            {attendance?.marked
                              ? <i className="fa fa-check-circle fa-lg self-center mx-3" style={{ color: "green" }}></i>
                              : <i className="fa fa-times-circle fa-lg self-center mx-3" style={{ color: "red" }}></i>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
                )
                :
                <div className="flex items-center ps-4 border shadow-sm bg-slate-100 border-gray-200 rounded-lg ">
                  <input type="checkbox" value="" name="skeleton" disabled className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                  {/* <label htmlFor="bordered-checkbox-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label> */}
                  <div className="w-full py-2 ms-2 text-sm">
                    <div>
                      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                      <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                  </div>
                </div>
              }
            </div>
            <div className="px-4 py-5">
              <h3 className="text-base font-medium text-gray-900">Mode</h3>
              <div className="flex items-center mt-2">
                <div className="flex items-center mr-4">
                  <input disabled type="radio" name="mode" id="online" value="online" className="w-5 h-5 accent-blue-500 focus:ring-0" />
                  <label htmlFor="online" className="ml-2 text-sm text-gray-700">Online</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" name="mode" id="offline" value="offline" className="w-5 h-5 accent-blue-500 focus:ring-0" defaultChecked />
                  <label htmlFor="offline" className="ml-2 text-sm text-gray-700">Offline</label>
                </div>
              </div>
              <button
                type="button"
                onClick={onClickTransfer}
                className="my-5 mr-5 content-center bottom-20 justify-center inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                disabled={isLoading || isTrasnferLoading}
              >
                Transfer
              </button>
              <button
                type="button"
                onClick={onSubmitAttendance}
                className="my-5 content-center mx-50 bottom-20 justify-center inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                disabled={isLoading || isTrasnferLoading}
              >
                {!isLoading ? "Submit" : "Submitting..."}
              </button>
            </div>
          </div>
        </div>

        {/* Transfer Schedule start here */}
        {isTransfer &&
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium text-gray-800">Transfer Schedule</h2>
              {/* <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">VIEW ALL SCHEDULE</button> */}
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-4 py-5 border-b border-gray-200">
                <h3 className="text-base font-medium text-gray-900">Selected schedules for transfer</h3>
              </div>
              <div className="mt-2 mx-2 mb-5 gap-2 grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 divide-x">

                {transferSchedule?.map((attendance, idx) => (
                  <div key={attendance?._id}>
                    <div className={`flex items-center ps-4 border shadow-sm bg-slate-100 ${errors.transferError[idx] ? "border-rose-700" : "border-gray-200"} rounded-lg`}>
                      {/* <input id={`trnf-checkbox-${idx}`} type="checkbox" value="" name="TRNFCheckbox" defaultChecked={attendance.marked} className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " /> */}
                      {/* <label htmlFor="bordered-checkbox-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label> */}
                      <div className="w-full py-2 ms-2 text-sm">
                        <div htmlFor={`trnf-checkbox-${idx}`} className="font-medium text-gray-900 ">
                          {attendance?.subject}
                          <p id="helper-checkbox-text" className="text-xs font-normal text-gray-500"> {attendance?.timeFrom + " - " + attendance?.timeTo}</p>
                          {/* {attendance?.transfered && <i className="fa fa-reply fa-flip-horizontal" style={{ color: "orange" }}></i>} */}
                        </div>
                      </div>
                      <select id="faculties" onChange={e => handleChangeTransferSchedule(e, idx)} className={`bg-gray-50 border ${errors.transferError[idx] ? "border-rose-700" : "border-gray-300"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}>
                        <option value={""}>Transfer To</option>
                        {faculties.map(faculty => (
                          <option key={faculty?._id} value={faculty?._id}>{faculty?.abbrivation + ": " + faculty?.faculty?.name}</option>
                        ))}
                        {/* <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option> */}
                      </select>
                    </div>
                  </div>
                ))}



              </div>
              <button
                type="button"
                onClick={() => { setIsTransfer(false); setTransferSchedule([]); }}
                className="my-5 ml-5 content-center bottom-20 justify-center inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                disabled={isLoading || isTrasnferLoading}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => onConfirmTransfer(errors.transferError)}
                className="my-5 mx-5 content-center bottom-20 justify-center inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                disabled={isLoading || isTrasnferLoading}
              >
                Confirm Transfer
              </button>
            </div>
          </div>
        }
      </div>
    </>
  );
}
