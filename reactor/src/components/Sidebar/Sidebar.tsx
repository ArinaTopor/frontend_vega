import {Box, Button, Flex, Heading, Image} from '@chakra-ui/react';
import list from '../../assets/icons/list.svg'
import plan from '../../assets/icons/plan.svg'
import nomenclature from '../../assets/icons/nomenclature.svg'
import setting from '../../assets/icons/setting.svg'
import exit from '../../assets/icons/exit.svg'
import { InfoUser } from '../../app/services/auth'
import { Paths } from '../../paths'
import style from './Sidebar.module.css'
import { useState } from 'react'
import { SidebarNavLink } from '../custom-nav_link/SidebarNavLink'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { logout } from '../../features/auth/authSlice'

type Props={
	user: InfoUser | null
}

const sidebarStyle={
	align:'center',
	flexDirection:'column',  
	backgroundColor:'#314659', 
	h:'100vh'
}

export function Sidebar({user}:Props) {

	const [isHovered, setIsHovering] = useState(false)
	const navigate = useNavigate();
    const dispatch = useDispatch();

	const createName = function(nameBack:string){
		const nameArray:string[] = nameBack.split(' ')
		const initials:string = `${nameArray[0][0]}${nameArray[1][0]}`
		const name:string = nameArray && `${nameArray[0]} ${nameArray[1][0]}.`
		return{
			initials,
			name
		}
	}
	const names = user?.name ? createName(user.name) :
	{
		initials: '',
		name:''
	}

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('token');
        navigate('/');
    };

	return(
		<Flex sx={sidebarStyle} onMouseEnter={()=>setIsHovering(last => !last)}
		onMouseLeave={()=>setIsHovering(last => !last)} w={isHovered ? '12.8vw' :'6.3vw'}>
			<Flex align='center' flexDirection='column' gap='3.7vh' mt={isHovered ? '3.5vh' :'5.7vh'} 
			mb={isHovered ? '18vh' :'26vh'}>
				<Flex w={isHovered ? '8.7vw' : '4.5vw'} h={isHovered ? '8.7vw' : '4.5vw'} bg='#758593' borderRadius="100%"
				border='3px solid #fff' align='center' justify='center' fontSize={isHovered? '8.5vh' :'4.26vh'} fontWeight="500" fontFamily='Roboto'
				color='#fff'>
					{names.initials}
				</Flex>
				<Heading as='h2' fontSize='2.1vh' color='#FFFFFF' textAlign='center'>
					{isHovered && names.name}
				</Heading>
			</Flex>
			<Flex align={isHovered ? 'start' : 'center'} pl={isHovered ? '1vw': '0'} flexDirection='column' gap='4.9vh' fontSize='2.1vh'>
				<SidebarNavLink path={Paths.nomenclature} linkStyle={style.link} srcImage={nomenclature} isHovered={isHovered} text='Номенклатура'/>
				<SidebarNavLink path={Paths.tasksBoard} linkStyle={style.link} srcImage={plan} isHovered={isHovered} text='Заказы'/>
				<SidebarNavLink path={Paths.products} linkStyle={style.link} srcImage={list} isHovered={isHovered} text='Лист ожидания'/>
				<Flex position='absolute' bottom='0' mb='4vh' gap='3vh' flexDirection='column' align={isHovered ? 'start' : 'center'}>
					<SidebarNavLink path={Paths.options} linkStyle={style.link} srcImage={setting} isHovered={isHovered} text='Настройки'/>
					<Button onClick={handleLogout} bg='' _hover={{opacity:0.3}} p='0 0 0 0' display='flex' fontFamily='Roboto' color='#fff' alignItems='center' ml='0.1vw' fontWeight='500' gap='9.5px' h='1.8vw' fontSize='2.1vh'>
						<Image src={exit} w='1.8vw' h='1.8vw'/>
						{isHovered && 'Выход'}
					</Button>
				</Flex>
			</Flex>		
		</Flex>
	)
}