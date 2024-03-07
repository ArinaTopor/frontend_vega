import { Orders } from '../../components/Orders/Orders';
import plus from '../../assets/icons/plus.svg';
import { NewOrderForm } from '../../components/NewOrderForm/NewOrderForm';
import { useState } from 'react';
import { Button, Flex, Popover, Typography, Image, Modal } from 'antd';
import style from './WaitingList.module.css';

export function WaitingList() {
	const [open, setOpen] = useState(false);
	const [isClear, setIsClear] = useState(true);
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

	const clearForm=()=>{
		setIsClear((last)=>!last)
	}

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
			<Modal
				width="46.6vw"
				open={open}
				footer={false}
				onCancel={() => setOpen(false)}
				className={style.modal}
				centered
				maskClosable={false}
				afterClose={clearForm}
			>
				<Typography.Text className={style.titleModal}>Новый заказ</Typography.Text>
				<NewOrderForm isClear={isClear}/>
			</Modal>
		</Flex>
	);
}
