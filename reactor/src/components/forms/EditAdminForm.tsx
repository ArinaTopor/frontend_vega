import { Button } from '@chakra-ui/react';
import FormInput from '../custom-input/FormInput';
import { buttonStyle } from '../../pages/AddEmployeePage/style';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/auth/authSlice';
import {
    EditAdminInfo,
    useEditAdminInfoMutation,
} from '../../app/services/employees';
import { useState } from 'react';
import { useNavigate } from 'react-router';

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
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await submitEditInfo(formData);
    };
    return (
        <form onSubmit={handleSubmit}>
            <FormInput
                name='name'
                type='text'
                placeholder='ФИО'
                value={formData.name ? formData.name : ''}
                onChange={(e) => {
                    const { name, value } = e.target;
                    setFormData((prevData) => ({
                        ...prevData,
                        [name]: value,
                    }));
                }}
            />
            <FormInput
                name='login'
                placeholder='Логин'
                type='text'
                value={formData.login}
                onChange={handleChange}
            />
            <FormInput
                name='password'
                type='password'
                label='Пароль для входа'
                value={formData.password}
                onChange={handleChange}
            />
            <Button variant='brand' sx={buttonStyle} type='submit'>
                Cохранить
            </Button>
        </form>
    );
};
export default EditAdminInfoForm;
