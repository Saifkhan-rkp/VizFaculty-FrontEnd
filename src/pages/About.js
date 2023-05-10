// import React from "react";
import React, { useRef, useEffect, useState } from 'react';
// import { Link } from "react-router-dom";

// components
import LandingNav from "../components/Navbars/LandingNav";
import LeftAlignContainer from "../components/LeftAlign/LeftAlignContainer"
import Footer from "../components/Footers/Footer";
import BlogCards from "../components/Blogs/BlogCards";

import AOS from 'aos';
import 'aos/dist/aos.css';


export default function About() {

    // typedjs
    const [show, setShow] = useState(true);

    const Mystyle = {
        width: "100%",
        height: "100%",
        paddingBottom: "100%",
        position: "relative"
    }

    // AOS animate
    AOS.init({

    });

    // const Mystyle = {
    //   width: "100%",
    //   height: "0",
    //   paddingBottom: "91%",
    //   position: "relative",
    // }

    return (
        <>
            {/* nav start */}
            <div className="container  ">

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
                                    <a href="/pages/About">About Us</a>
                                </li>
                                <li className="border-b-4 border-transparent  link font-medium">
                                    <a href="/pages/Blog">Blogs</a>
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
                                <h1 className="text-4xl"  >VizFaculty</h1>
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
                                        <a href="/pages/Blog">
                                            <span className="ml-2 font-bold">Blog</span>
                                        </a>
                                    </li>
                                    <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none  justify-center" onclick="dropdownHandler(this)">
                                        <a href="/pages/About">
                                            <span className="ml-2 font-bold">About Us</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/auth/login" >
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
            {/* mav end */}
            <main className=" relative z-10 top-16 px-20 py-10 bg-slate-200">
                <div className="container-fluid p-10 font-normal bg-slate-200 text-black ">
                    <h1 className="text-center text-5xl pb-2 font-semibold">VizFaculty<h2 className='text-xl py-3'>A visiting faculty salary managament web app</h2></h1>

                    <h3 className='text-3xl py-2 font-semibold'>Introduction</h3>
                    <div className='text-xl px-6 shadow-inner'>

                        <p>In today's fast-paced world, every educational institute has visiting faculty members who contribute significantly to the growth and success of the institution. Managing their salaries and lectures can be a challenging task for the institute's administration. With the aim of simplifying this process, VizFaculty, a web-based application, was developed to manage the salaries and lectures of visiting faculty members.</p>

                        <p>VizFaculty is a user-friendly and interactive web application that automates the salary and lecture management system of visiting faculty members. The application is designed to streamline the process of managing salaries and lectures by eliminating the need for paper-based records. The application provides a centralized system to manage visiting faculty members' details and generate their salary slips automatically.</p>

                        <p> With VizFaculty, educational institutes can effectively manage their visiting faculty members' salaries, including tracking their attendance and leaves, generating salary slips, and calculating salaries. The application also provides a feature to schedule and manage the lectures of visiting faculty members.</p>
                    </div>
                </div>
                <div>

                    {/* Flow */}
                    <div className="container-fluid p-10 shadow-inner font-normal bg-slate-200 text-black ">
                        <h3 className='text-3xl py-3 font-semibold'>Flow of VizFaculty</h3>
                        <div className='text-xl px-6'>The flow of Vizfaculty can be summarized in the following steps:
                            <p>
                                <span className='font-semibold'>1. Admin login:</span> The administrator logs into the web application using their credentials.
                            </p><p>
                                <span className='font-semibold'>2. Faculty management:</span> The administrator can add or remove visiting faculty members as required. They can also view the list of faculty members and their details.
                            </p><p>
                                <span className='font-semibold'>3. Timetable management: </span>The administrator can manage the timetable of the visiting faculty members. They can assign classes to faculty members, edit the timetable, and view the timetable for a particular faculty member.
                            </p><p>
                                <span className='font-semibold'>4. Salary management: </span>The administrator can manage the salaries of the visiting faculty members. They can generate payslips, view the salary details of each faculty member, and edit the salary details if required.
                            </p><p>
                                <span className='font-semibold'>5. Reports: </span>The administrator can generate reports related to the visiting faculty members. They can view the attendance reports, salary reports, and timetable reports.
                            </p><p>
                                <span className='font-semibold'>6. Logout: </span>The administrator logs out of the web application.
                            </p><p>
                                This flow ensures that the administrator can efficiently manage the visiting faculty members in the educational institution and keep track of their salary and timetable details.</p>
                        </div>
                    </div>

                    <div className="container-fluid p-10 shadow-inner font-normal bg-slate-200 text-black ">
                        <h3 className='text-3xl py-3 font-semibold' >Existing system</h3>
                        <p className="text-xl px-6">
                            The current system of salary management in our organization involves several manual processes that can be time-consuming and prone to errors. It includes attendance recording teachers are required to manually record attendance in a register during each class they teach. This register includes the date, class name, and branch, Verification the administrative staff then manually verifies the attendance records entered by the teacher. They check for errors or discrepancies in the attendance record and ensure that it is complete and accurate, Approval the attendance record is then sent to the Head of Department (HOD) for approval. The HOD reviews the attendance record and signs off on it to confirm that it is accurate and complete, Payroll Processing the payroll department manually calculates the faculty member's salary based on the number of lectures they have taught and their hourly rate. This calculation is based on the attendance records submitted by the teacher and the reports on payroll expenses, attendance records, and other relevant metrics are manually generated by the administrative staff. </p>

                        <img className='p-10' src={require("../assets/img/Existing.png")}></img>
                    </div>
                    {/* Proposed system */}
                    <div className="container-fluid p-10  shadow-inner font-normal bg-slate-200 text-black ">
                        <h3 className='text-3xl py-3 font-semibold' >Proposed system</h3>
                        <p className="text-xl px-6">
                            A VizFaculty Salary Management Web App provides a user-friendly and
                            efficient way for employees and administration to manage salary and payroll
                            processes. It reduces the risk of errors and saves time by automating the
                            salary calculation process. Additionally, the reports generated by the web
                            app can provide insights into the payroll expenses and other relevant
                            metrics, making it easier for administrator to make informed decisions
                            regarding payroll management. It contains User Login faculty and
                            administrators would need to log in to the web app using their login
                            credentials to access the salary management features, Input Data faculty
                            would enter their hours worked, hourly rate and other relevant information
                            in the designated fields, The web app would use the input data to calculate
                            gross pay</p>

                        <img className='p-10' src={require("../assets/img/Propose.png")}></img>
                    </div>

                    <div className="container-fluid p-10 shadow-inner  font-normal bg-slate-200 text-black ">
                        <h3 className='text-3xl py-3 font-semibold' >Acknowledgments</h3>
                        <p className="text-xl px-6 italic">
                            "We would like to express our heartfelt gratitude to <span className='font-semibold'>Prof. Madhura Garge</span>, our project guide, for her constant guidance, support, and motivation throughout the development of <span className='font-semibold'>Vizfaculty</span>. Her expertise and insights were invaluable in helping us navigate the challenges we faced during the development of VizFaculty. I would also like to extend our sincere thanks to <span className='font-semibold'>Chandrajeet Borkar (CJ)</span>, our project incharge and mentor, for his unwavering support and encouragement. His constructive feedback and practical advice helped us to achieve our goals and deliver a successful project like VizFaculty."</p>


                    </div>

                    <section className="pt-20 mb-10  bg-slate-200 shadow-">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-wrap justify-center text-center mb-20">
                                <div className="w-full lg:w-6/12 px-4">
                                    <h2 className="text-4xl font-semibold">Here are our heroes</h2>
                                    <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                                        The developers behind VizFaculty are a team of talented and passionate individuals who share a common goal of revolutionizing the education industry through the use of technology.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                                    <div className="px-6">
                                        <img
                                            alt="..."
                                            src={require("../assets/img/saif.jpg")}
                                            className="shadow- rounded-full mx-auto max-w-200-px max-h-200-px"
                                        />
                                        <div className="pt-6 text-center">
                                            <h5 className="text-xl font-bold">Saif Khan Pathan</h5>
                                            <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                                Team Leader
                                            </p>
                                            <div className="mt-6">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                                    <div className="px-6">
                                        <img
                                            alt="..."
                                            src={require("../assets/img/hardik.jpeg")}
                                            className="shadow- rounded-full mx-auto max-w-200-px max-h-200-px"
                                        />
                                        <div className="pt-6 text-center">
                                            <h5 className="text-xl font-bold">Hardik Thakre</h5>
                                            <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                                Team Member
                                            </p>
                                            <div className="mt-6">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                                    <div className="px-6">
                                        <img
                                            alt="..."
                                            src={require("../assets/img/DJ.jpg")}
                                            className="shadow- rounded-full mx-auto max-w-200-px max-h-200-px"
                                        />
                                        <div className="pt-6 text-center">
                                            <h5 className="text-xl font-bold">Devashish Jaybhaye</h5>
                                            <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                                Team Member
                                            </p>
                                            <div className="mt-6">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                                    <div className="px-6">
                                        <img
                                            alt="..."
                                            src={require("../assets/img/team-1-800x800.jpg")}
                                            className="shadow- rounded-full mx-auto max-w-200-px max-h-200-px"
                                        />
                                        <div className="pt-6 text-center">
                                            <h5 className="text-xl font-bold">Ishan Dede</h5>
                                            <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                                Team Member
                                            </p>
                                            <div className="mt-6">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

            </main>

            <Footer />
        </>
    );
}