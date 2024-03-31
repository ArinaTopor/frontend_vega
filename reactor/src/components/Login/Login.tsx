import { useEffect, useState } from 'react';
import { CustomInput } from '../custom-input/LoginInput';
import {
    LoginData,
    useCurrentQuery,
    useLoginMutation,
} from '../../app/services/auth';
import { Error } from '../../utils/Error';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/auth/authSlice';
import { MainPageRoles } from '../../paths';
import { Button, Flex, Form } from 'antd';
import styles from './Login.module.css';

const Login = () => {
    const [loginUser, { isLoading }] = useLoginMutation();
    const navigate = useNavigate();
    const { data, refetch } = useCurrentQuery();
    const user = useSelector(selectUser);
    console.log(user);
    const [isError, setIsErrors] = useState<boolean>(false);

    useEffect(() => {
        if (user) {
            navigate(MainPageRoles.admin);
        }
    }, [user, navigate]);

    const handleAuth = async (data: LoginData) => {
        try {
            await loginUser(data).unwrap();
            refetch();
        } catch (err) {
            if ((err as Error).originalStatus === 401) {
                setIsErrors(true);
            } else {
                console.log(err);
            }
        }
    };

    return (
        <Flex className={styles.login_wrapper} vertical>
            <h1>Вход</h1>
            <p>
                Для входа в систему введите
                <br /> логин и пароль
            </p>
            <Form className={styles.login} onFinish={handleAuth}>
                <CustomInput placeholder='Логин' name='login'></CustomInput>
                <CustomInput
                    placeholder='Пароль'
                    name='password'
                    type='password'
                ></CustomInput>
                {isError ? (
                    <p style={{ color: 'red', marginBottom: '2vh' }}>
                        Неверный логин или пароль
                    </p>
                ) : null}
                <Button
                    type='primary'
                    className={styles['ant-btn']}
                    htmlType='submit'
                    loading={isLoading}
                    disabled={isLoading}
                >
                    <div>
                        <p>Войти</p>
                    </div>
                </Button>
            </Form>
        </Flex>
    );
};
export default Login;
