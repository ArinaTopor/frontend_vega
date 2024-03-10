import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Box, Button } from '@chakra-ui/react';
import { logout } from '../features/auth/authSlice';

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };
    return (
        <Box ml='6.3vw' p='15px'>
            <p>It's worker</p>
            <Button onClick={handleLogout}>Выйти</Button>
        </Box>
    );
};

export default Home;
