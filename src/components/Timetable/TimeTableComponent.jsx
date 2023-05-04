import React from 'react'

export default function TimeTableComponent({ rows, deleteRow, editRow }) {
    return (
        <>
            <div className="py-8 px-4 lg:px-4 md:px-2 sm:px-1">
                <div className="relative content-center overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-auto text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr className="bold">
                                <th scope="col" className="px-6 py-3">Day</th>
                                <th scope="col" className="px-6 py-3">10:30-11:30</th>
                                <th scope="col" className="px-6 py-3">11:30-12:30</th>
                                <th scope="col" className="px-6 py-3">1:00-2:00</th>
                                <th scope="col" className="px-6 py-3">2:00-3:00</th>
                                <th scope="col" className="px-6 py-3">3:15-4:15</th>
                                <th scope="col" className="px-6 py-3">4:15:5:15</th>
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
