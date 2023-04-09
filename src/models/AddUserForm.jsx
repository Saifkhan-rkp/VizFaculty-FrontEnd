import React, { useState } from "react";
import PropTypes from "prop-types";
// import Head from "next/head";

function AddUserForm({type}) {

    const [flag, setFlag] = useState(false);
    const setPopup = () => {
        setFlag(!flag)
        // if (flag) {
        //     document.getElementById("POPUP").classList.add("hidden");
        // } else {
        //     document.getElementById("POPUP").classList.remove("hidden");
        // }
    }
    return (
        <>
            {/* <button onClick={setPopup} className="px-6 py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white">Add User</button> */}
            <button
                className={(type==="dept"?"bg-gray-500 text-white active:bg-gray-600 ":"bg-blue-500 text-white active:bg-blue-600 ")+"text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"}
                type="button"
                onClick={setPopup}
            >
                <i className='fas fa-plus' style={{ color: "white" }} />
                Add {(type==="dept"?" Department":" Faculty")}
            </button>
            {flag 
            &&  
            <div id="POPUP" className="z-50 fixed w-full flex justify-center inset-0">
                <div onClick={setPopup} className="w-full h-full bg-transparent z-0 absolute inset-0" />
                <div className="mx-auto container">
                    <div className="flex items-center justify-center h-full w-full">
                        <div className="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5">
                            <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
                                <p className="text-base font-semibold">Create New User</p>
                                <button onClick={setPopup} className="focus:outline-none">
                                    <i className="fas fa-xmark fa-xl" style={{color:"gray"}}/>
                                </button>
                            </div>
                            <div className="px-4 md:px-10 pt-6 md:pt-12 md:pb-4 pb-7">
                                <div className="flex items-center justify-center">
                                    <div className="w-40 h-40 p-16 bg-gray-100 rounded-md flex items-center justify-center">
                                        <svg width={36} height={36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.5 12H22.515" stroke="#94A3B8" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M25.5 6H10.5C8.01472 6 6 8.01472 6 10.5V25.5C6 27.9853 8.01472 30 10.5 30H25.5C27.9853 30 30 27.9853 30 25.5V10.5C30 8.01472 27.9853 6 25.5 6Z" stroke="#94A3B8" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6 22.4999L12 16.4999C12.6841 15.8417 13.4601 15.4951 14.25 15.4951C15.0399 15.4951 15.8159 15.8417 16.5 16.4999L24 23.9999" stroke="#94A3B8" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M21 20.9999L22.5 19.4999C23.1841 18.8417 23.9601 18.4951 24.75 18.4951C25.5399 18.4951 26.3159 18.8417 27 19.4999L30 22.4999" stroke="#94A3B8" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <form className="mt-11">
                                    <div className="flex items-center space-x-9">
                                        <input placeholder="Full Name" className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200" />
                                        <input placeholder="Age" type="number" min={0} className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200" />
                                    </div>
                                    <div className="flex items-center space-x-9 mt-8">
                                        <input placeholder="Email" type="email" className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200" />
                                        <div className="w-1/2 bg-white border rounded border-gray-200 py-2.5 px-3">
                                            <select className="text-sm text-gray-500 w-full focus:outline-none">
                                                <option selected disabled value>
                                                    Category
                                                </option>
                                                <option>Designer</option>
                                                <option>Developer</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <textarea placeholder="Description" className="py-3 pl-3 overflow-y-auto h-24 border rounded border-gray-200 w-full resize-none focus:outline-none" defaultValue={""} />
                                    </div>
                                </form>
                                <div className="flex items-center justify-between mt-9">
                                    <button onClick={setPopup} className="px-6 py-3 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white">
                                        Cancel
                                    </button>
                                    <button className="px-6 py-3 bg-blue-700 hover:bg-opacity-80 shadow rounded text-sm text-white">Add {(type==="dept"?" Department":" Faculty")}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    );
}

AddUserForm.defaultProps ={
    type:"faculty"
}

AddUserForm.propTypes = {
    type : PropTypes.oneOf(["faculty", "dept"]) 
}

export default AddUserForm;
