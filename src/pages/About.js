// import React from "react";
import React from 'react';
// import { Link } from "react-router-dom";

// components
import Footer from "../components/Footers/Footer";

import AOS from 'aos';
import 'aos/dist/aos.css';


export default function About() {

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

            {/* nav end */}
            <main className=" relative z-10 top-16 px-20 py-10 bg-slate-200">
                <div className="container-fluid p-10 font-normal bg-slate-200 text-black text-justify">
                    <h1 className="text-center text-5xl pb-2 font-semibold">VizFaculty<h2 className='text-xl py-3'>A visiting faculty salary managament web app</h2></h1>

                    <h3 className='text-3xl py-2 font-semibold'>About</h3>
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
                        <div className='text-xl px-6 text-justify'>The flow of Vizfaculty can be summarized in the following steps:
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
                                This flow ensures that the administrator can efficiently manage the visiting faculty members in the educational institution and keep track of their salary and timetable details.
                            </p>
                        </div>
                    </div>

                    {/* <div className="container-fluid p-10 shadow-inner font-normal bg-slate-200 text-black ">
                        <h3 className='text-3xl py-3 font-semibold' >Existing system</h3>
                        <p className="text-xl px-6">
                            The current system of salary management in our organization involves several manual processes that can be time-consuming and prone to errors. It includes attendance recording teachers are required to manually record attendance in a register during each class they teach. This register includes the date, class name, and branch, Verification the administrative staff then manually verifies the attendance records entered by the teacher. They check for errors or discrepancies in the attendance record and ensure that it is complete and accurate, Approval the attendance record is then sent to the Head of Department (HOD) for approval. The HOD reviews the attendance record and signs off on it to confirm that it is accurate and complete, Payroll Processing the payroll department manually calculates the faculty member's salary based on the number of lectures they have taught and their hourly rate. This calculation is based on the attendance records submitted by the teacher and the reports on payroll expenses, attendance records, and other relevant metrics are manually generated by the administrative staff. </p>

                        <img className='p-10' src={require("../assets/img/Existing.png")}></img>
                    </div>
                    {/* Proposed system */}
                    <div className="container-fluid p-10  shadow-inner font-normal bg-slate-200 text-black ">
                        <h3 className='text-3xl py-3 font-semibold' >Proposed system</h3>
                        <p className="text-xl px-6 text-justify">
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

                        <p className="text-xl px-6 text-justify">Near Field Communication (NFC) technology has gained prominence for its seamless communication capabilities over short distances. It allows two devices, in this case, an NFC-enabled identification card and an NFC reader, to establish a connection by simply bringing them close together. The proposed NFC-based staff attendance system utilizes this technology to create a more efficient, accurate, and secure method of recording attendance for college staff.
                            The college environment presents unique challenges in attendance management, with a diverse staff population and fluctuating schedules. Traditional methods often struggle to adapt to these complexities, leading to inaccuracies and administrative burdens. The NFC-based system offers a contemporary solution by introducing a user-friendly and technologically advanced approach to attendance tracking.
                            This research aims to explore the feasibility, implementation, and impact of an NFC-based staff attendance system in a college setting. By investigating the advantages of NFC technology, such as real-time tracking, enhanced security features, and seamless integration with existing databases, the research seeks to provide valuable insights into how this system can revolutionize attendance management in colleges
                        </p>

                        {/* <img className='p-10' src={require("../assets/img/Propose.png")}></img> */}
                    </div>

                    {/*<div className="container-fluid p-10 shadow-inner  font-normal bg-slate-200 text-black ">
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
                                            src={require("../assets/img/sdfgh.jpg")}
                                            className="shadow- rounded-full mx-auto max-w-200-px max-h-200-px"
                                        />
                                        <div className="pt-6 text-center">
                                            <h5 className="text-xl font-bold">Saif</h5>
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
                                            src={require("../assets/img/dfghjk.jpeg")}
                                            className="shadow- rounded-full mx-auto max-w-200-px max-h-200-px"
                                        />
                                        <div className="pt-6 text-center">
                                            <h5 className="text-xl font-bold">X2</h5>
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
                                            <h5 className="text-xl font-bold">dfgh</h5>
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
                                            <h5 className="text-xl font-bold">dfghj</h5>
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
                    </section>*/}

                </div>

            </main>

            <Footer />
        </>
    );
}