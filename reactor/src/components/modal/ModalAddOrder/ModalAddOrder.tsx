import { Button, Form, Modal, Typography } from "antd"
import FormInput from "../../custom-input/FormInput/FormInput"
import { FileInput } from "../../custom-input/FileInput/FileInput"
import { CustomTextarea } from "../../custom-input/CustomTextarea/CustomTextarea"
import style from './ModalAddOrder.module.css'

type Props={
    open:boolean,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}

type newOrder={
	kks:string,
	files:{
        file:File,
        fileList:File[]
    },
	description:string,
	[key: string]: string | 
    {file:File,fileList:File[]} | null;
}

export const ModalAddOrder=({open, setOpen}:Props)=>{
    const [form] = Form.useForm();

    const handleSubmit=(currentData:newOrder)=>{
        const finallyData={...currentData, files:currentData.files.fileList}
		console.log(finallyData)
		form.resetFields();
	}

    const handleCLose=()=>{
        setOpen(false)
        form.resetFields()
    }


    return(
        <Modal
            width="46.6vw"
            open={open}
            footer={false}
            onCancel={handleCLose}
            className={style.modal}
            centered
            maskClosable={false}
        >
            <Typography.Text className={style.titleModal}>Новый заказ</Typography.Text>
                <Form form={form} onFinish={handleSubmit} className={style.form}>
                <FormInput name='kks' type='text' required={true} label='ККС'/>
                <FileInput name='files' required={true}/>
                <CustomTextarea name='description' required={true} label='Комментарий/описание'/>
                <Button className={style.buttonSave} htmlType='submit'>
                    Создать
                </Button>
            </Form>
        </Modal>
    )
}