import { Button, Typography } from 'antd';
import { FileOutlined } from '@ant-design/icons';
import styles from './ButtonFile.module.css';
import { CustomFile } from '../../utils/FileType';
import { openFile } from '../../functions/openFile';
const ButtonFile = ({ file }: { file: CustomFile }) => {
    console.log(file as unknown as File);
    const handleOpenFile = (path: string) => {
        openFile(path);
    };
    return (
        <Button
            className={styles.btnFile}
            icon={<FileOutlined />}
            iconPosition='end'
            onClick={() => handleOpenFile(file.path)}
        >
            <Typography.Text className={styles.titleFile}>
                {file.filename}
            </Typography.Text>
        </Button>
    );
};
export default ButtonFile;
