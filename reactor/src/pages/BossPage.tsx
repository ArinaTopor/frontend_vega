import { useNavigate } from 'react-router';
import { logout } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { Button } from '@chakra-ui/react';

const BossPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('token');
        navigate('/');
    };
    return (
        <div>
            <p>It's Boss </p>
            <Button onClick={handleLogout}>Выход</Button>
        </div>
    );
};
export default BossPage;
