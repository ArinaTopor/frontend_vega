import { Box, Button, Checkbox, Flex } from '@chakra-ui/react';
import { FormControl, Input } from '@chakra-ui/react';
import styles from './Login.module.css';
const boxStyles = {
    display: 'flex',
    flexDirection: 'column',
    bg: '#fff',
    p: '50px',
    m: 'auto',
    width: '595px',
    textAlign: 'center',
};
const InputStyles = {
    size: 'sm',
    borderRadius: '2px',
    _focus: {
        borderColor: '#314659',
    },
};
const Login = () => {
    return (
        <Box sx={boxStyles}>
            <h1>Вход</h1>
            <p>
                Для входа в систему введите
                <br /> логин и пароль
            </p>
            <form className={styles.login}>
                <FormControl>
                    <Input
                        placeholder="Логин"
                        sx={InputStyles}
                        focusBorderColor="#314659"
                    ></Input>
                </FormControl>
                <FormControl>
                    <Input
                        placeholder="Пароль"
                        sx={InputStyles}
                        focusBorderColor="#314659"
                    ></Input>
                </FormControl>
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
                    bg="#314659"
                    p="1.5"
                    color="#fff"
                    borderRadius="2px"
                    _hover={{ bg: '#24323E' }}
                >
                    Войти
                </Button>
            </form>
        </Box>
    );
};
export default Login;
