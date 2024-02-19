import { useNavigate } from 'react-router';
import { logout } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { Button } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useCurrentQuery } from '../app/services/auth';

const BossPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data, error } = useCurrentQuery();
    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('token');
        navigate('/');
    };
    useEffect(() => {
        console.log(data);
        console.log(error);
    }, [data, error]);
    return (
        <div>
            <p>It's Boss </p>
            <Button onClick={handleLogout}>Выход</Button>
        </div>
    );
};
export default BossPage;
