import React from "react";
// import { Navigate } from "react-router-dom";

// components

import Navbar from "../components/Navbars/AuthNavbar.js";
import FooterSmall from "../components/Footers/FooterSmall.js";

// views

// import Login from "../pages/auth/Login.js";
// import Register from "../pages/auth/Register.js";
import { Outlet } from "react-router-dom";

export default function Auth(props) {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-slate-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("../assets/img/register_bg_2.png") + ")",
            }}
          ></div>
          <Outlet/>
          {/* <Navigate from="/auth" to="/auth/login" /> */}
          {/* <props.type/> */}
          {/* {props.type==="login" && (<Login/>)}
          {props.type==="register" && (<Register/>)} */}
          {/* <Routes>
            <Route path="/auth/login" exact component={Login} />
            <Route path="/auth/register" exact component={Register} />
          </Routes> */}
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
