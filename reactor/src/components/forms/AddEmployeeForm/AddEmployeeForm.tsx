import FormInput from '../../custom-input/FormInput/FormInput';
import { AddEmployeeSelect } from '../../custom-input/CustomSelect/CustomSelect';
import { roles } from '../../../features/employeesSlice';
import {
    NewUser,
    useAddUserMutation,
    useGetAreasQuery,
} from '../../../app/services/employees';
import style from './AddEmployeeForm.module.css';
import EditAdminInfoForm from '../EditAdminInfoForm.css/EditAdminForm';
import { Button, Cascader, Form, Typography } from 'antd';

type Props = {
    isAdmin: boolean;
};

const AddEmployeeForm = ({ isAdmin }: Props) => {
    const [form] = Form.useForm();
    const { data: dataAreas, error: errorAreas } = useGetAreasQuery();
    const [addUser, { isLoading }] = useAddUserMutation();
    const displayRender = (labels: string[]) => labels[labels.length - 1];
    const arrayAreas: Array<{ value: number; label: string }> = dataAreas
        ? Object.keys(dataAreas).map((key) => {
              const item = {
                  value: Number(key),
                  label: dataAreas[key],
              };
              return item;
          })
        : [];

    const handleAdd = async (data: NewUser) => {
        try {
            console.log(data);
            addUser(data);
            form.resetFields();
        } catch (e) {
            console.log(e);
        }
    };

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
                    <Typography.Text
                        style={{
                            display: 'inline-block',
                            fontSize: '2.03vh',
                            fontWeight: '500',
                            marginBottom: '1.8vh',
                            color: '#000',
                        }}
                    >
                        Роль
                    </Typography.Text>
                    <Form.Item name={'role'}>
                        <Cascader
                            options={roles}
                            expandTrigger='hover'
                            displayRender={displayRender}
                            style={{
                                background: '#EBECEF',
                                borderRadius: '0',
                                height: '5.3vh',
                                width: '100%',
                                fontSize: '24px',
                            }}
                        />
                    </Form.Item>

                    <AddEmployeeSelect
                        name='areaId'
                        placeholder=' '
                        required={false}
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
