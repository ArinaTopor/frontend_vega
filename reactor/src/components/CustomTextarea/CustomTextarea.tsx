import { Box, FormControl, FormLabel } from '@chakra-ui/react'
import style from './CustomTextarea.module.css'

type Props={
	name: string,
	required: boolean
}

export function CustomTextarea({name, required}:Props){
	return(
		<FormControl>
			<FormLabel fontSize='2vh' mb='1.8vh' fontFamily='Roboto' fontWeight='500'>
				Комментарий/описание
			</FormLabel>
			<Box p='1.1vh 1.25vw 1.1vh 0.94vw' background='#EBECEF' borderRadius='5px'>
				<textarea className={style.textarea} name={name} required={required}/>
			</Box>
		</FormControl>
	)  
}