import { Button, Modal, Radio, RadioChangeEvent, Typography } from 'antd';
import { useState } from 'react';
import styles from './ModalAddProductionOrder.module.css';

type Props = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const arr = [
	{
		name: '30SAM46AH501',
		id: 1,
	},
	{
		name: '30SAM46AH502',
		id: 2,
	},
	{
		name: '30SAM46AH503',
		id: 3,
	},
	{
		name: '30SAM46AH503',
		id: 4,
	},
 
];
export const ModalAddProductionOrder = ({ open, setOpen }: Props) => {
	const [selectOrder, setSelectOrder] = useState();
	const handleClick = (e: RadioChangeEvent) => {
		setSelectOrder(e.target.value);
	};
	return (
		<Modal
			width="62.5vw"
			open={open}
			footer={false}
			onCancel={() => setOpen(false)}
			centered
			maskClosable={false}
		>
			<Typography.Text className={styles.title}>Название</Typography.Text>
			<Radio.Group
				onChange={(e) => handleClick(e)}
				value={selectOrder}
				className={styles.group}
			>
				{arr.map((order) => (
					<Radio
						className={
							selectOrder === order.id
								? styles.radio_active
								: styles.radio
						}
						value={order.id}
					>
						{order.name}
					</Radio>
				))}
			</Radio.Group>
			<Button
				className={styles.buttonSave}
				onClick={()=> console.log(selectOrder)}
			>
				Выбрать
			</Button>
		</Modal>
	);
};
