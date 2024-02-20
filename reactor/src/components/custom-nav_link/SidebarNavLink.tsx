import { Image } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import style from '../Sidebar/Sidebar.module.css'

type Props={
	path:string,
	linkStyle:string,
	srcImage: string,
	isHovered: boolean,
	text:string
}

export function SidebarNavLink({path,linkStyle,srcImage,isHovered, text}:Props){
	return(
		<NavLink  to={path} className={({ isActive }) =>
		isActive ? `${style.active} ${linkStyle}` : linkStyle}>
			<Image src={srcImage} w='1.8vw'/>
			{isHovered && text}
		</NavLink>
	)
}