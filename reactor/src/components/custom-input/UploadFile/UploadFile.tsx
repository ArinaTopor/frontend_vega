import { UploadOutlined, CloseCircleOutlined } from '@ant-design/icons';
import styles from './UploadFile.module.css';

const UploadFile = ({
    updateUploadFiles,
    uploadedFiles,
}: {
    updateUploadFiles: (
        value: React.SetStateAction<File[] | undefined>
    ) => void;
    uploadedFiles: File[] | undefined;
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
                <input
                    id='file-loader-button'
                    className={styles.upload_input}
                    type='file'
                    multiple
                    onChange={handleChange}
                />
            </div>
            <div className={styles.file_container}>
                {uploadedFiles &&
                    uploadedFiles.map((file, index) => (
                        <div key={index} className={styles.file}>
                            {file.name}
                            <CloseCircleOutlined
                                style={{ fontSize: '14px', color: '#314659' }}
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
