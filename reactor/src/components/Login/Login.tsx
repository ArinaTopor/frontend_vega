import { useEffect, useState } from 'react';
import { CustomInput } from '../custom-input/LoginInput';
import {
    UserData,
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
    const [isError, setIsErrors] = useState<boolean>(false);

    console.log(user);
    useEffect(() => {
        if (user) {
            navigate(MainPageRoles[user.role] || '/');
        }
    }, [user, navigate]);

    const handleAuth = async (data: UserData) => {
        try {
            await loginUser(data).unwrap();
            refetch();
        } catch (err) {
            if ((err as Error).originalStatus === 400) {
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
                    <p style={{ color: 'red' }}>Неверный логин или пароль</p>
                ) : null}
                <Button
                    type='primary'
                    className={styles['ant-btn']}
                    htmlType='submit'
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
