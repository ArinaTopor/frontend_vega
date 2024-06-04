import { UploadOutlined, CloseCircleOutlined } from '@ant-design/icons';
import styles from './UploadFile.module.css';
import { Form, Input } from 'antd';

const UploadFile = ({
    updateUploadFiles,
    uploadedFiles,
    required,
}: {
    updateUploadFiles: (
        value: React.SetStateAction<File[] | undefined>
    ) => void;
    uploadedFiles: File[] | undefined;
    required: boolean;
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            updateUploadFiles([
                ...(uploadedFiles ?? []),
                ...event.target.files,
            ]);
        }
    };
    const removeFile = (indexI: number) => {
        if (uploadedFiles) {
            const currentFiles = uploadedFiles.filter(
                (file, index) => index !== indexI
            );
            updateUploadFiles(
                currentFiles.length > 0 ? currentFiles : undefined
            );
        }
    };
    return (
        <>
            <Form.Item
                name={'files'}
                rules={[
                    {
                        required: required,
                        message: 'Обязательное поле',
                    },
                ]}
            >
                <div className={styles.upload_container}>
                    <UploadOutlined
                        style={{ fontSize: '18px', color: '#314659' }}
                    />
                    <label
                        htmlFor='file-loader-button'
                        className={styles.upload_label}
                    >
                        Прикрепить файл
                    </label>
                    <Input
                        id='file-loader-button'
                        className={styles.upload_input}
                        type='file'
                        multiple
                        onChange={handleChange}
                    />
                </div>
            </Form.Item>
            <div className={styles.file_container}>
                {uploadedFiles &&
                    uploadedFiles.map((file, index) => (
                        <div key={index} className={styles.file}>
                            {file.name}
                            <CloseCircleOutlined
                                style={{
                                    fontSize: '14px',
                                    color: '#314659',
                                }}
                                onClick={() => removeFile(index)}
                                className={styles.remove_file}
                            />
                        </div>
                    ))}
            </div>
        </>
    );
};
export default UploadFile;
