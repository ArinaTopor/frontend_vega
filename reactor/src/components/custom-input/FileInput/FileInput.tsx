import { Button, Form, Image, Upload} from 'antd';
import style from './FileInput.module.css';

import uploadSrc from '../../../assets/icons/upload.svg';

type Props = {
	name: string;
	required: boolean;
};

export function FileInput({ name, required}: Props) {
	return (
		<>
			<Form.Item name={name} className={style.inputFile} rules={[
				{
					required: required,
					message: 'Обязательное поле',
				},
			]}>
				<Upload
					multiple={true}
					beforeUpload={() => {
						return false
					}}
					listType="picture"
				>
					<Button className={style.btn}>
						<Image src={uploadSrc} preview={false} className={style.image}/>
						Прикрепить файлы
					</Button>
				</Upload>
			</Form.Item>
		</>
	);
}
