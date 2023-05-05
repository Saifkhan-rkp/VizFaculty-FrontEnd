import React from 'react'

export default function TimeTableComponent({ ttData, rows, deleteRow, editRow }) {
    const str = "\t";
    const schedules = ttData?.schedule;
    const days = Object.keys(schedules);
    const restRows = Object.values(schedules);
    const aryFinal = []
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
    return (
        <>
            <div className="py-8 px-4 lg:px-4 md:px-2 sm:px-1">
                <div className="relative content-center overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500">
                        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white">{/*dark:text-white dark:bg-gray-800*/}
                            {ttData?.name}
                            <p className="mt-1 text-sm font-normal text-gray-500 " // dark:text-gray-400
                            > Created By: {ttData?.createdBy?.name+str} Last Modified By: {ttData?.lastModifiedBy?.name+str}
                            </p>
                        </caption>
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr className="bold">
                                <th scope="col" className="px-6 py-3">Day</th>
                                <th scope="col" className="px-6 py-3"> 
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
                                </th>
                                <th scope="col" className="px-6 py-3">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, idx) => {
                                return (
                                    <tr key={idx} className="bg-white border-b">
                                        <td className="px-4 py-3">{row.Day}</td>
                                        <td className="px-4 py-3">{row["10:30-11:30"]}</td>
                                        <td className="px-4 py-3">{row["11:30-12:30"]}</td>
                                        <td className="px-4 py-3">{row["1:00-2:00"]}</td>
                                        <td className="px-4 py-3">{row["2:00-3:00"]}</td>
                                        <td className="px-4 py-3">{row["3:15-4:15"]}</td>
                                        <td className="px-4 py-3">{row["4:15-5:15"]}</td>

                                        <td className="px-4 py-3">
                                            <span className="actions">
                                                <button type='button' className='fas fa-pencil' onClick={() => editRow(idx)} />
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
