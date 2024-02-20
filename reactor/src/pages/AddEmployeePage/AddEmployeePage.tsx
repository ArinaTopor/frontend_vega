import { useState } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import FillingForm from '../../components/AddEmployeeForm';
import { boxStyle,activeChoiceStyle, choiceStyle } from './style';

const AddEmployeePage = () => {
    const [isAdmin, setIsAdmin] = useState(true);

    function handlerClick(e: React.FormEvent) {
        const { target } = e;
        const value = (target as HTMLButtonElement).value;
        setIsAdmin(value === 'admin');
    }

    return (
        <Flex
            height='100vh'
            display='flex'
            alignItems='center'
            justify='center'
            flexGrow='1'
            background='var(--auth-background)'
        >
            <Box sx={boxStyle}>
                <Flex mb='1.9vh'>
                    <Button
                        sx={isAdmin ? activeChoiceStyle : choiceStyle}
                        value='admin'
                        onClick={(e) => handlerClick(e)}
                    >
                        Начальник
                    </Button>
                    <Button
                        sx={!isAdmin ? activeChoiceStyle : choiceStyle}
                        value='worker'
                        onClick={(e) => handlerClick(e)}
                    >
                        Новый работник
                    </Button>
                </Flex>
                <FillingForm isAdmin={isAdmin} />
            </Box>
        </Flex>
    );
};

export default AddEmployeePage;
