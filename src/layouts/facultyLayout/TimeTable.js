import { useQuery } from "@tanstack/react-query";
import "./TimeTable.css";
import React from "react";
import axios from "axios";
import { getAuthData } from "../../utils/utils";
import TimeTableComponent from "../../components/Timetable/TimeTableComponent";

function TimeTable() {
  const { data: timetables, isLoading, } = useQuery(['timetables'], () => axios.get(`${process.env.REACT_APP_API_KEY}/api/timetables/forFaculty`, {
    headers: {
      authorization: `Bearer ${getAuthData()?.accessToken}`,
    },
  }).then(res => res.data));
  
  return (
    <>
      <div className="flex flex-wrap">
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
                </div>
              </div>
            </div>
            { timetables?.ttCount<1 &&
              <div className='h-350-px items-center top-1/2 text-center'>No TimeTable Found, Contact Department to add Timetable.</div>
            }
            {/* <Table rows={rows} editRow={handleEditRow} /> */}
            { !isLoading && timetables?.ttCount>0  &&
              timetables?.timetables?.map( tt => (
              <TimeTableComponent ttData={tt} onlyView={true} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default TimeTable;
