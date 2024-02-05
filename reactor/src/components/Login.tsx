import { FormEvent, useEffect, useState } from 'react';
import { Box, Button, Checkbox, Flex, FormControl } from '@chakra-ui/react';
import styles from './Login.module.css';
import { CustomInput } from './custom-input';
import { useCurrentQuery, useLoginMutation } from '../app/services/auth';
import { Error } from '../utils/Error';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/auth/authSlice';
import { MainPageRoles } from '../paths';

const boxStyles = {
    display: 'flex',
    flexDirection: 'column',
    bg: '#fff',
    p: '50px',
    m: 'auto',
    width: '595px',
    textAlign: 'center',
};

const Login = () => {
    const [loginUser] = useLoginMutation();
    const navigate = useNavigate();
    const { data } = useCurrentQuery();
    const user = useSelector(selectUser);
    const [isError, setIsError] = useState<boolean>(false);
    const [isFormSubmit, setIsFormSubmit] = useState<boolean>(false);

    useEffect(() => {
        if (user) {
            navigate(MainPageRoles[user.role] || '/');
        }
    }, [user, navigate]);
    const validateForm = (data: { login: string; password: string }) => {
        if (!data.password.trim() || !data.login.trim()) {
            setIsFormSubmit(true);
        }
        setIsFormSubmit(false);
    };

    const login = async (event: FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const dataUser = {
            login: formData.get('login') as string,
            password: formData.get('password') as string,
        };
        validateForm(dataUser);
        if (!isFormSubmit) {
            try {
                await loginUser(dataUser).unwrap();
                if (data) {
                    navigate(MainPageRoles[data.role] || '/');
                }
            } catch (err) {
                if ((err as Error).originalStatus === 400) {
                    setIsError(true);
                    setIsFormSubmit(true);
                } else {
                    console.log(err);
                }
            }
        }
    };

    return (
        <Box sx={boxStyles}>
            <h1>Вход</h1>
            <p>
                Для входа в систему введите
                <br /> логин и пароль
            </p>
            <form className={styles.login} onSubmit={login}>
                <CustomInput
                    placeholder='Логин'
                    name='login'
                    requare={true}
                    errors={isFormSubmit}
                ></CustomInput>
                <CustomInput
                    placeholder='Пароль'
                    name='password'
                    type='password'
                    requare={true}
                    errors={isFormSubmit}
                ></CustomInput>
                {isError ? (
                    <p style={{ color: 'red' }}>Неверный логин или пароль</p>
                ) : null}
                <Button
                    bg='#314659'
                    p='1.5'
                    color='#fff'
                    borderRadius='2px'
                    _hover={{ bg: '#24323E' }}
                    type='submit'
                >
                    Войти
                </Button>
            </form>
        </Box>
    );
};
export default Login;
