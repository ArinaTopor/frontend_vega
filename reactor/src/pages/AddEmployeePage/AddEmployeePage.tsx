import { useState } from 'react';
import AddEmployeeForm from '../../components/forms/AddEmployeeForm/AddEmployeeForm';
import { Button, Flex} from 'antd';
import style from './AddEmployeePage.module.css'

const AddEmployeePage = () => {
    const [isAdmin, setIsAdmin] = useState(true);

    return (
        <Flex align='center' justify='center' className={style.wrapper}>
            <Flex vertical className={style.window}>
                <Flex className={style.choice}>
                    <Button
                        className={isAdmin ? style.activeChoiceStyle : style.choiceStyle}
                        value='admin'
                        onClick={() => setIsAdmin(true)}
                        type='text'
                    >
                        Начальник
                    </Button>
                    <Button
                        className={!isAdmin ? style.activeChoiceStyle : style.choiceStyle}
                        value='worker'
                        onClick={() => setIsAdmin(false)}
                        type='text'
                    >
                        Новый работник
                    </Button>
                </Flex>
                <AddEmployeeForm isAdmin={isAdmin} />
            </Flex>
        </Flex>
    );
};

export default AddEmployeePage;
