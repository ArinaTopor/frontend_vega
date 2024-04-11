import { Button, Form, Image, Upload} from 'antd';
import style from './FileInput.module.css';

import uploadSrc from '../../../assets/icons/upload.svg';

type Props = {
	name: string;
	required: boolean;
	inputFileStyle?: string;
	maxCount?: number;
};

export function FileInput({ name, required, inputFileStyle, maxCount}: Props) {
	return (
		<>
			<Form.Item name={name} className={inputFileStyle} rules={[
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
					maxCount={maxCount ? maxCount : 100}
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
