import { Navigate } from 'react-router-dom';
import { UseDispatch, useDispatch, useSelector } from 'react-redux';
import { Button } from '@chakra-ui/react';
import { selectIsAuthenticated, selectToken } from '../features/auth/authSlice';
import { useCurrentQuery } from '../app/services/auth';

const Home = () => {
    const isAuth = useSelector(selectIsAuthenticated);
    console.log(isAuth);
    const token = useSelector(selectToken);
    console.log(token?.accessToken, 'token');
    const { data } = useCurrentQuery();
    console.log(data);
    console.log(localStorage.getItem('accessToken'));
    //     <div>
    //         <h1>Hello</h1>
    //         <Button>Log out from {email}</Button>
    //     </div>
    // ) :
    //  (<Navigate to="/authorization" />)
    return <p>home</p>;
};

export default Home;
