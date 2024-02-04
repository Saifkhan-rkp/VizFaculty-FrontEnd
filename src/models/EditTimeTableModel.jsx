import React, { useState } from 'react';
import "./Modal.css";
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function EditTimeTableModel({ times = [], faculties, title = "Edit Time Table Row", currentData, onClickSave }) {

  const [flag, setFlag] = useState(false);
  const [currData, setCurrData] = useState(currentData);
  const { register, resetField, handleSubmit, reset, formState: { errors } } = useForm({ mode: "onChange" });
  // const items = ["sfvbfdb", "dbzfdbgfv", "rdfbhgtdbfdzbgdsd", "dfbgdtrhbgvd", "erdfbrgtfbv"]
  // const ref = {}
  // console.log(currentData);
  // console.log(faculties);

  const setPopup = () => {
    reset();
    setFlag(!flag)
  }
  const onSubmit = (data)=>{
    onClickSave(currData);
    setPopup();
  };
  const addIntoCurrentData = (data) => {
    console.log(data);
    const time = JSON.parse(data?.time);
    data.timeFrom = time.timeFrom;
    data.timeTo = time.timeTo;
    delete data.time
    resetField("assignTo");
    resetField("teachingType");
    resetField("subject");
    setCurrData(vals => [...vals, data]);
  }
  const removeFromCurrentData = (index) => {
    console.log("line 23 - ", index);
    setCurrData(schedules => schedules.filter((_, i) => i !== index));
  }
  return (
    <>
      <button
        className="fas fa-pencil fa-lg"
        type="button"
        onClick={setPopup}
      >
      </button>
      {flag &&
        (<div id="POPUP" className="z-50 fixed w-full flex justify-center inset-0">
          <div onClick={setPopup} className="w-full h-full bg-transparent z-0 absolute inset-0" />
          <div className="mx-auto container">
            <div className="flex items-center justify-center h-full w-full">
              <div className="bg-white rounded-md shadow fixed overflow-x-auto overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5 max-h-screen">
                <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
                  <p className="text-base font-semibold">{title}</p>
                  <button onClick={setPopup} className="focus:outline-none">
                    <i className="fas fa-xmark fa-xl" style={{ color: "gray" }} />
                  </button>
                </div>
                <div className='relative p-4 bg-slate-50'>
                  <p>Schedules</p>
                  <div className='relative mt-6 max-h-56 overflow-y-scroll'>
                    <div className='ml-1'>
                      {times?.map((time, idx) => (
                        <div key={idx}>
                          <div className="my-1">{time?.from + "-" + time?.to}</div>
                          {currData.map((schedule, idx) => (
                            (schedule?.timeFrom + "-" + schedule?.timeTo) === (time?.from + "-" + time?.to) &&
                            <div key={idx} className='px-6 mb-0.5 py-3 w-full bg-gray-200 border border-gray-200 rounded'>
                              <div className='relative' >
                                <p>{schedule?.teachingType + " : " + schedule?.subject + " : " + schedule?.assignTo}</p>
                                <div className='absolute inset-y-0 right-0 flex items-center px-2'>
                                  <button type='button' onClick={() => removeFromCurrentData(idx)}>
                                    <svg className='fill-rose-600' height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                      <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm4-8a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1z" />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                          )
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative overflow-y-auto p-4 bg-slate-50">
                  <form className="mt-5" onSubmit={onSubmit}>
                    <div className='mb-3'>
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                        Time
                      </label>
                      <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
                          {...register("time", { required: "*Time must be selected", })}
                        >
                          <option value={""}>--Select Time--</option>
                          {times.map((val, idx) => (
                            <option key={idx} value={JSON.stringify({ timeFrom: val.from, timeTo: val.to })}>{val.from + " - " + val.to}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                      {errors.time && (
                        <p className="text-red-600">{errors.time?.message}</p>
                      )}
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                          Teaching Type
                        </label>
                        <div className="relative">
                          <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
                            {...register("teachingType", { required: "*Teaching type must be selected", })}
                          >
                            <option value={""}>--Select Teaching Type--</option>
                            <option value={"TH"}>Theory</option>
                            <option value={"PR"}>Practical</option>
                            <option value={"TUT"}>Toutorial</option>
                            {/* {times.map((val, idx) => (
                              <option key={idx} value={JSON.stringify({ timeFrom: val.from, timeTo: val.to })}>{val.from + " - " + val.to}</option>
                            ))} */}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                          </div>
                        </div>
                        {errors.teachingType && (
                          <p className="text-red-600">{errors.teachingType?.message}</p>
                        )}
                      </div>
                      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                          Subject
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-city"
                          type="text"
                          placeholder="Subject Name"
                          name='subject'
                          {...register("subject", { required: "*Teacher must be selected", })}
                        />
                        {errors.subject && (
                          <p className="text-red-600">{errors.subject?.message}</p>
                        )}
                      </div>
                      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                          Teacher
                        </label>
                        <div className="relative">
                          <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
                            {...register("assignTo", { required: "*Teacher must be selected", })}
                          >
                            <option value={""} >--Select Teacher--</option>
                            {faculties?.faculties?.map((faculty, idx) => (
                              <option value={faculty._id} key={idx}>{faculty.abbrivation}</option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                          </div>
                        </div>
                        {errors.assignTo && (
                          <p className="text-red-600">{errors.assignTo?.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="relative w-full mb-3">
                        <button type="button" onClick={handleSubmit(addIntoCurrentData)} className="px-3 py-2 w-full text-sm font-medium justify-center text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                          <i className='fa fa-plus' />
                          <p> Add</p>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-9">
                      <button type="cancel" onClick={setPopup} className="px-6 py-3 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white">
                        Cancel
                      </button>
                      <button type="submit" className="px-6 py-3 bg-blue-700 hover:bg-opacity-80 shadow rounded text-sm text-white">Save</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>)

      }
    </>
  )
}
