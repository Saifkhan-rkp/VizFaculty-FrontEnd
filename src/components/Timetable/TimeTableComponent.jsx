import React, { useState } from 'react'
import EditTimeTableModel from '../../models/EditTimeTableModel';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import DeleteModel from "../../models/DeleteModel";
import InputModel from '../../models/InputModel';
import _ from "lodash";
import { getAuthData } from '../../utils/utils';

export default function TimeTableComponent({ faculties, ttData, onlyView = false, refetch = () => { } }) {
    // console.log(ttData);
    const str = "\t";
    const schedules = ttData?.schedule;
    const restRows = Object.values(schedules);
    // const [currentRow, setCurrentRow] = 
    // Extract and format the schedule data
    const formattedSchedule = Object.entries(ttData?.schedule).map(([day, schedule]) => {
        const newObj = {};
        return ({
            day,
            schedule: schedule.reduce((r, o) => {
                const key = o.timeFrom + "-" + o.timeTo;
                const time = { from: o.timeFrom, to: o.timeTo }
                if (!newObj[key]) {
                    newObj[key] = Object.assign({ data: (o.teachingType + "-" + o.subject + "; ") }, { key }, { time }); // create a copy of okey
                    r.push(newObj[key]);
                } else {
                    newObj[key].data += (o.teachingType + "-" + o.subject + "; ");
                    // newObj[key].instances += o.instances;
                }
                return r;
            }, [])
        })
    });
    // console.log(formattedSchedule);
    const onClickAddTime = (data) => {
        setTimeArray(vals => [...vals, data])
    }

    //for Time Array table cols
    const timeAry = [];
    restRows?.forEach(row => {
        row.map((val) => {
            const timeString = val.timeFrom + "-" + val.timeTo;
            if (!timeAry.some(existingSlot => existingSlot.from + "-" + existingSlot.to === timeString)) {
                timeAry.push({ from: val.timeFrom, to: val.timeTo });
            }
        })
    });

    const [thTimeArray, setTimeArray] = useState(timeAry);
    // console.log(restRows);
    const confirmDelete = (id) => {
        axios.delete(`${process.env.REACT_APP_API_KEY}/api/tt/${id}`, {
            headers: {
                authorization: `Bearer ${getAuthData()?.accessToken}`,
            },
        })
            .then(res => {
                console.log(res.data);
                if (res.data?.success) {
                    refetch();
                    toast.success(res.data?.message);
                }
                if (!res.data?.success) {
                    toast.error(res.data?.message);
                }
            }).catch(err => {
                console.log(err);
                toast.error(err?.response?.data?.message);
            });
    }

    const onClickSave = (data, day) => {
        axios.put(`${process.env.REACT_APP_API_KEY}/api/tt/updateSchedule/${ttData?._id}`, { day, schedule: data },)
            .then(res => {
                console.log(res.data);
                if (res.data?.success) {
                    refetch();
                    toast.success(res.data?.message);
                }
                if (!res.data?.success) {
                    toast.error(res.data?.message);
                }
            }).catch(err => {
                console.log(err);
                toast.error(err?.response?.data?.message);
            });
    }
    return (
        <>
            <div className="py-8 px-4 lg:px-4 md:px-2 sm:px-1">
                <div className="relative content-center overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500">
                        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white">{/*dark:text-white dark:bg-gray-800*/}
                            <div className="flex flex-col lg:flex-row items-start lg:items-center">
                                <div className=" w-full flex items-left">
                                    <div className="relative w-full max-w-full flex-grow flex-1">
                                        <h3
                                            className="font-semibold text-lg text-slate-700"
                                        >
                                            {ttData?.name}
                                        </h3>
                                    </div>
                                </div>
                                {!onlyView &&
                                    <div className="w-full flex flex-row lg:flex-row md:flex-row items-start lg:items-center justify-end">
                                        <div className="text-gray-600 p-2 border-transparent border bg-gray-100 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"> {/**dark:bg-gray-700 dark:hover:bg-gray-600 */}
                                            {/* <DeleteModel name={ttData?.name} dialog='Are you sure you want to delete this timetable..?' confirmDelete={confirmDelete} id={ttData?._id} /> */}
                                            <i className='fas fa-pen-to-square fa-md'></i>
                                        </div>
                                        <button className="text-gray-600 mx-2 p-2 border-transparent border bg-gray-100 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                            <DeleteModel name={ttData?.name} dialog='Are you sure you want to delete this timetable..?' confirmDelete={confirmDelete} id={ttData?._id} />
                                        </button>
                                    </div>
                                }
                            </div>


                            <p className="mt-1 text-sm font-normal text-gray-500 " // dark:text-gray-400
                            > <strong >Created By:{" "}</strong> {ttData?.createdBy?.name + str} <strong>Last Modified By:{" "}</strong>{ttData?.lastModifiedBy?.name + str}
                            </p>
                        </caption>
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr className="bold">
                                <th scope="col" className="px-6 py-3">Day</th>
                                {thTimeArray.map((val, idx) => (
                                    <th scope="col" className="px-6 py-3" key={idx}>
                                        <div className=''>
                                            {val?.from + " - " + val?.to}
                                        </div>
                                    </th>
                                ))}
                                {!onlyView &&
                                    <>
                                        <th scope="col" className="px-6 py-3">Edit</th>
                                        <th scope="col" className="px-6 py-3"><InputModel saveFunction={onClickAddTime} /></th>
                                    </>
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {formattedSchedule.map(({ day, schedule }, dayIdx) => (
                                <tr key={dayIdx} className="bg-white border-b">
                                    <td className="px-4 py-3 uppercase">{day}</td>
                                    {thTimeArray.map((timeSlot, timeIdx) => (
                                        <td className="px-4 py-3" key={timeIdx}>
                                            {schedule.find(slot => _.isEqual(slot.time, timeSlot))?.data || " "}
                                        </td>
                                    ))}
                                    {/* ... other columns ... */}
                                    {!onlyView &&
                                        <td className="px-4 py-3">
                                            <span className="actions">
                                                <EditTimeTableModel times={thTimeArray} faculties={faculties} onClickSave={(data) => onClickSave(data, day)} title={"Edit Timetable for " + day?.toUpperCase()} currentData={restRows[dayIdx]} />
                                            </span>
                                        </td>
                                    }
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
