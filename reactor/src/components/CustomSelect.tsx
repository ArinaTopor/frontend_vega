import { FormControl, FormLabel, Select } from "@chakra-ui/react"

type Props = {
    name: string,
    placeholder?: string,
    required?: boolean,
	options:string[],
	label?:string
}

const SelectStyles={
	background:'#EBECEF',
	borderRadius: '0',
	h:'5.3vh',
	fontSize:'1.1vw',
	_focus:{border:'1px solid #4f5454'},
	_hover:{border:'1px solid #4f5454'}
}

const AddEmployeeSelect = ({name,placeholder,required,options, label}:Props) =>{
	return (
		<FormControl mb='1.8vh' width='90%'>
			<FormLabel fontSize='1.1vw' fontWeight='500' mb='1.8vh' color='#000'>{label}</FormLabel>
			<Select sx={SelectStyles} placeholder={placeholder} 
			required={required} name={name}>
				{
					options.map((option,index) => <option key={index} value={option}>{option}</option>)
				}
			</Select>
		</FormControl>
	)
}

export default AddEmployeeSelect