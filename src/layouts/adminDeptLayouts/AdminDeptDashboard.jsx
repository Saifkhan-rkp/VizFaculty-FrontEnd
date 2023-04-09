import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import AdminNavBar from "../../components/Navbars/AdminNavbar";
import HeaderStats from "../../components/Headers/HeaderStats";
import FooterAdmin from "../../components/Footers/FooterAdmin"

const links = [
    {heading:"My Dashboard",link:"/adminDept", icon:"fas fa-tv"},
    {heading:"Settings", link:"/adminDept/settings", icon:"fas fa-tools"},
    {heading:"SALARY APPLICATIONS", link:"/adminDept/applications",icon:"fas fa-table"},
    {heading:"Depts. and Faculties", link:"/adminDept/departmentsAndfaculties",icon:"fas fa-map-marked"},
    // {heading:"Settings", link:"/adminDept/settings", icon:""},
];
export default function AdminDeptDashboard() {

    return (
        <>
            <Sidebar
                heading="Quick Accessibility"
                linksAndHeadings={links}
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
                    <Outlet></Outlet>
                    <FooterAdmin />
                </div>
            </div>
        </>
    );
}