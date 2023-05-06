import React, { useState } from 'react';
import "./Modal.css";
import AutocompleteInput from '../components/Autocomplete/AutocompleteInput';
import { useQuery } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import axios from 'axios';

export default function EditTimeTableModel() {

  const { data: faculties, isLoading, } = useQuery(['faculties'], () => axios.get(`${process.env.REACT_APP_API_KEY}/api/getFaculties`, {
    headers: {
      authorization: `Bearer ${Cookies.get('token')}`,
    },
  }).then(res => res.data));
  const [flag, setFlag] = useState(false);
  // const items = ["sfvbfdb", "dbzfdbgfv", "rdfbhgtdbfdzbgdsd", "dfbgdtrhbgvd", "erdfbrgtfbv"]
  // const ref = {}
  const setPopup = () => {
    setFlag(!flag)
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
                  <p className="text-base font-semibold">Edit Timetable Row</p>
                  <button onClick={setPopup} className="focus:outline-none">
                    <i className="fas fa-xmark fa-xl" style={{ color: "gray" }} />
                  </button>
                </div>
                <div className="relative overflow-y-auto p-4 bg-slate-50">
                  <form className='mt-11'>
                    <div className="flex items-center space-x-9">
                      <div className="relative w-full mb-3">
                        <AutocompleteInput title='10:30-11:30' facultyList={faculties?.faculties} />
                      </div>
                      <div className="relative w-full mb-3">
                        <AutocompleteInput title='11:30-12:30' facultyList={faculties?.faculties} />
                      </div>
                    </div>
                    {/* <div className='h-600-px'></div> */}
                    <div className="mb-3">
                      <div className="relative w-full mb-3">
                        <AutocompleteInput title='10:30-12:30' facultyList={faculties?.faculties}/>
                      </div>
                      {/* <input  className="py-3 pl-3 overflow-y-auto h-24 border rounded border-gray-200 w-full resize-none focus:outline-none" defaultValue={""} /> */}
                    </div>
                    <div className="flex items-center space-x-9">

                      <div className="relative w-full mb-3">
                        <label
                          className="text-left block uppercase text-slate-600 text-xs font-bold mb-2"
                          htmlFor="01:00-02:00"
                        >01:00-02:00
                        </label>
                        <input
                          type="text"
                          id=""
                          name="01:00-02:00"
                          placeholder=""
                          className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="text-left block uppercase text-slate-600 text-xs font-bold mb-2"
                          htmlFor="02:00-03:00"
                        >02:00-03:00
                        </label>
                        <input
                          type="text"
                          id=""
                          name="02:00-03:00"
                          placeholder=""
                          className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="relative w-full mb-3">
                        <label
                          className="text-left block uppercase text-slate-600 text-xs font-bold mb-2"
                          htmlFor="10:30-12:30"
                        >
                          10:30-12:30
                        </label>
                        <input
                          type="text"
                          name='10:30-12:30'
                          placeholder=""
                          className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                      {/* <input  className="py-3 pl-3 overflow-y-auto h-24 border rounded border-gray-200 w-full resize-none focus:outline-none" defaultValue={""} /> */}
                    </div>
                    <div className="flex items-center space-x-9">
                      <div className="relative w-full mb-3">
                        <label
                          className="text-left block uppercase text-slate-600 text-xs font-bold mb-2"
                          htmlFor="03:15-04:15"
                        >03:15-04:15
                        </label>
                        <input
                          type="text"
                          id=""
                          name="03:15-04:15"
                          placeholder=""
                          className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="text-left block uppercase text-slate-600 text-xs font-bold mb-2"
                          htmlFor="04:15-05:15"
                        >04:15-05:15
                        </label>
                        <input
                          type="text"
                          id=""
                          name="04:15-05:15"
                          placeholder=""
                          className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="relative w-full mb-3">
                        <label
                          className="text-left block uppercase text-slate-600 text-xs font-bold mb-2"
                          htmlFor="03:15-05:15"
                        >
                          03:15-05:15
                        </label>
                        <input
                          type="text"
                          name='03:15-05:15'
                          placeholder=""
                          className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                      {/* <input  className="py-3 pl-3 overflow-y-auto h-24 border rounded border-gray-200 w-full resize-none focus:outline-none" defaultValue={""} /> */}
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
