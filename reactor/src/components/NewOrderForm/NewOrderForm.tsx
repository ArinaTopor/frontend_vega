import { CustomTextarea } from '../CustomTextarea/CustomTextarea'
import { FileInput } from '../custom-input/FileInput/FileInput'
import FormInput from '../custom-input/FormInput/FormInput'
import { useEffect} from 'react'
import { Button, Form } from 'antd';
import style from './NewOrderForm.module.css';

type newOrder={
	kks:string,
	titleList:File | null,
	technicData:File | null,
	description:string,
	[key: string]: string | File | null;
}

type Props={
	isClear:boolean;
}

export function NewOrderForm({isClear}:Props){
	const [form] = Form.useForm();

	const handleSubmit=(data:newOrder)=>{
		console.log(data)
		form.resetFields();
	}

	useEffect(()=>{
		form.resetFields();
	}, [isClear])

	return(
		<Form form={form} onFinish={handleSubmit} className={style.form}>
			<FormInput name='kks' type='text' required={true} label='ККС'/>
			<FileInput name='files' label='Титульный лист' required={true}/>
			<CustomTextarea name='description' required={true} label='Комментарий/описание'/>
			<Button className={style.buttonSave} htmlType='submit'>
				Создать
			</Button>
		</Form>
	)
}