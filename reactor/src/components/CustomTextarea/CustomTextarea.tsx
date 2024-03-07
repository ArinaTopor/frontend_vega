import style from './CustomTextarea.module.css'
import { Flex, Form, Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';

type Props={
	name: string,
	required: boolean,
	label:string
}

export function CustomTextarea({name, required, label}:Props){
	return(
		<>
			<Typography.Text className={style.label}>{label}</Typography.Text>
			<Form.Item name={name}>
				<Flex className={style.textareaWrapper}>
					<TextArea className={style.textarea}/>
				</Flex>
			</Form.Item>
		</>
	)  
}