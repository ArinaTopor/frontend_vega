import FormInput from '../../custom-input/FormInput/FormInput';
import { CustomSelect } from '../../custom-input/CustomSelect/CustomSelect';
import { Option } from '../../../utils/Option';
import { mainStageRole, roles, stages } from '../../../constans/roleData';
import {
    NewUser,
    useAddUserMutation,
    useGetAreasQuery,
} from '../../../app/services/employees';
import style from './AddEmployeeForm.module.css';
import EditAdminInfoForm from '../EditAdminInfoForm/EditAdminForm';
import { Button, Cascader, Form, Typography } from 'antd';
import { useState } from 'react';

type Props = {
    isAdmin: boolean;
};
const { SHOW_CHILD } = Cascader;

const AddEmployeeForm = ({ isAdmin }: Props) => {
    const [form] = Form.useForm();
    const { data: dataAreas } = useGetAreasQuery();
    const [addUser, { isLoading }] = useAddUserMutation();
    const displayRender = (labels: string[]) => labels[labels.length - 1];
    const [updateRoles, setUpdateRoles] = useState<Option[]>(roles);
    const [currentRole, setCurrentRole] = useState<string[]>([]);

    const arrayAreas: Array<{ value: number; label: string }> = dataAreas
        ? Object.keys(dataAreas).map((key) => {
              const item = {
                  value: Number(key),
                  label: dataAreas[key],
              };
              return item;
          })
        : [];

    const handleChange = (value: any) => {
        setCurrentRole(value[0] ? value[0] : []);
        const updatedRoles = updateRoles;
        const roleValues = value as string[][];
        const traverseTree = (
            tree: Option[],
            callback: (node: Option) => void
        ) => {
            tree.forEach((node) => {
                if (
                    !roleValues.some((sub: string[]) =>
                        sub.includes(node.value)
                    )
                ) {
                    node.disableCheckbox = true;
                    callback(node);
                }
                if (
                    roleValues.some((sub: string[]) =>
                        sub.includes(mainStageRole)
                    ) &&
                    stages.includes(node.value)
                ) {
                    node.disableCheckbox = false;
                    callback(node);
                }

                if (roleValues.length === 0) {
                    node.disableCheckbox = false;
                }
                if (node.children) {
                    traverseTree(node.children, callback);
                }
                callback(node);
            });
        };
        traverseTree(updateRoles, () => {});
        setUpdateRoles(updatedRoles);
    };

    const handleAdd = async (data: NewUser) => {
        try {
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
                    <Form.Item
                        name={'roleIds'}
                        rules={[
                            {
                                required: true,
                                message: 'Обязательное поле',
                            },
                        ]}
                    >
                        <Cascader
                            options={updateRoles}
                            expandTrigger='hover'
                            displayRender={displayRender}
                            showCheckedStrategy={SHOW_CHILD}
                            multiple
                            maxTagCount='responsive'
                            style={{
                                height: '5.3vh',
                                width: '90%',
                            }}
                            onChange={handleChange}
                        />
                    </Form.Item>

                    <CustomSelect
                        name='areaId'
                        placeholder=' '
                        required={true}
                        options={arrayAreas ?? []}
                        label='Участок'
                        disabled={!(currentRole[0] === '2')}
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
