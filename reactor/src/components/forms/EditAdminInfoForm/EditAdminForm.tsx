import FormInput from '../../custom-input/FormInput/FormInput';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../../features/auth/authSlice';
import {
    EditAdminInfo,
    useEditAdminInfoMutation,
} from '../../../app/services/employees';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button, Form } from 'antd';
import style from './EditAdminInfoForm.module.css'

const EditAdminInfoForm = () => {
    const [editProfile] = useEditAdminInfoMutation();
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState<EditAdminInfo>({
        login: user?.login!,
        name: user?.name!,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const submitEditInfo = async (formData: EditAdminInfo) => {
        try {
            editProfile(formData);
            dispatch(logout());
            navigate('/');
            console.log(formData);
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
        }
    };
    const handleSubmit = async () => {
        await submitEditInfo(formData);
    };
    return (
        <Form onFinish={handleSubmit}>
            <FormInput
                required={false}
                name='name'
                type='text'
                label='ФИО'
                value={formData.name ? formData.name : ''}
                onChange={handleChange}
            />
            <FormInput
                name='login'
                label='Логин'
                type='text'
                value={formData.login}
                onChange={handleChange}
                required={false}
            />
            <FormInput
                name='password'
                type='password'
                label='Пароль для входа'
                value={formData.password}
                onChange={handleChange}
                required={false}
            />
            <Button className={style.btnSave} htmlType='submit'>
                Cохранить
            </Button>
        </Form>
    );
};
export default EditAdminInfoForm;
