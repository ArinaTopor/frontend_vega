import { Flex, Image } from 'antd';
import styles from './CardTableWorker.module.css';
import srcUser from '../../assets/image/user.png';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { InitialState, selectOrdersWorker, update } from '../../features/ordersWorkerSlice';
import { Draggable } from 'react-beautiful-dnd';

type Props = {
	id: number;
	name: string;
	index:number
	table: InitialState
};

export const CardTableWorker = ({ id, name, index, table }: Props) => {
	const tableInfo = table;
	const [currentCard, setCurrentCard] = useState(
		tableInfo[name].cards.find((card) => card.id === id)
	);

	return (
		<Draggable draggableId={String(id)} index={index}>
			{(provided) => (
				<Flex className={styles.card} vertical gap="0.78vw" {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
					<Flex justify="center">
						{name === 'process' || name === 'ready' ? (
							<Image
								src={srcUser}
								preview={false}
								className={styles.image}
							/>
						) : (
							''
						)}
					</Flex>
					{currentCard?.name}
				</Flex>
			)}
		</Draggable>
	);
};
