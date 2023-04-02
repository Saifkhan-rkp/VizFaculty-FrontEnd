import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import AdminNavBar from "../components/Navbars/AdminNavbar";
import HeaderStats from "../components/Headers/HeaderStats";
import AttendenceForm from "../components/AttendenceForm/AttendenceForm";
import FooterAdmin from "../components/Footers/FooterAdmin";

export default function FacultyDashboard() {
  return (
    <>
      <Sidebar
        heading="Faculty Layout Pages"
        item1="My Dashboard"
        item2="Settings"
        item3="Attendence"
        item4="Salary Status"
      />
      <div className="relative md:ml-64 bg-slate-100">
        <AdminNavBar />
        <HeaderStats userType="faculty" />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
              <AttendenceForm />
            </div>
          </div>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
