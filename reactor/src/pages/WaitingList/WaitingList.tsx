import { Orders } from '../../components/Orders/Orders';
import plus from '../../assets/icons/plus.svg';
import { useState } from 'react';
import { Button, Flex, Popover, Typography, Image } from 'antd';
import style from './WaitingList.module.css';
import { ModalAddOrder } from '../../components/modal/ModalAddOrder/ModalAddOrder';
import { ModalAddDocuments } from '../../components/modal/ModalAddDocuments/ModalAddDocuments';

export function WaitingList() {
	const [open, setOpen] = useState(false);
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
			<Orders />
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
			<ModalAddDocuments open={open} setOpen={setOpen}/>
		</Flex>
	);
}
