import React from 'react';
import {Flex,Image, Heading,Avatar,Link,Box} from '@chakra-ui/react';
import avatar from '../image/avatar.svg'
import list from '../image/list.svg'
import plan from '../image/plan.svg'
import nomenclature from '../image/nomenclature.svg'
import setting from '../image/setting.svg'
import styles from './Sidebar.module.css'

const Sidebar = () =>{

	const handleMouseEnter = ()=>{
		
	}

	return(
		<Flex align='center' flexDirection='column' mr='auto' w='120px' backgroundColor='#314659' h='100vh'>
			<Flex align='center' flexDirection='column' gap='13px' mt='66px' 
			mb='252px'>
				<Avatar src={avatar} w='88px' h='88px'/>
				<Heading as='h2' size='23px' color='#FFFFFF'>
					Нач
				</Heading>
			</Flex>
			<Flex align='center' flexDirection='column' gap='53.3px' mb='326px'>
				<Link >
					<Image src={nomenclature} w='34.5px' h='34.5px' className='sidebar-link' />
				</Link>
				<Link>
					<Image src={plan} w='34.5px' h='34.5px' />
				</Link>
				<Link>
					<Image src={list} w='34.5px' h='34.5px' className='sidebar-link'/>
				</Link>		
			</Flex>
			<Link >
				<Image src={setting} w='34.5px' h='34.5px'/>
			</Link>
		</Flex>
	)
}

export default Sidebar 