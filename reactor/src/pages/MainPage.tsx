import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };
    return (
        <div>
            <p>It's worker</p>
            <button onClick={handleLogout}>Выйти</button>
        </div>
    );
};

export default Home;
