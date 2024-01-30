import { useState } from 'react';
import {Box, Button} from '@chakra-ui/react'
import FillingChoice from './FillingChoice/FillingChoice'
import FillingForm from './FillingForm/FillingForm';


const Filling = () =>{
	const boxStyle={
		display:'flex',
		flexDirection: 'column',
		bg: '#fff',
		h:'93.4vh',
		position:'relative',
		p:'9.2vh 3.8vw 3vh 4.1vw',
		w:'46.6vw',
	}

	const buttonStyle={
		borderRadius:'0',
		color:'#fff',
		fontSize:'1.1vw',
		_hover:{opacity:'0.7'}
	}

	const [isAdmin, setIsAdmin] = useState(true)

	function handlerChoice(choice:boolean){
		setIsAdmin(choice)
	}

	return(
		<Box sx={boxStyle}>
			<FillingChoice callback={handlerChoice}/>
			<FillingForm isAdmin={isAdmin}/>
			<Button sx={buttonStyle} w="11.6vw" h='5vh' backgroundColor='#314659'>
				Сохранить
			</Button>
			{isAdmin && 
				<Button sx={buttonStyle} w="7.3vw" h='4.4vh' backgroundColor='#B5534D' m="0 1.7vw 3.8vh 0" position='absolute' bottom='0' right='0'>
					Выйти
				</Button>
			}
		</Box>
	)
}

export default Filling