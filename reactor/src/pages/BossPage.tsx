import { useNavigate } from 'react-router';
import { logout } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../app/hooks';
import { selectOrdersWorker } from '../features/ordersWorkerSlice';

const BossPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };
    return (
        <div>
            <p>It's Boss </p>
            <button onClick={handleLogout}>Выход</button>
        </div>
    );
};
export default BossPage;
