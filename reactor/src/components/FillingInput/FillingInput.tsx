import {useState} from 'react';
import { FormControl, Input, Image,Box} from "@chakra-ui/react"
import visible from '../../image/visible.svg'
import notVisible from '../../image/notVisible.svg'
import { relative } from 'path'

type Props = {
    name: string,
    placeholder?: string,
    required?: boolean,
    type?: string,
}

const InputStyles={
	background:'#EBECEF',
	borderRadius: '0',
	h:'5.3vh',
	fontSize:'1.1vw',
	_focus:{border:'1px solid #4f5454'},
	_hover:{border:'1px solid #4f5454'}
}

const FillingInput = ({name,type,required}:Props) =>{
	const [isVisible,setIsVisible]=useState(false)

	return (
		<FormControl mb='3vh' width='90%'>
			{type === 'password'?
				<Box position='relative'>
					<Image src={!isVisible?notVisible:visible} pos='absolute' zIndex='2' w='2.3vw' right='1.35vw' top='0.6vh' cursor='pointer' onClick={()=>{setIsVisible(!isVisible)}}/>
					<Input name={name} type={isVisible?'text':'password'} sx={InputStyles} required={required}/>
				</Box>
			:<Input name={name} type={type} sx={InputStyles} required={required} />
			}
		</FormControl>
	)
}

export default FillingInput