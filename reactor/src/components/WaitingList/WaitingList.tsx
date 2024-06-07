import emptyBox from '../../assets/icons/empty-box.svg'
import emptyDirect from '../../assets/icons/emptyDirect.png'
import { Flex, Image, Typography } from 'antd';
import styles from './WaitingList.module.css'

type Props={
	place: string
}

export function WaitingList({place}:Props){
	return(
		<Flex className={styles.emptyOrders} vertical>
			<Image src={place === 'production' ? emptyDirect : emptyBox} preview={false}/>
			<Typography.Text className={styles.text}>Заказов пока нет...</Typography.Text>
			{place === 'production' && <Typography.Text className={styles.text}>Создайте новый заказ!</Typography.Text>}
		</Flex>

	)
}