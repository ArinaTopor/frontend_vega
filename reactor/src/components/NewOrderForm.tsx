import { Button } from '@chakra-ui/react'
import { CustomTextarea } from './CustomTextarea/CustomTextarea'
import { FileInput } from './custom-input/FileInput'
import FormInput from './custom-input/FormInput'
import { useRef, useState } from 'react'

type newOrder={
	kks:string,
	titleList:File | null,
	technicData:File | null,
	description:string,
	[key: string]: string | File | null;
}

const buttonStyle={
	position:'absolute',
	bottom:'0',
	right:'0',
	mr:'2.3vw',
	mb:'4.9vh',
	w:'11.6vw',
	h:'4.9vh',
	fontSize:'2.4vh',
	fontFamily:'Roboto',
	fontWeight:'500'
}

export function NewOrderForm(){

	const formRef = useRef<HTMLFormElement>(null);
	const [isClear, setIsClear] = useState(false)

	const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
		e.preventDefault()
		const formData= new FormData(e.currentTarget)
		const formDataObject:newOrder={
			kks:'',
			titleList:null,
			technicData:null,
			description:''
		}
		formData.forEach((value: FormDataEntryValue, key: string) => {
			formDataObject[key] = value;
		});
		console.log(formDataObject)
		if (formRef.current)
			formRef.current.reset()
		setIsClear(last=>!last)
	}

	return(
		<form ref={formRef} onSubmit={handleSubmit}>
			<FormInput name='kks' type='text' required={true} label='ККС'/>
			<FileInput name='titleList' label='Титульный лист' required={true} isClear={isClear}/>
			<FileInput name='technicData' label='Технические данные' required={true} isClear={isClear}/>
			<CustomTextarea name='description' required={true} />
			<Button variant='brand' sx={buttonStyle} type='submit'>
				Создать
			</Button>
		</form>
	)
}