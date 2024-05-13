import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import {Flex, Image, Typography } from 'antd';
import styles from './WorkerPage.module.css'
import { TableWorker } from '../../components/TableWorker/TableWorker';
import { CalendarCustom } from '../../components/CalendarCustom/CalendarCustom';
import srcExit from '../../assets/icons/exit.svg'


export const WorkerPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };
    return (
        <Flex vertical className={styles.wrapper}>
            <Flex className={styles.wrapper_body} vertical gap='2.9vw'>
                <Flex className={styles.title} gap='0.9vw'>
                    <Typography.Text className={styles.title_text}>
                        801
                    </Typography.Text>
                    <Typography.Text className={styles.title_text}>
                        Участок лазерной резки
                    </Typography.Text>
                </Flex>
                <Flex className={styles.main} gap='2.8vw'>
                    <TableWorker/>
                    <CalendarCustom/>
                </Flex>
            </Flex>
            <Flex gap='1.4vw' onClick={handleLogout} align='center' className={styles.btnExit}>
                <Image src={srcExit} preview={false} className={styles.image}/>
                <Typography.Text className={styles.btnText}>выход</Typography.Text>
            </Flex>
            <Flex className={styles.footer} align='center' justify='space-between'>
                <Typography.Text className={styles.name}>Ольга В.</Typography.Text>
                <Typography.Text className={styles.time}>14:30</Typography.Text>
            </Flex>
        </Flex>
    );
};

