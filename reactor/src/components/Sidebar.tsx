import {Flex,Image, Heading,Link} from '@chakra-ui/react';
import avatar from '../assets/image/avatar.png'
import list from '../assets/icons/list.svg'
import plan from '../assets/icons/plan.svg'
import nomenclature from '../assets/icons/nomenclature.svg'
import setting from '../assets/icons/setting.svg'

type Props={
	isAdmin: boolean
}

export function Sidebar({isAdmin}:Props) {

	return(
		<Flex align='center' flexDirection='column' mr='auto' w='6.3vw' backgroundColor='#314659' h='100vh' position='fixed'>
			<Flex align='center' flexDirection='column' gap='13px' mt='6.1vh' 
			mb='22vh'>
				<Image src={avatar} w='4.5vw'/>
				<Heading as='h2' fontSize='1.2vw' color='#FFFFFF'>
					{isAdmin? 'Нач' : 'Рб1'}
				</Heading>
			</Flex>
			{isAdmin && 
			<Flex align='center' flexDirection='column' gap='4.9vh'>
				<Link  _hover={{opacity:'0.3'}}>
					<Image src={nomenclature} w='1.8vw'/>
				</Link>
				<Link _hover={{opacity:'0.3'}}>
					<Image src={plan} w='1.8vw'/>
				</Link>
				<Link _hover={{opacity:'0.3'}}>
					<Image src={list} w='1.8vw'/>
				</Link>		
			</Flex>
			}
			<Link position='absolute' bottom={0} marginBottom='4vh'
			 _hover={{opacity:'0.3'}}>
				<Image src={setting} w='1.8vw'/>
			</Link>
		</Flex>
	)
}