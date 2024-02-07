import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from '@chakra-ui/react';
import { logout } from '../features/auth/authSlice';

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('token');
        navigate('/');
    };
    return (
        <div>
            <p>It's worker</p>
            <Button onClick={handleLogout}>Выйти</Button>
        </div>
    );
};

export default Home;
