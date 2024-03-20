import FormInput from '../../custom-input/FormInput/FormInput';
import { CustomSelect } from '../../custom-input/CustomSelect/CustomSelect';
import { roles } from '../../../features/employeesSlice';
import {
    NewUser,
    useAddUserMutation,
    useGetAreasQuery,
} from '../../../app/services/employees';
import style from './AddEmployeeForm.module.css';
import EditAdminInfoForm from '../EditAdminInfoForm/EditAdminForm';
import { Button, Cascader, Form, Typography } from 'antd';

type Props = {
    isAdmin: boolean;
};
const { SHOW_CHILD } = Cascader;

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
            console.log(JSON.stringify(data));
            const newRoleIds = Array.from(
                new Set(data.roleIds.flat().filter((num) => num !== '5'))
            );
            data.roleIds = newRoleIds;
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
                    <Form.Item name={'roleIds'}>
                        <Cascader
                            options={roles}
                            expandTrigger='click'
                            displayRender={displayRender}
                            showCheckedStrategy={SHOW_CHILD}
                            multiple
                            maxTagCount='responsive'
                            className={style.cascader}
                            style={{
                                height: '5.3vh',
                                width: '90%',
                            }}
                        />
                    </Form.Item>

                    <CustomSelect
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
