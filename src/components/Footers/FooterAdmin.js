import React from "react";

export default function FooterAdmin() {
  return (
    <>
      <footer className="block py-4">
        <div className="container mx-auto px-4">
          <hr className="mb-4 border-b-1 border-slate-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-slate-500 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://google.com"
                  className="text-slate-500 hover:text-slate-700 text-sm font-semibold py-1"
                >
                  VizFaculty
                </a>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <a
                    href="https://google.com"
                    className="text-slate-600 hover:text-slate-800 text-sm font-semibold block py-1 px-3"
                  >
                    VizFaculty
                  </a>
                </li>
                <li>
                  <a
                    href="https://VizFaculty.com/AboutUs"
                    className="text-slate-600 hover:text-slate-800 text-sm font-semibold block py-1 px-3"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="http://google.com"
                    className="text-slate-600 hover:text-slate-800 text-sm font-semibold block py-1 px-3"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/"
                    className="text-slate-600 hover:text-slate-800 text-sm font-semibold block py-1 px-3"
                  >
                    MIT License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
