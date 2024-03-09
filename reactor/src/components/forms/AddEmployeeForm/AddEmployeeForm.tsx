import FormInput from '../../custom-input/FormInput/FormInput';
import {AddEmployeeSelect} from '../../AddEmployeeSelect/AddEmployeeSelect';
import { roles } from '../../../features/employeesSlice';
import {
    NewUser,
    useAddUserMutation,
    useGetAreasQuery,
} from '../../../app/services/employees';
import style from './AddEmployeeForm.module.css'
import EditAdminInfoForm from '../EditAdminInfoForm.css/EditAdminForm';
import { Button, Form} from 'antd';


type Props = {
    isAdmin: boolean;
};

const AddEmployeeForm = ({ isAdmin }: Props) => {
    const [form] = Form.useForm();
    const { data: dataAreas, error: errorAreas } = useGetAreasQuery();
    const [addUser, { isLoading }] = useAddUserMutation();
    const arrayAreas:  Array<{value:number, label: string}>= dataAreas ? Object.keys(dataAreas).map((key)=>{
        const item = {
            value:Number(key),
            label:dataAreas[key]
        }
        return item
    }) : []

    const handleAdd= async (data:NewUser)=>{
        try {
            console.log(data)
            addUser(data);
            form.resetFields();
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            {isAdmin ? (
                <EditAdminInfoForm />
            ) : (
                <Form onFinish={handleAdd} form={form}>
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
                    >
                        Создать
                    </Button>
                </Form>
            )}
        </>
    );
};

export default AddEmployeeForm;
