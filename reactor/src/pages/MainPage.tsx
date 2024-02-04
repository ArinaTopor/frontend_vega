import { Navigate } from 'react-router-dom';
import { UseDispatch, useDispatch, useSelector } from 'react-redux';
import { Button } from '@chakra-ui/react';
import { selectIsAuthenticated, selectToken } from '../features/auth/authSlice';
import { useCurrentQuery } from '../app/services/auth';

const Home = () => {
    return <p>It's worker</p>;
};

export default Home;
