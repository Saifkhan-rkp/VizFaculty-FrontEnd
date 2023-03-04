import { createBrowserRouter } from 'react-router-dom'
import AdminDeptDashboard from '../layouts/AdminDeptDashboard';
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
        element:<AdminDeptDashboard />,
        errorElement:<ErrorPage/>,
    },

    //Faculty Dashboard
    {
        path:'/dashboard-Faculty',
        element:<AdminDeptDashboard />,
        errorElement:<ErrorPage/>,
    },
]);