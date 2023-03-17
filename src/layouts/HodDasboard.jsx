import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import AdminNavBar from "../components/Navbars/AdminNavbar";
import HeaderStats from "../components/Headers/HeaderStats";

export default function HodDashboard() {
  return (
    <>
      <Sidebar
        heading="HOD Layout Pages"
        item1="My Dashboard"
        item2="Settings"
        item3="Salary Status"
        item4="Maps"
      />
      <div className="relative md:ml-64 bg-slate-100">
        <AdminNavBar />
        <HeaderStats />
      </div>
    </>
  );
}
