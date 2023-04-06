import React, { useState } from "react";
import PropTypes from "prop-types";

// components

// import TableDropdown from "../Dropdowns/TableDropdown";

export default function CardPage({ color }) {
    const [isDataAvail, setIsDataAvail] = useState(true);
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
            <span className="relative">Paid</span>
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
                <div className="rounded-t mb-0 px-4 py-3 border-0">
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
                        <div>
                            <h2 className="text-2xl font-semibold leading-tight">Invoices</h2>
                        </div>
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
                                        <tr>
                                            <td className="px-5 py-3 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                                <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none" onclick="tableInteract(this)" />
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">Sept 28, 2019</p>
                                                <p className="text-gray-600 whitespace-no-wrap">Due in 3 days</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <div className="flex">
                                                    <div className="flex-shrink-0 w-10 h-10">
                                                        <img
                                                            className="w-full h-full rounded-full"
                                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            Molly Sanders
                                                        </p>
                                                        <p className="text-gray-600 whitespace-no-wrap">000004</p>
                                                    </div>
                                                </div>

                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">CSE</p>
                                                {/* <p className="text-gray-600 whitespace-no-wrap">USD</p> */}
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap"><i className="fas fa-indian-rupee"></i>20,000</p>
                                                {/* <p className="text-gray-600 whitespace-no-wrap">USD</p> */}
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                {status.pending}
                                            </td>
                                            <td
                                                className="px-5 py-5 border-b border-gray-200 bg-white text-md"
                                            >
                                                <div className="space-x-3 items-center">
                                                    <button
                                                        type="button"
                                                        className="fas fa-eye fa-lg"
                                                        style={{ color: "blue" }}
                                                    >
                                                    </button>
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

CardPage.defaultProps = {
    color: "light",
};

CardPage.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};
