
import React from "react";
// import { Link } from "react-router-dom";



import PagesDropdown from "../Dropdowns/PagesDropdown";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      {/* <nav classNameName="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div classNameName="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div classNameName="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              classNameName="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              to="/"
            >
              VizFaculty
            </Link>
            <button
              classNameName="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i classNameName="text-white fas fa-bars"></i>
            </button>
          </div>
          <div
            classNameName={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul classNameName="flex flex-col lg:flex-row list-none mr-auto">
              <li classNameName="flex items-center">
                <a
                  classNameName="lg:text-white lg:hover:text-slate-200 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-auth-navbar"
                >
                  <i classNameName="lg:text-slate-200 text-slate-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  Docs
                </a>
              </li>
            </ul>
            <ul classNameName="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li classNameName="flex items-center">
                <PagesDropdown />
              </li>
              <li classNameName="flex items-center">
                <a
                  classNameName="lg:text-white lg:hover:text-slate-200 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F"
                  target="_blank"
                >
                  <i classNameName="lg:text-slate-200 text-slate-400 fab fa-facebook text-lg leading-lg " />
                  <span classNameName="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li>

              <li classNameName="flex items-center">
                <a
                  classNameName="lg:text-white lg:hover:text-slate-200 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20React%20UI%20Kit%20and%20Admin.%20Let%20Notus%20React%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.%20"
                  target="_blank"
                >
                  <i classNameName="lg:text-slate-200 text-slate-400 fab fa-twitter text-lg leading-lg " />
                  <span classNameName="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li>

              <li classNameName="flex items-center">
                <a
                  classNameName="lg:text-white lg:hover:text-slate-200 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://github.com/creativetimofficial/notus-react?ref=nr-auth-navbar"
                  target="_blank"
                >
                  <i classNameName="lg:text-slate-200 text-slate-400 fab fa-github text-lg leading-lg " />
                  <span classNameName="lg:hidden inline-block ml-2">Star</span>
                </a>
              </li>

              <li classNameName="flex items-center">
                <button
                  classNameName="bg-white text-slate-700 active:bg-slate-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i classNameName="fas fa-arrow-alt-circle-down"></i> Download
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav> */


        <nav class="  w-full  bg-slate-700  ">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 align-middle ">
            <a href="#" class="flex items-center">
              {/* <img src="" class="h-8 mr-3 text-white" alt="Viz Logo" /> */}
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">VizFaculty</span>
            </a>
            <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-slate-800 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div class=" w-full md:block md:w-auto inline-flex" id="navbar-solid-bg">
              <ul class="inline-flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 align-middle ">
                <li>
                  <a href="#" class="block py-3 pl-3 pr-4 text-slate-800 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Blogs</a>
                </li>
                <li>
                  <a href="#" class="flex py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                </li>
                <li>
                  <a href="#LogIn" >
                    <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-2 text-center mr-1 mb-1">Log In</button>
                  </a>
                </li>
                <li>
                  <a href="#Register.js">
                    <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-2 text-center mr-1 mb-1">Register</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>


      }
    </>
  );
}
