import { useNavigate } from 'react-router';
import { logout } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { Box, Button } from '@chakra-ui/react';
import { useCurrentQuery } from '../app/services/auth';
import { useEffect } from 'react';

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
        <Box p='15px'>
            <p>It's Boss </p>
            <Button onClick={handleLogout}>Выход</Button>
        </Box>
    );
};
export default BossPage;
