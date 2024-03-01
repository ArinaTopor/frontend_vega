import FormInput from '../custom-input/FormInput/FormInput';
import {AddEmployeeSelect} from '../AddEmployeeSelect/AddEmployeeSelect';
import { roles } from '../../features/employeesSlice';
import {
    CommonResponse,
    NewUser,
    useAddUserMutation,
    useGetAreasQuery,
} from '../../app/services/employees';
import { buttonStyle } from '../../pages/AddEmployeePage/style';
//import { Button } from '@chakra-ui/react';
import style from './AddEmployeeForm.module.css'
import { useRef } from 'react';
import EditAdminInfoForm from '../forms/EditAdminInfoForm.css/EditAdminForm';
import { Button, Form, FormInstance } from 'antd';


type Props = {
    isAdmin: boolean;
};

const AddEmployeeForm = ({ isAdmin }: Props) => {
    const [form] = Form.useForm();
    const { data: dataAreas, error: errorAreas } = useGetAreasQuery();
    const [addUser, { isLoading }] = useAddUserMutation();
    const formRef = useRef<FormInstance<any>>(null);
    const arrayAreas:  Array<{value:number, label: string}>= dataAreas ? Object.keys(dataAreas).map((key)=>{
        const item = {
            value:Number(key),
            label:dataAreas[key]
        }
        return item
    }) : []
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formDataObject: NewUser = {
            login: '',
            password: '',
            name: '',
            areaId: 0,
            roleId: 0,
        };
        console.log(formData);
        formData.forEach((value: FormDataEntryValue, key: string) => {
            formDataObject[key] = value.toString();
        });
        try {
            console.log(formDataObject)
            addUser(formDataObject);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            {isAdmin ? (
                <EditAdminInfoForm />
            ) : (
                <Form ref={formRef} onSubmitCapture={handleSubmit}>
                    <FormInput
                        name='name'
                        required={true}
                        type='text'
                        label='ФИО'
                    />
                    <FormInput
                        name='login'
                        required={true}
                        type='text'
                        label='Логин'
                    />
                    <AddEmployeeSelect
                        name='roleId'
                        placeholder=' '
                        required={true}
                        options={roles ?? []}
                        label='Роль'
                    />
                    <AddEmployeeSelect
                        name='areaId'
                        placeholder=' '
                        required={true}
                        options={arrayAreas ?? []}
                        label='Участок'
                    />
                    <FormInput
                        name='password'
                        required={true}
                        type='text'
                        label='Пароль'
                    />
                    <Button
                        className={style.btnSave}
                        htmlType='submit'
                        loading={isLoading}
                        onClick={()=>form.resetFields()}
                    >
                        Создать
                    </Button>
                </Form>
            )}
        </>
    );
};

export default AddEmployeeForm;
