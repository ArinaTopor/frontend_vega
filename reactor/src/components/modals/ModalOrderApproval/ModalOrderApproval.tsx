import { Button, Flex, Form, Image, Modal, Typography } from 'antd';
import { CustomTextarea } from '../../custom-input/CustomTextarea/CustomTextarea';
import style from './ModalOrderApproval.module.css';
import { FileInput } from '../../custom-input/FileInput/FileInput';
import srcFile from '../../../assets/icons/file.svg';

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type newOrder = {
    files: {
        file: File;
        fileList: File[];
    };
    description: string;
    [key: string]: string | { file: File; fileList: File[] } | null;
};

export const ModalOrderApproval = ({ open, setOpen }: Props) => {
    const [form] = Form.useForm();

    const handleSubmit = (currentData: newOrder) => {
        const finallyData = {
            ...currentData,
            files: currentData.files.fileList,
        };
        console.log(finallyData);
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
            <Typography.Text className={style.numOrder}>
                30SAM46AH501
            </Typography.Text>
            <br />
            <Typography.Text className={style.titleModal}>
                Согласование КД в АЭП
            </Typography.Text>
            <Form form={form} onFinish={handleSubmit} className={style.form}>
                <Typography.Text className={style.titleSection}>
                    Файлы для согласования
                </Typography.Text>
                <Flex className={style.wrapperFilesApproval}>
                    <Flex className={style.filesApproval}>
                        <Button className={style.btnFile}>
                            <Typography.Text className={style.titleFile}>
                                ИДП и ПС.pdf
                            </Typography.Text>
                            <Image
                                src={srcFile}
                                preview={false}
                                style={{ width: '1.3vw', height: '1.56vw' }}
                            />
                        </Button>
                        <Button className={style.btnFile}>
                            <Typography.Text className={style.titleFile}>
                                ИДП и ПС.pdf
                            </Typography.Text>
                            <Image
                                src={srcFile}
                                preview={false}
                                style={{ width: '1.3vw', height: '1.56vw' }}
                            />
                        </Button>
                        <Button className={style.btnFile}>
                            <Typography.Text className={style.titleFile}>
                                ИДП и ПС.pdf
                            </Typography.Text>
                            <Image
                                src={srcFile}
                                preview={false}
                                style={{ width: '1.3vw', height: '1.56vw' }}
                            />
                        </Button>
                    </Flex>
                </Flex>
                <Typography.Text className={style.titleSection}>
                    Замечания
                </Typography.Text>
                <FileInput
                    name='files'
                    required={true}
                    inputFileStyle={style.inputFile}
                    maxCount={2}
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
