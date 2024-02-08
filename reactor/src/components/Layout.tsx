import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { selectUser } from '../features/auth/authSlice'
import { useSelector } from 'react-redux'

export function Layout() {
	const role = useSelector(selectUser)?.role
	const isAdmin = role === "admin"
	return (
		<>
			<Sidebar isAdmin={isAdmin}/>
			<Outlet/>
		</>
	)
}