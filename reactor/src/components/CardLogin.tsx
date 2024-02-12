import { Box, Button, Modal } from '@chakra-ui/react';
import { boxStyles } from './Login/Login';

interface CardLoginProps {
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardLogin: React.FC<CardLoginProps> = ({ setIsVisible }) => {
    return (
        <Box sx={boxStyles} gap={'1.25vw'}>
            <h1>Вход</h1>
            <p>Приложите карту для входа в систему</p>
            <Button variant={'brand'} onClick={() => setIsVisible(false)}>
                Войти через логин
            </Button>
        </Box>
    );
};

export { CardLogin };
