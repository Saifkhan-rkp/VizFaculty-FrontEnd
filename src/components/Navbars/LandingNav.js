import React, { createRef, useState } from "react";
import { Link } from "react-router-dom";
import { LogoutUser, getAuthData } from "../../utils/utils";
import { createPopper } from "@popperjs/core";
import UserDropdown from "../Dropdowns/UserDropdown";
import { Facultylinks } from "../../layouts/facultyLayout/FacultyDashboard";
import { Deptlinks } from "../../layouts/deptLayout/HodDasboard";
import { AdminDeptlinks } from "../../layouts/adminDeptLayouts/AdminDeptDashboard";



export default function LandingNav() {
    const [show, setShow] = useState(false);
    const auth = getAuthData();
    const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
    const btnDropdownRef = createRef();
    const popoverDropdownRef = createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start",
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };

    const headLink = () => {
        if (auth?.role === "deptHead")
            return Deptlinks;
        else if (auth?.role === "faculty")
            return Facultylinks;
        else if (auth?.role === "adminDept")
            return AdminDeptlinks;
        else
            return [{ heading: "", link: "/" }, { heading: "", link: "/" }, { heading: "", link: "/" }, { heading: "", link: "/" }]
    }
    return (
        <>
            <div className="z-50">
                <nav className="bg-white border-gray-200 py-2.5">
                    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                        <a href="#" className="flex items-center">
                            <img src={require("../../assets/img/VizFaculty_logo.png")} className="h-6 mr-3 sm:h-9" alt="VizFaculty Logo" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap">VizFaculty</span>
                        </a>
                        <div className="flex items-center lg:order-2">
                            <div className="hidden mt-2 mr-4 sm:inline-block">
                                <span></span>
                            </div>
                            {auth
                                ? <>
                                    <figure
                                        ref={btnDropdownRef}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                                        }}
                                        className="relative flex flex-col-reverse  border-2 border-sky-400 rounded-3xl">
                                        <figcaption className="flex items-center space-x-2 mr-2">
                                            <img src={!auth?.profilePhoto || auth?.profilePhoto === "default" ? require("../../assets/img/user_avtar.png") : auth?.profilePhoto} alt="" className="flex-none w-10 h-10 rounded-full object-cover" loading="lazy" decoding="async" />
                                            <div className="flex-auto hidden lg:block md:block overflow-hidden">
                                                <div className="text-base text-slate-900 font-semibold truncate">
                                                    {auth?.name || ""}
                                                </div>
                                                <div className="">
                                                    {auth?.role === "faculty" ? "Faculty" : auth?.role === "deptHead" ? "Dept. Head" : auth?.role === "adminDept" ? "Admin Dept." : "role: NA"}
                                                </div>
                                            </div>
                                            <i className="fa fa-angle-down" style={{ color: "rgb(56, 189, 248)" }}></i>
                                        </figcaption>
                                    </figure>
                                    <div
                                        ref={popoverDropdownRef}
                                        className={
                                            (dropdownPopoverShow ? "block " : "hidden ") +
                                            "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                                        }
                                    >
                                        <Link
                                            to={headLink()[0]?.link}
                                            className={
                                                "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                            }
                                        // onClick={(e) => e.preventDefault()}
                                        >
                                            {headLink()[0]?.heading}
                                        </Link>
                                        <Link
                                            to={headLink()[1]?.link}
                                            className={
                                                "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                            }
                                        >
                                            {headLink()[1]?.heading}
                                        </Link>
                                        <Link
                                            to={headLink()[2]?.link}
                                            className={
                                                "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                            }

                                        >
                                            {headLink()[2]?.heading}
                                        </Link>
                                        <div className="h-0 my-2 border border-solid border-slate-100" />
                                        <button
                                            className={
                                                "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                            }
                                            onClick={LogoutUser}
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </>
                                :
                                <div className="flex space-x-2">
                                    <Link
                                        to={"/auth/register"}
                                        title="Sign Up"
                                        className="hidden lg:block text-center justify-center text-sky-900 bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none lg:visible">
                                        Sign Up
                                    </Link>
                                    <Link
                                        to={"/auth/login"}
                                        className="text-white bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none">
                                        Login
                                    </Link>
                                </div>
                            }
                            <button data-collapse-toggle="mobile-menu-2" type="button" onClick={() => setShow(!show)}
                                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                aria-controls="mobile-menu-2" aria-expanded="true">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                        <div className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${show ? "" : "hidden"}`} id="mobile-menu-2">
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <a href="/"
                                        className="block py-2 pl-3 pr-4 text-white bg-sky-500 rounded lg:bg-transparent lg:text-sky-500 lg:p-0"
                                        aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="/#blogs"
                                        className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-500 lg:p-0">
                                        Blogs
                                    </a>
                                </li>
                                {/* <li>
                                    <a href="#"
                                        className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-500 lg:p-0">
                                        Marketplace
                                    </a>
                                </li> */}
                                <li>
                                    <a href="/#features"
                                        className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-500 lg:p-0">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a href="/#contact"
                                        className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-500 lg:p-0">
                                        Contact
                                    </a>
                                </li>
                                {!auth &&
                                    <li>
                                        <a href="/auth/register"
                                            className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-500 lg:p-0 sm:hidden">
                                            Sign up
                                        </a>
                                    </li>}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );

}