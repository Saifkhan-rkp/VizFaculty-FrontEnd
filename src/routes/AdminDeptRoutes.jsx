import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const AdminDeptRoute = ({ children }) => {
    const { isLoading, user, loading } = useAuth();
    // const { loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading || isLoading) {
        return (
            <div className="grid min-h-50v place-items-center">
                <div className="w-16 h-16 border-4 border-dashed rounded-full border-sky-700 animate-spin  " />
            </div>
        );
    }
    if (user?.user?.role === 'adminDept') {
        return children;
    }
    
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
};

export default AdminDeptRoute;