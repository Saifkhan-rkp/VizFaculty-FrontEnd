import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Loader from '../components/loader/Loader';

const FacultyRoute = ({ children }) => {
    const { isLoading, user, loading } = useAuth();
    // const { loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading || isLoading) {
        return (
            <Loader/>
        );
    }
    if (user?.user?.role === 'adminDept') {
        return <Navigate to="/adminDept/dashboard" state={{ from: location }} replace />;
    }
    if (user?.user?.role === 'faculty') {
        return children;
    }

    return <Navigate to="/auth/login" state={{ from: location }} replace />;
};

export default FacultyRoute;
