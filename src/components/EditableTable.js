import React, { useState } from "react";

const EditableTable = () => {
    const [data, setData] = useState([
        { id: 1, name: "John", age: 25 },
        { id: 2, name: "Mary", age: 30 },
        { id: 3, name: "Jane", age: 35 },
    ]);

    const handleNameChange = (id, value) => {
        setData(
            data.map((item) =>
                item.id === id ? { ...item, name: value } : { ...item }
            )
        );
    };

    const handleAgeChange = (id, value) => {
        setData(
            data.map((item) =>
                item.id === id ? { ...item, age: value } : { ...item }
            )
        );
    };

    return (<>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
            <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full max-w-full flex-grow flex-1">
                        <h6 className="uppercase text-slate-700 mb-1 text-sm font-semibold">
                            Faculties
                        </h6>
                        {/* <h2 className="text-white text-xl font-semibold">Expenditure vise</h2> */}
                    </div>
                </div>
            </div>
            <div className="py-8 px-4 lg:px-4 md:px-2 sm:px-1">
                <div className="w-full overflow-x-scroll">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Age
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <input
                                            type="text"
                                            className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                                            value={item.name}
                                            onChange={(e) => handleNameChange(item.id, e.target.value)}
                                        />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <input
                                            type="number"
                                            className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                                            value={item.age}
                                            onChange={(e) => handleAgeChange(item.id, e.target.value)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </>
    );
};

export default EditableTable;