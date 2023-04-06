import React from 'react';
import { createBrowserRouter } from 'react-router-dom'
import AdminDeptDashboard from '../layouts/adminDeptLayouts/AdminDeptDashboard';
import Auth from '../layouts/Auth';
import FacultyDashboard from '../layouts/FacultyDashboard';
import HodDashboard from '../layouts/HodDasboard';
import Login from '../components/auth/Login';
import Register from "../components/auth/Register";
import ErrorPage from '../pages/ErrorPage';
import Landing from "../pages/Landing";
import ForgetPassword from '../components/auth/ForgetPassword';
import ResetPassword from '../components/auth/ResetPassword';
import DashboardIndexAD from '../layouts/adminDeptLayouts/DashboardIndex';
import SalaryApplicationLayout from '../layouts/adminDeptLayouts/SalaryApplicationLayout';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Landing />,
        errorElement:<ErrorPage/>,
    },
    
    //Admin Dept Dashboard
    {
        path:'/adminDept',
        element:<AdminDeptDashboard />,
        errorElement:<ErrorPage/>,
        children:[
            {
                index: true,
                element:<DashboardIndexAD></DashboardIndexAD>
            },
            {
                path:"/adminDept/applications",
                element:<SalaryApplicationLayout/>
            },
        ]
    },
    
    //Hod Dept Dashboard
    {
        path:'/dashboard-Dept',
        element:<HodDashboard/>,
        errorElement:<ErrorPage/>,
    },

    //Faculty Dashboard
    {
        path:'/dashboard-Faculty',
        element:<FacultyDashboard />,
        errorElement:<ErrorPage/>,
    },

    //Auth login/signup
    {
        path:'/auth',
        element:<Auth/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                index: true,
                element: <Login/>
            },
            {
                path:'/auth/login',
                element:<Login/>,
            },
            {
                path:'/auth/Register',
                element:<Register/>,
            },
            {
                path:'/auth/forget-password',
                element:<ForgetPassword/>,
            },
            {
                path:'/auth/reset-password/:token',
                element:<ResetPassword/>,
            },
        ], 
    }
]);