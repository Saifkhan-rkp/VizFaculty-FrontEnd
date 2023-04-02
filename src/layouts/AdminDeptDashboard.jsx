import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import AdminNavBar from "../components/Navbars/AdminNavbar";
import CardExpenceTable from "../components/Cards/CardExpenceTable";
import HeaderStats from "../components/Headers/HeaderStats";

import FooterAdmin from "../components/Footers/FooterAdmin";
import CardWhatever from "../components/Cards/CardWhatever";

export default function AdminDeptDashboard() {
  return (
    <>
      <Sidebar
        heading="Quick Accessibility"
        item1="My Dashboard"
        item2="Settings"
        item3="Salary Applications"
        item4="Manage Departments"
      />
      <div className="relative md:ml-64 bg-slate-100">
        <AdminNavBar />
        <HeaderStats
          userType="adminDept"
          state1="2,14,466"
          state2="16"
          state3="5"
          state4="4"
        />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
              <CardExpenceTable />
            </div>
          </div>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
