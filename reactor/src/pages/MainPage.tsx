import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from '@chakra-ui/react';
import { logout } from '../features/auth/authSlice';
import { useCurrentQuery } from '../app/services/auth';
import { useEffect } from 'react';

const Home = () => {
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
            <p>It's worker</p>
            <Button onClick={handleLogout}>Выйти</Button>
        </div>
    );
};

export default Home;
