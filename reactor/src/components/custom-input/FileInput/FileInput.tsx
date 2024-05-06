import { Button, Form, Image, Upload, UploadProps } from 'antd';
import style from './FileInput.module.css';

import uploadSrc from '../../../assets/icons/upload.svg';
import { useState } from 'react';

type Props = {
    name: string;
    required: boolean;
    inputFileStyle?: string;
    maxCount?: number;
};

export function FileInput({ name, required, inputFileStyle, maxCount }: Props) {
    // const [filesUpload, setFilesUpload] = useState<FileList>();
    // const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    //     setUploadFiles(newFileList.);
    // };
    return (
        <>
            <Form.Item
                name={name}
                className={inputFileStyle}
                rules={[
                    {
                        required: required,
                        message: 'Обязательное поле',
                    },
                ]}
            >
                <Upload
                    multiple
                    beforeUpload={(file) => {
                        console.log(file);
                        return false;
                    }}
                    listType='picture'
                    maxCount={maxCount ? maxCount : 100}
                >
                    <Button className={style.btn}>
                        <Image
                            src={uploadSrc}
                            preview={false}
                            className={style.image}
                        />
                        Прикрепить файлы
                    </Button>
                </Upload>
            </Form.Item>
        </>
    );
}
