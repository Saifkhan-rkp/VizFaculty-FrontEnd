import React from "react";
// import { Link } from "react-router-dom";

// components

import LeftAlignContainer from "../components/LeftAlign/LeftAlignContainer"
import Footer from "../components/Footers/Footer";
import BlogCards from "../components/Blogs/BlogCards";
import AOS from 'aos';
import 'aos/dist/aos.css';


 





export default function Landing() {
//  function componentDidMount(){
    AOS.init({
     
    });
  // }
  return (
    <>


      {/* <Navbar /> */}
      <main className=" w-full">

        <LeftAlignContainer></LeftAlignContainer>
        {/* <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">

          <div
            className="absolute top-0 w-full h-full bg-center bg-cover" id="blackOverlay"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1626446636985-c583c1d5b237?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXIlMkNtb2JpbGUlMkNjYWxjdWxhdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')",
            }}
          >
            
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black "
            ></span>

          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl writer-text">
                    Vizfaculty
                  </h1>
                  <p className="mt-4 text-lg text-slate-200 will-change-transform ">
                    VizFaculty is a web-based application that simplifies the management break
                    of salaries and attendance of visiting faculty members in educational institutions, providing accurate and efficient record-keeping.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-slate-200 fill-current"
                points="2560  2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div> */}

        {/* <section className="pb-20 bg-slate-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Automated Salary Management</h6>
                    <p className="mt-2 mb-4 text-slate-500">
                      Revolutionize how educational institutions manage salaries for visiting faculty members with VizFaculty - the web application that streamlines the process, simplifies tasks, and increases efficiency through automation
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-sky-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">User-friendly Interface</h6>
                    <p className="mt-2 mb-4 text-slate-500">
                      Experience hassle-free management of visiting faculty member salaries with VizFaculty's user-friendly interface - designed to simplify tasks and provide a seamless experience for educational institutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Accurate Record-Keeping</h6>
                    <p className="mt-2 mb-4 text-slate-500">
                      Stay on top of attendance and payment details with VizFaculty's accurate record-keeping - the web application that provides educational institutions with reliable data management and reporting.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Say goodbye to tedious salary management for visiting faculty members
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                  Hello to VizFaculty - the web application that automates the process, simplifies tasks, and increases efficiency. With its user-friendly interface and accurate record-keeping,
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-slate-600">
                  VizFaculty revolutionizes how educational institutions manage salaries - making data management and reporting reliable and hassle-free.
                </p>

              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-sky-500">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-sky-500 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section  className="relative py-20 bg-slate-300 shadow-lg z-10 ">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden h-6/12"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
             
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img data-aos="fade-right" data-aos-duration="3000"
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-2xl">
                <div className="md:pr-12">
                  <div className="text-sky-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-sky-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">A Salary Management Web-App</h3>
                  <p className="mt-4 text-lg leading-relaxed text-slate-500">

                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-sky-600 bg-sky-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-slate-500">
                            User-friendly Interface
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-sky-600 bg-sky-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-slate-500">
                            Automated Salary Management
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-sky-600 bg-sky-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-slate-500">
                            Accurate Record-Keeping
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contributors section  */}


        
        <BlogCards  id="blogCards"> </BlogCards>




        <section className="pb-20 relative block bg-slate-300">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20 "
            style={{ transform: "translateZ(0)" }}
          >
            {/* <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
             
              
            </svg> */}
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64 ">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-black">
                  Build something
                </h2>
                <p className="text-xl leading-relaxed mt-4 mb-4 text-black">
                Empowering education through effortless salary management. 
                <p>Join us in simplifying academia with VizFaculty</p>
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-slate-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-black">
                  Streamlining Your Institution's Payroll Process with VizFaculty
                </h6>
                <p className="mt-2 mb-4 text-black">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-slate-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-black">
                  The Importance of Accurate Record-Keeping in Education
                </h5>
                <p className="mt-2 mb-4 text-black">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-slate-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-black">
                  Why Visiting Faculty Members are an Essential Part of Modern Education
                </h5>
                <p className="mt-2 mb-4 text-black">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </section>



        {/* Contact Us */}
        <section className="relative py-2 lg:pt-0 bg-slate-200  shadow-xl visible" id="contact"  >
          <div className="container mr-auto px-4 ">
            <div className="flex flex-wrap justify-between lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 mt-16 shadow-lg rounded-lg bg-slate-300">
                  <div className="flex-auto p-5 lg:p-10 visible" data-aos="fade-right" data-aos-duraion="2000">
                    <h4 className="text-2xl font-semibold">
                      Contact Us
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-slate-500">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 hover:shadow-lg"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-slate-500 text-slate-600 bg-slate-50 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" h-40 bg-slate-100 inline-block">

                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
