import { Flex,Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

type Props={
	callback:(choice:boolean)=>void
}

const activeChoiceStyle={
	color: '#000',
	fontWeight: '500',
	fontSize:'1.1vw',
	p:'0',
	mr:'1.8vw',
	background: '#fff',
	borderRadius: '0.2vw',
	justifyContent:'start',
	height:'4.4vh',
	cursor:'auto'
}

const choiceStyle={
	fontSize:'1.1vw',
	color: '#758593',
	fontWeight: '500',
	mr:'1.8vw',
	background: '#EBECEF',
	width:'12vw',
	height:'4.4vh',
	justifyContent:'start'
}


const FillingChoice=({callback}:Props)=>{

	const [isAdmin, setIsAdmin] = useState(true)


	function handlerClick(e:any){
		const { target } = e
		const value = (target as HTMLButtonElement).value
		setIsAdmin(value==='admin')
	}

	useEffect(()=>{
		callback(isAdmin)
	},[isAdmin])


	return (
		<Flex mb='5.5vh'>
			<Button sx={isAdmin ? activeChoiceStyle : choiceStyle} _hover={{}} _active={{}} value='admin' onClick={e=> handlerClick(e)}>
				Начальник
			</Button>
			<Button sx={!isAdmin ? activeChoiceStyle : choiceStyle} _hover={{}} _active={{}} value='worker' onClick={e=> handlerClick(e)}>
				Новый работник
			</Button>
		</Flex>
	)
}

export default FillingChoice