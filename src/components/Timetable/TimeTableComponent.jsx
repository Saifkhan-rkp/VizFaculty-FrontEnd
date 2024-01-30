import React, { useState } from 'react'
import EditTimeTableModel from '../../models/EditTimeTableModel';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import DeleteModel from "../../models/DeleteModel";
import Cookies from 'js-cookie';
import InputModel from '../../models/InputModel';

export default function TimeTableComponent({ ttData, refetch = () => { } }) {
    const [thTimeArray, setTimeArray] = useState([]);
    // console.log(ttData);
    const str = "\t";
    const schedules = ttData?.schedule;
    const days = Object.keys(schedules);
    const restRows = Object.values(schedules);
    const aryFinal = []

    const onClickAddTime = (data)=>{
        setTimeArray(vals => [...vals,data])
    }
    restRows?.forEach(row => {
        // console.log(row);
        const newObj = {};
        const temp = row?.reduce((r, o) => {
            const key = o.timeFrom + "-" + o.timeTo;
            if (!newObj[key]) {
                newObj[key] = Object.assign({ data: (o.teachingType + "-" + o.subject + ":" + o.assignTo + "; ") }, { key }); // create a copy of okey
                r.push(newObj[key]);
            } else {
                newObj[key].data += (o.teachingType + "-" + o.subject + ":" + o.assignTo + "; ");
                // newObj[key].instances += o.instances;
            }
            return r;
        }, []);
        aryFinal.push(temp);
    })
    // console.log(aryFinal);
    const confirmDelete = (id) => {
        axios.delete(`${process.env.REACT_APP_API_KEY}/api/tt/${id}`, {
            headers: {
                authorization: `Bearer ${Cookies.get('token')}`,
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
                                <div className="w-full flex flex-row lg:flex-row md:flex-row items-start lg:items-center justify-end">
                                    <div className="text-gray-600 p-2 border-transparent border bg-gray-100 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"> {/**dark:bg-gray-700 dark:hover:bg-gray-600 */}
                                        {/* <DeleteModel name={ttData?.name} dialog='Are you sure you want to delete this timetable..?' confirmDelete={confirmDelete} id={ttData?._id} /> */}
                                        <i className='fas fa-pen-to-square fa-md'></i>
                                    </div>
                                    <button className="text-gray-600 mx-2 p-2 border-transparent border bg-gray-100 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                        <DeleteModel name={ttData?.name} dialog='Are you sure you want to delete this timetable..?' confirmDelete={confirmDelete} id={ttData?._id} />
                                    </button>
                                </div>
                            </div>


                            <p className="mt-1 text-sm font-normal text-gray-500 " // dark:text-gray-400
                            > <strong >Created By:{" "}</strong> {ttData?.createdBy?.name + str} <strong>Last Modified By:{" "}</strong>{ttData?.lastModifiedBy?.name + str}
                            </p>
                        </caption>
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr className="bold">
                                <th scope="col" className="px-6 py-3">Day</th>
                                {thTimeArray.map((val, idx) =>
                                (<th scope="col" className="px-6 py-3" key={idx}>
                                    <div className=''>
                                        {val?.from +" - "+ val?.to}
                                    </div>
                                </th>))}
                                {/* <th scope="col" className="px-6 py-3">
                                    <div className='grid grid-cols-2 gap-1'>
                                        <div >10:30-11:30</div>
                                        <div >11:30-12:30</div>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <div className='grid grid-cols-2 gap-1'>
                                        <div >01:00-02:00</div>
                                        <div >02:00-03:00</div>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <div className='grid grid-cols-2 gap-1'>
                                        <div >03:15-04:15</div>
                                        <div >04:15-05:15</div>
                                    </div>
                                </th> */}
                                <th scope="col" className="px-6 py-3"><InputModel saveFunction={onClickAddTime}/></th>
                                <th scope="col" className="px-6 py-3">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {aryFinal.map((row, idx) => {
                                return (
                                    <tr key={idx} className="bg-white border-b">
                                        <td className="px-4 py-3 uppercase">{days[idx]}</td>
                                        <td className="px-4 py-3">
                                            <div className="grid grid-cols-2 grid-rows-2">
                                                <div className="col-span-1 row-span-1">{row?.key === "10:30-11:30" ? row?.data : " "}</div>
                                                <div className="col-span-1 row-span-1">{row?.key === "11:30-12:30" ? row?.data : " "}</div>
                                                <div className="col-span-2 row-span-1 bg-slate-300">{row?.key === "10:30-12:30" ? row?.data : " "}</div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="grid grid-cols-2 grid-rows-2">
                                                <div className="col-span-1 row-span-1">{row?.key === "01:00-02:00" ? row?.data : " "}</div>
                                                <div className="col-span-1 row-span-1">{row?.key === "02:00-03:00" ? row?.data : " "}</div>
                                                <div className="col-span-2 row-span-1 bg-slate-300">{row?.key === "01:00-03:00" ? row?.data : " "}</div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="grid grid-cols-2 grid-rows-2 outline-2">
                                                <div className="col-span-1 row-span-1">{row?.key === "03:15-04:15" ? row?.data : " "}</div>
                                                <div className="col-span-1 row-span-1">{row?.key === "04:15-05:15" ? row?.data : " "}</div>
                                                <div className="col-span-2 row-span-1 bg-slate-300">{row?.key === "03:15-05:15" ? row?.data : " "}</div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className="actions">
                                                <EditTimeTableModel />
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
