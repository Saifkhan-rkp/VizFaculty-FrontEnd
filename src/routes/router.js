import React from 'react';
import { createBrowserRouter } from 'react-router-dom'
import AdminDeptDashboard from '../layouts/AdminDeptDashboard';
import FacultyDashboard from '../layouts/FacultyDashboard';
import HodDashboard from '../layouts/HodDasboard';
import ErrorPage from '../pages/ErrorPage';
import Landing from "../pages/Landing";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Landing />,
        errorElement:<ErrorPage/>,
        
    },
    
    //Admin Dept Dashboard
    {
        path:'/dashboard-adminDept',
        element:<AdminDeptDashboard />,
        errorElement:<ErrorPage/>,
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
]);