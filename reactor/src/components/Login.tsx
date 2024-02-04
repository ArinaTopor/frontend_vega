import { FormEvent, useEffect, useState } from 'react';
import { Box, Button, Checkbox, Flex, FormControl } from '@chakra-ui/react';
import styles from './Login.module.css';
import { CustomInput } from './custom-input';
import { useLoginMutation } from '../app/services/auth';
import { isErrorWithMessage } from '../utils/is-error-with-msg';
import { useNavigate } from 'react-router';
import { ErrorWithMessage } from '../types';
import { useSelector } from 'react-redux';
import {
    selectIsAuthenticated,
    selectToken,
    selectUser,
} from '../features/auth/authSlice';

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
    const [loginUser, { isError, error }] = useLoginMutation();
    console.log(error);
    const tok = useSelector(selectToken);
    const navigate = useNavigate();
    const isAuth = useSelector(selectIsAuthenticated);
    const user = useSelector(selectUser);

    useEffect(() => {
        if (user) {
            navigate('/home');
        }
    }, [user, navigate]);

    const login = async (event: FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const data = {
            login: formData.get('login') as string,
            password: formData.get('password') as string,
        };
        try {
            await loginUser(data).unwrap();
            navigate('/home');
        } catch (err) {
            console.log(error);
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
                ></CustomInput>
                <CustomInput
                    placeholder='Пароль'
                    name='password'
                    type='password'
                    requare={true}
                ></CustomInput>
                <FormControl>
                    <Checkbox
                        _checked={{
                            '& .chakra-checkbox__control': {
                                background: '#314659',
                                borderColor: '#314659',
                            },
                        }}
                        _hover={{
                            '& .chakra-checkbox__control': {
                                backgroundColor: '#24323E',
                                borderColor: '#24323E',
                            },
                        }}
                    >
                        Запомнить пользователя
                    </Checkbox>
                </FormControl>
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
