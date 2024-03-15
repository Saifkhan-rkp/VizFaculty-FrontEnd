import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import HeaderStats from "../../components/Headers/HeaderStats";
import AdminNavBar from "../../components/Navbars/AdminNavbar";
import FooterAdmin from "../../components/Footers/FooterAdmin";

const links = [
  { heading: "My Dashboard", link: "/dept", icon: "fas fa-tv" },
  { heading: "Settings", link: "/dept/settings", icon: "fas fa-tools" },
  { heading: "Timetables", link: "/dept/Timetables", icon: "fas fa-table" },
  { heading: "Faculties", link: "/dept/Faculties", icon: "fas fa-map-marked" },
  // {heading:"Settings", link:"/adminDept/settings", icon:""},
];

export default function HodDashboard() {
  return (
    <>
      <Sidebar linksAndHeadings={links} heading="HOD Layout Pages" />
      <div className="relative md:ml-64 bg-slate-100">
        <AdminNavBar />
        <HeaderStats 
          userType="hod"
        />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Outlet></Outlet>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
