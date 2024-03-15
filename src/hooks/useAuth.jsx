import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../apis/authSlice';

const useAuth = () => {
    const [loading, setLoading] = useState(true);
    const { isLoading, user, error, isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUser());
        setLoading(false);
    }, [dispatch]);

    return { isLoading, user, loading, setLoading, isAuthenticated, error };
};

export default useAuth;
