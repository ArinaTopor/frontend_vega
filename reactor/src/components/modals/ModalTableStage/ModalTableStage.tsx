import { Button, Modal } from 'antd';
import TableMaterial from '../../tables/tableMaterial/TableMaterial';

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    kks: string;
};

const ModalTableStage = ({ open, setOpen, kks }: Props) => {
    return (
        <Modal
            width='90vw'
            open={open}
            style={{ top: '5%', left: '2%' }}
            onCancel={() => setOpen(!open)}
            footer={<Button type='primary'>Сохранить</Button>}
        >
            <h1>{kks}</h1>
            <TableMaterial />
        </Modal>
    );
};

export default ModalTableStage;
