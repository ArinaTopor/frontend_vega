import { Button, Form, Modal, Typography } from 'antd';
import { CustomTextarea } from '../../custom-input/CustomTextarea/CustomTextarea';
import style from './ModalAddDocuments.module.css';
import { Step } from '../../../utils/Step';
import UploadFile from '../../custom-input/UploadFile/UploadFile';
import { useState } from 'react';
import {
    CompleteStep,
    useCompleteStepMutation,
} from '../../../app/services/orders';
import ButtonFile from '../../ButtonFile/ButtonFile';

type Props = {
    open: boolean;
    onOpen: React.Dispatch<React.SetStateAction<boolean>>;
    kks: string;
    step: Step;
};

export const ModalAddDocuments = ({ open, onOpen, kks, step }: Props) => {
    const [form] = Form.useForm();
    const [fileList, setFiles] = useState<File[] | undefined>();
    const [completeStep, { isLoading }] = useCompleteStepMutation();

    const handleSubmit = (infoStep: CompleteStep) => {
        const formData = new FormData();
        if (fileList)
            for (let i = 0; i < fileList.length; i++) {
                const file = fileList[i];
                formData.append('files', file);
            }
        formData.append('KKS', kks);
        formData.append('StepId', step.step_id.toString());
        formData.append('Description', infoStep.description ?? '');
        completeStep(formData);
        onOpen(false);
        form.resetFields();
        setFiles([]);
    };

    const handleCLose = () => {
        onOpen(false);
        form.resetFields();
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
            <Typography.Text className={style.titleModal}>
                {kks}
            </Typography.Text>
            <br />
            <Typography.Text className={style.titleForm}>
                {step.step_name}
            </Typography.Text>
            <Form form={form} onFinish={handleSubmit} className={style.form}>
                <UploadFile
                    updateUploadFiles={setFiles}
                    uploadedFiles={fileList}
                    required={true}
                />
                {step.files.map((file) => (
                    <ButtonFile file={file}></ButtonFile>
                ))}
                <CustomTextarea
                    name='description'
                    label='Комментарий/описание'
                />
                <Button
                    className={style.buttonSave}
                    htmlType='submit'
                    loading={isLoading}
                    disabled={isLoading}
                >
                    Отправить
                </Button>
            </Form>
        </Modal>
    );
};
