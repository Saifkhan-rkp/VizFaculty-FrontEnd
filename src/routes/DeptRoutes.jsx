import { Navigate, useLocation } from 'react-router-dom';
// import useAuth from '../hooks/useAuth';
import { getAuthData } from '../utils/utils';

const DeptRoute = ({ children }) => {
    const user = getAuthData();
    // console.log(user);
    // const { loading } = useContext(AuthContext);
    const location = useLocation();
    // if (loading || isLoading) {
    //     return (
    //         <div className="grid min-h-50v place-items-center">
    //             <div className="w-16 h-16 border-4 border-dashed rounded-full border-sky-700 animate-spin" />
    //         </div>
    //     );
    // }
    // if (user?.role === 'adminDept') {
    //     return <Navigate to="/adminDept/dashboard" state={{ from: location }} replace />;
    // }
    if (user?.role === 'deptHead') {
        return children;
    }

    return <Navigate to="/auth/login" state={{ from: location }} replace />;
};

export default DeptRoute;
