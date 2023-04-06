import React, { useState } from "react";
import PropTypes from "prop-types";
import SingleFacultySalaryModel from "../../models/SingleFacultySalaryModel";

// components

// import TableDropdown from "../Dropdowns/TableDropdown";
let appData = [
    {
        applicationDate: new Date().toDateString(),
        faculty: {
            name: "Mia M",
            profile: require('../../assets/img/team-3-800x800.jpg'),
            email: "miami@whatever.com"
        },
        department: "CIVIL",
        amount: 20500,
        status: "paid"
    },
    {
        applicationDate: new Date().toDateString(),
        faculty: {
            name: "Jhon Doe",
            profile: "default",
            email: "miami@whatever.com"
        },
        department: "CSE",
        amount: 20500,
        status: "pending"
    },
    {
        applicationDate: new Date().toDateString(),
        faculty: {
            name: "Jane Doe",
            profile: require('../../assets/img/team-4-470x470.png'),
            email: "miami@whatever.com"
        },
        department: "MECH",
        amount: 20500,
        status: "pending"
    },
    {
        applicationDate: new Date().toDateString(),
        faculty: {
            name: "Billie eilish",
            profile: "default",
            email: "miami@whatever.com"
        },
        department: "ELECTRICAL",
        amount: 20500,
        status: "approved"
    },
    {
        applicationDate: new Date().toDateString(),
        faculty: {
            name: "Sia",
            profile: "default",
            email: "miami@whatever.com"
        },
        department: "CSE",
        amount: 20500,
        status: "approved"
    },
    {
        applicationDate: new Date().toDateString(),
        faculty: {
            name: "Mia M",
            profile: "default",
            email: "miami@whatever.com"
        },
        department: "CIVIL",
        amount: 20500,
        status: "rejected"
    }
]


