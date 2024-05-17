import { Button, Modal } from 'antd';
import styles from './CheckStepInfo.module.css';
import { Step } from '../../../utils/Step';
import { openFile } from '../../../functions/openFile';

type Props = {
    open: boolean;
    onOpen: React.Dispatch<React.SetStateAction<boolean>>;
    kks: string;
    step: Step;
};

export const CheckStepInfo = ({ open, onOpen, kks, step }: Props) => {
    const handleCLose = () => {
        onOpen(false);
    };

    const readFile = (path: string) => {
        openFile(path);
    };

    return (
        <Modal
            width='46.6vw'
            open={open}
            footer={false}
            onCancel={handleCLose}
            maskClosable={false}
        >
            <h2 className={styles.titleModal}>{kks}</h2>
            <p className={styles.stepInfo}>{step.step_name}</p>
            <div className={styles.filesWrapper}>
                {step.files.map((file) => (
                    <div
                        key={file.filename}
                        onClick={() => readFile(file.path)}
                        className={styles.fileContainer}
                    >
                        {file.filename}
                    </div>
                ))}
            </div>
            <p className={styles.stepInfo}>Комментарий/описание</p>
            <div className={styles.commentWrapper}>
                <p>{step.comment ? step.comment : '-'}</p>
            </div>
            <Button className={styles.button} onClick={handleCLose}>
                Закрыть
            </Button>
        </Modal>
    );
};
export default CheckStepInfo;
