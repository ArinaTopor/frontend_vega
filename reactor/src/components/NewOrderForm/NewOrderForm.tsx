import { Button } from '@chakra-ui/react'
import { CustomTextarea } from '../CustomTextarea/CustomTextarea'
import { FileInput } from '../custom-input/FileInput'
import FormInput from '../custom-input/FormInput'

export function NewOrderForm(){

	const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
		e.preventDefault()
		const formData= new FormData(e.currentTarget)
		formData.forEach((e)=>console.log(e))
	}

	return(
		<form onSubmit={handleSubmit}>
			<FormInput name='KKS' type='text' required={true} label='ККС'/>
			<FileInput name='title-list' label='Титульный лист' required={true}/>
			<FileInput name='technic-data' label='Технические данные' required={true}/>
			<CustomTextarea/>
			<Button variant='brand' position='absolute' bottom='0' right='0' mr='2.3vw' mb='4.9vh' w='11.6vw' h='4.9vh' fontSize='2.4vh' fontFamily='Roboto' fontWeight='500' type='submit'>
				Создать
			</Button>
		</form>
	)
}