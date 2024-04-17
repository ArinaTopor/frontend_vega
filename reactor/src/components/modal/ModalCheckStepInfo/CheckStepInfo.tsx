import { Button, Form, Modal, Typography } from 'antd';
import { CustomTextarea } from '../../custom-input/CustomTextarea/CustomTextarea';
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
            centered
            maskClosable={false}
        >
            <h2 className={styles.titleModal}>{kks}</h2>
            <p>{step.step_name}</p>
            <p>Комментарий/описание</p>
            <div>
                <p>-</p>
            </div>
            <Button className={styles.buttonSave} onClick={handleCLose}>
                Закрыть
            </Button>
        </Modal>
    );
};
export default CheckStepInfo;
