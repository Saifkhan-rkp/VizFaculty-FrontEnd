import React, { useState } from 'react'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

//components
import TimeTableComponent from '../../components/Timetable/TimeTableComponent'
import AddTimeTableModal from '../../models/AddTimeTableModal';
import { getAuthData } from '../../utils/utils';

export default function Timetables() {
  const { data: timetables, isLoading, refetch } = useQuery(['timetables'], () => axios.get(`${process.env.REACT_APP_API_KEY}/api/timetables`, {
    headers: {
      authorization: `Bearer ${getAuthData()?.accessToken}`,
    },
  }).then(res => res.data));
  const { data: faculties, isLoading: loadingFaculties, } = useQuery(['faculties'], () => axios.get(`${process.env.REACT_APP_API_KEY}/api/getFaculties`, {
    headers: {
      authorization: `Bearer ${getAuthData()?.accessToken}`,
    },
  }).then(res => res.data));

  // console.log(timetables);
  const [modalOpen, setModalOpen] = useState(false);
  const [rowToEdit, setRowToEdit] = useState(null);
  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };


  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
            <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  <h6 className="uppercase text-slate-700 mb-1 text-sm font-semibold">
                    TimeTables
                  </h6>
                  {/* <h2 className="text-white text-xl font-semibold">Expenditure vise</h2> */}
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <AddTimeTableModal refetch={refetch} />
                </div>
              </div>
            </div>
            { timetables?.ttCount<1 &&
              <div className='h-350-px items-center top-1/2 text-center'>No TimeTable Found, Add TimeTable By clicking "+ Add TimeTable" button</div>
            }
            { !loadingFaculties && timetables?.ttCount>0  &&
              timetables?.timetables?.map( tt => (
              <TimeTableComponent faculties={faculties} editRow={handleEditRow} ttData={tt} refetch={refetch}/>
              ))
            }
          </div>
        </div>
        {/* <div className="w-full xl:w-11/12 min-lg:w-11/12 mb-12 xl:mb-0 px-4">
        </div>
        <div className="w-full xl:w-11/12 min-lg:w-11/12 mb-12 xl:mb-0 px-4">
        </div> */}
      </div>
    </>
  )
}