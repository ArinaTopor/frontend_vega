import { Navigate } from 'react-router-dom';
import { UseDispatch, useDispatch } from 'react-redux';
import { Button } from '@chakra-ui/react';
import { selectIsAuth } from '../features/auth/authSlice';
const Home = () => {
    // return selectIsAuth()? (
    //     <div>
    //         <h1>Hello</h1>
    //         <Button>Log out from {email}</Button>
    //     </div>
    // ) :
    //  (<Navigate to="/authorization" />)
    return(<p>Home</p>)
};

export default Home;
