import { Button, Modal } from 'antd';
import TableMaterial from '../../tables/tableMaterial/TableMaterial';
import { MaterialTable, ChangeData } from '../../../utils/Orders';
import { useEffect, useState } from 'react';
import { useCompleteStepMutation } from '../../../app/services/orders';
import { checkStage } from '../../../functions/checkStageComplete';

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    kks: string;
    materialInfo: MaterialTable;
    isComplete: boolean;
};

const ModalInfoStage = ({
    open,
    setOpen,
    kks,
    materialInfo,
    isComplete,
}: Props) => {
    const [matInfo, setMatInfo] = useState<MaterialTable>({});
    useEffect(() => {
        setMatInfo(materialInfo);
    }, [materialInfo]);
    const [changedData, setChangedData] = useState<ChangeData>({});
    const [completeStep, { isLoading }] = useCompleteStepMutation();

    const completeStage = () => {
        const formData = new FormData();
        formData.append('KKS', kks);
        formData.append('StepId', '9');
        formData.append('IsCompleted', checkStage(matInfo).toString());
        formData.append('Storage', JSON.stringify(changedData));
        formData.append('files', '');
        completeStep(formData);
    };
    return (
        <Modal
            width='90vw'
            open={open}
            style={{ top: '5%', left: '2%' }}
            onCancel={() => setOpen(!open)}
            footer={
                isComplete ? null : (
                    <Button
                        type='primary'
                        onClick={completeStage}
                        loading={isLoading}
                    >
                        Сохранить
                    </Button>
                )
            }
        >
            <h1>{kks}</h1>
            <div
                style={{
                    height: '70vh',
                    overflowY: 'scroll',
                    width: '83vw',
                    marginBottom: '5vh',
                }}
            >
                <TableMaterial
                    materialInfo={matInfo}
                    setMaterialInfo={setMatInfo}
                    isCompleted={isComplete}
                    setChangedData={setChangedData}
                />
            </div>
        </Modal>
    );
};

export default ModalInfoStage;
