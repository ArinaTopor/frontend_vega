import {useState} from 'react';
import { FormControl, Select } from "@chakra-ui/react"

type Props = {
    name: string,
    placeholder?: string,
    required?: boolean,
	options:string[]
}

const SelectStyles={
	background:'#EBECEF',
	borderRadius: '0',
	h:'5.3vh',
	fontSize:'1.1vw',
	_focus:{border:'1px solid #4f5454'},
	_hover:{border:'1px solid #4f5454'}
}

const FillingSelect = ({name,placeholder,required,options}:Props) =>{
	return (
		<FormControl mb='3vh' width='90%'>
			<Select sx={SelectStyles} placeholder={placeholder} 
			required={required} name={name}>
				{
					options.map((option,index) => <option key={index} value={option}>{option}</option>)
				}
			</Select>
		</FormControl>
	)
}

export default FillingSelect