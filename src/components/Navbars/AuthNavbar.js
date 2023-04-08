/*eslint-disable*/
import React from "react";
<<<<<<< HEAD
// import { Link } from "react-router-dom";
=======
import { Link, useNavigate } from "react-router-dom";
>>>>>>> b3dc2688e3abe5c49e71508d94b6eb67ca6e66d0

// components

import PagesDropdown from "../Dropdowns/PagesDropdown";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const navigate = useNavigate();
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              to="/"
            >
              VizFaculty
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            {/* <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-slate-200 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-auth-navbar"
                >
                  <i className="lg:text-slate-200 text-slate-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  Docs
                </a>
              </li>
            </ul> */}
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <PagesDropdown />
              </li>
              {/* <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-slate-200 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F"
                  target="_blank"
                >
                  <i className="lg:text-slate-200 text-slate-400 fab fa-facebook text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li>

               */}
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-slate-200 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#blogs"
                >
                  Blogs
                  {/* <i className="lg:text-slate-200 text-slate-400 fab fa-twitter text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Tweet</span> */}
                </a>
              </li>

              <li className="flex items-center">
                <button
                  type="button"
                  onClick={() => navigate('/auth/login')}
                  className="text-slate-700 lg:text-white hover:text-slate-700 border border-slate-700 lg:border-white hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-slate-300 text-xs font-bold uppercase px-4 py-2 text-center rounded shadow hover:shadow-md outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150">
                  Login
                </button>
              </li>

              <li className="flex items-center">
                <button
                  onClick={() => navigate('/auth/register')}
                  className="bg-white text-slate-700 active:bg-slate-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i className="fas fa-right-to-bracket"></i> Register
                </button>
              </li>
            </ul>
          </div>
        </div>
<<<<<<< HEAD
      </nav> */


        <nav class="  w-full border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700  ">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 align-middle ">
            <a href="#" class="flex items-center">
              {/* <img src="" class="h-8 mr-3 text-white" alt="Viz Logo" /> */}
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">VizFaculty</span>
=======
      </nav>
      {/* <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600  backdrop-filter backdrop-blur-lg  opacity-75">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
            <a href="https://flowbite.com/" className="flex items-center">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">VizFaculty</span>
>>>>>>> b3dc2688e3abe5c49e71508d94b6eb67ca6e66d0
            </a>
            <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div class=" w-full md:block md:w-auto inline-flex"  id="navbar-solid-bg">
              <ul class="inline-flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 align-middle ">
                <li>
                  <a href="#" class="block py-3 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
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
<<<<<<< HEAD
        </nav>


      }
=======
        </nav> */}
>>>>>>> b3dc2688e3abe5c49e71508d94b6eb67ca6e66d0
    </>
  );
}
