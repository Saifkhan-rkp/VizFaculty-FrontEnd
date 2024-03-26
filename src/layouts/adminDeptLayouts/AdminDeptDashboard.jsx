import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import AdminNavBar from "../../components/Navbars/AdminNavbar";
import HeaderStats from "../../components/Headers/HeaderStats";
import FooterAdmin from "../../components/Footers/FooterAdmin"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getAuthData } from "../../utils/utils";

const links = [
    { heading: "My Dashboard", link: "/adminDept/dashboard", icon: "fas fa-tv" },
    { heading: "Settings", link: "/adminDept/settings", icon: "fas fa-tools" },
    { heading: "SALARY APPLICATIONS", link: "/adminDept/applications", icon: "fas fa-table" },
    { heading: "Depts. and Faculties", link: "/adminDept/departmentsAndfaculties", icon: "fas fa-map-marked" },
    // {heading:"Settings", link:"/adminDept/settings", icon:""},
];
export default function AdminDeptDashboard() {
    const auth = getAuthData();
    const { data: headerStats, isLoading, refetch } = useQuery(["headerStats"], () => axios.get(`${process.env.REACT_APP_API_KEY}/api/org/v1/headerstats`, {
        headers: {
            authorization: `Bearer ${auth?.accessToken}`
        }
    }).then(res => res.data),
        {
            retryDelay: 30 * 60,
            refetchOnWindowFocus: false
        }
    );

    return (
        <>
            <Sidebar
                heading="Quick Accessibility"
                linksAndHeadings={links}
            />
            <div className="relative md:ml-64 bg-slate-100">
                <AdminNavBar />
                {isLoading ? <HeaderStats
                    userType="adminDept"
                    state1={headerStats?.expenditure || 0}
                    state2={headerStats?.facultyCount || 0}
                    state3={headerStats?.deptCount || 0}
                    state4={headerStats?.salaryRequestCount || 0}
                /> :
                    <HeaderStats
                        userType="adminDept"
                        state1={headerStats?.expenditure || 0}
                        state2={headerStats?.facultyCount || 0}
                        state3={headerStats?.deptCount || 0}
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