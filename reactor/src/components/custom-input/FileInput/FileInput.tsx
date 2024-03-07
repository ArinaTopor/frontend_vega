import { Button, Flex, Form, Image, Typography, Upload, UploadFile } from 'antd';
import style from './FileInput.module.css';
import { useState } from 'react';
import uploadSrc from '../../../assets/icons/upload.svg';

type Props = {
	name: string;
	required: boolean;
	label: string;
	isClear?: boolean;
};

export function FileInput({ name}: Props) {
	const [selectedFiles, setSelectedFiles] = useState<Array<File>>([])

	const handleChange=({fileList}: any)=>{
		console.log(fileList)
		setSelectedFiles(fileList)
		const files:UploadFile[] = selectedFiles.map(e=> {
			const file:UploadFile={
				uid:'0',
				lastModified: e.lastModified,
				name:e.name,
				size: e.size,
				type: e.type,
			}
			return file
		})
		console.log(files)
	}

	return (
		<>
			<Form.Item name={name} className={style.inputFile}>
				<Upload
					accept=".pdf"
					multiple={true}
					beforeUpload={(file) => {
						console.log(file);
						return false
					}}
					onChange={handleChange}
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
