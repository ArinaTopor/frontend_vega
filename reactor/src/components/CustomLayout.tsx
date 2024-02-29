import { Outlet, useNavigate } from 'react-router-dom';
import { selectUser } from '../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from 'antd';
import { useState } from 'react';
import { Sidebar } from './Sidebar/Sidebar';

const { Content } = Layout;

export function CustomLayout() {
	const user = useSelector(selectUser);

	return (
		<Layout>
			{/*user?.role === 'admin' &&*/ <Sidebar user={user} />}
			<Layout>
				<Content>
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	);
}
