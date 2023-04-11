import React from "react";

// components

export default function CardProfile() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src={require("../../assets/img/team-2-800x800.jpg")}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="text-center">
                  <button
                    className="bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Change Profile Photo
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-slate-700 mb-2">
              Jenna Stones
            </h3>
            <div className="mb-5 text-slate-600 mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-slate-400"></i>
              Solution Manager - Creative Tim Officer
            </div>
            <div className="mb-20 text-slate-600">
              <i className="fas fa-university mr-2 text-lg text-slate-400"></i>
              University of Computer Science
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
