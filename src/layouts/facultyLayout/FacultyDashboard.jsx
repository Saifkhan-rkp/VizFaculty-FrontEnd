import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import AdminNavBar from "../../components/Navbars/AdminNavbar";
import HeaderStats from "../../components/Headers/HeaderStats";
import FooterAdmin from "../../components/Footers/FooterAdmin";

import { Outlet } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { getAuthData } from "../../utils/utils";

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
  const auth = getAuthData();
  const { data: headerStats, isLoading, refetch } = useQuery(["headerStats"], () => axios.get(`${process.env.REACT_APP_API_KEY}/api/faculty/v1/headerstats?month=${new Date().getMonth() + 1}`, {
    headers: {
      authorization: `Bearer ${auth?.accessToken}`
    }
  }).then(res => res.data)
  );
  const totalLoad = () => {
    if (headerStats?.totalSubject && headerStats?.totalSubject?.length > 0) {
      return headerStats?.totalSubject?.reduce((total, subject) => total + subject.count, 0);
    }
    else return 0;
  }
  console.log(headerStats)
  return (
    <>
      <Sidebar heading="Quick Accessibility" linksAndHeadings={links} />
      <div className="relative md:ml-64 bg-slate-100">
        <AdminNavBar />
        {isLoading ? <HeaderStats
          userType="faculty"
          state1={0}
          state2={0}
          state3={0}
          state4={0}
        /> :
          <HeaderStats
            userType="faculty"
            state1={`TH:${headerStats?.totalTH}; PR:${headerStats?.totalPR}` || 0}
            state2={headerStats?.totalAttendence || 0}
            state3={totalLoad()>9? totalLoad(): "0"+ totalLoad() || 0}
            state4={headerStats?.totalSalary || 0}
            desc={headerStats?.totalSubject}
          />
        }
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Outlet />
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
