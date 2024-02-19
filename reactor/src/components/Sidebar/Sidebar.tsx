import {Flex,Image, Heading,Link} from '@chakra-ui/react';
import list from '../../assets/icons/list.svg'
import plan from '../../assets/icons/plan.svg'
import nomenclature from '../../assets/icons/nomenclature.svg'
import setting from '../../assets/icons/setting.svg'
import { InfoUser } from '../../app/services/auth'
import { NavLink } from 'react-router-dom'
import { Paths } from '../../paths'
import style from './Sidebar.module.css'
import { useState } from 'react'

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
	const [isUsing, setIsUsing] = useState(false)

	const sidebarStyle={
		align:'center',
		flexDirection:'column', 
		w:isUsing ? '12.8vw' :'6.3vw', 
		backgroundColor:'#314659', 
		h:'100vh'
	}

	console.log(typeof style.active)
	return(
		<Flex sx={sidebarStyle} onMouseEnter={()=>setIsUsing(last => !last)}
		onMouseLeave={()=>setIsUsing(last => !last)}>
			<Flex align='center' flexDirection='column' gap='3.7vh' mt={isUsing ? '3.5vh' :'5.7vh'} 
			mb={isUsing ? '18vh' :'26vh'}>
				<Flex w={isUsing ? '15.5vh' : '8.1vh'} h={isUsing ? '15.5vh' : '8.1vh'} bg='#758593' borderRadius="100%"
				border='3px solid #fff' align='center' justify='center' fontSize={isUsing? '8.5vh' :'4.26vh'} fontWeight="500" fontFamily='Roboto'
				color='#fff'>
					{names.initials}
				</Flex>
				<Heading as='h2' fontSize='2.1vh' color='#FFFFFF' textAlign='center'>
					{isUsing && names.name}
				</Heading>
			</Flex>
			<Flex align={isUsing ? 'start' : 'center'} pl={isUsing ? '1.9vh': '0'} flexDirection='column' gap='4.9vh'>
				<NavLink  to={Paths.nomenclature} className={({ isActive }) =>
      			isActive ? `${style.active} ${style.link}` : style.link}>
					<Image src={nomenclature} w='1.8vw'/>
					{isUsing && 'Номенклатура'}
				</NavLink>
				<NavLink to={Paths.tasksBoard} className={({ isActive }) =>
      			isActive ? `${style.active} ${style.link}` : style.link}>
					<Image src={plan} w='1.8vw'/>
					{isUsing && 'Заказы'}
				</NavLink>
				<NavLink to={Paths.products} className={({ isActive }) =>
      			isActive ?`${style.active} ${style.link}` : style.link}>
					<Image src={list} w='1.8vw'/>
					{isUsing && 'Лист ожидания'}
				</NavLink>
				<NavLink to={Paths.options} className={({ isActive }) =>
			 	isActive ? `${style.active} ${style.link_options}` : style.link_options}>
					<Image src={setting} w='1.8vw'/>
					{isUsing && 'Настройки'}
				</NavLink>
			</Flex>		
		</Flex>
	)
}