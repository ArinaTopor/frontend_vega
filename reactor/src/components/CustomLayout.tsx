import { Outlet, useNavigate } from 'react-router-dom';
import { selectUser } from '../features/auth/authSlice';
import { useSelector } from 'react-redux';
import { Layout } from 'antd';
import { Sidebar } from './Sidebar/Sidebar';
import { useCurrentQuery } from '../app/services/auth';
import { useEffect } from 'react';

const { Content } = Layout;

export function CustomLayout() {
    const { error } = useCurrentQuery();
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    useEffect(() => {
        if (error) {
            navigate('/');
        }
    }, [error, navigate]);
    return (
        <Layout>
            {user && user.role !== 'Рабочий' && <Sidebar user={user} />}
            <Layout>
                <Content
                    style={{
                        marginLeft: '6.3vw',
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
}
