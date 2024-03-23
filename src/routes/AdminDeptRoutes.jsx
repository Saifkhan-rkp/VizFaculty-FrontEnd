import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Loader from '../components/loader/Loader';

const AdminDeptRoute = ({ children }) => {
    const { isLoading, user, loading } = useAuth();
    // const { loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading || isLoading) {
        return (
            <Loader/>
        );
    }
    if (user?.user?.role === 'adminDept') {
        return children;
    }
    
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
};

export default AdminDeptRoute;