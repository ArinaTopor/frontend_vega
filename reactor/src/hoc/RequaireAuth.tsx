import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router';
import { selectIsAuthenticated } from '../features/auth/authSlice';
const RequareAuth = ({ children }: { children: JSX.Element }) => {
    const location = useLocation();
    const auth = useSelector(selectIsAuthenticated);
    if (!auth) {
        return <Navigate to='/authorization' state={{ from: location }} />;
    }
    return children;
};
export { RequareAuth };
