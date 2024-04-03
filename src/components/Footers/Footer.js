import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-slate-300 pt-8 pb-6  mx-auto z-40">
        
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-slate-600">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-sky-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="bg-white text-sky-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-dribbble"></i>
                </button>
                <button
                  className="bg-white text-slate-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-slate-500 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                        href="#blogCards"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                        href="https://github.com/Saifkhan-rkp/VizFaculty-FrontEnd.git"
                      >
                        Github
                      </a>
                    </li>
                   <li>
                      <a
                        className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                        href="#contact"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-slate-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-slate-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} VizFaculty {" "}
                Made in love With HMMMMMMMM.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
