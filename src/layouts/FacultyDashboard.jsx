import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import AdminNavBar from "../components/Navbars/AdminNavbar";
import HeaderStats from "../components/Headers/HeaderStats";

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
        <HeaderStats 
          userType="faculty"
        />
      </div>
    </>
  );
}