export default function CardSalaryApplications({ color }) {
    const [isDataAvail, setIsDataAvail] = useState(true);
    const [selectedFaculty,setFaculty] = useState({});
    const [openModel,setOpenModel] = useState(false);
    const [data, setData] = useState(appData);
    const [refId,setID] = useState("");
    console.log(openModel);
    const handleChange = (element) => {
        if (element.target.value==="all") return setData(appData);
        setData(appData.filter(el => { if (el.status === element.target.value) return el; return}))
        // console.log(data);
    }
    // setIsDataAvail(true);
    const status = {
        approved: (<span
            className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
            <span
                aria-hidden
                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">Approved</span>
        </span>),
        paid: (<span
            className="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight"
        >
            <span
                aria-hidden
                className="absolute inset-0 bg-blue-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">Paid</span>
        </span>),
        pending: (<span
            className="relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight"
        >
            <span
                aria-hidden
                className="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">Pending</span>
        </span>),
        rejected: (<span
            className="relative inline-block px-3 py-1 font-semibold text-rose-900 leading-tight"
        >
            <span
                aria-hidden
                className="absolute inset-0 bg-rose-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">Rejected</span>
        </span>),
    }
    return (
        <>
            <div
                className={
                    "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
                    (color === "light" ? "bg-white" : "bg-sky-900 text-white")
                }
            >
                {/* <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3
                                className={
                                    "font-semibold text-lg " +
                                    (color === "light" ? "text-slate-700" : "text-white")
                                }
                            >
                                Salary Applications
                            </h3>
                        </div>

                    </div>
                </div> */}
                {/* {openModel && } */}
                <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full">
                    <div className="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">
                        <div className="flex items-left">
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                <h3
                                    className={
                                        "font-semibold text-lg " +
                                        (color === "light" ? "text-slate-700" : "text-white")
                                    }
                                >
                                    Salary Applications
                                </h3>
                            </div>
                            {/*<a className="text-gray-600 dark:text-gray-400 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon cursor-pointer icon-tabler icon-tabler-edit" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                    <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                    <line x1={16} y1={5} x2={19} y2={8} />
                                </svg>
                            </a>
                            <a className="text-gray-600 dark:text-gray-400 mx-2 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon cursor-pointer icon-tabler icon-tabler-settings" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <circle cx={12} cy={12} r={3} />
                                </svg>
                            </a>
                            <a className="text-gray-600 dark:text-gray-400 mr-2 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bookmark" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                                </svg>
                            </a>
                            <a className="text-gray-600 dark:text-gray-400 mr-2 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-copy" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x={8} y={8} width={12} height={12} rx={2} />
                                    <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                                </svg>
                            </a>
                            <a className="text-red-500 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon cursor-pointer icon-tabler icon-tabler-trash" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={4} y1={7} x2={20} y2={7} />
                                    <line x1={10} y1={11} x2={10} y2={17} />
                                    <line x1={14} y1={11} x2={14} y2={17} />
                                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                </svg>
                            </a>*/}
                        </div>
                    </div>
                    <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
                        <div className="flex items-center lg:border-l lg:border-r border-gray-300 dark:border-gray-200 py-3 lg:py-0 lg:px-6">
                            <p className="text-base text-gray-600 dark:text-gray-400" id="page-view">
                                Viewing 1 - 20 of 60
                            </p>
                            <a className="text-gray-600 dark:text-gray-400 ml-2 border-transparent border cursor-pointer rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="15 6 9 12 15 18" />
                                </svg>
                            </a>
                            <a className="text-gray-600 dark:text-gray-400 border-transparent border rounded focus:outline-none cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="9 6 15 12 9 18" />
                                </svg>
                            </a>
                        </div>
                        <div className="flex items-center lg:border-r border-gray-300 dark:border-gray-200 pb-3 lg:pb-0 lg:px-6">
                            <div className="relative w-32 z-10">
                                <div className="pointer-events-none text-gray-600 dark:text-gray-400 absolute inset-0 m-auto mr-2 xl:mr-4 z-0 w-5 h-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon cursor-pointer icon-tabler icon-tabler-chevron-down" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </div>
                                <select id="stausOptions" onChange={handleChange} defaultValue="all" aria-label="Selected tab" className="focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray text-base form-select block w-full py-2 px-2 xl:px-3 rounded text-gray-600 dark:text-gray-400 appearance-none bg-transparent">
                                    <option value={"all"}>All</option>
                                    <option value={"approved"}>Approved</option>
                                    <option value={"paid"}>Paid</option>
                                    <option value={"pending"}>Pending</option>
                                    <option value={"rejected"}>Rejected</option>
                                </select>
                            </div>
                        </div>
                        <div className="lg:ml-6 flex items-center">
                            <button className="bg-gray-200 transition duration-150 ease-in-out focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300 rounded text-indigo-700 px-5 h-8 flex items-center text-sm">Download All</button>
                        </div>
                    </div>
                </div>
                {!isDataAvail &&
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                        <div className="flex flex-wrap items-center h-350-px">
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-center">
                                <h3
                                    className={
                                        "font-semibold text-lg " +
                                        (color === "light" ? "text-slate-700" : "text-white")
                                    }
                                >
                                    Currently no data to show
                                </h3>
                            </div>
                        </div>
                    </div>
                }
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="py-8">
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div
                                className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                            >
                                <table className="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
                                            ></th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                            >
                                                Date
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                            >
                                                Faculty
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                            >
                                                Department
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                            >
                                                Amount
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                            >
                                                Status
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                            >
                                                Actions
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
                                            ></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map(appl => (
                                                <tr>
                                                    <td className="px-5 py-3 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                                        <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none"/>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">{appl.applicationDate}</p>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <div className="flex">
                                                            <div className="flex-shrink-0 w-10 h-10">
                                                                <img
                                                                    className="w-full h-full rounded-full"
                                                                    src={appl.faculty.profile === "default" ? require("../../assets/img/user_Icon.png") : appl.faculty.profile}
                                                                    alt="Profile photo"
                                                                />
                                                            </div>
                                                            <div className="ml-3">
                                                                <p className="text-gray-900 whitespace-no-wrap">
                                                                    {appl.faculty.name}
                                                                </p>
                                                                <p className="text-gray-600 whitespace-no-wrap">{appl.faculty.email}</p>
                                                            </div>
                                                        </div>

                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">{appl.department}</p>
                                                        {/* <p className="text-gray-600 whitespace-no-wrap">USD</p> */}
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap"><i className="fas fa-indian-rupee"></i>{appl.amount}</p>
                                                        {/* <p className="text-gray-600 whitespace-no-wrap">USD</p> */}
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        {status[appl.status]}
                                                    </td>
                                                    <td
                                                        className="px-5 py-5 border-b border-gray-200 bg-white text-md"
                                                    >
                                                        <div className="space-x-3 items-center">
                                                        <SingleFacultySalaryModel faculty={appl.faculty} id={"sedgvrfesgthfvzdrsthz"} hidden={true}/>
                                                            {/* <button
                                                                type="button"
                                                                className="fas fa-eye fa-lg"
                                                                style={{ color: "blue" }}
                                                                onClick={()=>{setFaculty(appl.faculty);setID("efreger5gegeg");setOpenModel(true);}}
                                                            >
                                                            </button> */}
                                                            <button
                                                                type="button"
                                                                className="fas fa-file-arrow-down fa-lg"
                                                                style={{ color: "gray" }}
                                                            >
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td
                                                        className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
                                                    >
                                                        <button
                                                            type="button"
                                                            className="inline-block text-gray-500 hover:text-gray-700"
                                                        >
                                                            <i className="fas fa-ellipsis-vertical fa-lg"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

CardSalaryApplications.defaultProps = {
    color: "light",
};

CardSalaryApplications.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};
