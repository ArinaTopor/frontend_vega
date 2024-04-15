import { Card, Flex, Typography } from 'antd';
import styles from './stat.module.css';
import { CommonResponse } from '../app/services/orders';

type Props = {
	stat: CommonResponse;
};

type TypeNameStage = {
	[key: string]: string;
};

const NameStage: TypeNameStage = {
	total: 'Всего',
	onEntry: 'Входные данные и тд.',
	onTIDev: 'Технические данные и тд.',
	onDDDev: 'Разработка КД',
	onIDPPSDev: 'Разработка ИДП и ПС',
	onApproval: 'Согласование КД в АЭП',
	onSupply: 'Отдел снабжения',
	onStorage: 'Склад',
	completed: 'Готов',
};

const OrderStatistics = ({ stat }: Props) => {
	console.log(stat);
	return (
		<Flex vertical className={styles.wrapper}>
			<Typography.Text className={styles.title}>
				СТАТИСТИКА ЗАКАЗОВ
			</Typography.Text>
			<Flex
				style={{
					background: '#d9d9d9',
					width: '18.5vw',
					borderRadius: '11px',
					padding: '0.6vw 0',
					marginBottom: '216px',
				}}
			>
				<Flex className={styles.stat_container}>
					{Object.keys(stat).map((key) => (
						<Card className={styles.stat_card}>
							<Flex vertical gap="6px">
								<Typography.Text className={styles.number}>
									{stat[key]}
								</Typography.Text>
								<Typography.Text className={styles.text}>
									{NameStage[key]}
								</Typography.Text>
							</Flex>
						</Card>
					))}
				</Flex>
			</Flex>
		</Flex>
	);
};

export default OrderStatistics;
