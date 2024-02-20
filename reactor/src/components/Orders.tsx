import { Box, Text } from '@chakra-ui/layout'
import emptyBox from '../assets/icons/empty-box.svg'
import { Image } from '@chakra-ui/image'

export function Orders(){
	const orders:string[]=[]
	return(
		<Box>
			{orders.length!==0?
			<Box>Заказы</Box>
			:
			<Box fontSize='3vh' color='#314659' textAlign='center' ml='28vw'  w='25vw' fontFamily='Roboto'>
				<Image src={emptyBox} w='25vw'/>
				<Text>Заказов пока нет...</Text>
				<Text>Создайте новый заказ!</Text>
			</Box>
			}
		</Box>
	)
}