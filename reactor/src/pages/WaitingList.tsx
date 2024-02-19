import { Box } from '@chakra-ui/layout'
import { Orders } from '../components/Orders'
import { Button } from '@chakra-ui/button'
import plus from '../assets/icons/plus.svg'
import { Image } from '@chakra-ui/image'
import { Popover, PopoverArrow, PopoverContent, PopoverHeader, PopoverTrigger } from '@chakra-ui/react'

export function WaitingList(){
	const getDate=()=>{
		const currentDate = new Date();
		const stringDate:string = `${String(currentDate.getDate()).padStart(2,'0')}.${String(currentDate.getMonth()+1).padStart(2,'0')}.${currentDate.getFullYear()}`
		return stringDate
	}


return(
	<Box p="5.7vh 3.95vw 0 4.1vw">
		<Box color="#314659" fontSize="4.62vh" fontWeight='800' mb='8.3vh' fontFamily='Roboto'>
			{getDate()}
		</Box>
		<Orders/>
		<Popover placement='left-start' trigger='hover'>
			<PopoverTrigger>
			<Button display='flex' alignItems='center' justifyContent='center' w='6.1vw' h='6.1vw' background='#314659' borderRadius='15px' position= 'fixed' right='4vw' bottom='5.6vh' _hover={{opacity:0.7}}>
				<Image src={plus}/>
			</Button>
			</PopoverTrigger>
			<PopoverContent background='#D9D9D9'>
				<PopoverHeader fontSize='2.3vh' color='#314659' p='1.4vh 0.8vw 1.4vh 1vw'>
					Создать новый заказ
				</PopoverHeader>
				<PopoverArrow bg='#D9D9D9'/>
			</PopoverContent>
		</Popover>
		

	</Box>
)}
