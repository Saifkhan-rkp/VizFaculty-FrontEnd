import React, { useState } from "react";



export default function LandingNav() {
    function IndexPage() {
        const [show, setShow] = useState(false);

        return (
            <>
                <div className="container  z-40">
                    <nav className="w-full  fixed bg-fixed top-0 z-30    shadow-xl bg-slate-300">
                        <div className="  hidden lg:flex w-full f-f-p justify-between items-center py-3 relative ">
                            <div className="w-2/3">
                                <h1 className="text-4xl ml-28 font-semibold pb-2">VizFaculty</h1>
                            </div>
                            <div className="md:w-1/2 xl:w-1/3">
                                <ul className="flex justify-between w-full items-center  text-gray-600 text-xl link ">
                                    <li className="pb-1  link font-medium">
                                        <a href="/">Home</a>
                                    </li>
                                    <li className="border-b-4 border-transparent  link font-medium">
                                        <a href>About Us</a>
                                    </li>
                                    <li className="border-b-4 border-transparent  link font-medium">
                                        <a href="#blogCards">Blogs</a>
                                    </li>
                                    <li className="transition-none">
                                        <a href="/auth/login" >
                                            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-2 text-center mr-1 cursor-pointer mb-1">Log In</button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/auth/Register">
                                            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-2 text-center mr-20 mb-1">Register</button>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <nav className="lg:hidden">
                        <div className="flex py-4 z-0 justify-between items-center px-4">
                            <div>
                                <div className="w-2/3">
                                    <h1 className="text-4xl">VizFaculty</h1>
                                </div>
                            </div>
                            <div className=" flex items-center">
                                {show && (
                                    <ul id="list" className=" p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16">
                                        <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                            <a href="javascript:void(0)">
                                                <span className="ml-2 font-bold pb-1 ">Home</span>
                                            </a>
                                        </li>

                                        <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none  justify-center" onclick="dropdownHandler(this)">
                                            <a href="javascript:void(0)">
                                                <span className="ml-2 font-bold">Blog</span>
                                            </a>
                                        </li>
                                        <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none  justify-center" onclick="dropdownHandler(this)">
                                            <a href="javascript:void(0)">
                                                <span className="ml-2 font-bold">About Us</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#LogIn" >
                                                <button type="button" class="active text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-2 text-center mr-1 mb-1">Log In</button>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#Register.js">
                                                <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-2 text-center mr-1 mb-1">Register</button>
                                            </a>
                                        </li>
                                    </ul>
                                )}
                                <div className="xl:hidden" onClick={() => setShow(!show)}>
                                    {show ? (
                                        <div id="close" className=" close-m-menu">
                                            <svg aria-label="Close" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <line x1={18} y1={6} x2={6} y2={18} />
                                                <line x1={6} y1={6} x2={18} y2={18} />
                                            </svg>
                                        </div>
                                    ) : (
                                        <svg id="open" aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="show-m-menu icon icon-tabler icon-tabler-menu" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <line x1={4} y1={8} x2={20} y2={8} />
                                            <line x1={4} y1={16} x2={20} y2={16} />
                                        </svg>
                                    )}
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </>
        );

    }
}