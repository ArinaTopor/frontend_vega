import { useEffect, useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { CustomInput } from '../custom-input/LoginInput';
import { useCurrentQuery, useLoginMutation } from '../../app/services/auth';
import { Error } from '../../utils/Error';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/auth/authSlice';
import { MainPageRoles } from '../../paths';
import { FormData } from '../../utils/FormData';
import styles from './Login.module.css';
import { CardLogin } from '../CardLogin';

export const boxStyles = {
    display: 'flex',
    flexDirection: 'column',
    bg: '#fff',
    p: '2.6vw',
    m: 'auto',
    width: '32vw',
    textAlign: 'center',
};

const Login = () => {
    const [loginUser, { isLoading }] = useLoginMutation();
    const navigate = useNavigate();
    const { data, refetch } = useCurrentQuery();
    const user = useSelector(selectUser);
    const [isError, setIsErrors] = useState<boolean>(false);
    const [formDataError, setFormDataError] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>({
        login: '',
        password: '',
    });
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        if (user) {
            navigate(MainPageRoles[user.role] || '/');
        }
    }, [user, navigate]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = (data: FormData) => {
        if (!data.login.trim() || !data.password.trim()) {
            setFormDataError(true);
        } else {
            setFormDataError(false);
            setIsErrors(false);
        }
    };

    const handleAuth = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        validateForm(formData);
        if (!formDataError) {
            try {
                await loginUser(formData).unwrap();
                refetch();
            } catch (err) {
                if ((err as Error).originalStatus === 400) {
                    setIsErrors(true);
                } else {
                    console.log(err);
                }
            }
        }
    };

    return (
        <>
            {isVisible ? (
                <CardLogin setIsVisible={setIsVisible} />
            ) : (
                <Box sx={boxStyles} display={isVisible ? 'none' : 'flex'}>
                    <h1>Вход</h1>
                    <p>
                        Для входа в систему введите
                        <br /> логин и пароль
                    </p>
                    <form className={styles.login} onSubmit={handleAuth}>
                        <CustomInput
                            placeholder='Логин'
                            name='login'
                            value={formData.login}
                            onChange={handleChange}
                        ></CustomInput>
                        <CustomInput
                            placeholder='Пароль'
                            name='password'
                            value={formData.password}
                            type='password'
                            onChange={handleChange}
                        ></CustomInput>
                        {isError ? (
                            <p style={{ color: 'red' }}>
                                Неверный логин или пароль
                            </p>
                        ) : null}
                        {formDataError ? (
                            <p style={{ color: 'red' }}>
                                Необходимо заполнить все поля
                            </p>
                        ) : null}
                        <Button
                            variant={'brand'}
                            type='submit'
                            isLoading={isLoading}
                            isDisabled={isLoading}
                            _disabled={{ cursor: 'not-allowed' }}
                        >
                            Войти
                        </Button>
                    </form>
                    <Button
                        variant={'additionally'}
                        mt={'1.25vw'}
                        onClick={() => setIsVisible(!isVisible)}
                    >
                        Войти по карточке
                    </Button>
                </Box>
            )}
        </>
    );
};
export default Login;
