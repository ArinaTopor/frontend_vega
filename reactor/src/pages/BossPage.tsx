import { useNavigate } from 'react-router';
import { logout } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { Box, Button } from '@chakra-ui/react';

const BossPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('token');
        navigate('/');
    };
    return (
        <Box p='15px'>
            <p>It's Boss </p>
            <Button onClick={handleLogout}>Выход</Button>
        </Box>
    );
};
export default BossPage;
