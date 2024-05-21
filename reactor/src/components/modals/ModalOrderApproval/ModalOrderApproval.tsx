import { Button, Flex, Form, Image, Modal, Typography } from 'antd';
import { CustomTextarea } from '../../custom-input/CustomTextarea/CustomTextarea';
import style from './ModalOrderApproval.module.css';
import srcFile from '../../../assets/icons/file.svg';
import { Step } from '../../../utils/Step';
import UploadFile from '../../custom-input/UploadFile/UploadFile';
import { useState } from 'react';
import ButtonFile from '../../ButtonFile/ButtonFile';

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    kks: string;
    step: Step;
};

export const ModalOrderApproval = ({ open, setOpen, kks, step }: Props) => {
    const [form] = Form.useForm();
    const [fileList, setFiles] = useState<File[] | undefined>();

    const handleSubmit = () => {
        form.resetFields();
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
                <Flex className={style.wrapperFilesApproval}>
                    <Flex className={style.filesApproval}>
                        {step.files.map((file) => (
                            <ButtonFile file={file}></ButtonFile>
                        ))}
                    </Flex>
                </Flex>
                <Typography.Text className={style.titleSection}>
                    Замечания
                </Typography.Text>
                <UploadFile
                    updateUploadFiles={setFiles}
                    uploadedFiles={fileList}
                />
                <CustomTextarea
                    name='description'
                    label='Комментарий/описание'
                />
                <Flex className={style.buttons}>
                    <Button className={style.buttonNoApprove} htmlType='submit'>
                        Не согласовать
                    </Button>
                    <Button className={style.buttonApprove} htmlType='submit'>
                        Согласовать
                    </Button>
                </Flex>
            </Form>
        </Modal>
    );
};
