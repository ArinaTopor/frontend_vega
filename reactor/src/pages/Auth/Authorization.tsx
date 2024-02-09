import Login from '../../components/Login/Login';
import { Flex } from '@chakra-ui/react';
const Authorization = () => {
    return (
        <Flex
            height='100vh'
            display='flex'
            alignItems='center'
            background='var(--auth-background)'
        >
            <Login></Login>
        </Flex>
    );
};

export default Authorization;
