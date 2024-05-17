import { Button, Form, Modal, Typography } from 'antd';
import FormInput from '../../custom-input/FormInput/FormInput';
import { CustomTextarea } from '../../custom-input/CustomTextarea/CustomTextarea';
import style from './ModalAddOrder.module.css';
import { useAddOrdersMutation } from '../../../app/services/orders';
import { useState } from 'react';
import UploadFile from '../../custom-input/UploadFile/UploadFile';

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type NewOrderSubmit = {
    KKS: string;
    files: {
        file: File;
        fileList: FileList;
    };
    Description: string;
    [key: string]: string | { file: File; fileList: FileList } | null;
};

export const ModalAddOrder = ({ open, setOpen }: Props) => {
    const [form] = Form.useForm();
    const [addOrder, { isLoading }] = useAddOrdersMutation();
    const [fileList, setFiles] = useState<File[] | undefined>();

    const handleSubmit = (order: NewOrderSubmit) => {
        const formData = new FormData();
        if (fileList)
            for (let i = 0; i < fileList.length; i++) {
                const file = fileList[i];
                formData.append('files', file);
            }
        formData.append('KKS', order.KKS);
        formData.append('Description', order.Description ?? '');
        addOrder(formData);
        setFiles([]);
        form.resetFields();
    };

    const handleCLose = () => {
        setOpen(false);
        form.resetFields();
        setFiles([]);
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
                Новый заказ
            </Typography.Text>
            <Form form={form} onFinish={handleSubmit} className={style.form}>
                <FormInput name='KKS' type='text' required={true} label='ККС' />
                <Form.Item name='files'>
                    <UploadFile
                        updateUploadFiles={setFiles}
                        uploadedFiles={fileList}
                    />
                </Form.Item>
                <CustomTextarea
                    name='Description'
                    label='Комментарий/описание'
                />
                <Button
                    className={style.buttonSave}
                    htmlType='submit'
                    loading={isLoading}
                >
                    Создать
                </Button>
            </Form>
        </Modal>
    );
};
