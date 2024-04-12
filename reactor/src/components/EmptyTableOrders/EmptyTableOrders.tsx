import emptyBox from '../../assets/icons/empty-box.svg'
import { Flex, Image, Typography } from 'antd';
import style from './EmptyTableOrders.module.css'

export function EmptyTableOrders(){
	return(
		<Flex className={style.emptyOrders} vertical>
			<Image src={emptyBox} preview={false}/>
			<Typography.Text className={style.text}>Заказов пока нет...</Typography.Text>
			<Typography.Text className={style.text}>Создайте новый заказ!</Typography.Text>
		</Flex>

	)
}