import { Button, Form, Modal, Typography } from 'antd';
import FormInput from '../../custom-input/FormInput/FormInput';
import { FileInput } from '../../custom-input/FileInput/FileInput';
import { CustomTextarea } from '../../custom-input/CustomTextarea/CustomTextarea';
import style from './ModalAddDocuments.module.css';

type Props = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type newOrder = {
	files: {
		file: File;
		fileList: File[];
	};
	description: string;
	[key: string]: string | { file: File; fileList: File[] } | null;
};

type Order={
	name:string
}

export const ModalAddDocuments = ({ open, setOpen }: Props) => {
	const [form] = Form.useForm();

	const order={
		name:'30SAM46AH501'
	}

	const handleSubmit = (currentData: newOrder) => {
		const finallyData = {
			...currentData,
			files: currentData.files.fileList,
		};
		console.log(finallyData);
		form.resetFields();
	};

	const handleCLose = () => {
		setOpen(false);
		form.resetFields();
	};

	return (
		<Modal
			width="46.6vw"
			open={open}
			footer={false}
			onCancel={handleCLose}
			centered
			maskClosable={false}
		>
			<Typography.Text className={style.titleModal}>
				{order.name}
			</Typography.Text>
			<br/>
			<Typography.Text className={style.titleForm}>
				Технические данные
			</Typography.Text>
			<Form form={form} onFinish={handleSubmit} className={style.form}>
				<FileInput name="files" required={true} />
				<CustomTextarea
					name="description"
					label="Комментарий/описание"
				/>
				<Button className={style.buttonSave} htmlType="submit">
					Отправить
				</Button>
			</Form>
		</Modal>
	);
};
