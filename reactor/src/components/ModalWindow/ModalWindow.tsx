import { Box, Button, Flex, Image } from '@chakra-ui/react'
import closeSrc from '../../assets/icons/close.svg'
import { Dispatch, SetStateAction } from 'react'

type Props={
	isActive:boolean
	setIsActive:Dispatch<SetStateAction<boolean>>
	children: React.ReactNode
	styleContent:{
		p?: string;
		background?: string;
		h?: string;
		w?: string;
	}
}

const styleOuter={
	position:'fixed',
	top:'0',
	left:'0',
	backgroundColor:'#31465966',
	w:'100vw',
	h:'100vh',
	justifyContent:'center',
	alignItems:'center'
}

export function ModalWindow({isActive, setIsActive, children, styleContent}:Props){

	return(
		<Flex sx={styleOuter} transform={!isActive ? 'scale(0)' : 'scale(1)'}>
			<Box sx={styleContent} position='relative'>
				<Button position='absolute' top='2.4vh' right='1.4vw' onClick={()=>setIsActive(false)} background={styleContent.background} _hover={{}} display='inline-block' p='0'>
					<Image src={closeSrc}/>
				</Button>	
				{children}
			</Box>
		</Flex>
	)
}