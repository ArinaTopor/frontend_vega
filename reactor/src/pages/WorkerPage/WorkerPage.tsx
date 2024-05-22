import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import { Calendar, Flex, Image, Typography } from 'antd';
import styles from './WorkerPage.module.css';
import { TableWorker } from '../../components/TableWorker/TableWorker';
import srcExit from '../../assets/icons/exit.svg';
import { Clock } from '../../components/Clock/Clock';

export const WorkerPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(logout());
		navigate('/');
	};
	return (
		<Flex vertical className={styles.wrapper}>
			<Flex className={styles.wrapper_body} vertical gap="2.9vw">
				<Flex className={styles.title} gap="0.9vw">
					<Typography.Text className={styles.title_text}>
						801
					</Typography.Text>
					<Typography.Text className={styles.title_text}>
						Участок лазерной резки
					</Typography.Text>
				</Flex>
				<Flex className={styles.main} gap="2.8vw">
					<TableWorker />
					<div className={styles.wrapperCalendar}>
						<Calendar fullscreen={false} />
					</div>
				</Flex>
			</Flex>
			<Flex
				gap="1.4vw"
				onClick={handleLogout}
				align="center"
				className={styles.btnExit}
			>
				<Image src={srcExit} preview={false} className={styles.image} />
				<Typography.Text className={styles.btnText}>
					выход
				</Typography.Text>
			</Flex>
			<Flex
				className={styles.footer}
				align="center"
				justify="space-between"
			>
				<Typography.Text className={styles.name}>
					Ольга В.
				</Typography.Text>
				<Clock />
			</Flex>
		</Flex>
	);
};
