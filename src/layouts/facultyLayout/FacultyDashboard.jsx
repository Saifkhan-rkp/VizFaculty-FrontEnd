import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import AdminNavBar from "../../components/Navbars/AdminNavbar";
import HeaderStats from "../../components/Headers/HeaderStats";
import FooterAdmin from "../../components/Footers/FooterAdmin";

import { Outlet } from "react-router-dom";

const links = [
  { heading: "My Dashboard", link: "/faculty", icon: "fas fa-tv" },
  { heading: "Settings", link: "/faculty/settings", icon: "fas fa-tools" },
  {
    heading: "SALARY STATUS",
    link: "/faculty/salaryStatus",
    icon: "fas fa-table",
  },
  {
    heading: "ATTENDANCE",
    link: "/faculty/attendance",
    icon: "fas fa-map-marked",
  },
  {
    heading: "TIME TABLE",
    link: "/faculty/timetable",
    icon: "fas fa-table",
  },
];

export default function FacultyDashboard() {
  return (
    <>
      <Sidebar heading="Quick Accessibility" linksAndHeadings={links} />
      <div className="relative md:ml-64 bg-slate-100">
        <AdminNavBar />
        <HeaderStats userType="faculty" />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Outlet />
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
