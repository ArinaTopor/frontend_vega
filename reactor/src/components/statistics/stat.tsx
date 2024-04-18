import { Card, Flex, Typography } from 'antd';
import styles from './stat.module.css';
import { CommonResponse } from '../../utils/CommonResponse';
import { NameStage } from '../../constans/stageData';


type Props = {
	stat: CommonResponse;
};

const OrderStatistics = ({ stat }: Props) => {
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
						<Card key={key} className={styles.stat_card}>
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