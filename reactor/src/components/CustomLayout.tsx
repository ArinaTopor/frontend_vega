import { Outlet } from 'react-router-dom';
import { selectUser } from '../features/auth/authSlice';
import { useSelector } from 'react-redux';
import { Layout } from 'antd';
import { Sidebar } from './Sidebar/Sidebar';

const { Content } = Layout;

export function CustomLayout() {
    const user = useSelector(selectUser);

    return (
        <Layout>
            {user?.role?.indexOf('Администратор') !== -1 && (
                <Sidebar user={user} />
            )}
            <Layout>
                <Content>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
}
