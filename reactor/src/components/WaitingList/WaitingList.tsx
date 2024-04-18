import emptyBox from '../../assets/icons/empty-box.svg'
import { Flex, Image, Typography } from 'antd';
import styles from './WaitingList.module.css'

export function WaitingList(){
	return(
		<Flex className={styles.emptyOrders} vertical>
			<Image src={emptyBox} preview={false}/>
			<Typography.Text className={styles.text}>Заказов пока нет...</Typography.Text>
			<Typography.Text className={styles.text}>Создайте новый заказ!</Typography.Text>
		</Flex>

	)
}