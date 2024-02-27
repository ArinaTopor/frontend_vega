import Login from '../../components/Login/Login';
import { Flex } from 'antd';
const Authorization = () => {
    return (
        <Flex
            style={{
                height: '100vh',
                background: 'var(--auth-background)',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Login></Login>
        </Flex>
    );
};

export default Authorization;
