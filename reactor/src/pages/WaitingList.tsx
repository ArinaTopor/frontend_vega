import { Box } from '@chakra-ui/layout'
import { Orders } from '../components/Orders'
import { Button } from '@chakra-ui/button'
import plus from '../assets/icons/plus.svg'
import { Image } from '@chakra-ui/image'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Popover, PopoverArrow, PopoverContent, PopoverHeader, PopoverTrigger, useDisclosure } from '@chakra-ui/react'
import FormInput from '../components/custom-input/FormInput'
import { FileInput } from '../components/custom-input/FileInput'
import { CustomTextarea } from '../components/CustomTextarea/CustomTextarea'
import { NewOrderForm } from '../components/NewOrderForm/NewOrderForm'
import { useRef } from 'react'

export function WaitingList(){
	const { isOpen, onOpen, onClose } = useDisclosure()
	const finalRef = useRef(null)

	const getDate=()=>{
		const currentDate = new Date();
		const stringDate:string = `${String(currentDate.getDate()).padStart(2,'0')}.${String(currentDate.getMonth()+1).padStart(2,'0')}.${currentDate.getFullYear()}`
		return stringDate
	}

return(
	<Box p="5.7vh 3.95vw 0 4.1vw" position='relative' flexGrow='1'>
		<Box color="#314659" fontSize="4.62vh" fontWeight='800' mb='7vh' fontFamily='Roboto'>
			{getDate()}
		</Box>
		<Orders/>
		<Popover placement='left-start' trigger='hover'>
			<PopoverTrigger>
			<Button display='flex' alignItems='center' justifyContent='center' w='6.1vw' h='6.1vw' background='#314659' borderRadius='15%' position='absolute' right='4vw' bottom='5.6vh' _hover={{opacity:0.7}} onClick={onOpen}>
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
		<Modal 
			isOpen={isOpen} 
			onClose={onClose} 
			size='4xl' 
			isCentered={true}
			finalFocusRef={finalRef}
			closeOnOverlayClick={false}>
			<ModalOverlay/>
			<ModalContent p='8.4vh 5.8vw 0 4.1vw' background='#F4F5F7' height='93.4vh'>
				<ModalHeader  fontSize='2.6vh' fontFamily='Roboto' color='#000' mb='5vh' p='0'>Новый заказ</ModalHeader>
				<ModalCloseButton mr='25px' mt='25px'/>
				<ModalBody p='0'>
					<NewOrderForm/>
				</ModalBody>
			</ModalContent>
		</Modal>
		

	</Box>
)}
