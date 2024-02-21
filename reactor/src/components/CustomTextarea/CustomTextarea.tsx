import { Box, FormControl, FormLabel, Textarea } from '@chakra-ui/react'
import style from './CustomTextarea.module.css'

export function CustomTextarea(){
	return(
		<FormControl>
			<FormLabel fontSize='2vh' mb='1.8vh'>
				Комментарий/описание
			</FormLabel>
			<Box p='1.1vh 1.25vw 1.1vh 0.94vw' background='#EBECEF' borderRadius='5px'>
				<textarea className={style.textarea}/>
			</Box>
		</FormControl>
	)
}