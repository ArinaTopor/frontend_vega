import { useNavigate } from 'react-router';
import { logout } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { Box, Button } from '@chakra-ui/react';
import styled from '@emotion/styled'

const BossPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('token');
        navigate('/');
    };
    return (
        <Box ml='6.3vw' p='15px'>
            <p>It's Boss </p>
            <Button onClick={handleLogout}>Выход</Button>
        </Box>
    );
};
export default BossPage;
