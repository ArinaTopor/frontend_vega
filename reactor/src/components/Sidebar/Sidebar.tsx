import {Flex, Heading} from '@chakra-ui/react';
import list from '../../assets/icons/list.svg'
import plan from '../../assets/icons/plan.svg'
import nomenclature from '../../assets/icons/nomenclature.svg'
import setting from '../../assets/icons/setting.svg'
import { InfoUser } from '../../app/services/auth'
import { Paths } from '../../paths'
import style from './Sidebar.module.css'
import { useState } from 'react'
import { SidebarNavLink } from '../custom-nav_link/SidebarNavLink'

type Props={
	user: InfoUser | null
}

export function Sidebar({user}:Props) {

	const createName = function(nameBack:string){
		const nameArray:string[] = nameBack.split(' ')
		const initials:string = `${nameArray[0][0]}${nameArray[1][0]}`
		const name:string = nameArray && `${nameArray[0]} ${nameArray[1][0]}.`
		return{
			initials,
			name
		}
	}
	const names =user ? createName('Кочнев Сергей Валерьевич') :
	{
		initials: '',
		name:''
	}
	/*const nameArray:string[]|undefined = user?.name?'Кочнев Сергей Валерьевич'.split(' ')
	const initials:string | undefined = nameArray && `${nameArray[1][0]}${nameArray[0][0]}`
	const name:string | undefined = nameArray && `${nameArray[1]} ${nameArray[0][0]}.`*/
	const [isHovered, setIsHovering] = useState(false)

	const sidebarStyle={
		align:'center',
		flexDirection:'column', 
		w:isHovered ? '12.8vw' :'6.3vw', 
		backgroundColor:'#314659', 
		h:'100vh'
	}

	return(
		<Flex sx={sidebarStyle} onMouseEnter={()=>setIsHovering(last => !last)}
		onMouseLeave={()=>setIsHovering(last => !last)}>
			<Flex align='center' flexDirection='column' gap='3.7vh' mt={isHovered ? '3.5vh' :'5.7vh'} 
			mb={isHovered ? '18vh' :'26vh'}>
				<Flex w={isHovered ? '15.5vh' : '8.1vh'} h={isHovered ? '15.5vh' : '8.1vh'} bg='#758593' borderRadius="100%"
				border='3px solid #fff' align='center' justify='center' fontSize={isHovered? '8.5vh' :'4.26vh'} fontWeight="500" fontFamily='Roboto'
				color='#fff'>
					{names.initials}
				</Flex>
				<Heading as='h2' fontSize='2.1vh' color='#FFFFFF' textAlign='center'>
					{isHovered && names.name}
				</Heading>
			</Flex>
			<Flex align={isHovered ? 'start' : 'center'} pl={isHovered ? '1.9vh': '0'} flexDirection='column' gap='4.9vh'>
				<SidebarNavLink path={Paths.nomenclature} linkStyle={style.link} srcImage={nomenclature} isHovered={isHovered} text='Номенклатура'/>
				<SidebarNavLink path={Paths.tasksBoard} linkStyle={style.link} srcImage={plan} isHovered={isHovered} text='Заказы'/>
				<SidebarNavLink path={Paths.products} linkStyle={style.link} srcImage={list} isHovered={isHovered} text='Лист ожидания'/>
				<SidebarNavLink path={Paths.options} linkStyle={style.link_options} srcImage={setting} isHovered={isHovered} text='Настройки'/>
			</Flex>		
		</Flex>
	)
}