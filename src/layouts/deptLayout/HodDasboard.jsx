import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import HeaderStats from "../../components/Headers/HeaderStats";
import AdminNavBar from "../../components/Navbars/AdminNavbar";
import FooterAdmin from "../../components/Footers/FooterAdmin";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getAuthData } from "../../utils/utils";

const links = [
  { heading: "My Dashboard", link: "/dept", icon: "fas fa-tv" },
  { heading: "Settings", link: "/dept/settings", icon: "fas fa-tools" },
  { heading: "Timetables", link: "/dept/Timetables", icon: "fas fa-table" },
  { heading: "Faculties", link: "/dept/Faculties", icon: "fas fa-map-marked" },
  { heading: "Salary Applications", link: "/dept/forwarded-applications", icon: "fas fa-table" },
];

export default function HodDashboard() {
  const auth = getAuthData();
  const { data: headerStats, isLoading, refetch } = useQuery(["headerStats"], () => axios.get(`${process.env.REACT_APP_API_KEY}/api/dept/v1/headerstats`, {
    headers: {
      authorization: `Bearer ${auth?.accessToken}`
    }
  }).then(res => res.data)
  );
  return (
    <>
      <Sidebar linksAndHeadings={links} heading="HOD Layout Pages" />
      <div className="relative md:ml-64 bg-slate-100">
        <AdminNavBar />
        {isLoading ? <HeaderStats
          userType="hod"
          state1={headerStats?.expenditure || 0}
          state2={headerStats?.facultyCount || 0}
          state3={headerStats?.timetableCount || 0}
          state4={headerStats?.salaryRequestCount || 0}
        /> :
          <HeaderStats
            userType="hod"
            state1={headerStats?.expenditure || 0}
            state2={headerStats?.facultyCount || 0}
            state3={headerStats?.timetableCount || 0}
            state4={headerStats?.salaryRequestCount || 0}
          />
        }
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Outlet></Outlet>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
