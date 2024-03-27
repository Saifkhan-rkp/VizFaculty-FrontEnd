// import React, { useState } from "react";
import React, { useRef, useState } from 'react';
// import LandingNav from "../Navbars/LandingNav";
// import Typed from 'typed.js';

function IndexPage() {
    const [show, setShow] = useState(false);

    const Mystyle = {
        width: "100%",
        height: "100%",
        paddingBottom: "100%",
        position: "relative"
    }
    // Typed.Js
    const typedElementRef = useRef(null);


    // useEffect(() => {
    //     const options = {
    //         strings: ['Are you struggling to manage the salaries and attendance of visiting faculty members in your institution?', 'VizFaculty automate the process for you!'],
    //         typeSpeed: 120,
    //         backSpeed: 150,
    //         loop: true,
    //         showCursor: false,

    //         smartBackspace: true,
    //     };

    //     const typed = new Typed(typedElementRef.current, options);

    //     return () => {
    //         typed.destroy();
    //     };
    // }, []);


    return (
        <>

            <div className="lg:px-6 xl:px-0   bg-slate-200   shadow-inner shadow-black">                    
                <div className="mx-auto container relative z-0 px-4 xl:px-0" >
                    <div className="flex flex-col-reverse md:flex-row">
                        <div data-aos="zoom-in" data-aos-duration="1500" className=" md:w-3/5 md:pt-24 pb-10 lg:py-20 xl:py-40 visible "  >
                            <h1 className="text-2xl lg:text-4xl xl:text-6xl font-black text-gray-900 text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color" >VIZFACULTY A SALARY MANAGEMENT WEB-APP</h1>
                            <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-gray-700 text-lg lg:text-2xl" ref={typedElementRef} >Are you struggling to manage the salaries and attendance of visiting faculty members in your institution? Let <span className="font-semibold text-slate-700">VizFaculty </span>automate the process for you!  </h2>

                        </div>
                        <div className="w-1/2 sm:w-2/5 h-64 md:h-auto m-auto flex items-center overflow-hidden">


                            <div className=" md:absolute md:w-1/2 md:-ml-28 " style={Mystyle}><img src="https://media.giphy.com/media/UeFFL2K5p6s0UJQUci/giphy.gif" width="100%" height="100%" style={{ position: "absolute" }} frameBorder="0" class="giphy-embed" allowFullScreen></img></div>
                            {/* style="width:100%;height:0;padding-bottom:100%;position:relative;" */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IndexPage;
