import emptyBox from '../../assets/icons/empty-box.svg'
import { Flex, Image, Typography } from 'antd';
import style from './Orders.module.css'

export function Orders(){
	const orders:string[]=[]
	return(
		<Flex>
			{orders.length!==0?
			<Typography.Text>Заказы</Typography.Text>
			:
			<Flex className={style.emptyOrders} vertical>
				<Image src={emptyBox} preview={false}/>
				<Typography.Text className={style.text}>Заказов пока нет...</Typography.Text>
				<Typography.Text className={style.text}>Создайте новый заказ!</Typography.Text>
			</Flex>
			}
		</Flex>
	)
}