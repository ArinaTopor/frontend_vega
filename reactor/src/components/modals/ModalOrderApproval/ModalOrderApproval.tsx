import { Button, Flex, Form, Modal, Typography } from 'antd';
import { CustomTextarea } from '../../custom-input/CustomTextarea/CustomTextarea';
import style from './ModalOrderApproval.module.css';
import { Step } from '../../../utils/Step';
import UploadFile from '../../custom-input/UploadFile/UploadFile';
import { useState } from 'react';
import ButtonFile from '../../ButtonFile/ButtonFile';
import {
    CompleteStep,
    useCompleteStepMutation,
} from '../../../app/services/orders';
import { getFileApproval } from '../../../functions/getFilesApproval';

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    kks: string;
    step: Step;
    stepInfo: Step[];
};

export const ModalOrderApproval = ({
    open,
    setOpen,
    kks,
    step,
    stepInfo,
}: Props) => {
    const [form] = Form.useForm();
    const [fileList, setFiles] = useState<File[]>([]);
    const [completeStep, { isLoading }] = useCompleteStepMutation();
    const [isApproved, setIsApproved] = useState<boolean>(false);
    const idpAndPsFile = getFileApproval(stepInfo, step.step_id);

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
        formData.append('isApproved', isApproved.toString());
        completeStep(formData);
        setOpen(false);
        form.resetFields();
        setFiles([]);
    };
    const handleCLose = () => {
        setOpen(false);
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
            <Typography.Text className={style.numOrder}>{kks}</Typography.Text>
            <br />
            <Typography.Text className={style.titleModal}>
                {step.step_name}
            </Typography.Text>
            <Form form={form} onFinish={handleSubmit} className={style.form}>
                <Typography.Text className={style.titleSection}>
                    Файлы для согласования
                </Typography.Text>
                <Flex className={style.filesApproval}>
                    {idpAndPsFile &&
                        idpAndPsFile.files.map((file) => (
                            <ButtonFile
                                file={file}
                                key={file.upload_date}
                            ></ButtonFile>
                        ))}
                </Flex>
                <Typography.Text className={style.titleSection}>
                    Замечания
                </Typography.Text>
                <UploadFile
                    updateUploadFiles={setFiles}
                    uploadedFiles={fileList}
                    required={false}
                />
                <CustomTextarea
                    name='description'
                    label='Комментарий/описание'
                />
                <Flex className={style.buttons}>
                    <Button
                        className={style.buttonNoApprove}
                        htmlType='submit'
                        onClick={() => setIsApproved(false)}
                        disabled={isLoading}
                    >
                        Не согласовать
                    </Button>
                    <Button
                        className={style.buttonApprove}
                        htmlType='submit'
                        onClick={() => setIsApproved(true)}
                        disabled={isLoading}
                    >
                        Согласовать
                    </Button>
                </Flex>
            </Form>
        </Modal>
    );
};
