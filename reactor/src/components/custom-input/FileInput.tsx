import { Button, ComponentWithAs, Flex, FormControl, FormLabel, Input, InputProps, Text } from '@chakra-ui/react'
import { log } from 'console'
import { useEffect, useRef, useState } from 'react' 

type Props = {
    name: string,
    required: boolean,
	label:string,
	isClear:boolean
}

const InputStyle={
	opacity:'0', 
	h:'0',
	w:'0',
	lineHeight:'0',
	overflow:'hidden', 
	p:'0', 
	m:'0'
}

export function FileInput({name,label,required, isClear}:Props){
	const [selectedFile, setSelectedFile] = useState<File>()
	const filePicker = useRef<HTMLInputElement>(null)

	const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
		console.log(12);
		if (event.target.files)
			setSelectedFile(event.target.files[0])
	}

	const handleClick = ()=>{
		filePicker.current && filePicker.current.click()
	}
	
	useEffect(()=>{
		setSelectedFile(undefined)
	}, [isClear])

	return(
		<FormControl>
			<FormLabel mb='1.85vh' fontSize='2vh'>
				{label}
			</FormLabel>
			<Flex justify='space-between'>
				<Flex w='26.8vw' h='5.46vh' color='#314659' background='#EBECEF' align='center' pl='0.6vw' fontSize='1.85vh' border='1px solid #314659'>
					{selectedFile?.name}
				</Flex>
				<Button onClick={handleClick} variant='brand' w='8.7vw' 
				h='5.46vh' fontSize='2vh'>Прикрепить</Button>
			</Flex>
			<Input sx={InputStyle} type='file' required={required} name={name} accept='.pdf'  ref={filePicker} onChange={(e)=>handleChange(e)}/>
		</FormControl>
	)
}