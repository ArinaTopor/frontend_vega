import { Button, Form, Modal, Typography } from "antd"
import FormInput from "../../custom-input/FormInput/FormInput"
import { FileInput } from "../../custom-input/FileInput/FileInput"
import { CustomTextarea } from "../../custom-input/CustomTextarea/CustomTextarea"
import style from './ModalAddOrder.module.css'
import { NewOrder, useAddOrdersMutation } from '../../../app/services/orders'

type Props={
    open:boolean,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}

type NewOrderSubmit={
	KKS:string,
	files:{
        file:File,
        fileList:File[]
    },
	Description:string,
	[key: string]: string | 
    {file:File,fileList:File[]} | null;
}

export const ModalAddOrder=({open, setOpen}:Props)=>{
    const [form] = Form.useForm();
    const [addOrder, { isLoading }] = useAddOrdersMutation();
    const handleSubmit= async (currentData: NewOrderSubmit)=>{
        try{
            const finallyData: NewOrder={...currentData, files:currentData.files.fileList}
            const formData = new FormData()
            finallyData['files'].forEach(file=> formData.append('files', file))
            formData.append('KKS', finallyData.KKS)
            formData.append('Description', finallyData.Description)
            addOrder(formData)
            form.resetFields();
        }catch(e){
            console.log(e)
        }
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
            centered
            maskClosable={false}
        >
            <Typography.Text className={style.titleModal}>Новый заказ</Typography.Text>
                <Form form={form} onFinish={handleSubmit} className={style.form}>
                <FormInput name='KKS' type='text' required={true} label='ККС'/>
                <FileInput name='files' required={true} inputFileStyle={style.inputFile}/>
                <CustomTextarea name='Description' label='Комментарий/описание'/>
                <Button className={style.buttonSave} htmlType='submit'>
                    Создать
                </Button>
            </Form>
        </Modal>
    )
}