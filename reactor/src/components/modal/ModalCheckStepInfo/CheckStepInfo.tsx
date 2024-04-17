import { Button, Modal } from 'antd';
import styles from './CheckStepInfo.module.css';
import { file } from '../../tables/TableOrders';

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    kks: string;
    step: {
        step_name: string;
        responsible: {
            login: string;
            name: string;
        };
        is_completed: boolean;
        files: file[];
    };
};

export const CheckStepInfo = ({ open, setOpen, kks, step }: Props) => {
    const handleCLose = () => {
        setOpen(false);
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
            <div className={styles.filesWrapper}></div>
            <p className={styles.stepInfo}>Комментарий/описание</p>
            <div className={styles.commentWrapper}>
                <p>-</p>
            </div>
            <Button className={styles.button} onClick={handleCLose}>
                Закрыть
            </Button>
        </Modal>
    );
};
export default CheckStepInfo;
