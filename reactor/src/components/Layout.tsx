import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar/Sidebar'
import { selectUser } from '../features/auth/authSlice'
import { useSelector } from 'react-redux'
import { Flex } from '@chakra-ui/react'

export function Layout() {
	const user = useSelector(selectUser)
	return (
		<Flex justify='start'>
			{/*user?.role === 'Администратор'*/}
			<Sidebar user={user}/>
			<Outlet/>
		</Flex>
	)
}