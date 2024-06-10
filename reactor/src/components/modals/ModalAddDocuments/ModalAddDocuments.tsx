import { Button, Form, Modal, Typography } from 'antd';
import { CustomTextarea } from '../../custom-input/CustomTextarea/CustomTextarea';
import style from './ModalAddDocuments.module.css';
import { Step } from '../../../utils/Step';
import UploadFile from '../../custom-input/UploadFile/UploadFile';
import { useCallback, useEffect, useState } from 'react';
import {
    CompleteStep,
    useCompleteStepMutation,
} from '../../../app/services/orders';
import { getFile } from '../../../functions/fetchFiles';

type Props = {
    open: boolean;
    onOpen: React.Dispatch<React.SetStateAction<boolean>>;
    kks: string;
    step: Step;
};

export const ModalAddDocuments = ({ open, onOpen, kks, step }: Props) => {
    const [form] = Form.useForm();
    const [fileList, setFiles] = useState<File[]>([]);
    const [completeStep, { isLoading }] = useCompleteStepMutation();
    const handleFiles = async () => {
        //useCallback
        if (step.files.length !== 0) {
            for (const fileInfo of step.files) {
                const blob = await getFile(fileInfo.path);
                const fileName = fileInfo.path.split('/')[2].split('.')[0];
                const file = new File([blob], fileName);
                setFiles([...fileList, file]);
            }
        }
    };
    // const handleFiles = useCallback(async () => {
    //     if (step.files.length !== 0) {
    //         const newFiles: File[] = [];
    //         for (const fileInfo of step.files) {
    //             const blob = await getFile(fileInfo.path);
    //             const fileName = fileInfo.path.split('/')[2].split('.')[0];
    //             const file = new File([blob], fileName);
    //             newFiles.push(file);
    //         }
    //         setFiles((prevFiles = []) => [...prevFiles, ...newFiles]);
    //     }
    // }, [step.files]); //useEffect выполняется в дев режиме 2 раза из за чего 2 раза срабатывает эта
    //добавить useCallback позже

    useEffect(() => {
        handleFiles();
    }, [step.files]);

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
                {/* {step.files.map((file) => (
                    <ButtonFile file={file}></ButtonFile>
                ))} */}
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
