import {useState} from 'react';
import { FormControl, Input, Image,Box, FormLabel} from "@chakra-ui/react"
import visible from '../../assets/icons/visible.svg'
import notVisible from '../../assets/icons/notVisible.svg'

type Props = {
    name: string,
    placeholder?: string,
    required?: boolean,
    type?: string,
	label?:string
}

const InputStyles={
	background:'#EBECEF',
	borderRadius: '0',
	h:'5.3vh',
	pl:'1vw',
	fontSize:'1.1vw',
	_focus:{border:'1px solid #4f5454'},
	_hover:{border:'1px solid #4f5454'}
}

const FormInput = ({name,type,required,label}:Props) =>{
	const [isVisible,setIsVisible]=useState(false)

	return (
		<FormControl mb='1.8vh' width='100%'>
			<FormLabel fontSize='1.1vw' fontWeight='500' mb='1.8vh' color='#000'>{label}</FormLabel>
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

export default FormInput