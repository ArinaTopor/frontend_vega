import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'

type Props ={
	role:string
}

export function Layout({role}:Props) {

	const isAdmin = role === "admin"
	return (
		<>
			<Sidebar isAdmin={isAdmin}/>
			<Outlet/>
		</>
	)
}