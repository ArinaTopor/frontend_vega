import { EmptyTableOrders } from '../../components/EmptyTableOrders/EmptyTableOrders';
import plus from '../../assets/icons/plus.svg';
import { useState } from 'react';
import { Button, Flex, Popover, Typography, Image } from 'antd';
import style from './WaitingList.module.css';
import { ModalAddOrder } from '../../components/modal/ModalAddOrder/ModalAddOrder';
import TableOrders from '../../components/tables/TableOrders';
import OrderStatistics from '../../components/stat';
import { useGetStatQuery } from '../../app/services/orders';

export function WaitingList() {
	const [open, setOpen] = useState(false);
	const {data: dataStat} = useGetStatQuery();
	const getDate = () => {
		const currentDate = new Date();
		const stringDate: string = `${String(currentDate.getDate()).padStart(
			2,
			'0'
		)}.${String(currentDate.getMonth() + 1).padStart(
			2,
			'0'
		)}.${currentDate.getFullYear()}`;
		return stringDate;
	};

	return (
		<Flex className={style.page}>
			<Typography.Text className={style.date}>
				{getDate()}
			</Typography.Text>
			{
				dataStat ? <TableOrders/> : <EmptyTableOrders/>
			}
			<Popover
				placement="leftTop"
				trigger="hover"
				content={
					<Flex
						align="center"
						justify="center"
						className={style.popover}
					>
						Создать новый заказ
					</Flex>
				}
			>
				<Button
					className={style.buttonPlus}
					onClick={() => setOpen(true)}
				>
					<Image src={plus} preview={false} />
				</Button>
			</Popover>
			<ModalAddOrder open={open} setOpen={setOpen}/>
			{
				dataStat && <OrderStatistics stat={dataStat}/>
			}
		</Flex>
	);
}
