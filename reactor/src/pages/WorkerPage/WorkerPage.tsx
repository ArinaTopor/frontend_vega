import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import {Flex, Image, Typography } from 'antd';
import styles from './WorkerPage.module.css'
import { TableWorker } from '../../components/TableWorker/TableWorker';
import { Calendar } from '../../components/Calendar/Calendar';
import srcExit from '../../assets/icons/exit.svg'
import { Clock } from '../../components/Clock/Clock';


export const WorkerPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };
    return (
        <Flex vertical>
            <Flex className={styles.wrapper} vertical gap='56px'>
                <Flex className={styles.title} gap='18px'>
                    <Typography.Text className={styles.title_text}>
                        801
                    </Typography.Text>
                    <Typography.Text className={styles.title_text}>
                        Участок лазерной резки
                    </Typography.Text>
                </Flex>
                <Flex className={styles.main} gap='54px'>
                    <TableWorker/>
                    <Calendar/>
                </Flex>
            </Flex>
            <Flex gap='26px' onClick={handleLogout} align='center' className={styles.btnExit}>
                <Image src={srcExit} preview={false}/>
                <Typography.Text className={styles.btnText}>выход</Typography.Text>
            </Flex>
            <Flex className={styles.footer} align='center' justify='space-between'>
                <Typography.Text className={styles.name}>Ольга В.</Typography.Text>
                <Clock/>
            </Flex>
        </Flex>
    );
};

