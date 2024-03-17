import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Auth from "../layouts/Auth";
import HodDashboard from "../layouts/deptLayout/HodDasboard";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import ErrorPage from "../pages/ErrorPage";
import Landing from "../pages/Landing";
import ForgetPassword from "../components/auth/ForgetPassword";
import ResetPassword from "../components/auth/ResetPassword";
import DashboardIndexAD from "../layouts/adminDeptLayouts/DashboardIndex";
import DashboardIndexFaculty from "../layouts/facultyLayout/DashboardIndexFaculty";
import FacultyDashboard from "../layouts/facultyLayout/FacultyDashboard";
import Attendance from "../layouts/facultyLayout/Attendance";
import Salary from "../layouts/facultyLayout/Salary";
import SalaryApplicationLayout from "../layouts/adminDeptLayouts/SalaryApplicationLayout";
import DepartmentsAndFaculties from "../layouts/adminDeptLayouts/DepartmentsAndFaculties";
import DashboardIndexDept from "../layouts/deptLayout/DashboardIndexDept";

import FacultySetting from "../layouts/facultyLayout/FacultySetting";
import AdminDeptSetting from "../layouts/adminDeptLayouts/AdminDeptSetting";
import TimeTable from "../layouts/facultyLayout/TimeTable";
import CompleteRegister from "../components/auth/CompleteRegister";
import FacultyRoute from "./FacultyRoutes";
import AdminDeptRoute from "./AdminDeptRoutes";
import DeptFaculties from "../layouts/deptLayout/FacultyPage";
import DeptRoute from "./DeptRoutes";
import TimeTables from "../layouts/deptLayout/TimeTables";
import Blog from "../pages/Blog";
import About from "../pages/About";
import Pages from "../pages/PagesLayout";
import DepartmentSettings from "../layouts/deptLayout/DepartmentSettings";
import AdminDeptDashboard from "../layouts/adminDeptLayouts/AdminDeptDashboard";
// const AdminDeptDashboard = lazy(() => import("../layouts/adminDeptLayouts/AdminDeptDashboard"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorPage />,
  },

  {
    path:"/pages",
    element: <Pages />,
    errorElement: <ErrorPage />,
     children: [

      {
        path: "/pages/About",
        element: <About />,
      }
     ]
  },


  //Admin Dept Dashboard
  {
    path: "/adminDept",
    element: <AdminDeptRoute><AdminDeptDashboard /></AdminDeptRoute>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashboardIndexAD></DashboardIndexAD>,
      },
      {
        path: "/adminDept/dashboard",
        element: <DashboardIndexAD></DashboardIndexAD>,
      },
      {
        path: "/adminDept/settings",
        element: <AdminDeptSetting />,
      },
      {
        path: "/adminDept/applications",
        element: <SalaryApplicationLayout />,
      },
      {
        path: "/adminDept/departmentsAndfaculties",
        element: <DepartmentsAndFaculties />,
      },
    ],
  },

  //Hod Dept Dashboard
  {
    path: "/dept",
    element: <DeptRoute> <HodDashboard /> </DeptRoute>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashboardIndexDept></DashboardIndexDept>,
      },
      {
        path: "/dept/dashboard",
        element: <DashboardIndexDept></DashboardIndexDept>,
      },
      {
        path: "/dept/Timetables",
        element: <TimeTables />,
      },
      {
        path: "/dept/Faculties",
        element: (
          <DeptFaculties />
        ),
      },
      {
        path: "/dept/settings",
        element: (
          <DepartmentSettings />
        ),
      },
    ],
  },

  //Faculty Dashboard
  {
    path: "/faculty",
    element: <FacultyRoute> <FacultyDashboard /></FacultyRoute>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashboardIndexFaculty />,
      },
      {
        path: "/faculty/dashboard",
        element: <FacultyDashboard></FacultyDashboard>,
      },
      {
        path: "/faculty/settings",
        element: <FacultySetting />,
      },
      {
        path: "/faculty/salaryStatus",
        element: <Salary />,
      },
      {
        path: "/faculty/attendance",
        element: <Attendance />,
      },
      {
        path: "/faculty/timetable",
        element: <TimeTable />,
      },
    ],
  },

  //Auth login/signup
  {
    path: "/auth",
    element: <Auth />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/Register",
        element: <Register />,
      },
      {
        path: "/auth/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/auth/reset-password/:token",
        element: <ResetPassword />,
      },
      {
        path: "/auth/completeRegister/:email/:token",
        element: <CompleteRegister />,
      },
    ],
  },
]);
