import { Outlet } from 'react-router-dom';
import { selectUser } from '../features/auth/authSlice';
import { useSelector } from 'react-redux';
import { Layout } from 'antd';
import { Sidebar } from './Sidebar/Sidebar';
import { useCurrentQuery } from '../app/services/auth';

const { Content } = Layout;

export function CustomLayout() {
    const { data } = useCurrentQuery();
    const user = useSelector(selectUser);
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
